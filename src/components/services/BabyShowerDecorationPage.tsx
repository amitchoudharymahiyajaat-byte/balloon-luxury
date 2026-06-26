import { createWhatsAppUrl } from "../../lib/business";
import Link from "next/link";
import FallbackImage from "../home/FallbackImage";
import {
  getCitySlug,
  getServiceGallery,
  getServiceHeroMedia,
} from "../../lib/cityMedia";
import BabyShowerGallery from "./BabyShowerGallery";
import BabyShowerQuoteForm from "./BabyShowerQuoteForm";

type BabyShowerDecorationPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Simple Baby Shower Setup",
    amount: "2,999",
    includes: [
      "Pastel balloon garland",
      "Baby shower foil balloons",
      "Welcome or baby shower banner",
      "Basic backdrop",
      "Simple photo area",
    ],
  },
  {
    name: "Premium Baby Shower Theme",
    amount: "5,999",
    includes: [
      "Themed balloon arch",
      "Premium backdrop",
      "Cake table decoration",
      "Baby-themed props",
      "Name or customised message",
      "Fairy lights",
    ],
  },
  {
    name: "Luxury Welcome Baby Decor",
    amount: "10,999",
    includes: [
      "Complete home or venue styling",
      "Premium balloon and floral backdrop",
      "Welcome baby signage",
      "Entrance decoration",
      "Cake and gift table styling",
      "Photo corner",
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
    title: "Anniversary & Romantic Decor",
    href: "/services/anniversary-decoration",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Custom Theme Decoration",
    href: "/services/custom-theme-decoration",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
  },
];

const cityAreaHighlights: Record<string, string> = {
  Jaipur: "Popular Jaipur requests often come from Vaishali Nagar, Mansarovar, Malviya Nagar, C-Scheme and Jagatpura.",
  "Delhi NCR":
    "Popular Delhi NCR requests often come from Dwarka, Rohini, Connaught Place, Noida, Gurgaon and nearby family venues.",
  Gurgaon:
    "Popular Gurgaon requests often come from Golf Course Road, DLF phases, Sohna Road, Cyber City and Sector 56.",
  Mumbai:
    "Popular Mumbai requests often come from South Mumbai, Bandra, Andheri, Powai, Thane and Navi Mumbai.",
  Ahmedabad:
    "Popular Ahmedabad requests often come from SG Highway, Sindhu Bhavan Road, Satellite, Bopal and Vastrapur.",
  Bangalore:
    "Popular Bangalore requests often come from Koramangala, Indiranagar, Whitefield, HSR Layout and JP Nagar.",
  Hyderabad:
    "Popular Hyderabad requests often come from Banjara Hills, Jubilee Hills, Gachibowli, Kondapur and Madhapur.",
  Udaipur:
    "Popular Udaipur requests often come from Hiran Magri, Fatehpura, Shobhagpura, Ambamata and lake-side venues.",
  Noida:
    "Popular Noida requests often come from Sector 18, Sector 62, Sector 75, Sector 137 and Greater Noida.",
  Pune: "Popular Pune requests often come from Koregaon Park, Kothrud, Baner, Wakad, Viman Nagar and Hinjewadi.",
  Chennai:
    "Popular Chennai requests often come from T Nagar, Mylapore, Adyar, Anna Nagar, Velachery and ECR.",
  Kolkata:
    "Popular Kolkata requests often come from Park Street, Salt Lake, New Town, Ballygunge and Alipore.",
};

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
      question: `How early should I book baby shower decoration${city}?`,
      answer:
        "Simple balloon setups may be possible with 24-48 hours' notice, but customised baby shower themes, godh bharai decoration and premium backdrops should preferably be booked 3-7 days in advance.",
    },
    {
      question: "Do you provide welcome baby decoration at home?",
      answer:
        "Yes. We can decorate the entrance, living room, bedroom and baby's room using balloons, welcome signage, ribbons, lights and customised baby-themed props.",
    },
    {
      question: "Can I select my own colours or share a reference photo?",
      answer:
        "Yes. You can share a reference photo or choose pastel, gender-neutral, floral or customised colours according to your celebration and budget.",
    },
    {
      question: "What is included in a baby shower decoration package?",
      answer:
        "Depending on the package, the setup may include balloon garlands, themed backdrop, baby props, customised signage, cake table styling, fairy lights, photo corner and complete installation.",
    },
  ];
}

