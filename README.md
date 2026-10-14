# SindustryOS Marketing Website

Marketing website for SindustryOS - an all-in-one restaurant and bar management platform.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
sindustryos/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap generator
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI components (Button, Loading, Toast)
├── lib/                   # Utility functions
│   ├── utils.ts          # General utilities
│   └── structured-data.ts # SEO structured data
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Design System

### Colors

- **Primary**: Warm amber/gold tones (`primary-500: #f56b1a`)
- **Secondary**: Deep burgundy/brown tones (`secondary-600: #735044`)
- **Dark**: Dark base colors (not pure black, `dark-900: #1a1d20`)
- **Accent**: Warm amber accents

### Typography

- **Sans**: Inter (system font fallback)
- **Serif**: Playfair Display (for headings, optional)

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Resend API Key for email service
RESEND_API_KEY=re_your_api_key_here

# Where contact form emails are delivered
CONTACT_EMAIL=contact@sindustryos.com

# Admin login (same format as Monaghan's / EcoLawns)
# Single user:  ADMIN_USERS="username:password"
# Multi user:   ADMIN_USERS="user1:pass1,user2:pass2"
# Or JSON:      ADMIN_USER='{"username":"admin","password":"pass"}'
ADMIN_USERS=admin:change-me

# JWT session signing secret (any long random string)
SESSION_SECRET=replace-with-a-long-random-string

# Neon Postgres (auto-provisioned via Vercel Marketplace)
DATABASE_URL=postgres://...

# Protects /api/cron/publish-content (Vercel Cron sends Authorization: Bearer …)
CRON_SECRET=replace-with-a-long-random-string
```

## SEO blog / resources CMS

- Public posts live at `/resources` (and `/blog` redirects there)
- Admin: `/admin/content`. Create, edit, schedule, AI-write, and generate up to a 12-month calendar
- Daily cron `/api/cron/publish-content` fills empty stubs and publishes due scheduled posts
- DB helpers: `npm run db:push` then `npm run db:seed`

## API Routes

- `/api/contact` - POST endpoint for contact form submissions
- `/api/crm/submissions` - GET/POST endpoints for CRM (requires admin session)
- `/api/admin/login` / `/api/admin/logout` - admin session auth
- `/api/admin/posts` - content CMS CRUD (admin session)
- `/api/cron/publish-content` - scheduled publish + AI fill (CRON_SECRET)

## Admin Dashboard

Sign in at `/admin/login` with credentials from `ADMIN_USERS`. Contacts stay under `/admin`; SEO content is under `/admin/content`. Contact submissions are also emailed to `CONTACT_EMAIL` via Resend; the contacts list is still in-memory.

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

**Important:** Set all environment variables in Vercel's dashboard before deploying.

## Notes

- All images should use placeholders initially (see `images-needed.md`)
- Design should be warm, inviting, and not super bright (Irish dive bar aesthetic)
- Mobile-first approach is critical
- SEO optimization is a priority
- Contact form requires Resend API key for email functionality
- CRM system uses in-memory storage (replace with database in production)

