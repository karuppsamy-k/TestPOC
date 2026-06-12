import React from 'react';
import { AnimatedPage } from '../shared/components/layout/AnimatedPage';
import { ShoppingBag } from 'lucide-react';

export const CartPage = () => {
  return (
    <AnimatedPage className="pt-8 px-4 pb-24">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-24 h-24 bg-white/50 backdrop-blur-xl rounded-full flex items-center justify-center mb-6 shadow-xl border border-white">
          <ShoppingBag size={40} className="text-primary" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Looks like you haven't added any premium products to your cart yet. Discover our curated collections!
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
          Start Shopping
        </button>
      </div>
    </AnimatedPage>
  );
};
