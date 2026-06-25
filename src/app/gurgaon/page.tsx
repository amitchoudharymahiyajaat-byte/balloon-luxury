import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const GurgaonAreas = dynamic(
  () => import("./_components/GurgaonAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Gurgaon", "gurgaon");

export default function GurgaonPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Gurgaon" />

      {/* SERVICES */}
      <Services city="Gurgaon" />

      {/* GALLERY */}
      <Gallery city="Gurgaon" />

      {/* REVIEWS */}
      <Reviews city="Gurgaon" />

      {/* GURGAON AREAS */}
      <GurgaonAreas />

      {/* FAQ */}
      <FAQ city="Gurgaon" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Gurgaon" />

      {/* CTA */}
      <CTA city="Gurgaon" />

    </main>
  );
}
