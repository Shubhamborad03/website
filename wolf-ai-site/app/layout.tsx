import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wolf AI / Do more with less",
  description:
    "Wolf AI builds custom AI agents that handle leads, calls, follow-ups, content and operations. Built to run 24/7. Owned by you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
