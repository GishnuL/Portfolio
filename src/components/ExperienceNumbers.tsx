import React from 'react';
import { EXPERIENCE_NUMBERS } from '../data/portfolioData';

export const ExperienceNumbers: React.FC = () => {
  return (
    <section id="experience" data-nav-theme="dark" className="py-20 sm:py-24 relative overflow-hidden bg-charcoal-900 text-cream-50 border-t border-charcoal-800">
      {/* Background architectural arches subtle watermark texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src="/assets/hero-arch.jpg"
          alt="Architectural texture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Terracotta subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-terracotta-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Centered Heading like Three Pillars of Expertise */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-terracotta-400" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-terracotta-300 font-bold">
              IMPACT IN NUMBERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cream-50 tracking-tight">
            Numbers that reflect my journey.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 max-w-xl font-normal leading-relaxed pt-1">
            Proven engineering and design output across high-impact enterprise workflows and high-traffic consumer experiences.
          </p>
        </div>

        {/* Stats Grid Centered */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {EXPERIENCE_NUMBERS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-terracotta-500/50 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-cream-50 tracking-tight group-hover:text-terracotta-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cream-200 mt-2 leading-snug">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] text-charcoal-400 mt-1 font-normal">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
