import { Category, CategoryType } from '../../domain/models/Category';
import { Product } from '../../domain/models/Product';

export const mockCategories = [
  new Category({
    id: 'c1',
    type: CategoryType.TEA_BEVERAGE,
    name: 'Premium Teas',
    description: 'Aromatic blends from native estates',
    iconName: 'Coffee',
    colorGradient: 'from-amber-500 to-orange-700'
  }),
  new Category({
    id: 'c2',
    type: CategoryType.KOREAN,
    name: 'Korean Pantry',
    description: 'Authentic ingredients for Seoul soul food',
    iconName: 'Flame',
    colorGradient: 'from-red-500 to-pink-700'
  }),
  new Category({
    id: 'c3',
    type: CategoryType.NORTH_INDIAN,
    name: 'North Indian',
    description: 'Traditional spices and essentials',
    iconName: 'Wheat',
    colorGradient: 'from-yellow-600 to-amber-800'
  }),
  new Category({
    id: 'c4',
    type: CategoryType.FRESH_FRUIT,
    name: 'Fresh Fruits',
    description: 'Farm-picked seasonal goodness',
    iconName: 'Apple',
    colorGradient: 'from-green-400 to-emerald-600'
  }),
  new Category({
    id: 'c5',
    type: CategoryType.ORGANIC,
    name: 'Organic Reserve',
    description: 'Certified 100% natural products',
    iconName: 'Leaf',
    colorGradient: 'from-lime-500 to-green-700'
  })
];

export const mockFeaturedProducts = [
  new Product({
    id: 'p1',
    categoryId: 'c1',
    name: 'Assam Gold Tea Powder',
    price: 450,
    originalPrice: 600,
    unit: '250g',
    origin: 'Brahmaputra Valley, Assam',
    farmerDetails: 'Sourced from the Barua Family Estate, practicing sustainable farming since 1982.',
    qualityInfo: 'Hand-plucked first flush leaves, CTC processed for strong liquor.',
    usageDetails: 'Perfect for strong morning Chai. Boil with water, milk, and crushed cardamom.',
    benefits: ['Rich in Antioxidants', 'Energy Booster', 'Improves Focus'],
    description: 'Premium North Indian Tea Powder sourced from Assam farms. Carefully processed for rich aroma and authentic taste.',
    image: 'https://images.unsplash.com/photo-1594834749740-74b3f696cebd?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    rating: 4.8,
    tags: ['Premium', 'Single Estate']
  }),
  new Product({
    id: 'p2',
    categoryId: 'c2',
    name: 'Gochugaru Chili Flakes',
    price: 320,
    originalPrice: 400,
    unit: '100g',
    origin: 'Gyeongsang Province, South Korea',
    farmerDetails: 'Sun-dried traditional farming cooperative in Andong.',
    qualityInfo: 'Vibrant red color, complex flavor profile with a sweet, smoky heat.',
    usageDetails: 'Essential for authentic Kimchi, stews (jjigae), and marinades.',
    benefits: ['Metabolism Boost', 'Rich in Vitamin C'],
    description: 'Authentic coarse chili flakes imported directly from Korea for your everyday cooking.',
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    rating: 4.9,
    tags: ['Imported', 'Authentic']
  }),
  new Product({
    id: 'p3',
    categoryId: 'c4',
    name: 'Kashmiri Apples',
    price: 250,
    unit: '1kg',
    origin: 'Sopore, Kashmir',
    farmerDetails: 'Direct from high-altitude orchards.',
    qualityInfo: 'Crisp, juicy, and naturally sweet without wax coating.',
    usageDetails: 'Wash and eat fresh. Great for salads and desserts.',
    benefits: ['High Fiber', 'Heart Healthy'],
    description: 'Hand-picked fresh apples straight from the valley.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    rating: 4.5,
    tags: ['Fresh', 'Seasonal']
  })
];

export const mockBanners = [
  {
    id: 'b1',
    title: 'The Essence of Assam',
    subtitle: 'Discover our curated collection of premium teas sourced directly from the finest estates.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1200', // Better tea image
    productId: 'p1',
    tag: 'Premium Selection',
    tagColor: 'bg-amber-500/20 text-amber-100',
  },
  {
    id: 'b2',
    title: 'Seoul to Your Kitchen',
    subtitle: 'Authentic ingredients and spices for the perfect Korean meal experience.',
    image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&q=80&w=1200',
    productId: 'p2',
    tag: 'Imported',
    tagColor: 'bg-red-500/20 text-red-100',
  },
  {
    id: 'b3',
    title: 'Fresh From the Valley',
    subtitle: 'Crisp, juicy Kashmiri apples delivered straight to your door.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6faa6?auto=format&fit=crop&q=80&w=1200',
    productId: 'p3',
    tag: 'Seasonal Fresh',
    tagColor: 'bg-emerald-500/20 text-emerald-100',
  }
];
