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

export default function ClientEnhancements() {
  return (
    <>
      <BookingPopup />
      <StickyButtons />
      <FloatingWhatsApp />
      <ExitIntentPopup />
    </>
  );
}
