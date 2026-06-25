"use client";

import { useState } from "react";

const kolkataAreaGroups = [
  {
    region: "Central Kolkata",
    areas: [
      "Park Street",
      "Esplanade",
      "Chowringhee",
      "Dharmatala",
      "Sealdah",
      "Bowbazar",
      "College Street",
      "BBD Bagh",
      "Camac Street",
      "Theatre Road",
      "Shakespeare Sarani",
    ],
  },
  {
    region: "South Kolkata",
    areas: [
      "Ballygunge",
      "Alipore",
      "New Alipore",
      "Kalighat",
      "Tollygunge",
      "Jadavpur",
      "Gariahat",
      "Southern Avenue",
      "Lake Gardens",
      "Golf Green",
      "Behala",
      "Santoshpur",
      "Kasba",
    ],
  },
  {
    region: "North Kolkata",
    areas: [
      "Shyambazar",
      "Dum Dum",
      "Lake Town",
      "Belgachia",
      "Bagbazar",
      "Baranagar",
      "Sinthee",
      "Paikpara",
      "Ultadanga",
      "Kankurgachi",
      "Maniktala",
    ],
  },
  {
    region: "East Kolkata & New Town",
    areas: [
      "Salt Lake City",
      "Sector V",
      "Rajarhat",
      "New Town",
      "EM Bypass",
      "Chingrighata",
      "Tangra",
      "Topsia",
      "Anandapur",
      "Mukundapur",
      "Ruby",
    ],
  },
  {
    region: "Howrah & Nearby",
    areas: [
      "Howrah",
      "Bally",
      "Belur",
      "Liluah",
      "Shibpur",
      "Santragachi",
      "Salkia",
      "Dankuni",
      "Uttarpara",
      "Serampore",
      "Chandannagar",
    ],
  },
  {
    region: "Premium & Lifestyle Areas",
    areas: [
      "Park Circus",
      "Ballygunge Place",
      "Alipore Road",
      "Minto Park",
      "Hindustan Park",
      "Southern Avenue",
      "Prince Anwar Shah Road",
      "New Town Action Area I",
      "New Town Action Area II",
      "New Town Action Area III",
    ],
  },
];

export default function KolkataAreas() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white via-yellow-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[28px] border border-yellow-100 bg-white/90 shadow-[0_20px_60px_rgba(120,53,15,0.08)] backdrop-blur">
          <div className="px-5 py-6 text-center sm:px-8 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-600 sm:text-sm">
              Kolkata Coverage
            </p>

            <h2 className="mt-3 text-2xl font-black text-gray-950 sm:text-4xl md:text-5xl">
              Service Areas In Kolkata
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Event Wala Dost provides premium balloon decoration services in
              Kolkata for birthdays, anniversaries, baby showers, proposal
              setups, romantic room decorations, haldi and mehendi decoration.
              We serve major Kolkata areas including Park Street, Salt Lake,
              New Town, Ballygunge, Alipore, Howrah, Rajarhat, Behala,
              Gariahat and nearby localities with same day decoration
              availability.
            </p>

            <button
              type="button"
              aria-controls="kolkata-service-areas"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
              className="mt-6 rounded-full bg-gradient-to-r from-neutral-950 via-purple-950 to-amber-700 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,28,135,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(88,28,135,0.28)] active:scale-[0.98] sm:px-7"
            >
              {expanded ? "Hide Kolkata Areas" : "View Kolkata Areas"}
            </button>
          </div>

          <div
            id="kolkata-service-areas"
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-yellow-100 bg-gradient-to-b from-yellow-50/70 to-white p-4 sm:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {kolkataAreaGroups.map((group) => (
                    <div
                      key={group.region}
                      className="rounded-2xl border border-yellow-100 bg-white p-4 shadow-sm transition hover:border-purple-200 hover:shadow-md"
                    >
                      <h3 className="text-sm font-black uppercase tracking-[0.18em] text-gray-950">
                        {group.region}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.areas.map((area) => (
                          <span
                            key={area}
                            className="rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-2 text-xs font-semibold text-gray-800 transition hover:border-purple-200 hover:bg-purple-50 sm:text-sm"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
