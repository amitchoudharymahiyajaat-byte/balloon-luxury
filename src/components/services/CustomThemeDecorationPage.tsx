import Link from "next/link";
import FallbackImage from "../home/FallbackImage";
import {
  getCitySlug,
  getServiceGallery,
  getServiceHeroMedia,
} from "../../lib/cityMedia";
import CustomThemeGallery from "./CustomThemeGallery";
import CustomThemeQuoteForm from "./CustomThemeQuoteForm";

type CustomThemeDecorationPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Essential Custom Theme",
    amount: "7,999",
    includes: [
      "Custom colour palette",
      "Basic themed backdrop",
      "Balloon or floral styling",
      "Personalised name or message",
      "Cake or display-table styling",
      "On-site setup",
    ],
  },
  {
    name: "Premium Venue Theme",
    amount: "17,999",
    includes: [
      "Premium stage or backdrop",
      "Entrance decoration",
      "Custom signage",
      "Balloon, floral or drape styling",
      "Cake or display-table setup",
      "Photo corner",
      "Decorative lighting",
      "On-site styling",
    ],
  },
  {
    name: "Luxury Banquet Experience",
    amount: "Custom Quote",
    includes: [
      "Complete banquet hall or venue styling",
      "Custom-designed stage",
      "Entrance and welcome area",
      "Premium backdrop",
      "Guest-table styling",
      "Photo wall or selfie corner",
      "Lighting and draping",
      "Custom props and signage",
      "Dedicated on-site styling team",
    ],
  },
];

const processSteps = [
  {
    title: "Share Your Idea",
    text: "Send a reference photo, event details, venue image and preferred colours.",
  },
  {
    title: "Get a Suggested Concept",
    text: "We suggest a suitable theme, elements and estimated budget.",
  },
  {
    title: "Confirm the Design",
    text: "Finalise the backdrop, stage, colours, props and booking details.",
  },
  {
    title: "Event-Day Setup",
    text: "Our team installs and styles the agreed decoration at the venue.",
  },
];

const relatedServices = [
  {
    title: "Wedding & Engagement Decor",
    href: "/services/wedding-decoration",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Corporate & Office Events",
    href: "/services/corporate-events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Birthday Decoration",
    href: "/services/birthday-decoration",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=900&auto=format&fit=crop",
  },
];

const cityAreaHighlights: Record<string, string> = {
  Jaipur:
    "In Jaipur, custom theme requests often come from Vaishali Nagar, Mansarovar, Malviya Nagar, C-Scheme and banquet venues near Tonk Road.",
  "Delhi NCR":
    "Across Delhi NCR, custom venue styling is commonly planned around Dwarka, Rohini, Connaught Place, Noida and Gurgaon.",
  Gurgaon:
    "In Gurgaon, popular requests come from Cyber City, Golf Course Road, DLF phases, Sohna Road and farmhouse venues.",
  Mumbai:
    "In Mumbai, banquet hall decoration requests often come from BKC, South Mumbai, Bandra, Andheri, Powai, Thane and Navi Mumbai.",
  Ahmedabad:
    "In Ahmedabad, popular custom themes come from SG Highway, Sindhu Bhavan Road, Satellite, Bopal and Vastrapur.",
  Bangalore:
    "In Bangalore, venue decoration requests are often planned around Koramangala, Indiranagar, Whitefield, HSR Layout and JP Nagar.",
  Hyderabad:
    "In Hyderabad, popular requests come from Banjara Hills, Jubilee Hills, Gachibowli, Kondapur and Madhapur.",
  Udaipur:
    "In Udaipur, custom venue styling often comes from Hiran Magri, Fatehpura, Shobhagpura, Ambamata and resort-style celebration spaces.",
  Noida:
    "In Noida, popular requests come from Sector 18, Sector 62, Sector 75, Sector 137 and Greater Noida.",
  Pune: "In Pune, custom theme decoration is often planned around Koregaon Park, Kothrud, Baner, Wakad, Viman Nagar and Hinjewadi.",
  Chennai:
    "In Chennai, popular requests come from T Nagar, Mylapore, Adyar, Anna Nagar, Velachery and ECR.",
  Kolkata:
    "In Kolkata, custom venue decoration often comes from Park Street, Salt Lake, New Town, Ballygunge and Alipore.",
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
      question:
        "Can I share a Pinterest or Instagram reference for custom decoration?",
      answer:
        "Yes. You can share a reference image, preferred colours and venue photos. We will adapt the concept according to your space, budget, material availability and setup conditions.",
    },
    {
      question: `Do you provide banquet hall decoration${city}?`,
      answer:
        "Yes. We provide customised banquet hall decoration for private celebrations, engagements, weddings, birthdays, baby showers, corporate gatherings and other large events.",
    },
    {
      question: "How is custom theme decoration priced?",
      answer:
        "Pricing depends on the venue size, stage, backdrop, flowers, balloons, drapes, lighting, signage, props, tables, transport and installation requirements. A final quote is shared after reviewing the event details.",
    },
    {
      question: "How early should I book a custom theme event?",
      answer:
        "Smaller custom setups should preferably be booked at least 5-7 days in advance. Banquet halls, large stages and detailed event themes should ideally be planned 2-4 weeks before the event.",
    },
  ];
}

