import { hasAnalyticsConsent, hasMarketingConsent } from "./consent";

export type TrackingEventName =
  | "whatsapp_click"
  | "call_click"
  | "book_now_click"
  | "lead_form_submit"
  | "city_selected"
  | "service_view"
  | "service_card_click"
  | "gallery_open"
  | "popup_submit";

export type TrackingParams = {
  page_path?: string;
  page_type?: string;
  city_slug?: string;
  service_slug?: string;
  article_slug?: string;
  button_location?: string;
  selector_location?: string;
  popup_type?: string;
  gallery_item?: string;
  form_location?: string;
};

type GtagFunction = (
  command: "event" | "config" | "consent" | "js",
  target: string | Date,
  params?: Record<string, string | boolean>,
) => void;

type FbqFunction = (
  command: "track" | "trackCustom" | "consent",
  eventName: string,
  params?: TrackingParams,
) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
    fbq?: FbqFunction;
    __ewdGtmLoaded?: boolean;
  }
}

const metaStandardEvents: Partial<Record<TrackingEventName, string>> = {
  lead_form_submit: "Lead",
  whatsapp_click: "Contact",
  call_click: "Contact",
};

function cleanParams(params: TrackingParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => Boolean(value)),
  ) as TrackingParams;
}

function currentPagePath() {
  if (typeof window === "undefined") return undefined;
  return window.location.pathname;
}

export function trackEvent(
  eventName: TrackingEventName,
  params: TrackingParams = {},
) {
  if (typeof window === "undefined") return;

  const eventParams = cleanParams({
    page_path: currentPagePath(),
    ...params,
  });

  if (hasAnalyticsConsent()) {
    if (window.__ewdGtmLoaded && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...eventParams });
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
  }

  if (hasMarketingConsent() && typeof window.fbq === "function") {
    const metaEventName = metaStandardEvents[eventName];

    if (metaEventName) {
      window.fbq("track", metaEventName, eventParams);
      return;
    }

    window.fbq("trackCustom", eventName, eventParams);
  }
}

export function trackPageView(params: TrackingParams = {}) {
  if (typeof window === "undefined") return;

  const eventParams = cleanParams({
    page_path: currentPagePath(),
    ...params,
  });

  if (hasAnalyticsConsent()) {
    if (window.__ewdGtmLoaded && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: "page_view", ...eventParams });
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", eventParams);
    }
  }

  if (hasMarketingConsent() && typeof window.fbq === "function") {
    window.fbq("track", "PageView", eventParams);
  }
}

export const trackWhatsAppClick = (
  buttonLocation?: string,
  params: TrackingParams = {},
) => {
  trackEvent("whatsapp_click", {
    ...params,
    button_location: buttonLocation,
  });
};

export const trackCallClick = (
  buttonLocation?: string,
  params: TrackingParams = {},
) => {
  trackEvent("call_click", {
    ...params,
    button_location: buttonLocation,
  });
};

export const trackBookNowClick = (
  buttonLocation?: string,
  params: TrackingParams = {},
) => {
  trackEvent("book_now_click", {
    ...params,
    button_location: buttonLocation,
  });
};

export const trackLeadFormSubmit = (
  formLocation?: string,
  params: TrackingParams = {},
) => {
  trackEvent("lead_form_submit", {
    ...params,
    form_location: formLocation,
  });
};

export const trackCitySelected = (
  citySlug: string,
  selectorLocation?: string,
) => {
  trackEvent("city_selected", {
    city_slug: citySlug,
    selector_location: selectorLocation,
  });
};

export const trackServiceView = (
  serviceSlug: string,
  params: TrackingParams = {},
) => {
  trackEvent("service_view", {
    ...params,
    service_slug: serviceSlug,
  });
};

export const trackServiceCardClick = (
  serviceSlug: string,
  params: TrackingParams = {},
) => {
  trackEvent("service_card_click", {
    ...params,
    service_slug: serviceSlug,
  });
};

export const trackGalleryOpen = (
  galleryItem: string,
  params: TrackingParams = {},
) => {
  trackEvent("gallery_open", {
    ...params,
    gallery_item: galleryItem,
  });
};

export const trackPopupSubmit = (
  popupType?: string,
  params: TrackingParams = {},
) => {
  trackEvent("popup_submit", {
    ...params,
    popup_type: popupType,
  });
};

export const trackBookingClick = trackBookNowClick;
export const trackExitOfferClaim = trackPopupSubmit;
