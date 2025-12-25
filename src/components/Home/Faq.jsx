"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer UI/UX design, web and mobile app development, e‑commerce solutions, branding, and SEO services tailored to your business.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary based on scope, but most websites are delivered within 3–8 weeks including design, development, and revisions.",
  },
  {
    question: "Can you help with website redesigns?",
    answer:
      "Yes! We specialize in redesigning websites to improve aesthetics, user experience, and performance while aligning with your business goals.",
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer:
      "We offer ongoing support, updates, and maintenance packages to keep your website secure, fast, and up to date.",
  },
  {
    question: "Are your websites mobile‑friendly?",
    answer:
      "Absolutely. Every project is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(2); // third one open by default

  return (
    <section className="w-full px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-start">
        {/* Left side text */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
            Answers to Your
            <br />
            Questions, Simplified
          </h2>
          <p className="text-sm sm:text-base text-slate-200/80 max-w-sm">
            Find quick solutions to common questions about our services.
          </p>

          <button
            className="
              mt-4 inline-flex h-10 items-center justify-center rounded-xl
              border border-white/15 bg-white/10
              px-4 text-xs sm:text-sm text-white
              backdrop-blur-xl backdrop-saturate-150
              transition-all duration-200 hover:bg-white/15 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
            "
          >
            View More
          </button>
        </div>

        {/* Right side accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`
                  w-full text-left rounded-2xl
                  border border-white/10
                  px-4 sm:px-6 py-3 sm:py-4
                  flex items-center justify-between gap-4
                  transition-all duration-300
                  shadow-[0_0_35px_rgba(0,0,0,0.5)]
                  backdrop-blur-xl backdrop-saturate-150
                  ${isOpen
                    ? "bg-emerald-400 text-black"
                    : "bg-white/5 text-white hover:bg-white/10"
                  }
                `}
              >
                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-semibold">
                    {item.question}
                  </p>
                  {isOpen && (
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-black/80">
                      {item.answer}
                    </p>
                  )}
                </div>

                {/* Chevron */}
                <div
                  className={`
                    flex h-9 w-9 flex-shrink-0 items-center justify-center
                    rounded-full border
                    transition-all duration-300
                    ${isOpen
                      ? "border-black/20 bg-black text-black"
                      : "border-white/20 bg-black/40 text-white"
                    }
                  `}
                >
                  <span
                    className={`
                      inline-block text-xs
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <img src="/Home/faq/1.svg" alt="" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
