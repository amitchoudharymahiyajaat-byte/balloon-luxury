"use client";

import {
  trackBookingClick,
  trackCallClick,
  trackWhatsAppClick,
} from "../../lib/tracking";
import { businessConfig } from "../../lib/business";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";

export default function StickyButtons() {
  return (
    <div className="fixed bottom-2 left-2 z-50 w-[calc(100svw-1rem)] max-w-[374px] overflow-hidden rounded-[26px] border border-black/10 bg-white/90 p-2 shadow-[0_18px_48px_rgba(15,23,42,0.22)] backdrop-blur-xl md:hidden">
      <div className="pb-[env(safe-area-inset-bottom)]">
        <div className="flex gap-1.5">
          <a
            href={businessConfig.telHref}
            onClick={() => trackCallClick("sticky_buttons_call")}
            className="group flex min-h-12 min-w-0 flex-1 basis-0 items-center justify-center gap-1 rounded-2xl border border-white/10 bg-neutral-950 px-1.5 py-3 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 active:scale-[0.97] active:bg-neutral-800 sm:text-sm"
          >
            <span className="text-sm leading-none transition duration-200 group-active:scale-110 sm:text-base">
              {"\u260E"}
            </span>
            <span className="min-w-0 truncate">Call</span>
          </a>

          <a
            href={createWhatsAppUrl(buildPageWhatsAppMessage({ page: "home" }))}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("sticky_buttons_whatsapp")}
            className="group flex min-h-12 min-w-0 flex-1 basis-0 items-center justify-center gap-1 rounded-2xl border border-emerald-300/30 bg-gradient-to-b from-emerald-500 to-green-600 px-1.5 py-3 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(22,163,74,0.28)] transition duration-200 hover:-translate-y-0.5 active:scale-[0.97] active:brightness-110 sm:text-sm"
          >
            <span className="text-sm leading-none transition duration-200 group-active:scale-110 sm:text-base">
              {"\u{1F4AC}"}
            </span>
            <span className="min-w-0 truncate">WhatsApp</span>
          </a>

          <a
            href={createWhatsAppUrl(
              buildPageWhatsAppMessage({
                page: "general",
                message: "I want to book decoration for an upcoming event.",
              }),
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsAppClick("sticky_buttons_book_now");
              trackBookingClick("sticky_buttons_book_now");
            }}
            className="group flex min-h-12 min-w-0 flex-1 basis-0 items-center justify-center gap-1 rounded-2xl border border-yellow-300/50 bg-gradient-to-b from-yellow-300 via-amber-400 to-yellow-600 px-1.5 py-3 text-[11px] font-extrabold text-black shadow-[0_8px_20px_rgba(217,119,6,0.3)] transition duration-200 hover:-translate-y-0.5 active:scale-[0.97] active:brightness-105 sm:text-sm"
          >
            <span className="text-sm leading-none transition duration-200 group-active:scale-110 sm:text-base">
              {"\u{1F388}"}
            </span>
            <span className="min-w-0 truncate">Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
