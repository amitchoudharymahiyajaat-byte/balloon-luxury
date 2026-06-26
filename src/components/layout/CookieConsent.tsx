"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_SETTINGS_EVENT,
  getSavedConsent,
  saveConsent,
  type ConsentPreferences,
} from "../../lib/consent";

type ConsentView = "banner" | "preferences";

export default function CookieConsent() {
  const [savedConsent] = useState(() => getSavedConsent());
  const [visible, setVisible] = useState(() => !savedConsent);
  const [view, setView] = useState<ConsentView>("banner");
  const [analytics, setAnalytics] = useState(() => savedConsent?.analytics ?? false);
  const [marketing, setMarketing] = useState(() => savedConsent?.marketing ?? false);

  useEffect(() => {
    const openSettings = () => {
      const savedConsent = getSavedConsent();

      setAnalytics(savedConsent?.analytics ?? false);
      setMarketing(savedConsent?.marketing ?? false);
      setView("preferences");
      setVisible(true);
    };

    window.addEventListener(CONSENT_SETTINGS_EVENT, openSettings);

    return () => {
      window.removeEventListener(CONSENT_SETTINGS_EVENT, openSettings);
    };
  }, []);

  const applyConsent = (preferences: Pick<ConsentPreferences, "analytics" | "marketing">) => {
    saveConsent(preferences);
    setAnalytics(preferences.analytics);
    setMarketing(preferences.marketing);
    setVisible(false);
    setView("banner");
  };

  if (!visible) return null;

  return (
    <section
      role={view === "preferences" ? "dialog" : "region"}
      aria-modal={view === "preferences" ? "true" : undefined}
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-24 z-[10001] mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-4 text-gray-950 shadow-[0_20px_70px_rgba(15,23,42,0.25)] sm:bottom-5 sm:p-5 md:left-auto md:right-5 md:mx-0 md:max-w-xl"
    >
      <div className="flex flex-col gap-4">
        <div>
          <p
            id="cookie-consent-title"
            className="text-sm font-black uppercase tracking-[0.22em] text-purple-700"
          >
            Cookie Preferences
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            We use optional analytics and advertising technologies to understand website activity and improve our services. You can accept all, reject optional tracking, or manage your preferences. Read our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-purple-700 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {view === "preferences" ? (
          <div className="space-y-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold">Necessary</p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Required for navigation, forms and core website functions.
                </p>
              </div>
              <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
                Always On
              </span>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl bg-white p-3 ring-1 ring-gray-100 focus-within:ring-2 focus-within:ring-purple-500">
              <span>
                <span className="block text-sm font-bold">Analytics</span>
                <span className="mt-1 block text-xs leading-5 text-gray-600">
                  Allows Google Analytics measurement after consent.
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                className="mt-1 h-5 w-5 accent-purple-600"
              />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl bg-white p-3 ring-1 ring-gray-100 focus-within:ring-2 focus-within:ring-purple-500">
              <span>
                <span className="block text-sm font-bold">Marketing</span>
                <span className="mt-1 block text-xs leading-5 text-gray-600">
                  Allows Meta Pixel and advertising or remarketing tools after consent.
                </span>
              </span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
                className="mt-1 h-5 w-5 accent-purple-600"
              />
            </label>
          </div>
        ) : null}

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          {view === "banner" ? (
            <button
              type="button"
              onClick={() => setView("preferences")}
              className="rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Manage Preferences
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => applyConsent({ analytics: false, marketing: false })}
            className="rounded-full border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Reject Optional
          </button>
          {view === "preferences" ? (
            <button
              type="button"
              onClick={() => applyConsent({ analytics, marketing })}
              className="rounded-full bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Save Preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={() => applyConsent({ analytics: true, marketing: true })}
              className="rounded-full bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Accept All
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
