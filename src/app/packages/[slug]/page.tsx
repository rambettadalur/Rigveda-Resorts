import { notFound } from 'next/navigation'
import { packages } from '@/data/packages'
import { experiences } from '@/data/experiences'
import { Button } from '@/components/ui/Button'
import { BookPackageButton } from '@/components/ui/BookPackageButton'
import { PackageCard } from '@/components/cards/PackageCard'
import { Check, X, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }))
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = packages.find((p) => p.slug === slug)

  if (!pkg) {
    notFound()
  }

  // Get included experiences details
  const includedExperiences = pkg.experiences
    ? experiences.filter((exp) => pkg.experiences?.includes(exp.slug))
    : []

  // Get related packages (excluding current)
  const relatedPackages = packages
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 2)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-sand py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-stone-medium">
            <Link href="/" className="hover:text-bronze">Home</Link>
            {' / '}
            <Link href="/packages" className="hover:text-bronze">Packages</Link>
            {' / '}
            <span className="text-stone-dark">{pkg.title}</span>
          </nav>
        </div>
      </div>

      {/* Package Header */}
      <section className="relative h-[50vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-bronze to-gold">
          {/* Placeholder - replace with actual image */}
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          {pkg.badge && (
            <span className="inline-block px-4 py-2 bg-gold text-stone-dark text-sm font-semibold rounded-full mb-4">
              {pkg.badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-white mb-2">
            {pkg.title}
          </h1>
          <p className="text-xl text-cream">{pkg.subtitle}</p>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-semibold text-stone-dark mb-4">
                  Package Overview
                </h2>
                <p className="text-stone-medium leading-relaxed mb-4">
                  {pkg.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-sand px-4 py-2 rounded-full">
                    <Calendar size={16} className="text-bronze" />
                    <span className="text-stone-dark">{pkg.nights} Nights</span>
                  </div>
                  {pkg.promoCode && (
                    <div className="flex items-center gap-2 bg-sand px-4 py-2 rounded-full">
                      <Tag size={16} className="text-bronze" />
                      <span className="text-stone-dark">Promo: {pkg.promoCode}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {pkg.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={20} className="text-bronze mt-0.5 flex-shrink-0" />
                      <span className="text-stone-medium">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              {pkg.exclusions && pkg.exclusions.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                    Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((exclusion, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X size={18} className="text-stone-light mt-0.5 flex-shrink-0" />
                        <span className="text-stone-medium text-sm">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Included Experiences */}
              {includedExperiences.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                    Experiences Included
                  </h3>
                  <div className="space-y-4">
                    {includedExperiences.map((exp) => (
                      <Link
                        key={exp.slug}
                        href={`/experiences/${exp.slug}`}
                        className="block p-4 bg-sand rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-semibold text-stone-dark mb-1">{exp.title}</h4>
                        <p className="text-sm text-stone-medium">{exp.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Sample Itinerary */}
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                  Sample Itinerary
                </h3>
                <div className="space-y-4">
                  {Array.from({ length: pkg.nights + 1 }, (_, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-bronze rounded-full flex items-center justify-center text-white font-semibold">
                        D{i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-dark">
                          Day {i + 1}
                          {i === 0 && ' - Arrival'}
                          {i === pkg.nights && ' - Departure'}
                        </h4>
                        <p className="text-sm text-stone-medium">
                          {i === 0 && 'Check-in, welcome drink, resort orientation, evening at leisure'}
                          {i > 0 && i < pkg.nights && 'Breakfast, scheduled activities, dinner'}
                          {i === pkg.nights && 'Breakfast, check-out'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-medium mt-4 italic">
                  *This is a sample itinerary. Actual schedule may vary based on availability and preferences.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-cream p-6 rounded-lg shadow-lg">
                {/* Pricing */}
                {pkg.priceFrom && (
                  <div className="mb-6 pb-6 border-b border-sand">
                    <p className="text-sm text-stone-medium mb-1">Starting from</p>
                    <p className="text-4xl font-display font-bold text-bronze mb-1">
                      {pkg.priceFrom}
                    </p>
                    <p className="text-xs text-stone-medium">
                      Per package for 2 guests<br />
                      *Taxes additional
                    </p>
                  </div>
                )}

                {/* Validity */}
                <div className="mb-6">
                  <p className="text-sm text-stone-medium mb-1">Validity</p>
                  <p className="text-stone-dark font-medium">{pkg.validity}</p>
                </div>

                {/* Promo Code */}
                {pkg.promoCode && (
                  <div className="mb-6 p-4 bg-gold/20 rounded-lg border border-gold">
                    <p className="text-sm text-stone-medium mb-1">Promo Code</p>
                    <p className="text-lg font-semibold text-bronze">{pkg.promoCode}</p>
                    <p className="text-xs text-stone-medium mt-1">
                      Use this code at checkout for special pricing
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3 mb-6">
                  <BookPackageButton promoCode={pkg.promoCode} />
                  <Link href={`/contact?package=${pkg.slug}`} className="block">
                    <Button variant="outline" size="md" className="w-full">
                      Customize Package
                    </Button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-sand">
                  <p className="text-sm text-stone-medium mb-3">Need help booking?</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Packages */}
      {relatedPackages.length > 0 && (
        <section className="py-16 bg-sand">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold text-stone-dark mb-8 text-center">
              Other Packages You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPackages.map((relatedPkg) => (
                <PackageCard key={relatedPkg.slug} package={relatedPkg} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
