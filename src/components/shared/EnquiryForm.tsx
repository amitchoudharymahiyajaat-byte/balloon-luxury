"use client";

import { useMemo, useRef, useState } from "react";
import { getServiceOptions } from "../../lib/cityMedia";
import { supportedCities } from "../../lib/seo";
import {
  buildEnquiryMessage,
  buildWhatsAppUrl,
  type EnquiryMessageData,
} from "../../lib/whatsapp";

type EnquiryFormData = {
  name: string;
  phone: string;
  city: string;
  eventType: string;
  eventDate: string;
  venueArea: string;
  message: string;
  website: string;
};

type EnquiryFormProps = {
  defaultCity?: string;
  defaultEventType?: string;
  page?: string;
  service?: string;
  trackingSource?: string;
  submitLabel?: string;
  className?: string;
  onValidSubmit?: (source?: string) => void;
};

type ErrorMap = Partial<Record<keyof EnquiryFormData | "form", string>>;

const initialFormData: EnquiryFormData = {
  name: "",
  phone: "",
  city: "",
  eventType: "",
  eventDate: "",
  venueArea: "",
  message: "",
  website: "",
};

const fieldClassName =
  "w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100";

const selectClassName = `${fieldClassName} [&_option]:bg-white [&_option]:text-gray-900`;

const errorClassName = "mt-1 text-sm text-red-600";

function getTodayLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normaliseIndianMobile(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }

  if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  return digits;
}

function isSupportedCity(cityName: string) {
  return supportedCities.some((city) => city.name === cityName);
}

function validateForm(data: EnquiryFormData): ErrorMap {
  const errors: ErrorMap = {};
  const name = data.name.trim();
  const phone = normaliseIndianMobile(data.phone);
  const today = getTodayLocalDate();
  const message = data.message.trim();
  const venueArea = data.venueArea.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (!/[A-Za-z]/.test(name)) {
    errors.name = "Please enter a valid name.";
  } else if (name.length > 80) {
    errors.name = "Name must be 80 characters or fewer.";
  }

  if (!phone) {
    errors.phone = "Please enter your mobile number.";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }

  if (!data.city) {
    errors.city = "Please select your city.";
  } else if (!isSupportedCity(data.city)) {
    errors.city = "Please select a supported city.";
  }

  if (!data.eventType) {
    errors.eventType = "Please select an event type.";
  }

  if (!data.eventDate) {
    errors.eventDate = "Please choose an event date.";
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(data.eventDate)) {
    errors.eventDate = "Please choose a valid event date.";
  } else if (data.eventDate < today) {
    errors.eventDate = "Please select today or a future date.";
  }

  if (!message) {
    errors.message = "Please share a few event details.";
  } else if (message.length < 10) {
    errors.message = "Please add at least 10 characters of event details.";
  } else if (message.length > 700) {
    errors.message = "Event details must be 700 characters or fewer.";
  }

  if (venueArea.length > 120) {
    errors.venueArea = "Venue / Area must be 120 characters or fewer.";
  }

  return errors;
}

