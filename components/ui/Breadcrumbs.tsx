import Link from 'next/link'
import { FiChevronRight, FiHome } from 'react-icons/fi'
import JsonLd from '@/components/seo/JsonLd'
import { getBreadcrumbSchema } from '@/lib/structured-data'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = getBreadcrumbSchema(
    items.map((item) => ({
      name: item.label,
      path: item.href,
    }))
  )

  return (
    <>
      <JsonLd id={`breadcrumb-${items.map((i) => i.label).join('-')}`} data={schema} />
      <nav aria-label="Breadcrumb" className="mb-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-primary-500 transition-colors flex items-center"
            >
              <FiHome className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <FiChevronRight className="w-4 h-4 text-gray-600 mx-2" />
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
