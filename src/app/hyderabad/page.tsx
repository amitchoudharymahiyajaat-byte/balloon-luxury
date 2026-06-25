import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const HyderabadAreas = dynamic(
  () => import("./_components/HyderabadAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Hyderabad", "hyderabad");

export default function HyderabadPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Hyderabad" />

      {/* SERVICES */}
      <Services city="Hyderabad" />

      {/* GALLERY */}
      <Gallery city="Hyderabad" />

      {/* REVIEWS */}
      <Reviews city="Hyderabad" />

      {/* HYDERABAD AREAS */}
      <HyderabadAreas />

      {/* FAQ */}
      <FAQ city="Hyderabad" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Hyderabad" />

      {/* CTA */}
      <CTA city="Hyderabad" />

    </main>
  );
}
