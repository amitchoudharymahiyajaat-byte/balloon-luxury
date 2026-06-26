import Image from "next/image";

import { cities } from "../../lib/seo";

const cityImages: Record<(typeof cities)[number]["slug"], string> = {
  jaipur: "/images/cities/jaipur-balloon-decoration.webp",
  sikar: "/images/hero/home-hero-balloon-decoration.webp",
  "delhi-ncr": "/images/cities/delhi-ncr-balloon-decoration.webp",
  gurgaon: "/images/cities/gurgaon-balloon-decoration.webp",
  mumbai: "/images/cities/mumbai-balloon-decoration.webp",
  ahmedabad: "/images/cities/ahemdabad-balloon-decoration.webp",
  chandigarh: "/images/hero/home-hero-balloon-decoration.webp",
  bangalore: "/images/cities/bangalore-balloon-decoration.webp",
  hyderabad: "/images/cities/hydrabad-balloon-decoration.webp",
  udaipur: "/images/cities/udaipur-balloon-decoration.webp",
  noida: "/images/cities/noida-balloon-decoration.webp",
  pune: "/images/cities/pune-balloon-decoration.webp",
  chennai: "/images/cities/chennai-balloon-decoration.webp",
  kolkata: "/images/cities/kolkata-balloon-decoration.webp",
};

const cityImageAlts: Record<(typeof cities)[number]["slug"], string> = {
  jaipur: "Balloon decoration services in Jaipur",
  sikar: "Balloon decoration services available in Sikar",
  "delhi-ncr": "Balloon decoration services in Delhi NCR",
  gurgaon: "Balloon decoration services in Gurgaon",
  mumbai: "Balloon decoration services in Mumbai",
  ahmedabad: "Balloon decoration services in Ahmedabad",
  chandigarh: "Balloon decoration services in Chandigarh",
  bangalore: "Balloon decoration services in Bangalore",
  hyderabad: "Balloon decoration services in Hyderabad",
  udaipur: "Balloon decoration services in Udaipur",
  noida: "Balloon decoration services in Noida",
  pune: "Balloon decoration services in Pune",
  chennai: "Balloon decoration services in Chennai",
  kolkata: "Balloon decoration services in Kolkata",
};

export default function Cities() {
  return (
    <section
      id="cities"
      className="overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12 px-4 sm:px-6">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Cities
          </p>

          <h2
            className="mt-3 text-2xl sm:text-4xl md:text-5xl font-black"
            style={{
              background:
                "linear-gradient(90deg, #ff6b6b 0%, #ffa500 25%, #4ecdc4 50%, #ff1493 75%, #9d4edd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We Decorate Across India
          </h2>

        </div>

        {/* SLIDER */}
        <div className="relative">

          <div className="flex animate-slider gap-4 sm:gap-5 md:gap-6 w-max px-4">

            {[...cities, ...cities].map((city, index) => (
              <a
                key={index}
                href={`/${city.slug}`}
                className="group relative aspect-[4/3] w-56 flex-shrink-0 overflow-hidden rounded-[28px] sm:w-64 md:w-72"
              >

                <Image
                  src={cityImages[city.slug]}
                  alt={cityImageAlts[city.slug]}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 25vw"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <h3 className="text-2xl font-black">{city.name}</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Luxury Balloon Decoration
                  </p>
                </div>
              </a>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
