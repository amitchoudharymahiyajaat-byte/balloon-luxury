import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const PuneAreas = dynamic(
  () => import("./_components/PuneAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Pune", "pune");

export default function PunePage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Pune" />

      {/* SERVICES */}
      <Services city="Pune" />

      {/* GALLERY */}
      <Gallery city="Pune" />

      {/* REVIEWS */}
      <Reviews city="Pune" />

      {/* PUNE AREAS */}
      <PuneAreas />

      {/* FAQ */}
      <FAQ city="Pune" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Pune" />

      {/* CTA */}
      <CTA city="Pune" />

    </main>
  );
}
