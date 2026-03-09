import React from 'react'
import { cn } from '@/lib/utils'

interface MandalaOrnProps {
  size?: number
  className?: string
}

export const MandalaOrn: React.FC<MandalaOrnProps> = ({ size = 48, className }) => {
  const innerPetals = Array.from({ length: 8 }, (_, i) => i * 45)
  const outerPetals = Array.from({ length: 8 }, (_, i) => i * 45)
  const studs = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 22.5 * Math.PI) / 180
    return { x: 24 + 16.5 * Math.sin(angle), y: 24 - 16.5 * Math.cos(angle) }
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden="true"
    >
      {/* Layer 3 — outer petals (behind inner petals) */}
      {outerPetals.map((angle) => (
        <ellipse
          key={`op-${angle}`}
          rx="2.2"
          ry="5.5"
          cx="24"
          cy="14"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}

      {/* Layer 2 — inner ring */}
      <circle cx="24" cy="24" r="9.5" fill="none" stroke="currentColor" strokeWidth="0.5" />

      {/* Layer 1 — inner petals */}
      {innerPetals.map((angle) => (
        <ellipse
          key={`ip-${angle}`}
          rx="1.5"
          ry="4"
          cx="24"
          cy="20"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}

      {/* Layer 0 — bindu */}
      <circle cx="24" cy="24" r="2.5" />

      {/* Layer 4 — stud dots */}
      {studs.map(({ x, y }, i) => (
        <circle key={`stud-${i}`} cx={x} cy={y} r="0.9" />
      ))}

      {/* Layer 5 — outer ring */}
      <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="0.6" />

      {/* Layer 6 — hairline */}
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  )
}
