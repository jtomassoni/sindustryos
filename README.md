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

- **Primary**: Teal (`primary-500: #0d9488`)
- **Dark**: Cool charcoal (`dark-900: #0f1419`)
- **Accent**: Teal-green for emphasis

### Typography

- **Sans**: DM Sans
- **Display**: Space Grotesk (headings)

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
CONTACT_EMAIL=jtomassoni@gmail.com

# Admin logins. One shared CRM. Both people see every lead.
# Sales login should be the username "mandi" unless DEFAULT_LEAD_ASSIGNEE is set.
# James is engineer/owner. Mandi is sales/owner.
ADMIN_USERS=james:change-me,mandi:change-me
DEFAULT_LEAD_ASSIGNEE=mandi

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
- `/api/crm/submissions` - GET/POST/PATCH for the shared CRM (requires admin session; PATCH claims an unassigned lead)
- `/api/admin/login` / `/api/admin/logout` - admin session auth
- `/api/admin/posts` - content CMS CRUD (admin session)
- `/api/cron/publish-content` - scheduled publish + AI fill (CRON_SECRET)

## How we sell

Decisions live in `docs/mandi-feagans-partnership-email.md` and `docs/open-questions.md`.

- Independents only. About 200 restaurants and a small team, not a national book.
- **Baltimore first.** Denver only if a room there wants in. Do not build for a global market.
- Website is $99/month. Year one monthly is 10 payments ($990). Paying the year up front is 9 times the monthly price ($891) and is always cheaper. Every product uses that same rule. After hosting and onboarding the website should be almost no work. They edit their own content and can request features.
- Any payment calendar can be custom. James approves it. A pause only skips payments. Nothing else about the product changes. No special pages for a type of business.
- Restaurants run all year. Some months are quieter. That does not change Mandi’s commission. James eats unpaid months.
- The operator product is multi-tenant. Owner-permission users get reminders for Baltimore-relevant US holidays. Not a global calendar. If they ignore the reminder, that is their business.

## Admin Dashboard

Sign in at `/admin/login` with credentials from `ADMIN_USERS`. James and Mandi are separate logins on one shared book. Every lead is visible to both. New leads are assigned to `DEFAULT_LEAD_ASSIGNEE` (Mandi). Contacts stay under `/admin`; SEO content is under `/admin/content`. Contact submissions are also emailed to `CONTACT_EMAIL` via Resend; the contacts list is still in-memory and resets on deploy.

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

