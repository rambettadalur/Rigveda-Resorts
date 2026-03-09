import React from 'react'
import { Users, Presentation, TreePine, Waves, Dumbbell, BookOpen, CheckCircle, LucideIcon } from 'lucide-react'
import { amenities } from '@/data/amenities'
import { Amenity } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Users,
  Presentation,
  TreePine,
  Waves,
  Dumbbell,
  BookOpen,
}

function AmenityCard({ amenity }: { amenity: Amenity }) {
  const Icon = iconMap[amenity.icon] ?? Users

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={amenity.image}
          alt={amenity.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-bronze/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon size={20} className="text-bronze" />
          </div>
          <h3 className="text-xl font-display font-semibold text-stone-dark">{amenity.name}</h3>
        </div>

        <p className="text-stone-medium text-sm leading-relaxed mb-4">{amenity.description}</p>

        <ul className="space-y-2 mb-4">
          {amenity.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-stone-medium">
              <CheckCircle size={16} className="text-bronze flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {amenity.capacity && (
          <div className="inline-flex items-center gap-1.5 bg-bronze/10 text-bronze text-xs font-medium px-3 py-1.5 rounded-full">
            <Users size={13} />
            {amenity.capacity}
          </div>
        )}
      </div>
    </div>
  )
}

export default function AmenitiesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center bg-gradient-to-r from-forest to-bronze">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
            Resort Amenities
          </h1>
          <p className="text-base sm:text-lg text-cream max-w-2xl mx-auto">
            World-class facilities for an unforgettable stay
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.slug} amenity={amenity} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-display font-semibold text-stone-dark mb-4">
            Plan Your Visit
          </h2>
          <p className="text-stone-medium mb-6 leading-relaxed">
            Ready to experience world-class amenities in the heart of Karnataka? Get in touch with our team to plan your perfect stay.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-bronze text-white rounded-md hover:bg-bronze-light transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
