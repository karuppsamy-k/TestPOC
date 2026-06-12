import React from 'react';
import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 100 } 
  }
};

export const SectionContainer = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`py-12 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mb-10"
        >
          {title && (
            <div className="overflow-hidden pb-2">
              <motion.h2 
                variants={titleVariants}
                className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
              >
                {title}
              </motion.h2>
            </div>
          )}
          {subtitle && (
            <div className="overflow-hidden pt-1">
              <motion.p 
                variants={titleVariants}
                className="text-gray-500 text-base md:text-lg font-medium"
              >
                {subtitle}
              </motion.p>
            </div>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
};
