'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-28 bg-cream">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&h=600&fit=crop&q=80"
              alt="Rigveda Resorts overview"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <SectionHeading
              subtitle="About Us"
              title="A Sanctuary Near Sacred Temples"
              align="left"
            />
            <div className="space-y-4 text-stone-medium leading-relaxed">
              <p>
                Nestled in the heart of Karnataka, just moments away from the magnificent Hoysala
                temples of Belur and Halebidu, Rigveda Resorts offers a unique blend of heritage,
                luxury, and natural beauty.
              </p>
              <p>
                Our resort is designed to immerse you in the rich cultural tapestry of the region
                while providing modern comforts and world-class hospitality. Whether you're here to
                explore the architectural marvels of the 12th century, reconnect with nature, or
                simply unwind in tranquil surroundings, Rigveda Resorts is your perfect retreat.
              </p>
              <p>
                Experience authentic Karnataka hospitality, savor local cuisines, and create
                lasting memories in a setting that honors the past while embracing the present.
              </p>
            </div>
            <div className="mt-8">
              <Button
                variant="primary"
                size="md"
                onClick={() => (window.location.href = '/about')}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
