import React from "react";
import { PHILOSOPHY } from "../data/portfolioData";
import { Sparkles } from "lucide-react";

export const Philosophy: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-cream-100 relative overflow-hidden border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-cream-300 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-terracotta-500" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-bold">
                PERSONAL PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-900 leading-tight">
              {PHILOSOPHY.heading}
            </h2>

            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl font-normal">
              "{PHILOSOPHY.text}"
            </p>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="h-[3px] w-12 sm:w-14 shrink-0 bg-[#F26A21] rounded-full" />
                <span className="font-handwriting text-2xl sm:text-[26px] font-bold text-[#242424] whitespace-nowrap">
                  Craft with purpose &amp; heart
                </span>
              </div>

              <span className="hidden sm:block h-12 w-px bg-[#D8D3CB]" />

              <img
                src="/images/gishnu-signature.png"
                alt="Gishnu L signature"
                className="w-28 sm:w-32 h-auto object-contain"
              />
            </div>
          </div>

          {/* Architectural Sculpture Miniature Visual Column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-6 rounded-3xl bg-cream-50 border border-cream-200 shadow-soft text-center space-y-4 max-w-xs w-full">
              {/* Miniature Arch & Terracotta Sphere Graphic */}
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                {/* Minimal Arch Wireframe */}
                <div className="w-32 h-36 rounded-t-full border-4 border-cream-300 bg-white/60 relative overflow-hidden flex items-end justify-center shadow-inner">
                  {/* Floating terracotta ball */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 shadow-terracotta-glow mb-4 animate-bounce" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-charcoal-900 block font-mono">
                  Continuous Craft
                </span>
                <span className="text-[11px] text-charcoal-500 block">
                  Form + Function + Polish
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
