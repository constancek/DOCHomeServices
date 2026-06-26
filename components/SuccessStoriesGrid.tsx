'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

type Card = {
  slug: string;
  name: string;
  avatar: string;
  cardImage: string;
  cardQuote: string;
};

const INITIAL = 4;

export default function SuccessStoriesGrid({ stories }: { stories: Card[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? stories : stories.slice(0, INITIAL);
  const hasMore = stories.length > INITIAL;

  return (
    <>
      <div className="grid gap-7 sm:grid-cols-2">
        {visible.map((s) => (
          <Link key={s.slug} href={`/customer-success-stories/${s.slug}`} className="group block">
            {/* Round photo + full name above the card */}
            <div className="mb-4 flex items-center gap-4">
              <img
                src={s.avatar}
                alt={s.name}
                width={64}
                height={64}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-1 ring-brand-100"
              />
              <span className="font-display text-2xl font-bold text-brand-800">{s.name}</span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
              <span
                className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${s.cardImage})` }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/45 to-transparent transition group-hover:from-pink-700" />
              <span className="absolute inset-x-0 bottom-0 p-6">
                <span className="block font-display text-base font-extrabold uppercase leading-snug text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.7)] sm:text-lg">
                  “{s.cardQuote}”
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/90 sm:text-sm">
                  Read More Of {s.name}’s Story Here
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {hasMore && !expanded ? (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="rounded-full border-2 border-pink-500 px-8 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-brand-800 transition hover:bg-pink-500 hover:text-white"
          >
            More Success Stories
          </button>
        </div>
      ) : null}
    </>
  );
}
