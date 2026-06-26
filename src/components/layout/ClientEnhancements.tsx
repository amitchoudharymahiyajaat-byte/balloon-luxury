"use client";

import dynamic from "next/dynamic";

const BookingPopup = dynamic(() => import("./BookingPopup"), { ssr: false });
const StickyButtons = dynamic(() => import("./StickyButtons"), { ssr: false });
const FloatingWhatsApp = dynamic(() => import("./FloatingWhatsApp"), {
  ssr: false,
});
const ExitIntentPopup = dynamic(() => import("./ExitIntentPopup"), {
  ssr: false,
});
const AnalyticsManager = dynamic(() => import("./AnalyticsManager"), {
  ssr: false,
});
const CookieConsent = dynamic(() => import("./CookieConsent"), {
  ssr: false,
});

export default function ClientEnhancements() {
  return (
    <>
      <AnalyticsManager />
      <BookingPopup />
      <StickyButtons />
      <FloatingWhatsApp />
      <ExitIntentPopup />
      <CookieConsent />
    </>
  );
}
