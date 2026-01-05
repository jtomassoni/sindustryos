'use client'

import { useState, useEffect } from 'react'
import { FiMail, FiCalendar, FiCheck, FiX, FiArchive } from 'react-icons/fi'

interface Submission {
  id: string
  name: string
  email: string
  restaurant: string
  hasWebsite: string
  message?: string
  timestamp: string
  status: 'new' | 'contacted' | 'converted' | 'archived'
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const token = process.env.NEXT_PUBLIC_CRM_AUTH_TOKEN || prompt('Enter auth token:')
      const response = await fetch('/api/crm/submissions', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.submissions || [])
      }
    } catch (error) {
      console.error('Failed to fetch submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500'
      case 'contacted':
        return 'bg-yellow-500'
      case 'converted':
        return 'bg-green-500'
      case 'archived':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Contact Form Submissions</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submissions List */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-dark-700">
                <h2 className="text-xl font-semibold text-white">
                  Submissions ({submissions.length})
                </h2>
              </div>
              
              <div className="divide-y divide-dark-700">
                {submissions.length === 0 ? (
                  <div className="p-8 text-center text-gray-400">
                    No submissions yet
                  </div>
                ) : (
                  submissions.map((submission) => (
                    <div
                      key={submission.id}
                      onClick={() => setSelectedSubmission(submission)}
                      className={`p-4 cursor-pointer hover:bg-dark-700 transition-colors ${
                        selectedSubmission?.id === submission.id ? 'bg-dark-700' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{submission.restaurant}</h3>
                          <p className="text-gray-400 text-sm">{submission.name}</p>
                          <p className="text-gray-500 text-xs mt-1">
                            {new Date(submission.timestamp).toLocaleDateString()}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs text-white ${getStatusColor(
                            submission.status
                          )}`}
                        >
                          {submission.status}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Submission Details */}
          <div className="lg:col-span-1">
            {selectedSubmission ? (
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Restaurant/Bar</label>
                    <p className="text-white font-semibold">{selectedSubmission.restaurant}</p>
                  </div>
                  
                  <div>
                    <label className="text-gray-400 text-sm">Name</label>
                    <p className="text-white">{selectedSubmission.name}</p>
                  </div>
                  
                  <div>
                    <label className="text-gray-400 text-sm">Email</label>
                    <a
                      href={`mailto:${selectedSubmission.email}`}
                      className="text-primary-500 hover:text-primary-400 flex items-center gap-2"
                    >
                      <FiMail className="w-4 h-4" />
                      {selectedSubmission.email}
                    </a>
                  </div>
                  
                  <div>
                    <label className="text-gray-400 text-sm">Has Website</label>
                    <p className="text-white capitalize">{selectedSubmission.hasWebsite}</p>
                  </div>
                  
                  {selectedSubmission.message && (
                    <div>
                      <label className="text-gray-400 text-sm">Message</label>
                      <p className="text-white bg-dark-900 rounded p-3 mt-1">
                        {selectedSubmission.message}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <label className="text-gray-400 text-sm">Submitted</label>
                    <p className="text-white">
                      {new Date(selectedSubmission.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 text-center text-gray-400">
                Select a submission to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}


