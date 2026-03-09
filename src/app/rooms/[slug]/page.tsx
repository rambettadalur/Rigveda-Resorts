import { notFound } from 'next/navigation'
import { rooms } from '@/data/rooms'
import { Button } from '@/components/ui/Button'
import { RoomCard } from '@/components/cards/RoomCard'
import { Users, Maximize2, Check } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }))
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const room = rooms.find((r) => r.slug === slug)

  if (!room) {
    notFound()
  }

  // Get related rooms (same category, excluding current)
  const relatedRooms = rooms
    .filter((r) => r.category === room.category && r.slug !== room.slug)
    .slice(0, 2)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-sand py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-stone-medium">
            <Link href="/" className="hover:text-bronze">Home</Link>
            {' / '}
            <Link href="/rooms" className="hover:text-bronze">Rooms</Link>
            {' / '}
            <span className="text-stone-dark">{room.name}</span>
          </nav>
        </div>
      </div>

      {/* Room Detail */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative h-56 sm:h-80 md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-4">
                <img
                  src={room.featuredImage}
                  alt={room.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {room.gallery.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={image}
                      alt={`${room.name} gallery image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-display font-semibold text-stone-dark mb-4">
                  About This Room
                </h2>
                <p className="text-stone-medium leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Amenities */}
                <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check size={18} className="text-bronze mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-stone-medium">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                {room.features.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-display font-semibold text-stone-dark mb-4">
                      Special Features
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {room.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-sand text-stone-dark text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Booking Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-cream p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-bronze text-white text-xs font-medium rounded-full uppercase">
                    {room.category}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-display font-semibold text-stone-dark mb-2">
                  {room.name}
                </h1>
                <p className="text-stone-medium italic mb-6">{room.tagline}</p>

                {/* Room Details */}
                <div className="space-y-3 mb-6 pb-6 border-b border-sand">
                  <div className="flex items-center gap-3">
                    <Maximize2 size={20} className="text-bronze" />
                    <div>
                      <p className="text-sm text-stone-medium">Room Size</p>
                      <p className="text-stone-dark font-medium">{room.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-bronze" />
                    <div>
                      <p className="text-sm text-stone-medium">Occupancy</p>
                      <p className="text-stone-dark font-medium">
                        Up to {room.occupancy.adults} Adults
                        {room.occupancy.children && `, ${room.occupancy.children} Children`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                {room.basePrice && (
                  <div className="mb-6">
                    <p className="text-sm text-stone-medium mb-1">Starting from</p>
                    <p className="text-3xl font-display font-bold text-bronze">
                      {room.basePrice}
                    </p>
                    <p className="text-xs text-stone-medium mt-1">*Taxes not included</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href="/book" className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      Book This Room
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button variant="outline" size="md" className="w-full">
                      Request Information
                    </Button>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-sand">
                  <p className="text-sm text-stone-medium mb-2">Need assistance?</p>
                  <a
                    href="tel:+918012345678"
                    className="text-bronze font-medium hover:text-bronze-light"
                  >
                    +91 80 1234 5678
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      {relatedRooms.length > 0 && (
        <section className="py-16 bg-sand">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-semibold text-stone-dark mb-8 text-center">
              Similar Rooms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedRooms.map((relatedRoom) => (
                <RoomCard key={relatedRoom.slug} room={relatedRoom} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
