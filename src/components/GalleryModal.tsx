import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, LayoutGrid, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryCategory, GalleryItem } from '../types';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('全部');
  const [enlargedImage, setEnlargedImage] = useState<GalleryItem | null>(null);

  const categories: GalleryCategory[] = ['全部', '客厅沙发', '餐厅饭桌', '书房', '卧室'];
  
  const filteredItems = activeCategory === '全部' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0a0503] z-[70] flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-[#120a07] border-b border-[#E5D285]/20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <LayoutGrid className="w-5 h-5 text-[#E5D285]" />
              <h3 className="text-sm sm:text-base font-normal tracking-[0.2em] text-[#E5D285]">
                经典红木家具图鉴
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-[#5E3D20]/40 hover:bg-[#5E3D20]/80 text-[#E5D285] rounded-full transition-colors border border-[#E5D285]/20 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Categories Nav */}
          <div className="bg-[#1c120c] border-b border-[#E5D285]/10 overflow-x-auto [&::-webkit-scrollbar]:hidden flex-none">
            <div className="flex px-4 py-3 gap-6 sm:justify-center min-w-max">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm tracking-widest transition-colors relative px-2 py-1 ${
                    activeCategory === cat ? 'text-[#E5D285]' : 'text-stone-400 hover:text-stone-300'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="gallery-tab"
                      className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#E5D285] rounded-t-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#120a07] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E5D285]/20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map(item => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className="group cursor-pointer flex flex-col gap-3"
                    onClick={() => setEnlargedImage(item)}
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-900 border border-[#E5D285]/10 shadow-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200"><rect fill="%23180F0B" width="200" height="200"/><text fill="%23E5D285" font-family="sans-serif" font-size="12" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">图片上传中</text></svg>';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-[#E5D285]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {filteredItems.length === 0 && (
              <div className="flex flex-col items-center justify-center h-40 text-stone-500 text-sm tracking-widest gap-2">
                <p>该分类下暂无展示图片</p>
              </div>
            )}
          </div>

          {/* Image Lightbox */}
          <AnimatePresence>
            {enlargedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setEnlargedImage(null)}
                className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 cursor-zoom-out"
              >
                <div className="absolute top-6 right-6 z-10">
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-colors">
                    <X className="w-6 h-6"/>
                  </button>
                </div>
                
                <motion.img
                  layoutId={`img-${enlargedImage.id}`}
                  src={enlargedImage.image}
                  alt={enlargedImage.name}
                  className="max-w-full max-h-[85vh] object-contain rounded drop-shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
