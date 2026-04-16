import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SafetySection from "@/components/SafetySection";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import TermiteSpotlight from "@/components/TermiteSpotlight";
import CommonPests from "@/components/CommonPests";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Noosaville Pest Control | Sunshine Coast's Trusted Pest Experts",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SafetySection />
      <HowItWorks />
      <ServicesSection />
      <TermiteSpotlight />
      <CommonPests />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
