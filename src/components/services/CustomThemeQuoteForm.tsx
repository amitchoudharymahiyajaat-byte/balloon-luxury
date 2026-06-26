"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function CustomThemeQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Custom Theme Decoration"
      trackingSource="custom_theme_decoration_page"
      submitLabel="Send Custom Enquiry on WhatsApp"
    />
  );
}
