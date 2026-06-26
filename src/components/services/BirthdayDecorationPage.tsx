import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";
import FallbackImage from "../home/FallbackImage";
import {
  getCitySlug,
  getServiceGallery,
  getServiceHeroMedia,
} from "../../lib/cityMedia";
import BirthdayGallery from "./BirthdayGallery";
import BirthdayQuoteForm from "./BirthdayQuoteForm";

type BirthdayDecorationPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Basic Birthday Decor",
    price: "From",
    amount: "2,499",
    includes:
      "Balloon garland, foil balloons, birthday banner, basic backdrop",
  },
  {
    name: "Premium Birthday Decor",
    price: "From",
    amount: "4,999",
    includes:
      "Theme backdrop, balloon arch, cake table decor, name banner, fairy lights",
  },
  {
    name: "Luxury Birthday Decor",
    price: "From",
    amount: "9,999",
    includes:
      "Full theme setup, premium props, photo corner, cake table, lights, on-site setup",
  },
];

const includedItems = [
  "Balloon garland and arch",
  "Happy Birthday banner",
  "Theme props and backdrop",
  "Cake table decoration",
  "Fairy lights and photo corner",
  "Setup and cleanup",
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

function getFaqs(cityName?: string) {
  const city = cityName ? ` in ${cityName}` : "";

  return [
    {
      question: `How early should I book birthday decoration${city}?`,
      answer:
        "For simple birthday balloon decoration, 24-48 hours can work. For kids themes, first birthday decoration or custom backdrops, 3-7 days is better.",
    },
    {
      question: "Do you provide home birthday decoration?",
      answer:
        "Yes, we decorate bedrooms, living rooms, terraces, apartments, villas, cafes and venues with balloon decoration, backdrops, lights and cake table styling.",
    },
    {
      question: "Can I share a reference photo or theme?",
      answer:
        "Yes, share your reference photo on WhatsApp. We can customise the birthday decoration according to space, theme, colours and budget.",
    },
    {
      question: "What is included in birthday decoration?",
      answer:
        "Packages can include balloon garland, foil balloons, birthday banner, theme backdrop, cake table decor, lights, props, setup and cleanup depending on selected package.",
    },
  ];
}

export default function BirthdayDecorationPage({
  cityName,
}: BirthdayDecorationPageProps) {
  const serviceSlug = "birthday-decoration";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const cityKeyword = cityName
    ? `birthday decoration in ${cityName}`
    : "birthday decoration";
  const cityAreas = cityName
    ? `across ${cityName} apartments, villas, cafes, restaurants, rooftops, farmhouses, banquet halls and society halls`
    : "across apartments, villas, cafes, restaurants, rooftops, farmhouses, banquet halls and society halls";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/46 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/48 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.24),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            PREMIUM BIRTHDAY DECOR
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Birthday Decoration{location}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Premium birthday balloon decoration for kids birthdays, first
            birthdays, surprise parties, home celebrations and venue setups.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Same-day setup available",
              "Custom themes & backdrops",
              "Home, terrace & venue decoration",
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
            <a
              href="#birthday-booking"
              className="w-full max-w-xs rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black shadow-xl shadow-yellow-900/20 transition hover:scale-105 hover:bg-white sm:w-auto"
            >
              Book This Decor
            </a>
            <a
              href={createWhatsAppUrl(
                buildPageWhatsAppMessage({
                  page: cityName ? "city-service" : "service",
                  city: cityName,
                  service: "Birthday Decoration",
                }),
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-black sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <article className="mx-auto max-w-5xl rounded-[34px] bg-white px-5 py-8 shadow-xl shadow-purple-950/5 ring-1 ring-black/5 sm:px-8 md:px-12 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
            The Story
          </p>
          <blockquote className="mt-5 max-w-4xl font-serif text-3xl italic leading-tight text-[#2f2038] sm:text-5xl">
            &ldquo;A birthday should feel like the room was waiting for you
            &mdash; not like decoration was added at the last minute.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Birthday decoration in {city}, designed around the person",
              "Birthday decoration, designed around the person",
            )}
          </h2>
          <p className="mt-6 text-base leading-8 text-gray-700 first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700 sm:text-lg sm:leading-9">
            At Event Wala Dost, every birthday decoration starts with the
            person, the space and the surprise moment. We plan the balloon
            decoration, backdrop, cake table, lights and props according to the
            age, theme, venue and budget. Whether it is a kids birthday
            decoration, first birthday decoration, surprise birthday decoration
            at home or a premium birthday balloon decoration for a venue, the
            setup should feel personal, clean and photo-ready.
          </p>
        </article>
      </section>

      <section className="px-4 pb-12 sm:px-6 md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              Decoration Notes
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-black leading-tight sm:text-5xl">
              Premium birthday styling without visual clutter.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Kids birthday & first birthday themes
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Kids birthday decoration and first birthday decoration should
                feel joyful, soft and thoughtfully styled. We create pastel
                themes, jungle safari, princess, unicorn, car theme, boss baby
                and cartoon themes with a clean cake table, name banner and soft
                balloon styling that keeps the setup camera-ready.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Surprise birthday decoration at home
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Surprise birthday decoration at home needs timing and a clean
                finish. We style bedroom setups, living room decoration and
                terrace surprises with a balloon arch, foil balloons, fairy
                lights, quick setup planning and neat home birthday decoration
                details for a polished reveal.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Birthday decoration for homes, terraces and venues
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Our {cityKeyword} work adapts to {cityAreas}. The final
                birthday balloon decoration depends on the space, theme, budget,
                timing and the amount of balloon decoration needed to make the
                celebration feel complete.
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Pricing & how to book
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Birthday decoration starts from &#8377;2,499. Final pricing
                depends on theme, backdrop, balloon work, cake table, lights,
                props, location and customization. Share your date, city,
                reference photo and budget on WhatsApp, and we will suggest the
                right package for your celebration.
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
                Pricing starts from <span className="whitespace-nowrap">&#8377;2,499</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Birthday decoration packages start from &#8377;2,499 and can
                increase based on theme, balloon work, backdrop, cake table,
                lights, props, location and custom requirements.
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
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {item.includes}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <p className="text-sm font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BirthdayGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Birthday decoration questions
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

      <section
        id="birthday-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your birthday decoration with Event Wala Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your date, budget, city and reference idea. Our team will
              suggest the right birthday package and confirm availability on
              WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <BirthdayQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
