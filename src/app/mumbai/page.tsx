import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const MumbaiAreas = dynamic(
  () => import("./_components/MumbaiAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Mumbai", "mumbai");

export default function MumbaiPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Mumbai" />

      {/* SERVICES */}
      <Services city="Mumbai" />

      {/* GALLERY */}
      <Gallery city="Mumbai" />

      {/* REVIEWS */}
      <Reviews city="Mumbai" />

      {/* MUMBAI AREAS */}
      <MumbaiAreas />

      {/* FAQ */}
      <FAQ city="Mumbai" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Mumbai" />

      {/* CTA */}
      <CTA city="Mumbai" />

    </main>
  );
}
