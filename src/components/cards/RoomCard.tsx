import React from 'react'
import Link from 'next/link'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Room } from '@/types'
import { Users, Maximize2 } from 'lucide-react'

interface RoomCardProps {
  room: Room
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <CardImage
        src={room.featuredImage}
        alt={room.name}
        className="h-64"
      />
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-sand text-bronze text-xs font-medium rounded-full uppercase tracking-wide">
            {room.category}
          </span>
        </div>
        <h3 className="text-xl font-display font-semibold text-stone-dark mb-2">
          {room.name}
        </h3>
        <p className="text-stone-medium text-sm italic mb-6">{room.tagline}</p>
        <div className="flex items-center gap-4 text-sm text-stone-medium mb-4">
          <div className="flex items-center gap-1">
            <Maximize2 size={16} />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>Up to {room.occupancy.adults} Adults</span>
          </div>
        </div>
        <div className="flex items-end justify-between mt-auto pt-6 border-t border-sand">
          {room.basePrice && (
            <div>
              <p className="text-sm text-stone-medium">Starting from</p>
              <p className="text-lg font-semibold text-bronze">{room.basePrice}</p>
            </div>
          )}
          <Link href={`/rooms/${room.slug}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
