const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const withFallback = (value: string | undefined, fallback: string) =>
  value?.trim() || fallback;

const siteUrl = trimTrailingSlash(
  withFallback(process.env.NEXT_PUBLIC_SITE_URL, "https://eventwaladost.com")
);
const phoneNumber = withFallback(
  process.env.NEXT_PUBLIC_BUSINESS_PHONE,
  "+919602060414"
);
const phoneDisplay = withFallback(
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY,
  "+91 9602060414"
);
const whatsappNumber = withFallback(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  phoneNumber.replace(/\D/g, "")
).replace(/\D/g, "");

export const businessConfig = {
  siteName: withFallback(process.env.NEXT_PUBLIC_SITE_NAME, "Event Wala Dost"),
  siteUrl,
  phoneNumber,
  phoneDisplay,
  telHref: `tel:${phoneNumber}`,
  whatsappNumber,
  whatsappBaseUrl: `https://wa.me/${whatsappNumber}`,
  ogImage: withFallback(process.env.NEXT_PUBLIC_OG_IMAGE, "/images/hero.jpg"),
  priceRange: withFallback(process.env.NEXT_PUBLIC_PRICE_RANGE, "INR 1,999+"),
  availabilityLabel: withFallback(
    process.env.NEXT_PUBLIC_AVAILABILITY_LABEL,
    "Available 24x7 For Bookings"
  ),
  instagramUrl: withFallback(
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    "https://www.instagram.com/eventwaladost"
  ),
  facebookUrl: withFallback(
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    "https://www.facebook.com/eventwaladost"
  ),
} as const;

export function createWhatsAppUrl(message?: string) {
  if (!message) {
    return businessConfig.whatsappBaseUrl;
  }

  const url = new URL(businessConfig.whatsappBaseUrl);
  url.searchParams.set("text", message);
  return url.toString();
}
