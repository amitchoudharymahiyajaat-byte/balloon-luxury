"use client";

import {
  trackBookingClick,
  trackCallClick,
  trackWhatsAppClick,
} from "../../lib/tracking";
import { businessConfig } from "../../lib/business";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";

export default function CTA({
  city = "major cities in India",
}: {
  city?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-12 sm:px-6 md:py-16 lg:py-20">

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 p-6 text-black shadow-lg sm:p-8 md:p-12">

        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-black/70">
            Book Your Decoration
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-black sm:text-4xl md:text-5xl">
            Make Your Celebration
            <br />
            Truly Unforgettable
          </h2>

          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-black/70">
            Premium balloon decoration services available with same day setup
            across {city}.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

            <a
              href={createWhatsAppUrl(
                buildPageWhatsAppMessage({
                  page: city === "major cities in India" ? "home" : "city",
                  city,
                }),
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick(`cta_whatsapp_${city}`);
                trackBookingClick(`cta_whatsapp_${city}`);
              }}
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
            >
              WhatsApp Now
            </a>

            <a
              href={businessConfig.telHref}
              onClick={() => trackCallClick(`cta_call_${city}`)}
              className="rounded-full border-2 border-black text-black px-4 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base font-semibold transition hover:bg-black hover:text-white"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
