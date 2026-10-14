'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const links = [
  { href: '/admin', label: 'Contacts', exact: true },
  { href: '/admin/content', label: 'Content' },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-6">
        <Link href="/admin" className="text-xl font-semibold text-white">
          Admin
        </Link>
        <nav className="flex gap-4">
          {links.map((link) => {
            const active = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wide ${
                  active ? 'text-primary-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm border border-dark-700 rounded text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
      >
        Sign out
      </button>
    </div>
  )
}
