'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { MandalaOrn } from './MandalaOrn'

interface MandalaBgProps {
  size?: number
  opacity?: number
  className?: string
}

export const MandalaBg: React.FC<MandalaBgProps> = ({
  size = 480,
  opacity = 0.04,
  className,
}) => {
  return (
    <motion.div
      className={cn('absolute pointer-events-none select-none', className)}
      style={{ opacity }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      aria-hidden="true"
    >
      <MandalaOrn size={size} />
    </motion.div>
  )
}
