"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-4 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-8xl relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/5 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_0_80px_rgba(0,0,0,0.6)] px-6 py-10 sm:px-10 lg:px-14">
        {/* Liquid glow + logo silhouette background */}
<div className="pointer-events-none absolute inset-0 -z-10">
  {/* brighter, larger emerald glows */}
  <div className="absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-emerald-500/55 blur-3xl" />
  <div className="absolute bottom-[-25%] right-1/3 h-[420px] w-[420px] rounded-full bg-emerald-400/45 blur-3xl" />
  <div className="absolute bottom-[-20%] left-1/3 h-[360px] w-[360px] rounded-full bg-teal-400/40 blur-3xl" />

  {/* logo placeholder – bigger and shifted slightly left */}
  <div className="absolute inset-y-0 right-0 flex items-center justify-center lg:justify-end">
    <div className="relative h-[320px] w-[280px] sm:h-[380px] sm:w-[340px] lg:mr-24 opacity-[0.3]">
      {/* replace with your real logo later */}
      <Image
        src="/Footer/footer-bg1.svg"
        alt="Ephicode background logo"
        fill
        className="object-contain"
      />
    </div>
  </div>
</div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)]">
          {/* Left side: logo + tagline + CTA + socials */}
          <div className="space-y-6">
            {/* Logo row */}
            <div className="flex items-center gap-3">
              {/* logo placeholder */}
              <div className="relative h-10 w-10">
                <Image
                  src="/logo.svg"
                  alt="Ephicode logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-semibold">Ephicode</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                Innovate, Build,
                <br />
                Scale – Your Vision, Our Code
              </h3>
              <p className="max-w-sm text-xs sm:text-sm text-slate-200/80">
                Partner with us to transform your ideas into scalable digital
                products and experiences.
              </p>
            </div>

            <button
              className="
                inline-flex items-center justify-center
                rounded-xl bg-emerald-400 text-black text-sm font-medium
                px-6 py-2.5
                shadow-[0_0_30px_rgba(16,185,129,0.7)]
                border border-emerald-200/70
                transition-all duration-200
                hover:scale-[1.03]
                hover:shadow-[0_0_45px_rgba(16,185,129,0.85)]
              "
            >
              Contact Us
            </button>

            <p className="text-xs text-slate-300/80">
              Copyright © Ephicode. All rights reserved.
            </p>

            {/* Social icons row – placeholders for now */}
            <div className="flex gap-4 pt-2">
              {["whatsapp", "instagram", "linkedin", "twitter"].map((name) => (
                <button
                  key={name}
                  className="
                    rounded-xl border border-white/50 shadow-[0_0_20px_rgba(0,0,0,0.6)]"
                  aria-label={name}
                >
                  <Image
                    src={`/Footer/${name}.svg`}
                    alt={name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side: top nav + columns, vertically centered */}
          <div className="flex items-center">
            <div className="w-full space-y-4">
              {/* Top nav links, now close to main columns */}
              <div className="flex justify-end gap-4 text-xs sm:gap-6 sm:text-sm text-slate-100/80">
                <button className="hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-emerald-300 transition-colors">
                  Terms of Service
                </button>
              </div>

              {/* Main link columns */}
              <div className="grid gap-8 sm:grid-cols-3 text-sm">
                <FooterColumn
                  title="Home"
                  links={[
                    "Services",
                    "Vision & Mission",
                    "Case Studies",
                    "Testimonials",
                    "Contact",
                  ]}
                />
                <FooterColumn
                  title="About Us"
                  links={[
                    "Vision & Mission",
                    "Our Process",
                    "Careers",
                    "Blog",
                    "Partners",
                  ]}
                />
                <FooterColumn
                  title="Services"
                  links={[
                    "UI/UX Design",
                    "Web Development",
                    "Mobile Apps",
                    "E‑Commerce",
                    "SEO & Growth",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-3 text-base font-semibold">{title}</h4>
      <ul className="space-y-2 text-xs sm:text-sm text-slate-200/80">
        {links.map((link) => (
          <li key={link}>
            <button className="hover:text-emerald-300 transition-colors">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
