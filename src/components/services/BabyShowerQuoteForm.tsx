"use client";

import { createWhatsAppUrl } from "../../lib/business";
import { FormEvent } from "react";
import { cities } from "../../lib/seo";
import {
  trackBookingClick,
  trackPopupSubmit,
  trackWhatsAppClick,
} from "../../lib/tracking";

type BabyShowerQuoteFormProps = {
  cityName?: string;
};

const fieldClassName =
  "w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100";

const selectClassName = `${fieldClassName} [&_option]:bg-white [&_option]:text-gray-900`;

export default function BabyShowerQuoteForm({
  cityName,
}: BabyShowerQuoteFormProps) {
  const defaultCity = cityName ?? "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = `Baby Shower & Welcome Baby Decoration Quote Request

Name: ${formData.get("name")}
Phone: ${formData.get("phone")}
Date: ${formData.get("date")}
Budget: ${formData.get("budget")}
City: ${formData.get("city")}
Message: ${formData.get("message")}`;

    trackPopupSubmit("baby_shower_decoration_page");
    trackBookingClick("baby_shower_decoration_page");
    trackWhatsAppClick("baby_shower_decoration_quote");

    window.open(
      createWhatsAppUrl(message),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        className={fieldClassName}
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        required
        className={fieldClassName}
      />

      <input
        name="date"
        type="date"
        required
        className={fieldClassName}
      />

      <select name="budget" required className={selectClassName}>
        <option value="">Budget</option>
        <option>Starting from Rs. 2,999</option>
        <option>Rs. 5,000 - Rs. 10,000</option>
        <option>Rs. 10,000 - Rs. 20,000</option>
        <option>Luxury Welcome Baby Setup Rs. 20,000+</option>
      </select>

      <select
        name="city"
        required
        defaultValue={defaultCity}
        className={selectClassName}
      >
        <option value="">City</option>
        {cities.map((city) => (
          <option key={city.slug} value={city.name}>
            {city.name}
          </option>
        ))}
        {cityName && !cities.some((city) => city.name === cityName) ? (
          <option value={cityName}>{cityName}</option>
        ) : null}
      </select>

      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className={`${fieldClassName} resize-none sm:col-span-2`}
      />

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-900/15 transition hover:scale-[1.02] hover:shadow-xl"
        >
          Request Quote
        </button>

        <a
          href={createWhatsAppUrl("Hi, I want baby shower and welcome baby decoration details")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("baby_shower_decoration_contact")}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-purple-200 hover:bg-purple-50"
        >
          WhatsApp
        </a>
      </div>
    </form>
  );
}
