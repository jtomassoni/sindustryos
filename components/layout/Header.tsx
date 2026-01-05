'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
  
  return (
    <header className="sticky top-0 z-50 bg-warm-50/95 backdrop-blur-sm border-b border-dark-200">
      <nav className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-semibold text-dark-900 tracking-tight">SindustryOS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark-700 hover:text-dark-900 transition-colors font-normal text-sm tracking-wide uppercase"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/contact"
              className="text-dark-900 border-b border-dark-900 pb-1 hover:opacity-70 transition-opacity text-sm tracking-wide uppercase"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-700 hover:text-dark-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-dark-200">
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark-700 hover:text-dark-900 transition-colors font-normal text-sm tracking-wide uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/contact"
                className="text-dark-900 border-b border-dark-900 pb-1 w-fit text-sm tracking-wide uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


