import { cities } from "./seo";

export type CitySlug = (typeof cities)[number]["slug"];

export type MediaImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  mobileSrc?: string;
};

export type ServiceMediaItem = {
  slug: string;
  title: string;
  cityTitle: string;
  description: string;
  image: string;
  alt: string;
};

export type ServiceImageOverride = {
  slug: string;
  image?: MediaImage;
};

export type ServiceGalleryOverride = {
  slug: string;
  images: readonly MediaImage[];
};

export type GalleryMediaItem = MediaImage;

export type CityMediaConfig = {
  hero?: MediaImage;
  serviceCards?: readonly ServiceImageOverride[];
  gallery?: readonly GalleryMediaItem[];
  serviceHeroes?: readonly ServiceImageOverride[];
  serviceGalleries?: readonly ServiceGalleryOverride[];
};

const defaultServiceCards = [
  {
    slug: "birthday-decoration",
    title: "Birthday Decoration",
    cityTitle: "Birthday Decoration",
    description:
      "Beautiful balloon decoration for kids birthdays, first birthdays, surprise birthdays, terrace parties and home celebrations.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium birthday balloon decoration setup",
  },
  {
    slug: "anniversary-decoration",
    title: "Anniversary & Romantic Decor",
    cityTitle: "Anniversary Decoration",
    description:
      "Romantic balloon setups with candles, flowers, lights and soft themes for anniversaries, proposals and couple surprises.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    alt: "Romantic anniversary balloon decoration setup",
  },
  {
    slug: "baby-shower-decoration",
    title: "Baby Shower & Welcome Baby",
    cityTitle: "Baby Shower Decoration",
    description:
      "Cute pastel balloon decorations for baby shower, welcome baby, naming ceremony and family celebrations.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
    alt: "Pastel baby shower balloon decoration setup",
  },
  {
    slug: "wedding-decoration",
    title: "Wedding & Engagement Decor",
    cityTitle: "Wedding Decoration",
    description:
      "Premium stage, entrance and backdrop decoration for engagement, haldi, mehndi, sangeet and wedding celebrations.",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
    alt: "Wedding and engagement decoration setup",
  },
  {
    slug: "car-decoration",
    title: "Car Boot & Car Decoration",
    cityTitle: "Car Decoration",
    description:
      "Surprise car boot and car decoration with balloons, lights, flowers and theme props for birthdays, anniversaries and proposals.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    alt: "Car boot surprise decoration with balloons",
  },
  {
    slug: "room-decoration",
    title: "Room & Hotel Decoration",
    cityTitle: "Room Decoration",
    description:
      "Romantic room and hotel decoration with balloons, rose petals, candles and fairy lights for special surprises.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    alt: "Room and hotel decoration setup",
  },
  {
    slug: "corporate-events",
    title: "Corporate & Office Events",
    cityTitle: "Corporate Event Decoration",
    description:
      "Clean and classy decoration for office parties, product launches, farewell parties, annual days and brand events.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    alt: "Corporate event decoration setup",
  },
  {
    slug: "custom-theme-decoration",
    title: "Custom Theme Decoration",
    cityTitle: "Custom Theme Decoration",
    description:
      "Share your Pinterest or reference photo on WhatsApp and we will create a custom decoration theme according to your budget.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
    alt: "Custom theme balloon decoration setup",
  },
] as const satisfies readonly ServiceMediaItem[];

const homeGallery = [
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium birthday balloon decoration setup",
  },
  {
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1201&auto=format&fit=crop",
    alt: "Birthday balloons arranged for an event celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1201&auto=format&fit=crop",
    alt: "Anniversary balloon decoration with celebration styling",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1201&auto=format&fit=crop",
    alt: "Baby shower balloon decoration for a family celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1201&auto=format&fit=crop",
    alt: "Party balloon decor setup for a luxury celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1201&auto=format&fit=crop",
    alt: "Wedding event decor with lights and celebration styling",
  },
] as const satisfies readonly GalleryMediaItem[];

const defaultServiceHeroes = [
  {
    slug: "birthday-decoration",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for birthday celebrations",
    },
  },
  {
    slug: "anniversary-decoration",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for anniversary celebrations",
    },
  },
  {
    slug: "baby-shower-decoration",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for baby shower celebrations",
    },
  },
  {
    slug: "wedding-decoration",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for wedding and engagement events",
    },
  },
  {
    slug: "car-decoration",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for car surprise celebrations",
    },
  },
  {
    slug: "room-decoration",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for room and hotel celebrations",
    },
  },
  {
    slug: "corporate-events",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for corporate events",
    },
  },
  {
    slug: "custom-theme-decoration",
    image: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Event Wala Dost balloon decoration setup for custom theme events",
    },
  },
] as const satisfies readonly ServiceImageOverride[];

