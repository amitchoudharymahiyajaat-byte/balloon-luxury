"use client";

import { useState } from "react";

export default function FAQ({
  city = "",
}: {
  city?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `Do you provide same day balloon decoration services in ${
        city || "your city"
      }?`,
      answer:
        "Yes, we provide same day decoration setup in major cities based on availability.",
    },

    {
      question: "Which cities do you serve?",
      answer:
        "Jaipur, Delhi NCR, Gurgaon, Noida, Mumbai, Pune, Bangalore, Hyderabad, Chennai, Kolkata and more major cities.",
    },

    {
      question: `How can I book balloon decoration services in ${
        city || "your city"
      }?`,
      answer:
        "You can directly book through WhatsApp or call our team instantly.",
    },

    {
      question: "Do you customize decoration themes?",
      answer:
        "Yes, we create personalized decoration themes for every celebration.",
    },

    {
      question: `What events do you decorate in ${
        city || "your city"
      }?`,
      answer:
        "Birthdays, anniversaries, baby showers, proposals and romantic setups.",
    },
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section
        id="faq"
        className="bg-gradient-to-b from-white via-purple-50 to-white px-4 py-12 sm:px-6 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl">
          {/* TOP */}
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
              FAQ
            </p>

            <h2
              className="mt-3 text-2xl font-black sm:text-4xl md:text-5xl"
              style={{
                background:
                  "linear-gradient(90deg, #ff6b6b 0%, #ffa500 25%, #4ecdc4 50%, #ff1493 75%, #9d4edd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600">
              Quick answers about bookings and decoration setup.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                >
                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-gray-50 sm:px-6 sm:py-5"
                  >
                    <h3 className="pr-4 text-base font-semibold text-gray-800 sm:text-lg">
                      {faq.question}
                    </h3>

                    {/* Animated Plus Icon */}
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-2xl font-bold text-yellow-600 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-gray-100 px-6 py-5">
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
