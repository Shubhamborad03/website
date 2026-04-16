"use client";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#0a2219";
  const accentColor = "#1f7050";
  const sizes = { sm: 28, md: 36, lg: 46 };
  const h = sizes[size];

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Icon mark */}
      <svg width={h} height={h} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill={accentColor} />
        {/* Lightning bolt J shape */}
        <path
          d="M22 6L13 22H19L16 34L27 17H21L24 6H22Z"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: size === "sm" ? 15 : size === "md" ? 18 : 22,
            color: textColor,
            letterSpacing: "-0.3px",
          }}
        >
          J MACK
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: size === "sm" ? 8 : size === "md" ? 9 : 11,
            color: variant === "light" ? "rgba(255,255,255,0.7)" : accentColor,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
          }}
        >
          Electrical Services
        </span>
      </div>
    </div>
  );
}