export default function CustomThemeDecorationPage({
  cityName,
}: CustomThemeDecorationPageProps) {
  const serviceSlug = "custom-theme-decoration";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const customKeyword = cityName
    ? `custom theme decoration in ${cityName}`
    : "custom theme decoration";
  const banquetKeyword = cityName
    ? `banquet hall decoration in ${cityName}`
    : "banquet hall decoration";
  const areaLine =
    (cityName && cityAreaHighlights[cityName]) ||
    "We plan each venue around its size, ceiling height, guest movement, entry points and setup time.";

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <section className="relative isolate min-h-[590px] overflow-hidden bg-black text-white sm:min-h-[680px]">
        <FallbackImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] saturate-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/48 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.24),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            YOUR IDEA, DESIGNED FOR THE SPACE
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            {cityOrGeneral(
              cityName,
              "Custom Theme Decoration in {city}",
              "Custom Theme Decoration",
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Bespoke decoration for banquet halls, hotels, farmhouses, homes and
            event venues, designed from your idea, reference photo, colour
            palette and budget.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Reference-photo and Pinterest-inspired themes",
              "Banquet hall and large venue styling",
              "Custom backdrops, stages, entrances and photo areas",
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
              href="#custom-theme-booking"
              className="w-full max-w-xs rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black shadow-xl shadow-yellow-900/20 transition hover:scale-105 hover:bg-white sm:w-auto"
            >
              Plan My Theme
            </a>
            <a
              href="https://wa.me/919602060414?text=Hi%2C%20I%20want%20to%20plan%20custom%20theme%20decoration"
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
            &ldquo;The best event themes do not begin with a fixed package -
            they begin with an idea, a space and the feeling you want your
            guests to remember.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Custom theme decoration in {city}, built around your vision",
              "Custom theme decoration, built around your vision",
            )}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700">
              At Event Wala Dost, custom theme decoration is for celebrations
              that need more than a standard package. You can share a Pinterest
              image, Instagram reference, colour palette, event concept, venue
              photo or budget range, and we shape the design into customised
              event decoration that works for the actual space.
            </p>
            <p>
              Every custom theme decoration{location}, banquet hall decoration
              and venue decoration plan is adapted to the venue size, event
              type, guest count, lighting, installation time and practical
              requirements. The goal is not to force a fixed package into a
              room, but to make the event theme decoration feel natural inside
              the venue.
            </p>
            <p>
              From personalised decoration and custom backdrop decoration to
              entrances, stages, guest-table styling and photo areas, we keep
              the visual direction clear while adjusting details for safety,
              availability, budget and venue rules.
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
              Bespoke themes planned for the full venue, not just one backdrop.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Banquet hall decoration for large celebrations
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Banquet hall decoration can be planned for birthdays,
                anniversaries, engagements, weddings, baby showers, corporate
                gatherings, award functions and private celebrations. A larger
                space often needs stage decoration, entrance styling, a
                customised backdrop, photo wall, cake or display table,
                guest-table styling, floral and balloon elements, lighting,
                signage and personalised details that feel balanced across the
                whole hall.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Themes created from your reference photo
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Customers often share Pinterest images, Instagram references or
                previous event photos. We can recreate the visual direction or
                adapt it according to venue size, available budget, colour
                availability, safety, installation time and local venue rules,
                without promising an exact copy of every reference image.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Custom stage, backdrop and entrance decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Custom stage decoration can include premium stages, couple
                stages, birthday stages, branded backdrops, floral frames,
                balloon walls, drapes, LED signs, entrance arches, welcome
                boards and photo corners. The final custom backdrop decoration
                is planned around the event type and the way guests will move
                through the venue.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Decoration for hotels, farmhouses and event venues
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Our {customKeyword} and {banquetKeyword} work adapts to banquet
                halls, hotels, resorts, farmhouses, rooftops, lawns,
                restaurants, cafes, society halls, homes and private venues
                {cityName ? ` in ${cityName}` : ""}. {areaLine}
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Colour palettes and personalised event details
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Themes can be built around pastel palettes, floral styling,
                black-and-gold luxury, red romantic setups, cartoon themes,
                jungle themes, traditional themes, corporate brand colours or a
                fully customised palette. We can include names, initials, age
                numbers, company logos, welcome boards and personalised
                messages.
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Theme planning, pricing and execution
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Final pricing depends on venue size, stage and backdrop size,
                flower and balloon work, draping, lighting, props, printing and
                signage, guest-table styling, transport, setup time and custom
                requirements. Share the venue, reference and budget so we can
                suggest a realistic personalised event decoration plan.
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
                Custom themes start from{" "}
                <span className="whitespace-nowrap">&#8377;7,999</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Custom theme decoration starts from &#8377;7,999. Final pricing
                is prepared after reviewing the event type, venue size,
                reference design, colour theme, backdrop, stage, lighting,
                props and other customised requirements.
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
                    {item.amount === "Custom Quote" ? "Quote" : "From"}
                  </p>
                  <p className="mt-1 text-3xl font-black text-gray-950">
                    {item.amount === "Custom Quote" ? (
                      item.amount
                    ) : (
                      <>&#8377;{item.amount}</>
                    )}
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

      <CustomThemeGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              Booking Process
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              How custom theme booking works
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[22px] border border-gray-100 bg-white p-5 shadow-md shadow-purple-950/5"
              >
                <h3 className="text-base font-black text-gray-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Custom theme decoration questions
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
              More event ideas
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
        id="custom-theme-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your custom theme decoration with Event Wala Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your venue, date, theme reference, city, budget and event
              details. Our team will suggest a realistic design direction and
              custom quote on WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <CustomThemeQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
