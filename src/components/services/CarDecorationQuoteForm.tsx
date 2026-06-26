"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function CarDecorationQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Car Boot & Car Decoration"
      trackingSource="car_decoration_page"
    />
  );
}
