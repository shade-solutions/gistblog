import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GistBlog - Modern Blog Platform",
    template: "%s | GistBlog"
  },
  description: "A modern, SEO-friendly blog platform built with Next.js",
  keywords: ["blog", "next.js", "react", "typescript", "seo"],
  authors: [{ name: "Shaswat Raj" }],
  creator: "Shaswat Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "GistBlog - Modern Blog Platform",
    description: "A modern, SEO-friendly blog platform built with Next.js",
    siteName: "GistBlog",
  },
  twitter: {
    card: "summary_large_image",
    title: "GistBlog - Modern Blog Platform",
    description: "A modern, SEO-friendly blog platform built with Next.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}