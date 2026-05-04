import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wolf Partners — AI for QLD Roofers",
  description:
    "Address goes in. Quote comes out. Job gets booked. The AI operating system for residential roofing contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
