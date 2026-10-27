import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, CAPABILITIES } from '../data/portfolioData';
import { CapabilityCard } from './CapabilityCard';
import { ArrowUpRight, Sparkles, PenTool, Code2 } from 'lucide-react';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      {/* Decorative architectural blur glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-terracotta-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-cream-300/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-terracotta-500" />
            <span className="text-xs uppercase font-bold tracking-widest text-charcoal-500">
              ABOUT ME
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-900 leading-[1.12]">
                Designer who understands the{' '}
                <span className="text-terracotta-500 font-extrabold relative inline-block">
                  build.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-terracotta-500/30 rounded-full" />
                </span>
              </h2>
            </div>
            
            <div className="lg:col-span-5 space-y-4">
              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutBio}
              </p>
              <div>
                <button
                  onClick={() => onNavigate('work')}
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-terracotta-600 hover:text-terracotta-700 group"
                >
                  <span>Explore Selected Work</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Portrait + Narrative Row */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Architectural Arch Backdrop Frame with User's Real Photo */}
              <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-t-full rounded-b-3xl bg-gradient-to-b from-terracotta-500/80 via-cream-200 to-cream-300 p-2 relative overflow-hidden shadow-card border-2 border-white">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top rounded-t-full rounded-b-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating micro handwritten note */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-cream-300 transform rotate-[-3deg] hover:rotate-0 transition-transform">
                <p className="font-handwriting font-caveat font-['Caveat'] text-charcoal-900 text-xl sm:text-2xl font-medium leading-none">
                  {PERSONAL_INFO.aboutQuote.split(',')[0]}
                </p>
                <p className="font-handwriting font-caveat font-['Caveat'] text-terracotta-500 text-xl sm:text-2xl font-medium leading-none">
                  {PERSONAL_INFO.aboutQuote.split(',')[1] || 'Better Impact'}
                </p>
              </div>

              {/* Designer / Developer Tag */}
              <div className="absolute top-4 -left-3 bg-charcoal-900 text-cream-50 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider shadow-md">
                {PERSONAL_INFO.name} • 2026
              </div>
            </div>
          </div>

          {/* Philosophy / Story Narrative Column */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-terracotta-600 font-bold">
                The Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 leading-snug">
                Bridging the gap between conceptual UX and production-grade engineering.
              </h3>
            </div>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Most design breaks during engineering handoff. I eliminate that friction. By thinking in atomic design tokens, reusable React components, and modular state architectures from day one, I ensure that what is envisioned in Figma executes with pixel precision and fluid 60fps performance in production.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-cream-100/90 border border-cream-300/80">
                <span className="text-xs font-mono font-bold text-terracotta-600 block mb-1">DESIGN FOCUS</span>
                <p className="text-xs sm:text-sm text-charcoal-700 font-medium">
                  Information Architecture, System Thinking, Micro-interactions & WCAG Accessibility
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-cream-100/90 border border-cream-300/80">
                <span className="text-xs font-mono font-bold text-terracotta-600 block mb-1">BUILD FOCUS</span>
                <p className="text-xs sm:text-sm text-charcoal-700 font-medium">
                  Scalable React, Clean TypeScript, Redux Stores & High-Performance UI Renders
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Capability Cards Grid */}
        <div className="pt-4">
          <div className="flex flex-col items-center text-center mb-12 sm:mb-14 space-y-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-terracotta-500" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
                Three Pillars of Expertise
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight">
              Core Capabilities
            </h3>
            <p className="text-sm sm:text-base text-charcoal-600 max-w-xl font-normal leading-relaxed pt-1">
              End-to-end expertise bridging research-backed UX strategy, atomic visual systems, and production React applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CAPABILITIES.map((cap, index) => (
              <CapabilityCard key={cap.number} capability={cap} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
