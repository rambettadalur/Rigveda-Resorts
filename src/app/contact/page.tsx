import { ContactForm } from '@/components/forms/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-stone-dark to-bronze">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-cream">
            We're here to help plan your perfect getaway
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-display font-semibold text-stone-dark mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Right Column - Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-display font-semibold text-stone-dark mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-bronze rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-dark mb-1">Address</h3>
                      <p className="text-stone-medium text-sm">
                        Rigveda Resorts<br />
                        Near Belur-Halebidu,<br />
                        Hassan District,<br />
                        Karnataka 573115, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-bronze rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-dark mb-1">Phone</h3>
                      <a
                        href="tel:+918012345678"
                        className="text-bronze hover:text-bronze-light"
                      >
                        +91 80 1234 5678
                      </a>
                      <p className="text-stone-medium text-sm mt-1">
                        Available 24/7 for reservations
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-bronze rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-dark mb-1">Email</h3>
                      <a
                        href="mailto:info@rigvedaresorts.com"
                        className="text-bronze hover:text-bronze-light"
                      >
                        info@rigvedaresorts.com
                      </a>
                      <p className="text-stone-medium text-sm mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-bronze rounded-full flex items-center justify-center">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-dark mb-1">Office Hours</h3>
                      <p className="text-stone-medium text-sm">
                        Front Desk: 24/7<br />
                        Reservations: 9:00 AM - 8:00 PM (IST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-display font-semibold text-stone-dark mb-4">
                  Location
                </h2>
                <div className="relative h-64 bg-gradient-to-br from-stone-light to-sand rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-stone-medium text-sm">
                      Map placeholder - Add Google Maps embed here
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-stone-medium">
                  <p><strong>From Bangalore:</strong> 220 km via NH75 (approx. 4.5 hours)</p>
                  <p><strong>From Mysore:</strong> 145 km via SH57 (approx. 3 hours)</p>
                  <p><strong>Nearest Airport:</strong> Mangalore International (130 km)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-semibold text-stone-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-sand pb-6">
              <h3 className="text-lg font-semibold text-stone-dark mb-2">
                What is the check-in and check-out time?
              </h3>
              <p className="text-stone-medium">
                Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.
              </p>
            </div>
            <div className="border-b border-sand pb-6">
              <h3 className="text-lg font-semibold text-stone-dark mb-2">
                Do you provide airport/railway transfers?
              </h3>
              <p className="text-stone-medium">
                Yes, we can arrange airport and railway station transfers for an additional charge. Please inform us of your arrival details at least 24 hours in advance.
              </p>
            </div>
            <div className="border-b border-sand pb-6">
              <h3 className="text-lg font-semibold text-stone-dark mb-2">
                Are children allowed? Is there a special rate?
              </h3>
              <p className="text-stone-medium">
                Yes, children are welcome! Children below 5 years stay free when sharing the bed with parents. Children aged 5-12 years are charged 50% of the adult rate for an extra bed.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold text-stone-dark mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-stone-medium">
                Cancellations made 7 days or more before check-in receive a full refund. Cancellations made 3-7 days before check-in are charged 50%. Cancellations within 3 days of check-in are non-refundable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
