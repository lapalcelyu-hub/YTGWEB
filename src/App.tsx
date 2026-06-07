import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FoundersSection from './components/FoundersSection';
import ProductsSection from './components/ProductsSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Read scroll progress for top status bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = ['hero', 'founders', 'products', 'news', 'contact'];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Monitor scrolling to highlight correct headers & show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll-to-top button visibility
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Setup high-fidelity Intersection Observer to auto-update dots and navigation
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Center active window bias
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectId) => {
      const el = document.getElementById(sectId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((sectId) => {
        const el = document.getElementById(sectId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div id="brand-spa" className="bg-[#120a07] text-[#FAF6F0] min-h-screen relative font-sans antialiased selection:bg-[#E5D285] selection:text-[#120a07]">
      
      {/* High-fidelity Apple-style Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#E5D285] z-50 origin-[0%]" 
        style={{ scaleX }} 
      />

      {/* Sticky Top Header Navigation */}
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Vertically Aligned Side Dot Indicator Navigator (Float on right) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3 p-2 rounded-full border border-[#E5D285]/20 bg-[#120a07]/40 backdrop-blur-md">
        {sections.map((sect) => (
          <button
            key={sect}
            onClick={() => handleNavClick(sect)}
            className="group relative flex items-center justify-center p-1 focus:outline-none cursor-pointer"
            aria-label={`Jump to ${sect}`}
          >
            {/* Hover Tooltip labels */}
            <span className="absolute right-7 px-2.5 py-1 rounded bg-[#1c120c] border border-[#E5D285]/30 text-[10px] text-[#FAF6F0] tracking-widest font-sans opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 origin-right transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
              {sect === 'hero' ? '品牌理念' : sect === 'founders' ? '大师传承' : sect === 'products' ? '古典家具' : sect === 'news' ? '红木随笔' : '品鉴预约'}
            </span>
            
            {/* Visual Dot */}
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeSection === sect 
                  ? 'bg-[#E5D285] scale-110 shadow-[0_0_8px_rgba(229,210,133,0.8)]' 
                  : 'bg-stone-650 hover:bg-stone-400'
              }`} 
            />
          </button>
        ))}
      </div>

      {/* Dynamic Slide Pages Snapping Container */}
      <main className="w-full">
        {/* Slide 1: Hero entrance section */}
        <HeroSection onNextClick={() => handleNavClick('founders')} />

        {/* Slide 2: Founders biographical profile */}
        <FoundersSection />

        {/* Slide 3: Interactive wood museum and specifications */}
        <ProductsSection />

        {/* Slide 4: Insightful wood stories and journals */}
        <NewsSection />

        {/* Slide 5: Physical locations & customer connections booking */}
        <ContactSection />
      </main>

      {/* Slide-in Back to Top Floating Arrow (Apple microinteraction) */}
      <div className="fixed bottom-4 right-4 z-40">
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('hero')}
            className="p-3 bg-[#5E3D20]/90 hover:bg-[#5E3D20]/100 border border-[#E5D285]/30 text-[#E5D285] hover:text-white rounded-full shadow-2xl backdrop-blur-md cursor-pointer transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </div>

    </div>
  );
}
