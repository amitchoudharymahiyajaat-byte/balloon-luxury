import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const UdaipurAreas = dynamic(
  () => import("./_components/UdaipurAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Udaipur", "udaipur");

export default function UdaipurPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Udaipur" />

      {/* SERVICES */}
      <Services city="Udaipur" />

      {/* GALLERY */}
      <Gallery city="Udaipur" />

      {/* REVIEWS */}
      <Reviews city="Udaipur" />

      {/* UDAIPUR AREAS */}
      <UdaipurAreas />

      {/* FAQ */}
      <FAQ city="Udaipur" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Udaipur" />

      {/* CTA */}
      <CTA city="Udaipur" />

    </main>
  );
}