const defaultServiceGalleries = [
  {
    slug: "birthday-decoration",
    images: [
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop",
        alt: "Birthday balloon decoration with colorful balloons",
      },
      {
        src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",
        alt: "Kids birthday decoration with party balloons",
      },
      {
        src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
        alt: "Birthday party balloon styling",
      },
      {
        src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
        alt: "Premium birthday celebration decor",
      },
      {
        src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
        alt: "Pastel birthday decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
        alt: "Birthday party venue decoration",
      },
    ],
  },
  {
    slug: "anniversary-decoration",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
        alt: "Anniversary decoration with romantic lights",
      },
      {
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
        alt: "Proposal decoration for couple surprise",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        alt: "Romantic candle and flower decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=1200&auto=format&fit=crop",
        alt: "Candlelight romantic decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1200&auto=format&fit=crop",
        alt: "Romantic hotel room decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        alt: "Hotel room romantic surprise decor",
      },
    ],
  },
  {
    slug: "baby-shower-decoration",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
        alt: "Pastel baby shower decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop",
        alt: "Welcome baby decoration with soft balloons",
      },
      {
        src: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1200&auto=format&fit=crop",
        alt: "Baby shower table styling with balloons",
      },
      {
        src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop",
        alt: "Family baby celebration decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=1200&auto=format&fit=crop",
        alt: "Baby welcome celebration decor",
      },
      {
        src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200&auto=format&fit=crop",
        alt: "Cute pastel baby shower backdrop",
      },
    ],
  },
  {
    slug: "wedding-decoration",
    images: [
      {
        src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
        alt: "Wedding stage decoration with flowers",
      },
      {
        src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop",
        alt: "Engagement decoration with warm lights",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
        alt: "Premium wedding celebration venue decor",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
        alt: "Banquet hall event decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1200&auto=format&fit=crop",
        alt: "Wedding entrance decoration with flowers",
      },
      {
        src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop",
        alt: "Luxury wedding table decor",
      },
    ],
  },
  {
    slug: "car-decoration",
    images: [
      {
        src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
        alt: "Car boot decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
        alt: "Car surprise decoration idea",
      },
      {
        src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
        alt: "Decorated car for a surprise celebration",
      },
      {
        src: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
        alt: "Car celebration decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
        alt: "Outdoor car decoration inspiration",
      },
      {
        src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
        alt: "Premium car surprise setup",
      },
    ],
  },
  {
    slug: "room-decoration",
    images: [
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        alt: "Romantic room decoration with bed styling",
      },
      {
        src: "https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=1200&auto=format&fit=crop",
        alt: "Hotel room romantic decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
        alt: "Luxury hotel room decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop",
        alt: "Bedroom surprise decoration idea",
      },
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
        alt: "Premium room decoration inspiration",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        alt: "Hotel room celebration decoration",
      },
    ],
  },
  {
    slug: "corporate-events",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        alt: "Corporate event decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
        alt: "Conference event decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
        alt: "Business event stage decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
        alt: "Office celebration decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
        alt: "Corporate meeting decoration inspiration",
      },
      {
        src: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop",
        alt: "Corporate event venue styling",
      },
    ],
  },
  {
    slug: "custom-theme-decoration",
    images: [
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
        alt: "Custom theme event decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
        alt: "Large venue custom decoration setup",
      },
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
        alt: "Custom party theme decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
        alt: "Premium custom theme balloon styling",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
        alt: "Luxury event theme decoration",
      },
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        alt: "Custom event decoration for a large venue",
      },
    ],
  },
] as const satisfies readonly ServiceGalleryOverride[];

export const defaultMedia = {
  hero: {
    src: "/images/hero/home-hero-balloon-decoration.webp",
    mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
    alt: "Luxury balloon decoration for birthday and anniversary events by Event Wala Dost",
  },
  serviceCards: defaultServiceCards,
  services: defaultServiceCards,
  gallery: homeGallery,
  serviceHeroes: defaultServiceHeroes,
  serviceGalleries: defaultServiceGalleries,
} as const;

