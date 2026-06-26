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
import WeddingGallery from "./WeddingGallery";
import WeddingQuoteForm from "./WeddingQuoteForm";

type WeddingDecorationPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Simple Engagement Setup",
    amount: "7,999",
    includes: [
      "Basic engagement backdrop",
      "Balloon or artificial flower styling",
      "Couple seating",
      "Name initials or simple signage",
      "Basic lighting",
      "On-site setup",
    ],
  },
  {
    name: "Premium Ring Ceremony Decor",
    amount: "14,999",
    includes: [
      "Premium stage backdrop",
      "Floral and balloon styling",
      "Couple sofa setup",
      "Cake table decoration",
      "LED name or customised message",
      "Entrance or photo corner styling",
      "Decorative lighting",
    ],
  },
  {
    name: "Luxury Wedding Celebration Decor",
    amount: "29,999",
    includes: [
      "Complete stage styling",
      "Premium floral backdrop",
      "Draping and lighting",
      "Couple seating arrangement",
      "Entrance decoration",
      "Photo and selfie corner",
      "Custom props and signage",
      "On-site styling team",
    ],
  },
];

const relatedServices = [
  {
    title: "Anniversary & Romantic Decor",
    href: "/services/anniversary-decoration",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop",
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

const cityAreaHighlights: Record<string, string> = {
  Jaipur:
    "In Jaipur, wedding and engagement setups are commonly planned around Vaishali Nagar, Mansarovar, Malviya Nagar, C-Scheme and wedding venues near Jagatpura.",
  "Delhi NCR":
    "Across Delhi NCR, we often plan decor for Dwarka, Rohini, Connaught Place, Noida, Gurgaon and banquet venues around the NCR belt.",
  Gurgaon:
    "In Gurgaon, popular requests come from Golf Course Road, DLF phases, Sohna Road, Cyber City and premium farmhouse venues.",
  Mumbai:
    "In Mumbai, wedding and engagement requests often come from South Mumbai, Bandra, Andheri, Powai, Thane and Navi Mumbai venues.",
  Ahmedabad:
    "In Ahmedabad, popular function requests come from SG Highway, Sindhu Bhavan Road, Satellite, Bopal and Vastrapur.",
  Bangalore:
    "In Bangalore, wedding and engagement setups are often planned around Koramangala, Indiranagar, Whitefield, HSR Layout and JP Nagar.",
  Hyderabad:
    "In Hyderabad, popular requests come from Banjara Hills, Jubilee Hills, Gachibowli, Kondapur and Madhapur venues.",
  Udaipur:
    "In Udaipur, decor requests often come from Hiran Magri, Fatehpura, Shobhagpura, Ambamata and resort-style celebration spaces.",
  Noida:
    "In Noida, engagement and wedding setups are commonly planned around Sector 18, Sector 62, Sector 75, Sector 137 and Greater Noida.",
  Pune: "In Pune, popular requests come from Koregaon Park, Kothrud, Baner, Wakad, Viman Nagar and Hinjewadi venues.",
  Chennai:
    "In Chennai, wedding and engagement requests often come from T Nagar, Mylapore, Adyar, Anna Nagar, Velachery and ECR venues.",
  Kolkata:
    "In Kolkata, popular function requests come from Park Street, Salt Lake, New Town, Ballygunge and Alipore.",
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
      question: `How early should I book wedding or engagement decoration${city}?`,
      answer:
        "Simple engagement setups should preferably be booked 5-7 days in advance. Large wedding stages, floral work and customised themes should be planned at least 2-4 weeks before the event.",
    },
    {
      question: "Do you provide decoration for haldi, mehndi and sangeet?",
      answer:
        "Yes. We provide themed decoration for haldi, mehndi, sangeet, ring ceremonies, engagement functions and wedding celebrations at homes and venues.",
    },
    {
      question: "Can I share a reference photo or custom colour theme?",
      answer:
        "Yes. You can share your preferred theme, colour palette or reference photo. We can customise the backdrop, flowers, drapes, lights and props according to the venue and budget.",
    },
    {
      question: "What is included in wedding and engagement decoration?",
      answer:
        "Depending on the selected package, the setup may include stage backdrop, floral styling, balloon work, drapes, lighting, seating, signage, entrance decor, cake table and complete installation.",
    },
  ];
}

