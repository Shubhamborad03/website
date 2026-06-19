import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import JourneyStep from "@/components/JourneyStep";
import {
  AnswerVisual,
  QualifyVisual,
  BookVisual,
  DepositVisual,
  EscalateVisual,
  SummaryVisual,
  HeroCallVisual,
} from "@/components/voice/VoiceVisuals";

export const metadata = {
  title: "Voice Agents · Wolf AI",
  description: "An AI voice agent that answers and makes calls, qualifies leads, books jobs, takes deposits and escalates the tricky ones. 24/7, in your voice.",
};

export default function VoicePage() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="relative">
        {/* page hero */}
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
                <span className="label">01 · Voice Agents</span>
              </div>
              <h1 className="mt-5 font-display text-ink text-[clamp(44px,6.4vw,92px)] tracking-[-.025em] leading-[0.96] max-w-[15ch]">
                Never miss a <span className="text-blue">call</span> again.
              </h1>
              <p className="mt-6 text-[clamp(17px,1.7vw,20px)] text-ink-2 max-w-[46ch] leading-relaxed">
                Your phone rings at 9pm on a Sunday. The agent picks up, sounds like you,
                qualifies the lead, books the job, takes the deposit, and texts you the summary.
                The hard ones, it hands straight to you.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm" className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-7 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors">
                  Build mine
                </a>
                <a href="#flow" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] text-[15px] font-semibold text-ink hover:border-ink transition-colors">
                  See the call, start to finish
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <HeroCallVisual />
            </div>
          </div>
        </section>

        {/* the journey */}
        <div id="flow">
          <JourneyStep n="1" kicker="Answers" title="It picks up before you would have heard the ring." body="Every inbound call, day or night, answered on the first ring in a voice that sounds like your business. No voicemail, no missed lead, no after-hours gap.">
            <AnswerVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="2" kicker="Qualifies" flip title="It asks the questions you would ask." body="Service, suburb, timeline, budget fit. The agent runs your qualifying script, captures the answers, and decides if this is a job worth your time.">
              <QualifyVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="3" kicker="Books" title="It puts the job straight in your calendar." body="When the lead is good, it offers your real availability, books the visit, and sends the confirmation. The slot is held before the call ends.">
            <BookVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="4" kicker="Takes deposit" flip title="It can take the deposit on the call." body="For jobs that need it, the agent sends a pay link and confirms the hold deposit, so the booking is real and the no-shows stop.">
              <DepositVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="5" kicker="Escalates" title="It knows what it cannot close, and hands it to you." body="Insurance claims, commercial jobs, anything off-script. The agent routes the call and the full transcript to you in one ring, so nothing complex slips.">
            <EscalateVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="6" kicker="Reports" flip title="It tells you what happened. You just read it." body="At close of day, a clean summary: calls handled, jobs booked, deposits taken, what it sent to you. You read it, you do not write it.">
              <SummaryVisual />
            </JourneyStep>
          </div>
        </div>

        {/* CTA */}
        <section className="py-28 text-center">
          <div className="wrap">
            <h2 className="font-display text-ink text-[clamp(36px,6vw,82px)] tracking-[-.03em]">
              Your phone, <span className="text-blue">handled.</span>
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
