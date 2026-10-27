import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Github, ArrowUp, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-cream-100 border-t border-cream-300 pt-16 pb-12 text-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-2xl font-black tracking-tight text-charcoal-900">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-500 font-medium max-w-sm">
              Product Designer | UI/UX Designer | Frontend Developer (React.js)
            </p>
            <p className="text-xs text-charcoal-400 font-mono">
              Crafting thoughtful digital experiences from research to production code.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 font-bold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-charcoal-700">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left hover:text-terracotta-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 font-bold block">
              Connect
            </span>
            <div className="flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-cream-300 hover:border-terracotta-500 flex items-center justify-center text-charcoal-700 hover:text-terracotta-500 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-cream-300 hover:border-terracotta-500 flex items-center justify-center text-charcoal-700 hover:text-terracotta-500 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenContact}
                className="w-9 h-9 rounded-full bg-white border border-cream-300 hover:border-terracotta-500 flex items-center justify-center text-charcoal-700 hover:text-terracotta-500 transition-all shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div className="pt-8 border-t border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500 font-medium">
          <div>
            © 2026 Gishnu L. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-charcoal-400 font-mono text-[11px]">Designed & Engineered with React + Tailwind</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-charcoal-800 hover:text-terracotta-500 font-semibold transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
