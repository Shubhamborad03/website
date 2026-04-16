import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bitumen Co | Asphalt & Bitumen Driveways Brisbane, Gold Coast & Sunshine Coast",
  description:
    "Brisbane's trusted asphalt & bitumen contractor. Domestic driveways, commercial paving, car parks & civil construction. Serving Gold Coast to Sunshine Coast. Call 0421 333 728.",
  keywords: [
    "bitumen driveways brisbane",
    "asphalt driveways gold coast",
    "bitumen contractor sunshine coast",
    "asphalt paving brisbane",
    "car park line marking",
    "driveway resurfacing",
    "pothole repairs brisbane",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body bg-asphalt-950 text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
