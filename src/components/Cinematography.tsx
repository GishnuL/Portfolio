import React from 'react';
import { CINEMATOGRAPHY_DATA } from '../data/portfolioData';
import { Video, Film, Eye, Sparkles, Award } from 'lucide-react';

export const Cinematography: React.FC = () => {
  const visualPillars = [
    { title: 'Composition', desc: 'Rule of thirds, leading lines, framing & balance' },
    { title: 'Framing', desc: 'Subject emphasis, focal depth & negative space' },
    { title: 'Visual Hierarchy', desc: 'Guiding viewer attention with light & shadow' },
    { title: 'Storytelling', desc: 'Pacing, narrative arc & emotive rhythm' },
    { title: 'Attention to Detail', desc: 'Precision in color grading, exposure & audio sync' },
  ];

  return (
    <section id="cinematography" data-nav-theme="dark" className="py-20 sm:py-28 bg-charcoal-950 text-cream-50 relative overflow-hidden border-t border-charcoal-800">
      {/* Cinematic subtle spotlight glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-terracotta-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section (Centered like Three Pillars of Expertise) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-terracotta-400" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-terracotta-300 font-bold">
              CINEMATOGRAPHY &amp; STORYTELLING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cream-50 tracking-tight">
            Before interfaces, I learned to frame stories.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-300 max-w-2xl font-normal leading-relaxed pt-1">
            {CINEMATOGRAPHY_DATA.description}
          </p>
        </div>

        {/* Broadcast Scale Banner Centered */}
        <div className="max-w-3xl mx-auto mb-14 p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex items-center justify-center space-x-2 text-terracotta-400 text-xs font-mono font-bold uppercase mb-3">
            <Award className="w-4 h-4" />
            <span>Broadcast Scale Experience • 140M+ Viewers</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {CINEMATOGRAPHY_DATA.events.map((evt, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-[11px] text-cream-200 font-medium block">{evt.name}</span>
                <span className="text-terracotta-400 font-mono font-bold text-xs mt-1 block">{evt.reach}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Imagery Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {CINEMATOGRAPHY_DATA.gallery?.map((card, idx) => {
            const IconComponent =
              card.icon === 'Sparkles'
                ? Sparkles
                : card.icon === 'Video'
                ? Video
                : card.icon === 'Eye'
                ? Eye
                : Film;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group h-64 sm:h-72 bg-charcoal-900 border border-white/10 ${card.borderColor} transition-all duration-500 shadow-xl`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-black/20 group-hover:via-charcoal-950/25 transition-colors duration-500" />

                {/* Top pill tag */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                  <IconComponent className={`w-3.5 h-3.5 ${card.tagTextColor}`} />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cream-200 font-semibold">
                    {card.tag}
                  </span>
                </div>

                {/* Bottom details */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <span className={`text-[10px] font-mono uppercase ${card.subTextColor} block font-bold tracking-wider mb-0.5`}>
                    {card.subtitle}
                  </span>
                  <h4 className="text-sm font-bold text-cream-50 leading-snug">
                    {card.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Storytelling Pillars Row */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="text-xs font-mono uppercase text-terracotta-400 font-bold mb-4 tracking-wider">
            Cinematic Thinking Applied to Digital Product Design
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {visualPillars.map((pillar, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs sm:text-sm font-bold text-cream-100 block">
                  — {pillar.title}
                </span>
                <p className="text-[11px] text-charcoal-400 leading-snug">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
