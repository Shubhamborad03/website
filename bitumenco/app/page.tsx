import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import GalleryPreview from "@/components/GalleryPreview";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutPreview from "@/components/AboutPreview";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <GalleryPreview />
      <PricingSection />
      <TestimonialsSection />
      <AboutPreview />
      <ServiceAreas />
      <CTASection />
    </main>
  );
}
