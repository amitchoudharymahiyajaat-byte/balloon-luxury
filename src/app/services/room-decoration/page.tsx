import type { Metadata } from "next";
import RoomDecorationPage from "../../../components/services/RoomDecorationPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Room & Hotel Decoration | Event Wala Dost",
  description:
    "Book room and hotel decoration for birthdays, anniversaries, proposals and romantic surprises with balloons, flowers, rose petals, candles and fairy lights.",
  path: "/services/room-decoration",
  keywords: [
    "room decoration",
    "hotel room decoration",
    "birthday room decoration",
    "anniversary room decoration",
    "romantic room decoration",
    "proposal room decoration",
    "honeymoon room decoration",
    "bedroom decoration",
  ],
});

export default function Page() {
  return <RoomDecorationPage />;
}
