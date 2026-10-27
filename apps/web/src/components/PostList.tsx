import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="rounded-xl border border-dashed border-line p-8 text-muted">The first post is on its way.</p>;
  }

  return (
    <ul className="divide-y divide-line">
      {posts.map((p) => (
        <li key={p.slug} className="py-5">
          <Link href={`/blog/${p.slug}`} className="group block">
            <p className="text-sm text-muted">
              <time dateTime={p.date}>{p.date}</time>
              {p.tags.length > 0 && ` · ${p.tags.join(", ")}`}
            </p>
            <h3 className="font-display mt-1 text-xl font-extrabold group-hover:text-racing">{p.title}</h3>
            {p.summary && <p className="mt-1 text-muted">{p.summary}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
