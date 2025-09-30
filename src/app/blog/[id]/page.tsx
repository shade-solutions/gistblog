import { getBlogPostById } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { H1, H2, H3, P } from "@/components/ui/typography";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, User } from "lucide-react";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostById(params.id);

  if (!post) {
    notFound();
  }

  // Simple markdown parser for demonstration
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <H1 key={index} className="mt-8 first:mt-0">{line.substring(2)}</H1>;
      } else if (line.startsWith('## ')) {
        return <H2 key={index} className="mt-8 first:mt-0">{line.substring(3)}</H2>;
      } else if (line.startsWith('### ')) {
        return <H3 key={index} className="mt-6 first:mt-0">{line.substring(4)}</H3>;
      } else if (line.startsWith('```')) {
        return (
          <pre key={index} className="bg-muted p-4 rounded-lg mt-4 overflow-x-auto">
            <code>{line.substring(3)}</code>
          </pre>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <P key={index}>{line}</P>;
      }
    });
  };

  return (
    <div className="container py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-6 pl-0">
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to blog
          </Link>
        </Button>

        <header className="mb-8">
          <H1 className="mb-4">{post.title}</H1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author.name}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {post.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="mr-4">
                  {post.author.avatar ? (
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Written on {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </footer>
      </article>
    </div>
  );
}