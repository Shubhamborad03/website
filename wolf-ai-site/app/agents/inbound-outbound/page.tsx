import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import JourneyStep from "@/components/JourneyStep";
import {
  HeroInboxVisual,
  CatchVisual,
  ReplyDayVisual,
  ReactivateVisual,
  FollowVisual,
  ReferVisual,
  TrackVisual,
} from "@/components/inbound/InboundVisuals";

export const metadata = {
  title: "Inbound and Outbound · Wolf AI",
  description:
    "An AI agent that replies to every lead the same day, warms cold leads, reactivates dormant clients, follows up and asks for referrals, across email, SMS and DM. Owned by you.",
};

export default function InboundPage() {
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
                <span className="label">03 · Inbound and Outbound</span>
              </div>
              <h1 className="mt-5 font-display text-ink text-[clamp(44px,6.4vw,92px)] tracking-[-.025em] leading-[0.96] max-w-[15ch]">
                Every message, <span className="text-blue">answered.</span>
              </h1>
              <p className="mt-6 text-[clamp(17px,1.7vw,20px)] text-ink-2 max-w-[46ch] leading-relaxed">
                The lead that messaged at lunch does not wait until tonight. Every email, text and DM
                gets a same-day reply in your voice. Cold leads warmed, old clients tapped, every
                follow-up sent, every referral asked for.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm" className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-7 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors">
                  Build mine
                </a>
                <a href="#flow" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] text-[15px] font-semibold text-ink hover:border-ink transition-colors">
                  See it reply
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <HeroInboxVisual />
            </div>
          </div>
        </section>

        <div id="flow">
          <JourneyStep n="1" kicker="Catches" title="Every channel, in one place." body="Email, SMS, Instagram, Facebook, WhatsApp, the web form. The agent watches them all so a lead never sits unread in an app you forgot to check.">
            <CatchVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="2" kicker="Replies same day" flip title="The fastest reply usually wins the job." body="Every enquiry gets a real answer the same day, in your voice, while the lead is still warm and still deciding. No more next-morning regrets.">
              <ReplyDayVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="3" kicker="Reactivates" title="Your old customers are your easiest jobs." body="The agent goes back through quotes that never booked and clients you have not heard from in months, and brings them back with a reason to call.">
            <ReactivateVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="4" kicker="Follows up" flip title="It chases, so you never have to." body="Most jobs are won on the second or third touch. The agent runs the follow-up sequence on every lead, politely and on time, until you get a yes or a no.">
              <FollowVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="5" kicker="Asks" title="It turns happy jobs into more jobs." body="After the work is done, the agent asks for the review and the referral, at the right moment, so your reputation and your pipeline both grow on their own.">
            <ReferVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="6" kicker="Tracks" flip title="Nothing slips through the cracks." body="Every conversation, on every channel, tracked from first message to booked. You can see exactly where each lead is, without touching a spreadsheet.">
              <TrackVisual />
            </JourneyStep>
          </div>
        </div>

        <section className="py-28 text-center">
          <div className="wrap">
            <h2 className="font-display text-ink text-[clamp(36px,6vw,82px)] tracking-[-.03em]">
              Always <span className="text-blue">first to reply.</span>
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
