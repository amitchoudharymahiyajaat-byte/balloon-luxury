"use client";

import { useState } from "react";

const gurgaonAreaGroups = [
  {
    region: "Popular Gurgaon Areas",
    areas: [
      "Sector 56",
      "Sector 54",
      "Sector 43",
      "Sector 25",
      "Sector 50",
      "Sector 49",
      "Sector 47",
      "Sector 48",
      "Sector 52",
      "Sector 69",
      "Sector 61",
      "Sector 53",
      "Sector 42",
      "Sector 31",
      "Sector 24",
      "Sector 22",
      "Sector 51",
    ],
  },
  {
    region: "Premium & Corporate Areas",
    areas: [
      "Golf Course Road",
      "Golf Course Extension",
      "MG Road",
      "Cyber City",
      "DLF Phase 1",
      "DLF Phase 2",
      "DLF Phase 3",
      "DLF Phase 4",
      "DLF Phase 5",
      "Udyog Vihar",
      "South City",
      "Sushant Lok I",
      "Sushant Lok Phase 2",
      "Sushant Lok Phase 3",
    ],
  },
  {
    region: "New Gurgaon",
    areas: [
      "Sector 81",
      "Sector 82",
      "Sector 83",
      "Sector 84",
      "Sector 85",
      "Sector 86",
      "Sector 87",
      "Sector 88",
      "Sector 88A",
      "Sector 88B",
      "Sector 89",
      "Sector 89A",
      "Sector 89B",
      "Sector 90",
      "Sector 91",
      "Sector 92",
      "Sector 93",
      "Sector 95",
      "Sector 95A",
      "Sector 95B",
      "Sector 99",
      "Sector 99A",
      "Sector 100",
      "Sector 101",
      "Sector 102",
      "Sector 102A",
      "Sector 103",
      "Sector 103A",
      "Sector 104",
      "Sector 105",
      "Sector 106",
      "Sector 107",
      "Sector 108",
      "Sector 109",
      "Sector 110",
      "Sector 110A",
      "Sector 111",
      "Sector 112",
      "Sector 113",
      "Sector 114",
      "Sector 115",
    ],
  },
  {
    region: "Sohna & Nearby",
    areas: [
      "Sohna",
      "Sohna Road",
      "Sohna Sector 2",
      "Sohna Sector 4",
      "Sohna Sector 5",
      "Sohna Sector 6",
      "Sohna Sector 7",
      "Sohna Sector 11",
      "Sohna Sector 14",
      "Sohna Sector 17",
      "Sohna Sector 25",
      "Sohna Sector 33",
      "Sohna Sector 34",
      "Sohna Sector 35",
      "Sohna Sector 36",
      "Bhondsi",
      "Gwal Pahari",
      "Gurgaon-Faridabad Road",
    ],
  },
  {
    region: "Dwarka Expressway & Old Gurgaon",
    areas: [
      "Dwarka Expressway",
      "Palam Vihar",
      "Palam Vihar Extension",
      "New Palam Vihar",
      "Sector 3",
      "Sector 3A",
      "Sector 4",
      "Sector 5",
      "Sector 6",
      "Sector 6A",
      "Sector 7",
      "Sector 8",
      "Sector 9",
      "Sector 9A",
      "Sector 9B",
      "Sector 10",
      "Sector 10A",
      "Sector 11",
      "Sector 12",
      "Sector 12A",
      "Sector 13",
      "Sector 14",
      "Sector 15",
      "Sector 16",
      "Sector 17",
      "Sector 18",
      "Sector 19",
      "Sector 20",
      "Sector 21",
      "Sector 23",
      "Sector 23A",
    ],
  },
  {
    region: "Manesar & Outer Gurgaon",
    areas: [
      "Manesar",
      "Manesar Village",
      "Garhi Harsaru",
      "Pataudi",
      "Farukh Nagar",
      "Sultanpur",
      "Mankrola",
      "Budhera",
      "Bissar Akbarpur",
      "Khandsa Road",
      "Jhajjar Road",
      "NH 8",
      "Old Delhi Gurgaon Road",
    ],
  },
];

export default function GurgaonAreas() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white via-yellow-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[28px] border border-yellow-100 bg-white/90 shadow-[0_20px_60px_rgba(120,53,15,0.08)] backdrop-blur">
          <div className="px-5 py-6 text-center sm:px-8 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-600 sm:text-sm">
              Gurgaon Coverage
            </p>

            <h2 className="mt-3 text-2xl font-black text-gray-950 sm:text-4xl md:text-5xl">
              Service Areas In Gurgaon
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Event Wala Dost provides premium balloon decoration services in
              Gurgaon for birthdays, anniversaries, baby showers, proposal
              setups, romantic room decorations, haldi and mehendi decoration.
              We serve major Gurgaon areas including Golf Course Road, DLF
              Phases, Sohna Road, New Gurgaon, Dwarka Expressway and Manesar
              with same day decoration availability.
            </p>

            <button
              type="button"
              aria-controls="gurgaon-service-areas"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
              className="mt-6 rounded-full bg-gradient-to-r from-neutral-950 via-purple-950 to-amber-700 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,28,135,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(88,28,135,0.28)] active:scale-[0.98] sm:px-7"
            >
              {expanded ? "Hide Areas" : "View Gurgaon Areas"}
            </button>
          </div>

          <div
            id="gurgaon-service-areas"
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-yellow-100 bg-gradient-to-b from-yellow-50/70 to-white p-4 sm:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {gurgaonAreaGroups.map((group) => (
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
