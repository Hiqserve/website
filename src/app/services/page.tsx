import { Metadata } from "next";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | HiqServe - High-Quality IT Services & Solutions",
  description: "Explore HiqServe's comprehensive range of IT services including IT consulting, software development, cloud solutions, cybersecurity, data analytics, and managed IT services.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesOverviewSection />
      <CTASection />
    </>
  );
}