import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-4xl font-black italic">Blog</h1>
      <p className="mt-2 text-muted">Write ups on software, sim racing and the tech in between.</p>
      <div className="mt-6">
        <PostList posts={getAllPosts()} />
      </div>
    </div>
  );
}
