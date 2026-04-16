import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBanner from "@/components/CallBanner";

const heading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EZ Shower Repair & Tiling | Brisbane, Gold Coast & Surrounds",
  description:
    "Fix leaking showers without removing tiles. Licensed & insured bathroom specialists serving Gold Coast, Brisbane & Brisbane South. Free quotes — call 0406 671 114.",
  keywords:
    "leaking shower repair brisbane, shower resealing gold coast, bathroom tiling brisbane south, regrouting, leak detection, balcony repair, anti-slip solutions",
  openGraph: {
    title: "EZ Shower Repair & Tiling | Brisbane & Gold Coast",
    description:
      "Permanent solutions to seal leaking showers without removing tiles. Fully licensed & insured. Free quotes available.",
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
      <body className="font-body antialiased">
        <CallBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
