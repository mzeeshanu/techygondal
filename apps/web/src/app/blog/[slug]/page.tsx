import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost((await params).slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({ params }: Params) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/blog" className="text-sm font-semibold text-racing hover:underline">
        All posts
      </Link>
      <h1 className="font-display mt-4 text-4xl font-black italic leading-tight">{post.title}</h1>
      <p className="mt-2 text-sm text-muted">
        <time dateTime={post.date}>{post.date}</time>
        {post.tags.length > 0 && ` · ${post.tags.join(", ")}`}
      </p>
      {/* Content comes from Markdown files in this repo, not user input. */}
      <div className="prose-tg mt-8" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
