const CONTACT_URL = "https://z8d9iav9qs2.typeform.com/to/zTzcDJPm";

export function Footer() {
  return (
    <footer className="px-6 py-12 max-w-7xl mx-auto">
      <div className="hr mb-8" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3c-3.5 4-6 7.5-6 12 0 3.3 2.7 6 6 6s6-2.7 6-6c0-4.5-2.5-8-6-12z"
              fill="#1F3A2E"
            />
          </svg>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-ink">Wolf AI</div>
            <div className="text-[11px] text-muted">
              Operations for service businesses
            </div>
          </div>
        </div>
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
          Noosa · Queensland · Australia
        </div>
        <a
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-ink hover:text-forest transition-colors font-medium"
        >
          Contact us →
        </a>
      </div>
    </footer>
  );
}
