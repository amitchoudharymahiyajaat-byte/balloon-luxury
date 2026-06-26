import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import {
  createPageMetadata,
  ogImage,
  phoneNumber,
  siteName,
  siteUrl,
} from "../../lib/seo";
import { sikarAreas } from "./areas";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const SikarAreas = dynamic(() => import("./_components/SikarAreas"));
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createPageMetadata({
  title: "Balloon Decoration in Sikar | Birthday & Event Decoration",
  description:
    "Book balloon decoration in Sikar for birthdays, anniversaries, baby showers, room surprises, weddings, corporate events and customised celebrations.",
  path: "/sikar",
  keywords: [
    "Balloon Decoration Sikar",
    "Birthday Decoration Sikar",
    "Anniversary Decoration Sikar",
    "Wedding Decoration Sikar",
    "Corporate Event Decoration Sikar",
  ],
});

export default function SikarPage() {
  const sikarServiceAreas = Array.from(new Set(["Sikar", ...sikarAreas]));

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/sikar#localbusiness`,
    name: siteName,
    url: `${siteUrl}/sikar`,
    image: new URL(ogImage, siteUrl).toString(),
    telephone: phoneNumber,
    priceRange: "₹₹",
    description:
      "Custom balloon decoration services available in Sikar for birthdays, anniversaries, baby showers, romantic room surprises, wedding styling, banquet decoration and custom themed events.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sikar",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    areaServed: sikarServiceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };

  const faqItems = [
    {
      question: "Do you provide balloon decoration at home in Sikar?",
      answer:
        "Yes, we provide home decoration in Sikar for birthdays, anniversaries, baby showers and surprise setups subject to venue access and availability.",
    },
    {
      question: "Can you decorate hotels, cafes and banquet venues in Sikar?",
      answer:
        "We can work with hotels, cafes and banquet venues in Sikar where venue permission and access allow the setup to be completed safely.",
    },
    {
      question: "Is same-day balloon decoration available in Sikar?",
      answer:
        "Same-day decoration can be arranged subject to availability, venue access and a suitable setup window.",
    },
    {
      question: "What details are needed for a decoration quotation?",
      answer:
        "Useful details include the event date, venue address, preferred colours, theme ideas, approximate budget and the number of guests.",
    },
    {
      question: "Can colours, names and themes be customised?",
      answer:
        "Yes, we can customise the colour palette, name boards, photo backdrop and overall theme according to your celebration.",
    },
    {
      question: "Do you provide wedding and corporate decoration in Sikar?",
      answer:
        "Yes, we plan wedding, engagement and corporate decoration in Sikar with themed entrances, stage styling and venue-specific setups subject to availability.",
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero city="Sikar" />
      <Services city="Sikar" />
      <Gallery city="Sikar" />
      <Reviews city="Sikar" />
      <SikarAreas />
      <FAQ city="Sikar" faqs={faqItems} />
      <CitySeo city="Sikar" />
      <CTA city="Sikar" />
    </main>
  );
}
