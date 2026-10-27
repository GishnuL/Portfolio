import React from "react";
import { ProfilePortrait } from "./ProfilePortrait";
import { FloatingDesignCard } from "./FloatingDesignCard";
import { WireframeCard } from "./WireframeCard";
import { CodeCard } from "./CodeCard";
import { FloatingElements } from "./FloatingElements";

interface HeroVisualProps {
  mouseOffset?: { x: number; y: number };
}

export const HeroVisual: React.FC<HeroVisualProps> = ({
  mouseOffset = { x: 0, y: 0 },
}) => {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[550px] xl:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden select-none">
      {/* Thin Terracotta Orbit / Connection Lines */}
      <svg
        viewBox="0 0 550 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-50"
      >
        {/* Subtle architectural design path */}
        <path
          d="M-60 160 C 100 180, 50 260, 10 280"
          stroke="#D95F3F"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M-100 280 C -120 300, -220 400, 30 420"
          stroke="#D95F3F"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        {/* Connection anchor nodes */}
        <circle cx="-60" cy="160" r="3" fill="#D95F3F" />
        <circle cx="-136" cy="350" r="3" fill="#D95F3F" />
        <circle cx="80" cy="540" r="2.5" fill="#D95F3F" />
      </svg>

      {/* Layer 1 (Behind Shoulder): Dotted lines & 3D cube */}
      <div className="absolute right-0 sm:right-2 md:right-3 lg:right-1 xl:right-3 bottom-1 sm:bottom-3 md:bottom-5 lg:bottom-4 xl:bottom-6 z-20 pointer-events-none scale-[0.62] sm:scale-[0.72] md:scale-[0.8] lg:scale-[0.86] xl:scale-[0.95] origin-bottom-right transition-transform">
        <FloatingElements layer="behind" />
      </div>

      {/* Main Profile Portrait & Terracotta Backdrop Circle (z-40) */}
      <ProfilePortrait mouseOffset={mouseOffset} />

      {/* Left Side Floating Design Artifacts */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <FloatingDesignCard mouseOffset={mouseOffset} />
        <WireframeCard />
        <CodeCard mouseOffset={mouseOffset} />
      </div>

      {/* Layer 2 (In Front of Profile Shoulder Bottom): Mobile mockup & Analytics card */}
      <div className="absolute right-0 sm:right-2 md:right-3 lg:right-1 xl:right-3 bottom-1 sm:bottom-3 md:bottom-5 lg:bottom-4 xl:bottom-6 z-50 pointer-events-none scale-[0.62] sm:scale-[0.72] md:scale-[0.8] lg:scale-[0.86] xl:scale-[0.95] origin-bottom-right transition-transform">
        <FloatingElements layer="front" />
      </div>
    </div>
  );
};
