'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Heart, Award, Users, Leaf } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-stone-dark via-bronze to-forest">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">About Us</h1>
          <p className="text-lg text-cream max-w-3xl mx-auto">
            Where ancient heritage meets modern luxury in the heart of Karnataka
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <SectionHeading subtitle="Our Story" title="Welcome to Rigveda Resorts" align="center" />
          <div className="space-y-4 text-stone-medium leading-relaxed">
            <p>
              Rigveda Resorts was born from a vision to create a sanctuary where guests can immerse
              themselves in the rich cultural heritage of Karnataka while enjoying contemporary
              comforts and warm hospitality.
            </p>
            <p>
              Located just minutes from the UNESCO World Heritage-nominated Hoysala temples of
              Belur and Halebidu, our resort serves as the perfect gateway to explore these 12th-century
              architectural marvels. The intricate stone carvings and magnificent temple architecture
              inspired our resort's design philosophy, blending traditional aesthetics with modern amenities.
            </p>
            <p>
              Surrounded by the natural beauty of the Western Ghats, coffee plantations, and diverse
              wildlife, Rigveda Resorts offers more than just accommodation—it's an experience that
              connects you with history, nature, and local culture.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Our Values" title="What We Stand For" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-dark mb-3">
                Hospitality
              </h3>
              <p className="text-stone-medium text-sm">
                Genuine warmth and personalized service that makes every guest feel at home
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-dark mb-3">
                Excellence
              </h3>
              <p className="text-stone-medium text-sm">
                Commitment to the highest standards in every aspect of your experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-dark mb-3">
                Community
              </h3>
              <p className="text-stone-medium text-sm">
                Supporting local artisans, farmers, and preserving regional traditions
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-dark mb-3">
                Sustainability
              </h3>
              <p className="text-stone-medium text-sm">
                Eco-friendly practices to protect the natural beauty around us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-display font-semibold text-stone-dark mb-6">
                The Perfect Location
              </h2>
              <div className="space-y-4 text-stone-medium">
                <p>
                  Strategically positioned in Hassan district, Rigveda Resorts offers easy access
                  to some of Karnataka's most significant cultural and natural attractions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Belur Temple:</strong> 10 km - Chennakeshava Temple, a masterpiece of Hoysala architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Halebidu Temple:</strong> 16 km - Hoysaleswara Temple with its intricate carvings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Coffee Plantations:</strong> Experience Karnataka's famous coffee culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze font-bold">•</span>
                    <span><strong>Western Ghats:</strong> Rich biodiversity and stunning landscapes</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&h=600&fit=crop&q=80"
                alt="Rigveda Resorts location"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-bronze to-stone-medium text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-semibold mb-6">
            Begin Your Journey with Us
          </h2>
          <p className="text-xl text-cream mb-8 max-w-2xl mx-auto">
            Discover the perfect blend of heritage, nature, and luxury at Rigveda Resorts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = '/rooms')}
              className="bg-white text-bronze hover:bg-cream"
            >
              Explore Rooms
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = '/book')}
              className="border-white text-white hover:bg-white hover:text-bronze"
            >
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
