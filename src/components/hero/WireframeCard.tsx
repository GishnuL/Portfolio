import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';

interface WireframeCardProps {
  className?: string;
  mouseOffset?: { x: number; y: number };
}

export const WireframeCard: React.FC<WireframeCardProps> = ({
  className = '',
}) => {
  return (
    <motion.div
      className={`hidden sm:block absolute top-22 sm:top-48 left-3 sm:left-6 md:left-8 w-32 sm:w-36 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-card border border-white/80 z-30 pointer-events-none select-none ${className}`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-cream-200/80 mb-2">
        <div className="flex items-center space-x-1.5">
          <Layout className="w-3 h-3 text-[#D95F3F]" />
          <span className="text-[9px] font-bold text-charcoal-800 tracking-tight">Wireframe</span>
        </div>
        <span className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[7.5px] font-semibold text-charcoal-400">v1.0</span>
        </span>
      </div>

      {/* Wireframe UI Skeleton Elements */}
      <div className="space-y-1.5">
        {/* Skeleton Banner Box with classic wireframe diagonal guides */}
        <div className="h-8 bg-cream-100 rounded-lg border border-dashed border-cream-300/90 relative flex items-center justify-center overflow-hidden">
          {/* Diagonal wireframe cross */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="#101820" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="#101820" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
          <span className="text-[7px] font-mono text-charcoal-400 z-10 bg-white/85 px-1 py-0.5 rounded border border-cream-200/60 leading-none">
            Hero Block
          </span>
        </div>

        {/* Wireframe skeleton content lines */}
        <div className="space-y-1">
          <div className="h-1.5 bg-cream-300/80 rounded-full w-4/5" />
          <div className="h-1.5 bg-cream-200/80 rounded-full w-3/5" />
        </div>

        {/* Wireframe mini buttons/tags row */}
        <div className="flex items-center space-x-1.5 pt-0.5">
          <div className="h-3.5 px-2 bg-[#D95F3F] text-white rounded text-[7.5px] font-bold flex items-center shadow-xs">
            CTA
          </div>
          <div className="h-3.5 px-1.5 bg-cream-100 border border-cream-300/80 text-charcoal-600 rounded text-[7.5px] font-medium flex items-center">
            Outline
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WireframeCard;
