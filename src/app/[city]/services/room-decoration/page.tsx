import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomDecorationPage from "../../../../components/services/RoomDecorationPage";
import {
  createPageMetadata,
  getSupportedCityName,
  getSupportedCityStaticParams,
} from "../../../../lib/seo";

function formatCityName(slug: string) {
  const cityName = getSupportedCityName(slug);

  if (!cityName) notFound();

  return cityName;
}

export function generateStaticParams() {
  return getSupportedCityStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);

  return createPageMetadata({
    title: `Room Decoration in ${cityName} | Birthday & Anniversary Surprise`,
    description: `Book room decoration in ${cityName} for birthdays, anniversaries, proposals and romantic surprises with balloon, flower and light styling.`,
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
