"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function CorporateEventsQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Corporate & Office Events"
      trackingSource="corporate_events_page"
    />
  );
}
