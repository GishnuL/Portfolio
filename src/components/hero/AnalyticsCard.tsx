import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface AnalyticsCardProps {
  mouseOffset?: { x: number; y: number };
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ mouseOffset = { x: 0, y: 0 } }) => {
  return (
    <motion.div
      // animate={{
      //   y: [-4, 4, -4],
      // }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="hidden sm:block absolute top-6 sm:top-10 md:top-12 right-3 sm:right-6 md:right-8 lg:right-10 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-card border border-white/80 z-30 pointer-events-auto transition-all hover:-translate-y-1 hover:shadow-elevated duration-300 select-none"
    >
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-terracotta-50 flex items-center justify-center text-[#D95F3F] shrink-0">
          <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </div>
        <div className="space-y-0.5 pr-1">
          <span className="text-[7.5px] sm:text-[8px] font-bold text-charcoal-500 uppercase block leading-none">
            Impact
          </span>
          <span className="text-[10px] sm:text-[11px] font-black text-[#101820] leading-none block">
            +98.4%
          </span>
        </div>
      </div>
    </motion.div>
  );
};
