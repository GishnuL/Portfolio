import React from 'react';
import { motion } from 'framer-motion';

interface MobilePreviewCardProps {
  mouseOffset?: { x: number; y: number };
}

export const MobilePreviewCard: React.FC<MobilePreviewCardProps> = ({
  mouseOffset = { x: 0, y: 0 },
}) => {
  return (
    <motion.div
      // animate={{
      //   y: [3, -4, 3],
      //   rotateZ: [-1.5, 0.5, -1.5],
      // }}
      transition={{
        duration: 6.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="hidden sm:block absolute opacity-90 bottom-6 sm:bottom-12 right-3 sm:right-6 md:right-8 lg:right-10 w-28 sm:w-32 md:w-34 bg-white/95 rounded-[22px] p-1.5 sm:p-2 shadow-elevated border-2 border-cream-300/80 z-30 pointer-events-auto transition-all hover:-translate-y-1 hover:shadow-2xl duration-300 select-none"
    >
      {/* Phone Notch */}
      <div className="w-8 h-1 bg-charcoal-300 rounded-full mx-auto mb-1.5" />
      
      {/* Mobile Screen Content */}
      <div className="bg-cream-100 rounded-[14px] overflow-hidden border border-cream-200/80 p-1.5 space-y-1.5">
        {/* App Header Image */}
        <div className="h-10 sm:h-12 bg-gradient-to-br from-[#E27659] via-[#C24827] to-[#8C3019] rounded-lg overflow-hidden relative flex items-end p-1.5 shadow-sm">
          <span className="text-[7.5px] sm:text-[8px] font-bold text-white tracking-wider uppercase drop-shadow">
            THALAM 360
          </span>
        </div>
        {/* Wireframe Card Lines */}
        <div className="space-y-1 px-0.5">
          <div className="h-1 sm:h-1.5 bg-cream-300 rounded-full w-full" />
          <div className="h-1 sm:h-1.5 bg-cream-200 rounded-full w-3/4" />
        </div>
        {/* CTA Button */}
        <a
          href="https://thalam360.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-3.5 sm:h-4 bg-[#D95F3F] hover:bg-[#C24827] rounded-md flex items-center justify-center text-[7.5px] sm:text-[8px] font-bold text-white shadow-sm transition-colors cursor-pointer"
        >
          Explore Live ↗
        </a>
      </div>
    </motion.div>
  );
};
