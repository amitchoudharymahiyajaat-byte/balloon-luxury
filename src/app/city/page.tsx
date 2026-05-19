import type { Metadata } from "next";
const cities = [
  "jaipur",
  "delhi",
  "gurgaon",
  "noida",
  "udaipur",
  "mumbai",
  "pune",
  "bangalore",
];

export async function generateStaticParams() {
  return cities.map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {

  const { city } = await params;

  const cityName =
    city.charAt(0).toUpperCase() + city.slice(1);

  return {
    title: `Balloon Decoration in ${cityName} | Event Wala Dost`,

    description: `Premium balloon decoration services in ${cityName} for birthdays, anniversaries, baby showers, romantic room setups and surprise celebrations.`,

    keywords: [
      `balloon decoration in ${cityName}`,
      `birthday decoration in ${cityName}`,
      `anniversary decoration in ${cityName}`,
      `room decoration in ${cityName}`,
      `proposal decoration in ${cityName}`,
    ],

    openGraph: {
      title: `Balloon Decoration in ${cityName}`,

      description: `Luxury balloon decoration services in ${cityName}.`,

      images: [
        {
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop"
            alt={city}
            className="h-full w-full object-cover opacity-40"
          />

        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Premium Balloon Decoration
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">

            Balloon Decoration
            <br />
            In {city.charAt(0).toUpperCase() + city.slice(1)}

          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-300">

            Luxury birthday, anniversary, baby shower and surprise decorations
            available in {city} with same day setup.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/919602060414"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Book On WhatsApp
            </a>

            <a
              href="tel:+919602060414"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}