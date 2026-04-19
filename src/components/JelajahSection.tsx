import React, { useState, useRef, createElement } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimation } from
'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Utensils,
  Building,
  Store,
  BedDouble } from
'lucide-react';
import { useLanguage } from '../lib/i18n';
export function JelajahSection() {
  const { t } = useLanguage();
  const slides = [
  {
    id: 'wisata',
    titleKey: 'jelajah.wisata',
    icon: MapPin,
    href: '/wisata',
    descKey: 'jelajah.wisataDesc'
  },
  {
    id: 'kuliner',
    titleKey: 'jelajah.kuliner',
    icon: Utensils,
    href: '/kuliner',
    descKey: 'jelajah.kulinerDesc'
  },
  {
    id: 'fasilitas',
    titleKey: 'jelajah.fasilitas',
    icon: Building,
    href: '/fasilitas',
    descKey: 'jelajah.fasilitasDesc'
  },
  {
    id: 'umkm',
    titleKey: 'jelajah.umkm',
    icon: Store,
    href: 'https://madiunkota.go.id/',
    descKey: 'jelajah.umkmDesc'
  },
  {
    id: 'penginapan',
    titleKey: 'jelajah.penginapan',
    icon: BedDouble,
    href: 'https://madiunkota.go.id/',
    descKey: 'jelajah.penginapanDesc'
  }];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < slides.length - 1;
  const nextSlide = () => {
    if (canGoNext) setActiveIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    if (canGoPrev) setActiveIndex((prev) => prev - 1);
  };
  const handleDragEnd = (
  _: any,
  info: {
    offset: {
      x: number;
    };
    velocity: {
      x: number;
    };
  }) =>
  {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -200) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 200) {
      prevSlide();
    }
  };
  const cardWidth = 200;
  const gap = 24;
  const offset = -(activeIndex * (cardWidth + gap));
  return (
    <section className="py-16 bg-[#e6ece1] relative overflow-hidden border-y border-primary/20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Side - Card Carousel */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="bg-[#1f7a3a] rounded-t-3xl py-4 px-8 border-b-2 border-[#166b30]">
              <h2 className="font-poppins text-2xl md:text-3xl font-black text-white text-center tracking-wide">
                {t('jelajah.title')}
              </h2>
            </div>

            <div className="bg-[#f0f4eb] rounded-b-3xl p-6 md:p-8 flex-1 flex flex-col justify-center relative min-h-[320px] border-2 border-[#1f7a3a]/10">
              <button
                onClick={prevSlide}
                disabled={!canGoPrev}
                className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${canGoPrev ? 'bg-[#1f7a3a] text-white hover:bg-[#166b30] hover:scale-110 active:scale-95' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                aria-label={t('jelajah.prev')}>
                
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={!canGoNext}
                className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${canGoNext ? 'bg-[#1f7a3a] text-white hover:bg-[#166b30] hover:scale-110 active:scale-95' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                aria-label={t('jelajah.next')}>
                
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="overflow-hidden mx-10" ref={containerRef}>
                <motion.div
                  className="flex gap-6 cursor-grab active:cursor-grabbing"
                  animate={{
                    x: offset
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                  drag="x"
                  dragConstraints={{
                    left: -(slides.length - 1) * (cardWidth + gap),
                    right: 0
                  }}
                  dragElastic={0.1}
                  onDragEnd={handleDragEnd}>
                  
                  {slides.map((slide, index) => {
                    const isHovered = hoveredCard === slide.id;
                    return (
                      <motion.a
                        key={slide.id}
                        href={slide.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-[200px] select-none"
                        onHoverStart={() => setHoveredCard(slide.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                        whileTap={{
                          scale: 0.95
                        }}
                        onDragStart={(e) => e.preventDefault()}>
                        
                        <motion.div
                          className={`flex flex-col items-center justify-center rounded-2xl p-6 transition-all duration-300 border-2 ${isHovered ? 'bg-[#1f7a3a] border-[#1f7a3a] shadow-xl' : 'bg-white border-[#1f7a3a]/20 shadow-sm hover:shadow-lg'}`}
                          animate={{
                            y: isHovered ? -8 : 0
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 25
                          }}>
                          
                          <div
                            className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${isHovered ? 'bg-white/20' : 'bg-[#1f7a3a]/10'}`}>
                            
                            {createElement(slide.icon, {
                              className: `w-10 h-10 transition-all duration-300 ${isHovered ? 'text-white' : 'text-[#1f7a3a]'}`,
                              strokeWidth: 1.8
                            })}
                          </div>
                          <h3
                            className={`font-poppins text-lg font-bold tracking-wide text-center transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#1f7a3a]'}`}>
                            
                            {t(slide.titleKey)}
                          </h3>
                          <p
                            className={`text-xs text-center mt-1 transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-gray-500'}`}>
                            
                            {t(slide.descKey)}
                          </p>
                          <motion.div
                            className="mt-3"
                            initial={{
                              opacity: 0,
                              y: -4
                            }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              y: isHovered ? 0 : -4
                            }}
                            transition={{
                              duration: 0.2
                            }}>
                            
                            <span className="text-white text-xs font-semibold flex items-center gap-1">
                              {t('jelajah.visit')}{' '}
                              <ChevronRight className="w-3 h-3" />
                            </span>
                          </motion.div>
                        </motion.div>
                      </motion.a>);

                  })}
                </motion.div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#1f7a3a]' : 'w-2 bg-[#1f7a3a]/30 hover:bg-[#1f7a3a]/50'}`}
                  aria-label={`Slide ${index + 1}`} />

                )}
              </div>
            </div>
          </div>

          {/* Right Side - Tentang Madiun */}
          <div className="w-full lg:w-1/2 flex gap-6">
            <div className="bg-[#d4dfc3] rounded-full px-4 py-8 flex items-center justify-center shrink-0">
              <h2
                className="font-poppins text-2xl md:text-3xl font-black text-primary tracking-widest"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)'
                }}>
                
                {t('jelajah.aboutTitle')}
              </h2>
            </div>
            <div className="bg-transparent border-2 border-primary/30 rounded-xl p-6 md:p-10 flex-1 relative flex items-center">
              <p className="text-primary text-lg md:text-xl font-medium leading-relaxed text-justify relative z-10">
                {t('jelajah.aboutText')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 md:w-96 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <img
          src="/maskote_pendekar.png"
          alt=""
          className="w-full h-auto grayscale" />
        
      </div>
    </section>);

}