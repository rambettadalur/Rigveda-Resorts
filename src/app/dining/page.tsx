'use client'

import { diningOptions, diningInfo } from '@/data/dining'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Clock, Check } from 'lucide-react'

export default function DiningPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-stone-medium to-gold">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
            Dining Experience
          </h1>
          <p className="text-lg text-cream max-w-2xl mx-auto">
            Savor authentic flavors in a serene setting
          </p>
        </div>
      </section>

      {/* Dining Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <SectionHeading
            subtitle="Our Philosophy"
            title="Farm to Table Dining"
            align="center"
          />
          <p className="text-stone-medium leading-relaxed">
            {diningInfo.cuisinePhilosophy}
          </p>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-12 max-w-6xl mx-auto">
            {diningOptions.map((option, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-80 rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={option.image}
                    alt={option.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-display font-semibold text-stone-dark mb-3">
                    {option.name}
                  </h2>
                  <p className="text-sm text-bronze font-medium mb-4">{option.cuisine}</p>
                  <p className="text-stone-medium leading-relaxed mb-4">
                    {option.description}
                  </p>

                  {/* Meal Times */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-stone-dark mb-2">Available:</p>
                    <div className="flex flex-wrap gap-2">
                      {option.mealTimes.map((time, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-sand text-stone-dark text-sm rounded-full"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Menu Highlights */}
                  {option.menuHighlights && option.menuHighlights.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-stone-dark mb-2">
                        Menu Highlights:
                      </p>
                      <ul className="space-y-1">
                        {option.menuHighlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-stone-medium"
                          >
                            <Check size={14} className="text-bronze" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Timings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading subtitle="Schedule" title="Dining Timings" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(diningInfo.timings).map(([meal, timing]) => (
              <div key={meal} className="bg-sand p-6 rounded-lg text-center">
                <Clock size={24} className="text-bronze mx-auto mb-3" />
                <h3 className="font-semibold text-stone-dark mb-2 capitalize">
                  {meal.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-sm text-stone-medium">{timing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Diets */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-display font-semibold text-stone-dark mb-4">
            Special Dietary Requirements
          </h2>
          <p className="text-stone-medium mb-6">{diningInfo.note}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {diningInfo.specialDiets.map((diet, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-stone-dark rounded-full shadow-sm"
              >
                {diet}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-semibold text-stone-dark mb-4">
            Reserve Your Table
          </h2>
          <p className="text-stone-medium mb-6 max-w-2xl mx-auto">
            Experience exceptional dining at Rigveda Resorts. For special occasions or group dining, advance reservations are recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = '/contact')}
            >
              Make a Reservation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = 'tel:+918012345678')}
            >
              Call: +91 80 1234 5678
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
