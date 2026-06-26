"use client";

import EnquiryForm from "../shared/EnquiryForm";

export default function ContactEnquiryForm() {
  return (
    <EnquiryForm
      page="Contact Us"
      trackingSource="contact_page"
      submitLabel="Send Enquiry on WhatsApp"
      className="space-y-4"
    />
  );
}
