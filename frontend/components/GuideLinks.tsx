import Link from 'next/link';
import Icon from './Icon';
import { guideGroups } from '@/content/guides';
import { posts } from '@/content/posts';

// "Landlord Heating Guides" style link blocks: for each curated group the
// current post belongs to, list the other posts in that group.
export default function GuideLinks({ slug }: { slug: string }) {
  const groups = guideGroups
    .filter((g) => g.slugs.includes(slug))
    .map((g) => ({
      title: g.title,
      items: g.slugs
        .filter((s) => s !== slug)
        .map((s) => posts.find((p) => p.slug === s))
        .filter((p): p is (typeof posts)[number] => Boolean(p)),
    }))
    .filter((g) => g.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <div className="mt-12 space-y-6">
      {groups.map((g) => (
        <nav
          key={g.title}
          aria-label={g.title}
          className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6"
        >
          <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-brand-700">
            {g.title}
          </h2>
          <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {g.items.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}/`}
                  className="group flex items-start gap-2 text-[15px] font-semibold leading-snug text-brand-800 transition hover:text-pink-600"
                >
                  <Icon name="chevron" className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-pink-500" />
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
