'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';
import { videoTestimonials } from '@/content/videoTestimonials';

// Customer testimonial videos shown in the "Why Choose" section. The list is
// driven by content/videoTestimonials.ts — the same source as the
// /video-testimonials page — so adding a video there adds it here too.
// Posters render instantly on every device; the video bytes only download
// when the visitor presses play (preload="none"), so the section loads fast.
const VIDEOS = videoTestimonials.map((t) => t.video);
const POSTERS = videoTestimonials.map((t) => t.poster ?? '');
const NAMES = videoTestimonials.map((t) => t.name);

// Thumbnail strip below the carousel. Five tiles are visible at a time and the
// list wraps, so the strip scrolls forever in either direction. The arrows only
// move the strip — picking a video is a click on a tile.
const STRIP_SIZE = 5;
const N = VIDEOS.length;
const STRIP_COUNT = Math.min(STRIP_SIZE, N);
const STRIP_HALF = Math.floor(STRIP_COUNT / 2);

export default function WhyChooseVideos() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const n = VIDEOS.length;
  const prev = (active - 1 + n) % n;
  const next = (active + 1) % n;

  // The strip scrolls on its own. It opens with the first video centred, then
  // the arrows walk it one tile at a time, wrapping at either end.
  const [stripStart, setStripStart] = useState((N - STRIP_HALF) % N);
  const strip = Array.from({ length: STRIP_COUNT }, (_, k) => (stripStart + k) % N);
  const scrollStrip = (dir: number) => setStripStart((s) => (s + dir + N) % N);

  function go(i: number) {
    setActive(i);
    setPlaying(false);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center justify-center">
        {/* Left preview — prev video, tucked under the centre card. Clickable to
            select, but not playable: only the centre card plays. */}
        <button
          type="button"
          onClick={() => go(prev)}
          aria-label={`Show testimonial from ${NAMES[prev]}`}
          className="group relative z-0 -mr-[3%] aspect-[5/9] w-[28%] flex-shrink-0 overflow-hidden rounded-2xl bg-[#7e88b8] opacity-60 transition duration-300 hover:opacity-90 sm:-mr-[6%] sm:w-[32%] [mask-image:linear-gradient(to_right,#000_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,#000_40%,transparent_100%)]"
        >
          <img
            src={POSTERS[prev]}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-brand-900/35 transition group-hover:bg-brand-900/20" />
        </button>

        {/* Center active card — the only playable video */}
        <div className="relative z-10 aspect-[9/16] w-[46%] flex-shrink-0 overflow-hidden rounded-2xl bg-brand-900 shadow-2xl ring-2 ring-white">
          <video
            key={active}
            ref={videoRef}
            src={VIDEOS[active]}
            poster={POSTERS[active]}
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
              aria-label={`Play testimonial ${active + 1}`}
              className="absolute inset-0 grid place-items-center bg-brand-900/10 transition hover:bg-brand-900/20"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-brand-600 shadow-card transition hover:scale-105 sm:h-20 sm:w-20">
                <Icon name="play" className="h-7 w-7 translate-x-0.5 fill-current sm:h-9 sm:w-9" />
              </span>
            </button>
          )}
        </div>

        {/* Right preview — next video, tucked under the centre card */}
        <button
          type="button"
          onClick={() => go(next)}
          aria-label={`Show testimonial from ${NAMES[next]}`}
          className="group relative z-0 -ml-[3%] aspect-[5/9] w-[28%] flex-shrink-0 overflow-hidden rounded-2xl bg-[#7e88b8] opacity-60 transition duration-300 hover:opacity-90 sm:-ml-[6%] sm:w-[32%] [mask-image:linear-gradient(to_left,#000_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,#000_40%,transparent_100%)]"
        >
          <img
            src={POSTERS[next]}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-brand-900/35 transition group-hover:bg-brand-900/20" />
        </button>
      </div>

      {/* Thumbnail strip — five at a time, wrapping in both directions */}
      <div className="mt-8 flex w-full items-center justify-between gap-1.5 sm:gap-2 lg:mt-10">
        <button
          type="button"
          onClick={() => scrollStrip(-1)}
          aria-label="Scroll thumbnails left"
          className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-brand-200 text-brand-700 transition hover:border-brand-400 hover:bg-brand-50 hover:text-pink-500 sm:h-9 sm:w-9"
        >
          <Icon name="chevron" className="h-4 w-4 rotate-180" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {strip.map((idx, k) => (
            <button
              key={`${idx}-${k}`}
              type="button"
              onClick={() => go(idx)}
              aria-label={`Show testimonial from ${NAMES[idx]}`}
              aria-current={idx === active}
              className={`relative aspect-square w-11 flex-shrink-0 overflow-hidden rounded-lg transition sm:w-[70px] ${
                idx === active
                  ? 'opacity-100 ring-2 ring-pink-500 ring-offset-2'
                  : 'opacity-60 hover:opacity-95'
              }`}
            >
              <img
                src={POSTERS[idx]}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollStrip(1)}
          aria-label="Scroll thumbnails right"
          className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-brand-200 text-brand-700 transition hover:border-brand-400 hover:bg-brand-50 hover:text-pink-500 sm:h-9 sm:w-9"
        >
          <Icon name="chevron" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
