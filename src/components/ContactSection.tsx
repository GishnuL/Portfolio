import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowRight, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden border-t border-cream-200">
      
      {/* Background Architectural Arches & Terracotta Atmosphere */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/assets/hero-arch.jpg"
          alt="Architectural arches"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-terracotta-100/50 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow (Matching Three Pillars of Expertise style) */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
            LET'S WORK TOGETHER
          </span>
        </div>

        {/* Big Editorial Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal-900 leading-[1.08] text-balance">
          Have a product <br />
          worth <span className="text-terracotta-500 relative inline-block">
            building?
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-terracotta-500/30 rounded-full" />
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-charcoal-600 max-w-xl mx-auto font-normal leading-relaxed text-balance">
          Let's turn complex ideas into simple, useful experiences.
        </p>

        {/* Actions Row */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center space-x-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-terracotta-glow hover:shadow-xl group"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-cream-100 text-charcoal-900 font-semibold text-sm sm:text-base px-6 py-4 rounded-full border border-cream-300 shadow-soft transition-all duration-300 hover:border-terracotta-400 group"
          >
            <Linkedin className="w-4 h-4 text-terracotta-500" />
            <span>LinkedIn</span>
            <ArrowRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white hover:bg-cream-100 text-charcoal-900 font-semibold text-sm sm:text-base px-6 py-4 rounded-full border border-cream-300 shadow-soft transition-all duration-300 hover:border-terracotta-400 group"
          >
            <Github className="w-4 h-4 text-charcoal-700" />
            <span>GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Handwritten signature vibe */}
        <div className="pt-10 flex flex-col items-center justify-center space-y-1">
          <span className="font-handwriting text-2xl sm:text-3xl text-charcoal-800 font-bold rotate-[-2deg]">
            Let's create something exceptional together.
          </span>
          <span className="text-xs font-mono text-terracotta-600 font-medium">
            Open to Product Design & Frontend Opportunities
          </span>
        </div>

      </div>
    </section>
  );
};
