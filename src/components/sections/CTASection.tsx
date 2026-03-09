'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { MandalaBg } from '@/components/ui/MandalaBg'

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-bronze to-stone-medium text-white">
      <MandalaBg size={440} opacity={0.06} className="-bottom-16 -left-16 text-cream" />
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-6">
          Ready to Experience Heritage Luxury?
        </h2>
        <p className="text-base sm:text-xl text-cream mb-8 max-w-2xl mx-auto">
          Book your stay at Rigveda Resorts and embark on a journey through history, nature, and
          unparalleled hospitality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/packages')}
            className="border-white text-white hover:bg-white hover:text-bronze"
          >
            View Packages
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = '/book')}
            className="bg-white text-bronze hover:bg-cream"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  )
}
