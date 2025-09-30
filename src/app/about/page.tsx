import { H1, H2, P } from "@/components/ui/typography";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <H1 className="mb-6">About GistBlog</H1>
      
      <div className="max-w-3xl">
        <P className="mb-6">
          GistBlog is a modern, SEO-friendly blog platform built with Next.js 15. 
          Our mission is to provide developers and content creators with a powerful 
          yet simple tool to share their ideas with the world.
        </P>
        
        <H2 className="mb-4 mt-8">Our Story</H2>
        <P className="mb-6">
          Founded in 2025, GistBlog began as a personal project to explore the 
          latest web technologies. What started as a simple blog engine has evolved 
          into a full-featured platform used by developers around the world.
        </P>
        
        <H2 className="mb-4 mt-8">Technology Stack</H2>
        <P className="mb-6">
          We leverage cutting-edge technologies to ensure optimal performance and 
          developer experience:
        </P>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Next.js 15 with App Router</li>
          <li>React 19</li>
          <li>TypeScript for type safety</li>
          <li>Tailwind CSS for styling</li>
          <li>shadcn/ui components</li>
        </ul>
        
        <H2 className="mb-4 mt-8">Our Values</H2>
        <P className="mb-4">
          We believe in creating tools that are:
        </P>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Accessible:</strong> Everyone should be able to create and consume content</li>
          <li><strong>Performant:</strong> Fast loading times and smooth interactions</li>
          <li><strong>SEO-Friendly:</strong> Content should be easily discoverable</li>
          <li><strong>Developer-First:</strong> Clean, maintainable codebase</li>
        </ul>
      </div>
    </div>
  );
}