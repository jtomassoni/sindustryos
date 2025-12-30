'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Loading from '@/components/ui/Loading'

interface FormData {
  name: string
  email: string
  restaurant: string
  hasWebsite: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    restaurant: '',
    hasWebsite: '',
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
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          restaurant: '',
          hasWebsite: '',
          message: '',
        })
        setSubmitStatus('idle')
      }, 3000)
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
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="restaurant" className="block text-white font-medium mb-2">
          Restaurant/Bar Name *
        </label>
        <input
          type="text"
          id="restaurant"
          name="restaurant"
          required
          value={formData.restaurant}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Your restaurant or bar name"
        />
      </div>

      <div>
        <label htmlFor="hasWebsite" className="block text-white font-medium mb-2">
          Do you currently have a website? *
        </label>
        <select
          id="hasWebsite"
          name="hasWebsite"
          required
          value={formData.hasWebsite}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Select an option</option>
          <option value="yes">Yes, I have a website</option>
          <option value="no">No, I don't have a website</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          placeholder="Tell us about your needs or ask any questions..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-600/20 border border-green-500 rounded-xl p-4 text-green-400">
          Thank you! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-600/20 border border-red-500 rounded-xl p-4 text-red-400">
          Something went wrong. Please try again.
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
          'Send Message'
        )}
      </Button>
    </form>
  )
}

