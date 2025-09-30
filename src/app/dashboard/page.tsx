import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, P } from "@/components/ui/typography";
import Link from "next/link";
import { BookOpen, Users, Eye, Calendar } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Dashboard",
    description: "Manage your blog posts and view analytics",
  };
}

export default function DashboardPage() {
  // Mock data - in a real app this would come from an API
  const stats = [
    { title: "Total Posts", value: "12", icon: BookOpen, change: "+2 from last month" },
    { title: "Total Views", value: "1,234", icon: Eye, change: "+12% from last month" },
    { title: "Subscribers", value: "567", icon: Users, change: "+8% from last month" },
  ];

  const recentPosts = [
    { id: "1", title: "Getting Started with Next.js 15", views: 342, date: "2025-09-28" },
    { id: "2", title: "Building SEO-Friendly Websites", views: 289, date: "2025-09-25" },
    { id: "3", title: "Understanding React Server Components", views: 210, date: "2025-09-20" },
  ];

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <H1>Dashboard</H1>
        <Button asChild>
          <Link href="/dashboard/create">Create New Post</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>
              Your latest blog posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{post.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your blog
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              View all posts
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Manage subscribers
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Eye className="mr-2 h-4 w-4" />
              View analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}