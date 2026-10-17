import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Analytics engine', href: '/products/ingredient-optimization' },
      { name: 'Customizable website', href: '/products/cms' },
      { name: 'Private dining', href: '/products/private-dining' },
      { name: 'Digital signage', href: '/products/digital-signage' },
      { name: 'Social media', href: '/contact' },
      { name: 'Pricing', href: '/pricing' },
    ],
    learn: [
      { name: 'Resources', href: '/resources' },
      { name: 'Customer Stories', href: '/customers/monaghans-bar-and-grill' },
      { name: 'vs Squarespace', href: '/compare/sindustryos-vs-squarespace' },
      { name: 'vs Agency', href: '/compare/sindustryos-vs-agency' },
      { name: 'Denver', href: '/locations/denver' },
      { name: 'Baltimore', href: '/locations/baltimore' },
      { name: 'Orlando', href: '/locations/orlando' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold text-warm-50 tracking-tight">
                SindustryOS
              </span>
            </Link>
            <p className="text-warm-200 text-sm leading-relaxed">
              Analytics for independents—plus customizable website, private dining, digital
              signage, and social in one dashboard.
            </p>
          </div>

          {(
            [
              ['Product', footerLinks.product],
              ['Learn', footerLinks.learn],
              ['Company', footerLinks.company],
              ['Legal', footerLinks.legal],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-warm-50 font-normal mb-6 text-sm tracking-wide uppercase">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
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
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800">
          <p className="text-warm-300 text-sm text-center">
            © {currentYear} SindustryOS. All rights reserved.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed text-warm-400">
            The website is $99/month. Paying the year up front is 9 times that monthly price, $891,
            which is less than the 10 payments in the first year. The same rule applies to every
            product. A pause only stops payments, and only with our approval.
          </p>
        </div>
      </div>
    </footer>
  )
}
