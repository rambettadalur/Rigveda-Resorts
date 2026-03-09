import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide'

    const variants = {
      primary: 'bg-bronze text-white hover:bg-bronze-light focus:ring-bronze',
      secondary: 'bg-stone-medium text-white hover:bg-stone-dark focus:ring-stone-medium',
      outline: 'border-2 border-bronze text-bronze hover:bg-bronze hover:text-white focus:ring-bronze',
      ghost: 'text-stone-dark hover:bg-sand focus:ring-stone-medium',
    }

    const sizes = {
      sm: 'px-5 py-2 text-sm',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3 text-base',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
