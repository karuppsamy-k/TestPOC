import React from 'react';
import { AnimatedPage } from '../shared/components/layout/AnimatedPage';
import { StoryCard } from '../shared/components/cards/StoryCard';
import { mockFeaturedProducts } from '../infrastructure/mock/homeData';

export const StoriesPage = () => {
  return (
    <AnimatedPage className="pt-8 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Origins & Stories</h2>
        <p className="text-gray-500 mb-8">Discover the farmers and origins behind our premium products.</p>
        
        <div className="space-y-6">
          {mockFeaturedProducts.slice(0, 2).map((product) => (
            <StoryCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};
