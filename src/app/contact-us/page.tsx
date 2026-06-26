import type { Metadata } from "next";
import Link from "next/link";
import ContactEnquiryForm from "../../components/contact/ContactEnquiryForm";
import {
  TrackedCallLink,
  TrackedWhatsAppLink,
} from "../../components/shared/TrackedActions";
import { businessConfig } from "../../lib/business";
import { createPageMetadata, siteUrl, supportedCities } from "../../lib/seo";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Event Wala Dost for balloon decoration enquiries in supported cities. Share your event details to check availability.",
  path: "/contact-us",
  keywords: [
    "contact Event Wala Dost",
    "balloon decoration enquiry",
    "birthday decoration enquiry",
    "WhatsApp decoration booking",
  ],
});

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: `${siteUrl}/contact-us`,
              },
            ],
          }),
        }}
      />
      <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-8 shadow-xl shadow-purple-950/5 ring-1 ring-black/5 sm:p-10 lg:p-12">
          <nav className="text-sm font-semibold text-gray-500">
            <Link href="/" className="transition hover:text-purple-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Contact Us</span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                Contact Event Wala Dost
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Share your event location, date, venue photographs, preferred decoration style and budget range so the team can check availability and suggest a suitable setup.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TrackedCallLink
                  href={businessConfig.telHref}
                  location="contact_page_call"
                  className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                >
                  Call Now
                </TrackedCallLink>
                <TrackedWhatsAppLink
                  href={createWhatsAppUrl(
                    buildPageWhatsAppMessage({ page: "contact" }),
                  )}
                  location="contact_page_whatsapp"
                  className="rounded-full border border-purple-200 bg-purple-50 px-5 py-3 text-sm font-semibold text-purple-700 transition hover:border-purple-400 hover:bg-purple-100"
                >
                  WhatsApp Enquiry
                </TrackedWhatsAppLink>
              </div>

              <div className="mt-8 rounded-[28px] border border-gray-100 bg-[#fff8f3] p-6">
                <h2 className="text-lg font-black text-gray-950">Service locations</h2>
                <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                  {supportedCities.map((city) => (
                    <li key={city.slug} className="rounded-full border border-white/70 bg-white px-3 py-2 text-center">
                      {city.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-gray-950">Booking guidance</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
                  <li>• Share the venue address, event date and setup timing as clearly as possible.</li>
                  <li>• Include venue photographs, preferred colours and a reference design if available.</li>
                  <li>• Mention whether the setup is indoor, outdoor, terrace, room-based or banquet-style.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-lg shadow-purple-950/5">
              <h2 className="text-2xl font-black text-[#2f2038]">Send an enquiry</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Use the form below to prepare a WhatsApp enquiry with your details. Service availability is subject to event date, team schedule, venue access, materials and travel requirements.
              </p>
              <div className="mt-6">
                <ContactEnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
