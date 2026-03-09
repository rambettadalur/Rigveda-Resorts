import React from 'react'
import { cn } from '@/lib/utils'

interface FilterOption {
  value: string
  label: string
}

interface FilterBarProps {
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
  variant?: 'pill' | 'tab'
  className?: string
}

export function FilterBar({ options, value, onChange, variant = 'pill', className }: FilterBarProps) {
  if (variant === 'tab') {
    return (
      <div className={cn('flex gap-8 border-b border-sand', className)}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              'pb-3 text-sm font-medium tracking-wide transition-colors duration-200 relative',
              option.value === value
                ? 'text-bronze border-b-2 border-bronze -mb-px'
                : 'text-stone-medium hover:text-stone-dark'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('flex flex-wrap justify-center gap-3', className)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            'px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase border transition-all duration-200',
            option.value === value
              ? 'border-bronze bg-bronze text-white shadow-sm'
              : 'border-stone-light text-stone-medium hover:border-bronze hover:text-bronze'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
