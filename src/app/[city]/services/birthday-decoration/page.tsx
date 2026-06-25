import type { Metadata } from "next";
import BirthdayDecorationPage from "../../../../components/services/BirthdayDecorationPage";
import { createPageMetadata } from "../../../../lib/seo";

const cityNames: Record<string, string> = {
  jaipur: "Jaipur",
  delhi: "Delhi",
  "delhi-ncr": "Delhi NCR",
  gurgaon: "Gurgaon",
  chandigarh: "Chandigarh",
};

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
    title: `Birthday Decoration in ${cityName} | Balloon Decoration Services`,
    description: `Book premium birthday decoration in ${cityName} for kids birthdays, first birthdays, surprise birthdays and home celebrations with balloon decoration and theme backdrops.`,
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
