import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BannerCard = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative w-full h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group bg-gray-900">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 1.05 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Parallax Image Background */}
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            src={banners[currentIndex].image} 
            alt={banners[currentIndex].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Content Container */}
          <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-panel p-6 md:p-8 rounded-3xl max-w-xl border-white/10 shadow-2xl bg-black/20 backdrop-blur-xl"
            >
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-4 backdrop-blur-md ${banners[currentIndex].tagColor}`}>
                {banners[currentIndex].tag}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-lg">
                {banners[currentIndex].title}
              </h2>
              <p className="text-gray-200 text-sm md:text-base mb-6 line-clamp-2 md:line-clamp-none drop-shadow-md font-medium">
                {banners[currentIndex].subtitle}
              </p>
              
              <button className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/50 group/btn">
                <span>Shop Collection</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex space-x-2 z-10">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-500 rounded-full ${
              idx === currentIndex 
                ? 'w-8 h-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
