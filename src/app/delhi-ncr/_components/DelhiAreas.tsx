"use client";

import { useState } from "react";

const delhiAreaGroups = [
  {
    region: "North West Delhi",
    areas: ["Adarsh Nagar", "Ashok Vihar", "Rohini", "Pitam Pura", "Shalimar Bagh"],
  },
  {
    region: "North Delhi",
    areas: ["Kamla Nagar", "Model Town", "Mukherjee Nagar", "GTB Nagar", "Civil Lines"],
  },
  {
    region: "North East Delhi",
    areas: ["Shahdara", "Yamuna Vihar", "Gandhi Nagar", "Seelampur"],
  },
  {
    region: "Central Delhi",
    areas: ["Karol Bagh", "Chandni Chowk", "Paharganj", "Rajender Nagar"],
  },
  {
    region: "New Delhi",
    areas: ["Connaught Place", "Chanakyapuri", "Pragati Maidan", "Mahipalpur"],
  },
  {
    region: "East Delhi",
    areas: ["Laxmi Nagar", "Mayur Vihar", "Anand Vihar", "Preet Vihar"],
  },
  {
    region: "South Delhi",
    areas: [
      "Hauz Khas",
      "Green Park",
      "Malviya Nagar",
      "Saket",
      "Greater Kailash",
      "South Extension",
    ],
  },
  {
    region: "South East Delhi",
    areas: [
      "Lajpat Nagar",
      "Defence Colony",
      "Nehru Place",
      "New Friends Colony",
      "Chittaranjan Park",
    ],
  },
  {
    region: "South West Delhi",
    areas: ["Dwarka", "Janakpuri", "Vasant Kunj", "Vasant Vihar", "RK Puram"],
  },
  {
    region: "West Delhi",
    areas: ["Rajouri Garden", "Punjabi Bagh", "Tilak Nagar", "Vikaspuri", "Paschim Vihar"],
  },
];

export default function DelhiAreas() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white via-yellow-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[28px] border border-yellow-100 bg-white/90 shadow-[0_20px_60px_rgba(120,53,15,0.08)] backdrop-blur">
          <div className="px-5 py-6 text-center sm:px-8 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-600 sm:text-sm">
              Delhi NCR Coverage
            </p>

            <h2 className="mt-3 text-2xl font-black text-gray-950 sm:text-4xl md:text-5xl">
              Service Areas In Delhi NCR
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Book same day decoration and luxury balloon decoration in Delhi NCR
              for birthdays, anniversaries, romantic room decoration and baby
              shower decoration with premium styling across major neighborhoods.
            </p>

            <button
              type="button"
              aria-controls="delhi-service-areas"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
              className="mt-6 rounded-full bg-gradient-to-r from-neutral-950 via-purple-950 to-amber-700 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(88,28,135,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(88,28,135,0.28)] active:scale-[0.98] sm:px-7"
            >
              {expanded ? "Hide Areas" : "View Areas"}
            </button>
          </div>

          <div
            id="delhi-service-areas"
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="border-t border-yellow-100 bg-gradient-to-b from-yellow-50/70 to-white p-4 sm:p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {delhiAreaGroups.map((group) => (
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
