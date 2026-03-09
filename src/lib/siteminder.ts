const SITEMINDER_PROPERTY_ID = process.env.NEXT_PUBLIC_SITEMINDER_PROPERTY_ID || 'YOUR_PROPERTY_ID'
const SITEMINDER_BASE_URL = `https://bookings.siteminder.com/property/${SITEMINDER_PROPERTY_ID}`

export interface BookingParams {
  checkIn?: string      // Format: YYYY-MM-DD
  checkOut?: string     // Format: YYYY-MM-DD
  adults?: number
  children?: number
  promoCode?: string
  roomType?: string
}

export function buildSiteMinderURL(params: BookingParams): string {
  const url = new URL(SITEMINDER_BASE_URL)

  if (params.checkIn) url.searchParams.set('arrival', params.checkIn)
  if (params.checkOut) url.searchParams.set('departure', params.checkOut)
  if (params.adults) url.searchParams.set('adults', String(params.adults))
  if (params.children) url.searchParams.set('children', String(params.children))
  if (params.promoCode) url.searchParams.set('promoCode', params.promoCode)
  if (params.roomType) url.searchParams.set('roomType', params.roomType)

  return url.toString()
}

// Helper function to open booking in new tab
export function openBooking(params: BookingParams): void {
  const url = buildSiteMinderURL(params)
  window.open(url, '_blank', 'noopener,noreferrer')
}
