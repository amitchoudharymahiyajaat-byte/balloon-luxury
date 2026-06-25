import type { Metadata } from "next";
import WeddingDecorationPage from "../../../../components/services/WeddingDecorationPage";
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
    title: `Wedding & Engagement Decoration in ${cityName} | Stage & Backdrop Decor`,
    description: `Book wedding and engagement decoration in ${cityName} for ring ceremonies, wedding stages, haldi, mehndi and sangeet with customised backdrops, flowers and lighting.`,
    path: `/${city}/services/wedding-decoration`,
    keywords: [
      `wedding decoration in ${cityName}`,
      `engagement decoration in ${cityName}`,
      `ring ceremony decoration ${cityName}`,
      `wedding stage decoration ${cityName}`,
      `wedding backdrop decoration ${cityName}`,
      `haldi decoration ${cityName}`,
      `mehndi decoration ${cityName}`,
      `sangeet decoration ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <WeddingDecorationPage cityName={formatCityName(city)} />;
}
