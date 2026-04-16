import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

export const metadata: Metadata = {
  title: {
    template: "%s | Noosaville Pest Control",
    default: "Noosaville Pest Control | Sunshine Coast's Trusted Pest Experts",
  },
  description:
    "Noosaville Pest Control — licensed pest control and termite specialists serving the Sunshine Coast. General pest treatments, termite inspections & barriers. Call 0408 001 239.",
  keywords: [
    "pest control noosaville",
    "pest control sunshine coast",
    "termite inspection noosaville",
    "termite barrier sunshine coast",
    "cockroach control noosa",
    "ant control sunshine coast",
    "spider control noosaville",
    "rat control noosa",
    "termite treatment noosaville",
    "licensed pest control qld",
  ],
  openGraph: {
    title: "Noosaville Pest Control | Sunshine Coast's Trusted Pest Experts",
    description: "Licensed pest control & termite specialists serving Noosaville and the Sunshine Coast. General pest treatments, termite inspections & Termidor barriers.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  );
}
