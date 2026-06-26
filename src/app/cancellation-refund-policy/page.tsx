import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, phoneNumber, siteUrl } from "../../lib/seo";

const sections = [
  {
    heading: "Purpose of the policy",
    paragraphs: [
      "This Cancellation and Refund Policy explains how cancellation, rescheduling and refund requests are generally handled for decoration bookings with Event Wala Dost.",
    ],
  },
  {
    heading: "Booking confirmation",
    paragraphs: [
      "A booking is considered confirmed only when the quotation, scope of work and relevant booking details are clearly shared and accepted in writing.",
    ],
  },
  {
    heading: "Cancellation and rescheduling requests",
    paragraphs: [
      "Cancellation or rescheduling requests should be made in writing as soon as possible. The request will be reviewed based on the booking stage, the work already planned and the availability of the requested date.",
      "Date changes may be possible if the new date is available and the booking scope remains suitable.",
    ],
  },
  {
    heading: "Customised work and purchased materials",
    paragraphs: [
      "Bookings involving custom materials, personalised items, printed items or special props may be affected differently because preparation work may already have been started or materials may have been arranged.",
      "If work has already been completed, materials have already been purchased or travel or logistics have been arranged, refund eligibility may be reduced or may not apply in full.",
    ],
  },
  {
    heading: "Short-notice and same-day bookings",
    paragraphs: [
      "Short-notice and same-day bookings are handled carefully because availability, team schedule, venue access and material readiness are often more limited. Refunds, if any, will depend on what was already arranged and confirmed.",
      "Venue-access failure, incorrect details shared by the client or weather-related changes may affect the practical delivery of the service and the outcome of any refund request.",
    ],
  },
  {
    heading: "Provider-side inability and force majeure",
    paragraphs: [
      "If Event Wala Dost is unable to deliver the booked service due to circumstances outside reasonable control, the matter will be reviewed based on the confirmed booking, scope, work already completed and any costs already incurred.",
      "This may include weather-related outdoor issues, access delays, venue restrictions or other force majeure circumstances.",
    ],
  },
  {
    heading: "Refund processing",
    paragraphs: [
      "Eligible refunds, if any, will be processed using the original payment method or any other mutually agreed method. The actual refund timing may vary depending on the payment method and the booking circumstances.",
      "For booking-specific terms, the written quotation or booking confirmation will take priority.",
    ],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Cancellation and Refund Policy",
  description:
    "Cancellation and refund policy for Event Wala Dost decoration bookings, rescheduling requests and service changes.",
  path: "/cancellation-refund-policy",
  keywords: [
    "cancellation policy",
    "refund policy",
    "Event Wala Dost refund",
    "decoration booking refund",
  ],
});

export default function CancellationRefundPolicyPage() {
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
                name: "Cancellation and Refund Policy",
                item: `${siteUrl}/cancellation-refund-policy`,
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
            <span className="text-gray-800">Cancellation and Refund Policy</span>
          </nav>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Cancellation and Refund Policy
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            This policy outlines the general way cancellation, rescheduling and refund requests are reviewed for decoration bookings with Event Wala Dost.
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
              <h2 className="text-lg font-black text-gray-950">Need to discuss a booking?</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
                <p>
                  Contact us on <a href={`tel:${phoneNumber}`} className="font-semibold text-purple-700">{phoneNumber}</a> or send a WhatsApp message for booking support.
                </p>
                <p>
                  Please share your booking details, event date and any written confirmation so the request can be assessed accurately.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
