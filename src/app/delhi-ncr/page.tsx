import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Hero from "../../components/home/Hero";
import CitySeo from "../../components/home/CitySeo";
import { createCityMetadata } from "../../lib/seo";

const Services = dynamic(() => import("../../components/home/Services"));
const Gallery = dynamic(() => import("../../components/home/Gallery"));
const Reviews = dynamic(() => import("../../components/home/Reviews"));
const DelhiAreas = dynamic(
  () => import("./_components/DelhiAreas")
);
const FAQ = dynamic(() => import("../../components/home/FAQ"));
const CTA = dynamic(() => import("../../components/home/CTA"));

export const metadata: Metadata = createCityMetadata("Delhi NCR", "delhi-ncr");

export default function DelhiNCRPage() {
  return (
    <main>

      {/* HERO */}
      <Hero city="Delhi NCR" />

      {/* SERVICES */}
      <Services city="Delhi NCR" />

      {/* GALLERY */}
      <Gallery city="Delhi NCR" />

      {/* REVIEWS */}
      <Reviews city="Delhi NCR" />

      {/* DELHI NCR AREAS */}
      <DelhiAreas />

      {/* FAQ */}
      <FAQ city="Delhi NCR" />

      {/* LOCAL SEO SECTION */}
      <CitySeo city="Delhi NCR" />

      {/* CTA */}
      <CTA city="Delhi NCR" />

    </main>
  );
}
