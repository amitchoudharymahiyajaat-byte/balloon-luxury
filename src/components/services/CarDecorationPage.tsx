import { buildPageWhatsAppMessage, createWhatsAppUrl } from "../../lib/whatsapp";
import Link from "next/link";
import FallbackImage from "../home/FallbackImage";
import {
  getCitySlug,
  getServiceGallery,
  getServiceHeroMedia,
} from "../../lib/cityMedia";
import CarDecorationGallery from "./CarDecorationGallery";
import CarDecorationQuoteForm from "./CarDecorationQuoteForm";

type CarDecorationPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Simple Car Boot Surprise",
    amount: "2,499",
    includes: [
      "Basic balloon decoration",
      "Birthday or anniversary banner",
      "Foil balloons",
      "Fairy lights",
      "Simple gift and cake placement",
      "On-site setup",
    ],
  },
  {
    name: "Premium Car Boot Decor",
    amount: "4,999",
    includes: [
      "Themed balloon styling",
      "Custom message or name",
      "Photographs and memory clips",
      "Flowers or rose petals",
      "Fairy lights",
      "Cake and gift arrangement",
      "Premium boot layout",
    ],
  },
  {
    name: "Luxury Car Surprise Setup",
    amount: "8,999",
    includes: [
      "Complete car boot styling",
      "Premium balloons and flowers",
      "Custom backdrop inside boot",
      "LED candles and fairy lights",
      "Photo memory setup",
      "Personalised message",
      "Gift and cake styling",
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
  Jaipur:
    "In Jaipur, car boot surprise requests often come from Vaishali Nagar, Mansarovar, Malviya Nagar, C-Scheme and Jagatpura.",
  "Delhi NCR":
    "Across Delhi NCR, car boot setups are commonly planned around Dwarka, Rohini, Connaught Place, Noida and Gurgaon.",
  Gurgaon:
    "In Gurgaon, popular requests come from Golf Course Road, DLF phases, Sohna Road, Cyber City and Sector 56.",
  Mumbai:
    "In Mumbai, car decoration requests often come from South Mumbai, Bandra, Andheri, Powai, Thane and Navi Mumbai.",
  Ahmedabad:
    "In Ahmedabad, popular requests come from SG Highway, Sindhu Bhavan Road, Satellite, Bopal and Vastrapur.",
  Bangalore:
    "In Bangalore, car boot surprises are often planned around Koramangala, Indiranagar, Whitefield, HSR Layout and JP Nagar.",
  Hyderabad:
    "In Hyderabad, popular requests come from Banjara Hills, Jubilee Hills, Gachibowli, Kondapur and Madhapur.",
  Udaipur:
    "In Udaipur, car decoration requests often come from Hiran Magri, Fatehpura, Shobhagpura, Ambamata and lakeside celebration spots.",
  Noida:
    "In Noida, popular requests come from Sector 18, Sector 62, Sector 75, Sector 137 and Greater Noida.",
  Pune: "In Pune, car boot surprises are often planned around Koregaon Park, Kothrud, Baner, Wakad, Viman Nagar and Hinjewadi.",
  Chennai:
    "In Chennai, popular requests come from T Nagar, Mylapore, Adyar, Anna Nagar, Velachery and ECR.",
  Kolkata:
    "In Kolkata, car decoration requests often come from Park Street, Salt Lake, New Town, Ballygunge and Alipore.",
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
      question: `How early should I book car boot decoration${city}?`,
      answer:
        "Simple car boot surprises may be possible with 24-48 hours' notice. Custom themes, photo setups and proposal decorations should preferably be booked 3-5 days in advance.",
    },
    {
      question: "Can you decorate any type of car?",
      answer:
        "Most hatchbacks, sedans and SUVs can be decorated. The final setup depends on boot size, vehicle model and available space.",
    },
    {
      question: "Can I share photos, gifts and a custom message?",
      answer:
        "Yes. You can provide photographs, gifts, cake and a personalised message. We will arrange them according to the selected theme and available boot space.",
    },
    {
      question: "What is included in a car boot decoration package?",
      answer:
        "Depending on the package, the setup may include balloons, foil banners, flowers, photographs, fairy lights, rose petals, cake placement, gift styling and complete installation.",
    },
  ];
}

