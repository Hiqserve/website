import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "HiqServe - High-Quality IT Services & Solutions",
  description: "HiqServe provides high-quality IT services and solutions to businesses of all sizes, including IT consulting, software development, cloud solutions, cybersecurity, and more.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
