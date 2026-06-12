import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const CategoryCard = ({ category, index }) => {
  const Icon = Icons[category.iconName] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={`glass-card p-5 cursor-pointer relative overflow-hidden group bg-gradient-to-br ${category.colorGradient} bg-opacity-10`}
    >
      {/* Decorative blurred circle in background */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/20 blur-2xl group-hover:bg-white/30 transition-all`} />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-4 shadow-sm text-white border border-white/40">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        <h3 className="font-bold text-white text-lg tracking-wide mb-1 shadow-sm drop-shadow-md">
          {category.name}
        </h3>
        <p className="text-white/80 text-xs font-medium line-clamp-2 drop-shadow-sm">
          {category.description}
        </p>
      </div>
    </motion.div>
  );
};
