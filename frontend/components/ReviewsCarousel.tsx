'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

type Review = {
  name: string;
  text: string;
  when: string;
  avatar?: string;
  videoHref?: string;
};

// Long reviews are clamped so every card is the same modest height; the visitor
// opens the full text in place. Roughly the length that fits five lines.
const CLAMP_CHARS = 240;

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  // The cards are rendered twice so the track can loop. `half` is the width of
  // one full set; keeping scrollLeft inside [0, half) and jumping by exactly one
  // set (instantly, onto an identical clone) makes the wrap invisible — no long
  // scroll back to the start.
  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('figure');
    const gap = 24; // matches gap-6
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth;
    const half = el.scrollWidth / 2;
    // Going left from the very start: hop forward one identical set first, so
    // there is room to scroll left into the previous card.
    if (dir === -1 && el.scrollLeft < step) el.scrollLeft += half;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // After each move settles, snap scrollLeft back into the first set instantly.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
      }, 200);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

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
    }, 20000);
    return () => {
      clearInterval(id);
      el?.removeEventListener('mouseenter', onEnter);
      el?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Rendered twice for the seamless loop above.
  const loop = [...reviews, ...reviews];

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((r, i) => {
          const isLong = r.text.length > CLAMP_CHARS;
          const open = expanded === i;
          return (
            <figure
              key={i}
              className="flex w-full shrink-0 snap-start flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-brand-900/5 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex gap-1.5 text-pink-500">
                {Array.from({ length: 5 }).map((_, p) => (
                  <Icon key={p} name="paw" className="h-6 w-6" />
                ))}
              </div>

              <blockquote
                className={`mt-4 text-[15px] italic leading-relaxed text-ink/75 ${
                  isLong && !open ? 'line-clamp-5' : ''
                }`}
              >
                &ldquo;{r.text}&rdquo;
              </blockquote>

              {isLong && (
                <button
                  type="button"
                  onClick={() => setExpanded(open ? null : i)}
                  className="mt-2 self-start text-xs font-bold uppercase tracking-wide text-pink-500 hover:text-pink-600"
                >
                  {open ? 'Read less' : 'Read more'}
                </button>
              )}

              <figcaption className="mt-6 flex items-center gap-3">
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt=""
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover ring-2 ring-pink-500/20"
                  />
                ) : (
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-brand-50 font-display text-sm font-extrabold text-brand-600 ring-1 ring-brand-100">
                    {r.name.charAt(0)}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block font-display text-sm font-extrabold uppercase tracking-wide text-pink-500">
                    {r.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-ink/45">{r.when}</span>
                </span>
              </figcaption>

              {r.videoHref && (
                <Link
                  href={r.videoHref}
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-pink-500 py-2 pl-2 pr-5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-pink-600"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-pink-500">
                    <Icon name="play" className="h-3.5 w-3.5 translate-x-px fill-current" />
                  </span>
                  Watch Their Video
                </Link>
              )}
            </figure>
          );
        })}
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
