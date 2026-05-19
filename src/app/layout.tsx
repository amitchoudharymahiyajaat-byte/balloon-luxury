import type { Metadata } from "next";
import "./globals.css";
import StickyButtons from "../components/layout/StickyButtons";
export const metadata: Metadata = {
  title:
    "Event Wala Dost | Premium Balloon Decoration Services",

  description:
    "Luxury balloon decoration services for birthdays, anniversaries, baby showers, proposals and surprise celebrations across India.",

  keywords: [
    "balloon decoration",
    "birthday decoration",
    "anniversary decoration",
    "room decoration",
    "proposal decoration",
    "baby shower decoration",
    "balloon decorator near me",
  ],

  metadataBase: new URL("https://eventwaladost.com"),

  openGraph: {
    title:
      "Event Wala Dost | Luxury Balloon Decorations",

    description:
      "Premium balloon decoration services across India.",

    url: "https://eventwaladost.com",

    siteName: "Event Wala Dost",

    images: [
      {
        url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

  {children}

  <StickyButtons />

</body>

    </html>
  );
}