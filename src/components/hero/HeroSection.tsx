import React from "react";
import "../../css/Hero.css";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { ArchitectureBackground } from "./ArchitectureBackground";
import { ScrollIndicator } from "./ScrollIndicator";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[60svh] md:min-h-[60svh] lg:min-h-[60dvh] py-12 sm:py-14 lg:py-8 flex flex-col justify-center overflow-hidden bg-[#F7F2E9] selection:bg-[#D95F3F] selection:text-white"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-pattern opacity-40 pointer-events-none z-0" />

      {/* 3D Architectural Scene Background */}
      <ArchitectureBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#F7F2E9_0%,#F7F2E9D9_55%,transparent_100%)] pointer-events-none z-[1]" />

      {/* Main Container - Restored to exact previous styling & position placement */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full my-auto">
        {/* Two-Part Layout: Left (~50%) + Right (~50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Typography, Stats & Links */}
          <div className="lg:col-span-5 xl:col-span-5 relative z-20">
            <HeroContent
              onNavigate={onNavigate}
              onOpenContact={onOpenContact}
            />
          </div>

          {/* RIGHT COLUMN: 3D Minimal Architecture & Portrait Visual Stage (Untouched) */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-10 lg:-ml-4 xl:-ml-6">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll to Explore - Anchored to bottom of screen (viewport), fades on scroll */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
