"use client";

import { trackWhatsAppClick } from "../../lib/tracking";
import { createWhatsAppUrl } from "../../lib/business";

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating_whatsapp")}
      aria-label="Chat on WhatsApp"
      className="floating-whatsapp-button flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-2xl ring-1 ring-white/40 transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-green-600 active:scale-95"
    >
      <span aria-hidden="true">{"\u{1F4AC}"}</span>
    </a>
  );
}
