import type { Metadata } from "next";
import CorporateEventsPage from "../../../../components/services/CorporateEventsPage";
import { cities, createPageMetadata } from "../../../../lib/seo";

const cityNames = Object.fromEntries(
  cities.map((city) => [city.slug, city.name]),
) as Record<string, string>;

function formatCityName(slug: string) {
  return (
    cityNames[slug] ??
    slug
      .split("-")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);

  return createPageMetadata({
    title: `Corporate Event Decoration in ${cityName} | Office & Brand Events`,
    description: `Book corporate event decoration in ${cityName} for office celebrations, brand events, conferences and product launches with elegant styling.`,
    path: `/${city}/services/corporate-events`,
    keywords: [
      `corporate event decoration in ${cityName}`,
      `office decoration in ${cityName}`,
      `office event decoration ${cityName}`,
      `corporate meeting decoration ${cityName}`,
      `conference decoration ${cityName}`,
      `product launch decoration ${cityName}`,
      `annual day decoration ${cityName}`,
      `banquet hall corporate event decoration ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <CorporateEventsPage cityName={formatCityName(city)} />;
}
