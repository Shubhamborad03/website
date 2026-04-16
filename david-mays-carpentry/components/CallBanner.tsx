"use client";

import { Phone, Clock } from "lucide-react";

export default function CallBanner() {
  return (
    <div className="bg-charcoal-900 text-white">
      <div className="container-tight flex flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row sm:text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-timber-400" />
            Open 7 Days — 9am to 5pm
          </span>
          <span className="hidden text-charcoal-500 sm:inline">|</span>
          <span className="hidden sm:inline">QBCC Lic: 15017564</span>
        </div>
        <a
          href="tel:0400000000"
          className="flex items-center gap-1.5 font-semibold text-timber-300 transition-colors hover:text-timber-200"
        >
          <Phone className="h-3.5 w-3.5" />
          Call David — Free Quotes
        </a>
      </div>
    </div>
  );
}
