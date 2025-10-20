import Image from "next/image";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="bg-black py-16">
      <div id="p1" className="text-white bg-[#323232] w-fit mx-auto rounded">
        <h2 className="px-6 py-2 bg-gradient-to-b from-white  to-[#323232] bg-clip-text text-transparent">
          UI/UX • Web & Mobile Apps • E-Commerce • SEO
        </h2>
      </div>

      <div id="p1" className="text-white w-1/2 mx-auto">
        <h1 className="text-center px-1 py-10 text-6xl bg-gradient-to-r from-white  to-emerald-300 bg-clip-text text-transparent">
          Your Global Partner for Digital Systems & Solutions
        </h1>
      </div>
      <div className="mx-auto w-fit">
        <Button className=" bg-[#01FFC3] text-black hover:bg-[#01FFC3] hover:shadow-[0_0_20px_#10B981] hover:scale-105 transition-all duration-300">
          Get Started
        </Button>
      </div>
      <div className="mx-auto w-1/2 py-5">
        <p className="text-white text-center">
          Ephicode delivers end-to-end digital solutions web, mobile, AI, and
          enterprise systems powering businesses across the US, Europe, and the
          Middle East.
        </p>
      </div>

      <div className="w-fit mx-auto text-white p-10">
        <div>
          <p className="inline-block p-5">
            <span>
              <Image
                src="/Home/check_circle.svg"
                width={24}
                height={24}
                alt="check icon"
                className="inline-block"
              />
            </span>
             UI/UX Design
          </p>
          
          <p className="inline-block p-5">
            <span>
              <Image
                src="/Home/check_circle.svg"
                width={24}
                height={24}
                alt="check icon"
                className="inline-block"
              />
            </span>
             Web App Development
          </p>

          <p className="inline-block p-5">
            <span>
              <Image
                src="/Home/check_circle.svg"
                width={24}
                height={24}
                alt="check icon"
                className="inline-block"
              />
            </span>
             CMS Development
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;
