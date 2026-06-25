type TrackingParams = {
  source?: string;
};

type GtagFunction = (
  command: "event",
  eventName: string,
  params?: Record<string, string>
) => void;

type FbqFunction = (
  command: "trackCustom",
  eventName: string,
  params?: Record<string, string>
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
    fbq?: FbqFunction;
  }
}

const trackEvent = (
  gaEventName: string,
  metaEventName: string,
  params: TrackingParams = {}
) => {
  if (typeof window === "undefined") return;

  const eventParams = {
    source: params.source ?? "unknown",
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", gaEventName, eventParams);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", metaEventName, eventParams);
  }
};

export const trackWhatsAppClick = (source?: string) => {
  trackEvent("whatsapp_click", "WhatsAppClick", { source });
};

export const trackCallClick = (source?: string) => {
  trackEvent("call_click", "CallClick", { source });
};

export const trackPopupSubmit = (source?: string) => {
  trackEvent("popup_submit", "PopupSubmit", { source });
};

export const trackBookingClick = (source?: string) => {
  trackEvent("booking_click", "BookingClick", { source });
};

export const trackExitOfferClaim = (source?: string) => {
  trackEvent("exit_offer_claim", "ExitOfferClaim", { source });
};
