import { Metadata } from "next";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | HiqServe - High-Quality IT Services & Solutions",
  description: "Get in touch with HiqServe for high-quality IT services and solutions. Contact us today to discuss your business needs and how we can help you succeed.",
};

export default function ContactPage() {
  return (
    <>
      <ContactFormSection />
    </>
  );
}