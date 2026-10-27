import React from 'react';
import { Calendar, Layers, Monitor, Code2 } from 'lucide-react';
import { HERO_STATS } from '../../data/portfolioData';

export const HeroStats: React.FC = () => {
  const getStatIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Monitor':
        return <Monitor className="w-4 h-4" />;
      case 'Code':
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="hero-stats" id="hero-stats">
      {HERO_STATS.map((stat, index) => (
        <div key={stat.id || index} className="stat">
          <div className="stat-icon" aria-hidden="true">
            {getStatIcon(stat.icon)}
          </div>
          <div className="stat-info">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
