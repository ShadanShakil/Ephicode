"use client";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    badge: "Starter",
    iconPath: "/Home/pricing/1.svg",      // ⬅ your custom icon
    price: "$",
    period: "/Month",
    description:
      "Small businesses or startups looking to establish a strong online presence with a professional, user‑friendly website.",
    features: [
      "Premium UI/UX design",
      "Dedicated project manager and priority support",
      "Advanced SEO & performance optimization",
      "On‑page SEO & performance optimization",
      "Cross‑platform optimization (web + mobile)",
    ],
  },
  {
    id: "professional",
    name: "Professional Plan",
    badge: "Professional",
    iconPath: "/Home/pricing/2.svg",
    price: "$",
    period: "/Month",
    description:
      "For brands that need essential web features to engage their audience, boost brand visibility, and drive growth.",
    features: [
      "Early access to sales and limited edition items",
      "Worldwide reach and scalable infrastructure",
      "Standard performance optimization",
      "Conversion‑focused landing pages",
      "Faster delivery timelines",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    badge: "Enterprise",
    iconPath: "/Home/pricing/3.svg",
    price: "$",
    period: "/Month",
    description:
      "Enterprise‑level solution for companies needing fully tailored experiences, integrations, and long‑term partnerships.",
    features: [
      "Custom integrations & automation",
      "Dedicated success team",
      "High‑availability architecture",
      "Advanced analytics & reporting",
      "Priority roadmap collaboration",
    ],
  },
];

function PlanCard({ plan, layout = "vertical" }) {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`
        rounded-3xl border border-white/50 bg-white/8
        backdrop-blur-xl backdrop-saturate-150
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
        transition-transform transition-shadow duration-300
        hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(16,185,129,0.55)]
        ${isHorizontal ? "p-6 md:p-8 lg:p-10" : "p-6 md:p-8"}
      `}
    >
      <div
        className={`
          flex h-full gap-6
          ${isHorizontal ? "flex-col md:flex-row" : "flex-col"}
        `}
      >
        {/* Left column: badge, title, description, price, button */}
        <div
          className={`
            flex flex-col gap-4
            ${isHorizontal ? "md:w-1/2" : ""}
          `}
        >
{/* Icon + badge */}
<div className="inline-flex items-center gap-2 text-emerald-300">
  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 border border-white/20">
    <img
      src={plan.iconPath}
      alt={`${plan.name} icon`}
      className="h-6 w-6 object-contain"
    />
  </div>
  <span className="text-xs font-medium uppercase tracking-wide text-emerald-200/90">
    {plan.badge}
  </span>
</div>

          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {plan.name}
          </h3>
          <p className="text-xs md:text-sm text-slate-100/80">
            {plan.description}
          </p>

          <div className="mt-2 flex items-baseline gap-1 text-white">
            <span className="text-3xl md:text-4xl font-semibold">
              {plan.price}
            </span>
            <span className="text-sm md:text-base text-slate-100/80">
              {plan.period}
            </span>
          </div>

          <button
            className="
              mt-4 inline-flex h-11 w-full items-center justify-center
              rounded-xl bg-emerald-400 text-black text-sm font-medium
              shadow-[0_0_25px_rgba(16,185,129,0.6)]
              transition-transform transition-shadow duration-200
              hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80
            "
          >
            Get Started
          </button>
        </div>

        {/* Divider for horizontal layout */}
        {isHorizontal && (
          <div className="hidden md:block w-px bg-white/10" aria-hidden="true" />
        )}

        {/* Right column: features */}
        <div
          className={`
            mt-4 md:mt-0 flex flex-col justify-center
            ${isHorizontal ? "md:w-1/2" : ""}
          `}
        >
          <ul className="space-y-2 text-xs md:text-sm text-slate-100/85">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                  <img src="/Home/pricing/tick.svg" alt="" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="w-full px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
            Flexible Pricing Plans,
            <br className="hidden sm:block" /> Tailored to You
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-200/80">
            Choose from our competitive pricing plans designed to fit your
            business needs.
          </p>
        </div>

        {/* Top row: Starter + Professional */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <PlanCard plan={plans[0]} />
          <PlanCard plan={plans[1]} />
        </div>

        {/* Bottom row: Enterprise full width, horizontal layout on md+ */}
        <PlanCard plan={plans[2]} layout="horizontal" />
      </div>
    </section>
  );
}
