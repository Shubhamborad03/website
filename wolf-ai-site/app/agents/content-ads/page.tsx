import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import JourneyStep from "@/components/JourneyStep";
import {
  HeroMultiplyVisual,
  SourceVisual,
  FormatsVisual,
  StudyVisual,
  ScheduleVisual,
  NumbersVisual,
  ABVisual,
} from "@/components/content/ContentVisuals";

export const metadata = {
  title: "Content and Ads · Wolf AI",
  description:
    "An AI agent that turns one job into a week of content, studies what is working in your market, writes it, schedules it, watches the numbers and A/B tests. Owned by you.",
};

export default function ContentPage() {
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
                <span className="label">04 · Content and Ads</span>
              </div>
              <h1 className="mt-5 font-display text-ink text-[clamp(44px,6.4vw,92px)] tracking-[-.025em] leading-[0.96] max-w-[15ch]">
                One job. <span className="text-blue">A week of content.</span>
              </h1>
              <p className="mt-6 text-[clamp(17px,1.7vw,20px)] text-ink-2 max-w-[46ch] leading-relaxed">
                You finish a roof and snap a few photos. The agent turns that into reels, carousels,
                stories, posts and ad variants, written in your voice, studies what is working in your
                market, schedules it and tests it. You just keep doing the work.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm" className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-7 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors">
                  Build mine
                </a>
                <a href="#flow" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] text-[15px] font-semibold text-ink hover:border-ink transition-colors">
                  See one job multiply
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <HeroMultiplyVisual />
            </div>
          </div>
        </section>

        <div id="flow">
          <JourneyStep n="1" kicker="One job in" title="A few photos off your phone is all it needs." body="Before and after, a drone shot, a clip of the crew. The raw material from a single job is enough for the agent to work with, no studio, no shoot, no agency.">
            <SourceVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="2" kicker="Many pieces out" flip title="It becomes a whole week of content." body="One job turns into reels, carousels, stories, posts, short videos, an email and ad variants. All in your voice, all on brand, in minutes instead of a weekend.">
              <FormatsVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="3" kicker="Studies the market" title="It writes what is actually working right now." body="The agent watches what is landing in your market and your feed, then shapes the content around the formats and hooks people are responding to this week, not last year.">
            <StudyVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="4" kicker="Schedules" flip title="It posts at the right time, without you." body="Everything is queued and auto-published when your audience is actually online. Your feed stays alive every week even in your busiest stretch.">
              <ScheduleVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="5" kicker="Watches the numbers" title="It reads the results so you do not have to." body="Reach, clicks, saves, leads. The agent tracks what each piece does and learns what your audience wants more of, post after post.">
            <NumbersVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="6" kicker="Tests and doubles down" flip title="It runs the ads, finds the winner, scales it." body="Every ad goes out in variants. The agent kills what flops, pours budget into what converts, and keeps improving the numbers while you are on the tools.">
              <ABVisual />
            </JourneyStep>
          </div>
        </div>

        <section className="py-28 text-center">
          <div className="wrap">
            <h2 className="font-display text-ink text-[clamp(36px,6vw,82px)] tracking-[-.03em]">
              Always <span className="text-blue">posting.</span>
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
