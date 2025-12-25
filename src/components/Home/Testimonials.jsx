"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Daniel Matthew",
    role: "Business Owner",
    company: "FashionHub",
    avatar: "/placeholder.jpg", // replace with your image
    headline: "Trusted by Clients, Proven by Results.",
    text: "Working with Ephicode has been an absolute game changer for our business. Their team not only understood our needs but also delivered innovative solutions that elevated our online presence. The website they built is user‑friendly, visually stunning, and optimized for performance. We've seen a significant increase in conversions and customer engagement.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Lead",
    company: "GrowthLabs",
    avatar: "/placeholder.jpg",
    headline: "From Ideas to Impactful Products.",
    text: "Ephicode helped us transform a rough concept into a polished digital product. The communication was clear, the process was transparent, and every iteration brought us closer to what we envisioned. Their eye for detail and focus on performance really stands out.",
  },
  {
    id: 3,
    name: "Arslan Ahmed",
    role: "Startup Founder",
    company: "NovaTech",
    avatar: "/placeholder.jpg",
    headline: "Reliable Tech Partner for Scaling.",
    text: "As a fast‑growing startup, we needed a tech partner that could move quickly without sacrificing quality. Ephicode delivered a scalable architecture, clean UI, and smooth handover to our internal team. We’re confident taking our product to the next stage with their foundation.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        {/* Left card: image + name */}
        <div
          className="
    relative flex flex-col justify-between
    overflow-hidden rounded-[2.5rem]
    border border-white/30
    bg-white/10
    backdrop-blur-2xl backdrop-saturate-150
    shadow-[0_0_60px_rgba(0,0,0,0.7)]
    min-h-[360px] sm:min-h-[380px] md:min-h-[420px]
    px-6 py-6 sm:px-8 sm:py-8
  "
        >
          {/* image placeholder area */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative h-40 w-40 rounded-3xl bg-white/70 shadow-inner overflow-hidden">
              {/* replace with your actual image later */}
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* name + role */}
          <div className="mt-6 space-y-2">
            <p className="text-lg sm:text-xl font-semibold">{current.name}</p>
            <p className="text-sm text-slate-200/90">{current.role}</p>
            <span
              className="
                inline-flex items-center rounded-full border border-white/40
                bg-black/40 px-3 py-1 text-[11px] sm:text-xs text-slate-100
              "
            >
              {current.company}
            </span>
          </div>
        </div>

        {/* Right card: text + arrows, liquid glass */}
        <div
          className="
    relative overflow-hidden
    rounded-[2.5rem] border border-white/50
    bg-white/5
    backdrop-blur-2xl backdrop-saturate-150
    shadow-[0_0_80px_rgba(16,185,129,0.55)]
    px-6 py-8 sm:px-10 sm:py-10
    min-h-[360px] sm:min-h-[380px] md:min-h-[420px]
    flex
  "
        >
          {/* liquid gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-emerald-500/45 blur-3xl" />
            <div className="absolute bottom-[-25%] right-1/4 h-80 w-80 rounded-full bg-teal-400/40 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-emerald-800/30 to-emerald-900/60 opacity-80" />
          </div>

          <div className="flex flex-col h-full gap-6 w-full">
            {/* Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                {current.headline.split(",")[0] + ","}
                <br />
                {current.headline.split(",")[1] || ""}
              </h2>
            </div>

            {/* Mini profile row inside text card */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/80 text-black text-sm font-semibold">
                {current.name.charAt(0)}
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold">{current.name}</p>
                <p className="text-slate-100/80">
                  {current.role} · {current.company}
                </p>
              </div>
            </div>

            {/* Testimonial text */}
            <p className="mt-2 text-xs sm:text-sm md:text-[13px] leading-relaxed text-emerald-50/90">
              {current.text}
            </p>

            {/* Arrows */}
            <div className="mt-auto flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handlePrev}
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/40 bg-black/30
                  text-white
                  transition-all duration-200
                  hover:bg-emerald-400 hover:text-black hover:border-emerald-200
                "
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/40 bg-black/30
                  text-white
                  transition-all duration-200
                  hover:bg-emerald-400 hover:text-black hover:border-emerald-200
                "
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
