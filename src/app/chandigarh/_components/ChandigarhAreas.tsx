"use client";

import Link from "next/link";
import { useState } from "react";
import { chandigarhAreas } from "../areas";

export default function ChandigarhAreas() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 shadow-[0_24px_80px_rgba(190,24,93,0.08)] sm:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">
              CHANDIGARH TRICITY COVERAGE
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Service Areas In Chandigarh
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Event Wala Dost provides premium balloon decoration services in Chandigarh, Mohali,
              Panchkula and nearby Tricity locations for birthdays, anniversaries, baby showers,
              proposal setups, romantic room decorations, hotel room decoration, baby welcome
              celebrations and surprise events. We serve major locations including Chandigarh
              sectors, Manimajra, Zirakpur, Mohali, Aerocity, Kharar, New Chandigarh, Panchkula and
              nearby areas, with selected same-day decoration availability depending on date, access
              and setup requirements.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-950/10 transition hover:bg-gray-800"
              aria-expanded={showAll}
              aria-controls="chandigarh-service-areas"
            >
              {showAll ? "Hide Chandigarh Areas" : "View Chandigarh Areas"}
            </button>
            <Link
              href="/blog/balloon-decoration-service-areas-chandigarh"
              className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-700 shadow-sm transition hover:border-rose-300 hover:bg-rose-50"
            >
              Read Chandigarh Area Guide
            </Link>
          </div>

          <div
            id="chandigarh-service-areas"
            aria-hidden={!showAll}
            className={`overflow-hidden transition-all duration-500 ${
              showAll ? "mt-10 max-h-[5000px] opacity-100" : "mt-0 max-h-0 opacity-0"
            }`}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {chandigarhAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-rose-100 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-gray-500">
            Looking for birthday decoration in Chandigarh, anniversary decoration in Mohali, room
            decoration in Zirakpur, baby shower decoration in Panchkula or balloon decoration near
            Kharar? Event Wala Dost offers customized balloon decoration packages across Chandigarh
            Tricity, with same-day booking support checked according to schedule and setup scope.
          </p>
        </div>
      </div>
    </section>
  );
}
