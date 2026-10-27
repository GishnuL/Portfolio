export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'enterprise' | 'personal' | 'web & mobile';
  categories?: ('web' | 'mobile' | 'enterprise' | 'personal')[];
  role: string;
  technology: string[];
  domain: string;
  image: string;
  features: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  keyScreens?: { title: string; desc: string; type: string }[];
}

export interface Capability {
  number: string;
  title: string;
  iconName: string;
  items: string[];
}

export interface StatItem {
  id?: string;
  value: string;
  label: string;
  sublabel?: string;
  icon?: 'Calendar' | 'Layers' | 'Monitor' | 'Code' | 'Sparkles';
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  type: 'linkedin' | 'github' | 'email';
}

export interface PersonalInfo {
  name: string;
  motto: string;
  roleTags: string[];
  tagline: string;
  heroHeadline: {
    line1: string;
    line2Prefix: string;
    highlightWord: string;
    line2Suffix: string;
  };
  heroBio: string;
  aboutHeading: string;
  aboutBio: string;
  aboutQuote: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  portraitImage: string;
  bannerBgImage: string;
}

export interface EnterpriseDomain {
  id: string;
  name: string;
  icon: string;
  description: string;
  screensCount: number;
}

export interface UIScreenItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  period: string;
  institution: string;
}
