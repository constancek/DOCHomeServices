import Link from 'next/link';
import type { ReactNode } from 'react';
import Icon from './Icon';

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  byline,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  byline?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-blue-section">
      <div className="container-page relative z-10 flex flex-col gap-6 py-12 sm:py-16 lg:flex-row lg:items-center lg:gap-8 lg:py-20">
        <div className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-100">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <Icon name="arrow" className="h-3 w-3 text-brand-300" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-100">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{description}</p>
        )}
        {byline && <div className="mt-6">{byline}</div>}
        </div>

        {/* Bulldog mascot — scales with screen, sits beside the text */}
        <img
          src="/bulldog.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none w-44 shrink-0 self-center object-contain sm:w-56 lg:w-72 lg:self-end xl:w-80"
        />
      </div>
    </section>
  );
}
