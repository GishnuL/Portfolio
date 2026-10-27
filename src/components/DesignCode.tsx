import React, { useState } from 'react';
import { Layers, Code2, ArrowRight, Check, Sparkles, Copy, CheckCheck } from 'lucide-react';

export const DesignCode: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'component' | 'tokens'>('component');

  const codeSnippet = `// Reusable Editorial Button Component
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  label: string;
  variant?: 'terracotta' | 'neutral';
  onClick?: () => void;
}

export const ActionButton: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'terracotta',
  onClick 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={
        variant === 'terracotta'
          ? 'bg-[#D95F3F] text-white px-6 py-3 rounded-full font-semibold shadow-soft'
          : 'bg-white border border-[#E9E2D8] text-[#1A1918] px-6 py-3 rounded-full font-medium'
      }
    >
      {label} →
    </motion.button>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-cream-100 relative overflow-hidden border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header (Centered like Three Pillars of Expertise) */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-terracotta-500" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
              DESIGN + CODE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight">
            From pixels → components → products.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl font-normal leading-relaxed pt-1">
            A seamless bridge between high-fidelity Figma systems and production React architecture.
          </p>
        </div>

        {/* Split Visual Comparison Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Design in Figma */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-cream-200">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F24E1E] text-white flex items-center justify-center font-bold text-sm">
                    F
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-charcoal-900">Design in Figma</h3>
                    <span className="text-[10px] font-mono text-charcoal-400">Design Systems & Tokens</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-terracotta-50 text-terracotta-600 px-2.5 py-1 rounded-full border border-terracotta-200">
                  UI Library
                </span>
              </div>

              {/* Figma Features Checklist */}
              <div className="space-y-2">
                {[
                  'Wireframes & User Task Flows',
                  'Design Systems & Auto-Layout',
                  'Reusable Atomic Components',
                  'High-Fi Interactive Prototypes',
                  'Strict Design Tokens (Color, Space, Type)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-charcoal-700 font-medium">
                    <span className="w-4 h-4 rounded-full bg-cream-100 flex items-center justify-center text-terracotta-500 shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Figma UI Preview Mockup */}
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-300/80 space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                  <span>Frame: #Component/Button</span>
                  <span className="text-terracotta-600">Auto Layout 16px</span>
                </div>
                <div className="flex items-center justify-center p-6 bg-white rounded-xl border border-cream-200 shadow-sm">
                  <div className="bg-terracotta-500 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-terracotta-glow flex items-center space-x-2">
                    <span>Primary Action</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-charcoal-400 pt-2 border-t border-cream-100">
              Output: Reusable Figma Component Set
            </div>
          </div>

          {/* Center Connector Indicator */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-terracotta-500 text-white flex items-center justify-center shadow-terracotta-glow animate-pulse">
              <ArrowRight className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-center text-charcoal-600">
              1:1 Handoff
            </span>
          </div>

          {/* Right: Build in React */}
          <div className="lg:col-span-5 bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-elevated text-cream-100 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-700/80">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-terracotta-500 text-white flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-cream-50">Build in React</h3>
                    <span className="text-[10px] font-mono text-charcoal-400">TypeScript & Production Code</span>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 text-cream-100 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors"
                >
                  {copied ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* React Tech Stack Checklist */}
              <div className="space-y-2">
                {[
                  'React.js & Strict TypeScript Interfaces',
                  'Redux Toolkit & REST API Integration',
                  'Modular & Reusable Components',
                  'Responsive CSS Grid & Tailwind Styling',
                  'Fluid Framer Motion Animations',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-charcoal-300 font-medium">
                    <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-terracotta-400 shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Code Snippet Box */}
              <div className="p-3.5 rounded-2xl bg-charcoal-950 border border-white/10 font-mono text-[11px] leading-relaxed overflow-x-auto text-charcoal-300">
                <div className="text-terracotta-400 font-semibold mb-1">// ActionButton.tsx</div>
                <div><span className="text-terracotta-400">export const</span> <span className="text-amber-200">ActionButton</span> = (props) =&gt; &#123;</div>
                <div className="pl-4 text-charcoal-400">return &lt;<span className="text-terracotta-300">button</span> className=<span className="text-amber-300">"bg-[#D95F3F]..."</span>&gt;</div>
                <div className="pl-8 text-cream-200">&#123;props.label&#125; →</div>
                <div className="pl-4 text-charcoal-400">&lt;/<span className="text-terracotta-300">button</span>&gt;;</div>
                <div>&#125;;</div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-charcoal-400 pt-2 border-t border-charcoal-800">
              Output: Production-Ready React / TS Code
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
