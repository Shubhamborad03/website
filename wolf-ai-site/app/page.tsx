import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AutomationsTeaser from "@/components/AutomationsTeaser";
import WebDesignShowcase from "@/components/WebDesignShowcase";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="relative">
        <Hero />
        <AutomationsTeaser />
        <WebDesignShowcase />

        {/* closing CTA */}
        <section className="py-32 text-center">
          <div className="wrap">
            <span className="label block mb-6">Wolf AI · Noosa</span>
            <h2 className="font-display text-ink text-[clamp(40px,7vw,104px)] tracking-[-.03em] leading-[0.95]">
              Do more <span className="text-blue">with less.</span>
            </h2>
            <p className="mt-6 text-ink-2 text-[18px] max-w-[44ch] mx-auto">
              Custom AI agents and websites, built from scratch for your business. Owned by you.
            </p>
            <a
              href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-btn text-white px-8 py-[16px] text-[15px] font-semibold hover:bg-btn-hover transition-colors"
            >
              Contact us
            </a>
          </div>
        </section>

        {/* footer */}
        <footer className="py-12">
          <div className="wrap flex flex-wrap items-center justify-between gap-4 text-[13px] text-ink-3">
            <span className="font-display text-[17px] text-ink">Wolf<span className="text-blue">AI</span></span>
            <span className="font-mono text-[12px]">Custom AI agents and web design · Built to run 24/7 · Owned by you</span>
            <span className="font-mono text-[12px]">© 2026 Wolf AI</span>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
