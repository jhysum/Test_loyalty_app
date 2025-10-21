/**
 * Core data models for Sweet Scoops app
 * Based on the product requirements in README.md
 */

export type LoyaltyStatus = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface User {
  id: string;
  email: string;
  name: string;
  loyaltyStatus: LoyaltyStatus;
  visitCount: number;
  joinDate: Date;
  flavorCollection: FlavorHistory[];
}

export interface Flavor {
  id: string;
  name: string;
  description: string;
  story: string; // The narrative behind the flavor
  ingredients: Ingredient[];
  storeId: string; // Which store created this flavor
  isGlobalClassic: boolean; // True for flavors available at all stores
  releaseDate: Date; // When the flavor was introduced
  availableUntil?: Date; // When the flavor will be discontinued (if seasonal)
  imageUrl: string;
  averageRating: number; // Calculated from all user ratings
  reviewCount: number;
}

export interface Ingredient {
  name: string;
  source: string; // Information about the local supplier
  story: string; // Why this ingredient is special/interesting
}

export interface FlavorHistory {
  flavorId: string;
  userId: string;
  triedDate: Date;
  userRating?: number; // 1-5 stars
  review?: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  userName: string; // Denormalized for display
  flavorId: string;
  text: string;
  createdAt: Date;
  likes: number;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  uniqueFlavors: string[]; // IDs of flavors unique to this store
}
