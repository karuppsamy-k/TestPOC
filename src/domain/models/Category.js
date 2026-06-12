export const CategoryType = {
  KOREAN: 'korean',
  NORTH_INDIAN: 'north_indian',
  REGIONAL: 'regional',
  FRESH_VEG: 'fresh_veg',
  FRESH_FRUIT: 'fresh_fruit',
  TEA_BEVERAGE: 'tea_beverage',
  ORGANIC: 'organic',
  DAILY_ESSENTIALS: 'daily_essentials',
};

/**
 * Category Model
 */
export class Category {
  constructor({ id, type, name, description, iconName, image, colorGradient }) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.description = description;
    this.iconName = iconName; // e.g. for lucide-react
    this.image = image; // Placeholder for background
    this.colorGradient = colorGradient; // e.g., 'from-orange-400 to-red-500'
  }
}
