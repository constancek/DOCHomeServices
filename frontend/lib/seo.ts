import type { Metadata } from 'next';
import { site } from '@/content/site';

// Adds per-page Open Graph and Twitter tags built from the page's own title,
// description and canonical path. Without this a page inherits the homepage's
// og:title and og:url from the root layout, so shared links show the homepage.
// Optional `image` (e.g. /og/<service>.png, 1200x630) adds og:image and twitter:image.
export function withSocial(
  meta: Metadata,
  image?: { url: string; width: number; height: number; alt: string },
): Metadata {
  const title = typeof meta.title === 'string' ? `${meta.title} | ${site.name}` : undefined;
  const description = meta.description ?? undefined;
  const canonical = meta.alternates?.canonical;
  const path = typeof canonical === 'string' ? canonical : undefined;
  const url = path ? new URL(path.endsWith('/') ? path : `${path}/`, site.url).toString() : undefined;

  return {
    ...meta,
    openGraph: { type: 'website', siteName: site.name, title, description, url, ...(image ? { images: [image] } : {}) },
    twitter: { card: 'summary_large_image', title, description, ...(image ? { images: [image.url] } : {}) },
  };
}
