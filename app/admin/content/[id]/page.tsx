'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import AdminNav from '@/components/admin/AdminNav'
import type { SerializedPost } from '@/lib/blog/types'

type SectionDraft = { heading: string; body: string }

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [post, setPost] = useState<SerializedPost | null>(null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [keywords, setKeywords] = useState('')
  const [topicNotes, setTopicNotes] = useState('')
  const [status, setStatus] = useState('draft')
  const [scheduledAt, setScheduledAt] = useState('')
  const [productLabel, setProductLabel] = useState('Full Web CMS')
  const [productHref, setProductHref] = useState('/products/cms')
  const [sections, setSections] = useState<SectionDraft[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`/api/admin/posts/${id}`)
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }
      if (!response.ok) {
        setError('Post not found')
        setLoading(false)
        return
      }
      const data = await response.json()
      const p = data.post as SerializedPost
      setPost(p)
      setTitle(p.title)
      setSlug(p.slug)
      setDescription(p.description)
      setCategory(p.category)
      setKeywords((p.keywords || []).join(', '))
      setTopicNotes(p.topicNotes || '')
      setStatus(p.status)
      setScheduledAt(
        p.scheduledAt ? new Date(p.scheduledAt).toISOString().slice(0, 16) : ''
      )
      setProductLabel(p.primaryProduct?.label || 'Full Web CMS')
      setProductHref(p.primaryProduct?.href || '/products/cms')
      setSections(
        (p.sections || []).map((s) => ({
          heading: s.heading,
          body: s.body.join('\n\n'),
        }))
      )
      setLoading(false)
    }
    load()
  }, [id, router])

  const payload = () => ({
    title,
    slug,
    description,
    category,
    keywords: keywords
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean),
    topicNotes: topicNotes || null,
    status,
    scheduledAt: scheduledAt || null,
    primaryProduct: { label: productLabel, href: productHref },
    sections: sections.map((s) => ({
      heading: s.heading,
      body: s.body
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean),
    })),
  })

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')
    try {
      const response = await fetch(`/api/admin/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload()),
      })
      const data = await response.json()
      if (!response.ok) {
        setError(data.error || 'Save failed')
        return
      }
      setPost(data.post)
      setMessage('Saved')
    } catch {
      setError('Save failed')
    } finally {
      setSaving(false)
    }
  }

  const handleGenerate = async () => {
    setGenerating(true)
    setError('')
    setMessage('')
    try {
      await fetch(`/api/admin/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload(), sections: sections }),
      })
      const response = await fetch(`/api/admin/posts/${id}/generate`, {
        method: 'POST',
      })
      const data = await response.json()
      if (!response.ok) {
        setError(data.error || 'Generation failed')
        return
      }
      const p = data.post as SerializedPost
      setPost(p)
      setTitle(p.title)
      setDescription(p.description)
      setCategory(p.category)
      setKeywords((p.keywords || []).join(', '))
      setStatus(p.status)
      setProductLabel(p.primaryProduct?.label || productLabel)
      setProductHref(p.primaryProduct?.href || productHref)
      setSections(
        (p.sections || []).map((s) => ({
          heading: s.heading,
          body: s.body.join('\n\n'),
        }))
      )
      setMessage('AI content generated. Review and save if you tweak further')
    } catch {
      setError('Generation failed')
    } finally {
      setGenerating(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Delete this post permanently?')) return
    const response = await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })
    if (response.ok) router.push('/admin/content')
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-dark-900 p-8 text-red-400">
        {error || 'Not found'}
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <AdminNav />
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link href="/admin/content" className="text-sm text-gray-400 hover:text-primary-400">
              ← Content
            </Link>
            <h1 className="text-3xl font-bold text-white mt-2">Edit post</h1>
            <p className="text-gray-500 text-sm mt-1">
              <a
                href={`/resources/${post.slug}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-400"
              >
                /resources/{post.slug}
              </a>
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleGenerate}
              disabled={generating}
              className="px-4 py-2 border border-dark-600 text-gray-200 rounded-lg text-sm hover:border-primary-500 disabled:opacity-50"
            >
              {generating ? 'Writing…' : 'AI rewrite'}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 border border-red-800 text-red-400 rounded-lg text-sm hover:bg-red-950"
            >
              Delete
            </button>
          </div>
        </div>

        {error && <p className="mb-4 text-red-400 text-sm">{error}</p>}
        {message && <p className="mb-4 text-green-400 text-sm">{message}</p>}

        <form onSubmit={handleSave} className="space-y-4 border border-dark-700 rounded-xl bg-dark-800 p-6">
          <label className="block text-sm text-gray-300">
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
            />
          </label>
          <label className="block text-sm text-gray-300">
            Slug
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
            />
          </label>
          <label className="block text-sm text-gray-300">
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
            />
          </label>
          <label className="block text-sm text-gray-300">
            Topic notes (AI briefing)
            <textarea
              value={topicNotes}
              onChange={(e) => setTopicNotes(e.target.value)}
              rows={2}
              className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
            />
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block text-sm text-gray-300">
              Category
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-gray-300">
              Status
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              >
                <option value="draft">draft</option>
                <option value="scheduled">scheduled</option>
                <option value="published">published</option>
                <option value="archived">archived</option>
              </select>
            </label>
            <label className="block text-sm text-gray-300">
              Scheduled at
              <input
                type="datetime-local"
                value={scheduledAt}
                onChange={(e) => setScheduledAt(e.target.value)}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-gray-300">
              Keywords (comma-separated)
              <input
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-gray-300">
              CTA label
              <input
                value={productLabel}
                onChange={(e) => setProductLabel(e.target.value)}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
            <label className="block text-sm text-gray-300">
              CTA href
              <input
                value={productHref}
                onChange={(e) => setProductHref(e.target.value)}
                className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
              />
            </label>
          </div>

          <div className="pt-4 border-t border-dark-700">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-white">Sections</h2>
              <button
                type="button"
                onClick={() =>
                  setSections((s) => [...s, { heading: '', body: '' }])
                }
                className="text-sm text-primary-400 hover:text-primary-300"
              >
                Add section
              </button>
            </div>
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="border border-dark-600 rounded-lg p-4 space-y-2"
                >
                  <div className="flex justify-between gap-2">
                    <input
                      value={section.heading}
                      onChange={(e) => {
                        const next = [...sections]
                        next[index] = { ...section, heading: e.target.value }
                        setSections(next)
                      }}
                      placeholder="Heading"
                      className="flex-1 bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white text-sm"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setSections((s) => s.filter((_, i) => i !== index))
                      }
                      className="text-xs text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                  <textarea
                    value={section.body}
                    onChange={(e) => {
                      const next = [...sections]
                      next[index] = { ...section, body: e.target.value }
                      setSections(next)
                    }}
                    rows={5}
                    placeholder="Paragraphs separated by a blank line"
                    className="w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-500 disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </form>
      </div>
    </main>
  )
}
