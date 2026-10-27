import React from 'react';
import { Project } from '../types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group bg-white rounded-3xl border border-cream-300 shadow-soft hover:shadow-hover hover:border-terracotta-300 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      
      {/* Mockup Preview Area */}
      <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-cream-200 border-b border-cream-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider text-charcoal-800 uppercase shadow-sm">
          {project.domain}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          
          {/* Title & Subtitle */}
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-terracotta-600 block mb-1">
              {project.category === 'web & mobile' ? 'Web Application & Mobile App' : `${project.category} Project`}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 group-hover:text-terracotta-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-500 font-medium mt-1 leading-snug">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technology.map((tech, idx) => (
              <span
                key={idx}
                className="bg-cream-100 text-charcoal-700 text-[11px] font-mono px-2.5 py-1 rounded-md border border-cream-300/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Role & Domain Details */}
          <div className="pt-2 space-y-1 text-xs border-t border-cream-100">
            <div className="flex items-center justify-between text-charcoal-600">
              <span className="text-charcoal-400 font-medium">Role</span>
              <span className="font-semibold text-charcoal-800">{project.role}</span>
            </div>
            <div className="flex items-center justify-between text-charcoal-600">
              <span className="text-charcoal-400 font-medium">Domain</span>
              <span className="font-semibold text-terracotta-600">{project.domain}</span>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.features.slice(0, 5).map((feat, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-cream-50 text-charcoal-500 px-2 py-0.5 rounded-full border border-cream-200"
              >
                • {feat}
              </span>
            ))}
            {project.features.length > 5 && (
              <span className="text-[10px] bg-terracotta-50 text-terracotta-600 px-2 py-0.5 rounded-full font-mono">
                +{project.features.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-cream-200 flex items-center justify-between gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs font-bold text-terracotta-600 hover:text-terracotta-700 underline underline-offset-4"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-charcoal-400">
              Internal Platform
            </span>
          )}

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center space-x-1.5 bg-charcoal-900 hover:bg-terracotta-500 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 group/btn"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
