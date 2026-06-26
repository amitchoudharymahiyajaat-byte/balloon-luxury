import type { Metadata } from "next";

export const siteUrl = "https://eventwaladost.com";
export const siteName = "Event Wala Dost";
export const phoneNumber = "+919602060414";
export const ogImage = "/images/hero.jpg";

export const cities = [
  { slug: "jaipur", name: "Jaipur" },
  { slug: "sikar", name: "Sikar" },
  { slug: "delhi-ncr", name: "Delhi NCR" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "mumbai", name: "Mumbai" },
  { slug: "ahmedabad", name: "Ahmedabad" },
  { slug: "chandigarh", name: "Chandigarh" },
  { slug: "bangalore", name: "Bangalore" },
  { slug: "hyderabad", name: "Hyderabad" },
  { slug: "udaipur", name: "Udaipur" },
  { slug: "noida", name: "Noida" },
  { slug: "pune", name: "Pune" },
  { slug: "chennai", name: "Chennai" },
  { slug: "kolkata", name: "Kolkata" },
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonicalPath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}`;
  const url = new URL(canonicalPath, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteName} luxury balloon decoration setup`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function createCityMetadata(city: string, slug: string): Metadata {
  return createPageMetadata({
    title: `Balloon Decoration in ${city} | Birthday & Anniversary Decoration ${city}`,
    description: `Book premium balloon decoration services in ${city} for birthdays, anniversaries, baby showers, romantic room decoration and surprise celebrations.`,
    path: `/${slug}`,
    keywords: [
      `Balloon Decoration ${city}`,
      `Birthday Decoration ${city}`,
      `Anniversary Decoration ${city}`,
      `Room Decoration ${city}`,
      `Baby Shower Decoration ${city}`,
    ],
  });
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description:
    "Luxury balloon decoration services for birthdays, anniversaries, baby showers, proposals and surprise celebrations across India.",
  url: siteUrl,
  image: new URL(ogImage, siteUrl).toString(),
  telephone: phoneNumber,
  priceRange: "INR 1,999+",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: cities.map((city) => ({
    "@type": "City",
    name: city.name,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};
