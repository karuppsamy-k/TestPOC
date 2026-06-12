import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const maskRevealVariants = {
  hidden: { y: "120%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 20, 
      stiffness: 100 
    } 
  }
};

const imageVariants = {
  initial: { scale: 1.15, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: "easeOut" } 
  },
  exit: { 
    scale: 1.05, 
    opacity: 0, 
    transition: { duration: 0.8, ease: "easeIn" } 
  }
};

export const BannerCard = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000); // 6 seconds to appreciate the animation
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] bg-gray-900 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
        >
          {/* Cinematic Parallax Image */}
          <motion.img 
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            src={banners[currentIndex].image} 
            alt={banners[currentIndex].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Deep Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Staggered Content Container */}
          <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-panel p-6 md:p-10 rounded-[2rem] max-w-xl border-white/10 shadow-2xl bg-black/20 backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Decorative gradient orb */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Tag */}
                <div className="overflow-hidden mb-4">
                  <motion.span 
                    variants={maskRevealVariants}
                    className={`inline-block px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full backdrop-blur-md ${banners[currentIndex].tagColor}`}
                  >
                    {banners[currentIndex].tag}
                  </motion.span>
                </div>

                {/* Title */}
                <div className="overflow-hidden mb-3">
                  <motion.h2 
                    variants={maskRevealVariants}
                    className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg"
                  >
                    {banners[currentIndex].title}
                  </motion.h2>
                </div>

                {/* Subtitle */}
                <div className="overflow-hidden mb-8">
                  <motion.p 
                    variants={maskRevealVariants}
                    className="text-gray-200 text-base md:text-lg line-clamp-2 md:line-clamp-none drop-shadow-md font-medium max-w-md"
                  >
                    {banners[currentIndex].subtitle}
                  </motion.p>
                </div>
                
                {/* Button */}
                <div className="overflow-hidden">
                  <motion.button 
                    variants={maskRevealVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group/btn"
                  >
                    <span>Shop Collection</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex space-x-3 z-20">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-700 rounded-full ${
              idx === currentIndex 
                ? 'w-10 h-2 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
