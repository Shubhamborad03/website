import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import JourneyStep from "@/components/JourneyStep";
import {
  HeroDashVisual,
  ReplaceVisual,
  WorkflowVisual,
  QuotingVisual,
  SchedulingVisual,
  InvoicingVisual,
  DashVisual,
} from "@/components/opsoftware/OpsVisuals";

export const metadata = {
  title: "Operating Software · Wolf AI",
  description:
    "Custom software built around how your business actually runs: CRM, dashboards, quoting, scheduling, invoicing and reporting, in one place. Owned by you.",
};

export default function OperatingSoftwarePage() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="relative">
        <section className="relative pt-28 pb-16 min-h-[88vh] flex items-center overflow-hidden">
          <div
            className="pointer-events-none absolute -top-32 right-[-8%] w-[820px] h-[680px] -z-0"
            style={{ background: "radial-gradient(ellipse 50% 55% at center, rgba(59,134,255,.12), transparent 62%)" }}
          />
          <div className="wrap relative z-10 grid lg:grid-cols-[1fr_1.08fr] gap-12 items-center">
            <div>
              <a href="/" className="label hover:text-ink transition-colors">&larr; All agents</a>
              <div className="mt-7 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue pulse-live" />
                <span className="label">05 · Operating Software</span>
              </div>
              <h1 className="mt-5 font-display text-ink text-[clamp(44px,6.4vw,92px)] tracking-[-.025em] leading-[0.96] max-w-[15ch]">
                Your whole business, <span className="text-blue">on one screen.</span>
              </h1>
              <p className="mt-6 text-[clamp(17px,1.7vw,20px)] text-ink-2 max-w-[46ch] leading-relaxed">
                Stop stitching together a CRM, a spreadsheet, a quoting tool and three apps that do
                not talk. We build one piece of software around how your business actually runs, with
                quoting, scheduling, invoicing and a dashboard that shows you everything at a glance.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://z8d9iav9qs2.typeform.com/to/zTzcDJPm" className="inline-flex items-center gap-2 rounded-full bg-btn text-white px-7 py-[15px] text-[15px] font-semibold hover:bg-btn-hover transition-colors">
                  Build mine
                </a>
                <a href="#flow" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-[15px] text-[15px] font-semibold text-ink hover:border-ink transition-colors">
                  See the dashboard
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <HeroDashVisual />
            </div>
          </div>
        </section>

        <div id="flow">
          <JourneyStep n="1" kicker="Replaces the pile" title="One system instead of seven tabs." body="The CRM, the spreadsheet, the quoting tool, the calendar, the invoicing app. We fold what you actually use into a single place, so nothing lives in five disconnected logins.">
            <ReplaceVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="2" kicker="Built to fit" flip title="Shaped around how you run, not a template." body="Your job stages, your terms, your pricing, your crew. The software is built to match your real process, instead of forcing you to bend to someone else's SaaS.">
              <WorkflowVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="3" kicker="Quotes" title="Quoting that knows your prices." body="Pick the line items, the software prices them from your rates and produces a clean quote in your format, ready to send in under a minute.">
            <QuotingVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="4" kicker="Schedules" flip title="The crew, the jobs, the week, in order." body="Every booked job lands on the schedule with the address and details, so the team always knows where they are meant to be next.">
              <SchedulingVisual />
            </JourneyStep>
          </div>

          <JourneyStep n="5" kicker="Invoices" title="It bills the job and chases the payment." body="When a job is marked done, the invoice goes out automatically and follows up until it is paid. No more invoicing at 9pm on a Sunday.">
            <InvoicingVisual />
          </JourneyStep>

          <div>
            <JourneyStep n="6" kicker="Reports" flip title="One dashboard for how it is all going." body="Jobs booked, revenue, average job size, win rate. The numbers you actually care about, in one place, updated as the day happens.">
              <DashVisual />
            </JourneyStep>
          </div>
        </div>

        <section className="py-28 text-center">
          <div className="wrap">
            <h2 className="font-display text-ink text-[clamp(36px,6vw,82px)] tracking-[-.03em]">
              Software that <span className="text-blue">fits you.</span>
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
