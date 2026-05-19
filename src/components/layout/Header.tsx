"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>

      {/* TOP BAR */}
      <div className="border-b border-[#f3d9cf] bg-[#fff0e9] px-4 py-2 text-center text-xs font-medium text-[#7a4b3a] md:text-sm">
        🎈 Same Day Decoration Available In Jaipur • Delhi • Gurgaon • Mumbai
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

            <a href="#services" className="transition hover:text-black">
              Services
            </a>

            <a href="#gallery" className="transition hover:text-black">
              Gallery
            </a>

            <a href="#reviews" className="transition hover:text-black">
              Reviews
            </a>

            <a href="#faq" className="transition hover:text-black">
              FAQ
            </a>

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* BUTTON */}
            <a
              href="https://wa.me/919602060414"
              target="_blank"
              rel="noopener noreferrer"
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

              <a href="#services">Services</a>

              <a href="#gallery">Gallery</a>

              <a href="#reviews">Reviews</a>

              <a href="#faq">FAQ</a>

              <a
                href="https://wa.me/919602060414"
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