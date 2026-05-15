import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

export const metadata: Metadata = {
  title: "Wolf AI — Software that wins more tree jobs",
  description:
    "An SMS quote engine, vision-AI assessment, and ten automations built for Australian arborists. Live in days.",
  icons: {
    icon: "/tree/logo.png",
    apple: "/tree/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink font-sans grain">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
