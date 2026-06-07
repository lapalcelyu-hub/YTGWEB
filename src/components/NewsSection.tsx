import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, X, Globe } from 'lucide-react';
import { NEWS_ITEMS } from '../data';
import { NewsItem } from '../types';

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Exquisite custom vector schemas representing woodwork, wood grain, or classical Chinese carpentry structure
  const renderNewsSVG = (id: string) => {
    // Treat based on ID or containing sub-strings to prevent ID mismatch
    if (id.includes('news-1')) {
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mortise and Tenon joint technical drafting schema */}
          <rect width="120" height="120" fill="#24130A"/>
          <g stroke="#E5D285" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Top mortise beam */}
            <rect x="25" y="30" width="70" height="20" fill="#5E3D20" fillOpacity="0.4" />
            <path d="M45,30 L45,50 M75,30 L75,50" strokeDasharray="2 1" />
            {/* Bottom tenon post */}
            <rect x="45" y="50" width="30" height="45" fill="#5E3D20" fillOpacity="0.7" />
            {/* Connection wedge line indicator */}
            <path d="M30,50 L90,50" strokeWidth="1.8" />
            <path d="M60,25 L60,95" strokeOpacity="0.3" strokeDasharray="3 3" />
            {/* Arrow indicators showing insert direction */}
            <path d="M60,18 L60,28 M56,24 L60,28 L64,24" strokeWidth="1.2" />
          </g>
        </svg>
      );
    } else if (id.includes('news-2')) {
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Classical grid screen/window woodwork lattice (花窗格) */}
          <rect width="120" height="120" fill="#24130A"/>
          <g stroke="#E5D285" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.6">
            <rect x="15" y="15" width="90" height="90" strokeWidth="1.5" strokeOpacity="0.9" />
            <rect x="25" y="25" width="70" height="70" />
            {/* Traditional cross lines with diamond intersecting centers */}
            <line x1="60" y1="15" x2="60" y2="105" strokeWidth="1" />
            <line x1="15" y1="60" x2="105" y2="60" strokeWidth="1" />
            <path d="M60,40 L80,60 L60,80 L40,60 Z" />
            <circle cx="60" cy="60" r="10" strokeDasharray="2 1" />
          </g>
        </svg>
      );
    } else {
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Natural high-end wood growth ring grains (Ghost eyes spirals) */}
          <rect width="120" height="120" fill="#24130A"/>
          <g stroke="#E5D285" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.7">
            {/* Swirling rings representing Huali oil grain */}
            <circle cx="60" cy="60" r="45" strokeOpacity="0.1" />
            <path d="M40,50 Q60,30 80,50 Q90,70 60,90 Q30,70 40,50 Z" strokeWidth="1" fill="#5E3D20" fillOpacity="0.1" />
            {/* Ghost eye concentric focal dots */}
            <circle cx="58" cy="52" r="3.5" fill="#E5D285" />
            <circle cx="58" cy="52" r="10" strokeWidth="1.2" />
            <circle cx="58" cy="52" r="16" strokeDasharray="3 2" />
            {/* Random companion waviness */}
            <path d="M15,80 Q50,65 105,80" />
            <path d="M15,90 Q50,75 105,90" />
            <path d="M15,100 Q50,85 105,100" />
          </g>
        </svg>
      );
    }
  };

  return (
    <section 
      id="news" 
      className="relative min-h-[100dvh] flex flex-col justify-center bg-[#1c120c] text-[#FAF6F0] py-16 px-4 overflow-hidden ruyi-pattern"
    >
      <div className="max-w-md mx-auto w-full z-10 flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#E5D285] font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Journal & Chronicles</span>
          </div>
          <h2 className="text-2xl font-normal tracking-widest text-[#E5D285]">木作学堂随笔</h2>
          <div className="h-0.5 w-12 bg-[#E5D285] mt-2 rounded-full" />
        </div>

        {/* Stories list columns (Layout: left title, right image) */}
        <div className="space-y-4 my-auto">
          {NEWS_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedNews(item)}
              className="flex gap-4 items-center bg-[#120a07]/85 border border-[#E5D285]/20 rounded-xl p-3 cursor-pointer hover:bg-[#120a07] hover:border-[#E5D285]/40 transition-all duration-300 group shadow-lg"
            >
              {/* Left Side: Text Titles & Specs */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-mono text-[#E5D285] tracking-widest px-2 py-0.5 rounded border border-[#E5D285]/15 bg-[#5E3D20]/40">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-mono text-stone-400 tracking-wider">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-[13px] font-medium tracking-widest text-white leading-snug line-clamp-2 group-hover:text-[#E5D285] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[11px] text-stone-300 font-light mt-1.5 leading-normal line-clamp-2 text-justify">
                  {item.snippet}
                </p>

                <div className="flex items-center gap-1.5 mt-2.5 text-[9px] text-stone-400 font-mono tracking-wider">
                  <Clock className="w-3 h-3" />
                  <span>{item.readTime} 品赏</span>
                </div>
              </div>

              {/* Right Side: Design Portrait Illustration */}
              <div className="w-20 sm:w-24 aspect-square rounded-lg overflow-hidden border border-[#E5D285]/10 bg-stone-950 shrink-0 group-hover:border-[#E5D285]/30 transition-colors">
                {renderNewsSVG(item.id)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global info stamp */}
        <div className="mt-6 text-center border-t border-[#E5D285]/15 pt-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] text-[#FAF6F0]/60 font-mono tracking-widest">
            雍檀阁古典木艺期刊 • 持续发表中国古典家具造物理论
          </span>
        </div>
      </div>

      {/* Full Article Reader Modal Overlay */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.article
              initial={{ y: "8%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "8%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="bg-[#120a07] border border-[#E5D285]/30 rounded-2xl w-full max-w-sm h-[85vh] overflow-y-auto shadow-2xl relative flex flex-col justify-between"
            >
              {/* Header fixed */}
              <div className="sticky top-0 bg-[#120a07]/95 backdrop-blur-md border-b border-[#E5D285]/15 p-4 flex items-center justify-between z-10">
                <span className="text-[10px] font-mono text-[#E5D285] tracking-widest uppercase">
                  YONGTANGE • JOURNAL / {selectedNews.category}
                </span>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-1.5 bg-[#5E3D20] text-[#E5D285] rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Article Content */}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 text-stone-400 font-mono text-[10px] tracking-widest mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedNews.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedNews.readTime}阅读</span>
                </div>

                <h1 className="text-lg font-normal text-white leading-relaxed tracking-widest mb-4">
                  {selectedNews.title}
                </h1>

                {/* Cover graphic */}
                <div className="w-full h-36 rounded-xl overflow-hidden border border-[#E5D285]/10 bg-stone-950 flex items-center justify-center my-4">
                  {renderNewsSVG(selectedNews.id)}
                </div>

                <div className="text-stone-200 text-[12px] leading-relaxed tracking-widest font-light space-y-4">
                  {/* Explaining text split by indentation and beautiful paragraphs */}
                  {selectedNews.content.split(' ').map((p, i) => (
                    <p key={i} className="text-justify pt-1 text-xs">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-[#1c120c] border-[#E5D285]/15 border-t text-center">
                <span className="text-[10px] text-[#E5D285] font-mono tracking-widest">
                  — 雍檀阁非遗榫卯传习研究所 出品 —
                </span>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
