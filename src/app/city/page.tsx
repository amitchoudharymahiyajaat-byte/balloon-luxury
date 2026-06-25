import Link from "next/link";
import type { Metadata } from "next";
import { cities, createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Choose Your City | Event Wala Dost",
  description:
    "Select your city to view premium luxury balloon decoration services and event styling options.",
  path: "/city",
});

export default function CityPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-[620px] max-w-6xl flex-col justify-center px-4 py-12 text-center sm:px-6 md:py-16 lg:py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
          Choose Your City
        </p>
        <h1 className="text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl">
          Luxury Balloon Decoration in Your Area
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          Explore city-specific premium balloon decoration services, gallery examples, and FAQs tailored for your location.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="rounded-[24px] border border-black/10 bg-[#fff7f1] px-5 py-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b2662f]">
                {city.name}
              </p>
              <p className="mt-3 text-xl font-semibold text-black">View Decoration Options</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
