import React from 'react';
import { motion } from 'framer-motion';
import { Info, Leaf, User } from 'lucide-react';

export const StoryCard = ({ product }) => {
  if (!product.farmerDetails && !product.origin) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden bg-white/70"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
      
      <div className="w-full md:w-1/3 aspect-square md:aspect-auto md:h-48 rounded-2xl overflow-hidden relative shadow-sm">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 text-white">
          <h4 className="font-bold text-lg leading-tight drop-shadow-md">{product.name}</h4>
          <span className="text-xs font-medium text-white/90 uppercase tracking-widest">{product.origin}</span>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">The Story Behind the Product</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="mt-0.5 p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <User size={18} />
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Source</h5>
              <p className="text-sm text-gray-700 leading-relaxed">{product.farmerDetails}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="mt-0.5 p-1.5 rounded-lg bg-amber-50 text-amber-600">
              <Leaf size={18} />
            </div>
            <div>
              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Quality</h5>
              <p className="text-sm text-gray-700 leading-relaxed">{product.qualityInfo}</p>
            </div>
          </div>
        </div>

        {product.benefits && (
          <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
            {product.benefits.map((benefit, i) => (
              <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-100 flex items-center">
                <Info size={12} className="mr-1.5 text-primary" />
                {benefit}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
