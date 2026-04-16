"use client";

import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  alt = "Before and after comparison",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={before}
            alt={`${alt} - Before`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after}
            alt={`${alt} - After`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#0967d2",
              border: "3px solid white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              cursor: "ew-resize",
              backdropFilter: "blur(4px)",
            }}
            linesStyle={{
              width: 3,
              background: "white",
              opacity: 0.8,
              boxShadow: "0 0 8px rgba(0,0,0,0.2)",
            }}
          />
        }
        defaultPosition={50}
        onPositionChange={setPos}
        transition=".3s ease-out"
        style={{
          width: "100%",
          aspectRatio: "4/3",
        }}
      />

      {/* Before label — fades out as slider moves left (before image shrinks) */}
      <div
        className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-navy-900/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-opacity duration-200"
        style={{ opacity: pos > 15 ? 1 : 0 }}
      >
        Before
      </div>

      {/* After label — fades out as slider moves right (after image shrinks) */}
      <div
        className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-ocean-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-opacity duration-200"
        style={{ opacity: pos < 85 ? 1 : 0 }}
      >
        After
      </div>
    </div>
  );
}
