import React, { useEffect } from 'react';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_NUMBERS, EDUCATION_DATA } from '../data/portfolioData';
import { X, FileDown, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-cream-300 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-cream-100/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-cream-300 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta-600 bg-terracotta-50 px-2.5 py-1 rounded-full border border-terracotta-200">
              Curriculum Vitae
            </span>
            <h3 className="text-lg font-bold text-charcoal-900">
              Gishnu L — Resume
            </h3>
          </div>

          <div className="flex items-center space-x-2.5">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Gishnu_L_Resume.pdf"
              className="inline-flex items-center space-x-1.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-terracotta-glow group"
            >
              <FileDown className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center space-x-1 bg-white hover:bg-cream-100 text-charcoal-700 text-xs font-semibold px-3 py-2 rounded-full border border-cream-300 transition-all shadow-2xs"
            >
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white hover:bg-cream-200 border border-cream-300 text-charcoal-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-cream-50/50">
          
          {/* Header Summary */}
          <div className="border-b border-cream-300 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-black text-charcoal-900 tracking-tight">GISHNU L</h1>
              <span className="text-sm font-bold text-terracotta-600 font-mono">Product Designer | UI/UX Designer | Frontend Developer (React.js)</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl leading-relaxed">
              Product Designer and Frontend Developer / Frontend Engineer (React.js) with 2 years of experience across the full product design and development lifecycle — user research, wireframing, prototyping, UI/UX design, design systems, and scalable frontend engineering. Skilled in building responsive, accessible, enterprise SaaS applications using React.js, TypeScript, Redux, and REST APIs, alongside user-centered design practices in Figma. Contributed to 14+ enterprise applications across Healthcare, ERP, CRM, Inventory, Warranty, License, and Timesheet Management domains, designing and developing 300+ responsive UI screens.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-charcoal-500 font-mono pt-1">
              <span className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-terracotta-500" /> {PERSONAL_INFO.email}</span>
              {PERSONAL_INFO.phone && (
                <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-terracotta-500" /> {PERSONAL_INFO.phone}</span>
              )}
              {PERSONAL_INFO.location && (
                <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-terracotta-500" /> {PERSONAL_INFO.location}</span>
              )}
              <span className="flex items-center gap-1.5"><Briefcase className="w-3 h-3 text-terracotta-500" /> 2 Years Experience</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-terracotta-500" /> Available for Roles</span>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 font-bold">
              Work Experience - 2 Years
            </h2>
            
            <div className="space-y-6">
              {/* UI/UX Designer */}
              <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-soft space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-charcoal-900">
                    UI/UX Designer
                  </h3>
                  <span className="text-xs font-mono text-terracotta-600 font-semibold">Tiara Software Consulting</span>
                </div>
                <p className="text-xs text-charcoal-500 font-medium">Enterprise SaaS Applications • Web & Mobile Platforms</p>
                <ul className="space-y-1.5 text-xs text-charcoal-600 pt-2 list-disc list-inside">
                  <li>Led user research, user journey mapping, and information architecture to translate complex business requirements into clear, scalable user experiences.</li>
                  <li>Created Lo-Fi and Hi-Fi wireframes and interactive prototypes in Figma, iterating designs based on stakeholder feedback and usability testing.</li>
                  <li>Built and maintained scalable design systems and design tokens to ensure visual and functional consistency across 14+ enterprise applications.</li>
                  <li>Applied accessibility (WCAG) standards and mobile-first, responsive design principles across dashboard and SaaS product design work.</li>
                  <li>Collaborated closely with cross-functional engineering, product, and QA teams in Agile/Scrum sprints to ship features end-to-end.</li>
                </ul>
              </div>

              {/* Frontend Developer */}
              <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-soft space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-charcoal-900">
                    Frontend Developer
                  </h3>
                  <span className="text-xs font-mono text-terracotta-600 font-semibold">Tiara Software Consulting</span>
                </div>
                <p className="text-xs text-charcoal-500 font-medium">React.js, TypeScript, Material UI, Tailwind CSS & Redux</p>
                <ul className="space-y-1.5 text-xs text-charcoal-600 pt-2 list-disc list-inside">
                  <li>Developed reusable, component-driven UI using React.js, TypeScript, Material UI, Tailwind CSS, and Bootstrap, maintaining design consistency at scale.</li>
                  <li>Built and integrated REST APIs using Axios to power dynamic, data-driven dashboards and workflow management modules.</li>
                  <li>Implemented client-side routing and state management using React Router and Redux for enterprise-grade SaaS applications.</li>
                  <li>Designed and developed 300+ responsive, cross-browser compatible UI screens across Healthcare, ERP, CRM, Inventory, Warranty, and License Management applications.</li>
                  <li>Built analytics and reporting interfaces using Apache ECharts, Recharts, and Nivo Charts, improving data visibility for end users.</li>
                  <li>Used Git/GitHub for version control and Vite/Webpack/npm for build tooling within a collaborative, Agile development workflow.</li>
                </ul>
              </div>

              {/* Additional Experience: Cinematographer */}
              <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-soft space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-charcoal-900">
                    Cinematographer - IPL Broadcasting Team
                  </h3>
                  <span className="text-xs font-mono text-terracotta-600 font-semibold">Isha Foundation • Coimbatore, Tamil Nadu</span>
                </div>
                <p className="text-xs text-charcoal-500 font-medium">Live Broadcast Team • Mahashivratri & Gramotsavam</p>
                <ul className="space-y-1.5 text-xs text-charcoal-600 pt-2 list-disc list-inside">
                  <li>Covered visual production for major events such as Mahashivratri and Gramotsavam as part of the IPL broadcasting team.</li>
                  <li>Shot and produced diverse content formats including video series, songs, reels, promotional videos, creative shoots, and vlogs.</li>
                  <li>Captured interview segments, conducting and recording conversations with a wide range of people as part of event and content production.</li>
                  <li>Applied strong composition, framing, lighting, and visual storytelling skills that translate directly into UI/UX visual hierarchy and audience-attention design.</li>
                  <li>Additional roles: Training Instructor (technical concepts communication) & Video Editor (structured storytelling and sequencing).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Production Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 font-bold">
              Featured Production Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-soft space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-charcoal-900">THALAM 360</h3>
                  <a
                    href="https://thalam360.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-terracotta-600 hover:text-terracotta-700"
                  >
                    <span>thalam360.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-terracotta-600 block">
                  Web Application & Mobile App
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Studio CRM platform built with React, TypeScript & Tailwind CSS for calendars, enquiry tracking, automated invoicing, and field operations.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-soft space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-charcoal-900">Red Fort Resort</h3>
                  <a
                    href="https://www.redfortresort.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-terracotta-600 hover:text-terracotta-700"
                  >
                    <span>redfortresort.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-terracotta-600 block">
                  Luxury Resort & Booking Platform
                </span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Heritage retreat marketing and booking website built with React, responsive SEO architecture, and image galleries.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 font-bold flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Education</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-cream-300 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-charcoal-900">{edu.degree}</h3>
                    <span className="text-[10px] font-mono text-terracotta-600 font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-[11px] text-charcoal-500">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-charcoal-400 font-bold">
              Core Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.title} className="bg-white p-4 rounded-xl border border-cream-200 space-y-1.5">
                  <span className="text-[11px] font-mono font-bold text-terracotta-600 block">{cat.title}</span>
                  <p className="text-xs text-charcoal-700 leading-relaxed">
                    {cat.skills.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
