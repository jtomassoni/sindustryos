export type SubmissionStatus = 'new' | 'contacted' | 'converted' | 'archived'

export interface Submission {
  id: string
  name: string
  email: string
  restaurant: string
  interest: string
  pos: string
  /** @deprecated kept for older in-memory rows */
  hasWebsite?: string
  message?: string
  timestamp: string
  status: SubmissionStatus
}

// In-memory only. Resets on deploy / cold start. Email via Resend is the durable copy.
const submissions: Submission[] = []

export function listSubmissions(): Submission[] {
  return [...submissions].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
}

export function addSubmission(input: {
  name: string
  email: string
  restaurant: string
  interest: string
  pos: string
  message?: string
}): Submission {
  const submission: Submission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
    name: input.name,
    email: input.email,
    restaurant: input.restaurant,
    interest: input.interest,
    pos: input.pos,
    message: input.message || '',
    timestamp: new Date().toISOString(),
    status: 'new',
  }

  submissions.push(submission)
  return submission
}
