"use client";

import { useState } from "react";

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you provide same day balloon decoration?",
      answer:
        "Yes, we provide same day decoration setup in major cities based on availability.",
    },

    {
      question: "Which cities do you serve?",
      answer:
        "Jaipur, Delhi NCR, Gurgaon, Noida, Mumbai, Pune, Bangalore and Hyderabad.",
    },

    {
      question: "How can I book a decoration setup?",
      answer:
        "You can directly book through WhatsApp or call our team instantly.",
    },

    {
      question: "Do you customize decoration themes?",
      answer:
        "Yes, we create personalized decoration themes for every celebration.",
    },

    {
      question: "What events do you decorate?",
      answer:
        "Birthdays, anniversaries, baby showers, proposals and romantic setups.",
    },
  ];

  return (

    <section
      id="faq"
      className="bg-gradient-to-b from-white via-purple-50 to-white px-4 py-24"
    >

      <div className="mx-auto max-w-4xl">

        {/* TOP */}
        <div className="mb-12 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black gradient-heading">
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
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition"
              >

                {/* BUTTON */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
                >

                  <h3 className="text-base font-semibold text-gray-800">
                    {faq.question}
                  </h3>

                  <span className="text-2xl text-yellow-500">
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                {/* ANSWER */}
                {isOpen && (

                  <div className="px-6 pb-5 border-t border-gray-100">

                    <p className="text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}