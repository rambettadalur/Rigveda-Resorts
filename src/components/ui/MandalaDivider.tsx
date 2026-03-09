import React from 'react'
import { cn } from '@/lib/utils'
import { MandalaOrn } from './MandalaOrn'

interface MandalaDividerProps {
  color?: string
  className?: string
}

export const MandalaDivider: React.FC<MandalaDividerProps> = ({
  color = 'text-bronze/30',
  className,
}) => {
  return (
    <div
      className={cn('flex items-center gap-4', color, className)}
      aria-hidden="true"
      role="presentation"
    >
      <div className="flex-1 border-t border-current opacity-40" />
      <MandalaOrn size={36} />
      <div className="flex-1 border-t border-current opacity-40" />
    </div>
  )
}
