/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This Next.js app is served from wolf-ai.com.au/tree via Vercel rewrites
  // from the existing landing-page repo. basePath ensures all routes and
  // _next/static asset URLs are prefixed with /tree so the rewrite catches them.
  basePath: "/tree",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
