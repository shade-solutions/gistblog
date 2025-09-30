# GistBlog

A modern, SEO-friendly blog platform built with Next.js 15, TypeScript, and shadcn/ui.

## Features

- 🚀 Built with Next.js 15 App Router
- 💅 Styled with Tailwind CSS and shadcn/ui components
- 🔍 SEO optimized with proper metadata, sitemap, and robots.txt
- 📱 Fully responsive design
- 🧠 TypeScript for type safety
- 🌙 Dark mode support

## Getting Started

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
src/
├── app/                 # Next.js app router pages
│   ├── blog/            # Blog listing page
│   │   └── [id]/        # Individual blog post pages
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

## SEO Features

- Proper meta tags for title, description, and Open Graph
- Semantic HTML structure
- Sitemap generation
- Robots.txt configuration
- Fast loading times
- Mobile-friendly design

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Deployment

This project can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or Cloudflare Pages.

```bash
npm run build
```
