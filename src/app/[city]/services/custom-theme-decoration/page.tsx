import type { Metadata } from "next";
import CustomThemeDecorationPage from "../../../../components/services/CustomThemeDecorationPage";
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
    title: `Custom Theme Decoration in ${cityName} | Banquet Hall Decor`,
    description: `Book custom theme and banquet hall decoration in ${cityName} for weddings, birthdays, corporate events and large celebrations with personalised stages, backdrops and venue styling.`,
    path: `/${city}/services/custom-theme-decoration`,
    keywords: [
      `custom theme decoration in ${cityName}`,
      `banquet hall decoration in ${cityName}`,
      `customised event decoration ${cityName}`,
      `event theme decoration ${cityName}`,
      `venue decoration ${cityName}`,
      `custom stage decoration ${cityName}`,
      `custom backdrop decoration ${cityName}`,
      `personalised event decoration ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <CustomThemeDecorationPage cityName={formatCityName(city)} />;
}
