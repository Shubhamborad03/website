import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBanner from "@/components/CallBanner";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David May's Carpentry & Handyman | Sunshine Coast",
  description:
    "QBCC Licensed Carpenter serving the Sunshine Coast. Decks, pergolas, renovations, tiling, plastering & handyman services. Nambour, Maroochydore, Buderim, Coolum & all surrounding areas.",
  keywords:
    "carpenter sunshine coast, handyman sunshine coast, deck builder nambour, renovation maroochydore, QBCC licensed carpenter",
  openGraph: {
    title: "David May's Carpentry & Handyman | Sunshine Coast",
    description:
      "QBCC Licensed Carpenter. Decks, renovations, handyman services across the Sunshine Coast.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body">
        <CallBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
