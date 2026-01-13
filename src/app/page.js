import CtaSection from "@/components/Home/Cta";
import FaqSection from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import PricingSection from "@/components/Home/Pricing";
import Process from "@/components/Home/Process";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialsSection from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ServicesSection/>
      {/* <Process/> */}
      <PricingSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <CtaSection/>
    </div>
  );
}
