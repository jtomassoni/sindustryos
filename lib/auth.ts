import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const SESSION_COOKIE = 'admin_session'
const SESSION_DURATION = 7 * 24 * 60 * 60 // 7 days

interface UserCredential {
  username: string
  password: string
}

/**
 * Parse user credentials from environment variable.
 * Same formats as Monaghan's / EcoLawns:
 * 1. JSON: ADMIN_USER='{"username":"admin","password":"pass"}'
 *    or ADMIN_USERS='[{"username":"a","password":"b"}]'
 * 2. Colon-separated: ADMIN_USERS="username:password"
 *    or ADMIN_USERS="user1:pass1,user2:pass2"
 */
function parseUserCredentials(envVar: string | undefined): UserCredential[] {
  if (!envVar) return []

  try {
    const parsed = JSON.parse(envVar)

    if (Array.isArray(parsed)) {
      return parsed.filter(
        (cred): cred is UserCredential =>
          !!cred &&
          typeof cred === 'object' &&
          typeof cred.username === 'string' &&
          typeof cred.password === 'string'
      )
    }

    if (
      parsed &&
      typeof parsed === 'object' &&
      typeof parsed.username === 'string' &&
      typeof parsed.password === 'string'
    ) {
      return [parsed]
    }
  } catch {
    const credentials = envVar
      .split(',')
      .map((pair) => {
        const [username, password] = pair.split(':').map((s) => s.trim())
        if (username && password) return { username, password }
        return null
      })
      .filter((cred): cred is UserCredential => cred !== null)

    if (credentials.length > 0) return credentials
  }

  return []
}

function getAllCredentials(): UserCredential[] {
  return [
    ...parseUserCredentials(process.env.ADMIN_USER),
    ...parseUserCredentials(process.env.ADMIN_USERS),
  ]
}

function getSecret() {
  const secret = process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET
  if (!secret) {
    throw new Error('SESSION_SECRET (or NEXTAUTH_SECRET) must be set')
  }
  return new TextEncoder().encode(secret)
}

export function validateCredentials(username: string, password: string): boolean {
  const credentials = getAllCredentials()
  if (credentials.length === 0) return false
  return credentials.some(
    (c) => c.username.trim() === username.trim() && c.password === password
  )
}

export async function createSession() {
  const token = await new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(getSecret())

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION,
    path: '/',
  })
}

export async function verifySession(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (!token) return false
  try {
    await jwtVerify(token, getSecret())
    return true
  } catch {
    return false
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

/** Use in Route Handlers: `const denied = await requireAdminSession(); if (denied) return denied;` */
export async function requireAdminSession(): Promise<NextResponse | null> {
  if (!(await verifySession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}

export { SESSION_COOKIE }
