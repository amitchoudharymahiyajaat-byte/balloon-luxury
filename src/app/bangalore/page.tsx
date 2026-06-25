import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const BangaloreAreas = dynamic(
  () => import("./_components/BangaloreAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Bangalore", "bangalore");

export default function BangalorePage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Bangalore" />

      {/* SERVICES */}
      <Services city="Bangalore" />

      {/* GALLERY */}
      <Gallery city="Bangalore" />

      {/* REVIEWS */}
      <Reviews city="Bangalore" />

      {/* BANGALORE AREAS */}
      <BangaloreAreas />

      {/* FAQ */}
      <FAQ city="Bangalore" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Bangalore" />

      {/* CTA */}
      <CTA city="Bangalore" />

    </main>
  );
}
