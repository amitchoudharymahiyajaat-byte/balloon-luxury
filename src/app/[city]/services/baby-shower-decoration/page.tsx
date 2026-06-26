import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BabyShowerDecorationPage from "../../../../components/services/BabyShowerDecorationPage";
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
    title: `Baby Shower Decoration in ${cityName} | Balloon Theme Setup`,
    description: `Book baby shower decoration in ${cityName} for welcome baby celebrations, naming ceremonies and soft pastel themes with customised balloon backdrops and decor.`,
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
