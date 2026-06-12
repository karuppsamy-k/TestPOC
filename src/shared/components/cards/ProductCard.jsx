import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star, MapPin } from 'lucide-react';

export const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ y: -8 }}
      className="glass-card flex flex-col group overflow-hidden bg-white/80 hover:bg-white/95"
    >
      <div className="relative w-full pt-[100%] overflow-hidden bg-gray-100">
        <motion.img 
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {product.isFeatured && (
            <span className="glass-pill px-2.5 py-1 text-[10px] font-bold text-emerald-700 tracking-wider uppercase">
              Curated
            </span>
          )}
          <div className="glass-pill px-2 py-1 flex items-center space-x-1 ml-auto">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            <span className="text-[11px] font-bold text-gray-800">{product.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center text-gray-500 text-[10px] uppercase tracking-wider mb-1 font-semibold">
          <MapPin size={10} className="mr-1" />
          <span className="truncate">{product.origin}</span>
        </div>
        
        <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-xs mb-3">
          {product.unit}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-gray-900">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors shadow-md hover:shadow-lg active:scale-95">
            <Plus size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
