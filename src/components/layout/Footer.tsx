import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-white.png"
                alt="Rigveda Resorts"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
              <h3 className="text-2xl font-display font-bold">
                <span className="text-bronze">Rigveda</span> Resorts
              </h3>
            </div>
            <p className="text-sm text-stone-light leading-relaxed">
              Experience luxury amidst heritage. Located near the magnificent Hoysala temples of
              Belur and Halebidu, Rigveda Resorts offers a perfect blend of culture, nature, and
              comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rooms"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Experiences</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/experiences/hoysala-temple-tour"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Temple Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/nature-walk-birdwatching"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Nature & Wildlife
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/coffee-plantation-tour"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Coffee Plantation
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/village-cultural-walk"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Cultural Walks
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/yoga-meditation-session"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  Yoga & Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-bronze mt-1 flex-shrink-0" />
                <span className="text-sm text-stone-light">
                  Rigveda Resorts<br />
                  Near Belur-Halebidu,<br />
                  Hassan District, Karnataka 573115
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-bronze flex-shrink-0" />
                <a
                  href="tel:+918012345678"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  +91 80 1234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-bronze flex-shrink-0" />
                <a
                  href="mailto:info@rigvedaresorts.com"
                  className="text-sm text-stone-light hover:text-bronze transition-colors"
                >
                  info@rigvedaresorts.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-light hover:text-bronze transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-light hover:text-bronze transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-light hover:text-bronze transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-medium pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-stone-light">
              © {new Date().getFullYear()} Rigveda Resorts. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-stone-light hover:text-bronze transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-sm text-stone-light hover:text-bronze transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
