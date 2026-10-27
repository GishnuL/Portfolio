import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ArchitectureBackgroundProps {
  mouseOffset?: { x: number; y: number };
}

export const ArchitectureBackground: React.FC<ArchitectureBackgroundProps> = ({
  mouseOffset = { x: 0, y: 0 },
}) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-[#F7F2E9]">
      {/* 3D Architectural Scene Image with Arches & Mountain Landscape */}
      <img
        src={PERSONAL_INFO.bannerBgImage}
        alt="Minimalist architectural arches overlooking mountains"
        className="w-full h-full object-cover object-top scale-105"
      />

      {/* Warm Ambient Blend Gradients (Ivory / Sand Tone) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F7F2E9]/80 via-transparent to-[#F7F2E9]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7F2E9]/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F2E9]/40" />
    </div>
  );
};
