'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { ContactFormData } from '@/types'

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-dark mb-2">
          Full Name *
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          id="name"
          className="w-full px-4 py-3 border border-stone-light rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-transparent"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-dark mb-2">
          Email Address *
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-stone-light rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-transparent"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-dark mb-2">
          Phone Number *
        </label>
        <input
          {...register('phone', { required: 'Phone number is required' })}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-stone-light rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-transparent"
          placeholder="+91 98765 43210"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Check-in and Check-out dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-stone-dark mb-2">
            Check-in Date (Optional)
          </label>
          <input
            {...register('checkIn')}
            type="date"
            id="checkIn"
            className="w-full px-4 py-3 border border-stone-light rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-stone-dark mb-2">
            Check-out Date (Optional)
          </label>
          <input
            {...register('checkOut')}
            type="date"
            id="checkOut"
            className="w-full px-4 py-3 border border-stone-light rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-transparent"
          />
        </div>
      </div>

      {/* Guests */}
      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-stone-dark mb-2">
          Number of Guests (Optional)
        </label>
        <input
          {...register('guests', { min: 1, max: 20 })}
          type="number"
          id="guests"
          min="1"
          max="20"
          className="w-full px-4 py-3 border border-stone-light rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-transparent"
          placeholder="2"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-dark mb-2">
          Message *
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border border-stone-light rounded-md focus:outline-none focus:ring-2 focus:ring-bronze focus:border-transparent resize-none"
          placeholder="Tell us about your requirements, preferred dates, or any special requests..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">
            Thank you for your message! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">
            Sorry, there was an error sending your message. Please try again or call us directly.
          </p>
        </div>
      )}
    </form>
  )
}
