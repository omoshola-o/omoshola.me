export const prerender = false;

import type { APIRoute } from "astro";
import { Redis } from "@upstash/redis";

function getRedis(): Redis | null {
  const url = import.meta.env.UPSTASH_REDIS_REST_URL;
  const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const redis = getRedis();
  if (!redis) {
    // Return 0 gracefully when KV is not configured (local dev without .env)
    return new Response(JSON.stringify({ likes: 0 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const key = `likes:${slug}`;
  const count = (await redis.get<number>(key)) ?? 0;

  return new Response(JSON.stringify({ likes: count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Missing slug" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Basic rate-limit hint via IP (best-effort, not a hard guarantee)
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  const redis = getRedis();
  if (!redis) {
    return new Response(JSON.stringify({ likes: 1 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Soft rate limit: one like per IP per post per 24 hours
  const rateLimitKey = `ratelimit:${ip}:${slug}`;
  const alreadyLiked = await redis.get(rateLimitKey);
  if (alreadyLiked) {
    const key = `likes:${slug}`;
    const current = (await redis.get<number>(key)) ?? 0;
    return new Response(JSON.stringify({ likes: current, duplicate: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const key = `likes:${slug}`;
  const newCount = await redis.incr(key);
  // Expire rate-limit key after 24 hours (86400 seconds)
  await redis.set(rateLimitKey, "1", { ex: 86400 });

  return new Response(JSON.stringify({ likes: newCount }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
