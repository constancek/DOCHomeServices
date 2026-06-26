'use client';

import { useEffect, useRef } from 'react';
import Icon from './Icon';

type Review = {
  name: string;
  text: string;
  when: string;
};

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    // Advance by exactly one card (card width + the flex gap).
    const card = el.querySelector('figure');
    const gap = 24; // matches gap-6
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (dir === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: dir * step, behavior: 'smooth' });
    }
  };

  // Auto-advance; pauses while the visitor is hovering the track.
  useEffect(() => {
    const el = trackRef.current;
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el?.addEventListener('mouseenter', onEnter);
    el?.addEventListener('mouseleave', onLeave);
    const id = setInterval(() => {
      if (!paused) slide(1);
    }, 5000);
    return () => {
      clearInterval(id);
      el?.removeEventListener('mouseenter', onEnter);
      el?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <figure
            key={i}
            className="flex w-full shrink-0 snap-start flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-brand-900/5 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="flex gap-1.5 text-pink-500">
              {Array.from({ length: 5 }).map((_, p) => (
                <Icon key={p} name="paw" className="h-6 w-6" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[15px] italic leading-relaxed text-ink/75">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-5">
              <span className="block font-display text-sm font-extrabold uppercase tracking-wide text-pink-500">
                — {r.name}
              </span>
              <span className="mt-0.5 block text-xs text-ink/45">{r.when}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => slide(-1)}
          aria-label="Previous reviews"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-pink-500 text-pink-500 transition hover:bg-pink-500 hover:text-white"
        >
          <Icon name="chevron" className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => slide(1)}
          aria-label="Next reviews"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-pink-500 text-pink-500 transition hover:bg-pink-500 hover:text-white"
        >
          <Icon name="chevron" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
