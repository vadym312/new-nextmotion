"use client";

import Hero from "./components/Hero";
import BlogPosts from "./components/BlogPosts";

export default function BlogPage() {

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BlogPosts />
    </main>
  );
}
