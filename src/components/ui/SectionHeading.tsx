import React from 'react'
import { cn } from '@/lib/utils'
import { MandalaOrn } from './MandalaOrn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  showOrnament?: boolean
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  showOrnament = true,
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn('mb-16', alignmentClasses[align], className)}>
      {subtitle && (
        <p className="text-bronze uppercase tracking-[3px] text-xs font-medium mb-2">
          {subtitle}
        </p>
      )}
      {subtitle && showOrnament && align === 'center' && (
        <div className="flex justify-center mb-3">
          <MandalaOrn size={36} className="text-bronze opacity-60" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-dark leading-tight">
        {title}
      </h2>
    </div>
  )
}
