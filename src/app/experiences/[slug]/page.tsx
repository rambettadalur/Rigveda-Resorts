import { notFound } from 'next/navigation'
import { experiences } from '@/data/experiences'
import { Button } from '@/components/ui/Button'
import { ExperienceCard } from '@/components/cards/ExperienceCard'
import { Clock, Users, Calendar, Check } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }))
}

const categoryColors = {
  temple: 'bg-bronze text-white',
  nature: 'bg-forest text-white',
  culture: 'bg-gold text-stone-dark',
  wellness: 'bg-stone-medium text-white',
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const experience = experiences.find((e) => e.slug === slug)

  if (!experience) {
    notFound()
  }

  // Get related experiences (same category, excluding current)
  const relatedExperiences = experiences
    .filter((e) => e.category === experience.category && e.slug !== experience.slug)
    .slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-sand py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-stone-medium">
            <Link href="/" className="hover:text-bronze">Home</Link>
            {' / '}
            <Link href="/experiences" className="hover:text-bronze">Experiences</Link>
            {' / '}
            <span className="text-stone-dark">{experience.title}</span>
          </nav>
        </div>
      </div>

      {/* Experience Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] md:h-[60vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-dark to-bronze">
          {/* Placeholder - replace with actual image */}
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <span
            className={`inline-block px-4 py-2 text-sm font-medium rounded-full uppercase mb-4 ${
              categoryColors[experience.category]
            }`}
          >
            {experience.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white mb-4">
            {experience.title}
          </h1>
          <p className="text-xl text-cream italic max-w-2xl">
            {experience.tagline}
          </p>
        </div>
      </section>

      {/* Experience Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-sand">
                {experience.duration && (
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-bronze" />
                    <div>
                      <p className="text-sm text-stone-medium">Duration</p>
                      <p className="text-stone-dark font-medium">{experience.duration}</p>
                    </div>
                  </div>
                )}
                {experience.groupSize && (
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-bronze" />
                    <div>
                      <p className="text-sm text-stone-medium">Group Size</p>
                      <p className="text-stone-dark font-medium">{experience.groupSize}</p>
                    </div>
                  </div>
                )}
                {experience.seasonality && (
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-bronze" />
                    <div>
                      <p className="text-sm text-stone-medium">Availability</p>
                      <p className="text-stone-dark font-medium">{experience.seasonality}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Long Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-semibold text-stone-dark mb-4">
                  Overview
                </h2>
                <p className="text-stone-medium leading-relaxed">
                  {experience.longDescription}
                </p>
              </div>

              {/* Highlights */}
              {experience.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={18} className="text-bronze mt-1 flex-shrink-0" />
                        <span className="text-stone-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What's Included */}
              {experience.includes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                    What&apos;s Included
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check size={16} className="text-bronze mt-1 flex-shrink-0" />
                        <span className="text-sm text-stone-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {experience.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {experience.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-stone-medium to-bronze">
                          {/* Placeholder - replace with actual image */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-cream p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                  Book This Experience
                </h3>
                <p className="text-sm text-stone-medium mb-6">
                  This experience can be added to your stay or booked separately. Contact us for pricing and availability.
                </p>

                <div className="space-y-3 mb-6">
                  <Link href={`/contact?experience=${experience.slug}`} className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      Enquire Now
                    </Button>
                  </Link>
                  <Link href="/packages" className="block">
                    <Button variant="outline" size="md" className="w-full">
                      View Packages
                    </Button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-sand">
                  <p className="text-sm text-stone-medium mb-3">
                    For immediate booking assistance:
                  </p>
                  <a
                    href="tel:+918012345678"
                    className="text-bronze font-semibold hover:text-bronze-light block mb-2"
                  >
                    +91 80 1234 5678
                  </a>
                  <a
                    href="mailto:info@rigvedaresorts.com"
                    className="text-sm text-stone-medium hover:text-bronze block"
                  >
                    info@rigvedaresorts.com
                  </a>
                </div>

                {/* Important Note */}
                <div className="mt-6 p-4 bg-sand rounded-lg">
                  <p className="text-xs text-stone-medium">
                    <strong>Note:</strong> Some experiences require advance booking and are subject to availability and weather conditions. Please confirm at the time of booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Experiences */}
      {relatedExperiences.length > 0 && (
        <section className="py-16 bg-sand">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold text-stone-dark mb-8 text-center">
              More {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)} Experiences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {relatedExperiences.map((relatedExp) => (
                <ExperienceCard key={relatedExp.slug} experience={relatedExp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
