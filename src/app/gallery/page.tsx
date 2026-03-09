'use client'

import React, { useState } from 'react'
import { FilterBar } from '@/components/ui/FilterBar'

type GalleryCategory = 'all' | 'rooms' | 'property' | 'experiences' | 'dining' | 'nature'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all')

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'rooms', label: 'Rooms' },
    { value: 'property', label: 'Property' },
    { value: 'experiences', label: 'Experiences' },
    { value: 'dining', label: 'Dining' },
    { value: 'nature', label: 'Nature' },
  ]

  const galleryItems = [
    { id: 1,  category: 'rooms',       title: 'Heritage Villa',     src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=512&fit=crop&q=80' },
    { id: 2,  category: 'property',    title: 'Resort Grounds',     src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=512&fit=crop&q=80' },
    { id: 3,  category: 'experiences', title: 'Temple Tour',        src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=512&fit=crop&q=80' },
    { id: 4,  category: 'dining',      title: 'Hoysala Restaurant', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=512&fit=crop&q=80' },
    { id: 5,  category: 'nature',      title: 'Garden Walk',        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=512&fit=crop&q=80' },
    { id: 6,  category: 'rooms',       title: 'Forest Cottage',     src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=512&fit=crop&q=80' },
    { id: 7,  category: 'property',    title: 'Pool Area',          src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=512&fit=crop&q=80' },
    { id: 8,  category: 'experiences', title: 'Nature Walk',        src: 'https://images.unsplash.com/photo-1448375240586-b7db9d8db4e2?w=800&h=512&fit=crop&q=80' },
    { id: 9,  category: 'dining',      title: 'Garden Café',        src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=512&fit=crop&q=80' },
    { id: 10, category: 'nature',      title: 'Western Ghats',      src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=512&fit=crop&q=80' },
    { id: 11, category: 'rooms',       title: 'Temple Suite',       src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=512&fit=crop&q=80' },
    { id: 12, category: 'experiences', title: 'Yoga Session',       src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=512&fit=crop&q=80' },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-forest to-stone-dark">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">Gallery</h1>
          <p className="text-lg text-cream">
            Glimpses of Rigveda Resorts
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Category Filters */}
          <FilterBar
            options={categories}
            value={selectedCategory}
            onChange={(v) => setSelectedCategory(v as GalleryCategory)}
            className="mb-12"
          />

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer group"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-medium text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-semibold text-stone-dark mb-4">
            Experience It Yourself
          </h2>
          <p className="text-stone-medium mb-6 max-w-2xl mx-auto">
            Pictures can only say so much. Come experience the beauty, tranquility, and hospitality of Rigveda Resorts in person.
          </p>
          <button
            onClick={() => (window.location.href = '/book')}
            className="px-8 py-3 bg-bronze text-white rounded-md hover:bg-bronze-light transition-colors text-lg font-medium"
          >
            Book Your Stay
          </button>
        </div>
      </section>
    </>
  )
}
