import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "../components/home/Hero";
import { createPageMetadata } from "../lib/seo";

const Cities = dynamic(() => import("../components/home/Cities"));
const Services = dynamic(() => import("../components/home/Services"));
const Gallery = dynamic(() => import("../components/home/Gallery"));
const Pricing = dynamic(() => import("../components/home/Pricing"));
const Reviews = dynamic(() => import("../components/home/Reviews"));
const FAQ = dynamic(() => import("../components/home/FAQ"));
const CTA = dynamic(() => import("../components/home/CTA"));

export const metadata: Metadata = createPageMetadata({
  title: "Event Wala Dost | Premium Balloon Decoration Services",
  description:
    "Luxury balloon decoration services for birthdays, anniversaries, baby showers, proposals and surprise celebrations across India.",
  keywords: [
    "balloon decoration",
    "birthday decoration",
    "anniversary decoration",
    "room decoration",
    "proposal decoration",
    "baby shower decoration",
    "balloon decorator near me",
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-black">

      <Hero />
      
      <Cities />

      <Services />

      <Gallery />

      <Pricing />

      <Reviews />
      
      <FAQ />
      
      <CTA />

    </main>
  );
}
