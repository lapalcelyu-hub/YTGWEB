import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { BRAND_INFO } from "../data";

interface HeroSectionProps {
  onNextClick: () => void;
}

export default function HeroSection({ onNextClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between items-center text-center bg-[#120a07] text-[#FAF6F0] overflow-hidden pt-20 pb-8 px-6 ruyi-pattern"
    >
      {/* Background Decorative Mesh & Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[5%] w-[85vw] h-[85vw] rounded-full bg-gradient-radial from-[#5E3D20]/25 to-transparent blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-radial from-[#E5D285]/10 to-transparent blur-[120px]" />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[1px] h-[35vh] bg-gradient-to-b from-[#E5D285]/30 via-[#E5D285]/5 to-transparent animate-pulse" />
      </div>

      {/* Brand Aesthetic Logo Container */}
      <div className="w-full flex-1 flex flex-col justify-center items-center z-10 max-w-md mx-auto relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center select-none"
        >
          {/* Container with rich physical plaque texture matching the brand aesthetic */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group border border-[#c2a358]/40 ring-4 ring-[#120a07] flex items-center justify-center bg-[#1c120c]">
            <span className="text-[#E5D285]/20 text-[20px] font-sans absolute">
              阁
            </span>
            <img
              src="/雍檀阁.jpg"
              alt="雍檀阁 Logo"
              className="w-full h-full object-cover relative z-10 transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110"
              referrerPolicy="no-referrer"
            />

            {/* Texture/Sheen overlays to increase richness and physical texture */}
            <div className="absolute inset-0 z-20 pointer-events-none mix-blend-multiply bg-gradient-to-b from-transparent to-[#120a07]/40" />
            <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay bg-gradient-to-tr from-[#5E3D20]/40 via-transparent to-white/30" />
            <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />

            {/* Plaque visual glint animation */}
            <div className="absolute top-[-50%] left-[-80%] z-30 w-16 h-96 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 skew-x-12 group-hover:left-[150%] transition-all duration-1500 ease-in-out pointer-events-none" />
          </div>
        </motion.div>

        {/* Elegant display text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-normal tracking-[0.3em] text-[#E5D285] font-sans text-center"
        >
          {BRAND_INFO.logoText}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[#C8B263] font-mono text-xs tracking-[0.5em] uppercase font-light"
        >
          {BRAND_INFO.manifesto}
        </motion.p>

        {/* Elegant brass dividing line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="h-[1.5px] bg-[#E5D285]/40 my-8"
        />

        {/* Dynamic Brand Intro */}
        <div className="space-y-5 px-3 max-w-[340px]">
          {BRAND_INFO.introParagraphs.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8 + idx * 0.2,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[#FAF6F0] text-[13.5px] leading-relaxed tracking-widest font-light text-justify"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 bg-[#5E3D20]/40 border border-[#E5D285]/30 rounded-full text-[11px] text-[#E5D285] tracking-widest font-mono"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E5D285] animate-pulse" />
          {BRAND_INFO.tagline}
        </motion.div>
      </div>

      {/* Slide down mouse call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.6 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        onClick={onNextClick}
        className="z-10 flex flex-col items-center gap-1 cursor-pointer select-none py-4 group"
      >
        <span className="text-[10px] text-[#FAF6F0]/50 font-mono tracking-[0.3em] uppercase group-hover:text-[#E5D285] transition-colors">
          下滑品鉴
        </span>
        <ChevronDown className="w-5 h-5 text-stone-500 group-hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
}
