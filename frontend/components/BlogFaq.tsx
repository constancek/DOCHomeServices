'use client';

import { useState } from 'react';

// Blog FAQ accordion: big accent heading, white cards with a blue question and
// a green +/- toggle. The answer expands beneath.
export default function BlogFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="mt-14">
      <h2 className="font-display text-3xl font-black uppercase tracking-tight text-pink-600 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-4">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-900/5">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-extrabold uppercase tracking-wide text-brand-700 sm:text-lg">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="grid h-7 w-7 flex-shrink-0 place-items-center text-3xl font-bold leading-none text-lime-500"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="-mt-1 px-6 pb-6 text-[15px] leading-relaxed text-brand-700">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
