import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WeddingDecorationPage from "../../../../components/services/WeddingDecorationPage";
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
    title: `Wedding Decoration in ${cityName} | Haldi, Mehendi & Engagement`,
    description: `Book wedding decoration in ${cityName} for haldi, mehendi, engagement and wedding celebrations with stage, entrance and backdrop styling.`,
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
