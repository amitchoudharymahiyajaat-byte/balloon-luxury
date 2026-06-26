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
import RoomDecorationGallery from "./RoomDecorationGallery";
import RoomDecorationQuoteForm from "./RoomDecorationQuoteForm";

type RoomDecorationPageProps = {
  cityName?: string;
};

const packages = [
  {
    name: "Simple Room Surprise",
    amount: "2,499",
    includes: [
      "Balloon wall or ceiling decoration",
      "Birthday or anniversary foil banner",
      "Fairy lights",
      "Basic bed styling",
      "Simple cake and gift placement",
      "On-site setup",
    ],
  },
  {
    name: "Premium Romantic Room Decor",
    amount: "4,999",
    includes: [
      "Balloon garland or heart theme",
      "Rose petals or artificial flowers",
      "Fairy lights and LED candles",
      "Custom name or message",
      "Photograph arrangement",
      "Bed and cake-table styling",
    ],
  },
  {
    name: "Luxury Hotel Room Experience",
    amount: "8,999",
    includes: [
      "Complete room transformation",
      "Premium balloon and flower styling",
      "Custom backdrop or romantic signage",
      "Photo memory setup",
      "LED candles and warm lighting",
      "Bed, cake and gift styling",
      "Personalised message",
      "On-site setup",
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
    title: "Birthday Decoration",
    href: "/services/birthday-decoration",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=900&auto=format&fit=crop",
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
    "In Jaipur, room decoration requests often come from Vaishali Nagar, Mansarovar, Malviya Nagar, C-Scheme and hotel stays near Jagatpura.",
  "Delhi NCR":
    "Across Delhi NCR, room and hotel setups are commonly planned around Dwarka, Rohini, Connaught Place, Noida and Gurgaon.",
  Gurgaon:
    "In Gurgaon, popular requests come from Golf Course Road, DLF phases, Sohna Road, Cyber City and premium hotel corridors.",
  Mumbai:
    "In Mumbai, room decoration requests often come from South Mumbai, Bandra, Andheri, Powai, Thane and Navi Mumbai.",
  Ahmedabad:
    "In Ahmedabad, popular room setup requests come from SG Highway, Sindhu Bhavan Road, Satellite, Bopal and Vastrapur.",
  Bangalore:
    "In Bangalore, room surprises are often planned around Koramangala, Indiranagar, Whitefield, HSR Layout and JP Nagar.",
  Hyderabad:
    "In Hyderabad, popular requests come from Banjara Hills, Jubilee Hills, Gachibowli, Kondapur and Madhapur.",
  Udaipur:
    "In Udaipur, hotel room decoration requests often come from Hiran Magri, Fatehpura, Shobhagpura, Ambamata and resort-style stays.",
  Noida:
    "In Noida, popular requests come from Sector 18, Sector 62, Sector 75, Sector 137 and Greater Noida.",
  Pune: "In Pune, room decoration requests are often planned around Koregaon Park, Kothrud, Baner, Wakad, Viman Nagar and Hinjewadi.",
  Chennai:
    "In Chennai, popular requests come from T Nagar, Mylapore, Adyar, Anna Nagar, Velachery and ECR.",
  Kolkata:
    "In Kolkata, room decoration requests often come from Park Street, Salt Lake, New Town, Ballygunge and Alipore.",
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
      question: `How early should I book room decoration${city}?`,
      answer:
        "Simple birthday or anniversary room decoration may be possible with 24-48 hours' notice. Custom themes, hotel setups, photographs and proposal decorations should preferably be booked 3-5 days in advance.",
    },
    {
      question: "Do you provide decoration inside hotels and resorts?",
      answer:
        "Yes, subject to permission from the hotel or property. The customer should confirm the room number, entry permission and setup timing before the decoration team arrives.",
    },
    {
      question: "Can I share photographs, gifts and a reference theme?",
      answer:
        "Yes. You can provide photographs, gifts, cake, colour preferences and a reference image. We can customise the room decoration according to the available space and budget.",
    },
    {
      question: "What is included in a room decoration package?",
      answer:
        "Depending on the package, the setup may include balloons, foil banners, flowers, rose petals, fairy lights, LED candles, photographs, personalised signage, bed styling, cake placement and complete installation.",
    },
  ];
}

