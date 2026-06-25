"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getCitySlug, getServiceMedia } from "../../lib/cityMedia";
import FallbackImage from "./FallbackImage";

export type ServiceImageKey = `/services/${string}`;
export type ServiceCityImages =
  | Partial<Record<ServiceImageKey, string>>
  | string[];

function getServicePath(slug: string, city?: string) {
  const href = `/services/${slug}`;
  if (!city) return href;

  return `/${getCitySlug(city)}${href}`;
}

function getServiceTitle(
  service: ReturnType<typeof getServiceMedia>[number],
  city?: string,
) {
  if (!city) return service.title;

  return `${service.cityTitle} in ${city}`;
}

export default function Services({
  city = "",
  cityImages,
}: {
  city?: string;
  cityImages?: ServiceCityImages;
}) {
  const citySlug = getCitySlug(city);
  const services = getServiceMedia(citySlug).map((service, index) => {
    const defaultHref = `/services/${service.slug}` as ServiceImageKey;
    const href = getServicePath(service.slug, city);
    const legacyImage = Array.isArray(cityImages)
      ? cityImages[index]
      : cityImages?.[defaultHref];

    return {
      title: getServiceTitle(service, city),
      description: service.description,
      href,
      image: legacyImage || service.image,
      alt: legacyImage
        ? `${getServiceTitle(service, city)} by Event Wala Dost${
            city ? ` in ${city}` : ""
          }`
        : city
          ? service.alt.replace(/\.$/, "") + ` in ${city}`
          : service.alt,
    };
  });

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white via-blue-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            Decoration Categories
          </p>

          <h2 className="mt-3 text-2xl font-black sm:text-4xl md:text-5xl gradient-heading-secondary">
            {city ? `Decoration Services in ${city}` : "Our Decoration Services"}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
            {city
              ? `From birthdays and anniversaries to car surprises, baby showers and luxury event setups - Event Wala Dost creates beautiful balloon decorations in ${city} for every celebration.`
              : "From birthdays and anniversaries to car surprises, baby showers and luxury event setups - Event Wala Dost creates beautiful balloon decorations for every celebration."}
          </p>

        </div>

        {/* GRID */}
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">

          {services.map((service) => (

            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >

              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-md shadow-purple-950/5 ring-1 ring-black/5 transition duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-950/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <div className="relative h-48 overflow-hidden sm:h-56">

                  <FallbackImage
                    src={service.image}
                    alt={service.alt}
                    width={1200}
                    height={800}
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                      {service.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700 transition duration-300 group-hover:bg-purple-600 group-hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>

              </Link>

            </motion.div>

          ))}

        </div>
      </div>

    </section>
  );
}
