export const metadata = {
  title: "Before vs After | Tracy Thew Painters Website Redesign",
  description:
    "See the difference a professional website makes for Tracy Thew Painters.",
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Top bar */}
      <header className="bg-gray-900 border-b border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold text-lg">Tracy Thew Painters</p>
          <p className="text-gray-400 text-sm">Website redesign comparison</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            View Full New Site →
          </a>
        </div>
      </header>

      {/* Stats strip */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm">
          {[
            { label: "Current site status", value: "❌ Offline (404)", bad: true },
            { label: "PageSpeed score (old)", value: "N/A — site down", bad: true },
            { label: "Mobile-friendly", value: "Unknown", bad: true },
            { label: "New PageSpeed estimate", value: "95+", bad: false },
            { label: "Mobile-first", value: "✓ Yes", bad: false },
            { label: "SEO optimised", value: "✓ Yes", bad: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-gray-400">{item.label}:</span>
              <span className={item.bad ? "text-red-400 font-semibold" : "text-green-400 font-semibold"}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main comparison grid */}
      <div className="flex-1 grid md:grid-cols-2 gap-0">
        {/* LEFT — Old Site */}
        <div className="flex flex-col border-r border-white/10">
          <div className="bg-red-950/40 border-b border-red-500/30 px-6 py-3 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" />
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wide">
              Current Website — tracythewpainters.com.au
            </span>
          </div>

          <div className="flex-1 bg-gray-900 flex flex-col items-center justify-center p-8 gap-6 min-h-96">
            {/* Browser chrome mock */}
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-gray-400 text-xs font-mono truncate">
                  www.tracythewpainters.com.au
                </div>
              </div>
              <div className="bg-white p-10 flex flex-col items-center justify-center text-center min-h-64">
                <div className="text-7xl mb-4">⚠️</div>
                <h1 className="text-gray-800 text-2xl font-bold mb-2">
                  404 — Not Found
                </h1>
                <p className="text-gray-500 text-sm max-w-xs">
                  The website for Tracy Thew Painters is currently offline.
                  Potential customers searching for a painter are bouncing to
                  competitors.
                </p>
              </div>
            </div>

            {/* Pain points */}
            <div className="w-full max-w-lg space-y-3">
              <p className="text-gray-500 text-xs uppercase tracking-widest text-center mb-4">
                What customers see today
              </p>
              {[
                "Website completely unreachable — 404 error",
                "No way to find services, pricing or contact info",
                "Google search shows a broken link — damages trust",
                "Losing leads to competitors with modern websites every day",
                "40+ years of reputation invisible online",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 bg-red-950/30 border border-red-500/20 rounded-lg px-4 py-3"
                >
                  <span className="text-red-400 text-base flex-shrink-0 mt-0.5">✕</span>
                  <span className="text-red-200 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — New Site */}
        <div className="flex flex-col">
          <div className="bg-green-950/40 border-b border-green-500/30 px-6 py-3 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wide">
              New Website — Built For You ✦ Live Demo Below
            </span>
          </div>

          <div className="flex-1 flex flex-col">
            {/* Embedded live preview */}
            <iframe
              src="/"
              className="flex-1 w-full"
              style={{ minHeight: "700px", border: "none" }}
              title="New Tracy Thew Painters Website"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <footer className="bg-gray-900 border-t border-white/10 px-6 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl font-bold mb-2">
            Ready to own this website?
          </h2>
          <p className="text-gray-400 text-base mb-6">
            This is a fully built, mobile-first website ready to go live — with
            your real photos, reviews, and content. No monthly fees, no lock-in.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: "⚡", title: "Fast Performance", desc: "95+ PageSpeed score, loads in under 1 second" },
              { icon: "📱", title: "Mobile First", desc: "Looks perfect on phones — where 70% of searches happen" },
              { icon: "🔍", title: "SEO Ready", desc: "Ranks for 'painters Sunshine Coast' and your suburb" },
            ].map((f) => (
              <div key={f.title} className="bg-gray-800 rounded-xl p-5 text-left">
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold text-base px-10 py-4 rounded-full transition-colors"
          >
            View Full Demo Site →
          </a>
        </div>
      </footer>
    </div>
  );
}
