import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, X, Users, ArrowUpRight } from "lucide-react";
import { FOUNDERS } from "../data";
import { Founder } from "../types";

export default function FoundersSection() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  const renderFounderIcon = (src: string) => {
    return (
      <img
        src={src}
        alt="Founder"
        className="w-full h-full object-cover object-[center_15%]"
        referrerPolicy="no-referrer"
      />
    );
  };

  return (
    <section
      id="founders"
      className="relative min-h-[100dvh] flex flex-col justify-center bg-[#1c120c] text-[#FAF6F0] py-16 px-4 overflow-hidden ruyi-pattern"
    >
      {/* Decorative lines with warm glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5D285]/20 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5D285]/20 to-transparent" />
      </div>

      <div className="max-w-md mx-auto w-full z-10 flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#E5D285] font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>Founders Profile</span>
          </div>
          <h2 className="text-2xl font-normal tracking-widest text-[#E5D285]">
            匠心始祖与传承
          </h2>
          <div className="h-0.5 w-12 bg-[#E5D285] mt-2 rounded-full" />
        </div>

        {/* Double Column founders side-by-side */}
        <div className="grid grid-cols-2 gap-4 my-auto">
          {FOUNDERS.map((founder) => (
            <motion.div
              key={founder.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFounder(founder)}
              className="group cursor-pointer bg-[#120a07]/85 border border-[#E5D285]/20 rounded-xl p-3 flex flex-col justify-between hover:border-[#E5D285]/50 hover:bg-[#120a07] transition-all duration-300 shadow-lg"
            >
              {/* Photo Box */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-[#E5D285]/10 bg-stone-950 mb-3 group-hover:border-[#E5D285]/40 transition-colors">
                {renderFounderIcon(founder.image)}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent h-1/2" />

                {/* Micro Expand Icon */}
                <span className="absolute top-2 right-2 p-1.5 rounded-full bg-stone-900/80 border border-[#E5D285]/20 text-[#E5D285] group-hover:text-white group-hover:bg-[#5E3D20] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bio Block */}
              <div>
                <span className="text-[9px] font-mono text-[#E5D285] tracking-widest block mb-1">
                  {founder.role.split(" & ")[0] || founder.role}
                </span>
                <h3 className="text-sm font-medium text-white tracking-widest mb-1.5">
                  {founder.name.split(" / ")[0]}
                </h3>
                <p className="text-[11px] text-[#FAF6F0]/70 leading-relaxed tracking-wider line-clamp-5">
                  {founder.bio}
                </p>

                <span className="inline-block mt-3 text-[10px] text-[#E5D285] font-mono tracking-widest group-hover:text-[#FAF6F0] transition-colors">
                  了解详情 →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic quote footer section */}
        <div className="mt-6 p-4 bg-[#120a07]/40 border border-[#E5D285]/20 rounded-xl text-center">
          <p className="text-[11.5px] text-[#E5D285] italic font-light tracking-widest">
            “仿古仿其神，复古不古板。”
          </p>
        </div>
      </div>

      {/* Modern Pop-up / Bottom Sheet Modal of Founder Biographies */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-4"
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="bg-[#120a07] border border-[#E5D285]/30 rounded-t-2xl sm:rounded-2xl w-full max-w-sm h-[75vh] sm:h-auto overflow-y-auto shadow-2xl relative"
            >
              <div className="sticky top-0 right-0 left-0 flex justify-end p-4 bg-[#120a07]/90 backdrop-blur-md border-b border-[#E5D285]/15 z-10">
                <button
                  onClick={() => setSelectedFounder(null)}
                  className="p-1.5 bg-[#5E3D20]/80 hover:bg-[#5E3D20] text-[#E5D285] rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex gap-4 items-start mb-5">
                  {/* Portrait Mini Illustration */}
                  <div className="w-16 h-16 rounded-xl border border-[#E5D285]/20 overflow-hidden shrink-0">
                    {renderFounderIcon(selectedFounder.image)}
                  </div>
                  <div>
                    <h4 className="text-[9px] text-[#E5D285] font-mono tracking-widest uppercase">
                      {selectedFounder.role}
                    </h4>
                    <h3 className="text-lg font-normal text-white tracking-widest mt-1">
                      {selectedFounder.name.split(" / ")[0]}
                    </h3>
                  </div>
                </div>

                {/* Founder Motto Quote element */}
                <div className="relative p-4 bg-[#1c120c] border-l-2 border-[#E5D285] rounded-r-xl mb-6">
                  <Quote className="absolute top-2 right-3 w-8 h-8 text-[#E5D285]/10 rotate-180" />
                  <p className="text-xs text-[#FAF6F0] leading-relaxed font-light italic pr-4 tracking-widest">
                    {selectedFounder.quote}
                  </p>
                </div>

                {/* Long Form Bio Description */}
                <div className="space-y-4">
                  <h4 className="text-[10px] text-[#E5D285] font-mono tracking-widest uppercase border-b border-[#E5D285]/20 pb-1.5">
                    木意生平 / GENESIS & ARTISTRY
                  </h4>
                  <p className="text-[12px] text-[#FAF6F0]/85 leading-relaxed tracking-widest py-1 font-light text-justify">
                    {selectedFounder.detailBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
