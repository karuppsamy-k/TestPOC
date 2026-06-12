import React from 'react';
import { motion } from 'framer-motion';

export const SectionContainer = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`py-8 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>}
          {subtitle && <p className="text-gray-500 mt-2 text-sm md:text-base">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
};
