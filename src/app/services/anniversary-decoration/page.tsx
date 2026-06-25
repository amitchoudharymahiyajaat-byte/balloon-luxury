import type { Metadata } from "next";
import AnniversaryDecorationPage from "../../../components/services/AnniversaryDecorationPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Anniversary & Romantic Decoration | Event Wala Dost",
  description:
    "Book anniversary and romantic decoration with balloons, flowers, candles, fairy lights and personalised themes for home, hotel rooms and surprise celebrations.",
  path: "/services/anniversary-decoration",
  keywords: [
    "anniversary decoration",
    "romantic decoration",
    "romantic room decoration",
    "proposal decoration",
    "hotel room decoration",
    "surprise anniversary decoration",
  ],
});

export default function Page() {
  return <AnniversaryDecorationPage />;
}