export default function EnquiryForm({
  defaultCity = "",
  defaultEventType = "",
  page,
  service,
  trackingSource,
  submitLabel = "Send Enquiry on WhatsApp",
  className = "grid gap-4 sm:grid-cols-2",
  onValidSubmit,
}: EnquiryFormProps) {
  const eventTypes = useMemo(
    () => [...getServiceOptions(), "Other / Custom Event"],
    [],
  );
  const defaultValues = useMemo(
    () => ({
      ...initialFormData,
      city: isSupportedCity(defaultCity) ? defaultCity : "",
      eventType: eventTypes.includes(defaultEventType) ? defaultEventType : "",
    }),
    [defaultCity, defaultEventType, eventTypes],
  );
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState<ErrorMap>({});
  const [isOpening, setIsOpening] = useState(false);
  const [status, setStatus] = useState("");
  const cooldownUntilRef = useRef(0);

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined, form: undefined }));
    setStatus("");
  };

  const fieldErrorProps = (name: keyof EnquiryFormData) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const renderError = (name: keyof EnquiryFormData) =>
    errors[name] ? (
      <p id={`${name}-error`} className={errorClassName}>
        {errors[name]}
      </p>
    ) : null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const now = Date.now();
    if (isOpening || now < cooldownUntilRef.current) return;

    if (formData.website.trim()) {
      cooldownUntilRef.current = now + 1500;
      return;
    }

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const messageData: EnquiryMessageData = {
      name: formData.name.trim(),
      phone: normaliseIndianMobile(formData.phone),
      city: formData.city,
      eventType: formData.eventType,
      eventDate: formData.eventDate,
      venueArea: formData.venueArea.trim(),
      message: formData.message.trim(),
      page,
      service,
    };
    const whatsappUrl = buildWhatsAppUrl(buildEnquiryMessage(messageData));

    if (!whatsappUrl) {
      setErrors({ form: "WhatsApp is not configured. Please call us instead." });
      return;
    }

    setIsOpening(true);
    cooldownUntilRef.current = now + 2500;
    onValidSubmit?.(trackingSource);

    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!opened) {
      setErrors({
        form: "WhatsApp could not be opened. Please allow pop-ups or use the WhatsApp button.",
      });
      setIsOpening(false);
      return;
    }

    setStatus("WhatsApp has been opened. Send the prepared message there to complete your enquiry.");

    window.setTimeout(() => {
      setIsOpening(false);
    }, 900);
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={updateField}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
          Name <span className="text-purple-600" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={updateField}
          placeholder="Your name"
          className={fieldClassName}
          required
          maxLength={80}
          {...fieldErrorProps("name")}
        />
        {renderError("name")}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
          Phone <span className="text-purple-600" aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={updateField}
          placeholder="+91 98765 43210"
          className={fieldClassName}
          required
          {...fieldErrorProps("phone")}
        />
        {renderError("phone")}
      </div>

      <div>
        <label htmlFor="city" className="mb-2 block text-sm font-semibold text-gray-700">
          City <span className="text-purple-600" aria-hidden="true">*</span>
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={updateField}
          className={selectClassName}
          required
          {...fieldErrorProps("city")}
        >
          <option value="">Select city</option>
          {supportedCities.map((city) => (
            <option key={city.slug} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        {renderError("city")}
      </div>

      <div>
        <label htmlFor="eventType" className="mb-2 block text-sm font-semibold text-gray-700">
          Event Type <span className="text-purple-600" aria-hidden="true">*</span>
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={updateField}
          className={selectClassName}
          required
          {...fieldErrorProps("eventType")}
        >
          <option value="">Select event type</option>
          {eventTypes.map((eventType) => (
            <option key={eventType} value={eventType}>
              {eventType}
            </option>
          ))}
        </select>
        {renderError("eventType")}
      </div>

      <div>
        <label htmlFor="eventDate" className="mb-2 block text-sm font-semibold text-gray-700">
          Event Date <span className="text-purple-600" aria-hidden="true">*</span>
        </label>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          value={formData.eventDate}
          onChange={updateField}
          min={getTodayLocalDate()}
          className={fieldClassName}
          required
          {...fieldErrorProps("eventDate")}
        />
        {renderError("eventDate")}
      </div>

      <div>
        <label htmlFor="venueArea" className="mb-2 block text-sm font-semibold text-gray-700">
          Venue / Area
        </label>
        <input
          id="venueArea"
          name="venueArea"
          type="text"
          autoComplete="street-address"
          value={formData.venueArea}
          onChange={updateField}
          placeholder="Hotel, home, banquet or area"
          className={fieldClassName}
          maxLength={120}
          {...fieldErrorProps("venueArea")}
        />
        {renderError("venueArea")}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
          Message / Event Details <span className="text-purple-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={updateField}
          rows={4}
          className={`${fieldClassName} resize-none`}
          placeholder="Tell us about the setup style, guest count, colours, venue access or reference ideas."
          required
          maxLength={700}
          {...fieldErrorProps("message")}
        />
        {renderError("message")}
      </div>

      {errors.form ? (
        <p className={`${errorClassName} sm:col-span-2`} role="alert">
          {errors.form}
        </p>
      ) : null}

      {status ? (
        <p className="text-sm text-emerald-700 sm:col-span-2" role="status">
          {status}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isOpening}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-900/15 transition hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
      >
        {isOpening ? "Opening WhatsApp..." : submitLabel}
      </button>
    </form>
  );
}
