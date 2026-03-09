import React from 'react'
import Link from 'next/link'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Experience } from '@/types'
import { Clock, Users } from 'lucide-react'

interface ExperienceCardProps {
  experience: Experience
}

const categoryColors = {
  temple: 'bg-bronze text-white',
  nature: 'bg-forest text-white',
  culture: 'bg-gold text-stone-dark',
  wellness: 'bg-stone-medium text-white',
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative">
        <CardImage
          src={experience.featuredImage}
          alt={experience.title}
          className="h-56"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full uppercase tracking-wide ${
              categoryColors[experience.category]
            }`}
          >
            {experience.category}
          </span>
        </div>
      </div>
      <CardContent className="flex-1 flex flex-col">
        <h3 className="text-xl font-display font-semibold text-stone-dark mb-2">
          {experience.title}
        </h3>
        <p className="text-stone-medium text-sm mb-6 line-clamp-2">{experience.description}</p>
        <div className="flex items-center gap-4 text-xs text-stone-medium mb-4">
          {experience.duration && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{experience.duration}</span>
            </div>
          )}
          {experience.groupSize && (
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{experience.groupSize}</span>
            </div>
          )}
        </div>
        <div className="mt-auto pt-6 border-t border-sand">
          <Link href={`/experiences/${experience.slug}`}>
            <Button variant="ghost" size="sm" className="w-full">
              Learn More →
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
