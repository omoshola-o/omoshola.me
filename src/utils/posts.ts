import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { SITE } from "./config";

export type BlogPost = CollectionEntry<"blog">;

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog", ({ data }) => {
    if (data.draft) return false;
    if (import.meta.env.PROD) {
      return (
        new Date(data.pubDatetime).getTime() <=
        Date.now() + SITE.scheduledPostMargin
      );
    }
    return true;
  });

  return posts.sort(
    (a, b) =>
      new Date(b.data.pubDatetime).getTime() -
      new Date(a.data.pubDatetime).getTime()
  );
}

export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getUniqueTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag: string) => tags.add(tag));
  });
  return [...tags].sort();
}
