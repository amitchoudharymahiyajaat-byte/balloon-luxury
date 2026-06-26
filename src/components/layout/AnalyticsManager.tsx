"use client";

import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { businessConfig } from "../../lib/business";
import {
  CONSENT_CHANGE_EVENT,
  type ConsentPreferences,
  getSavedConsent,
} from "../../lib/consent";
import { getServiceMedia } from "../../lib/cityMedia";
import { supportedCities } from "../../lib/seo";
import { trackPageView, trackServiceView } from "../../lib/tracking";

function isGaId(value: string | undefined) {
  return Boolean(value && /^G-[A-Z0-9]+$/i.test(value));
}

function isGtmId(value: string | undefined) {
  return Boolean(value && /^GTM-[A-Z0-9]+$/i.test(value));
}

function isMetaPixelId(value: string | undefined) {
  return Boolean(value && /^\d{5,}$/.test(value));
}

function pageContext(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0] ?? "";
  const secondSegment = segments[1] ?? "";
  const thirdSegment = segments[2] ?? "";
  const city = supportedCities.find((item) => item.slug === firstSegment);
  const serviceSlugs = new Set(getServiceMedia().map((item) => item.slug));

  if (firstSegment === "blog" && secondSegment) {
    return { page_type: "blog", article_slug: secondSegment };
  }

  if (firstSegment === "services" && secondSegment) {
    return { page_type: "service", service_slug: secondSegment };
  }

  if (city && secondSegment === "services" && thirdSegment) {
    return {
      page_type: "city-service",
      city_slug: city.slug,
      service_slug: thirdSegment,
    };
  }

  if (city) {
    return { page_type: "city", city_slug: city.slug };
  }

  if (pathname === "/") {
    return { page_type: "home" };
  }

  if (firstSegment === "contact-us") {
    return { page_type: "contact" };
  }

  if (firstSegment === "city") {
    return { page_type: "city-list" };
  }

  if (serviceSlugs.has(secondSegment)) {
    return { page_type: "service", service_slug: secondSegment };
  }

  return { page_type: "content" };
}

export default function AnalyticsManager() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<ConsentPreferences | null>(() =>
    getSavedConsent(),
  );
  const lastPageViewPathRef = useRef<string | null>(null);
  const serviceViewPathsRef = useRef(new Set<string>());
  const { gaId, gtmId, metaPixelId } = businessConfig.analytics;
  const canLoadGa = isGaId(gaId) && consent?.analytics === true;
  const canLoadGtm =
    isGtmId(gtmId) &&
    (consent?.analytics === true || consent?.marketing === true);
  const canLoadMeta = isMetaPixelId(metaPixelId) && consent?.marketing === true;
  const context = useMemo(() => pageContext(pathname), [pathname]);

  useEffect(() => {
    const handleConsentChange = (event: Event) => {
      const nextConsent =
        event instanceof CustomEvent
          ? (event.detail as ConsentPreferences)
          : getSavedConsent();

      setConsent(nextConsent);
      if (!nextConsent) return;

      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: nextConsent.analytics ? "granted" : "denied",
          ad_storage: nextConsent.marketing ? "granted" : "denied",
          ad_user_data: nextConsent.marketing ? "granted" : "denied",
          ad_personalization: nextConsent.marketing ? "granted" : "denied",
        });
      }

      if (typeof window.fbq === "function") {
        window.fbq("consent", nextConsent.marketing ? "grant" : "revoke");
      }
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);

    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (!consent) return;
    if (lastPageViewPathRef.current === pathname) return;
    if (!consent.analytics && !consent.marketing) return;

    lastPageViewPathRef.current = pathname;
    trackPageView(context);

    if (
      context.service_slug &&
      !serviceViewPathsRef.current.has(pathname)
    ) {
      serviceViewPathsRef.current.add(pathname);
      trackServiceView(context.service_slug, context);
    }
  }, [consent, context, pathname]);

  return (
    <>
      {canLoadGa ? (
        <>
          <Script
            id="ewd-ga4"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ewd-ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
              window.gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: '${consent?.marketing ? "granted" : "denied"}',
                ad_user_data: '${consent?.marketing ? "granted" : "denied"}',
                ad_personalization: '${consent?.marketing ? "granted" : "denied"}'
              });
              window.gtag('js', new Date());
              window.gtag('config', '${gaId}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}

      {canLoadGtm ? (
        <Script id="ewd-gtm" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            if (!window.__ewdGtmLoaded) {
              window.__ewdGtmLoaded = true;
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
                ewd_send_page_view: false
              });
              var firstScript = document.getElementsByTagName('script')[0];
              var gtmScript = document.createElement('script');
              gtmScript.async = true;
              gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmId}';
              firstScript.parentNode.insertBefore(gtmScript, firstScript);
            }
          `}
        </Script>
      ) : null}

      {canLoadMeta ? (
        <>
          <Script id="ewd-meta-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              window.fbq('consent', 'grant');
              window.fbq('init', '${metaPixelId}');
            `}
          </Script>
          <Script
            id="ewd-meta-pixel"
            src="https://connect.facebook.net/en_US/fbevents.js"
            strategy="afterInteractive"
          />
        </>
      ) : null}
    </>
  );
}
