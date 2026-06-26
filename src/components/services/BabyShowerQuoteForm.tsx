"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function BabyShowerQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Baby Shower & Welcome Baby"
      trackingSource="baby_shower_decoration_page"
    />
  );
}
