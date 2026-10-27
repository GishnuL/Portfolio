import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Target,
  Lightbulb,
  PenTool,
  CheckCircle,
  Code2,
  ArrowRight,
} from "lucide-react";

const PROCESS_STEPS_DATA = [
  {
    step: "01",
    title: "Understand",
    description: "Users, business goals, constraints.",
    deliverables: [
      "Stakeholder Interviews",
      "Competitor Audit",
      "Requirement Analysis",
    ],
  },
  {
    step: "02",
    title: "Define",
    description: "Journey, IA, user flows.",
    deliverables: [
      "User Personas",
      "Information Architecture",
      "Core Task Flows",
    ],
  },
  {
    step: "03",
    title: "Explore",
    description: "Wireframes, concepts.",
    deliverables: [
      "Low-fi Sketches",
      "Layout Prototypes",
      "Interaction Models",
    ],
  },
  {
    step: "04",
    title: "Design",
    description: "UI design systems, responsive layouts.",
    deliverables: ["High-fi UI Designs", "Design System", "Responsive Layouts"],
  },
  {
    step: "05",
    title: "Validate",
    description: "Feedback, testing, iteration.",
    deliverables: [
      "Usability Testing",
      "Accessibility Audit",
      "Design Iteration",
    ],
  },
  {
    step: "06",
    title: "Build",
    description: "React components, handoff.",
    deliverables: ["Production Code", "Reusable Components", "Project Handoff"],
  },
];

export const DesignProcess: React.FC = () => {
  const getStepIcon = (step: string) => {
    const iconClass = "w-6 h-6 text-[#2F2D2A]";
    switch (step) {
      case "01":
        return <User className={iconClass} strokeWidth={1.8} />;
      case "02":
        return <Target className={iconClass} strokeWidth={1.8} />;
      case "03":
        return <Lightbulb className={iconClass} strokeWidth={1.8} />;
      case "04":
        return <PenTool className={iconClass} strokeWidth={1.8} />;
      case "05":
        return <CheckCircle className={iconClass} strokeWidth={1.8} />;
      case "06":
        return <Code2 className={iconClass} strokeWidth={1.8} />;
      default:
        return <User className={iconClass} strokeWidth={1.8} />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F6F1EA] relative overflow-hidden border-t border-[#EDE5DA]">
      {/* Soft ambient blur glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#F26A21]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-[#EDE5DA]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header - Centered matching "Three Pillars of Expertise" */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-300/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#F26A21]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#5C5854] font-bold">
              MY DESIGN PROCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1918] tracking-tight">
            From problem to product.
          </h2>
          <p className="text-sm sm:text-base text-[#5C5854] max-w-xl font-normal leading-relaxed pt-1">
            A battle-tested 6-step lifecycle transforming ambiguity into
            systematic UI design tokens and clean production React code.
          </p>
        </div>

        {/* 6 Process Cards Grid (Single Row on Desktop with Wavy Connectors) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 xl:gap-4 relative">
          {PROCESS_STEPS_DATA.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-white rounded-[24px] sm:rounded-[26px] p-4 sm:p-5 border border-[#EDE5DA] shadow-[0_8px_24px_-4px_rgba(40,30,20,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(242,106,33,0.12)] hover:border-[#F26A21]/50 hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* <div className="absolute -top-0 -right-0 w-16 h-16 rounded-full bg-terracotta-500/0 group-hover:bg-terracotta-500/15 blur-3xl transition-all duration-500 pointer-events-none" /> */}
              {/* Wavy Orange Connector Bridge (Between Adjacent Cards on Desktop) */}
              {index < PROCESS_STEPS_DATA.length - 1 && (
                <div className="hidden xl:block absolute top-[24px] -right-[22px] w-[24px] h-[28px] pointer-events-none z-20">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 24 28"
                    fill="none"
                  >
                    <path
                      d="M 0 14 C 16 14, 12 54, 24 44"
                      stroke="#F26A21"
                      strokeWidth="1.75"
                    />
                    <circle
                      cx="0"
                      cy="14"
                      r="3"
                      fill="#F6F1EA"
                      stroke="#F26A21"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="24"
                      cy="44"
                      r="3"
                      fill="#F6F1EA"
                      stroke="#F26A21"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              )}

              <div>
                {/* Top Notch: Phase Number Pill on Left */}
                <div className="flex items-start justify-between absolute left-0 top-0">
                  <div className="w-12 h-9 rounded-[26px_0px_20px_0px] bg-[#FFF0E6] text-[#F26A21] font-bold text-sm sm:text-base flex items-center justify-center font-mono shadow-2xs">
                    {step.step}
                  </div>
                </div>

                {/* Centered Circular Icon on Pale Peach Background */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFF0E6] flex items-center justify-center mx-auto mt-2 mb-3 shadow-2xs group-hover:scale-105 group-hover:bg-[#FFE8D9] transition-all duration-300">
                  {getStepIcon(step.step)}
                </div>

                {/* Centered Phase Title */}
                <h3 className="text-center font-extrabold text-lg sm:text-xl text-[#1A1918] tracking-tight group-hover:text-[#F26A21] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Subtle Orange Underline */}
                <div className="w-7 h-[2px] bg-[#F26A21] mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300" />

                {/* Centered Short Description */}
                <p className="text-center text-xs text-[#5C5854] font-normal leading-relaxed mt-2 min-h-[34px]">
                  {step.description}
                </p>

                {/* Uppercase DELIVERABLES Label */}
                <div className="mt-5 mb-2.5">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#8C8680] block text-left">
                    DELIVERABLES
                  </span>
                </div>

                {/* 3 Deliverable Pills with Orange Dot */}
                <div className="space-y-1.5">
                  {step.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#EDE5DA] text-[#2F2D2A] text-[11px] font-medium leading-tight group-hover/item:border-[#F26A21]/40 group-hover/item:bg-white transition-all cursor-default group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F26A21] shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="truncate" title={item}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: 3 Items on Left, Right Arrow on Right */}
              <div className="mt-5 pt-3 border-t border-[#EDE5DA] flex items-center justify-between text-xs font-mono text-[#8C8680]">
                <span className="text-[11px] font-medium text-[#5C5854]">
                  {step.deliverables.length} Items
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F26A21] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer aligned to card container */}
        <div className="mt-14 pt-6 border-t border-[#EDE5DA] flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[#5C5854]">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F26A21]" />
            <span className="font-bold text-[#2F2D2A]">
              A CLEAR PROCESS. BETTER PRODUCTS.
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F26A21]" />
            <span className="w-2 h-2 rounded-full bg-[#F26A21]" />
            <span className="w-2 h-2 rounded-full bg-[#F26A21]" />
          </div>
        </div>
      </div>
    </section>
  );
};
