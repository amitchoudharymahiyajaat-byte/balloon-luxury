import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const KolkataAreas = dynamic(
  () => import("./_components/KolkataAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Kolkata", "kolkata");

export default function KolkataPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Kolkata" />

      {/* SERVICES */}
      <Services city="Kolkata" />

      {/* GALLERY */}
      <Gallery city="Kolkata" />

      {/* REVIEWS */}
      <Reviews city="Kolkata" />

      {/* KOLKATA AREAS */}
      <KolkataAreas />

      {/* FAQ */}
      <FAQ city="Kolkata" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Kolkata" />

      {/* CTA */}
      <CTA city="Kolkata" />

    </main>
  );
}
