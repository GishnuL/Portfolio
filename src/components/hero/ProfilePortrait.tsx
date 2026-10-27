import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ProfilePortraitProps {
  mouseOffset?: { x: number; y: number };
}

export const ProfilePortrait: React.FC<ProfilePortraitProps> = ({
  mouseOffset = { x: 0, y: 0 },
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center sm:justify-center sm:pr-6 md:pr-10 lg:pr-12 xl:pr-14 pointer-events-none select-none ">
      
      {/* 1. Large Terracotta Circle Backdrop (Anchored behind the upper body) */}
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
        }}
        className="absolute top-[40%] sm:top-[30%] right-[14%] sm:right-[4%] md:right-[14%] lg:right-[28%] -translate-y-1/2 w-50 h-50 sm:w-55 sm:h-55 md:w-66 md:h-66 lg:w-[290px] lg:h-[290px] xl:w-[330px] xl:h-[330px] rounded-full bg-[#D95F3F] opacity-90 shadow-2xl shadow-terracotta-900/20 z-10"
      />

      {/* 2. Handwritten Message: "Better UI Better Impact" (Caveat font, old style layout, reduced size) */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 5.5,  
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-6 sm:top-10 md:top-12 right-[16%] sm:right-[22%] md:right-[26%] lg:right-[30%] z-30 font-handwriting font-caveat font-['Caveat'] select-none text-left pointer-events-none"
      >
        <div className="leading-[1.05]">
          <span className="block text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#101820]">
            Better
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#D95F3F] pl-2">
            UI
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#101820]">
            Better
          </span>
          <span className="relative inline-block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#D95F3F]">
            Impact
            <span className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-[#D95F3F] rounded-full" />
          </span>
        </div>
      </motion.div>

      {/* 3. Gishnu's Real Portrait Cutout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="relative z-20 w-[180px] z-40 sm:w-[250px] md:w-[360px] lg:w-[450px] xl:w-[500px] max-h-[82vh] sm:max-h-[85vh] lg:max-h-[88vh] flex flex-col items-center justify-end"
      >
        {/* Soft shadow on podium */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-8 sm:h-10 bg-charcoal-900/35 blur-xl rounded-full" />

        {/* Real Profile Photo Cutout — PNG has transparent background */}
        <img
          src={PERSONAL_INFO.portraitImage}
          alt="Gishnu L — Product Designer and Frontend Developer"
          className="w-full h-auto max-h-[75vh] sm:max-h-[80vh] lg:max-h-[85vh] object-contain object-bottom drop-shadow-2xl filter contrast-[1.04] brightness-[1.02] saturate-[1.05]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 98%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 98%, transparent 100%)',
          }}
        />
      </motion.div>

    </div>
  );
};
