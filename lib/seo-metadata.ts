import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/site'

/** Shared robots config for Coming Soon / vaporware product pages */
export const noindexRobots: Metadata['robots'] = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
}

export function pageMetadata(options: {
  title: string
  description: string
  path: string
  noindex?: boolean
}): Metadata {
  const url = absoluteUrl(options.path)
  return {
    title: options.title,
    description: options.description,
    alternates: { canonical: options.path },
    robots: options.noindex ? noindexRobots : undefined,
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
    },
  }
}
