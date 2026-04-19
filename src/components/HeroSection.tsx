import React, { useCallback, useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Mic, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
const Counter = ({
  end,
  duration = 2,
  suffix = ''




}: {end: number;duration?: number;suffix?: string;}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
        setCount(end * easeOut);
        if (progress < duration * 1000) {
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);
  // Format number, handle decimals for the 201.85 case
  const formattedCount = Number.isInteger(end) ?
  Math.floor(count).toString() :
  count.toFixed(2).replace('.', ',');
  return (
    <span ref={ref}>
      {formattedCount}
      {suffix}
    </span>);

};
const heroSlides = [
{
  src: "/balai_kota_madiun.jpg",
  titleKey: 'hero.slide1Title',
  subtitleKey: 'hero.slide1Sub'
},
{
  src: "/stasiun.jpg",
  titleKey: 'hero.slide2Title',
  subtitleKey: 'hero.slide2Sub'
},
{
  src: "/unnamed.jpg",
  titleKey: 'hero.slide3Title',
  subtitleKey: 'hero.slide3Sub'
},
{
  src: "/unnamed_(1).jpg",
  titleKey: 'hero.slide4Title',
  subtitleKey: 'hero.slide4Sub'
}];

export function HeroSection() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const nextSlide = useCallback(() => {
    setSlideDirection(1);
    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);
  const prevSlide = useCallback(() => {
    setSlideDirection(-1);
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);
  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 1.05
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95
    })
  };
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-hero-pattern min-h-screen flex items-center">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
          'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Watermark Mascot */}
      <div className="absolute bottom-0 left-0 w-[500px] opacity-10 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
        <img
          src="/maskote_pendekar.png"
          alt=""
          className="w-full h-auto grayscale" />
        
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="w-full lg:w-1/2 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 bg-accent text-dark text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-dark"></span>{' '}
              {t('hero.badge')}
            </div>

            <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tight">
              <span className="text-white block drop-shadow-md">Madiun</span>
              <span className="text-accent block drop-shadow-md">Kota</span>
              <span className="text-accent block drop-shadow-md">Pendekar</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-lg bg-accent rounded-full flex items-center p-1.5 shadow-xl mb-12 border-2 border-accent/80">
              <div className="pl-5 pr-3 text-dark">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                className="flex-1 bg-transparent border-none outline-none py-3 text-dark font-bold placeholder-black text-base md:text-lg" />
              
              <button className="pr-5 pl-3 text-dark hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-poppins text-3xl md:text-4xl font-black text-accent drop-shadow-sm">
                  <Counter end={201} suffix="rb+" />
                </span>
                <span className="text-white text-sm font-medium">
                  {t('hero.population')}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins text-3xl md:text-4xl font-black text-accent drop-shadow-sm">
                  <Counter end={27} />
                </span>
                <span className="text-white text-sm font-medium">
                  {t('hero.kelurahan')}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins text-3xl md:text-4xl font-black text-accent drop-shadow-sm">
                  <Counter end={3} />
                </span>
                <span className="text-white text-sm font-medium">
                  {t('hero.kecamatan')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Photo & Mascots */}
          <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-end mt-10 lg:mt-0">
            {/* Photo Carousel */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="relative w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[16/9]">
              
              <AnimatePresence
                initial={false}
                custom={slideDirection}
                mode="wait">
                
                <motion.img
                  key={slideIndex}
                  src={heroSlides[slideIndex].src}
                  alt={t(heroSlides[slideIndex].titleKey)}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    },
                    opacity: {
                      duration: 0.3
                    },
                    scale: {
                      duration: 0.4
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover" />
                
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>

              {/* Arrow Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-200 border border-white/30 group"
                aria-label={t('hero.prevSlide')}>
                
                <ChevronLeftIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-200 border border-white/30 group"
                aria-label={t('hero.nextSlide')}>
                
                <ChevronRightIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Bottom Info + Dots */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: -10
                    }}
                    transition={{
                      duration: 0.3
                    }}>
                    
                    <h3 className="text-white font-poppins font-bold text-xl md:text-2xl drop-shadow-lg">
                      {t(heroSlides[slideIndex].titleKey)}
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow-md">
                      {t(heroSlides[slideIndex].subtitleKey)}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Dot Indicators */}
                <div className="flex gap-2 mt-3 pointer-events-auto">
                  {heroSlides.map((_, i) =>
                  <button
                    key={i}
                    onClick={() => {
                      setSlideDirection(i > slideIndex ? 1 : -1);
                      setSlideIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === slideIndex ? 'w-8 bg-accent' : 'w-3 bg-white/50 hover:bg-white/80'}`}
                    aria-label={`Slide ${i + 1}`} />

                  )}
                </div>
              </div>
            </motion.div>

            {/* Mascots Row */}
            <div className="relative w-full h-48 mt-[-60px] flex justify-center lg:justify-end gap-4 md:gap-8 z-20 pr-4 md:pr-12">
              {/* Decorative Shape Behind Mascots */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-16 pointer-events-none z-0">
                <svg
                  viewBox="0 0 500 400"
                  className="w-[120%] md:w-[110%] h-auto max-w-[700px] opacity-80"
                  fill="none">
                  
                  {/* Main blob */}
                  <path
                    d="M250,20 C350,10 450,60 470,150 C490,240 440,330 350,370 C260,410 150,390 80,320 C10,250 -10,160 40,90 C90,20 150,30 250,20 Z"
                    fill="url(#blobGradient)" />
                  
                  {/* Inner glow */}
                  <path
                    d="M260,50 C340,40 420,85 435,160 C450,235 410,310 335,345 C260,380 165,365 105,305 C45,245 30,170 70,110 C110,50 180,60 260,50 Z"
                    fill="url(#blobInner)"
                    opacity="0.5" />
                  
                  {/* Accent ring */}
                  <ellipse
                    cx="250"
                    cy="200"
                    rx="180"
                    ry="160"
                    stroke="#F5A623"
                    strokeWidth="2"
                    opacity="0.3"
                    fill="none" />
                  
                  <ellipse
                    cx="250"
                    cy="200"
                    rx="210"
                    ry="185"
                    stroke="#F5A623"
                    strokeWidth="1"
                    opacity="0.15"
                    fill="none"
                    strokeDasharray="8 6" />
                  
                  {/* Small decorative circles */}
                  <circle
                    cx="80"
                    cy="100"
                    r="8"
                    fill="#F5A623"
                    opacity="0.25" />
                  
                  <circle
                    cx="420"
                    cy="280"
                    r="12"
                    fill="#F5A623"
                    opacity="0.2" />
                  
                  <circle cx="400" cy="80" r="6" fill="#FFFFFF" opacity="0.3" />
                  <circle
                    cx="100"
                    cy="320"
                    r="10"
                    fill="#FFFFFF"
                    opacity="0.2" />
                  
                  <defs>
                    <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
                      <stop
                        offset="0%"
                        stopColor="#F5A623"
                        stopOpacity="0.25" />
                      
                      <stop
                        offset="60%"
                        stopColor="#1B7A3D"
                        stopOpacity="0.15" />
                      
                      <stop
                        offset="100%"
                        stopColor="#1B7A3D"
                        stopOpacity="0.05" />
                      
                    </radialGradient>
                    <radialGradient id="blobInner" cx="50%" cy="50%" r="50%">
                      <stop
                        offset="0%"
                        stopColor="#FFFFFF"
                        stopOpacity="0.15" />
                      
                      <stop
                        offset="100%"
                        stopColor="#F5A623"
                        stopOpacity="0.05" />
                      
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* RELO */}
              <motion.div
                style={{
                  x: mousePosition.x * -0.8,
                  y: mousePosition.y * -0.8
                }}
                className="w-32 md:w-48 relative top-10 z-10">
                
                <motion.img
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: 'easeInOut'
                  }}
                  src="/maskot_KAI.png"
                  alt="Maskot Relo"
                  className="w-full h-auto drop-shadow-2xl pt-[108px] pb-[108px]" />
                
              </motion.div>

              {/* MADYA */}
              <motion.div
                style={{
                  x: mousePosition.x * -1.2,
                  y: mousePosition.y * -1.2
                }}
                className="w-40 md:w-56 relative -top-10 z-10">
                
                <motion.img
                  animate={{
                    y: [0, -15, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut',
                    delay: 0.5
                  }}
                  src="/maskote_pendekar.png"
                  alt="Maskot Madya"
                  className="w-full h-auto drop-shadow-2xl pt-[100px] pb-[100px]" />
                
              </motion.div>

              {/* RASA */}
              <motion.div
                style={{
                  x: mousePosition.x * -1,
                  y: mousePosition.y * -1
                }}
                className="w-32 md:w-48 relative top-4 z-10">
                
                <motion.img
                  animate={{
                    y: [0, -12, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                  src="/maskot_pecel.png"
                  alt="Maskot Rasa"
                  className="w-full h-auto drop-shadow-2xl pt-[112px] pb-[112px]" />
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve separator to match mockup */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[180px]">
          
          <path
            d="M0,120 C300,120 400,0 1200,80 L1200,120 L0,120 Z"
            fill="#F5D08A"
            opacity="0.3">
          </path>
          <path
            d="M0,120 C400,100 600,20 1200,100 L1200,120 L0,120 Z"
            fill="#FAFAFA">
          </path>
        </svg>
      </div>
    </section>);

}