"use client";

import { motion } from "framer-motion";

export default function Reviews({
  city = "India",
}: {
  city?: string;
}) {
  return (
    <section
      id="reviews"
      className="overflow-hidden bg-gradient-to-b from-white via-yellow-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">

        {/* LEFT CARD */}
        <div className="w-full rounded-[28px] bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 p-5 text-black shadow-lg sm:p-6 lg:w-[280px] lg:min-w-[280px]">

          <p className="uppercase tracking-[3px] text-xs font-bold">
            Reviews
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-black leading-tight">
            Loved by
            <br />
            3000+ {city} Families
          </h2>

          <div className="mt-8 flex items-end gap-3">

            <h3 className="text-6xl font-black">
              4.8
            </h3>

            <div className="pb-2">

              <div className="text-lg">
                ★★★★★
              </div>

              <p className="text-sm font-semibold">
                out of 5
              </p>

            </div>

          </div>

          <div className="mt-5 inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-xs font-semibold">
            ✔ Verified Reviews
          </div>

          <p className="mt-5 text-sm leading-relaxed">
            Based on real decoration bookings across {city}.
          </p>

        </div>



        {/* RIGHT SIDE */}
        <div className="flex-1 overflow-hidden">

          {/* TOP */}
          <div className="mb-6">

            <h2 className="text-2xl font-black sm:text-3xl md:text-4xl" style={{
              background: "linear-gradient(90deg, #ff6b6b 0%, #ffa500 25%, #4ecdc4 50%, #ff1493 75%, #9d4edd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              What Customers Say
            </h2>

            <p className="text-gray-600 mt-2">
              Real stories from celebrations in {city}
            </p>

          </div>

          {/* SLIDER */}
          <div className="review-slider">

            <div className="review-track">

              {[
                {
                  name: "Priya Sharma",
                  city: "Jaipur",
                  review:
                    "Beautiful birthday decoration setup. Everything looked premium and elegant.",
                },

                {
                  name: "Rahul Verma",
                  city: "Delhi NCR",
                  review:
                    "Very professional team and timely setup.",
                },

                {
                  name: "Neha Kapoor",
                  city: "Mumbai",
                  review:
                    "Luxury decoration experience. Balloon setup looked amazing.",
                },

                {
                  name: "Aarush Mehta",
                  city: "Bangalore",
                  review:
                    "Very fast setup and quality decoration.",
                },

                {
                  name: "Simran Kaur",
                  city: "Gurgaon",
                  review:
                    "Loved the surprise room decoration.",
                },

                {
                  name: "Ritika Jain",
                  city: "Pune",
                  review:
                    "Amazing anniversary decoration experience.",
                },

                {
                  name: "Priya Sharma",
                  city: "Jaipur",
                  review:
                    "Beautiful birthday decoration setup. Everything looked premium and elegant.",
                },

                {
                  name: "Rahul Verma",
                  city: "Delhi NCR",
                  review:
                    "Very professional team and timely setup.",
                },

              ].map((item, index) => (

                <motion.div
  key={index}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="h-[220px] min-w-[260px] flex-shrink-0 rounded-[24px] border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg md:min-w-[290px]"
>

                  {/* TOP */}
                  <div className="flex items-center gap-3">

                    <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">
                      {item.name.charAt(0)}
                    </div>

                    <div>

                      <h3 className="font-bold text-black">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.city}
                      </p>

                    </div>

                  </div>

                  {/* STARS */}
                  <div className="mb-4 sm:mb-5 text-lg">
                    ★★★★★
                  </div>

                  {/* REVIEW */}
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.review}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
