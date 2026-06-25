import type { Metadata } from "next";
import AnniversaryDecorationPage from "../../../../components/services/AnniversaryDecorationPage";
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
    title: `Anniversary Decoration in ${cityName} | Romantic Room Decor`,
    description: `Book anniversary decoration in ${cityName} for romantic room setups, hotel surprises, proposals and couple celebrations with balloons, flowers, candles and lights.`,
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
