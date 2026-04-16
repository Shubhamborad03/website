interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className="flex items-center gap-2.5">
      {/* Shield + bug icon */}
      <div className={`flex items-center justify-center rounded-xl ${
        size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-12 h-12"
      } ${variant === "light" ? "bg-white/10" : "bg-brand-50"}`}>
        <svg
          className={`${size === "sm" ? "w-5 h-5" : size === "md" ? "w-6 h-6" : "w-7 h-7"} ${
            variant === "light" ? "text-accent-400" : "text-brand-600"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
      <div>
        <p className={`font-heading font-bold leading-none ${sizes[size]} ${
          variant === "light" ? "text-white" : "text-brand-900"
        }`}>
          Noosaville
        </p>
        <p className={`font-heading font-semibold leading-none mt-0.5 ${
          size === "sm" ? "text-xs" : "text-sm"
        } ${variant === "light" ? "text-accent-400" : "text-brand-600"}`}>
          Pest Control
        </p>
      </div>
    </div>
  );
}
