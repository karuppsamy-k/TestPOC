/**
 * Product Model
 */
export class Product {
  constructor({ 
    id, 
    categoryId, 
    name, 
    price, 
    originalPrice, 
    unit, 
    origin, 
    farmerDetails, 
    qualityInfo, 
    usageDetails, 
    benefits, 
    description, 
    image,
    isFeatured,
    rating,
    tags
  }) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.price = price;
    this.originalPrice = originalPrice;
    this.unit = unit; // e.g. '250g', '1kg'
    
    // Story fields
    this.origin = origin;
    this.farmerDetails = farmerDetails;
    this.qualityInfo = qualityInfo;
    this.usageDetails = usageDetails;
    this.benefits = benefits;
    
    this.description = description;
    this.image = image;
    this.isFeatured = isFeatured || false;
    this.rating = rating || 0.0;
    this.tags = tags || [];
  }
}
