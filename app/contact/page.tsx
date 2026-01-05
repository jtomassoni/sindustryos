import type { Metadata } from 'next'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - SindustryOS',
  description: 'Get in touch with SindustryOS. Contact us to learn more about our restaurant and bar management platform, request a demo, or ask questions.',
  keywords: ['contact sindustryos', 'restaurant software contact', 'bar management contact'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg">
                    <FiMail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">
                      You'll receive a dedicated support email once you're onboarded
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg">
                    <FiPhone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">
                      You'll receive a dedicated support number once you're onboarded
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg">
                    <FiMapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">
                      Currently serving Denver and Baltimore areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
                <p className="text-gray-400 mb-4">
                  Once you're a customer, you'll receive dedicated support contact information 
                  to help you get the most out of SindustryOS.
                </p>
                <p className="text-gray-400">
                  For general inquiries, please use the contact form on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


