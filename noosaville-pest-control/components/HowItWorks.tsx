export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Book",
      desc: "Call us or fill out the form. Tell us what you're seeing and where. We'll schedule you in — usually within the week.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      num: "2",
      title: "We Treat",
      desc: "Our licensed technician arrives on time, inspects the problem areas, and applies a targeted treatment using professional-grade products.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "3",
      title: "Pests Gone",
      desc: "Your home is pest-free. We'll advise on prevention and recommend when to rebook (typically 12 months) to stay protected.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-heading">Simple as 1-2-3</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            No complicated process. No drawn-out appointments. Just fast,
            effective pest control that gets the job done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-brand-200" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-5 relative z-10 shadow-lg shadow-brand-600/20">
                {step.icon}
              </div>
              <div className="inline-flex items-center gap-1.5 bg-warm-100 text-warm-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                Step {step.num}
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
