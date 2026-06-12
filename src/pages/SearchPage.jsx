import React from 'react';
import { AnimatedPage } from '../shared/components/layout/AnimatedPage';
import { Search } from 'lucide-react';

export const SearchPage = () => {
  return (
    <AnimatedPage className="pt-8 px-4 pb-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Discover Products</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for premium teas, spices, fresh fruits..." 
            className="w-full glass-panel pl-12 pr-4 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-400 font-medium shadow-sm transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
        </div>
        
        <div className="mt-8">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {['Assam Tea', 'Gochugaru', 'Kashmiri Apples', 'Organic Turmeric'].map(term => (
              <span key={term} className="glass-pill px-4 py-2 text-sm font-semibold text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
