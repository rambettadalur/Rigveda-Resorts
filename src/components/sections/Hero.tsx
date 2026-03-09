'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { MandalaBg } from '@/components/ui/MandalaBg'

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (Placeholder - replace with actual resort video) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <MandalaBg size={520} opacity={0.05} className="-top-20 -right-20 text-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-white mb-8 italic leading-tight">
            Where Heritage Meets Serenity
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-cream mb-10 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the Hoysala Legacy from Rigveda Resorts
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/rooms')}
            className="border-white text-white hover:bg-white hover:text-bronze min-w-[180px]"
          >
            Explore Rooms
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = '/book')}
            className="min-w-[180px]"
          >
            Book Your Stay
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
