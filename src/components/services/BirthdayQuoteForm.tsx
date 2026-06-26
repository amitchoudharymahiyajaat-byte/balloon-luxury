"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function BirthdayQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Birthday Decoration"
      trackingSource="birthday_decoration_page"
    />
  );
}