export default function WeddingDecorationPage({
  cityName,
}: WeddingDecorationPageProps) {
  const serviceSlug = "wedding-decoration";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const weddingKeyword = cityName
    ? `wedding decoration in ${cityName}`
    : "wedding decoration";
  const engagementKeyword = cityName
    ? `engagement decoration in ${cityName}`
    : "engagement decoration";
  const areaLine =
    (cityName && cityAreaHighlights[cityName]) ||
    "We plan each function around the venue flow, entry points, seating and photography angles so the setup feels complete without overwhelming the space.";

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <section className="relative isolate min-h-[590px] overflow-hidden bg-black text-white sm:min-h-[680px]">
        <FallbackImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] saturate-[0.98]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/48 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.24),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            CELEBRATIONS DESIGNED BEAUTIFULLY
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            {cityOrGeneral(
              cityName,
              "Wedding & Engagement Decoration in {city}",
              "Wedding & Engagement Decoration",
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Elegant stage, backdrop, entrance and balloon-floral decoration for
            engagements, ring ceremonies, weddings, haldi, mehndi and sangeet
            celebrations.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Custom stage and backdrop themes",
              "Engagement, wedding and pre-wedding decor",
              "Home, farmhouse and banquet decoration",
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
              href="#wedding-booking"
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
                  service: "Wedding Decoration",
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
            THE STORY
          </p>
          <blockquote className="mt-5 max-w-4xl font-serif text-3xl italic leading-tight text-[#2f2038] sm:text-5xl">
            &ldquo;Some celebrations are remembered for the moment, and some
            are remembered for the way the entire space made that moment
            feel.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Wedding and engagement decoration in {city}, designed around your celebration",
              "Wedding and engagement decoration, designed around your celebration",
            )}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700">
              At Event Wala Dost, wedding decoration begins with the venue, the
              function and the way the family wants the celebration to feel. We
              plan wedding decoration{location}, engagement decoration and ring
              ceremony decoration around the guest count, colour palette, stage
              size, couple seating, budget and photography requirements.
            </p>
            <p>
              Every setup is shaped around the function. A compact engagement
              decoration may need a graceful couple backdrop and name initials,
              while a larger wedding stage decoration may need drapes, floral
              frames, lighting, entrance styling and a detailed wedding backdrop
              decoration that looks balanced from every angle.
            </p>
            <p>
              From haldi decoration with marigold warmth to mehndi decoration
              with colourful seating and sangeet decoration with a lively photo
              zone, we keep the design useful, elegant and easy for guests to
              enjoy.
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
              Wedding decor that respects the venue and elevates the ceremony.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Engagement and ring ceremony decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Engagement decoration and ring ceremony decoration can include
                floral frames, balloon styling, couple seating, name initials,
                LED signs, cake table styling and photo corners. We keep the
                backdrop polished so the ring exchange, family photos and couple
                portraits all feel intentional.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Wedding stage and backdrop decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Wedding stage decoration can be created with floral backdrops,
                drapes, lighting, couple seating, entrance decor and premium
                photo-ready details. The final wedding backdrop decoration is
                planned around the stage size, ceiling height, camera view and
                guest movement.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Haldi, mehndi and sangeet decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Haldi decoration can be bright with marigolds, yellow drapes and
                floor seating, while mehndi decoration can include floral props,
                colourful fabrics, selfie corners and family seating areas.
                Sangeet decoration often needs bolder stage styling, lights and
                a lively entrance for performances and photos.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Wedding decoration for homes, farmhouses and banquet halls
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Our {weddingKeyword} and {engagementKeyword} work adapts to
                homes, terraces, gardens, farmhouses, hotels, banquet halls,
                resorts and society venues{cityName ? ` in ${cityName}` : ""}.{" "}
                {areaLine}
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Theme planning, pricing and customisation
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Final pricing depends on the function, venue size, stage size,
                flower work, backdrop, draping, lights, props, seating and
                custom design requirements. Share your function type, venue,
                reference photos, colour palette and budget so we can recommend
                the right wedding decoration, engagement decoration, haldi
                decoration, mehndi decoration or sangeet decoration plan.
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
                <span className="whitespace-nowrap">&#8377;7,999</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Wedding and engagement decoration packages start from
                &#8377;7,999. Final pricing depends on the function, venue size,
                stage, backdrop, flower work, draping, lighting, props and
                customised requirements.
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

      <WeddingGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Wedding and engagement decoration questions
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
        id="wedding-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your wedding or engagement decoration with Event Wala Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your function date, venue, city, budget and reference idea.
              Our team will suggest the right stage, backdrop and decor plan,
              then confirm availability on WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <WeddingQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
