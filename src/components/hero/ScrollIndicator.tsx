import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mouse } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out as user scrolls down past 60px
      if (window.scrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 12, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 12, x: '-50%', transition: { duration: 0.25 } }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="fixed bottom-4 left-1/2 z-40 inline-flex items-center space-x-2 text-xs font-medium text-charcoal-500 hover:text-charcoal-800 transition-colors cursor-pointer select-none px-3.5 py-1.5 rounded-full bg-[#F7F2E9]/90 backdrop-blur-md border border-cream-300/80 shadow-soft"
          onClick={() => {
            const aboutEl = document.getElementById('about');
            if (aboutEl) {
              aboutEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mouse className="w-3.5 h-3.5 text-[#D95F3F]" />
          </motion.div>
          <span className="tracking-wide text-charcoal-700">Scroll to explore</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
