import Image from "next/image";

const CONTACT_URL = "https://z8d9iav9qs2.typeform.com/to/zTzcDJPm";

export function Footer() {
  return (
    <footer className="px-6 py-12 max-w-7xl mx-auto">
      <div className="hr mb-8" />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <a
          href="https://wolf-ai.com.au"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/tree/logo.png"
            alt="Wolf AI logo"
            width={28}
            height={28}
            className="w-6 h-6 rounded-md object-contain"
          />
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-ink">
              Wolf<span className="text-amber">AI</span>
            </div>
            <div className="text-[11px] text-muted">
              Operations for service businesses
            </div>
          </div>
        </a>
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
