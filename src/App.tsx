import React, { useState, useEffect } from 'react';
import { HeroNavbar } from './components/hero/HeroNavbar';
import { HeroSection } from './components/hero/HeroSection';
import { About } from './components/About';
import { ExperienceNumbers } from './components/ExperienceNumbers';
import { SelectedWork } from './components/SelectedWork';
import { EnterpriseSection } from './components/EnterpriseSection';
import { UIScreensShowcase } from './components/UIScreensShowcase';
import { DesignProcess } from './components/DesignProcess';
import { DesignCode } from './components/DesignCode';
import { Cinematography } from './components/Cinematography';
import { Skills } from './components/Skills';
import { Philosophy } from './components/Philosophy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Scroll spy to update active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-900 font-sans selection:bg-terracotta-500 selection:text-white relative">
      
      {/* Navbar */}
      <HeroNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Sections Flow */}
      <main>
        {/* 1. Hero / Banner Section */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* 2. About Section + 3 Core Capabilities */}
        <About onNavigate={handleNavigate} />

        {/* 3. Numbers that reflect journey */}
        <ExperienceNumbers />

        {/* 4. Selected Work (Thalam 360, Red Fort Resort, etc.) */}
        <SelectedWork />

        {/* 5. Enterprise Product Design (Circular Node Architecture) */}
        <EnterpriseSection onExploreWork={() => handleNavigate('work')} />

        {/* 6. Enterprise UI Showcase (300+ Responsive Screens) */}
        <UIScreensShowcase />

        {/* 7. Design Process (01 Understand -> 06 Build) */}
        <DesignProcess />

        {/* 8. Design + Code (Figma -> React) */}
        <DesignCode />

        {/* 9. Cinematography (Visual Storytelling) */}
        <Cinematography />

        {/* 10. Skills (Tools I work with) */}
        <Skills />

        {/* 11. Personal Philosophy */}
        <Philosophy />

        {/* 12. Contact Section */}
        <ContactSection onOpenContactModal={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
};

export default App;
