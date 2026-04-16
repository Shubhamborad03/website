import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tracy Thew Painters | Sunshine Coast House Painters Since 1982",
  description:
    "Family-run painting contractors serving the Sunshine Coast for 40+ years. Interior & exterior painting, new homes, renovations, and commercial. Free quotes. Call 07 5448 1697.",
  keywords:
    "painters sunshine coast, house painters noosa, painting contractors peregian beach, interior exterior painting, tracy thew painters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
