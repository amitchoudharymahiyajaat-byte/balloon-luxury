"use client";

import { useState } from "react";
import { phoneNumber, supportedCities } from "../../lib/seo";

type ContactFormState = {
  name: string;
  phone: string;
  city: string;
  eventType: string;
  eventDate: string;
  message: string;
};

type ContactEnquiryFormProps = {
  serviceOptions: string[];
};

const initialState: ContactFormState = {
  name: "",
  phone: "",
  city: "",
  eventType: "",
  message: "",
  eventDate: "",
};

const fieldClassName =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500";

export default function ContactEnquiryForm({
  serviceOptions,
}: ContactEnquiryFormProps) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^([6-9]\d{9})$/.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid 10-digit Indian phone number.";
    }

    if (!formData.city) {
      nextErrors.city = "Please select your city.";
    }

    if (!formData.eventType) {
      nextErrors.eventType = "Please select an event type.";
    }

    if (!formData.eventDate) {
      nextErrors.eventDate = "Please choose an event date.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(formData.eventDate);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        nextErrors.eventDate = "Please select today or a future date.";
      }
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please share a few event details.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const message = [
      "New enquiry from Event Wala Dost website",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `City: ${formData.city}`,
      `Event Type: ${formData.eventType}`,
      `Event Date: ${formData.eventDate}`,
      `Event Details: ${formData.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    window.setTimeout(() => {
      setIsSubmitting(false);
      setFormData(initialState);
    }, 800);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
          Name <span className="text-purple-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={fieldClassName}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Your name"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
          Phone <span className="text-purple-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          className={fieldClassName}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          placeholder="10-digit mobile number"
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="city" className="mb-2 block text-sm font-semibold text-gray-700">
          City <span className="text-purple-600">*</span>
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={fieldClassName}
          aria-invalid={Boolean(errors.city)}
          aria-describedby={errors.city ? "city-error" : undefined}
        >
          <option value="">Select city</option>
          {supportedCities.map((city) => (
            <option key={city.slug} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        {errors.city ? (
          <p id="city-error" className="mt-1 text-sm text-red-600">
            {errors.city}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="eventType" className="mb-2 block text-sm font-semibold text-gray-700">
          Event Type <span className="text-purple-600">*</span>
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className={fieldClassName}
          aria-invalid={Boolean(errors.eventType)}
          aria-describedby={errors.eventType ? "eventType-error" : undefined}
        >
          <option value="">Select event type</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.eventType ? (
          <p id="eventType-error" className="mt-1 text-sm text-red-600">
            {errors.eventType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="eventDate" className="mb-2 block text-sm font-semibold text-gray-700">
          Event Date <span className="text-purple-600">*</span>
        </label>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          value={formData.eventDate}
          onChange={handleChange}
          className={fieldClassName}
          min={new Date().toISOString().split("T")[0]}
          aria-invalid={Boolean(errors.eventDate)}
          aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
        />
        {errors.eventDate ? (
          <p id="eventDate-error" className="mt-1 text-sm text-red-600">
            {errors.eventDate}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
          Event Details <span className="text-purple-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={fieldClassName}
          placeholder="Tell us about the venue, preferred style, colours, guest count or any reference ideas."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-linear-to-r from-purple-600 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Preparing WhatsApp enquiry..." : "Send Enquiry on WhatsApp"}
      </button>
    </form>
  );
}
