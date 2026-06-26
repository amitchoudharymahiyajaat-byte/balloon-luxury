"use client";

import { useEffect, useState } from "react";
import {
  trackPopupSubmit,
  trackWhatsAppClick,
} from "../../lib/tracking";
import EnquiryForm from "../shared/EnquiryForm";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.body.dataset.exitIntentPopupOpen === "true") return;
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.dataset.bookingPopupOpen = "true";

    return () => {
      delete document.body.dataset.bookingPopupOpen;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-4 backdrop-blur-sm sm:py-6">
      <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-[28px] bg-white p-6 shadow-2xl sm:max-h-[90vh] md:p-8">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 text-2xl text-gray-400 transition hover:text-black"
          aria-label="Close booking popup"
        >
          x
        </button>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            Quick Booking
          </p>

          <h2
            className="mt-3 text-3xl font-black md:text-5xl"
            style={{
              background:
                "linear-gradient(90deg, #ff6b6b 0%, #ffa500 25%, #4ecdc4 50%, #ff1493 75%, #9d4edd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Plan Your Celebration
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Fill your details and get an instant balloon decoration quotation.
          </p>
        </div>

        <div className="mt-6">
          <EnquiryForm
            page="Quick Booking Popup"
            trackingSource="booking_popup"
            submitLabel="Send Enquiry on WhatsApp"
            className="space-y-3"
            onValidSubmit={() => {
              trackPopupSubmit("booking_popup");
              trackWhatsAppClick("booking_popup_submit");
            }}
          />
        </div>
      </div>
    </div>
  );
}
