// Room Types
export interface Room {
  slug: string
  name: string
  category: 'suite' | 'deluxe-ac' | 'deluxe-non-ac' | 'dormitory'
  tagline: string
  description: string
  featuredImage: string
  gallery: string[]
  size: string              // e.g., "450 sq ft"
  occupancy: {
    adults: number
    children?: number
  }
  amenities: string[]
  features: string[]        // Key highlights
  basePrice?: string        // Display price (e.g., "₹8,500/night")
}

// Experience Types
export interface Experience {
  slug: string
  title: string
  category: 'temple' | 'nature' | 'culture' | 'wellness'
  tagline: string
  description: string
  longDescription: string
  featuredImage: string
  gallery: string[]
  duration?: string         // e.g., "4 hours"
  groupSize?: string        // e.g., "Up to 8 guests"
  highlights: string[]
  includes: string[]
  seasonality?: string      // e.g., "Year-round" or "Oct-Mar"
}

// Package Types
export interface Package {
  slug: string
  title: string
  subtitle: string
  badge?: string           // e.g., "Popular", "Best Value"
  validity: string         // e.g., "Valid until Dec 31, 2026"
  nights: number
  description: string
  featuredImage: string
  inclusions: string[]
  exclusions?: string[]
  priceFrom?: string       // e.g., "₹18,999"
  promoCode?: string       // For Siteminder
  experiences?: string[]   // Array of experience slugs included
}

// Testimonial Type
export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number           // 1-5
  review: string
  date: string
  avatar?: string
}

// Dining Type
export interface DiningOption {
  name: string
  description: string
  cuisine: string
  mealTimes: string[]      // e.g., ["Breakfast", "Lunch", "Dinner"]
  image: string
  menuHighlights?: string[]
}

// Amenity Type
export interface Amenity {
  slug: string
  name: string
  description: string
  image: string
  icon: string          // lucide-react icon name
  highlights: string[]
  capacity?: string     // e.g., "Up to 200 guests"
}

// Contact Form Data
export interface ContactFormData {
  name: string
  email: string
  phone: string
  checkIn?: string
  checkOut?: string
  guests?: number
  message: string
}

// Navigation Link Type
export interface NavLink {
  label: string
  href: string
}
