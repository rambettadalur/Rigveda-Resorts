'use client'

import { Button } from '@/components/ui/Button'

export default function BookPage() {
  const siteminderUrl = process.env.NEXT_PUBLIC_SITEMINDER_PROPERTY_ID
    ? `https://bookings.siteminder.com/property/${process.env.NEXT_PUBLIC_SITEMINDER_PROPERTY_ID}`
    : '#'

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[30vh] sm:h-[35vh] flex items-center justify-center bg-gradient-to-r from-bronze to-gold mt-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
            Book Your Stay
          </h1>
          <p className="text-lg text-cream">Secure your reservation at Rigveda Resorts</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          {/* Siteminder Iframe Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-5 sm:p-8 mb-8 sm:mb-12">
            <div className="min-h-[400px] sm:min-h-[600px] flex items-center justify-center bg-sand rounded-lg">
              <div className="text-center p-8">
                <h2 className="text-2xl font-display font-semibold text-stone-dark mb-4">
                  Siteminder Booking Widget
                </h2>
                <p className="text-stone-medium mb-6">
                  The booking engine will be integrated here once Siteminder is configured.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-stone-medium">
                    To complete the integration:
                  </p>
                  <ol className="text-sm text-stone-medium text-left max-w-md mx-auto space-y-2">
                    <li>1. Get your Siteminder Property ID</li>
                    <li>2. Update NEXT_PUBLIC_SITEMINDER_PROPERTY_ID in .env.local</li>
                    <li>3. Uncomment the iframe code below</li>
                  </ol>
                </div>
              </div>
              {/*
                Uncomment this once Siteminder is configured:
                <iframe
                  src={siteminderUrl}
                  className="w-full min-h-[800px] border-0"
                  title="Book Your Stay at Rigveda Resorts"
                />
              */}
            </div>
          </div>

          {/* Alternative Booking Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                Book by Phone
              </h3>
              <p className="text-stone-medium mb-6">
                Speak directly with our reservations team for personalized assistance.
              </p>
              <a
                href="tel:+918012345678"
                className="inline-block px-6 py-3 bg-bronze text-white rounded-md hover:bg-bronze-light transition-colors"
              >
                Call: +91 80 1234 5678
              </a>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                Email Inquiry
              </h3>
              <p className="text-stone-medium mb-6">
                Send us your requirements and we'll get back to you within 24 hours.
              </p>
              <Button
                variant="outline"
                size="md"
                onClick={() => (window.location.href = '/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Booking Benefits */}
          <div className="mt-8 sm:mt-12 bg-white p-5 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-display font-semibold text-stone-dark mb-6 text-center">
              Why Book Direct?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl sm:text-2xl font-bold">₹</span>
                </div>
                <h4 className="font-semibold text-stone-dark mb-2">Best Rate Guarantee</h4>
                <p className="text-sm text-stone-medium">
                  Lowest prices available when you book directly with us
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl sm:text-2xl font-bold">⚡</span>
                </div>
                <h4 className="font-semibold text-stone-dark mb-2">Instant Confirmation</h4>
                <p className="text-sm text-stone-medium">
                  Receive immediate booking confirmation
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bronze rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl sm:text-2xl font-bold">★</span>
                </div>
                <h4 className="font-semibold text-stone-dark mb-2">Exclusive Perks</h4>
                <p className="text-sm text-stone-medium">
                  Complimentary upgrades and special amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
