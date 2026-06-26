import { createWhatsAppUrl } from "../../lib/business";
import Link from "next/link";
import FallbackImage from "../home/FallbackImage";
import {
  getCitySlug,
  getServiceGallery,
  getServiceHeroMedia,
} from "../../lib/cityMedia";
import CorporateEventsGallery from "./CorporateEventsGallery";
import CorporateEventsQuoteForm from "./CorporateEventsQuoteForm";

type CorporateEventsPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Simple Office Event Setup",
    amount: "4,999",
    includes: [
      "Balloon or minimal floral styling",
      "Welcome or celebration signage",
      "Basic branded backdrop",
      "Cake or display table styling",
      "Small photo area",
      "On-site setup",
    ],
  },
  {
    name: "Professional Corporate Setup",
    amount: "9,999",
    includes: [
      "Custom branded backdrop",
      "Company logo or event signage",
      "Stage or presentation-area styling",
      "Registration or welcome desk decor",
      "Balloon or floral elements",
      "Photo wall",
      "Professional lighting",
    ],
  },
  {
    name: "Premium Conference & Banquet Setup",
    amount: "19,999",
    includes: [
      "Complete stage and backdrop styling",
      "Company branding and logo panels",
      "Entrance and registration-area decoration",
      "Podium and screen-area styling",
      "Table and floral decor",
      "Award or product display area",
      "Photo wall",
      "On-site styling team",
    ],
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
    title: "Custom Theme Decoration",
    href: "/services/custom-theme-decoration",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Anniversary & Romantic Decor",
    href: "/services/anniversary-decoration",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop",
  },
];

const cityAreaHighlights: Record<string, string> = {
  Jaipur:
    "In Jaipur, corporate event requests often come from C-Scheme, Vaishali Nagar, Malviya Nagar, Mansarovar and hotel venues near Tonk Road.",
  "Delhi NCR":
    "Across Delhi NCR, corporate setups are commonly planned around Connaught Place, Dwarka, Rohini, Noida and Gurgaon business districts.",
  Gurgaon:
    "In Gurgaon, popular requests come from Cyber City, Golf Course Road, DLF phases, Sohna Road and premium hotel venues.",
  Mumbai:
    "In Mumbai, corporate event requests often come from BKC, South Mumbai, Andheri, Powai, Thane and Navi Mumbai.",
  Ahmedabad:
    "In Ahmedabad, popular corporate requests come from SG Highway, Sindhu Bhavan Road, Satellite, Bopal and Vastrapur.",
  Bangalore:
    "In Bangalore, office and conference setups are often planned around Koramangala, Indiranagar, Whitefield, HSR Layout and Manyata Tech Park.",
  Hyderabad:
    "In Hyderabad, popular requests come from Banjara Hills, Jubilee Hills, Gachibowli, Kondapur and Madhapur.",
  Udaipur:
    "In Udaipur, corporate gathering requests often come from Hiran Magri, Fatehpura, Shobhagpura and hotel venues near the lake belt.",
  Noida:
    "In Noida, popular requests come from Sector 18, Sector 62, Sector 75, Sector 137 and Greater Noida corporate venues.",
  Pune: "In Pune, corporate setups are often planned around Koregaon Park, Kothrud, Baner, Wakad, Viman Nagar and Hinjewadi.",
  Chennai:
    "In Chennai, popular corporate requests come from T Nagar, Mylapore, Adyar, Anna Nagar, Velachery and OMR.",
  Kolkata:
    "In Kolkata, corporate event requests often come from Park Street, Salt Lake, New Town, Ballygunge and Alipore.",
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
      question: `How early should I book corporate event decoration${city}?`,
      answer:
        "Small office celebrations may be arranged with 2-3 days' notice. Conferences, product launches, branded stages and banquet hall meetings should preferably be planned 1-3 weeks in advance.",
    },
    {
      question: "Can you use our company logo and brand colours?",
      answer:
        "Yes. We can customise the backdrop, signage, photo wall, registration desk and decorative elements according to your company logo, brand colours and event theme.",
    },
    {
      question:
        "Do you decorate banquet halls for corporate meetings and conferences?",
      answer:
        "Yes. We can style banquet halls for corporate meetings, conferences, award functions and annual gatherings with branded backdrops, stage decor, registration areas, podium styling and professional lighting.",
    },
    {
      question: "What is included in a corporate event decoration package?",
      answer:
        "Depending on the package, the setup may include branded backdrop, stage styling, company signage, registration desk, balloon or floral decor, lighting, photo wall, podium styling and complete installation.",
    },
  ];
}

