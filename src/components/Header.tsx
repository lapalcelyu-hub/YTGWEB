import { useState } from "react";
import { motion } from "motion/react";
import { Menu, ArrowRight } from "lucide-react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const navItems = [
    { id: "hero", label: "品牌理念" },
    { id: "founders", label: "大师传承" },
    { id: "products", label: "古典家具" },
    { id: "news", label: "红木随笔" },
    { id: "contact", label: "品鉴预约" },
  ];

  return (
    <motion.header
      id="brand-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#120a07]/90 backdrop-blur-md border-b border-[#E5D285]/20 px-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div
          onClick={() => onNavClick("hero")}
          className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="relative w-7 h-7 bg-[#1c120c] rounded border border-[#E5D285]/20 flex items-center justify-center overflow-hidden">
            <span className="text-[#E5D285]/50 text-[10px] leading-none absolute">
              阁
            </span>
            <img
              src="/雍檀阁.jpg"
              alt="雍檀阁"
              className="w-full h-full object-cover relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[#E5D285] font-semibold text-base tracking-widest">
            雍檀阁
          </span>
        </div>
        <span className="text-[9px] text-[#E5D285] border border-[#E5D285]/30 rounded px-1.5 py-0.5 bg-[#1C120C]">
          始于1984
        </span>
      </div>

      <nav className="hidden sm:flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={`text-xs tracking-widest transition-all cursor-pointer relative py-1 ${
              activeSection === item.id
                ? "text-[#E5D285] font-medium"
                : "text-stone-300 hover:text-[#E2C79A]"
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E5D285]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavClick("products")}
          className="px-3.5 py-1 bg-[#E5D285] hover:bg-[#d5c275] text-stone-950 text-xs font-medium rounded-full flex items-center gap-1 transition-colors group cursor-pointer"
        >
          赏阅臻品
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.header>
  );
}
