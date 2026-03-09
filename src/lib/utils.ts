import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Date(dateString).toLocaleDateString('en-IN', options)
}

export function formatPrice(price: string): string {
  // Ensures consistent price formatting
  return price.startsWith('₹') ? price : `₹${price}`
}
