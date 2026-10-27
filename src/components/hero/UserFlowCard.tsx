import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer, ArrowDown } from 'lucide-react';

interface UserFlowCardProps {
  mouseOffset?: { x: number; y: number };
}

export const UserFlowCard: React.FC<UserFlowCardProps> = ({ mouseOffset = { x: 0, y: 0 } }) => {
  return (
    <motion.div
      // animate={{
      //   y: [5, -5, 5],
      // }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="hidden sm:block opacity-65 absolute bottom-1 sm:bottom-24 md:bottom-26 right-0 sm:right-0 md:right-0 w-32 sm:w-36 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-card border border-white/80 z-30 pointer-events-auto transition-all hover:-translate-y-1 hover:shadow-elevated duration-300 select-none"
    >
      <div className="space-y-1 relative text-center">
        <div className="px-2 py-0.5 bg-terracotta-50 border border-terracotta-200/80 rounded text-[8.5px] sm:text-[9px] font-bold text-[#D95F3F]">
          Research
        </div>
        <ArrowDown className="w-2.5 h-2.5 text-cream-400 mx-auto" />
        <div className="px-2 py-0.5 bg-cream-50 border border-cream-300/80 rounded text-[8.5px] sm:text-[9px] font-semibold text-charcoal-700">
          Wireframes
        </div>
        <ArrowDown className="w-2.5 h-2.5 text-cream-400 mx-auto" />
        <div className="px-2 py-0.5 bg-cream-50 border border-cream-300/80 rounded text-[8.5px] sm:text-[9px] font-semibold text-charcoal-700">
          UI Design
        </div>
        <ArrowDown className="w-2.5 h-2.5 text-terracotta-400 mx-auto" />
        <div className="px-2 py-0.5 bg-[#101820] text-cream-50 rounded text-[8.5px] sm:text-[9px] font-bold shadow-sm">
          Development
        </div>

        {/* Mouse Pointer Cursor Icon */}
        <div className="absolute -bottom-4 -right-2 text-charcoal-900 pointer-events-none">
          <MousePointer className="w-3.5 h-3.5 fill-[#101820]" />
        </div>
      </div>
    </motion.div>
  );
};
