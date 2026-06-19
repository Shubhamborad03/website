import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/roof/Hero";
import SatelliteQuoteDemo from "@/components/roof/SatelliteQuoteDemo";
import ConversationDemo from "@/components/roof/ConversationDemo";
import LeadsPipeline from "@/components/roof/LeadsPipeline";
import SocialAgentDemo from "@/components/roof/SocialAgentDemo";
import ContentEngineDemo from "@/components/roof/ContentEngineDemo";
import Numbers from "@/components/roof/Numbers";
import CTA from "@/components/roof/CTA";

export const metadata = {
  title: "AI for Roofers · Wolf AI",
  description:
    "Address goes in. Quote comes out. Job gets booked. The AI operating system for residential roofing contractors.",
};

export default function RoofPage() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="relative">
        <Hero />
        <SatelliteQuoteDemo />
        <ConversationDemo />
        <LeadsPipeline />
        <SocialAgentDemo />
        <ContentEngineDemo />
        <Numbers />
        <CTA />
      </main>
    </SmoothScroll>
  );
}
