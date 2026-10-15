'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Loading from '@/components/ui/Loading'

interface FormData {
  name: string
  email: string
  restaurant: string
  interest: string
  pos: string
  message: string
}

const interestLabels: Record<string, string> = {
  'menu-insights': 'Analytics engine / menu read',
  bundle: 'Complete Bundle',
  website: 'Customizable website',
  'private-dining': 'Private dining',
  signage: 'Digital signage',
  social: 'Social media connection',
  'not-sure': 'Not sure yet',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    restaurant: '',
    interest: 'menu-insights',
    pos: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitStatus('success')

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          restaurant: '',
          interest: 'menu-insights',
          pos: '',
          message: '',
        })
        setSubmitStatus('idle')
      }, 4000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white font-medium mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="you@restaurant.com"
        />
      </div>

      <div>
        <label htmlFor="restaurant" className="block text-white font-medium mb-2">
          Restaurant / bar name *
        </label>
        <input
          type="text"
          id="restaurant"
          name="restaurant"
          required
          value={formData.restaurant}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Your venue name"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-white font-medium mb-2">
          What do you want first? *
        </label>
        <select
          id="interest"
          name="interest"
          required
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {Object.entries(interestLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="pos" className="block text-white font-medium mb-2">
          Current POS *
        </label>
        <select
          id="pos"
          name="pos"
          required
          value={formData.pos}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Select POS</option>
          <option value="toast">Toast</option>
          <option value="square">Square</option>
          <option value="clover">Clover</option>
          <option value="other">Other</option>
          <option value="none">No POS / not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Anything we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          placeholder="Locations, busy nights, or a link to a sales export if you already have one…"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-600/20 border border-green-500 rounded-xl p-4 text-green-400">
          Got it. We typically reply within one business day with next steps for your menu read.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-600/20 border border-red-500 rounded-xl p-4 text-red-400">
          Something went wrong. Email hello@sindustryos.com or try again.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loading size="sm" />
            Sending...
          </span>
        ) : (
          'Request a menu read'
        )}
      </Button>
      <p className="text-sm text-gray-500 text-center">
        Or email{' '}
        <a href="mailto:hello@sindustryos.com" className="text-primary-400 hover:text-primary-300">
          hello@sindustryos.com
        </a>
      </p>
    </form>
  )
}
