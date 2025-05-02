import { Metadata } from "next";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies | HiqServe - High-Quality IT Services & Solutions",
  description: "Explore HiqServe's case studies showcasing successful IT projects across various industries including financial services, healthcare, retail, manufacturing, and more.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesSection />
      <CTASection />
    </>
  );
}