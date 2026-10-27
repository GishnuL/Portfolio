import React from 'react';
import { Github, Mail } from 'lucide-react';
import { HERO_SOCIAL_LINKS } from '../../data/portfolioData';

export const HeroSocialLinks: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return <span className="linkedin-badge" aria-hidden="true">in</span>;
      case 'github':
        return <Github className="social-icon-svg w-3.5 h-3.5" aria-hidden="true" />;
      case 'email':
      default:
        return <Mail className="social-icon-svg w-3.5 h-3.5" aria-hidden="true" />;
    }
  };

  return (
    <div className="hero-socials" id="hero-socials">
      {HERO_SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target={link.type !== 'email' ? '_blank' : undefined}
          rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
          className="social-link"
        >
          {getIcon(link.type)}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default HeroSocialLinks;
