"use client";

import { useState } from "react";

const noidaAreaGroups = [
  {
    region: "Central Noida",
    areas: [
      "Sector 1",
      "Sector 2",
      "Sector 3",
      "Sector 4",
      "Sector 5",
      "Sector 6",
      "Sector 7",
      "Sector 8",
      "Sector 9",
      "Sector 10",
      "Sector 11",
      "Sector 12",
      "Sector 14",
      "Sector 15",
      "Sector 15A",
      "Sector 16",
      "Sector 16A",
      "Sector 17",
      "Sector 18",
      "Sector 19",
      "Sector 20",
      "Sector 21",
      "Sector 22",
      "Sector 23",
      "Sector 24",
      "Sector 25",
      "Sector 26",
      "Sector 27",
      "Sector 28",
      "Sector 29",
      "Sector 30",
    ],
  },
  {
    region: "Residential Areas",
    areas: [
      "Sector 31",
      "Sector 32",
      "Sector 33",
      "Sector 34",
      "Sector 35",
      "Sector 36",
      "Sector 37",
      "Sector 38",
      "Sector 39",
      "Sector 40",
      "Sector 41",
      "Sector 42",
      "Sector 43",
      "Sector 44",
      "Sector 45",
      "Sector 46",
      "Sector 47",
      "Sector 48",
      "Sector 49",
      "Sector 50",
      "Sector 51",
      "Sector 52",
      "Sector 53",
      "Sector 55",
      "Sector 56",
      "Sector 57",
      "Sector 58",
      "Sector 59",
      "Sector 60",
      "Sector 61",
      "Sector 62",
      "Sector 62A",
      "Sector 63",
      "Sector 64",
      "Sector 65",
      "Sector 66",
      "Sector 67",
      "Sector 68",
      "Sector 69",
      "Sector 70",
      "Sector 71",
      "Sector 72",
      "Sector 73",
      "Sector 74",
      "Sector 75",
      "Sector 76",
      "Sector 77",
      "Sector 78",
      "Sector 79",
      "Sector 80",
      "Sector 81",
      "Sector 82",
      "Sector 83",
      "Sector 84",
      "Sector 85",
      "Sector 86",
      "Sector 87",
      "Sector 88",
      "Sector 89",
      "Sector 90",
      "Sector 91",
      "Sector 92",
      "Sector 93",
      "Sector 93A",
      "Sector 93B",
      "Sector 94",
      "Sector 94A",
      "Sector 95",
      "Sector 96",
      "Sector 97",
      "Sector 98",
      "Sector 99",
      "Sector 100",
      "Sector 101",
      "Sector 102",
      "Sector 104",
      "Sector 105",
      "Sector 106",
      "Sector 107",
      "Sector 108",
      "Sector 110",
      "Sector 112",
      "Sector 113",
      "Sector 115",
      "Sector 116",
      "Sector 117",
      "Sector 118",
      "Sector 119",
      "Sector 120",
      "Sector 121",
      "Sector 122",
      "Sector 123",
      "Sector 124",
      "Sector 125",
      "Sector 126",
      "Sector 127",
      "Sector 128",
      "Sector 129",
      "Sector 130",
      "Sector 131",
      "Sector 132",
      "Sector 133",
      "Sector 134",
      "Sector 135",
      "Sector 136",
      "Sector 137",
      "Sector 138",
      "Sector 140",
      "Sector 140A",
      "Sector 141",
      "Sector 142",
      "Sector 143",
      "Sector 143A",
      "Sector 143B",
      "Sector 144",
      "Sector 145",
      "Sector 146",
      "Sector 147",
      "Sector 148",
      "Sector 149",
      "Sector 150",
      "Sector 151",
      "Sector 152",
      "Sector 153",
      "Sector 154",
      "Sector 155",
      "Sector 156",
      "Sector 157",
      "Sector 158",
      "Sector 159",
      "Sector 160",
      "Sector 161",
      "Sector 162",
      "Sector 163",
      "Sector 164",
      "Sector 165",
      "Sector 166",
      "Sector 167",
      "Sector 167B",
      "Sector 168",
    ],
  },
  {
    region: "Expressway & Premium Areas",
    areas: [
      "Noida-Greater Noida Expressway",
      "Noida Greater Noida Link Road",
      "Dadri Road",
      "Sector 128",
      "Sector 132",
      "Sector 135",
      "Sector 137",
      "Sector 142",
      "Sector 143",
      "Sector 150",
      "Sector 151",
      "Sector 168",
    ],
  },
  {
    region: "Nearby Areas",
    areas: ["Sorkha", "Garhi Samastpur", "Chhajarsi Colony"],
  },
];

export default function NoidaAreas() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white via-yellow-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[28px] border border-yellow-100 bg-white/90 shadow-[0_20px_60px_rgba(120,53,15,0.08)] backdrop-blur">
          <div className="px-5 py-6 text-center sm:px-8 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-600 sm:text-sm">
              Noida Coverage
            </p>

            <h2 className="mt-3 text-2xl font-black text-gray-950 sm:text-4xl md:text-5xl">
              Service Areas In Noida
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Event Wala Dost provides premium balloon decoration services in
              Noida for birthdays, anniversaries, baby showers, proposal
              setups, romantic room decorations, haldi and mehendi decoration.
              We serve major Noida areas including Sector 18, Sector 62, Sector
              75, Sector 137, Sector 150, Noida Expressway, Sector 93, Sector
              128 and nearby localities with same day decoration availability.
            </p>

            <button
              type="button"
              aria-controls="noida-service-areas"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
              className="mt-6 rounded-full bg-gradient-to-r from-neutral-950 via-purple-950 to-amber-700 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,28,135,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(88,28,135,0.28)] active:scale-[0.98] sm:px-7"
            >
              {expanded ? "Hide Areas" : "View Noida Areas"}
            </button>
          </div>

          <div
            id="noida-service-areas"
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-yellow-100 bg-gradient-to-b from-yellow-50/70 to-white p-4 sm:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {noidaAreaGroups.map((group) => (
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