export default function BabyShowerDecorationPage({
  cityName,
}: BabyShowerDecorationPageProps) {
  const serviceSlug = "baby-shower-decoration";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const cityKeyword = cityName
    ? `baby shower decoration in ${cityName}`
    : "baby shower decoration";
  const areaLine =
    (cityName && cityAreaHighlights[cityName]) ||
    "We plan each setup around the home, venue and family flow so the celebration feels calm, warm and photo-ready.";

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <section className="relative isolate min-h-[590px] overflow-hidden bg-black text-white sm:min-h-[680px]">
        <FallbackImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.58] saturate-[0.98]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/46 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/48 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.22),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            BEAUTIFUL BEGINNINGS
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            {cityOrGeneral(
              cityName,
              "Baby Shower & Welcome Baby Decoration in {city}",
              "Baby Shower & Welcome Baby Decoration",
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Elegant pastel balloon decoration for baby showers, welcome baby
            celebrations, naming ceremonies and newborn homecoming surprises.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Pastel and customised themes",
              "Baby shower and welcome baby setups",
              "Home, terrace and venue decoration",
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
              href="#baby-shower-booking"
              className="w-full max-w-xs rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black shadow-xl shadow-yellow-900/20 transition hover:scale-105 hover:bg-white sm:w-auto"
            >
              Book This Decor
            </a>
            <a
              href={createWhatsAppUrl("Hi, I want to book baby shower and welcome baby decoration")}
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
            THE STORY
          </p>
          <blockquote className="mt-5 max-w-4xl font-serif text-3xl italic leading-tight text-[#2f2038] sm:text-5xl">
            &ldquo;A new beginning deserves a space filled with softness,
            happiness and the people waiting to say welcome.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Baby shower decoration in {city}, created for a beautiful new beginning",
              "Baby shower decoration, created for a beautiful new beginning",
            )}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700">
              At Event Wala Dost, baby shower decoration begins with the family,
              the venue and the feeling you want guests to remember. We design
              baby shower decoration{location}, welcome baby decoration and
              newborn welcome decoration around the preferred colours, available
              space, cultural requirements and chosen theme.
            </p>
            <p>
              Every setup is planned to feel soft, organised and camera-ready.
              A godh bharai decoration can be styled with floral details,
              family seating and a graceful backdrop, while naming ceremony
              decoration can include a name board, pastel balloon decoration,
              cake table and photo corner for close family moments.
            </p>
            <p>
              Whether the celebration is at home, on a terrace or inside a
              venue, our team balances balloons, props, signage, flowers and
              lights so the final look feels premium without making the space
              heavy.
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
              Gentle styling for family celebrations and newborn welcomes.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Baby shower decoration with soft pastel themes
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Baby shower decoration can be styled in pink, blue, peach,
                lavender, mint, white, rose-gold or gender-neutral palettes. We
                also create moon and star themes, teddy bear themes, cloud
                backdrops, floral styling and pastel balloon decoration for a
                soft, polished celebration.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Welcome baby decoration for homecoming
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Welcome baby decoration at home can include the entrance,
                living room, bedroom, staircase and baby&apos;s room. We use
                balloons, welcome signage, name boards, ribbons, fairy lights
                and soft decorative props to create a warm newborn welcome
                decoration for the homecoming moment.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Godh bharai and naming ceremony decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Godh bharai decoration can feel traditional, modern or a blend
                of both. We plan family seating areas, floral backdrops, balloon
                arches, stage styling and photo corners, while naming ceremony
                decoration can include the baby&apos;s name, soft props and a clean
                backdrop for blessings and photographs.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Baby shower decoration for homes and venues
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Our {cityKeyword} work adapts to apartments, villas, terraces,
                cafes, restaurants, farmhouses, banquet halls and society spaces
                {cityName ? ` in ${cityName}` : ""}. {areaLine}
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Pricing and customisation
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Final pricing depends on the theme, space, balloon work,
                backdrop, flowers, signage, props, cake table, travel and custom
                requirements. Share whether you need baby shower decoration at
                home, welcome baby decoration, newborn welcome decoration, godh
                bharai decoration or naming ceremony decoration, and we will
                suggest a setup that fits the occasion.
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
                Baby shower and welcome baby decoration packages start from
                &#8377;2,999. Final pricing depends on the selected theme,
                venue size, backdrop, balloon work, props, flowers, signage and
                custom requirements.
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
                    From
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

      <BabyShowerGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Baby shower decoration questions
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
        id="baby-shower-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your baby shower or welcome baby decoration with Event Wala
              Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your date, venue, city, budget and reference idea. Our team
              will suggest the right baby shower or welcome baby setup and
              confirm availability on WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <BabyShowerQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
