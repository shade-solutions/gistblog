import { NextResponse } from "next/server";
import { BlogPost, sampleBlogPosts } from "@/lib/blog";

interface PostRequestBody {
  title: string;
  excerpt: string;
  content: string;
  tags?: string;
  readTime?: string;
}

// GET /api/posts - Get all posts
export async function GET() {
  return NextResponse.json(sampleBlogPosts);
}

// POST /api/posts - Create a new post
export async function POST(request: Request) {
  const body: PostRequestBody = await request.json();
  
  // In a real app, you would save this to a database
  const newPost: BlogPost = {
    id: body.title.toLowerCase().replace(/\s+/g, '-'),
    title: body.title,
    excerpt: body.excerpt,
    content: body.content,
    date: new Date().toISOString().split('T')[0],
    author: {
      name: "Shaswat Raj",
      avatar: "/avatars/shaswat.jpg"
    },
    tags: body.tags ? body.tags.split(',').map((tag: string) => tag.trim()) : [],
    readTime: body.readTime || "5 min read"
  };

  // In a real app, you would save this to a database
  // For now, we'll just return the new post
  return NextResponse.json(newPost, { status: 201 });
}