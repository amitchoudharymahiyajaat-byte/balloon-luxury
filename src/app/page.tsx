import Header from "../components/layout/Header";
import StickyButtons from "../components/layout/StickyButtons";
import Hero from "../components/home/Hero";
import Cities from "../components/home/Cities";
import Services from "../components/home/Services";
import Gallery from "../components/home/Gallery";
import Reviews from "../components/home/Reviews";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      <Header />

      <StickyButtons />

      <Hero />
      
      <Cities />

      <Services />

      <Gallery />

      <Reviews />
      
      <FAQ />
      
      <CTA />
      
      <Footer />

    </main>
  );
}