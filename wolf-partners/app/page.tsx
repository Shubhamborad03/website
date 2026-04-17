import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center gap-12 px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Wolf Partners
        </h1>
        <p className="text-zinc-400 text-lg">Choose a design direction</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/option-a"
          className="group border border-zinc-800 rounded-2xl p-8 w-64 hover:border-zinc-600 transition-all duration-300"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
            Option A
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Numbered sections, Geist font, ghost button CTAs, institutional feel
          </p>
        </Link>

        <Link
          href="/option-b"
          className="group border border-zinc-800 rounded-2xl p-8 w-64 hover:border-zinc-600 transition-all duration-300"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
            Option B
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Space Grotesk, editorial layout, bottom-aligned hero, ultra minimal
          </p>
        </Link>

        <Link
          href="/option-c"
          className="group border border-zinc-800 rounded-2xl p-8 w-64 hover:border-zinc-600 transition-all duration-300"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
            Option C
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Linear/Vercel design feel, subtle glow, card-based, tech product
            aesthetic
          </p>
        </Link>
      </div>
    </div>
  );
}
