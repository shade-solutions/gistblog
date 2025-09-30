import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          GistBlog
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-foreground transition-colors">
            Contact
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button asChild className="hidden sm:flex">
            <Link href="/dashboard/create">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}