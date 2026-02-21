import type { APIRoute } from "astro";
import { SITE } from "@/utils/config";

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Block internal API endpoints from indexing
Disallow: /api/

Sitemap: ${SITE.url}/sitemap-index.xml
Host: ${SITE.url}
`.trim();

  return new Response(robotsTxt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
