import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CarDecorationPage from "../../../../components/services/CarDecorationPage";
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
    title: `Car Decoration in ${cityName} | Wedding & Surprise Car Decor`,
    description: `Book car decoration in ${cityName} for wedding surprises, romantic proposals and birthday arrivals with balloon, flower and light styling.`,
    path: `/${city}/services/car-decoration`,
    keywords: [
      `car boot decoration in ${cityName}`,
      `car decoration in ${cityName}`,
      `birthday car decoration ${cityName}`,
      `anniversary car decoration ${cityName}`,
      `proposal car decoration ${cityName}`,
      `romantic car surprise ${cityName}`,
      `car boot surprise decoration ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <CarDecorationPage cityName={formatCityName(city)} />;
}
