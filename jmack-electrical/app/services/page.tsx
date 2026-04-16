import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Services",
  description: "Residential, commercial, industrial and rural electrical services in Gympie & surrounds. Smoke alarms, switchboards, underground power, lighting and more.",
};

const services = [
  {
    id: "residential",
    icon: "🏠",
    title: "Residential Electrical",
    tagline: "Your home, powered right.",
    desc: "From new builds to established homes, we handle all your residential electrical needs with care and precision. We treat your home the way we'd treat our own.",
    items: [
      "Power point installation & repairs",
      "Ceiling fan installation",
      "LED downlight upgrades",
      "Pendant & feature lighting",
      "Safety switch installation",
      "Oven & cooktop connections",
      "Hot water system wiring",
      "Outdoor & garden lighting",
      "Home renovation electrical",
      "Fault finding & repairs",
    ],
  },
  {
    id: "commercial",
    icon: "🏢",
    title: "Commercial Electrical",
    tagline: "Keeping your business running.",
    desc: "We understand that downtime costs money. Our commercial team works efficiently and around your schedule to minimise disruption to your business.",
    items: [
      "Retail & office fit-outs",
      "Electrical maintenance contracts",
      "Emergency lighting",
      "Exit sign installation",
      "Switchboard upgrades",
      "Energy-efficient LED upgrades",
      "Security & sensor lighting",
      "Air conditioning wiring",
      "Three-phase power",
      "Compliance testing & tagging",
    ],
  },
  {
    id: "industrial",
    icon: "🏭",
    title: "Industrial Electrical",
    tagline: "Heavy duty expertise.",
    desc: "Industrial environments demand precision, safety and expertise. Our licensed team is experienced in high-demand industrial electrical work.",
    items: [
      "Three-phase motor connections",
      "Control panel wiring",
      "Machinery installation",
      "Industrial lighting",
      "Power distribution boards",
      "Earthing & bonding",
      "Preventive maintenance",
      "Fault diagnosis & repair",
    ],
  },
  {
    id: "rural",
    icon: "🌾",
    title: "Rural & Agricultural",
    tagline: "Out where it counts.",
    desc: "We cover Gympie and all surrounding areas including rural properties. Whether it's a new shed, pump connection or full property power setup — we go where others won't.",
    items: [
      "Underground power — house to shed",
      "Pump & bore hole connections",
      "Shed & workshop wiring",
      "Generator hookups & ATS",
      "Solar & battery ready wiring",
      "Stock water pump installations",
      "Rural property new connections",
      "Caravan & granny flat power",
    ],
  },
  {
    id: "smoke-alarms",
    icon: "🔔",
    title: "Smoke Alarm Compliance",
    tagline: "QLD compliance made easy.",
    desc: "Queensland legislation requires all homes to have interconnected, photoelectric smoke alarms. Penalties apply for non-compliance. We make it fast, easy and affordable.",
    items: [
      "QLD mandatory smoke alarm upgrades",
      "Rental property compliance",
      "Pre-sale compliance certificates",
      "Photoelectric alarm installation",
      "Interconnected hardwired systems",
      "Alarm testing & fault finding",
      "Real estate agent partnerships",
      "Multi-dwelling properties",
    ],
    badge: "QLD Law",
  },
  {
    id: "switchboards",
    icon: "⚡",
    title: "Switchboard Upgrades",
    tagline: "Protect your home from the ground up.",
    desc: "Old switchboards with ceramic fuses are a fire risk and insurance liability. Upgrading to modern circuit breakers and safety switches protects your family and your home.",
    items: [
      "Full switchboard replacement",
      "Safety switch installation",
      "Circuit breaker upgrades",
      "Additional circuit installation",
      "Meter box upgrades",
      "Level 2 ASP work",
      "Home & commercial boards",
      "Insurance compliance upgrades",
    ],
  },
  {
    id: "underground",
    icon: "🔌",
    title: "Underground Power",
    tagline: "Connect every corner of your property.",
    desc: "One of our most popular services — running underground power from your house to a shed, granny flat or other structure on your property.",
    items: [
      "House to shed power runs",
      "Granny flat connections",
      "Outbuilding & garage power",
      "Pool & spa electrical",
      "Underground cable installation",
      "Conduit trenching & laying",
      "Meter box installation",
      "Certified inspections",
    ],
  },
  {
    id: "lighting",
    icon: "💡",
    title: "Lighting & Downlights",
    tagline: "Light your space beautifully.",
    desc: "Great lighting transforms a space. We install and upgrade all types of lighting — from energy-efficient LED downlights to feature pendant lighting.",
    items: [
      "LED downlight installation",
      "Pendant & feature lighting",
      "Under-cabinet lighting",
      "Outdoor & alfresco lighting",
      "Sensor & security lights",
      "Dimmer switch installation",
      "Floodlight installation",
      "Garden & pathway lighting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-brand-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 to-brand-800/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1 className="font-heading text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Residential, commercial, industrial and rural electrical services
            across Gympie & surrounds. Licensed, insured and ready to help.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`rounded-3xl border overflow-hidden ${
                  i % 2 === 0 ? "bg-white border-brand-100" : "bg-brand-50 border-brand-100"
                }`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Left */}
                    <div className="md:w-80 flex-shrink-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{s.icon}</span>
                        {s.badge && (
                          <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-brand-950 mb-1">{s.title}</h2>
                      <p className="text-brand-600 font-medium text-sm mb-4">{s.tagline}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                      <div className="mt-6">
                        <Link href="/contact" className="btn-primary text-sm">
                          Get a Quote
                        </Link>
                      </div>
                    </div>

                    {/* Right — services list */}
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-brand-500 font-semibold mb-4">
                        Includes
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {s.items.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 py-2">
                            <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
