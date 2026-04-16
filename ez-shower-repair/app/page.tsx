import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import GalleryPreview from "@/components/GalleryPreview";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutPreview from "@/components/AboutPreview";
import FAQSection from "@/components/FAQSection";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <GalleryPreview />
      <ServicesSection />
      <TestimonialsSection />
      <AboutPreview />
      <FAQSection />
      <ServiceAreas />
      <CTASection />
    </main>
  );
}
