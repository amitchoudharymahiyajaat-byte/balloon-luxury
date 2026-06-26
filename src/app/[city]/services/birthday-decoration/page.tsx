import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BirthdayDecorationPage from "../../../../components/services/BirthdayDecorationPage";
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
    title: `Birthday Decoration in ${cityName} | Balloon Party Setup`,
    description: `Book birthday decoration in ${cityName} for kids' parties, first birthdays, home celebrations and venue setups with balloons, backdrops and custom theme styling.`,
    path: `/${city}/services/birthday-decoration`,
    keywords: [
      `birthday decoration in ${cityName}`,
      `balloon decoration in ${cityName}`,
      `kids birthday decoration ${cityName}`,
      `first birthday decoration ${cityName}`,
      `home birthday decoration ${cityName}`,
    ],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return <BirthdayDecorationPage cityName={formatCityName(city)} />;
}
