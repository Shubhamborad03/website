import { Phone, Clock, MapPin } from "lucide-react";

export default function CallBanner() {
  return (
    <div className="bg-navy-950 text-sm text-navy-200">
      <div className="container-tight flex flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="tel:0406671114"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            0406 671 114
          </a>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Clock className="h-3.5 w-3.5" />
            Mon–Sat 7:00am – 4:30pm
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          <span>Gold Coast • Brisbane • Brisbane South</span>
        </div>
      </div>
    </div>
  );
}
