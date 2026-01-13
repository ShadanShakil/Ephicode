"use client";

import Image from "next/image";
import LogoLoop from "./LogoLoop";

const technologies = [
  { src: "/Home/technologies/AndroidLogo.svg", alt: "Android", href: "https://www.android.com" },
  { src: "/Home/technologies/SquarespaceLogotype.svg", alt: "Squarespace", href: "https://www.squarespace.com" },
  { src: "/Home/technologies/ZapierLogo.svg", alt: "Zapier", href: "https://zapier.com" },
  { src: "/Home/technologies/AdsManager.svg", alt: "Ads Manager", href: "https://business.facebook.com/adsmanager" },
  { src: "/Home/technologies/ClickFunnellogo.svg", alt: "ClickFunnels", href: "https://www.clickfunnels.com" },
  { src: "/Home/technologies/PythonLogo.svg", alt: "Python", href: "https://www.python.org" },
  { src: "/Home/technologies/GoogleAnalytics.svg", alt: "Google Analytics", href: "https://marketingplatform.google.com/about/analytics/" },
  { src: "/Home/technologies/Shopify.svg", alt: "Shopify", href: "https://www.shopify.com" },
  { src: "/Home/technologies/Figmalogo.svg", alt: "Figma", href: "https://www.figma.com" },
  { src: "/Home/technologies/Reactlogo.svg", alt: "React", href: "https://react.dev" },                          // [web:228][web:222]
  { src: "/Home/technologies/AWS.svg", alt: "AWS", href: "https://aws.amazon.com" },
  { src: "/Home/technologies/NextJSlogo.svg", alt: "Next.js", href: "https://nextjs.org" },                      // [web:223][web:220]
  { src: "/Home/technologies/WordpressLogotype.svg", alt: "WordPress", href: "https://wordpress.org" },
  { src: "/Home/technologies/WebflowLogotype.svg", alt: "Webflow", href: "https://webflow.com" },
  { src: "/Home/technologies/WixLogotype.svg", alt: "Wix", href: "https://www.wix.com" },
  { src: "/Home/technologies/FramerLogotype.svg", alt: "Framer", href: "https://www.framer.com" },
];

// Map your image-based tech list into the format LogoLoop expects
const logoItems = technologies.map((tech) => ({
  // Use node to render your existing SVGs with next/image
  node: (
    <Image
      src={tech.src}
      alt={tech.alt}
      width={70}
      height={70}
      className="max-h-12 max-w-[96px] object-contain"
    />
  ),
  title: tech.alt,
  href: tech.href,
}));

function Technologies() {
  return (
    <section className="w-full px-4 text-white">
      <h2 className="mb-4 text-center text-xl font-semibold">Technologies</h2>

      <div className="relative h-20 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl backdrop-saturate-150">
        <LogoLoop
          logos={logoItems}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#020617"
          ariaLabel="Technologies we work with"
        />
      </div>
    </section>
  );
}

export default Technologies;
