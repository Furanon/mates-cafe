import type { APIRoute } from 'astro';
import { absoluteUrl } from '@utils/url';

export const prerender = true;

const getRobotsTxt = (sitemapURL: string) => `
User-agent: *
Allow: /
Disallow: /keystatic
Disallow: /api/

Sitemap: ${sitemapURL}
`;

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt(absoluteUrl('/sitemap-index.xml')), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
