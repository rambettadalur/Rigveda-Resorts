'use client'

import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { CTASection } from '@/components/sections/CTASection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RoomCard } from '@/components/cards/RoomCard'
import { ExperienceCard } from '@/components/cards/ExperienceCard'
import { PackageCard } from '@/components/cards/PackageCard'
import { rooms } from '@/data/rooms'
import { experiences } from '@/data/experiences'
import { packages } from '@/data/packages'
import { Button } from '@/components/ui/Button'
import { MandalaDivider } from '@/components/ui/MandalaDivider'
import Link from 'next/link'

export default function Home() {
  // Featured content for homepage
  const featuredRooms = rooms.slice(0, 3)
  const featuredExperiences = experiences.slice(0, 4)
  const featuredPackages = packages.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      <MandalaDivider className="py-1" />

      {/* Rooms Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <SectionHeading
            subtitle="Accommodations"
            title="Luxurious Rooms & Suites"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredRooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/rooms">
              <Button variant="outline" size="lg">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MandalaDivider className="py-1" />

      {/* Experiences Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-sand">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <SectionHeading
            subtitle="Discover"
            title="Curated Experiences"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {featuredExperiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/experiences">
              <Button variant="primary" size="lg">
                Explore All Experiences
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MandalaDivider className="py-1" />

      {/* Packages Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <SectionHeading
            subtitle="Special Offers"
            title="Vacation Packages"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} package={pkg} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/packages">
              <Button variant="outline" size="lg">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MandalaDivider className="py-1" />

      {/* Location Highlight */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle="Location"
              title="Gateway to Hoysala Heritage"
              align="center"
            />
            <p className="text-stone-medium leading-relaxed mb-8">
              Rigveda Resorts is strategically located just 10 km from the UNESCO World Heritage-nominated Hoysala
              temples of Belur and Halebidu. These 12th-century architectural marvels showcase intricate stone carvings
              and exemplify the finest craftsmanship of the Hoysala dynasty. Our resort serves as the perfect base for
              exploring these historic sites, as well as the natural beauty of the Western Ghats region.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-display font-bold text-bronze mb-2">10 km</p>
                <p className="text-sm text-stone-medium">From Belur Temple</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-display font-bold text-bronze mb-2">16 km</p>
                <p className="text-sm text-stone-medium">From Halebidu Temple</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-display font-bold text-bronze mb-2">220 km</p>
                <p className="text-sm text-stone-medium">From Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
