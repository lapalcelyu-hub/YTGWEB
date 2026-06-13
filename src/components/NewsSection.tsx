import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, X, Play, Film } from 'lucide-react';
import { NEWS_ITEMS, VIDEO_ITEMS } from '../data';
import { NewsItem, VideoItem } from '../types';

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const renderNewsImage = (item: NewsItem, isDetail: boolean = false) => {
    if (item.image && item.image.endsWith('.jpg')) {
      if (isDetail) {
        return <img src={item.image} alt={item.title} referrerPolicy="no-referrer" className="w-full h-auto max-h-96 object-contain transition-all duration-500" />;
      }
      return <img src={item.image} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-100 transition-all duration-500" />;
    }
    // Existing SVGs...
    if (item.id.includes('news-1')) {
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mortise and Tenon joint technical drafting schema */}
          <rect width="120" height="120" fill="#24130A"/>
          <g stroke="#E5D285" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="25" y="30" width="70" height="20" fill="#5E3D20" fillOpacity="0.4" />
            <path d="M45,30 L45,50 M75,30 L75,50" strokeDasharray="2 1" />
            <rect x="45" y="50" width="30" height="45" fill="#5E3D20" fillOpacity="0.7" />
            <path d="M30,50 L90,50" strokeWidth="1.8" />
            <path d="M60,25 L60,95" strokeOpacity="0.3" strokeDasharray="3 3" />
            <path d="M60,18 L60,28 M56,24 L60,28 L64,24" strokeWidth="1.2" />
          </g>
        </svg>
      );
    } else if (item.id.includes('news-2')) {
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Classical grid screen/window woodwork lattice (花窗格) */}
          <rect width="120" height="120" fill="#24130A"/>
          <g stroke="#E5D285" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.6">
            <rect x="15" y="15" width="90" height="90" strokeWidth="1.5" strokeOpacity="0.9" />
            <rect x="25" y="25" width="70" height="70" />
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
            <circle cx="60" cy="60" r="45" strokeOpacity="0.1" />
            <path d="M40,50 Q60,30 80,50 Q90,70 60,90 Q30,70 40,50 Z" strokeWidth="1" fill="#5E3D20" fillOpacity="0.1" />
            <circle cx="58" cy="52" r="3.5" fill="#E5D285" />
            <circle cx="58" cy="52" r="10" strokeWidth="1.2" />
            <circle cx="58" cy="52" r="16" strokeDasharray="3 2" />
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
          <div className="flex items-end justify-between border-b border-[#E5D285]/20 pb-4">
            <div>
              <h2 className="text-2xl font-normal tracking-widest text-[#E5D285]">随笔与宣传</h2>
              <div className="h-0.5 w-12 bg-[#E5D285] mt-2 rounded-full" />
            </div>
          </div>
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
                <div className="w-20 sm:w-24 h-24 rounded-lg overflow-hidden border border-[#E5D285]/10 bg-stone-950 shrink-0 group-hover:border-[#E5D285]/30 transition-colors">
                  {renderNewsImage(item)}
                </div>
              </motion.div>
            ))}
            
            {VIDEO_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedVideo(item)}
                className="flex flex-col bg-[#120a07]/85 border border-[#E5D285]/20 rounded-xl overflow-hidden cursor-pointer hover:bg-[#120a07] hover:border-[#E5D285]/40 transition-all duration-300 group shadow-lg"
              >
                <div className="relative w-full h-48 bg-black shrink-0 overflow-hidden">
                  <img src={item.thumbnail} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#E5D285]/90 flex items-center justify-center text-[#1c120c] shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium tracking-widest text-[#E5D285] mb-2">{item.title}</h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed tracking-wider line-clamp-3">{item.description}</p>
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

              {/* ... (Existing code for selectedNews logic) ... */}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 text-stone-400 font-mono text-[10px] tracking-widest mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedNews.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedNews.readTime}阅读</span>
                </div>

                <h1 className="text-lg font-normal text-white leading-relaxed tracking-widest mb-4">
                  {selectedNews.title}
                </h1>

                {/* Cover graphic */}
                <div className="w-full rounded-xl overflow-hidden border border-[#E5D285]/10 bg-stone-950 flex flex-col items-center justify-center my-4">
                  {renderNewsImage(selectedNews, true)}
                  {selectedNews.imageCaption && (
                    <div className="text-stone-400 text-xs italic py-2 text-center w-full border-t border-[#E5D285]/10 bg-stone-950/50">
                      {selectedNews.imageCaption}
                    </div>
                  )}
                </div>

                <div className="text-stone-200 text-sm leading-8 tracking-widest font-light space-y-5">
                  {selectedNews.content.split('\n').filter(p => p.trim()).map((p, i) => {
                    const isHeading = 
                      p.includes('听“红木夫人”讲那过去的事情') || 
                      p.includes('红木为什么这么贵？') || 
                      p.includes('日趋奢侈并消亡的红木技艺');

                    if (isHeading) {
                      return (
                        <h3 key={i} className="text-[#E5D285] font-normal text-base mt-8 mb-2 border-l-2 border-[#E5D285] pl-3">
                          {p.trim()}
                        </h3>
                      );
                    }
                    return (
                      <p key={i} className="text-justify pt-1 indent-8">
                        {p.trim()}
                      </p>
                    );
                  })}
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

        {/* Video Player Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/98 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
          >
            <div className="w-full max-w-4xl relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 p-2 bg-[#5E3D20]/50 text-[#E5D285] rounded-full hover:bg-[#5E3D20] transition-colors cursor-pointer z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="bg-black/50 border border-[#E5D285]/20 rounded-xl overflow-hidden shadow-2xl">
                {selectedVideo.videoUrl.includes("player.bilibili.com") ? (
                  <iframe 
                    src={selectedVideo.videoUrl} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    className="w-full h-[500px] md:h-[600px] max-h-[70vh]"
                  ></iframe>
                ) : (
                  <video 
                    src={selectedVideo.videoUrl} 
                    controls 
                    autoPlay 
                    className="w-full h-auto max-h-[70vh]"
                    poster={selectedVideo.thumbnail}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
                
                <div className="p-6 bg-[#120a07]">
                  <h2 className="text-xl font-normal tracking-widest text-[#E5D285] mb-2">{selectedVideo.title}</h2>
                  <p className="text-stone-300 font-light leading-relaxed tracking-wider text-sm">{selectedVideo.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
