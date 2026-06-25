import type { Metadata } from "next";
import CorporateEventsPage from "../../../components/services/CorporateEventsPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Corporate & Office Event Decoration | Event Wala Dost",
  description:
    "Book professional corporate and office event decoration for meetings, conferences, launches, annual days, award functions and banquet hall gatherings.",
  path: "/services/corporate-events",
  keywords: [
    "corporate event decoration",
    "office decoration",
    "office event decoration",
    "corporate meeting decoration",
    "conference decoration",
    "product launch decoration",
    "annual day decoration",
    "banquet hall corporate event decoration",
  ],
});

export default function Page() {
  return <CorporateEventsPage />;
}
