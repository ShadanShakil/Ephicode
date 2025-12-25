"use client";

export default function CtaSection() {
  return (
    <section className="w-full px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            relative overflow-hidden
            rounded-[2.5rem] border border-white/50
            bg-white/5
            backdrop-blur-2xl backdrop-saturate-150
            shadow-[0_0_80px_rgba(16,185,129,0.45)]
            px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-20
            flex items-center justify-center
          "
        >
          {/* Liquid gradient glow background inside the card */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/40 blur-3xl" />
            <div className="absolute bottom-[-20%] left-0 h-80 w-80 rounded-full bg-teal-400/35 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-800/30 to-emerald-900/40 opacity-80" />
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                Start Your Journey
              </span>
              <span className="block bg-gradient-to-r from-emerald-200 to-white bg-clip-text text-transparent mt-1">
                with Us Today
              </span>
            </h2>

            <p className="mx-auto max-w-xl text-xs sm:text-sm md:text-base text-emerald-50/80">
              Partner with a team that blends design, development, and strategy
              to create digital experiences your customers will remember.
            </p>

            <div className="flex justify-center">
              <button
                className="
                  inline-flex items-center justify-center
                  h-11 px-8 sm:h-12 sm:px-10
                  rounded-full bg-emerald-400 text-black text-sm sm:text-base font-medium
                  shadow-[0_0_40px_rgba(16,185,129,0.7)]
                  border border-emerald-200/70
                  transition-all duration-200
                  hover:scale-[1.03]
                  hover:shadow-[0_0_55px_rgba(16,185,129,0.85)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/90
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
