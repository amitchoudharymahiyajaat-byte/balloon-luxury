import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CustomThemeDecorationPage from "../../../../components/services/CustomThemeDecorationPage";
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
    title: `Custom Theme Decoration in ${cityName} | Personalised Event Setup`,
    description: `Book custom theme decoration in ${cityName} for weddings, birthdays and corporate events with personalised stages, backdrops and venue styling.`,
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
