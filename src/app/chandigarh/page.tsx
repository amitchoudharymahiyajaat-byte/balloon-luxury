import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import {
  createCityMetadata,
  ogImage,
  phoneNumber,
  siteName,
  siteUrl,
} from "../../lib/seo";
import { chandigarhAreas } from "./areas";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const ChandigarhAreas = dynamic(() => import("./_components/ChandigarhAreas"));
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Chandigarh", "chandigarh");

export default function ChandigarhPage() {
  const chandigarhServiceAreas = Array.from(
    new Set(["Chandigarh", "Mohali", "Panchkula", ...chandigarhAreas])
  );

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/chandigarh#localbusiness`,
    name: siteName,
    url: `${siteUrl}/chandigarh`,
    image: new URL(ogImage, siteUrl).toString(),
    telephone: phoneNumber,
    priceRange: "\u20B9\u20B9",
    description:
      "Premium balloon decoration services in Chandigarh, Mohali and Panchkula for birthdays, anniversaries, baby showers, romantic room decoration, hotel room decoration and surprise events.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressRegion: "Chandigarh",
      addressCountry: "IN",
    },
    areaServed: chandigarhServiceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs: [
      "https://www.instagram.com/eventwaladost",
      "https://www.facebook.com/eventwaladost",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero city="Chandigarh" />
      <Services city="Chandigarh" />
      <Gallery city="Chandigarh" />
      <Reviews city="Chandigarh" />
      <ChandigarhAreas />
      <FAQ city="Chandigarh" />
      <CitySeo city="Chandigarh" />
      <CTA city="Chandigarh" />
    </main>
  );
}
