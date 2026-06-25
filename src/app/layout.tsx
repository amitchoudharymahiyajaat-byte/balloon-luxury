import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ClientEnhancements from "../components/layout/ClientEnhancements";
import { createPageMetadata, localBusinessSchema, siteUrl } from "../lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Event Wala Dost | Premium Balloon Decoration Services",
    template: "%s | Event Wala Dost",
  },
  ...createPageMetadata({
    title: "Event Wala Dost | Premium Balloon Decoration Services",
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
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <ClientEnhancements />
      </body>
    </html>
  );
}
