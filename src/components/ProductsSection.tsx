import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, HelpCircle, X } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isArtworkOpen, setIsArtworkOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Replaced renderProductSVG with simple image rendering since the user uploaded actual images

  return (
    <section 
      id="products" 
      className="relative min-h-[100dvh] flex flex-col justify-center bg-[#120a07] text-[#FAF6F0] py-16 px-4 overflow-hidden"
    >
      {/* Decorative cloud shapes background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-[20%] right-[10%] w-[120px] h-[120px] rounded-full border border-[#E5D285]/40" />
        <div className="absolute bottom-[30%] left-[5%] w-[180px] h-[180px] rounded-full border border-[#E5D285]/40" />
      </div>

      <div className="max-w-xl mx-auto w-full z-10 flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#E5D285] font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Imperial Woods Museum</span>
          </div>
          <h2 className="text-2xl font-normal tracking-widest text-[#E5D285]">传世作品馆藏</h2>
          <div className="h-0.5 w-12 bg-[#E5D285] mt-2 rounded-full" />
        </div>

        {/* Featured Artwork: Qingming Scroll */}
        <div 
          onClick={() => setIsArtworkOpen(true)}
          className="relative flex-none w-full aspect-[2/1] sm:aspect-[3/1] bg-[#1c120c]/90 border border-[#E5D285]/20 rounded-2xl overflow-hidden cursor-pointer group hover:border-[#E5D285]/60 transition-all duration-500 mb-8 shadow-xl"
        >
          <img 
            src="/清明上河图封面.jpg" 
            alt="清明上河图封面" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 200"><rect fill="%23180F0B" width="400" height="200"/><text fill="%23E5D285" font-family="sans-serif" font-size="16" font-weight="bold" x="50%" y="50%" text-anchor="middle">清明上河图封面上传中</text></svg>';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120a07] via-[#120a07]/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
            <h3 className="text-lg sm:text-2xl font-normal tracking-[0.2em] text-[#E5D285] mb-2">清明上河图</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light tracking-widest">点击沉浸式赏析全卷细节</p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-normal tracking-widest text-[#E5D285]">经典家具大赏</h2>
        </div>

        {/* Horizontal Card Swiper Slider Container */}
        <div className="relative my-auto">
          {/* Swipe gesture helper */}
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-[10px] font-mono text-[#E5D285] tracking-widest bg-[#5E3D20]/40 px-2 py-0.5 rounded border border-[#E5D285]/10 uppercase">
               RESERVE
            </span>
            <span className="text-[9.5px] text-stone-400 tracking-wider">
              左右拖动卡片 ➔
            </span>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#1c120c] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#E5D285]/30 hover:[&::-webkit-scrollbar-thumb]:bg-[#E5D285]/60"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {PRODUCTS.map((prod) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProduct(prod)}
                className="snap-center shrink-0 w-[60vw] sm:w-[240px] bg-[#1c120c]/90 border border-[#E5D285]/20 rounded-2xl flex flex-col cursor-pointer overflow-hidden hover:border-[#E5D285]/40 hover:bg-[#1c120c] transition-all duration-300 shadow-xl"
              >
                {/* Product Schematic Artwork Container */}
                <div className="relative aspect-square w-full bg-stone-950 flex items-center justify-center group border-b border-[#E5D285]/10 overflow-hidden">
                  <img 
                    src={prod.image} 
                    alt={prod.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200"><rect fill="%23180F0B" width="200" height="200"/><text fill="%23E5D285" font-family="sans-serif" font-size="14" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">即将揭晓</text></svg>';
                    }}
                  />
                </div>

                {/* Info Text */}
                <div className="p-4 flex items-center justify-center bg-[#1c120c]">
                  <h3 className="text-sm font-normal tracking-widest text-white text-center">
                    {prod.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Material Dossier Note block */}
        <div className="mt-8 p-3.5 bg-[#1c120c]/50 border border-[#E5D285]/20 rounded-xl flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-[#E5D285]/70 shrink-0 mt-0.5" />
          <p className="text-[10px] text-stone-300 leading-relaxed font-light text-justify">
            雍檀阁古物器皿皆支持定制专属体量尺寸，选用数百年山水林干料，全流程人工研磨，承诺尊享终身榫卯结构性坚固保固。
          </p>
        </div>
      </div>

      {/* Advanced Drawer/Overlay Modal for Product Details & Spec Sheets */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#120a07] border border-[#E5D285]/30 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Header fixed control inside drawer */}
              <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-end z-10 pointer-events-none">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 bg-[#5E3D20]/80 backdrop-blur-md text-[#E5D285] rounded-full transition-colors cursor-pointer pointer-events-auto border border-[#E5D285]/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body content */}
              <div className="p-0 overflow-y-auto max-h-[85vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E5D285]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#E5D285]/40 [&::-webkit-scrollbar-thumb]:rounded-full">
                {/* Visual Block inside modal */}
                <div className="relative aspect-video sm:aspect-[4/3] w-full bg-stone-950 flex items-center justify-center border-b border-[#E5D285]/15">
                   <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200"><rect fill="%23180F0B" width="200" height="200"/><text fill="%23E5D285" font-family="sans-serif" font-size="14" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">图片上传中</text></svg>';
                    }}
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-normal text-[#E5D285] tracking-widest text-center mb-6">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed tracking-wider font-light text-justify">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Artwork Fullscreen Viewer Modal */}
      <AnimatePresence>
        {isArtworkOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0503] z-[60] flex flex-col"
          >
            {/* Header / Controls */}
            <div className="flex items-center justify-between p-4 bg-[#120a07]/80 backdrop-blur-md border-b border-[#E5D285]/20 shadow-lg z-10 shrink-0">
              <div className="flex items-center justify-center gap-3">
                <div className="h-4 w-1 bg-[#E5D285] rounded-full" />
                <h3 className="text-sm sm:text-base font-normal tracking-[0.2em] text-[#E5D285]">
                  《清明上河图》 <span className="hidden sm:inline text-stone-500 text-xs ml-2">左右滑动或滚动拉片观赏</span>
                </h3>
              </div>
              <button
                onClick={() => setIsArtworkOpen(false)}
                className="p-2 bg-[#5E3D20]/40 hover:bg-[#5E3D20]/80 text-[#E5D285] rounded-full transition-colors border border-[#E5D285]/20 flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Canvas for the Long Scroll */}
            <div className="flex-1 overflow-auto relative [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-[#120a07] [&::-webkit-scrollbar-thumb]:bg-[#E5D285]/30 hover:[&::-webkit-scrollbar-thumb]:bg-[#E5D285]/60 [&::-webkit-scrollbar-thumb]:rounded-full p-4" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="min-w-max h-full flex items-center justify-center">
                <img 
                  src="/清明上河图.jpg" 
                  alt="清明上河图完整画卷" 
                  className="h-[60vh] sm:h-[80vh] w-auto object-contain shadow-2xl rounded"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"><rect fill="%23180F0B" width="800" height="400"/><text fill="%23E5D285" font-family="sans-serif" font-size="24" font-weight="bold" x="50%" y="50%" text-anchor="middle">长卷图片上传中</text></svg>';
                  }}
                />
              </div>
            </div>
            {/* Mobile swipe helper */}
            <div className="sm:hidden absolute bottom-4 inset-x-0 text-center pointer-events-none">
                <span className="bg-[#120a07]/60 backdrop-blur text-[#E5D285] px-4 py-2 rounded-full text-xs tracking-widest border border-[#E5D285]/20 shadow-lg">
                  左右拖动或滚动屏幕观赏长卷
                </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

