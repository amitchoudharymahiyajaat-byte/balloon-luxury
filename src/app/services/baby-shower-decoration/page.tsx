import type { Metadata } from "next";
import BabyShowerDecorationPage from "../../../components/services/BabyShowerDecorationPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Baby Shower & Welcome Baby Decoration | Event Wala Dost",
  description:
    "Book premium baby shower and welcome baby decoration with pastel balloons, themed backdrops, baby props and customised home or venue setups.",
  path: "/services/baby-shower-decoration",
  keywords: [
    "baby shower decoration",
    "welcome baby decoration",
    "newborn welcome decoration",
    "godh bharai decoration",
    "naming ceremony decoration",
    "pastel balloon decoration",
  ],
});

export default function Page() {
  return <BabyShowerDecorationPage />;
}
