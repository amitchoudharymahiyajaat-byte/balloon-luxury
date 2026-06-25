import type { Metadata } from "next";
import BabyShowerDecorationPage from "../../../../components/services/BabyShowerDecorationPage";
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
    title: `Baby Shower Decoration in ${cityName} | Welcome Baby Decor`,
    description: `Book baby shower decoration in ${cityName} for welcome baby celebrations, godh bharai, naming ceremonies and newborn homecoming setups with balloons, backdrops and customised themes.`,
    path: `/${city}/services/baby-shower-decoration`,
    keywords: [
      `baby shower decoration in ${cityName}`,
      `welcome baby decoration ${cityName}`,
      `newborn welcome decoration ${cityName}`,
      `godh bharai decoration ${cityName}`,
      `naming ceremony decoration ${cityName}`,
      `pastel balloon decoration ${cityName}`,
      `baby shower decoration at home ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <BabyShowerDecorationPage cityName={formatCityName(city)} />;
}
