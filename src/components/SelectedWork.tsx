import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Only display personal projects: Thalam 360 & Red Fort Resort
  const filteredProjects = PROJECTS.filter((p) =>
    p.id === 'thalam-360' || p.id === 'red-fort-resort'
  );

  return (
    <section id="work" className="py-20 sm:py-28 bg-cream-100 relative overflow-hidden">
      
      {/* Background architectural element */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Filters (Centered like Three Pillars of Expertise) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-terracotta-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
              SELECTED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight">
            Products, platforms &amp; experiences.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl font-normal leading-relaxed pt-1">
            Real-world digital products crafted from user research and design tokens to high-performance production React applications.
          </p>

        
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm font-bold text-charcoal-900">
              Need to see detailed design tokens, Figma component structures, or GitHub repositories?
            </p>
            <p className="text-xs text-charcoal-500">
              Complete design files and live code reviews are available upon discussion.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-terracotta-600 hover:text-terracotta-700 bg-terracotta-50 px-4 py-2 rounded-full border border-terracotta-200 shrink-0"
          >
            <span>Request Walkthrough</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
