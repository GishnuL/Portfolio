import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Menu, X, ArrowDownRight } from 'lucide-react';

interface HeroNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const HeroNavbar: React.FC<HeroNavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'work', label: 'WORK' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Measure current header height or fallback to 70px
      const headerHeight = headerRef.current?.offsetHeight || 70;

      // Dark sections: IMPACT IN NUMBERS (#experience) & CINEMATOGRAPHY (#cinematography)
      const darkElements = [
        document.getElementById('experience'),
        document.getElementById('cinematography'),
        ...Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]')),
      ].filter((el, index, self): el is HTMLElement => Boolean(el) && self.indexOf(el) === index);

      // Overlap condition: section top has reached or passed bottom of navbar,
      // and section bottom has not yet scrolled past top of viewport
      const overDark = darkElements.some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= headerHeight && rect.bottom >= 0;
      });

      setIsOverDarkSection(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    const timeout = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F2E9]/94 backdrop-blur-md py-3 border-b border-cream-300/70 shadow-soft'
          : 'bg-[#F7F2E9] py-3.5 sm:py-4'
      }`}
      style={
        isOverDarkSection
          ? { backgroundColor: 'rgb(246 241 234)' }
          : undefined
      }
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: GISHNU L (Spaced uppercase typography) */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group text-left focus:outline-none flex items-center space-x-2 select-none"
        >
          <span className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[2px] text-[#101820] group-hover:text-[#D95F3F] transition-colors uppercase">
            {PERSONAL_INFO.name}
          </span>
          <span className="w-3 sm:w-4 h-[2px] bg-[#101820] group-hover:bg-[#D95F3F] transition-colors inline-block" />
        </button>

        {/* Center / Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cream-300/80 shadow-soft">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id.toLowerCase();
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id.toLowerCase())}
                className={`relative px-3 py-1 text-[11px] lg:text-xs font-mono font-semibold tracking-wider transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-[#101820] font-bold'
                    : 'text-[#5F6368] hover:text-[#101820] hover:bg-cream-200/50'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-[2px] bg-[#D95F3F] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Tagline & Resume CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative group select-none">
            <span className="text-[10.5px] lg:text-[11px] font-mono font-semibold tracking-widest text-[#5F6368] uppercase">
              {PERSONAL_INFO.motto}
            </span>
            <div className="absolute -bottom-0.5 right-0 w-6 h-[2px] bg-[#D95F3F] rounded-full" />
          </div>

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onOpenResume) {
                e.preventDefault();
                onOpenResume();
              }
            }}
            className="inline-flex items-center space-x-1.5 bg-[#101820] hover:bg-[#D95F3F] text-cream-50 text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-terracotta-glow group"
          >
            <span>Resume</span>
            <ArrowDownRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-xl bg-white/90 border border-cream-300 text-[#101820] focus:outline-none shadow-soft"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F2E9]/98 backdrop-blur-xl border-b border-cream-300 px-5 py-5 space-y-3.5 shadow-elevated animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id.toLowerCase())}
                className={`text-left px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                  activeSection === link.id.toLowerCase()
                    ? 'bg-terracotta-50 text-[#D95F3F] border border-terracotta-200'
                    : 'text-charcoal-700 hover:bg-cream-200/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2.5 border-t border-cream-200 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-[#5F6368] uppercase">
              {PERSONAL_INFO.motto}
            </span>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onOpenResume) {
                  e.preventDefault();
                  onOpenResume();
                }
              }}
              className="inline-flex items-center space-x-1.5 bg-[#101820] text-cream-50 text-xs font-medium px-3.5 py-1.5 rounded-full"
            >
              <span>Resume</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
