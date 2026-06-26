import type { Metadata } from "next";
import BirthdayDecorationPage from "../../../../components/services/BirthdayDecorationPage";
import { createPageMetadata } from "../../../../lib/seo";

const cityNames: Record<string, string> = {
  jaipur: "Jaipur",
  sikar: "Sikar",
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
