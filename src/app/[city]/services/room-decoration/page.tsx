import type { Metadata } from "next";
import RoomDecorationPage from "../../../../components/services/RoomDecorationPage";
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
    title: `Room & Hotel Decoration in ${cityName} | Birthday & Romantic Room Decor`,
    description: `Book room and hotel decoration in ${cityName} for birthdays, anniversaries, proposals, honeymoon stays and romantic surprises with customised balloon, flower and light setups.`,
    path: `/${city}/services/room-decoration`,
    keywords: [
      `room decoration in ${cityName}`,
      `hotel room decoration in ${cityName}`,
      `birthday room decoration ${cityName}`,
      `anniversary room decoration ${cityName}`,
      `romantic room decoration ${cityName}`,
      `proposal room decoration ${cityName}`,
      `honeymoon room decoration ${cityName}`,
      `bedroom decoration ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <RoomDecorationPage cityName={formatCityName(city)} />;
}
