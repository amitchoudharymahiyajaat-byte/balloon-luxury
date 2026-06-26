"use client";

import { motion } from "framer-motion";
import { trackBookingClick, trackWhatsAppClick } from "../../lib/tracking";
import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";

const packages = [
  {
    name: "Silver",
    price: "Rs. 1,999",
    features: [
      "Basic balloon decoration",
      "Happy birthday foil",
      "Ceiling balloons",
      "Best for small rooms",
    ],
    cta: "Book on WhatsApp",
    featured: false,
  },
  {
    name: "Gold",
    price: "Rs. 4,999",
    features: [
      "Premium balloon setup",
      "LED decoration",
      "Theme decoration",
      "Cake table decor",
    ],
    cta: "Get Quote",
    featured: true,
  },
  {
    name: "Luxury",
    price: "Rs. 9,999+",
    features: [
      "Luxury backdrop setup",
      "Proposal or romantic decor",
      "Customized premium themes",
      "Premium props included",
    ],
    cta: "Book Luxury Setup",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            Pricing
          </p>

          <h2 className="mt-3 text-2xl font-black text-black sm:text-4xl md:text-5xl">
            Balloon Decoration Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Choose the perfect decoration package for your celebration.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-4 sm:mt-10 md:grid-cols-3 md:gap-5">
          {packages.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex h-full flex-col rounded-[28px] border bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl md:p-7 ${
                item.featured
                  ? "border-purple-500 shadow-xl"
                  : "border-black/10"
              }`}
            >
              {item.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold">{item.name}</h3>

              <p className="mt-4 text-4xl font-black">{item.price}</p>

              <ul className="mt-5 flex-1 space-y-3 text-sm text-gray-600">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                href={createWhatsAppUrl(
                  buildPageWhatsAppMessage({
                    page: "general",
                    message: `I want to enquire about the ${item.name} decoration package.`,
                  }),
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick(`pricing_${item.name}`);
                  trackBookingClick(`pricing_${item.name}`);
                }}
                className={`mt-8 block rounded-full px-6 py-4 text-center text-sm font-semibold transition hover:scale-105 ${
                  item.featured
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-black text-white"
                }`}
              >
                {item.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
