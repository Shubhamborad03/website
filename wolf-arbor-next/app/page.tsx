import { Backdrop } from "@/components/backdrop";
import { NavPill } from "@/components/nav-pill";
import { Hero } from "@/components/hero";
import { Leaks } from "@/components/leaks";
import { System } from "@/components/system";
import { Levers } from "@/components/levers";
import { RevenueChart } from "@/components/revenue-chart";
import { Timeline } from "@/components/timeline";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Backdrop />
      <NavPill />
      <Hero />
      <Leaks />
      <System />
      <Levers />
      <RevenueChart />
      <Timeline />
      <CtaSection />
      <Footer />
    </main>
  );
}
