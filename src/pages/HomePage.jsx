import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedPage } from '../shared/components/layout/AnimatedPage';
import { SectionContainer } from '../shared/components/layout/SectionContainer';
import { BannerCard } from '../shared/components/cards/BannerCard';
import { CategoryCard } from '../shared/components/cards/CategoryCard';
import { ProductCard } from '../shared/components/cards/ProductCard';
import { StoryCard } from '../shared/components/cards/StoryCard';
import { mockBanners, mockCategories, mockFeaturedProducts } from '../infrastructure/mock/homeData';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const HomePage = () => {
  return (
    <AnimatedPage className="pb-24"> {/* Padding for bottom navigation */}
      
      {/* Hero Section */}
      <div className="pt-4 px-4 md:px-8 max-w-7xl mx-auto">
        <BannerCard banners={mockBanners} />
      </div>

      {/* Curated Categories */}
      <SectionContainer 
        title="Curated Categories" 
        subtitle="Explore our handpicked selections from around the world."
      >
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {mockCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </motion.div>
      </SectionContainer>

      {/* Featured Story */}
      <SectionContainer className="bg-gray-50/50">
        <StoryCard product={mockFeaturedProducts[0]} />
      </SectionContainer>

      {/* Trending Products */}
      <SectionContainer 
        title="Trending Essentials" 
        subtitle="The highest quality products loved by our customers."
      >
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {mockFeaturedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </SectionContainer>

    </AnimatedPage>
  );
};
