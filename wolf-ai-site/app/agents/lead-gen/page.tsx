import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import JourneyStep from "@/components/JourneyStep";
import {
  HeroScanVisual,
  FindVisual,
  MatchVisual,
  DraftVisual,
  SendVisual,
  ReplyVisual,
  BookedVisual,
} from "@/components/leadgen/LeadGenVisuals";

export const metadata = {
  title: "Lead Generation · Wolf AI",
  description:
    "An AI agent that finds buyers from public data, social, satellite and intent signals, drafts outreach in your voice, and fills your pipeline. Owned by you.",
};

export default function LeadGenPage() {
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
                <span className="label">02 · Lead Generation</span>
              </div>
              <h1 className="mt-5 font-display text-ink text-[clamp(44px,6.4vw,92px)] tracking-[-.025em] leading-[0.96] max-w-[15ch]">
                Your next job is <span className="text-blue">already out there.</span>
              </h1>
              <p className="mt-6 text-[clamp(17px,1.7vw,20px)] text-ink-2 max-w-[46ch] leading-relaxed">
                Someone in your area is asking for exactly what you do, right now. The agent finds them
                across public data, social, satellite and intent signals, then writes the first message
                in your voice and waits for the yes.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm" className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-7 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors">
                  Build mine
                </a>
                <a href="#flow" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] text-[15px] font-semibold text-ink hover:border-ink transition-colors">
                  See it find a buyer
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <HeroScanVisual />
            </div>
          </div>
        </section>

        <div id="flow">
          <JourneyStep n="1" kicker="Finds" title="It looks where your competitors do not." body="Public records, social conversations, satellite imagery, government tenders, review sites and live intent signals. The agent watches all of them at once, all the time.">
            <FindVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="2" kicker="Matches" flip title="It only surfaces the ones worth your time." body="Every signal is scored against the work you actually want, location, job type, budget fit, so you get a short list of real buyers, not a scraped spreadsheet.">
              <MatchVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="3" kicker="Drafts" title="It writes the first message the way you would." body="No copy-paste template. The agent drafts outreach in your voice, referencing what it found, so it reads like you sat down and wrote it yourself.">
            <DraftVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="4" kicker="Sends" flip title="It reaches them where they actually reply." body="Email, SMS, DM, whatever fits the prospect. Sent at the right time, tracked, with nothing falling through the cracks.">
              <SendVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="5" kicker="Handles replies" title="It keeps the conversation going until there is a yes." body="Answers the first questions, handles the back and forth, and pushes gently toward a booked visit, then hands you a warm lead ready to close.">
            <ReplyVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="6" kicker="Fills the pipeline" flip title="You wake up to a calendar that fills itself." body="Every prospect tracked from first signal to booked. The pipeline grows overnight, with no chasing required from you.">
              <BookedVisual />
            </JourneyStep>
          </div>
        </div>

        <section className="py-28 text-center">
          <div className="wrap">
            <h2 className="font-display text-ink text-[clamp(36px,6vw,82px)] tracking-[-.03em]">
              Pipeline that <span className="text-blue">fills itself.</span>
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
