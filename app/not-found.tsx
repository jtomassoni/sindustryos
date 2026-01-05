import Link from 'next/link'
import Button from '@/components/ui/Button'
import { FiHome, FiSearch } from 'react-icons/fi'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" size="lg" className="flex items-center gap-2">
              <FiHome className="w-5 h-5" />
              Go Home
            </Button>
            <Button href="/products" variant="outline" size="lg" className="flex items-center gap-2">
              <FiSearch className="w-5 h-5" />
              Browse Products
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-dark-700">
            <p className="text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products/cms" className="text-primary-500 hover:text-primary-400 transition-colors">
                Full Web CMS
              </Link>
              <Link href="/pricing" className="text-primary-500 hover:text-primary-400 transition-colors">
                Pricing
              </Link>
              <Link href="/features" className="text-primary-500 hover:text-primary-400 transition-colors">
                Features
              </Link>
              <Link href="/contact" className="text-primary-500 hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


