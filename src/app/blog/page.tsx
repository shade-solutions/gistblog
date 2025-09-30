import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { H1, H2, P } from "@/components/ui/typography";
import { getAllBlogPosts } from "@/lib/blog";

export async function generateMetadata() {
  return {
    title: "Blog",
    description: "Thoughts, stories and ideas from our team",
  };
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <H1 className="mb-4">Blog</H1>
        <P className="text-lg text-muted-foreground">
          Thoughts, stories and ideas from our team
        </P>
      </div>

      {posts && posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              {post.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <CardHeader className="flex-1">
                <div className="mb-2">
                  <Badge variant="secondary">{post.readTime}</Badge>
                </div>
                <CardTitle className="mb-2 line-clamp-2">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center">
                  <div className="text-sm">
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <H2>No Blog Posts Found</H2>
          <P className="text-muted-foreground">
            Check back later for new posts.
          </P>
        </div>
      )}
    </div>
  );
}