"use client";

import EnquiryForm from "../shared/EnquiryForm";
import {
  trackBookingClick,
  trackPopupSubmit,
  trackWhatsAppClick,
} from "../../lib/tracking";

type ServiceQuoteFormProps = {
  cityName?: string;
  serviceName: string;
  trackingSource: string;
  submitLabel?: string;
};

export default function ServiceQuoteForm({
  cityName,
  serviceName,
  trackingSource,
  submitLabel = "Send Enquiry on WhatsApp",
}: ServiceQuoteFormProps) {
  return (
    <EnquiryForm
      defaultCity={cityName}
      defaultEventType={serviceName}
      page={cityName ? `${cityName} ${serviceName}` : serviceName}
      service={serviceName}
      trackingSource={trackingSource}
      submitLabel={submitLabel}
      onValidSubmit={(source) => {
        const trackingName = source ?? trackingSource;
        trackPopupSubmit(trackingName);
        trackBookingClick(trackingName);
        trackWhatsAppClick(`${trackingName}_quote`);
      }}
    />
  );
}
