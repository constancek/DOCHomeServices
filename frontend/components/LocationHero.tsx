import Link from 'next/link';
import Icon from './Icon';

type Crumb = { label: string; href?: string };

// Location-page hero: the service photo, one full screen tall, slowly zooming,
// with only the breadcrumb and the H1 on it. The intro paragraph and bulldog
// open the main content section below (LocationServicePage).
export default function LocationHero({
  title,
  crumbs,
  image,
  imageAlt,
}: {
  title: string;
  crumbs: Crumb[];
  image: string;
  imageAlt: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-900">
        <img
          src={image}
          alt={imageAlt}
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover motion-safe:animate-slow-zoom motion-safe:will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" aria-hidden />

        <div className="container-page relative flex min-h-[100svh] flex-col py-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium text-white/80 sm:justify-start">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="transition hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <Icon name="arrow" className="h-3 w-3 text-white/60" />}
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-1 items-center justify-center py-12">
            <h1 className="max-w-6xl text-balance text-center font-display text-[clamp(2.5rem,11vw,4rem)] font-black uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>
        </div>
      </section>

    </>
  );
}
