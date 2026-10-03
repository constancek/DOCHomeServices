import Link from 'next/link';
import Icon from './Icon';
import { locationsByGroup } from '@/content/locations';

// Collapsible, SEO-friendly list of every neighborhood we serve for a given
// service. Uses a native <details> element: all the links are in the rendered
// HTML (so Google reads them), but visitors only see them after clicking to
// expand. Grouped by county/area, two columns on larger screens.
export default function NeighborhoodLinks({
  copy,
  basePath,
  linkPrefix,
  listAll = false,
}: {
  // The per-service copy map; a neighborhood is listed only if it has a page.
  copy: Record<string, unknown>;
  // Location-page base path, e.g. "/services/ac-repair".
  basePath: string;
  // Link-text prefix, e.g. "AC repair" -> "AC repair in Sedamsville".
  linkPrefix: string;
  // List every neighborhood regardless of whether copy exists yet. Links to
  // neighborhoods without a page will 404 until that copy is written.
  listAll?: boolean;
}) {
  const groups = locationsByGroup()
    .map(({ group, items }) => ({ group, items: listAll ? items : items.filter((l) => copy[l.slug]) }))
    .filter((g) => g.items.length > 0);
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  if (total === 0) return null;

  return (
    <details className="group mt-6 overflow-hidden rounded-2xl border border-brand-100 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-brand-700 transition hover:bg-brand-50">
        <span>View all {total} neighborhoods we serve</span>
        <Icon
          name="caretDown"
          className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="space-y-7 border-t border-brand-100 px-5 py-6">
        {groups.map(({ group, items }) => (
          <div key={group}>
            <h3 className="flex items-center gap-2 font-display text-base font-extrabold text-brand-700">
              <Icon name="pin" className="h-4 w-4 text-pink-500" />
              {group}
            </h3>
            <ul className="mt-2 columns-1 gap-x-6 sm:columns-2">
              {items.map((l) => (
                <li key={l.slug} className="mb-1.5 break-inside-avoid">
                  <Link
                    href={`${basePath}/${l.slug}`}
                    className="text-sm font-medium text-brand-800 hover:text-pink-600"
                  >
                    {linkPrefix} in {l.neighborhood}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}
