import Image from "next/image";
import { Button } from "../ui/button";
import Technologies from "./Technologies";

function Hero() {
  return (
    <div className="bg-black py-12 px-4">
      {/* Top pill */}
      <div
        id="p1"
        className="text-white bg-[#323232] w-fit max-w-full mx-auto rounded px-3"
      >
        <h2 className="px-4 py-2 text-xs sm:text-sm md:text-base bg-gradient-to-b from-white to-[#323232] bg-clip-text text-transparent text-center">
          UI/UX • Web & Mobile Apps • E-Commerce • SEO
        </h2>
      </div>

      {/* Heading */}
      <div id="p1" className="text-white w-full max-w-3xl mx-auto mt-6">
        <h1 className="text-center px-1 py-6 text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-snug bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
          Your Global Partner for Digital Systems &amp; Solutions
        </h1>
      </div>

      {/* CTA button */}
      <div className="mx-auto w-fit mt-2">
        <Button className="bg-[#01FFC3] text-black hover:bg-[#01FFC3] hover:shadow-[0_0_20px_#10B981] hover:scale-105 transition-all duration-300">
          Get Started
        </Button>
      </div>

      {/* Description */}
      <div className="mx-auto w-full max-w-2xl py-5">
        <p className="text-white text-center text-sm sm:text-base leading-relaxed px-1">
          Ephicode delivers end-to-end digital solutions web, mobile, AI, and
          enterprise systems powering businesses across the US, Europe, and the
          Middle East.
        </p>
      </div>

      {/* Services pills */}
      <div className="w-full max-w-3xl mx-auto text-white px-2 py-5 my-10 pt-4">
        <div className="flex flex-wrap justify-center gap-4">
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-[#181818] rounded-full text-sm">
            <Image
              src="/Home/check_circle.svg"
              width={24}
              height={24}
              alt="check icon"
            />
            <span>UI/UX Design</span>
          </p>

          <p className="inline-flex items-center gap-2 px-4 py-2 bg-[#181818] rounded-full text-sm">
            <Image
              src="/Home/check_circle.svg"
              width={24}
              height={24}
              alt="check icon"
            />
            <span>Web App Development</span>
          </p>

          <p className="inline-flex items-center gap-2 px-4 py-2 bg-[#181818] rounded-full text-sm">
            <Image
              src="/Home/check_circle.svg"
              width={24}
              height={24}
              alt="check icon"
            />
            <span>CMS Development</span>
          </p>
        </div>
      </div>
      <Technologies/>
    </div>
  );
}

export default Hero;
