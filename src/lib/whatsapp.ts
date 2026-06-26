import { businessConfig } from "./business";

export type EnquiryMessageData = {
  name?: string;
  phone?: string;
  city?: string;
  eventType?: string;
  eventDate?: string;
  venueArea?: string;
  message?: string;
  page?: string;
  service?: string;
};

export type PageWhatsAppContext = {
  page?: "home" | "city" | "service" | "city-service" | "blog" | "gallery" | "contact" | "popup" | "general";
  city?: string;
  service?: string;
  articleTitle?: string;
  message?: string;
};

const toCleanString = (value?: string | null) => value?.trim() ?? "";

export function normalizeWhatsAppNumber(number = businessConfig.whatsappNumber) {
  return number.replace(/\D/g, "");
}

export function buildWhatsAppUrl(message?: string, number = businessConfig.whatsappNumber) {
  const digits = normalizeWhatsAppNumber(number);

  if (!digits) return undefined;

  const baseUrl = `https://wa.me/${digits}`;
  const cleanMessage = toCleanString(message);

  return cleanMessage
    ? `${baseUrl}?text=${encodeURIComponent(cleanMessage)}`
    : baseUrl;
}

export function buildEnquiryMessage(data: EnquiryMessageData) {
  const rows = [
    "Hello Event Wala Dost,",
    "",
    "I would like to enquire about decoration.",
    "",
    ["Name", data.name],
    ["Phone", data.phone],
    ["City", data.city],
    ["Event Type", data.eventType],
    ["Event Date", data.eventDate],
    ["Venue / Area", data.venueArea],
    ["Message", data.message],
    "",
    ["Page", data.page],
    ["Service", data.service],
    "",
    "Please share availability and suitable decoration options.",
  ];

  return rows
    .flatMap((row) => {
      if (typeof row === "string") return row;

      const [label, value] = row;
      const cleanValue = toCleanString(value);
      return cleanValue ? `${label}: ${cleanValue}` : [];
    })
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function buildPageWhatsAppMessage(context: PageWhatsAppContext = {}) {
  const city = toCleanString(context.city);
  const service = toCleanString(context.service);
  const articleTitle = toCleanString(context.articleTitle);
  const message = toCleanString(context.message);

  if (message) return message;

  if (context.page === "city-service" && service && city) {
    return `I want to enquire about ${service} in ${city}.`;
  }

  if (context.page === "service" && service) {
    return `I want to enquire about ${service}.`;
  }

  if (context.page === "city" && city) {
    return `I want to enquire about balloon decoration in ${city}.`;
  }

  if (context.page === "blog" && articleTitle) {
    return `I was reading ${articleTitle} and want to discuss decoration.`;
  }

  if (context.page === "gallery") {
    return "I saw your decoration gallery and want to discuss a setup.";
  }

  if (context.page === "popup") {
    return "I want to enquire about decoration for an upcoming event.";
  }

  return "I want to enquire about balloon and event decoration.";
}

export function createWhatsAppUrl(message?: string) {
  return buildWhatsAppUrl(message);
}
