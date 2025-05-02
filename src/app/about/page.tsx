import { Metadata } from "next";
import AboutMissionSection from "@/components/sections/AboutMissionSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | HiqServe - High-Quality IT Services & Solutions",
  description: "Learn about HiqServe's mission, values, and the experienced team behind our high-quality IT services and solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutMissionSection />
      <TeamSection />
      <CTASection />
    </>
  );
}