'use client'

import { Button } from '@/components/ui/Button'
import { buildSiteMinderURL } from '@/lib/siteminder'

interface BookPackageButtonProps {
  promoCode?: string
}

export const BookPackageButton: React.FC<BookPackageButtonProps> = ({ promoCode }) => {
  const handleClick = () => {
    if (promoCode) {
      const bookingURL = buildSiteMinderURL({ promoCode })
      window.open(bookingURL, '_blank')
    } else {
      window.location.href = '/book'
    }
  }

  return (
    <Button variant="primary" size="lg" className="w-full" onClick={handleClick}>
      Book This Package
    </Button>
  )
}
