import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroStats } from './HeroStats';
import { HeroSocialLinks } from './HeroSocialLinks';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface HeroContentProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <>
      {/* 1. Dynamic Roles */}
      <div className="hero-role" id="hero-role">
        {PERSONAL_INFO.roleTags.map((role, idx) => (
          <React.Fragment key={role}>
            <span>{role}</span>
            {idx < PERSONAL_INFO.roleTags.length - 1 && (
              <span className="role-sep">/</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 2. Editorial Headline with Highlight Accent */}
      <h1 className="hero-title">
        {PERSONAL_INFO.heroHeadline.line1}
        <br />
        {PERSONAL_INFO.heroHeadline.line2Prefix}
        <span className="highlight">{PERSONAL_INFO.heroHeadline.highlightWord}</span>
        {PERSONAL_INFO.heroHeadline.line2Suffix.replace(/\.$/, '')}
        <span className="highlight-dot">.</span>
      </h1>

      {/* 3. Dynamic Bio Description */}
      <p className="hero-description">
        {PERSONAL_INFO.heroBio}
      </p>

      {/* 4. Statistics */}
      <HeroStats />

      {/* 5. CTA Action Buttons */}
      <div className="hero-cta-group">
        <button
          onClick={() => onNavigate('work')}
          className="hero-cta-primary group"
          type="button"
        >
          <span>View My Work</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        <button
          onClick={onOpenContact}
          className="hero-cta-secondary"
          type="button"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#df6940]" />
          <span>Let's Talk</span>
        </button>
      </div>

      {/* 6. Social Links Row */}
      <div className="pt-1">
        <HeroSocialLinks />
      </div>
    </>
  );
};

export default HeroContent;
