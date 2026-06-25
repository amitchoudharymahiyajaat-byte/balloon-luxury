"use client";

import Link from "next/link";
import { trackCallClick, trackWhatsAppClick } from "../../lib/tracking";
import { cities } from "../../lib/seo";

const footerServices = [
  { href: "/services/birthday-decoration", label: "Birthday Decoration" },
  { href: "/services/anniversary-decoration", label: "Anniversary Decoration" },
  { href: "/services/baby-shower-decoration", label: "Baby Shower Decoration" },
  { href: "/services/room-decoration", label: "Room Decoration" },
  { href: "/services/car-decoration", label: "Car Decoration" },
  { href: "/services/wedding-decoration", label: "Wedding Decoration" },
  { href: "/services/corporate-events", label: "Corporate Events" },
  {
    href: "/services/custom-theme-decoration",
    label: "Custom Theme Decoration",
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-4 py-12 pb-24 text-white sm:px-6 md:py-16 md:pb-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,1.55fr)_minmax(0,0.75fr)_minmax(16rem,1.25fr)] lg:gap-x-10">
        <div>
          <h2 className="text-3xl font-black">EWD</h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            Luxury balloon decoration services crafted for unforgettable
            celebrations across India.
          </p>
        </div>

        <div className="lg:min-w-[18rem]">
          <h3 className="text-center text-lg font-bold">Services</h3>

          <div className="mt-5 grid gap-x-8 gap-y-4 text-gray-400 min-[430px]:grid-cols-2">
            {footerServices.map((service) => (
              <Link key={service.href} href={service.href}>
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Explore</h3>

          <div className="mt-5 flex flex-col gap-3 text-gray-400">
            <Link href="/blog">Blog</Link>
            <Link href="/city">Select City</Link>
            <Link href="/#gallery">Gallery</Link>
            <Link href="/#reviews">Reviews</Link>
          </div>
        </div>

        <div className="lg:min-w-[16rem]">
          <h3 className="text-center text-lg font-bold">Cities</h3>

          <div className="mt-4 grid gap-x-8 gap-y-3 text-gray-400 min-[360px]:grid-cols-2 sm:mt-5">
            {cities.map((city) => (
              <a key={city.slug} href={`/${city.slug}`}>
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-8">
        <h3 className="text-lg font-bold">Contact</h3>

        <div className="mt-5 flex flex-col gap-3 text-gray-400 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="tel:+919602060414"
            onClick={() => trackCallClick("footer_call")}
          >
            +91 9602060414
          </a>

          <a
            href="https://wa.me/919602060414"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("footer_whatsapp")}
          >
            WhatsApp Us
          </a>

          <p>Available 24x7 For Bookings</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        Copyright 2026 Event Wala Dost. All rights reserved.
      </div>
    </footer>
  );
}
