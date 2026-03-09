'use client'

import React, { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RoomCard } from '@/components/cards/RoomCard'
import { FilterBar } from '@/components/ui/FilterBar'
import { rooms } from '@/data/rooms'
import { Room } from '@/types'

type RoomCategory = 'all' | 'suite' | 'deluxe-ac' | 'deluxe-non-ac' | 'dormitory'

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<RoomCategory>('all')

  const filteredRooms = selectedCategory === 'all'
    ? rooms
    : rooms.filter((room) => room.category === selectedCategory)

  const categories = [
    { value: 'all', label: 'All Rooms' },
    { value: 'suite', label: 'Suites' },
    { value: 'deluxe-ac', label: 'Deluxe AC' },
    { value: 'deluxe-non-ac', label: 'Deluxe Non-AC' },
    { value: 'dormitory', label: 'Dormitory' },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center bg-gradient-to-r from-stone-dark to-stone-medium">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
            Rooms & Suites
          </h1>
          <p className="text-base sm:text-lg text-cream max-w-2xl mx-auto">
            Experience comfort and luxury in our thoughtfully designed accommodations
          </p>
        </div>
      </section>

      {/* Rooms Listing */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Category Filters */}
          <FilterBar
            options={categories}
            value={selectedCategory}
            onChange={(v) => setSelectedCategory(v as RoomCategory)}
            className="mb-12"
          />

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>

          {/* No Results */}
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-medium text-lg">
                No rooms found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-semibold text-stone-dark mb-4">
            Need Help Choosing the Perfect Room?
          </h2>
          <p className="text-stone-medium mb-6 max-w-2xl mx-auto">
            Our team is here to help you find the ideal accommodation for your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918012345678"
              className="inline-flex items-center justify-center px-6 py-3 bg-bronze text-white rounded-md hover:bg-bronze-light transition-colors"
            >
              Call Us: +91 80 1234 5678
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-bronze text-bronze rounded-md hover:bg-bronze hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
