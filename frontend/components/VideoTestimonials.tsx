'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';
import { videoTestimonials } from '@/content/videoTestimonials';

// Video testimonials section: a blue band of numbered customer thumbnails
// (six visible, four on phones, looping, with arrows), then the selected customer's name,
// rating, and words beside their playable video. Driven by
// content/videoTestimonials.ts, the same source as /video-testimonials.
// Video bytes only download when the visitor presses play (preload="none").
const ITEMS = videoTestimonials;
const N = ITEMS.length;
const STRIP_COUNT = Math.min(6, N);

export default function VideoTestimonials() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The strip opens on the first testimonial. The arrows walk it one
  // tile at a time and wrap at either end; clicking a tile selects it.
  const [stripStart, setStripStart] = useState(0);
  const strip = Array.from({ length: STRIP_COUNT }, (_, k) => (stripStart + k) % N);
  const scrollStrip = (dir: number) => setStripStart((s) => (s + dir + N) % N);

  function select(i: number) {
    setActive(i);
    setPlaying(false);
  }

  const t = ITEMS[active];
  if (!t) return null;

  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="container-page">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-pink-500">
            In Their Own Words
          </p>
          <h2 className="mt-2 font-display text-3xl font-black text-brand-700 sm:text-4xl">
            Video Testimonials
          </h2>
        </div>

        {/* Below lg the layout stacks: heading, thumbnail band, video, then the
            quote. The grid uses display:contents there so its children can be
            reordered; from lg up it is the normal two-column grid. */}
        <div className="flex flex-col">
        {/* Thumbnail band: number badges sit on the band's top edge, all in
            one line; thumbnails are spread evenly and the selected one is larger. */}
        <div className="order-1 mt-12 flex items-center gap-2 rounded-2xl lg:order-none bg-[#1a3aa6] px-2.5 pb-5 sm:gap-6 sm:px-8 sm:pb-7">
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            aria-label="Scroll testimonials left"
            className="mt-3 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-[#1a3aa6] sm:mt-4 sm:h-10 sm:w-10"
          >
            <Icon name="chevron" className="h-4 w-4 rotate-180" />
          </button>

          <div className="flex flex-1 items-start justify-between">
            {strip.map((idx, k) => {
              const item = ITEMS[idx];
              const isActive = idx === active;
              return (
                <button
                  key={`${idx}-${k}`}
                  type="button"
                  onClick={() => select(idx)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={isActive}
                  className={`group flex-shrink-0 flex-col items-center ${k >= 4 ? 'hidden sm:flex' : 'flex'}`}
                >
                  <span className="-mt-2.5 whitespace-nowrap rounded-full bg-pink-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ring-2 ring-[#1a3aa6] sm:-mt-3.5 sm:px-3 sm:py-1 sm:text-xs">
                    {item.name.split(' ')[0]}
                  </span>
                  {/* Every thumbnail is the same size; only the white outline
                      moves to the selected one. */}
                  <span className="mt-3 flex items-center p-1 sm:mt-5">
                    <span
                      className={`block h-[52px] w-[52px] overflow-hidden rounded-xl ring-2 ring-offset-2 ring-offset-[#1a3aa6] transition duration-200 sm:h-[100px] sm:w-[100px] sm:rounded-2xl sm:ring-[3px] ${
                        isActive ? 'ring-white' : 'ring-transparent'
                      }`}
                    >
                      <img
                        src={item.avatar ?? item.poster}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollStrip(1)}
            aria-label="Scroll testimonials right"
            className="mt-3 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-[#1a3aa6] sm:mt-4 sm:h-10 sm:w-10"
          >
            <Icon name="chevron" className="h-4 w-4" />
          </button>
        </div>

        {/* Selected testimonial */}
        <div className="max-lg:contents lg:mt-10 lg:grid lg:grid-cols-[1fr_300px] lg:items-start lg:gap-10">
          <div className="order-3 mt-10 lg:order-none lg:mt-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-black uppercase text-pink-500 sm:text-3xl">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink/50">{t.location}</p>
              </div>
              <div className="flex gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="h-5 w-5 fill-pink-500 text-pink-500" />
                ))}
              </div>
            </div>
            <blockquote className="mt-5 text-[16px] leading-relaxed text-ink/75">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-2" aria-hidden>
              <span className="h-[3px] w-8 rounded-full bg-pink-500" />
              <span className="h-[3px] w-3 rounded-full bg-pink-500" />
              <span className="h-[3px] w-3 rounded-full bg-pink-500" />
              <span className="h-[3px] w-3 rounded-full bg-pink-500" />
            </div>
          </div>

          <div className="relative order-2 mx-auto mt-8 aspect-[9/16] w-full max-w-[300px] lg:order-none lg:mt-0 overflow-hidden rounded-2xl bg-brand-900 shadow-2xl">
            <video
              key={active}
              ref={videoRef}
              src={t.video}
              poster={t.poster}
              className="h-full w-full object-cover"
              playsInline
              preload="none"
              controls={playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button
                type="button"
                onClick={() => videoRef.current?.play()}
                aria-label={`Play testimonial from ${t.name}`}
                className="absolute inset-0 grid place-items-center bg-brand-900/10 transition hover:bg-brand-900/20"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-pink-500 shadow-card transition hover:scale-105">
                  <Icon name="play" className="h-7 w-7 translate-x-0.5 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
