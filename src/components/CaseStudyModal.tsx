import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Compass, Layout } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-cream-50 rounded-3xl shadow-2xl border border-cream-300 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-cream-100/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-cream-300 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-2.5 py-1 rounded-full border border-terracotta-200">
              Case Study
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-charcoal-900 truncate">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-bold text-charcoal-700 hover:text-terracotta-500 bg-white px-3 py-1.5 rounded-full border border-cream-300 shadow-sm"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white hover:bg-cream-200 border border-cream-300 text-charcoal-700 hover:text-charcoal-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10">
          
          {/* Hero Banner & Metadata */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-charcoal-500">
                {project.domain}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
                {project.subtitle}
              </h2>
            </div>

            {/* Mockup Preview Image */}
            <div className="w-full rounded-2xl overflow-hidden border border-cream-300 shadow-card bg-cream-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[440px] object-cover object-center"
              />
            </div>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-cream-200 shadow-soft">
              <div>
                <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Role</span>
                <span className="text-xs sm:text-sm font-bold text-charcoal-900">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Domain</span>
                <span className="text-xs sm:text-sm font-bold text-charcoal-900">{project.domain}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Category</span>
                <span className="text-xs sm:text-sm font-bold uppercase text-terracotta-600">
                  {project.category === 'web & mobile' ? 'Web & Mobile App' : project.category}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-charcoal-400 block uppercase">Stack</span>
                <span className="text-xs sm:text-sm font-bold text-charcoal-900">{project.technology.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Project Overview & Problem / Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-cream-300 space-y-3">
              <div className="flex items-center space-x-2 text-terracotta-600">
                <Compass className="w-5 h-5" />
                <h4 className="text-base font-bold text-charcoal-900">The Problem</h4>
              </div>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cream-300 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
                <h4 className="text-base font-bold text-charcoal-900">The Solution</h4>
              </div>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Feature Architecture Pills */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-widest text-charcoal-400 font-bold">
              Key Capabilities & Feature Modules
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center space-x-2 bg-cream-100 border border-cream-300/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-charcoal-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering & Design Highlights */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-widest text-charcoal-400 font-bold">
              Engineering & Design Execution Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-cream-200"
                >
                  <div className="w-5 h-5 rounded-full bg-terracotta-50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-terracotta-600 font-mono">{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-700 font-normal leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-cream-300 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-charcoal-400 font-mono">
              Designed & Built by Gishnu L • Production Verified
            </div>
            <div className="flex items-center space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm"
                >
                  <span>Launch Live Experience</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="bg-charcoal-900 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-charcoal-800 transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
