"use client";

import Image from "next/image";

const technologies = [
  { src: "/Home/technologies/AndroidLogo.svg", alt: "Android" },
  { src: "/Home/technologies/SquarespaceLogotype.svg", alt: "Squarespace" },
  { src: "/Home/technologies/ZapierLogo.svg", alt: "Zapier" },
  { src: "/Home/technologies/AdsManager.svg", alt: "Ads Manager" },
  { src: "/Home/technologies/ClickFunnellogo.svg", alt: "ClickFunnels" },
  { src: "/Home/technologies/PythonLogo.svg", alt: "Python" },
  { src: "/Home/technologies/GoogleAnalytics.svg", alt: "Google Analytics" },
  { src: "/Home/technologies/Shopify.svg", alt: "Shopify" },
  { src: "/Home/technologies/Figmalogo.svg", alt: "Figma" },
  { src: "/Home/technologies/Reactlogo.svg", alt: "React" },
  { src: "/Home/technologies/AWS.svg", alt: "AWS" },
  { src: "/Home/technologies/NextJSlogo.svg", alt: "Next.js" },
  { src: "/Home/technologies/WordpressLogotype.svg", alt: "WordPress" },
  { src: "/Home/technologies/WebflowLogotype.svg", alt: "Webflow" },
  { src: "/Home/technologies/WixLogotype.svg", alt: "Wix" },
  { src: "/Home/technologies/FramerLogotype.svg", alt: "Framer" },
];

function Technologies() {
  const items = [...technologies, ...technologies];

  return (
    <div className="tech-wrapper">
      <h1 className="tech-heading">Technologies</h1>

      <div className="tech-marquee">
        <div className="tech-track">
          {items.map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="logo-box">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={70}
                  height={70}
                  className="logo-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-wrapper {
          background: #000;
          padding: 2rem 0;
        }

        .tech-heading {
          color: #fff;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .tech-marquee {
          overflow: hidden;
        }

        .tech-track {
          display: flex;
          width: max-content;
          animation: tech-marquee 25s linear infinite;
        }

        .tech-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 2rem;
        }

        /* Every logo gets EXACT same visual box */
        .logo-box {
          width: 96px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        @keyframes tech-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default Technologies;
