import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const AhmedabadAreas = dynamic(
  () => import("./_components/AhmedabadAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Ahmedabad", "ahmedabad");

export default function AhmedabadPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Ahmedabad" />

      {/* SERVICES */}
      <Services city="Ahmedabad" />

      {/* GALLERY */}
      <Gallery city="Ahmedabad" />

      {/* REVIEWS */}
      <Reviews city="Ahmedabad" />

      {/* AHMEDABAD AREAS */}
      <AhmedabadAreas />

      {/* FAQ */}
      <FAQ city="Ahmedabad" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Ahmedabad" />

      {/* CTA */}
      <CTA city="Ahmedabad" />

    </main>
  );
}
