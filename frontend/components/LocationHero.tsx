import Link from 'next/link';
import { Fragment } from 'react';
import Icon from './Icon';
import SlideInRight from './SlideInRight';
import { site } from '@/content/site';

type Crumb = { label: string; href?: string };

// Location-page hero in two screens. Screen one: the service photo, one full
// screen tall, slowly zooming, with only the breadcrumb and
// the H1 on it. Screen two: the intro paragraph in large type on white, with
// the bulldog sliding in beside it once the visitor scrolls down.
export default function LocationHero({
  title,
  intro,
  crumbs,
  image,
  imageAlt,
}: {
  title: string;
  intro: string;
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

      <section className="flex min-h-[60svh] items-center overflow-hidden bg-white lg:min-h-[calc(100svh-168px)]">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-[1fr_auto] lg:gap-16">
          <p className="text-center font-display text-2xl font-bold leading-snug text-brand-900 sm:text-3xl lg:text-left xl:text-4xl xl:leading-tight">
            {/* Keep the phone number on one line. */}
            {intro.split(site.primaryPhone.number).map((part, i, all) => (
              <Fragment key={i}>
                {part}
                {i < all.length - 1 && <span className="whitespace-nowrap">{site.primaryPhone.number}</span>}
              </Fragment>
            ))}
          </p>
          <SlideInRight className="mx-auto">
            <img
              src="/bulldog.webp"
              alt=""
              aria-hidden="true"
              width={768}
              height={768}
              loading="lazy"
              decoding="async"
              className="pointer-events-none h-auto w-48 sm:w-60 lg:w-72 xl:w-80"
            />
          </SlideInRight>
        </div>
      </section>
    </>
  );
}