export default function RoomDecorationPage({
  cityName,
}: RoomDecorationPageProps) {
  const serviceSlug = "room-decoration";
  const citySlug = getCitySlug(cityName);
  const heroImage = getServiceHeroMedia(citySlug, serviceSlug);
  const galleryImages = getServiceGallery(citySlug, serviceSlug);
  const location = citySuffix(cityName);
  const faqs = getFaqs(cityName);
  const roomKeyword = cityName
    ? `room decoration in ${cityName}`
    : "room decoration";
  const hotelKeyword = cityName
    ? `hotel room decoration in ${cityName}`
    : "hotel room decoration";
  const areaLine =
    (cityName && cityAreaHighlights[cityName]) ||
    "We plan each setup around access, room rules, available time and the way the surprise should feel when the door opens.";

  return (
    <main className="bg-[#fffaf7] text-gray-950">
      <section className="relative isolate min-h-[590px] overflow-hidden bg-black text-white sm:min-h-[680px]">
        <FallbackImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.54] saturate-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/48 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-transparent to-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_34%,rgba(245,158,11,0.24),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl flex-col justify-center px-4 py-16 text-left sm:min-h-[680px] sm:px-6">
          <p className="w-fit rounded-full border border-yellow-300/25 bg-yellow-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">
            BEAUTIFUL SURPRISES IN PRIVATE SPACES
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            {cityOrGeneral(
              cityName,
              "Room & Hotel Decoration in {city}",
              "Room & Hotel Decoration",
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
            Elegant balloon, flower, candle and fairy-light decoration for
            birthdays, anniversaries, proposals, honeymoon stays and romantic
            room surprises.
          </p>

          <div className="mt-6 grid max-w-3xl gap-3 text-sm font-semibold text-white/88 sm:grid-cols-3">
            {[
              "Home, bedroom and hotel room setups",
              "Birthday, anniversary and proposal themes",
              "Balloons, flowers, lights and personalised details",
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
              href="#room-decoration-booking"
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
                  service: "Room Decoration",
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
            &ldquo;A room becomes part of the memory when every light, flower
            and balloon is placed for the moment someone opens the door.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-2xl font-black leading-tight text-gray-950 sm:text-4xl">
            {cityOrGeneral(
              cityName,
              "Room decoration in {city}, designed around the surprise moment",
              "Room decoration, designed around the surprise moment",
            )}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
            <p className="first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.78] first-letter:text-purple-700">
              At Event Wala Dost, room decoration starts with the private
              moment: the occasion, room size, available setup time, preferred
              colours, hotel rules, surprise plan and budget. We plan room
              decoration{location}, hotel room decoration and birthday room
              decoration so the space feels intentional the moment the door
              opens.
            </p>
            <p>
              The setup can be simple and intimate, with balloons, flowers,
              fairy lights and cake placement, or a complete room transformation
              with photographs, personalised messages, warm lights and
              cake-table styling. Every detail is adjusted to the available
              space and access rules.
            </p>
            <p>
              Anniversary room decoration, romantic room decoration, proposal
              room decoration and honeymoon room decoration can all be styled in
              a soft, premium way so the surprise feels personal rather than
              crowded.
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
              Private-space styling that feels warm, organised and easy to enjoy.
            </h2>
          </div>

          <div className="space-y-8">
            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Birthday room decoration at home
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Birthday room decoration can be created inside bedrooms and
                living rooms with balloon garlands, foil balloons, age numbers,
                birthday banners, photographs, fairy lights, cake placement and
                personalised messages. We keep the layout clean so the room
                feels festive without losing comfort.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Romantic hotel room decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Hotel room decoration works beautifully for anniversaries,
                romantic stays and couple surprises with heart balloons, rose
                petals, flowers, LED candles, fairy lights, bed styling and
                customised messages. Hotel permission and entry timing may be
                required before setup, so we plan the decor around property
                rules and guest arrival time.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Proposal and anniversary room setups
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Proposal room decoration can include marry-me signage, ring
                presentation, photographs, flowers, candles, soft lighting and a
                private surprise setting. Anniversary room decoration can be
                softer, with messages, memory photos, bed styling and warm
                lighting for a quiet couple celebration.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Honeymoon and newlywed room decoration
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Honeymoon room decoration can be styled with floral bed
                detailing, rose petals, warm lights, customised initials,
                romantic signage and simple luxury themes for newlywed couples.
                The design stays elegant, relaxed and suited to the room size.
              </p>
            </article>

            <article className="border-b border-gray-200 pb-7">
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Room decoration for homes, hotels and private stays
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Our {roomKeyword} and {hotelKeyword} work adapts to bedrooms,
                apartments, villas, hotels, resorts, guest houses, serviced
                apartments and private stays{cityName ? ` in ${cityName}` : ""}.{" "}
                {areaLine}
              </p>
            </article>

            <article>
              <h3 className="font-serif text-3xl italic leading-tight text-[#2f2038]">
                Theme, pricing and customisation
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-700">
                Final pricing depends on room size, theme, balloons, flowers,
                lights, photographs, personalised signage, travel, hotel access
                and setup timing. Share the occasion, room type, reference idea
                and budget, and we will suggest the right room decoration,
                bedroom decoration or hotel room decoration plan.
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
                Room and hotel decoration packages start from &#8377;2,499.
                Final pricing depends on room size, theme, balloon work,
                flowers, lights, photographs, customised messages, hotel access
                and setup requirements.
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

      <RoomDecorationGallery images={galleryImages} />

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-purple-600">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Room and hotel decoration questions
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
        id="room-decoration-booking"
        className="bg-[#120b17] px-4 py-10 text-white sm:px-6 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-yellow-300">
              Booking
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Plan your room or hotel decoration with Event Wala Dost.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72">
              Share your date, room type, hotel access details, city, budget and
              reference idea. Our team will suggest the right room decoration
              plan and confirm availability on WhatsApp.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-5 text-gray-950 shadow-2xl shadow-black/25 sm:p-8">
            <RoomDecorationQuoteForm cityName={cityName} />
          </div>
        </div>
      </section>
    </main>
  );
}
