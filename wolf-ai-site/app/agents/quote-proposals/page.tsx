import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import JourneyStep from "@/components/JourneyStep";
import {
  HeroProposalVisual,
  EnquiryVisual,
  ExtractVisual,
  PriceVisual,
  VoiceVisual,
  ReviewVisual,
  SpeedVisual,
} from "@/components/quote/QuoteVisuals";

export const metadata = {
  title: "Quote and Proposals · Wolf AI",
  description:
    "An AI agent that turns an enquiry into a finished quote or proposal in your format and your voice, ready for your review. Same day, every time. Owned by you.",
};

export default function QuotePage() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="relative">
        <section className="relative pt-28 pb-16 min-h-[88vh] flex items-center overflow-hidden">
          <div
            className="pointer-events-none absolute -top-32 right-[-8%] w-[820px] h-[680px] -z-0"
            style={{ background: "radial-gradient(ellipse 50% 55% at center, rgba(59,134,255,.12), transparent 62%)" }}
          />
          <div className="wrap relative z-10 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
            <div>
              <a href="/" className="label hover:text-ink transition-colors">&larr; All agents</a>
              <div className="mt-7 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue pulse-live" />
                <span className="label">06 · Quote and Proposals</span>
              </div>
              <h1 className="mt-5 font-display text-ink text-[clamp(44px,6.4vw,92px)] tracking-[-.025em] leading-[0.96] max-w-[15ch]">
                Quote sent <span className="text-blue">before lunch.</span>
              </h1>
              <p className="mt-6 text-[clamp(17px,1.7vw,20px)] text-ink-2 max-w-[46ch] leading-relaxed">
                An enquiry lands. The agent reads it, pulls the details, prices it from your rates and
                drafts the quote in your format and your voice. It sits ready for your one-tap review,
                then goes out the same day, while your competitors are still meaning to get to it.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm" className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-7 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors">
                  Build mine
                </a>
                <a href="#flow" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] text-[15px] font-semibold text-ink hover:border-ink transition-colors">
                  See a quote built
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <HeroProposalVisual />
            </div>
          </div>
        </section>

        <div id="flow">
          <JourneyStep n="1" kicker="Reads the enquiry" title="It understands what they actually asked for." body="A message off the website, an email, a voicemail transcript. The agent reads it like you would and works out what the job really is.">
            <EnquiryVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="2" kicker="Pulls the detail" flip title="It extracts the facts that drive the price." body="Service, area, what needs removing, the suburb, the access. The details that decide the number are captured cleanly, so nothing gets missed or guessed.">
              <ExtractVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="3" kicker="Prices it" title="It uses your rates, not a guess." body="The agent knows what you charge, so it prices the line items from your real numbers and builds an accurate total you can stand behind.">
            <PriceVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="4" kicker="Writes it" flip title="In your format, in your voice." body="Your letterhead, your wording, your terms. The proposal reads like you wrote it on a good day, not like a generic template spat out by a tool.">
              <VoiceVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="5" kicker="Waits for you" title="Nothing sends without your nod." body="The finished quote sits ready for a one-tap review. Approve and it goes, or tweak a line first. You stay in control, you just skip the typing.">
            <ReviewVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="6" kicker="Same day" flip title="The fast quote usually wins the job." body="Minutes from enquiry to a quote ready to send, every time. While the lead is still warm and still deciding, yours is the one already in their inbox.">
              <SpeedVisual />
            </JourneyStep>
          </div>
        </div>

        <section className="py-28 text-center">
          <div className="wrap">
            <h2 className="font-display text-ink text-[clamp(36px,6vw,82px)] tracking-[-.03em]">
              Always <span className="text-blue">first to quote.</span>
            </h2>
            <p className="mt-5 text-ink-2 text-[18px]">Built from scratch for your business. Owned by you.</p>
            <a href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm" className="mt-8 inline-flex items-center gap-2 rounded-full bg-btn text-white px-8 py-[16px] text-[15px] font-semibold hover:bg-btn-hover transition-colors">
              Contact us
            </a>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
