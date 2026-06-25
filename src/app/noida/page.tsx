import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const NoidaAreas = dynamic(
  () => import("./_components/NoidaAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Noida", "noida");

export default function NoidaPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Noida" />

      {/* SERVICES */}
      <Services city="Noida" />

      {/* GALLERY */}
      <Gallery city="Noida" />

      {/* REVIEWS */}
      <Reviews city="Noida" />

      {/* NOIDA AREAS */}
      <NoidaAreas />

      {/* FAQ */}
      <FAQ city="Noida" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Noida" />

      {/* CTA */}
      <CTA city="Noida" />

    </main>
  );
}
