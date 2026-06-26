import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnniversaryDecorationPage from "../../../../components/services/AnniversaryDecorationPage";
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
    title: `Anniversary Decoration in ${cityName} | Romantic Surprise Setup`,
    description: `Book anniversary decoration in ${cityName} for romantic room setups, hotel surprises, proposals and couple celebrations with balloons, flowers, candles and light styling.`,
    path: `/${city}/services/anniversary-decoration`,
    keywords: [
      `anniversary decoration in ${cityName}`,
      `romantic decoration in ${cityName}`,
      `romantic room decoration ${cityName}`,
      `proposal decoration ${cityName}`,
      `hotel room decoration ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <AnniversaryDecorationPage cityName={formatCityName(city)} />;
}
