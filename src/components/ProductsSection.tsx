import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, AlertCircle, X, Info } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import GalleryModal from './GalleryModal';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isArtworkOpen, setIsArtworkOpen] = useState(false);
  const [showArtworkInfo, setShowArtworkInfo] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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
          className="relative flex-none w-full aspect-[2/1] sm:aspect-[3/1] bg-[#1c120c]/90 border border-[#E5D285]/20 rounded-2xl overflow-hidden cursor-pointer group hover:border-[#E5D285]/60 transition-all duration-500 mb-6 shadow-xl"
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
        <div className="relative my-auto mb-8">
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

        {/* Gallery Entry Portal */}
        <div 
          onClick={() => setIsGalleryOpen(true)}
          className="relative flex-none w-full aspect-[2/1] sm:aspect-[4/1] bg-[#1c120c] border border-[#E5D285]/40 rounded-2xl overflow-hidden cursor-pointer group hover:border-[#E5D285] transition-all duration-500 shadow-xl"
        >
          {/* Subtle background collage representation */}
          <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-40 group-hover:opacity-60 transition-opacity">
            <img src="/product-1.jpg" className="w-full h-full object-cover" alt="" />
            <img src="/product-2.jpg" className="w-full h-full object-cover" alt="" />
            <img src="/product-3.jpg" className="w-full h-full object-cover" alt="" />
            <img src="/product-4.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute inset-0 bg-[#120a07]/70 group-hover:bg-[#120a07]/50 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-between p-6 sm:p-8">
            <div>
              <h3 className="text-lg sm:text-x1 font-normal tracking-[0.2em] text-[#E5D285] mb-2">全系古典红木家具图鉴</h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light tracking-widest">客厅 / 餐厅 / 书房 / 卧室 · 探索更多作品</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#E5D285] flex items-center justify-center text-[#E5D285] group-hover:bg-[#E5D285] group-hover:text-[#120a07] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </div>

        {/* Footer Material Dossier Note block */}
        <div className="mt-8 p-4 bg-[#E5D285]/10 border border-[#E5D285]/60 rounded-xl flex items-start gap-3 shadow-[0_0_20px_rgba(229,210,133,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5D285]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <AlertCircle className="w-5 h-5 text-[#E5D285] shrink-0 mt-0.5 animate-pulse" />
          <p className="text-[11px] sm:text-xs text-[#E5D285]/90 leading-relaxed font-medium text-justify tracking-widest">
            雍檀阁红木家具支持定制，免费到家测量，我们的专业人员会给出合理设计和摆放意见，并按传统尺规制作，承诺在本公司购入的家具提供终身上门或者到店维修维护服务。
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
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowArtworkInfo(!showArtworkInfo)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300 border flex items-center justify-center gap-1.5 cursor-pointer shadow-lg ${showArtworkInfo ? 'bg-[#E5D285] text-[#120a07] border-[#E5D285]' : 'bg-[#5E3D20]/60 hover:bg-[#5E3D20] text-[#E5D285] border-[#E5D285]/40 hover:border-[#E5D285] hover:shadow-[0_0_15px_rgba(229,210,133,0.3)]'}`}
                >
                  <Info className="w-4 h-4" />
                  <span className="text-[11px] font-mono tracking-widest font-medium whitespace-nowrap">作品信息</span>
                </button>
                <button
                  onClick={() => setIsArtworkOpen(false)}
                  className="p-2 bg-[#5E3D20]/40 hover:bg-[#5E3D20]/80 text-[#E5D285] rounded-full transition-colors border border-[#E5D285]/20 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content area with info panel and scrollable canvas */}
            <div className="flex-1 relative overflow-hidden flex flex-col">
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
              
              {/* Floating Info Panel */}
              <AnimatePresence>
                {showArtworkInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-[500px] max-h-[60vh] bg-[#120a07]/90 backdrop-blur-xl border border-[#E5D285]/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-y-auto p-5 sm:p-6 z-20 pointer-events-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#E5D285]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#E5D285]/40 [&::-webkit-scrollbar-thumb]:rounded-full"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-[#E5D285] font-normal tracking-widest text-sm uppercase">作品简介 / 清明上河图屏风</h4>
                      <button onClick={() => setShowArtworkInfo(false)} className="text-[#E5D285]/70 hover:text-[#E5D285] transition-colors p-1 bg-[#E5D285]/10 rounded-full">
                        <X className="w-3.5 h-3.5"/>
                      </button>
                    </div>
                    <div className="text-stone-300 text-xs leading-relaxed space-y-4 font-light text-justify">
                      <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E5D285]/10">
                        <p><span className="text-stone-500 mr-2">首选材料</span>卢氏黑黄檀 (大叶紫檀)</p>
                        <p><span className="text-stone-500 mr-2">整体长度</span>20.70 米</p>
                        <p><span className="text-stone-500 mr-2">整体宽度</span>0.52 米</p>
                        <p><span className="text-stone-500 mr-2">整体高度</span>1.71 米</p>
                      </div>
                      <p>
                        此屏风由雍檀阁董事长廖扬标先生在1999年开始筹备并亲自监督制作，历经十年在2009年完成第一次制作。第一次完成时，因屏风后面大量文字没有刻上去，耿耿于怀的他在2011年花了两年的时间将其补上。因为他觉得这样的巨作，能经过从北宋时期到现代，近千年的时光，那么多的名人、文人墨客以至皇帝都在上面题字，是对它的一个认可，所以必须刻上！
                      </p>
                      <p>
                        <strong className="font-medium text-[#E5D285] block mb-1">浩繁的制作过程</strong>
                        当时一心只为完成这个作品的他，也没有实际计量过要用多少吨木材才够。不好的就换，不够就买，据他心算，至少估计也得有个三五十吨！制作过程中，由于04年开始红木行业的日益兴旺，行内相传的工艺大师们工资也是每年翻倍的增长，对于白手起家的廖老先生也是压力山大，几乎每年的利润都放在了这幅巨作上。
                      </p>
                      <p>
                        廖老先生亲自开料，到木工，到花工，到打磨抛光，为求达到完美，每一步都从各个部门精挑细选骨干师父来制作。当时整个不到一百人的工厂好像几乎就为了这幅作品而生！
                      </p>
                      <p>
                        该木雕屏风共由九块组成，因某些部位不适合截断，故九块不是统一尺寸，这也是经过深思熟虑的重要决定。雕刻部位选用8公分的厚板来雕刻体显。整幅作品共810多个各色人物，牛、骡、驴等牲畜73匹，车、轿二十多辆，大小船只二十九艘。房屋、桥梁、城楼等各有特色。
                      </p>
                      <p className="text-[#E5D285]/90 italic">
                        "整幅作品采用镂空雕、透雕、浮雕和精微透雕等雕刻技法创作，繁而不杂，层次分明，人物的喧闹声、行船声和流水声都仿佛在耳畔。"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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

      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </section>
  );
}

