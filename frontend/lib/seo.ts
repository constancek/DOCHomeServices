import type { Metadata } from 'next';
import { site } from '@/content/site';

// Adds per-page Open Graph and Twitter tags built from the page's own title,
// description and canonical path. Without this a page inherits the homepage's
// og:title and og:url from the root layout, so shared links show the homepage.
export function withSocial(meta: Metadata): Metadata {
  const title = typeof meta.title === 'string' ? `${meta.title} | ${site.name}` : undefined;
  const description = meta.description ?? undefined;
  const canonical = meta.alternates?.canonical;
  const path = typeof canonical === 'string' ? canonical : undefined;
  const url = path ? new URL(path.endsWith('/') ? path : `${path}/`, site.url).toString() : undefined;

  return {
    ...meta,
    openGraph: { type: 'website', siteName: site.name, title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  };
}
