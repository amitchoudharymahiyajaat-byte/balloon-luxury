"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function WeddingQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Wedding & Engagement Decor"
      trackingSource="wedding_decoration_page"
    />
  );
}
