import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Preserve every URL the original wolf-ai.com.au static site served.
  // The legacy pages themselves live untouched in /public (roof.html,
  // roof-estimate-outlook.html, proposals/*). These rewrites recreate the
  // clean URLs and the external /tree pitch exactly as the old vercel.json did.
  async rewrites() {
    return [
      // proposals — clean URLs
      { source: "/tsba", destination: "/proposals/tsba.html" },
      { source: "/tsba-flow", destination: "/proposals/tsba-flow.html" },
      { source: "/tsba-honest", destination: "/proposals/tsba-honest-breakdown.html" },
      { source: "/nu-level-flow", destination: "/proposals/nu-level-quote-flow.html" },
      { source: "/aerowash", destination: "/proposals/aerowash.html" },
      { source: "/clean-under-pressure", destination: "/proposals/clean-under-pressure.html" },
      // roof estimate tool — clean URL (file also served directly at *.html).
      // NOTE: /roof is now a real Next.js route (app/roof), not a static file.
      { source: "/roof-estimate-outlook", destination: "/roof-estimate-outlook.html" },
      // external arbor pitch
      { source: "/tree", destination: "https://wolf-arbor-pitch.vercel.app/tree" },
      { source: "/tree/:path*", destination: "https://wolf-arbor-pitch.vercel.app/tree/:path*" },
    ];
  },
};

export default nextConfig;
