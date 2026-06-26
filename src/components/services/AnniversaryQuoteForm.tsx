"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function AnniversaryQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Anniversary & Romantic Decor"
      trackingSource="anniversary_decoration_page"
    />
  );
}
