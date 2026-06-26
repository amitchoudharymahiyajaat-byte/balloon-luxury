import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";
import Link from "next/link";
import FallbackImage from "../home/FallbackImage";
import {
  TrackedBookLink,
  TrackedWhatsAppLink,
} from "../shared/TrackedActions";
import {
  getCitySlug,
  getServiceGallery,
  getServiceHeroMedia,
} from "../../lib/cityMedia";
import AnniversaryGallery from "./AnniversaryGallery";
import AnniversaryQuoteForm from "./AnniversaryQuoteForm";

type AnniversaryDecorationPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Simple Romantic Setup",
    price: "From",
    amount: "2,999",
    includes: [
      "Heart balloons",
      "Happy Anniversary foil banner",
      "Fairy lights",
      "Rose petals",
      "Basic wall or bed decoration",
    ],
  },
  {
    name: "Premium Anniversary Decor",
    price: "From",
    amount: "5,999",
    includes: [
      "Balloon arch or garland",
      "Romantic backdrop",
      "Name or anniversary message",
      "Cake table styling",
      "Flowers and fairy lights",
    ],
  },
  {
    name: "Luxury Couple Surprise",
    price: "From",
    amount: "10,999",
    includes: [
      "Complete room or venue styling",
      "Premium backdrop",
      "Balloon and flower decoration",
      "Candlelight setup",
      "Photo corner",
      "Personalised message",
      "On-site setup",
    ],
  },
];

const relatedServices = [
  {
    title: "Birthday Decoration",
    href: "/services/birthday-decoration",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Baby Shower & Welcome Baby",
    href: "/services/baby-shower-decoration",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Custom Theme Decoration",
    href: "/services/custom-theme-decoration",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
  },
];

function citySuffix(cityName?: string) {
  return cityName ? ` in ${cityName}` : "";
}

function cityOrGeneral(
  cityName: string | undefined,
  withCity: string,
  general: string,
) {
  return cityName ? withCity.replaceAll("{city}", cityName) : general;
}

function getServicePath(href: string, cityName?: string) {
  if (!cityName) return href;

  const citySlug = cityName
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `/${citySlug}${href}`;
}

function getFaqs(cityName?: string) {
  const city = cityName ? ` in ${cityName}` : "";

  return [
    {
      question: `How early should I book anniversary decoration${city}?`,
      answer:
        "For simple anniversary decoration, 24-48 hours can work. For romantic room decor, proposal setups, flower work or custom backdrops, 3-7 days is better.",
    },
    {
      question: "Do you provide romantic room and hotel decoration?",
      answer:
        "Yes, we decorate bedrooms, hotel rooms, living rooms, terraces and private venues with balloons, flowers, rose petals, LED candles and fairy lights.",
    },
    {
      question: "Can I share a reference photo or custom colour theme?",
      answer:
        "Yes. Share your reference photo on WhatsApp and we can customise the romantic decoration according to your space, colours, budget and surprise plan.",
    },
    {
      question: "What is included in an anniversary decoration package?",
      answer:
        "Packages can include heart balloons, anniversary foil banners, romantic backdrops, flowers, fairy lights, rose petals, cake table styling, props and on-site setup.",
    },
  ];
}