export default function CarDecorationPage({ cityName }: CarDecorationPageProps) {
  const serviceSlug = "car-decoration";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const carBootKeyword = cityName
    ? `car boot decoration in ${cityName}`
    : "car boot decoration";
  const carKeyword = cityName
    ? `car decoration in ${cityName}`
    : "car decoration";
  const areaLine =
    (cityName && cityAreaHighlights[cityName]) ||
    "We plan each setup around the parking location, reveal timing, car model and available space so the surprise feels smooth and polished.";

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <section className="relative isolate min-h-[590px] overflow-hidden bg-black text-white sm:min-h-[680px]">
        <FallbackImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.52] saturate-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/50 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.24),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            SURPRISES ON WHEELS
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            {cityOrGeneral(
              cityName,
              "Car Boot & Car Decoration in {city}",
              "Car Boot & Car Decoration",
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Creative car boot surprise and car decoration for birthdays,
            anniversaries, proposals, romantic surprises and special
            celebrations.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Custom car boot surprise themes",
              "Balloons, flowers, lights and photo setups",
              "Birthday, anniversary and proposal decoration",
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
              href="#car-decoration-booking"
              className="w-full max-w-xs rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black shadow-xl shadow-yellow-900/20 transition hover:scale-105 hover:bg-white sm:w-auto"
            >
              Book This Decor
            </a>
            <a
              href={createWhatsAppUrl(
                buildPageWhatsAppMessage({
                  page: cityName ? "city-service" : "service",
                  city: cityName,
                  service: "Car Decoration",
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
            THE STORY
          </p>
          <blockquote className="mt-5 max-w-4xl font-serif text-3xl italic leading-tight text-[#2f2038] sm:text-5xl">
            &ldquo;Sometimes the most memorable surprise is waiting quietly in
            the boot of a car, ready to open into a moment no one
            expected.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Car boot decoration in {city}, planned around the surprise",
              "Car boot decoration, planned around the surprise",
            )}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700">
              At Event Wala Dost, car boot decoration starts with the reveal:
              where the car will be parked, who is being surprised and what the
              moment should feel like when the boot opens. We plan car boot
              decoration{location}, car decoration and car boot surprise
              decoration around the occasion, vehicle size, preferred colours,
              photos, message and budget.
            </p>
            <p>
              Birthday car decoration can feel playful with balloons, age
              numbers, banners and cake placement, while anniversary car
              decoration can feel softer with rose petals, photographs, flowers
              and fairy lights. Each layout is adjusted to the boot space so the
              setup looks full without feeling crowded.
            </p>
            <p>
              For proposal car decoration or a romantic car surprise, we can
              style the reveal with a private message, photo memories, LED
              candles, flowers, gifts and a clean arrangement that keeps the
              focus on the person opening the surprise.
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
              Compact surprise styling with a polished reveal.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Birthday car boot surprise decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Birthday car decoration can include balloon setups inside the
                car boot, foil balloons, age numbers, birthday banners, gifts,
                cake placement, photographs, fairy lights and customised
                messages. The design is planned so the birthday car boot
                surprise feels bright, personal and easy to photograph.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Anniversary and romantic car decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Anniversary car decoration and romantic car surprise setups can
                use heart balloons, rose petals, flowers, photographs, fairy
                lights and anniversary messages. We keep the styling warm and
                thoughtful so the car becomes a quiet, personal celebration
                space.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Proposal car decoration and surprise setup
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Proposal car decoration can include marry-me messages, ring
                presentation, photo memories, flower styling, LED candles,
                lights and private proposal details. The layout is designed for
                a clean reveal, a meaningful pause and a photo-ready moment.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Car decoration for flowers, ribbons and special occasions
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Exterior car decoration can be styled with ribbons, flowers,
                balloon details and simple premium accents for weddings,
                engagements, homecomings and celebrations. The design stays neat
                and secure, with styling adjusted to the car model and occasion.
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Location, setup and customisation
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Our {carBootKeyword} and {carKeyword} work can be planned for
                homes, cafes, restaurants, parking areas, rooftops and private
                venues{cityName ? ` in ${cityName}` : ""}. The vehicle should
                be parked safely, and the final design depends on available
                space, car model, theme and setup location. {areaLine}
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
                <span className="whitespace-nowrap">&#8377;2,499</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Car boot and car decoration packages start from &#8377;2,499.
                Final pricing depends on the vehicle size, theme, balloon work,
                flowers, lights, photographs, props, location and custom
                requirements.
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

      <CarDecorationGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Car boot decoration questions
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
        id="car-decoration-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your car boot surprise with Event Wala Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your date, parking location, car model, city, budget and
              reference idea. Our team will suggest the right car boot or car
              decoration plan and confirm availability on WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <CarDecorationQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
