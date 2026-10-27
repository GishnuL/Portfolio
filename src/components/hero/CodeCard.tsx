import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface CodeCardProps {
  mouseOffset?: { x: number; y: number };
}

export const CodeCard: React.FC<CodeCardProps> = ({ mouseOffset = { x: 0, y: 0 } }) => {
  return (
    <motion.div
      // animate={{
      //   y: [-6, 6, -6],
      // }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="hidden sm:block absolute opacity-80 bottom-10 sm:bottom-24 md:bottom-34 left-6 sm:left-8 md:left-10 w-40 sm:w-52 md:w-52 bg-[#101820]/95 text-cream-100 backdrop-blur-lg rounded-2xl p-2.5 sm:p-3 shadow-elevated border border-charcoal-700/60 font-mono text-[9px] sm:text-[9.5px] pointer-events-none select-none"
    >
      <div className="flex items-center justify-between pb-1.5 border-b border-charcoal-800 mb-2">
        <div className="flex items-center space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-500/80" />
          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[9px] text-charcoal-400 flex items-center gap-1 font-sans font-medium">
          <Code2 className="w-3 h-3 text-[#D95F3F]" />
          <span>React.tsx</span>
        </span>
      </div>
      
      <div className="space-y-1 text-charcoal-300 leading-relaxed font-mono">
        <div>
          <span className="text-[#D95F3F]">const</span> <span className="text-amber-200">experience</span> = &#123;
        </div>
        <div className="pl-3 text-cream-200">
          projects: <span className="text-emerald-400">14</span>,
        </div>
        <div className="pl-3 text-cream-200">
          screens: <span className="text-emerald-400">300</span>,
        </div>
        <div className="pl-3 text-cream-200">
          stack: <span className="text-[#D95F3F]">'React + TS'</span>
        </div>
        <div>&#125;;</div>
      </div>
    </motion.div>
  );
};