export default function AnniversaryDecorationPage({
  cityName,
}: AnniversaryDecorationPageProps) {
  const serviceSlug = "anniversary-decoration";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const cityKeyword = cityName
    ? `anniversary decoration in ${cityName}`
    : "anniversary decoration";
  const areaLine = cityName
    ? `Available across ${cityName}, including popular nearby areas.`
    : "Available for homes, hotels, rooftops and private venues.";

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <section className="relative isolate min-h-[590px] overflow-hidden bg-black text-white sm:min-h-[680px]">
        <FallbackImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.56] saturate-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/48 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.24),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            ROMANTIC CELEBRATION DECOR
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Anniversary & Romantic Decoration{location}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Elegant balloon, flower, candle and fairy-light decoration for
            anniversaries, proposals, romantic surprises and couple
            celebrations.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Custom romantic themes",
              "Home, hotel and room decoration",
              "Balloons, flowers, candles and lights",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedBookLink
              href="#anniversary-booking"
              location="service_hero_book"
              params={{ service_slug: serviceSlug, city_slug: citySlug || undefined }}
              className="w-full max-w-xs rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black shadow-xl shadow-yellow-900/20 transition hover:scale-105 hover:bg-white sm:w-auto"
            >
              Book This Decor
            </TrackedBookLink>
            <TrackedWhatsAppLink
              href={createWhatsAppUrl(
                buildPageWhatsAppMessage({
                  page: cityName ? "city-service" : "service",
                  city: cityName,
                  service: "Anniversary & Romantic Decor",
                }),
              )}
              location="service_hero_whatsapp"
              params={{ service_slug: serviceSlug, city_slug: citySlug || undefined }}
              className="w-full max-w-xs rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black sm:w-auto"
            >
              WhatsApp
            </TrackedWhatsAppLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <article className="mx-auto max-w-5xl rounded-[34px] bg-white px-5 py-8 shadow-xl shadow-purple-950/5 ring-1 ring-black/5 sm:px-8 md:px-12 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
            The Story
          </p>
          <blockquote className="mt-5 max-w-4xl font-serif text-3xl italic leading-tight text-[#2f2038] sm:text-5xl">
            &ldquo;The most beautiful surprises are not always the biggest
            &mdash; they are the ones that feel thoughtfully made for two
            people.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Romantic decoration in {city}, designed around your story",
              "Romantic decoration, designed around your story",
            )}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700">
              At Event Wala Dost, anniversary decoration begins with the couple,
              the venue and the surprise plan. We design romantic decoration
              around preferred colours, the occasion, the time of day and the
              way the moment should feel when your partner walks in.
            </p>
            <p>
              From a soft romantic room decoration with rose petals, LED candles
              and heart balloons to a premium hotel room decoration with flowers,
              fairy lights and a personalised message, every detail is planned
              to feel warm, intimate and photo-ready.
            </p>
            <p>
              Our surprise anniversary decoration, proposal decoration and
              couple celebration setups can be styled for homes, hotel rooms,
              rooftops, private dining spaces and venues. {areaLine}
            </p>
          </div>
        </article>
      </section>

      <section className="px-4 pb-12 sm:px-6 md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              Decoration Notes
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-black leading-tight sm:text-5xl">
              Romantic styling that feels intimate, not overdone.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Anniversary decoration at home
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Home anniversary decoration can transform a bedroom, living
                room, terrace or apartment into a private celebration. We use
                balloons, flowers, fairy lights, candles, photographs and
                personalised messages to create a clean romantic setup without
                making the space feel crowded.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Romantic room & hotel decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Romantic room decoration and hotel room decoration can include
                rose petals, LED candles, heart balloons, bed decoration,
                flower styling and soft lighting. It works beautifully for
                anniversaries, honeymoon surprises, midnight reveals and quiet
                couple celebrations.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Proposal & couple surprise decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Proposal decoration can be planned around a marry-me backdrop,
                ring presentation, photo corner, rooftop surprise or private
                candlelight setup. We keep the styling elegant so the focus
                stays on the moment, the message and the two people in it.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Romantic themes for every celebration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Romantic themes can be styled in red and gold, white and
                rose-gold, pastel tones, luxury black and gold or a customised
                reference-photo setup. The final {cityKeyword} design depends
                on the story, space, budget and level of surprise you want.
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Anniversary decoration pricing & booking
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Anniversary and romantic decoration pricing depends on the
                venue, balloon work, flowers, lighting, backdrop, props, travel
                and customisation. Share your date, city, venue, reference idea
                and budget on WhatsApp, and we will suggest the right romantic
                setup.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
                Pricing
              </p>
              <h2 className="mt-3 font-serif text-4xl italic leading-tight text-[#2f2038] sm:text-6xl">
                Pricing starts from{" "}
                <span className="whitespace-nowrap">&#8377;2,999</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Anniversary and romantic decoration packages start from
                &#8377;2,999. Final pricing depends on the space, theme, flower
                work, lights, backdrop, props and custom requirements.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {packages.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[24px] border border-gray-100 bg-[#fffaf7] p-5 shadow-md shadow-purple-950/5"
                >
                  <h3 className="text-lg font-black leading-tight text-gray-950">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
                    {item.price}
                  </p>
                  <p className="mt-1 text-3xl font-black text-gray-950">
                    &#8377;{item.amount}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
                    {item.includes.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnniversaryGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Anniversary decoration questions
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-gray-100 bg-white p-5 shadow-md shadow-purple-950/5"
              >
                <h3 className="text-base font-bold text-gray-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-blue-50 to-white px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              You Might Also Love
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              More celebration ideas
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={getServicePath(service.href, cityName)}
                className="group overflow-hidden rounded-[28px] border border-white bg-white shadow-lg shadow-purple-950/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <FallbackImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h3 className="text-lg font-bold text-gray-950">
                    {service.title}
                  </h3>
                  <span className="text-2xl text-purple-700">-&gt;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="anniversary-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your romantic decoration with Event Wala Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your occasion, date, venue, budget and reference idea. Our
              team will suggest a romantic decoration package and confirm
              availability on WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <AnniversaryQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
