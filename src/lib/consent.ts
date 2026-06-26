export const CONSENT_VERSION = "2026-06-26";
export const CONSENT_STORAGE_KEY = "ewd_cookie_consent";
export const CONSENT_CHANGE_EVENT = "ewd:consentchange";
export const CONSENT_SETTINGS_EVENT = "ewd:open-cookie-settings";

export type ConsentPreferences = {
  version: string;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
};

export type ConsentChoice = Pick<
  ConsentPreferences,
  "analytics" | "marketing"
>;

function isConsentPreferences(value: unknown): value is ConsentPreferences {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<ConsentPreferences>;

  return (
    candidate.version === CONSENT_VERSION &&
    typeof candidate.analytics === "boolean" &&
    typeof candidate.marketing === "boolean" &&
    typeof candidate.savedAt === "string"
  );
}

export function getSavedConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const rawValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!rawValue) return null;

    const parsedValue: unknown = JSON.parse(rawValue);
    return isConsentPreferences(parsedValue) ? parsedValue : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return null;

  const preferences: ConsentPreferences = {
    version: CONSENT_VERSION,
    analytics: choice.analytics,
    marketing: choice.marketing,
    savedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify(preferences),
  );
  window.dispatchEvent(
    new CustomEvent<ConsentPreferences>(CONSENT_CHANGE_EVENT, {
      detail: preferences,
    }),
  );

  return preferences;
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}

export function hasAnalyticsConsent() {
  return getSavedConsent()?.analytics === true;
}

export function hasMarketingConsent() {
  return getSavedConsent()?.marketing === true;
}
