"use client";

import Image from "next/image";
import React from "react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Seamless and modern user experiences for web and mobile platforms, focused on usability, aesthetics, and satisfaction.",
    iconPath: "/Home/CardIcons/card1.svg",
  },
  {
    title: "Mobile Application Development",
    description:
      "Custom iOS and Android apps built with modern technologies, delivering scalable and user‑friendly solutions.",
    iconPath: "/Home/CardIcons/card2.svg",
  },
  {
    title: "Web Development",
    description:
      "Responsive, high‑performance websites from landing pages to complex web applications, optimized for speed and SEO.",
    iconPath: "/Home/CardIcons/card3.svg",
  },
  {
    title: "Branding Design",
    description:
      "Complete brand systems including logos, color palettes, typography, and visual guidelines that stand out.",
    iconPath: "/Home/CardIcons/card4.svg",
  },
  {
    title: "E‑Commerce Solutions",
    description:
      "End‑to‑end e‑commerce stores with secure checkout, product management, and conversion‑focused UX.",
    iconPath: "/Home/CardIcons/card5.svg",
  },
  {
    title: "SEO Services",
    description:
      "Data‑driven SEO strategies to improve visibility, organic traffic, and ongoing performance tracking.",
    iconPath: "/Home/CardIcons/card6.svg",
  },
];

function ServicesSection() {
  return (
    <section className="bg-transparent py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-snug bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Driven by innovation, we craft scalable and powerful digital
            solutions for modern businesses.
          </p>
        </div>

        {/* liquid glass cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                flex flex-col justify-start
                rounded-2xl border border-white/50
                bg-white/10
                px-6 py-7 min-h-[320px]
                text-white
                shadow-[0_0_40px_rgba(0,0,0,0.35)]
                backdrop-blur-xl backdrop-saturate-150
                transition-transform transition-shadow duration-300
                hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(16,185,129,0.55)]
              "
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 border border-white/20">
                <Image
                  src={service.iconPath}
                  alt={`${service.title} icon`}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-[0.9rem] leading-relaxed text-gray-200">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
