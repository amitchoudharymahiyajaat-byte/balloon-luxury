import type { Metadata } from "next";
import BirthdayDecorationPage from "../../../components/services/BirthdayDecorationPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Birthday Decoration | Premium Balloon Decoration Services",
  description:
    "Book premium birthday decoration for kids birthdays, first birthdays, surprise birthdays and home celebrations with balloon decoration, theme backdrops and lights.",
  path: "/services/birthday-decoration",
  keywords: [
    "birthday decoration",
    "balloon decoration",
    "kids birthday decoration",
    "first birthday decoration",
    "surprise birthday decoration",
    "home decoration",
  ],
});

export default function Page() {
  return <BirthdayDecorationPage />;
}
