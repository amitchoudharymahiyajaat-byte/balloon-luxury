import type { Metadata } from "next";
import WeddingDecorationPage from "../../../components/services/WeddingDecorationPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Wedding & Engagement Decoration | Event Wala Dost",
  description:
    "Book premium wedding and engagement decoration with stage backdrops, flowers, drapes, lights, balloon styling and customised themes for every celebration.",
  path: "/services/wedding-decoration",
  keywords: [
    "wedding decoration",
    "engagement decoration",
    "ring ceremony decoration",
    "wedding stage decoration",
    "wedding backdrop decoration",
    "haldi decoration",
    "mehndi decoration",
    "sangeet decoration",
  ],
});

export default function Page() {
  return <WeddingDecorationPage />;
}
