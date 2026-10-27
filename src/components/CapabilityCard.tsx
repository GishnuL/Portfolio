import React from 'react';
import { motion } from 'framer-motion';
import { Capability } from '../types';
import { Compass, Palette, Code2, ArrowUpRight } from 'lucide-react';

interface CapabilityCardProps {
  capability: Capability;
  index: number;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ capability, index }) => {
  const getIcon = (name: string) => {
    const iconClass = "w-6 h-6 transition-transform duration-300 group-hover:scale-110";
    switch (name) {
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'Palette':
        return <Palette className={iconClass} />;
      case 'Code2':
        return <Code2 className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative bg-white/95 hover:bg-white rounded-3xl p-6 sm:p-8 border border-cream-300/90 hover:border-terracotta-400/80 shadow-soft hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Ambient terracotta corner glow on hover */}
      <div className="absolute -top-14 -right-14 w-36 h-36 rounded-full bg-terracotta-500/0 group-hover:bg-terracotta-500/15 blur-2xl transition-all duration-500 pointer-events-none" />

      {/* 2. Large Architectural Watermark Number in background */}
      {/* <span className="absolute top-3 right-6 font-mono text-6xl sm:text-7xl font-black text-charcoal-900/[0.04] group-hover:text-terracotta-500/[0.08] transition-colors duration-400 pointer-events-none select-none">
        0{index + 1}
      </span> */}

      <div>
        {/* Card Header: Number pill & Icon Container */}
        <div className="flex items-center justify-between pb-6 border-b border-cream-200/80 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-100 border border-cream-300/80 group-hover:border-terracotta-300/80 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-charcoal-700 uppercase">
              {capability.number}
            </span>
          </div>

          {/* Icon Box with high-contrast hover transformation: icon becomes crisp white on terracotta */}
          <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-terracotta-50 border border-terracotta-200/70 text-terracotta-600 group-hover:bg-terracotta-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-terracotta-glow transition-all duration-300 flex items-center justify-center shrink-0">
            {getIcon(capability.iconName)}
          </div>
        </div>

        {/* Title & Animated Accent line */}
        <div className="mt-6 mb-5 relative z-10">
          <h3 className="text-xl sm:text-2xl font-black text-charcoal-900 tracking-tight group-hover:text-terracotta-600 transition-colors duration-300">
            {capability.title}
          </h3>
          <div className="w-8 h-[2.5px] bg-terracotta-500/30 group-hover:w-14 group-hover:bg-terracotta-500 transition-all duration-300 mt-2 rounded-full" />
        </div>

        {/* Capability Items as Creative Interactive Pills Grid */}
        <div className="flex flex-wrap gap-2 pt-1 relative z-10">
          {capability.items.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cream-100/80 hover:bg-white text-charcoal-700 hover:text-charcoal-950 border border-cream-200/90 hover:border-terracotta-300/90 text-xs font-medium transition-all duration-200 shadow-2xs hover:shadow-soft group/item cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cream-400 group-hover/item:bg-terracotta-500 group-hover/item:scale-125 transition-all" />
              <span className="leading-tight">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent line & Action */}
      <div className="mt-8 pt-5 border-t border-cream-200/80 flex items-center justify-between text-xs font-mono text-charcoal-500 relative z-10">
        <span className="font-medium text-[11px] text-charcoal-400">
          {capability.items.length} Key Focus Areas
        </span>
        <div className="flex items-center space-x-1 text-terracotta-600 font-bold group-hover:translate-x-1 transition-transform duration-300">
          <span>Explore</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
};
