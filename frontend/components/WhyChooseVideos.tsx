'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';

// Customer testimonial videos shown in the "Why Choose" section.
// Posters render instantly on every device; the video bytes only download
// when the visitor presses play (preload="none"), so the section loads fast.
const VIDEOS = [
  '/videos/testimonial-1.mp4',
  '/videos/testimonial-2.mp4',
  '/videos/testimonial-3.mp4',
];
const POSTERS = [
  '/videos/testimonial-1-poster.jpg',
  '/videos/testimonial-2-poster.jpg',
  '/videos/testimonial-3-poster.jpg',
];

export default function WhyChooseVideos() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const n = VIDEOS.length;
  const prev = (active - 1 + n) % n;
  const next = (active + 1) % n;

  function go(i: number) {
    setActive(i);
    setPlaying(false);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
        {/* Left preview — prev video, dimmed */}
        <button
          type="button"
          onClick={() => go(prev)}
          aria-label="Previous video"
          className="group relative aspect-[5/9] w-[29%] flex-shrink-0 overflow-hidden rounded-2xl bg-[#7e88b8] opacity-75 transition hover:opacity-100"
        >
          <img
            src={POSTERS[prev]}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-brand-900/35 transition group-hover:bg-brand-900/20" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-brand-500 shadow-card transition group-hover:scale-105 sm:h-14 sm:w-14">
              <Icon name="play" className="h-5 w-5 translate-x-0.5 fill-current sm:h-6 sm:w-6" />
            </span>
          </span>
        </button>

        {/* Center active card — plays the testimonial video */}
        <div className="relative aspect-[9/16] w-[38%] flex-shrink-0 overflow-hidden rounded-2xl bg-brand-900 shadow-card">
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

        {/* Right preview — next video, dimmed */}
        <button
          type="button"
          onClick={() => go(next)}
          aria-label="Next video"
          className="group relative aspect-[5/9] w-[29%] flex-shrink-0 overflow-hidden rounded-2xl bg-[#7e88b8] opacity-75 transition hover:opacity-100"
        >
          <img
            src={POSTERS[next]}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-brand-900/35 transition group-hover:bg-brand-900/20" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-brand-500 shadow-card transition group-hover:scale-105 sm:h-14 sm:w-14">
              <Icon name="play" className="h-5 w-5 translate-x-0.5 fill-current sm:h-6 sm:w-6" />
            </span>
          </span>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex items-center gap-2">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to video ${i + 1}`}
            aria-current={i === active}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === active ? 'bg-brand-900' : 'bg-brand-200 hover:bg-brand-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
