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

# Contact email address
CONTACT_EMAIL=contact@sindustryos.com

# Base URL (for API calls)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# CRM Authentication Token
CRM_AUTH_TOKEN=your_secure_auth_token_here
NEXT_PUBLIC_CRM_AUTH_TOKEN=your_secure_auth_token_here
```

## API Routes

- `/api/contact` - POST endpoint for contact form submissions
- `/api/crm/submissions` - GET/POST endpoints for CRM (requires auth token)

## Admin Dashboard

Access the admin dashboard at `/admin` to view contact form submissions. Requires authentication token set in environment variables.

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

