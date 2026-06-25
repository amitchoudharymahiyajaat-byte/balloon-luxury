import type { Metadata } from "next";
import CarDecorationPage from "../../../components/services/CarDecorationPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Car Boot & Car Decoration | Event Wala Dost",
  description:
    "Book creative car boot and car decoration for birthdays, anniversaries, proposals and romantic surprises with balloons, flowers, lights, photos and customised themes.",
  path: "/services/car-decoration",
  keywords: [
    "car boot decoration",
    "car decoration",
    "birthday car decoration",
    "anniversary car decoration",
    "proposal car decoration",
    "romantic car surprise",
    "car boot surprise decoration",
  ],
});

export default function Page() {
  return <CarDecorationPage />;
}
