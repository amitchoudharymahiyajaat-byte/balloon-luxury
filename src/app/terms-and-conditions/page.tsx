import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, phoneNumber, siteUrl } from "../../lib/seo";

const sections = [
  {
    heading: "Acceptance of terms",
    paragraphs: [
      "By using the Event Wala Dost website or contacting us for decoration services, you agree to the terms below. These terms apply to the website content, enquiry process and any decoration planning conversation that follows.",
    ],
  },
  {
    heading: "Scope of decoration services",
    paragraphs: [
      "Event Wala Dost offers balloon and event decoration services for celebrations such as birthdays, anniversaries, baby showers, proposals, room decoration and other selected event setups. The exact scope depends on the event type, venue and confirmed quotation.",
    ],
  },
  {
    heading: "Availability and quotations",
    paragraphs: [
      "Service availability is subject to the event date, team schedule, venue access, materials and travel requirements. Quotations are based on the information shared at the time of enquiry and may change if the scope, venue or timing changes.",
      "Same-day or short-notice services are subject to team, material, venue and timing availability and are not guaranteed.",
    ],
  },
  {
    heading: "Reference images and confirmation",
    paragraphs: [
      "Reference images are for inspiration only, and exact replication cannot be guaranteed. Colours may vary slightly because of screen display, lighting or material availability.",
      "Final design confirmation should be done in writing before the booking is finalised.",
    ],
  },
  {
    heading: "Booking, payments and responsibilities",
    paragraphs: [
      "Any booking confirmation, advance payment or balance payment arrangement will be discussed during the quotation process and confirmed in writing. Clients are responsible for sharing accurate event details, venue access information, permissions and timing requirements.",
      "The client should also ensure that the venue permits the planned decoration setup and that any required electricity, wall, ceiling or installation permissions are available.",
    ],
  },
  {
    heading: "Changes, timing and outdoor setups",
    paragraphs: [
      "Changes requested after confirmation may affect the design, materials, timing and cost. Setup and removal timing should be confirmed in advance, especially for indoor and outdoor venues.",
      "Outdoor and terrace decoration may be affected by weather, wind, access delays, venue restrictions and setup conditions. The team will plan as reasonably as possible, but conditions can change on the day.",
    ],
  },
  {
    heading: "Materials, damage and usage rights",
    paragraphs: [
      "Material substitutions may be needed when specific items are unavailable or when the venue conditions require a practical adjustment. Damage caused by guests, venue staff or third parties after handover is not the responsibility of the decoration team unless directly caused by its own negligence.",
      "Photos or marketing use of the setup may be considered only with the client’s permission.",
    ],
  },
  {
    heading: "Limitation and governing law",
    paragraphs: [
      "Event Wala Dost will act reasonably in providing services. Our responsibility is limited to the scope of the confirmed booking and does not extend to indirect or consequential losses beyond what is reasonably expected in ordinary circumstances.",
      "These terms are governed by the applicable laws of India, and any dispute should be resolved through reasonable discussion first.",
    ],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Event Wala Dost decoration enquiries, bookings, setup planning and service coordination.",
  path: "/terms-and-conditions",
  keywords: [
    "terms and conditions",
    "Event Wala Dost terms",
    "decoration booking terms",
    "event decoration policy",
  ],
});

export default function TermsAndConditionsPage() {
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
                name: "Terms and Conditions",
                item: `${siteUrl}/terms-and-conditions`,
              },
            ],
          }),
        }}
      />
      <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-white p-8 shadow-xl shadow-purple-950/5 ring-1 ring-black/5 sm:p-10 lg:p-12">
          <nav className="text-sm font-semibold text-gray-500">
            <Link href="/" className="transition hover:text-purple-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Terms and Conditions</span>
          </nav>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            These terms set out the general expectations for decoration enquiries, quotations, booking confirmation and service delivery with Event Wala Dost.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-black text-[#2f2038]">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="rounded-[28px] border border-gray-100 bg-[#fff8f3] p-6">
              <h2 className="text-lg font-black text-gray-950">Need help?</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
                <p>
                  Contact us on <a href={`tel:${phoneNumber}`} className="font-semibold text-purple-700">{phoneNumber}</a> or via WhatsApp for booking-related questions.
                </p>
                <p>
                  Please review our <Link href="/cancellation-refund-policy" className="font-semibold text-purple-700">Cancellation and Refund Policy</Link> for booking-specific terms.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