export default function CorporateEventsPage({
  cityName,
}: CorporateEventsPageProps) {
  const serviceSlug = "corporate-events";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const corporateKeyword = cityName
    ? `corporate event decoration in ${cityName}`
    : "corporate event decoration";
  const officeKeyword = cityName
    ? `office decoration in ${cityName}`
    : "office decoration";
  const areaLine =
    (cityName && cityAreaHighlights[cityName]) ||
    "We plan each setup around guest movement, presentation flow, brand visibility and the time available for installation.";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/50 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.22),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            PROFESSIONAL EVENTS, BEAUTIFULLY PRESENTED
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            {cityOrGeneral(
              cityName,
              "Corporate & Office Event Decoration in {city}",
              "Corporate & Office Event Decoration",
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Professional decoration for office celebrations, corporate
            meetings, conferences, product launches, annual events and banquet
            hall gatherings.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Office, conference and banquet hall setups",
              "Brand colours and customised signage",
              "Meetings, launches and employee celebrations",
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
              href="#corporate-events-booking"
              className="w-full max-w-xs rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black shadow-xl shadow-yellow-900/20 transition hover:scale-105 hover:bg-white sm:w-auto"
            >
              Book This Decor
            </a>
            <a
              href={createWhatsAppUrl("Hi, I want to book corporate and office event decoration")}
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
            &ldquo;A well-designed corporate space does more than look
            professional - it gives people a setting where ideas, achievements
            and brands feel important.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Corporate event decoration in {city}, designed around your brand and purpose",
              "Corporate event decoration, designed around your brand and purpose",
            )}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700">
              At Event Wala Dost, corporate event decoration starts with the
              purpose of the day: what the company is celebrating, presenting or
              announcing. We plan corporate event decoration{location}, office
              decoration and office event decoration around company branding,
              venue size, guest count, colour palette, schedule and budget.
            </p>
            <p>
              Setups can range from a simple office celebration with a branded
              cake table and photo corner to a professional corporate meeting
              decoration plan with a clean backdrop, welcome desk, podium area
              and signage that supports the agenda.
            </p>
            <p>
              For conference decoration, product launch decoration and banquet
              hall meeting decoration, we keep the styling polished and
              purposeful so the brand, speakers, guests and photographs all
              feel properly framed.
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
              Professional styling for offices, launches and formal gatherings.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Office celebration and employee event decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Office event decoration can support birthdays, work
                anniversaries, employee recognition, farewell parties, welcome
                events, festive office decoration and team celebrations. We use
                balloons, branded signage, cake tables and photo corners to
                make the workplace feel celebratory while staying professional.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Corporate meetings and conference decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Corporate meeting decoration and conference decoration can be
                planned for board meetings, seminars, training sessions,
                networking events and leadership meetings. The setup may
                include a stage backdrop, registration area, podium branding,
                welcome signage, screen area, floral styling and clean
                professional decoration.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Banquet hall meetings and corporate gatherings
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Companies also organise meetings, conferences, award functions
                and annual gatherings in banquet halls. For banquet hall
                corporate event decoration, we can style the stage and backdrop,
                company logo panels, entrance, registration desk, table decor,
                podium area, photo wall and professional lighting without making
                this page a large banquet-event theme catalogue.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Product launch and brand activation decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Product launch decoration can include product display areas,
                branded backdrops, launch stages, ribbon-cutting setups, logo
                walls, media photo corners and customised brand-colour
                decoration. The final design keeps the product and company
                message visible from the first guest entry.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Annual day, award ceremony and office party decor
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Annual day decoration, award nights, milestone celebrations,
                dealer meets, festive parties and team events can be styled for
                offices, hotels and banquet halls. Our {corporateKeyword} and{" "}
                {officeKeyword} work adapts to the event scale, company culture
                and venue flow. {areaLine}
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Branding, pricing and customisation
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Final pricing depends on venue size, branding requirements,
                backdrop, stage, flowers, balloon work, signage, registration
                area, lighting, props and setup time. Share your event purpose,
                guest count, brand colours, venue type and schedule so we can
                recommend a focused corporate event decoration plan.
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
                <span className="whitespace-nowrap">&#8377;4,999</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Corporate and office event decoration packages start from
                &#8377;4,999. Final pricing depends on venue size, branding,
                backdrop, signage, stage requirements, lighting, props and
                custom setup needs.
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

      <CorporateEventsGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Corporate event decoration questions
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
        id="corporate-events-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your corporate or office event decoration with Event Wala
              Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your date, venue, company branding, guest count, city and
              budget. Our team will suggest a professional setup and confirm
              availability on WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <CorporateEventsQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
