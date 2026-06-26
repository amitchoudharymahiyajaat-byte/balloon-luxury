import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata, phoneNumber, siteUrl } from "../../lib/seo";

const sections = [
  {
    heading: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how Event Wala Dost collects, uses and protects personal information shared through our website, enquiries, phone calls, WhatsApp conversations and quotation requests.",
      "We aim to keep the process simple, useful and transparent while respecting your privacy.",
    ],
  },
  {
    heading: "Information users may provide",
    paragraphs: [
      "When you contact us, you may share your name, phone number, city, event type, event date, venue information, photographs, budget range and event details.",
      "We may also receive information through WhatsApp, phone-call or enquiry interactions, including the details you share to plan decoration services.",
    ],
  },
  {
    heading: "How information may be used",
    paragraphs: [
      "The information you share may be used to respond to enquiries, prepare quotations, discuss decoration ideas, coordinate booking details, plan service requirements and improve the website experience.",
      "Technical information such as browser details, device information and page activity may also be used for site improvement, security and basic analytics purposes.",
    ],
  },
  {
    heading: "Analytics, cookies and optional tools",
    paragraphs: [
      "Analytics and advertising tools may be used when enabled and consented to, such as Google Analytics or Google Tag Manager, and Meta Pixel or remarketing where configured.",
      "Cookies and similar technologies may be used to improve website performance and remember your preferences where applicable.",
    ],
  },
  {
    heading: "Sharing, retention and security",
    paragraphs: [
      "We do not sell personal data. We may share necessary information with trusted service providers who assist with communication, scheduling, website operations or customer support.",
      "We keep information only as long as required for enquiries, quotations, service coordination, legal or operational reasons and reasonable record-keeping. We use reasonable security measures, although no system can be guaranteed completely secure.",
    ],
  },
  {
    heading: "Your requests and contact",
    paragraphs: [
      "If you want to review, correct or request deletion of your information, please contact us through WhatsApp or the phone number below. We will review reasonable requests in accordance with applicable requirements.",
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those external sites.",
    ],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Event Wala Dost covering enquiries, quotations, website use, cookies and data handling.",
  path: "/privacy-policy",
  keywords: [
    "privacy policy",
    "Event Wala Dost privacy",
    "balloon decoration privacy",
    "website privacy policy",
  ],
});

export default function PrivacyPolicyPage() {
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
                name: "Privacy Policy",
                item: `${siteUrl}/privacy-policy`,
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
            <span className="text-gray-800">Privacy Policy</span>
          </nav>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            This policy explains how Event Wala Dost collects and uses customer information for decoration enquiries, quotations and service coordination.
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
              <h2 className="text-lg font-black text-gray-950">Contact</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
                <p>
                  <a href={`tel:${phoneNumber}`} className="font-semibold text-purple-700">
                    {phoneNumber}
                  </a>
                </p>
                <p>
                  <a
                    href={`https://wa.me/${phoneNumber.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-purple-700"
                  >
                    WhatsApp us for enquiries
                  </a>
                </p>
                <p>
                  For correction or deletion requests, please share your name, phone number and the relevant enquiry details.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
