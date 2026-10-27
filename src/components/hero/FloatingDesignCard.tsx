import React from "react";
import { motion } from "framer-motion";

interface FloatingDesignCardProps {
  mouseOffset?: { x: number; y: number };
}

export const FloatingDesignCard: React.FC<FloatingDesignCardProps> = ({
  mouseOffset = { x: 0, y: 0 },
}) => {
  return (
    <motion.div
      // animate={{
      //   y: [-4, 4, -4],
      // }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-10 sm:top-36 left-3 sm:left-6 md:left-8 z-30 pointer-events-none"
    >
      <div className="flex items-center space-x-1.5 px-2 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-card border border-white/80">
        {/* Authentic Figma Logo SVG */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
          <svg viewBox="0 0 42 55" className="w-full h-full">
            <path
              fill="#F24E1E"
              transform="translate(46, -10) scale(-1, 1)"
              d="M19 28.5A9.5 9.5 0 0 1 9.5 19 9.5 9.5 0 0 1 19 9.5h9.5v19H19z"
            />{" "}
            <path
              fill="#FF7262"
              d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"
            />
            <path
              fill="#A259FF"
              d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"
            />
            <path
              fill="#1ABCFE"
              d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 0 47.5z"
            />
            <circle fill="#0ACF83" cx="28.5" cy="28.5" r="9.5" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
