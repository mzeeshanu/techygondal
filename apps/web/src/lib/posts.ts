import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type Post = PostMeta & { html: string };

function postFiles() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  // Files starting with "_" (like _template.md) are ignored.
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

function readMeta(file: string): PostMeta & { draft: boolean; body: string } {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? file),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ""),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    body: content,
  };
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map(readMeta)
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(({ slug, title, date, summary, tags }) => ({ slug, title, date, summary, tags }));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = `${slug}.md`;
  if (!postFiles().includes(file)) return null;
  const { body, draft, ...meta } = readMeta(file);
  if (draft) return null;
  return { ...meta, html: await marked.parse(body) };
}
