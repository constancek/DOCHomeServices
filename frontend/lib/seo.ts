import type { Metadata } from 'next';
import { site } from '@/content/site';
import { OG_SERVICE_SLUGS } from '@/content/og-images';

type OgImage = { url: string; width: number; height: number; alt: string };

const TITLE_MAX = 65; // longer titles get cut off in search results
const DESC_MAX = 160;

// Ensures a site path ends in "/" (the site uses trailingSlash), so canonical
// and og:url never point at a redirect.
export function withSlash(path: string): string {
  if (/^https?:\/\//.test(path)) return path.replace(/^(https?:\/\/[^/]+)(\/.*)?$/, (_, host, rest = '/') => host + withSlash(rest));
  return path.endsWith('/') || /\.[a-z0-9]{2,4}$/i.test(path) ? path : `${path}/`;
}

// Search descriptions: no em or en dashes, and at most 160 characters.
// Drops a trailing "Call (513) ..." first, then cuts at the last full sentence
// (or word) that fits.
export function cleanDescription(text: string | null | undefined): string | undefined {
  if (!text) return undefined;
  // First dash becomes a colon ("in Covington, KY: tank flush..."), any later ones commas.
  let d = text.replace(/\s*[—–]\s*/, ': ').replace(/\s*[—–]\s*/g, ', ').replace(/\s+/g, ' ').trim();
  if (d.length <= DESC_MAX) return d;
  d = d.replace(/\s*Call (us )?(at )?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\.?$/i, '').trim();
  if (d.length <= DESC_MAX) return d;
  const cut = d.slice(0, DESC_MAX);
  const sentence = cut.lastIndexOf('. ');
  if (sentence > 70) return cut.slice(0, sentence + 1);
  // No full sentence fits: end on a whole word with an ellipsis, never a half sentence with a period.
  const words = d.slice(0, DESC_MAX - 1);
  return words.slice(0, words.lastIndexOf(' ')).replace(/[,;:]$/, '') + '…';
}

// Share image: the service's own photo for anything under /services/<slug>/,
// otherwise the branded van.
export function ogImageFor(path: string | undefined): OgImage {
  const slug = path?.match(/^\/services\/([^/]+)/)?.[1];
  if (slug && OG_SERVICE_SLUGS.has(slug)) {
    return { url: `/og/${slug}.png`, width: 1200, height: 630, alt: `${site.name} ${slug.replace(/-/g, ' ')} service` };
  }
  return { url: '/og/default.png', width: 1200, height: 630, alt: `${site.name} service van` };
}

// Completes a page's metadata for search and sharing in one place:
// - <title>: drops the " | Degree of Comfort" suffix when the result would pass
//   65 characters, and shortens "Name (Long Name)" place names.
// - description: cleaned (see cleanDescription).
// - canonical and og:url: absolute, with a trailing slash.
// - Open Graph and Twitter tags, with a 1200x630 share image (the page's own
//   images win if it sets any). Other Open Graph fields the page sets (type
//   "article", dates, authors) are kept.
// Without this a page inherits the homepage's og:title and og:url from the
// root layout, so shared links show the homepage.
export function withSocial(meta: Metadata, image?: OgImage): Metadata {
  let pageTitle = typeof meta.title === 'string' ? meta.title : undefined;
  if (pageTitle && pageTitle.length > TITLE_MAX) pageTitle = pageTitle.replace(/\s*\([^)]*\)/g, '');
  const suffixed = pageTitle ? `${pageTitle} | ${site.name}` : undefined;
  const title = pageTitle ? (suffixed!.length <= TITLE_MAX ? pageTitle : { absolute: pageTitle }) : meta.title;
  const shareTitle = suffixed && suffixed.length <= 90 ? suffixed : pageTitle;

  const description = cleanDescription(meta.description);
  const canonical = meta.alternates?.canonical;
  const path = typeof canonical === 'string' ? withSlash(canonical) : undefined;
  const url = path ? new URL(path, site.url).toString() : undefined;

  const og = (meta.openGraph ?? {}) as Record<string, unknown>;
  const tw = (meta.twitter ?? {}) as Record<string, unknown>;
  const img = image ?? ogImageFor(path);
  const ogImages = (og.images as unknown) ?? [img];
  const twImages = (tw.images as unknown) ?? (Array.isArray(ogImages) ? ogImages.map((i) => (typeof i === 'string' ? i : (i as { url: string }).url)) : [img.url]);

  return {
    ...meta,
    title,
    description,
    alternates: { ...meta.alternates, ...(path ? { canonical: path } : {}) },
    openGraph: {
      type: 'website',
      siteName: site.name,
      ...og,
      title: (og.title as string | undefined) ?? shareTitle,
      description: cleanDescription(og.description as string | undefined) ?? description,
      url,
      images: ogImages,
    } as Metadata['openGraph'],
    twitter: {
      card: 'summary_large_image',
      ...tw,
      title: (tw.title as string | undefined) ?? shareTitle,
      description: cleanDescription(tw.description as string | undefined) ?? description,
      images: twImages,
    } as Metadata['twitter'],
  };
}
