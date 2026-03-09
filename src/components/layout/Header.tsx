'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Rooms', href: '/rooms' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Dining', href: '/dining' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isScrolled ? '/logo-black.png' : '/logo-white.png'}
              alt="Rigveda Resorts"
              width={140}
              height={50}
              className="h-10 w-auto transition-opacity duration-300"
              priority
            />
            <div className="text-xl font-display font-bold tracking-wide leading-tight">
              <span className={cn('block transition-colors duration-300', isScrolled ? 'text-bronze' : 'text-white')}>
                Rigveda
              </span>
              <span className={cn('block transition-colors duration-300', isScrolled ? 'text-stone-dark' : 'text-white')}>
                Resorts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-normal transition-colors duration-200 hover:text-bronze',
                  isScrolled ? 'text-stone-dark' : 'text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Phone & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918012345678"
              className={cn(
                'flex items-center space-x-2 text-sm transition-colors duration-200',
                isScrolled ? 'text-stone-dark hover:text-bronze' : 'text-white hover:text-gold'
              )}
            >
              <Phone size={18} />
              <span>+91 80 1234 5678</span>
            </a>
            <Button
              variant={isScrolled ? 'primary' : 'outline'}
              size="md"
              onClick={() => (window.location.href = '/book')}
              className={!isScrolled ? 'border-white text-white hover:bg-white hover:text-bronze' : ''}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                size={24}
                className={cn(
                  'transition-colors duration-200',
                  isScrolled ? 'text-stone-dark' : 'text-white'
                )}
              />
            ) : (
              <Menu
                size={24}
                className={cn(
                  'transition-colors duration-200',
                  isScrolled ? 'text-stone-dark' : 'text-white'
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-sand">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-dark hover:text-bronze transition-colors text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-sand">
              <a
                href="tel:+918012345678"
                className="flex items-center space-x-2 text-stone-dark hover:text-bronze mb-4"
              >
                <Phone size={18} />
                <span>+91 80 1234 5678</span>
              </a>
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  window.location.href = '/book'
                  setIsMobileMenuOpen(false)
                }}
              >
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
