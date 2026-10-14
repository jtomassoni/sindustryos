import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const SESSION_COOKIE = 'admin_session'
const CANONICAL_HOST = 'www.sindustryos.com'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host')?.split(':')[0]

  // Force canonical www host (apex → www)
  if (host === 'sindustryos.com') {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    url.host = CANONICAL_HOST
    return NextResponse.redirect(url, 301)
  }

  // Login page: redirect away if already authenticated
  if (pathname === '/admin/login') {
    const token = request.cookies.get(SESSION_COOKIE)?.value
    if (token) {
      try {
        const secret = process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET
        if (secret) {
          await jwtVerify(token, new TextEncoder().encode(secret))
          return NextResponse.redirect(new URL('/admin', request.url))
        }
      } catch {
        // Invalid session — stay on login
      }
    }
    return NextResponse.next()
  }

  // Protect all other admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get(SESSION_COOKIE)?.value
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    try {
      const secret = process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET
      if (!secret) throw new Error('SESSION_SECRET not set')
      await jwtVerify(token, new TextEncoder().encode(secret))
    } catch {
      const res = NextResponse.redirect(new URL('/admin/login', request.url))
      res.cookies.delete(SESSION_COOKIE)
      return res
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
