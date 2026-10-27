import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/portfolioData';
import { Palette, Code2, Layout, LineChart, Wrench, ArrowUpRight } from 'lucide-react';

export const Skills: React.FC = () => {
  const getSkillCategoryIcon = (title: string) => {
    const iconClass = "w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110";
    switch (title.toUpperCase()) {
      case 'PRODUCT DESIGN':
        return <Palette className={iconClass} />;
      case 'FRONTEND':
        return <Code2 className={iconClass} />;
      case 'UI ENGINEERING':
        return <Layout className={iconClass} />;
      case 'DATA VISUALIZATION':
        return <LineChart className={iconClass} />;
      case 'TOOLS':
        return <Wrench className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden border-t border-cream-200">
      {/* Decorative architectural blur glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-terracotta-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-cream-300/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header (Centered like Three Pillars of Expertise) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-terracotta-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
              SKILLS &amp; CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight">
            Tools I work with.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl font-normal leading-relaxed pt-1">
            A curated stack enabling seamless flow from discovery and user research to component-driven frontend architecture.
          </p>
        </div>

        {/* Skills Category Grid matching Core Capabilities card theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-white/95 hover:bg-white rounded-3xl p-6 sm:p-8 border border-cream-300/90 hover:border-terracotta-400/80 shadow-soft hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between overflow-hidden ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* 1. Ambient terracotta corner glow on hover */}
              <div className="absolute -top-14 -right-14 w-36 h-36 rounded-full bg-terracotta-500/0 group-hover:bg-terracotta-500/15 blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                {/* Card Header: Category badge & Icon Box */}
                <div className="flex items-center justify-between pb-6 border-b border-cream-200/80 relative z-10">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-100 border border-cream-300/80 group-hover:border-terracotta-300/80 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-widest text-charcoal-700 uppercase">
                      Category 0{index + 1}
                    </span>
                  </div>

                  {/* Icon Box with high-contrast hover transformation: icon becomes crisp white on terracotta */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-terracotta-50 border border-terracotta-200/70 text-terracotta-600 group-hover:bg-terracotta-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-terracotta-glow transition-all duration-300 flex items-center justify-center shrink-0">
                    {getSkillCategoryIcon(category.title)}
                  </div>
                </div>

                {/* Title & Animated Accent line */}
                <div className="mt-6 mb-5 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-charcoal-900 tracking-tight group-hover:text-terracotta-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="w-8 h-[2.5px] bg-terracotta-500/30 group-hover:w-14 group-hover:bg-terracotta-500 transition-all duration-300 mt-2 rounded-full" />
                </div>

                {/* Skill Pills as Interactive Pills matching CapabilityCard */}
                <div className="flex flex-wrap gap-2 pt-1 relative z-10">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cream-100/80 hover:bg-white text-charcoal-700 hover:text-charcoal-950 border border-cream-200/90 hover:border-terracotta-300/90 text-xs font-medium transition-all duration-200 shadow-2xs hover:shadow-soft group/item cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cream-400 group-hover/item:bg-terracotta-500 group-hover/item:scale-125 transition-all" />
                      <span className="leading-tight">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent line & Action */}
              <div className="mt-8 pt-5 border-t border-cream-200/80 flex items-center justify-between text-xs font-mono text-charcoal-500 relative z-10">
                <span className="font-medium text-[11px] text-charcoal-400">
                  {category.skills.length} Tools & Technologies
                </span>
                <div className="flex items-center space-x-1 text-terracotta-600 font-bold group-hover:translate-x-1 transition-transform duration-300">
                  <span>Proficient</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
