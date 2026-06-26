"use client";

import Link from "next/link";
import { useState } from "react";

import { sikarAreas } from "../areas";

export default function SikarAreas() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white via-yellow-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[28px] border border-yellow-100 bg-white/90 shadow-[0_20px_60px_rgba(120,53,15,0.08)] backdrop-blur">
          <div className="px-5 py-6 text-center sm:px-8 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-600 sm:text-sm">
              SIKAR COVERAGE
            </p>

            <h2 className="mt-3 text-2xl font-black text-gray-950 sm:text-4xl md:text-5xl">
              Service Areas In Sikar
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Event Wala Dost provides customised balloon decoration services across Sikar city and nearby serviceable areas, subject to date, team availability and venue access. We support home decoration, hotel and restaurant decoration where permitted, banquet and party venue decoration, terrace and outdoor setups and personalised themed setups for birthdays, anniversaries, baby showers, weddings and corporate events.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                aria-controls="sikar-service-areas"
                aria-expanded={expanded}
                onClick={() => setExpanded((current) => !current)}
                className="rounded-full bg-gradient-to-r from-neutral-950 via-purple-950 to-amber-700 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,28,135,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(88,28,135,0.28)] active:scale-[0.98] sm:px-7"
              >
                {expanded ? "Hide Sikar Areas" : "View Sikar Areas"}
              </button>

              <Link
                href="/blog"
                className="rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-bold text-purple-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50 sm:px-7"
              >
                Explore Event Ideas
              </Link>
            </div>
          </div>

          <div
            id="sikar-service-areas"
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-yellow-100 bg-gradient-to-b from-yellow-50/70 to-white p-4 sm:p-6">
                <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                  {sikarAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-2 text-xs font-semibold text-gray-800 transition hover:border-purple-200 hover:bg-purple-50 sm:text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <p className="mx-auto mt-6 max-w-4xl rounded-3xl border border-purple-100 bg-purple-50/70 px-4 py-4 text-center text-sm leading-relaxed text-gray-700 sm:px-6 sm:text-base">
                  Whether you are planning a birthday balloon setup, anniversary surprise, baby shower styling, wedding entrance or a corporate event in Sikar, we can suggest a decoration plan based on your venue, theme, colours and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
