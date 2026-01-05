import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    product: [
      { name: 'Full Web CMS', href: '/products/cms' },
      { name: 'Private Dining', href: '/products/private-dining' },
      { name: 'Digital Signage', href: '/products/digital-signage' },
      { name: 'Features', href: '/features' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }
  
  return (
    <footer className="bg-dark-900 text-warm-100 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold text-warm-50 tracking-tight">SindustryOS</span>
            </Link>
            <p className="text-warm-200 text-sm leading-relaxed">
              All-in-one restaurant and bar management platform. One platform replaces multiple vendors.
            </p>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-warm-50 font-normal mb-6 text-sm tracking-wide uppercase">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-200 hover:text-warm-50 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-warm-50 font-normal mb-6 text-sm tracking-wide uppercase">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-200 hover:text-warm-50 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-warm-50 font-normal mb-6 text-sm tracking-wide uppercase">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-200 hover:text-warm-50 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <p className="text-warm-300 text-sm text-center">
            © {currentYear} SindustryOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


