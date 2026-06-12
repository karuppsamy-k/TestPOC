import React from 'react';
import { AnimatedPage } from '../shared/components/layout/AnimatedPage';
import { CategoryCard } from '../shared/components/cards/CategoryCard';
import { mockCategories } from '../infrastructure/mock/homeData';

export const CategoriesPage = () => {
  return (
    <AnimatedPage className="pt-8 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">All Categories</h2>
        <p className="text-gray-500 mb-8">Browse our entire curated catalog</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
          {/* Duplicate just to show a full page of categories for the prototype */}
          {mockCategories.map((category, index) => (
            <CategoryCard key={`${category.id}-dup`} category={category} index={index + 5} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};
