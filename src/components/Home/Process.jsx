"use client";

import React from "react";
import Image from "next/image";

const steps = [
  { icon: "/Home/process/Step-1.svg" },
  { icon: "/Home/process/Step-2.svg" },
  { icon: "/Home/process/Step-3.svg" },
  { icon: "/Home/process/Step-4.svg" },
];

function Process() {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
            Our Working Process
          </h2>
        </div>

        {/* large, plain cards with large images */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-2xl border border-transparent min-h-[260px]"
            >
              <Image
                src={step.icon}
                alt={`Step ${index + 1}`}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
