import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CorporateEventsPage from "../../../../components/services/CorporateEventsPage";
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
