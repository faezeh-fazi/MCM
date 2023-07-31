export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  mainImageUrl: string; // The URL of the main image
  thumbnailUrls: string[]; // An array of thumbnail image URLs
  // Add more properties as needed
}
