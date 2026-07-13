'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';
import type { VideoTestimonial } from '@/content/videoTestimonials';

// Rows alternate light/dark and flip the video from left to right, so the page
// reads as a run of bands rather than a list. Video bytes only download when a
// visitor presses play (preload="none").
function Row({ item, index }: { item: VideoTestimonial; index: number }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dark = index % 2 === 1;

  return (
    <section className={dark ? 'bg-brand-600 py-14 sm:py-20' : 'bg-white py-14 sm:py-20'}>
      <div className="container-page">
        <div
          className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-14 ${
            dark ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Video */}
          <div className="relative aspect-[9/16] w-full max-w-[260px] flex-shrink-0 overflow-hidden rounded-2xl bg-brand-900 shadow-card sm:max-w-[300px]">
            <video
              ref={videoRef}
              src={item.video}
              poster={item.poster}
              className="h-full w-full object-cover"
              playsInline
              preload={item.poster ? 'none' : 'metadata'}
              controls={playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button
                type="button"
                onClick={() => videoRef.current?.play()}
                aria-label={`Play ${item.name}’s video testimonial`}
                className="absolute inset-0 grid place-items-center bg-brand-900/10 transition hover:bg-brand-900/25"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-pink-600 shadow-card transition hover:scale-105 sm:h-20 sm:w-20">
                  <Icon name="play" className="h-7 w-7 translate-x-0.5 fill-current sm:h-9 sm:w-9" />
                </span>
              </button>
            )}
          </div>

          {/* Quote */}
          <figure className="relative min-w-0 flex-1">
            {/* Opening mark — the icon is drawn as a closing quote, so it is
                rotated to open the pull-quote and left upright to close it. */}
            <Icon
              name="quote"
              className={`h-11 w-11 rotate-180 fill-current sm:h-12 sm:w-12 ${
                dark ? 'text-pink-400' : 'text-pink-500'
              }`}
            />

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    dark ? 'text-white' : 'text-ink/60'
                  }`}
                >
                  {item.location}
                </p>
                <p className="mt-1.5 font-display text-2xl font-extrabold uppercase tracking-tight text-pink-500 sm:text-3xl lg:text-4xl">
                  {item.name}
                </p>
              </div>
              <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="h-5 w-5 fill-current text-pink-500" />
                ))}
              </div>
            </div>

            <blockquote
              className={`mt-6 text-lg leading-relaxed sm:text-xl lg:text-[22px] lg:leading-[1.6] ${
                dark ? 'text-white' : 'text-ink/80'
              }`}
            >
              {item.quote}
            </blockquote>

            <div className="mt-7 flex items-center justify-between">
              <span className="h-1 w-16 rounded-full bg-pink-500" />
              <Icon
                name="quote"
                className={`h-11 w-11 fill-current sm:h-12 sm:w-12 ${
                  dark ? 'text-pink-400' : 'text-pink-500'
                }`}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default function VideoTestimonialRows({ items }: { items: VideoTestimonial[] }) {
  return (
    <>
      {items.map((item, i) => (
        <Row key={item.id} item={item} index={i} />
      ))}
    </>
  );
}
