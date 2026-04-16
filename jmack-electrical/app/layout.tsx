import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

export const metadata: Metadata = {
  title: {
    template: "%s | J Mack Electrical Services",
    default: "J Mack Electrical Services | Gympie's Trusted Electrician",
  },
  description:
    "J Mack Electrical — locally owned and operated in Gympie since 2015. Residential, commercial, industrial and rural electrical services. 4.8★ Google rated. Call 0432 057 619.",
  keywords: [
    "electrician gympie",
    "electrical services gympie",
    "smoke alarm compliance qld",
    "switchboard upgrade gympie",
    "residential electrician",
    "commercial electrician",
    "underground power gympie",
    "jmack electrical",
  ],
  openGraph: {
    title: "J Mack Electrical Services | Gympie's Trusted Electrician",
    description: "Locally owned electrician serving Gympie & surrounds since 2015. Residential, commercial, industrial & rural.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
