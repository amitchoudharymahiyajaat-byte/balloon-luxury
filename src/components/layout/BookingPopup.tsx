"use client";

import { useEffect, useState } from "react";
import {
  trackPopupSubmit,
  trackWhatsAppClick,
} from "../../lib/tracking";
import { cities } from "../../lib/seo";

export default function BookingPopup() {
  const [open, setOpen] = useState(false);
  const fieldClassName =
    "w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500";
  const selectClassName = `${fieldClassName} [&_option]:bg-white [&_option]:text-gray-900`;

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

        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            trackPopupSubmit("booking_popup");
            trackWhatsAppClick("booking_popup_submit");

            const formData = new FormData(e.currentTarget);
            const name = formData.get("name");
            const phone = formData.get("phone");
            const city = formData.get("city");
            const event = formData.get("event");
            const budget = formData.get("budget");
            const date = formData.get("date");

            const message = `New Decoration Booking

Name: ${name}
Phone: ${phone}
City: ${city}
Event: ${event}
Budget: ${budget}
Date: ${date}`;

            window.open(
              `https://wa.me/919602060414?text=${encodeURIComponent(message)}`,
              "_blank"
            );
          }}
        >
          <input
            type="text"
            name="name"
            aria-label="Your name"
            placeholder="Your Name"
            required
            className={fieldClassName}
          />

          <input
            type="tel"
            name="phone"
            aria-label="Phone number"
            placeholder="Phone Number"
            required
            className={fieldClassName}
          />

          <select
            name="city"
            aria-label="Select city"
            required
            className={selectClassName}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.slug}>{city.name}</option>
            ))}
          </select>

          <select
            name="event"
            aria-label="Select event type"
            required
            className={selectClassName}
          >
            <option value="">Select Event Type</option>
            <option>Birthday Decoration</option>
            <option>Anniversary Decoration</option>
            <option>Baby Shower</option>
            <option>Proposal Setup</option>
            <option>Romantic Room Decoration</option>
          </select>

          <select
            name="budget"
            aria-label="Select budget"
            required
            className={selectClassName}
          >
            <option value="">Select Budget</option>
            <option>Under Rs. 2,000</option>
            <option>Rs. 2,000 - Rs. 5,000</option>
            <option>Rs. 5,000 - Rs. 10,000</option>
            <option>Rs. 10,000 - Rs. 20,000</option>
            <option>Luxury Setup Rs. 20,000+</option>
          </select>

          <input
            type="date"
            name="date"
            aria-label="Event date"
            required
            className={fieldClassName}
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02]"
          >
            Get Instant Quote on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
