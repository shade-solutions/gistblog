# GistBlog

A modern, SEO-friendly blog platform built with Next.js 15, TypeScript, and shadcn/ui.

## Features

- 🚀 Built with Next.js 15 App Router
- 💅 Styled with Tailwind CSS and shadcn/ui components
- 🔍 SEO optimized with proper metadata, sitemap, and robots.txt
- 📱 Fully responsive design
- 🧠 TypeScript for type safety
- 🌙 Dark mode support
- 🔄 Data fetching with SWR (stale-while-revalidate)
- ⚡ Powered by Bun for faster development
- 📝 Markdown support for blog posts
- 👤 User dashboard and profile management
- 👁️ View tracking with visitor badges
- 📊 Analytics and post management

## Getting Started

1. Install dependencies with Bun:
   ```bash
   bun install
   ```

2. Run the development server:
   ```bash
   bun run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── api/             # API routes
│   ├── blog/            # Blog listing page
│   │   └── [id]/        # Individual blog post pages
│   ├── dashboard/       # User dashboard
│   │   ├── create/      # Post creation page
│   │   └── profile/     # User profile page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── sitemap/         # Sitemap route
│   ├── layout.tsx       # Root layout with header
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
│   └── ui/              # shadcn/ui components
├── lib/                 # Utility functions and data
└── ...
```

## Blog Features

- Clean, readable typography
- Syntax highlighting for code blocks
- Responsive design for all devices
- Breadcrumb navigation
- Author information
- Reading time estimates
- Tag categorization
- Social sharing metadata
- Client-side data fetching with SWR
- Markdown support for content
- View tracking with visitor badges

## SEO Features

- Proper meta tags for title, description, and Open Graph
- Semantic HTML structure
- Sitemap generation
- Robots.txt configuration
- Fast loading times
- Mobile-friendly design

## User Dashboard Features

- Post creation and management
- User profile editing
- Analytics overview
- Quick actions for common tasks

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [SWR](https://swr.vercel.app/) for data fetching
- [Bun](https://bun.sh/) for package management and scripting
- [Lucide Icons](https://lucide.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Remark GFM](https://github.com/remarkjs/remark-gfm)

## Deployment

This project can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or Cloudflare Pages.

```bash
bun run build
```