"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cities } from "../../lib/seo";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";
import { trackBookNowClick, trackCitySelected, trackWhatsAppClick } from "../../lib/tracking";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>

      {/* TOP BAR */}
      <div className="border-b border-[#f3d9cf] bg-[#fff0e9] px-4 py-2 text-center text-xs font-medium text-[#7a4b3a] md:text-sm">
        Same-day decoration subject to availability in supported Event Wala Dost cities
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div>

            <h1 className="text-2xl font-semibold tracking-wide text-black md:text-3xl">
              EWD
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Event Wala Dost
            </p>

          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">

            <Link href="/#services" className="transition hover:text-black">
              Services
            </Link>

            <Link href="/#gallery" className="transition hover:text-black">
              Gallery
            </Link>

            <Link href="/#reviews" className="transition hover:text-black">
              Reviews
            </Link>

            <Link href="/#faq" className="transition hover:text-black">
              FAQ
            </Link>

            <select
              onChange={(e) => {
                const val = (e.target as HTMLSelectElement).value;
                if (val) {
                  trackCitySelected(val, "header_desktop");
                  router.push(`/${val}`);
                }
              }}
              defaultValue=""
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-xl outline-none transition hover:border-yellow-400"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.slug} value={city.slug}>
                  {city.name}
                </option>
              ))}
            </select>

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* BUTTON */}
            <a
              href={createWhatsAppUrl(buildPageWhatsAppMessage({ page: "home" }))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick("header_book_now");
                trackBookNowClick("header_book_now");
              }}
              className="hidden rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-105 md:block"
            >
              Book Now
            </a>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 md:hidden"
            >
              ☰
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {open && (

          <div className="border-t border-black/5 bg-white px-6 py-6 md:hidden">

            <div className="flex flex-col gap-5 text-lg font-medium text-black">

              <Link href="/#services">Services</Link>

              <Link href="/#gallery">Gallery</Link>

              <Link href="/#reviews">Reviews</Link>

              <Link href="/#faq">FAQ</Link>

              <select
                onChange={(e) => {
                  const val = (e.target as HTMLSelectElement).value;
                  if (val) {
                    trackCitySelected(val, "header_mobile_menu");
                    router.push(`/${val}`);
                  }
                }}
                defaultValue=""
                className="rounded-full border border-black/10 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 outline-none"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.slug} value={city.slug}>
                    {city.name}
                  </option>
                ))}
              </select>

              <a
                href={createWhatsAppUrl(buildPageWhatsAppMessage({ page: "home" }))}
                onClick={() => {
                  trackWhatsAppClick("mobile_menu_book_now");
                  trackBookNowClick("mobile_menu_book_now");
                }}
                className="mt-3 rounded-full bg-black px-6 py-4 text-center text-white"
              >
                Book On WhatsApp
              </a>

            </div>

          </div>

        )}

      </header>

    </>
  );
}
