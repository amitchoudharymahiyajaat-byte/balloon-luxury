import type { Metadata } from "next";
import CustomThemeDecorationPage from "../../../components/services/CustomThemeDecorationPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Theme Decoration | Banquet Hall & Event Decor",
  description:
    "Book customised event and banquet hall decoration with premium stages, backdrops, entrances, lighting, floral styling and personalised themes.",
  path: "/services/custom-theme-decoration",
  keywords: [
    "custom theme decoration",
    "banquet hall decoration",
    "customised event decoration",
    "event theme decoration",
    "venue decoration",
    "custom stage decoration",
    "custom backdrop decoration",
    "personalised event decoration",
  ],
});

export default function Page() {
  return <CustomThemeDecorationPage />;
}
