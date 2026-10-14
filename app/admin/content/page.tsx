'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AdminNav from '@/components/admin/AdminNav'
import type { SerializedPost } from '@/lib/blog/types'

export default function AdminContentPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<SerializedPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<string>('all')
  const [generating, setGenerating] = useState(false)
  const [months, setMonths] = useState(12)
  const [postsPerMonth, setPostsPerMonth] = useState(2)
  const [focus, setFocus] = useState('')
  const [writeContent, setWriteContent] = useState(false)
  const [autoSchedule, setAutoSchedule] = useState(true)
  const [message, setMessage] = useState('')

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/posts')
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }
      if (!response.ok) {
        setError('Failed to load posts')
        return
      }
      const data = await response.json()
      setPosts(data.posts || [])
      setError('')
    } catch {
      setError('Failed to load posts')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const filtered =
    filter === 'all' ? posts : posts.filter((p) => p.status === filter)

  const handleGenerateCalendar = async () => {
    setGenerating(true)
    setMessage('')
    setError('')
    try {
      const response = await fetch('/api/admin/posts/generate-calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          months,
          postsPerMonth,
          focus: focus || undefined,
          writeContent,
          status: autoSchedule ? 'scheduled' : 'draft',
        }),
      })
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }
      const data = await response.json()
      if (!response.ok) {
        setError(data.error || 'Calendar generation failed')
        return
      }
      setMessage(
        `Created ${data.count} posts across ${months} months. Review and edit anytime before they go live.`
      )
      await fetchPosts()
    } catch {
      setError('Calendar generation failed')
    } finally {
      setGenerating(false)
    }
  }

  const statusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-600'
      case 'scheduled':
        return 'bg-blue-600'
      case 'draft':
        return 'bg-yellow-600'
      case 'archived':
        return 'bg-gray-600'
      default:
        return 'bg-gray-600'
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <AdminNav />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold text-white">SEO Content</h1>
          <Link
            href="/admin/content/new"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-500"
          >
            New post
          </Link>
        </div>

        {error && <p className="mb-4 text-red-400 text-sm">{error}</p>}
        {message && <p className="mb-4 text-green-400 text-sm">{message}</p>}

        <section className="mb-10 border border-dark-700 rounded-xl bg-dark-800 p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Auto-write calendar (up to 12 months)
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Generates topic stubs and optionally full articles, scheduled across
            the next months. You can edit, reschedule, or archive anything in
            the list below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="block text-sm text-gray-300">
              Months
              <input
                type="number"
                min={1}
                max={12}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-gray-300">
              Posts per month
              <input
                type="number"
                min={1}
                max={8}
                value={postsPerMonth}
                onChange={(e) => setPostsPerMonth(Number(e.target.value))}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-gray-300 md:col-span-2">
              Focus (optional)
              <input
                type="text"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                placeholder="e.g. private dining leads, happy hour specials, local SEO"
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={writeContent}
                onChange={(e) => setWriteContent(e.target.checked)}
              />
              Write full articles now (slow; leave off, and daily cron fills stubs before publish)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={autoSchedule}
                onChange={(e) => setAutoSchedule(e.target.checked)}
              />
              Auto-publish on scheduled dates
            </label>
          </div>
          <button
            onClick={handleGenerateCalendar}
            disabled={generating}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-500 disabled:opacity-50"
          >
            {generating
              ? 'Generating… this can take a few minutes'
              : `Generate ${months * postsPerMonth} posts`}
          </button>
        </section>

        <div className="flex flex-wrap gap-2 mb-4">
          {['all', 'draft', 'scheduled', 'published', 'archived'].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1 rounded text-xs uppercase tracking-wide ${
                filter === s
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-gray-400 border border-dark-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="border border-dark-700 rounded-xl bg-dark-800 overflow-hidden">
          <div className="divide-y divide-dark-700">
            {filtered.length === 0 ? (
              <div className="p-8 text-center text-gray-400">No posts yet</div>
            ) : (
              filtered.map((post) => (
                <Link
                  key={post.id}
                  href={`/admin/content/${post.id}`}
                  className="block p-4 hover:bg-dark-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-white font-semibold">{post.title}</h3>
                      <p className="text-gray-500 text-xs mt-1">
                        /resources/{post.slug}
                        {post.scheduledAt
                          ? ` · scheduled ${new Date(post.scheduledAt).toLocaleDateString()}`
                          : ''}
                        {post.publishedAt
                          ? ` · published ${new Date(post.publishedAt).toLocaleDateString()}`
                          : ''}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs text-white shrink-0 ${statusColor(post.status)}`}
                    >
                      {post.status}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
