import React from 'react'
import Link from 'next/link'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Package } from '@/types'
import { Check } from 'lucide-react'

interface PackageCardProps {
  package: Package
}

export const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative">
        <CardImage
          src={pkg.featuredImage}
          alt={pkg.title}
          className="h-48"
        />
        {pkg.badge && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 bg-gold text-stone-dark text-xs font-semibold rounded-full">
              {pkg.badge}
            </span>
          </div>
        )}
      </div>
      <CardContent className="flex-1 flex flex-col">
        <h3 className="text-xl font-display font-semibold text-stone-dark mb-1">
          {pkg.title}
        </h3>
        <p className="text-bronze text-sm font-medium mb-3">{pkg.subtitle}</p>
        <p className="text-stone-medium text-sm mb-6 line-clamp-2">{pkg.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-stone-dark mb-2">Inclusions:</h4>
          <ul className="space-y-1">
            {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-stone-medium">
                <Check size={14} className="text-bronze mt-0.5 flex-shrink-0" />
                <span>{inclusion}</span>
              </li>
            ))}
            {pkg.inclusions.length > 3 && (
              <li className="text-xs text-bronze font-medium">
                +{pkg.inclusions.length - 3} more
              </li>
            )}
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-sand">
          <div className="flex items-end justify-between mb-4">
            {pkg.priceFrom && (
              <div>
                <p className="text-xs text-stone-medium">Starting from</p>
                <p className="text-lg font-semibold text-bronze">{pkg.priceFrom}</p>
              </div>
            )}
            <p className="text-xs text-stone-medium">{pkg.validity}</p>
          </div>
          <Link href={`/packages/${pkg.slug}`}>
            <Button variant="primary" size="sm" className="w-full">
              View Package Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
