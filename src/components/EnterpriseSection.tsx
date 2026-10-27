import React, { useState } from 'react';
import { ENTERPRISE_DOMAINS } from '../data/portfolioData';
import { EnterpriseDomain } from '../types';
import { HeartPulse, Layers, Users2, PackageCheck, ShieldCheck, FileKey2, Clock8, ArrowUpRight, Sparkles } from 'lucide-react';

interface EnterpriseSectionProps {
  onExploreWork?: () => void;
}

export const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({ onExploreWork }) => {
  const [selectedDomain, setSelectedDomain] = useState<EnterpriseDomain>(ENTERPRISE_DOMAINS[0]);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-terracotta-500" />;
      case 'Layers': return <Layers className="w-4 h-4 text-terracotta-500" />;
      case 'Users2': return <Users2 className="w-4 h-4 text-terracotta-500" />;
      case 'PackageCheck': return <PackageCheck className="w-4 h-4 text-terracotta-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-terracotta-500" />;
      case 'FileKey2': return <FileKey2 className="w-4 h-4 text-terracotta-500" />;
      case 'Clock8': return <Clock8 className="w-4 h-4 text-terracotta-500" />;
      default: return <Layers className="w-4 h-4 text-terracotta-500" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden border-t border-cream-200">
      
      {/* Background Architectural Arches Watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
        <img
          src="/assets/hero-arch.jpg"
          alt="Architectural structure"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header (Centered like Three Pillars of Expertise) */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-terracotta-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
              ENTERPRISE PRODUCT DESIGN
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight">
            Designing complexity into clarity.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl font-normal leading-relaxed pt-1">
            Across enterprise products, I architect complex workflows where users manage dense records, multi-level approvals, and mission-critical operations with ease.
          </p>
          <div className="pt-1">
            <a
              href="#enterprise-showcase"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-terracotta-600 hover:text-terracotta-700 group"
            >
              <span>Explore 300+ Enterprise Screens</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Selected Domain Spotlight Card */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-300 shadow-soft space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-cream-200">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-xl bg-terracotta-50 flex items-center justify-center">
                  {getDomainIcon(selectedDomain.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-terracotta-600 uppercase font-bold block">Selected Domain</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-charcoal-900">{selectedDomain.name}</h3>
                </div>
              </div>
              <span className="text-xs font-mono font-bold bg-cream-100 text-charcoal-700 px-3 py-1 rounded-full border border-cream-300">
                {selectedDomain.screensCount} UI Screens
              </span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              {selectedDomain.description}
            </p>
            <div className="pt-1 flex items-center justify-between text-[11px] text-charcoal-400 font-mono">
              <span>Click any domain node below to inspect</span>
              <span className="text-terracotta-600 font-semibold">Active Interactive Mode</span>
            </div>
          </div>
        </div>

        {/* Central Circular Node Interactive Architecture Diagram */}
        <div className="relative w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-elevated overflow-hidden">
          
          {/* Central Hub & Surrounding Connectors */}
          <div className="relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px]">
            
            {/* SVG Connecting Curves & Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D95F3F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E9E2D8" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* Radial connecting lines */}
              <circle cx="50%" cy="50%" r="140" fill="none" stroke="#E9E2D8" strokeWidth="1" strokeDasharray="4 4" className="hidden sm:block" />
              <circle cx="50%" cy="50%" r="190" fill="none" stroke="#E9E2D8" strokeWidth="0.75" strokeDasharray="6 6" className="hidden lg:block" />
            </svg>

            {/* Central Node */}
            <div className="relative z-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-terracotta-500 to-terracotta-700 text-white flex flex-col items-center justify-center p-4 text-center shadow-terracotta-glow border-4 border-white">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-tight leading-tight">
                Enterprise <br />
                Products
              </span>
              <span className="text-[9px] font-mono opacity-80 mt-1">
                300+ Screens
              </span>
            </div>

            {/* Surrounding Connected Nodes */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 relative z-20">
              {ENTERPRISE_DOMAINS.map((domain) => {
                const isSelected = selectedDomain.id === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomain(domain)}
                    className={`flex items-center space-x-2.5 px-3.5 py-2.5 rounded-2xl border text-left transition-all duration-300 ${
                      isSelected
                        ? 'bg-white shadow-card border-terracotta-500 scale-105 ring-2 ring-terracotta-500/20'
                        : 'bg-cream-50 hover:bg-white border-cream-300 hover:border-terracotta-300 text-charcoal-700'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-terracotta-50' : 'bg-cream-200/50'}`}>
                      {getDomainIcon(domain.icon)}
                    </div>
                    <div className="min-w-0">
                      <span className={`text-xs font-bold block leading-tight ${isSelected ? 'text-terracotta-600' : 'text-charcoal-900'}`}>
                        {domain.name}
                      </span>
                      <span className="text-[10px] text-charcoal-400 font-mono mt-0.5 block">
                        {domain.screensCount} screens
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
