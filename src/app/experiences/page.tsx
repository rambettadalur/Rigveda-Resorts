'use client'

import React, { useState } from 'react'
import { FilterBar } from '@/components/ui/FilterBar'
import { ExperienceCard } from '@/components/cards/ExperienceCard'
import { PackageCard } from '@/components/cards/PackageCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experiences'
import { packages } from '@/data/packages'

type Tab = 'experiences' | 'packages'
type ExperienceCategory = 'all' | 'temple' | 'nature' | 'culture' | 'wellness'

export default function ExperiencesPage() {
  const [activeTab, setActiveTab] = useState<Tab>('experiences')
  const [selectedCategory, setSelectedCategory] = useState<ExperienceCategory>('all')

  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences.filter((exp) => exp.category === selectedCategory)

  const tabs = [
    { value: 'experiences', label: 'Experiences' },
    { value: 'packages', label: 'Packages' },
  ]

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'temple', label: 'Temple Tours' },
    { value: 'nature', label: 'Nature & Wildlife' },
    { value: 'culture', label: 'Cultural' },
    { value: 'wellness', label: 'Wellness' },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center bg-gradient-to-r from-forest to-bronze">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
            Experiences & Packages
          </h1>
          <p className="text-base sm:text-lg text-cream max-w-2xl mx-auto">
            Discover curated journeys and all-inclusive packages in the heart of Karnataka
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="bg-white sticky top-[90px] z-40">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <FilterBar
            variant="tab"
            options={tabs}
            value={activeTab}
            onChange={(v) => setActiveTab(v as Tab)}
          />
        </div>
      </div>

      {/* Experiences Tab */}
      {activeTab === 'experiences' && (
        <>
          <section className="py-12 sm:py-16 lg:py-24 bg-cream">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
              {/* Category Filters */}
              <FilterBar
                options={categories}
                value={selectedCategory}
                onChange={(v) => setSelectedCategory(v as ExperienceCategory)}
                className="mb-8"
              />

              {/* Experiences Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperiences.map((experience) => (
                  <ExperienceCard key={experience.slug} experience={experience} />
                ))}
              </div>

              {filteredExperiences.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-stone-medium text-lg">No experiences found in this category.</p>
                </div>
              )}
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
              <h2 className="text-3xl font-display font-semibold text-stone-dark mb-4">
                Customize Your Experience
              </h2>
              <p className="text-stone-medium mb-6 leading-relaxed">
                All experiences can be customized to suit your preferences and schedule.
                Some activities require advance booking and are subject to availability and weather conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-bronze text-white rounded-md hover:bg-bronze-light transition-colors"
                >
                  Plan Your Itinerary
                </a>
                <a
                  href="tel:+918012345678"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-bronze text-bronze rounded-md hover:bg-bronze hover:text-white transition-colors"
                >
                  Call: +91 80 1234 5678
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Packages Tab */}
      {activeTab === 'packages' && (
        <>
          <section className="py-12 sm:py-16 lg:py-24 bg-cream">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
              <div className="max-w-5xl mx-auto mb-8 sm:mb-12 text-center">
                <p className="text-stone-medium leading-relaxed">
                  Our curated packages combine luxurious accommodation, authentic experiences, and exceptional service.
                  Each package can be customized to suit your preferences and travel dates.
                </p>
              </div>

              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <PackageCard key={pkg.slug} package={pkg} />
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
              <SectionHeading
                subtitle="Why Book a Package"
                title="Package Benefits"
                align="center"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">₹</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-2">Best Value</h3>
                  <p className="text-stone-medium text-sm">
                    Save up to 20% compared to booking individually. Packages include exclusive perks and complimentary services.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-2">Hassle-Free</h3>
                  <p className="text-stone-medium text-sm">
                    Everything planned for you. Just arrive and enjoy your vacation without worrying about arrangements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">★</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-2">Curated Experiences</h3>
                  <p className="text-stone-medium text-sm">
                    Our experts have designed itineraries to showcase the best of Belur, Halebidu, and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-sand">
            <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
              <h2 className="text-3xl font-display font-semibold text-stone-dark mb-4">
                Need a Custom Package?
              </h2>
              <p className="text-stone-medium mb-6 leading-relaxed">
                We can create a personalized package based on your interests, budget, and travel dates.
                Whether you're planning a family vacation, romantic getaway, or group trip, we'll tailor an itinerary just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-bronze text-white rounded-md hover:bg-bronze-light transition-colors"
                >
                  Request Custom Package
                </a>
                <a
                  href="tel:+918012345678"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-bronze text-bronze rounded-md hover:bg-bronze hover:text-white transition-colors"
                >
                  Call: +91 80 1234 5678
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
