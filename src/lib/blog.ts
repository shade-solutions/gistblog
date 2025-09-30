export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
  readTime: string;
  image?: string;
}

// In a real application, these would come from an API
export const sampleBlogPosts: BlogPost[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web applications with the latest version of Next.js",
    content: `# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building React applications even better. In this post, we'll explore the key features and how to get started.

## What's New in Next.js 15?

### 1. Improved Performance
Next.js 15 introduces significant performance enhancements, including faster build times and improved runtime optimization.

### 2. Enhanced Image Component
The Image component now supports more formats and has better automatic optimization.

### 3. Built-in SEO Tools
New built-in tools make it easier to implement proper SEO practices.

## Getting Started

To create a new Next.js app, run:

\`\`\`bash
npx create-next-app@latest
\`\`\`

## Conclusion

Next.js 15 is a powerful framework for building modern web applications. With its improved performance and new features, it's easier than ever to create fast, SEO-friendly websites.`,
    date: "2025-09-28",
    author: {
      name: "Shaswat Raj",
      avatar: "/avatars/shaswat.jpg"
    },
    tags: ["Next.js", "React", "Web Development"],
    readTime: "5 min read"
  },
  {
    id: "building-seo-friendly-websites",
    title: "Building SEO-Friendly Websites with Modern Frameworks",
    excerpt: "Best practices for creating websites that rank well in search engines",
    content: `# Building SEO-Friendly Websites with Modern Frameworks

Search Engine Optimization (SEO) is crucial for the success of any website. In this guide, we'll explore best practices for creating SEO-friendly websites using modern frameworks.

## Why SEO Matters

SEO helps your website rank higher in search engine results, driving more organic traffic to your site. This can lead to increased visibility, more customers, and higher revenue.

## Key SEO Principles

### 1. Semantic HTML
Use proper HTML elements like \`<header>\`, \`<main>\`, \`<article>\`, and \`<footer>\` to give search engines context about your content.

### 2. Meta Tags
Include relevant meta tags like title, description, and Open Graph tags:

\`\`\`html
<title>Page Title</title>
<meta name="description" content="Page description">
<meta property="og:title" content="Page Title">
\`\`\`

### 3. Fast Loading Times
Optimize images, use code splitting, and leverage caching to improve page load speeds.

## Framework-Specific Tips

### Next.js
- Use \`getStaticProps\` and \`getServerSideProps\` for dynamic meta tags
- Implement dynamic sitemaps
- Use the built-in Image component for optimized images

### React
- Use React Helmet for managing meta tags
- Implement proper routing with React Router

## Conclusion

Building SEO-friendly websites requires attention to both technical and content factors. By following these best practices, you can improve your site's visibility and attract more organic traffic.`,
    date: "2025-09-25",
    author: {
      name: "Shaswat Raj",
      avatar: "/avatars/shaswat.jpg"
    },
    tags: ["SEO", "Web Development", "Best Practices"],
    readTime: "8 min read"
  },
  {
    id: "understanding-react-server-components",
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components and how they change the way we build applications",
    content: `# Understanding React Server Components

React Server Components represent a fundamental shift in how we think about building React applications. They allow developers to build apps that span the server and client, optimizing for performance and bundle size.

## What are React Server Components?

React Server Components (RSC) are a new way to build React applications that can run on the server. Unlike traditional server-side rendering, RSCs can be composed with client components, allowing you to have the best of both worlds.

## Benefits of RSC

### 1. Reduced Bundle Sizes
Since server components don't ship to the client, your JavaScript bundles can be significantly smaller.

### 2. Direct Data Access
Server components can directly access databases, file systems, and internal services without creating APIs.

### 3. Automatic Code Splitting
React automatically splits your code based on component boundaries.

## How They Work

Server components are rendered on the server and only the result is sent to the client. Client components are still needed for interactivity.

## Implementation

To use server components, you simply don't add "use client" at the top of your component file. Any component without this directive is a server component by default in Next.js App Router.

## Conclusion

React Server Components are a powerful new feature that can significantly improve the performance and developer experience of React applications.`,
    date: "2025-09-20",
    author: {
      name: "Shaswat Raj",
      avatar: "/avatars/shaswat.jpg"
    },
    tags: ["React", "Server Components", "Performance"],
    readTime: "10 min read"
  }
];

// API functions that would be used with SWR
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return sampleBlogPosts;
}

export async function fetchBlogPostById(id: string): Promise<BlogPost | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return sampleBlogPosts.find(post => post.id === id);
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return sampleBlogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return sampleBlogPosts;
}