import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata, ogImage, phoneNumber, siteName, siteUrl } from "../../lib/seo";
import { jaipurAreas } from "./areas";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const JaipurAreas = dynamic(
  () => import("./_components/JaipurAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Jaipur", "jaipur");

const jaipurLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  url: `${siteUrl}/jaipur`,
  image: new URL(ogImage, siteUrl).toString(),
  telephone: phoneNumber,
  description:
    "Premium balloon decoration services in Jaipur for birthdays, anniversaries, baby showers, romantic room decoration, hotel room decoration and surprise events.",
  priceRange: "\u20B9\u20B9",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: ["Jaipur", ...jaipurAreas].map((area) => ({
    "@type": "Place",
    name: area,
  })),
};

export default function JaipurPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jaipurLocalBusinessSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* HERO */}
      <Hero city="Jaipur" />

      {/* SERVICES */}
      <Services city="Jaipur" />

      {/* GALLERY */}
      <Gallery city="Jaipur" />

      {/* REVIEWS */}
      <Reviews city="Jaipur" />

      {/* JAIPUR AREAS */}
      <JaipurAreas />

      {/* FAQ */}
      <FAQ city="Jaipur" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Jaipur" />

      {/* CTA */}
      <CTA city="Jaipur" />

    </main>
  );
}