// Add only real, existing city-specific media here. Missing or empty city entries
// intentionally fall back to defaultMedia.
export const cityMedia: Partial<Record<CitySlug, CityMediaConfig>> = {
  jaipur: {
    hero: {
      src: "/images/city-hero/jaipur-hero-balloon-decoration.webp",
      mobileSrc: "/images/city-hero/jaipur-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Jaipur",
    },
  },
  sikar: {
    hero: {
      src: "/images/hero/home-hero-balloon-decoration.webp",
      mobileSrc: "/images/hero/home-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services available in Sikar",
    },
  },
  ahmedabad: {
    hero: {
      src: "/images/city-hero/ahmedabad-hero-balloon-decoration.webp",
      mobileSrc:
        "/images/city-hero/ahmedabad-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Ahmedabad",
    },
  },
  chandigarh: {
    // Uses default media until real Chandigarh photos are added.
  },
  bangalore: {
    hero: {
      src: "/images/city-hero/bangalore-hero-balloon-decoration.webp",
      mobileSrc:
        "/images/city-hero/bangalore-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Bangalore",
    },
  },
  chennai: {
    hero: {
      src: "/images/cities/chennai-balloon-decoration.webp",
      alt: "Balloon decoration services in Chennai",
    },
  },
  "delhi-ncr": {
    hero: {
      src: "/images/city-hero/delhi-ncr-hero-balloon-decoration.webp",
      mobileSrc:
        "/images/city-hero/delhi-ncr-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Delhi NCR",
    },
  },
  gurgaon: {
    hero: {
      src: "/images/city-hero/gurgaon-hero-balloon-decoration.webp",
      mobileSrc:
        "/images/city-hero/gurgaon-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Gurgaon",
    },
  },
  hyderabad: {
    hero: {
      src: "/images/city-hero/hyderabad-hero-balloon-decoration.webp",
      mobileSrc:
        "/images/city-hero/hyderabad-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Hyderabad",
    },
  },
  kolkata: {
    hero: {
      src: "/images/cities/kolkata-balloon-decoration.webp",
      alt: "Balloon decoration services in Kolkata",
    },
  },
  mumbai: {
    hero: {
      src: "/images/city-hero/mumbai-hero-balloon-decoration.webp",
      mobileSrc: "/images/city-hero/mumbai-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Mumbai",
    },
  },
  noida: {
    hero: {
      src: "/images/city-hero/noida-hero-balloon-decoration.webp",
      mobileSrc: "/images/city-hero/noida-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Noida",
    },
  },
  pune: {
    hero: {
      src: "/images/city-hero/pune-hero-balloon-decoration.webp",
      mobileSrc: "/images/city-hero/pune-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Pune",
    },
  },
  udaipur: {
    hero: {
      src: "/images/city-hero/udaipur-hero-balloon-decoration.webp",
      mobileSrc:
        "/images/city-hero/udaipur-hero-balloon-decoration-mobile.webp",
      alt: "Balloon decoration services in Udaipur",
    },
  },
};

export function getCitySlug(city?: string) {
  return city
    ? city
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : "";
}

function getCityConfig(citySlug?: string) {
  return citySlug ? cityMedia[citySlug as CitySlug] : undefined;
}

export function getHomeHero(): MediaImage {
  return { ...defaultMedia.hero };
}

export function getCityHero(citySlug?: string): MediaImage {
  return getCityConfig(citySlug)?.hero ?? getHomeHero();
}

export function getServiceMedia(citySlug?: string): ServiceMediaItem[] {
  const overrides = getCityConfig(citySlug)?.serviceCards;

  if (!overrides?.length) return [...defaultMedia.serviceCards];

  return defaultMedia.serviceCards.map((service) => {
    const override = overrides.find((item) => item.slug === service.slug);
    const image = override?.image;

    return image
      ? {
          ...service,
          image: image.src,
          alt: image.alt,
        }
      : service;
  });
}

export function getServiceOptions() {
  return defaultMedia.serviceCards.map((service) => service.title);
}

export function getServiceCardMedia(
  citySlug: string | undefined,
  serviceSlug: string,
): ServiceMediaItem {
  const service =
    getServiceMedia(citySlug).find((item) => item.slug === serviceSlug) ??
    defaultMedia.serviceCards[0];

  return { ...service };
}

export function getCityGallery(citySlug?: string): GalleryMediaItem[] {
  const gallery = getCityConfig(citySlug)?.gallery;

  return gallery?.length ? [...gallery] : [...defaultMedia.gallery];
}

export function getGalleryMedia(citySlug?: string): GalleryMediaItem[] {
  return getCityGallery(citySlug);
}

export function getServiceHeroMedia(
  citySlug: string | undefined,
  serviceSlug: string,
): MediaImage {
  const cityServiceHero = getCityConfig(citySlug)?.serviceHeroes?.find(
    (item) => item.slug === serviceSlug,
  )?.image;
  const defaultServiceHero = defaultMedia.serviceHeroes.find(
    (item) => item.slug === serviceSlug,
  )?.image;

  return cityServiceHero ?? defaultServiceHero ?? getCityHero(citySlug);
}

export function getServiceGallery(
  citySlug: string | undefined,
  serviceSlug: string,
): GalleryMediaItem[] {
  const cityServiceGallery = getCityConfig(citySlug)?.serviceGalleries?.find(
    (item) => item.slug === serviceSlug,
  )?.images;
  const defaultServiceGallery = defaultMedia.serviceGalleries.find(
    (item) => item.slug === serviceSlug,
  )?.images;

  if (cityServiceGallery?.length) return [...cityServiceGallery];
  if (defaultServiceGallery?.length) return [...defaultServiceGallery];

  return getCityGallery(citySlug);
}
