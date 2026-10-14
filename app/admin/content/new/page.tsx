'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AdminNav from '@/components/admin/AdminNav'

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Guides')
  const [status, setStatus] = useState('draft')
  const [scheduledAt, setScheduledAt] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          category,
          status,
          scheduledAt: scheduledAt || null,
        }),
      })
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }
      const data = await response.json()
      if (!response.ok) {
        setError(data.error || 'Failed to create')
        return
      }
      router.push(`/admin/content/${data.post.id}`)
    } catch {
      setError('Failed to create')
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="min-h-screen bg-dark-900">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <AdminNav />
        <div className="mb-6">
          <Link href="/admin/content" className="text-sm text-gray-400 hover:text-primary-400">
            ← Content
          </Link>
          <h1 className="text-3xl font-bold text-white mt-2">New post</h1>
        </div>
        {error && <p className="mb-4 text-red-400 text-sm">{error}</p>}
        <form onSubmit={handleCreate} className="space-y-4 border border-dark-700 rounded-xl bg-dark-800 p-6">
          <label className="block text-sm text-gray-300">
            Title
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            </select>
          </label>
          <label className="block text-sm text-gray-300">
            Scheduled date
            <input
              type="datetime-local"
              value={scheduledAt}
              onChange={(e) => setScheduledAt(e.target.value)}
              className="mt-1 w-full bg-dark-900 border border-dark-600 rounded px-3 py-2 text-white"
            />
          </label>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-500 disabled:opacity-50"
          >
            {saving ? 'Creating…' : 'Create'}
          </button>
        </form>
      </div>
    </main>
  )
}
