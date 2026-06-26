"use client";

import ServiceQuoteForm from "./ServiceQuoteForm";

export default function RoomDecorationQuoteForm({ cityName }: { cityName?: string }) {
  return (
    <ServiceQuoteForm
      cityName={cityName}
      serviceName="Room & Hotel Decoration"
      trackingSource="room_decoration_page"
    />
  );
}
