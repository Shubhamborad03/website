import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SatelliteQuoteDemo from "@/components/SatelliteQuoteDemo";
import ConversationDemo from "@/components/ConversationDemo";
import LeadsPipeline from "@/components/LeadsPipeline";
import SocialAgentDemo from "@/components/SocialAgentDemo";
import ContentEngineDemo from "@/components/ContentEngineDemo";
import Numbers from "@/components/Numbers";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        <Nav />
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
