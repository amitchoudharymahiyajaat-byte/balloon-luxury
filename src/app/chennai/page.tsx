import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const ChennaiAreas = dynamic(
  () => import("./_components/ChennaiAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Chennai", "chennai");

export default function ChennaiPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Chennai" />

      {/* SERVICES */}
      <Services city="Chennai" />

      {/* GALLERY */}
      <Gallery city="Chennai" />

      {/* REVIEWS */}
      <Reviews city="Chennai" />

      {/* CHENNAI AREAS */}
      <ChennaiAreas />

      {/* FAQ */}
      <FAQ city="Chennai" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Chennai" />

      {/* CTA */}
      <CTA city="Chennai" />

    </main>
  );
}
