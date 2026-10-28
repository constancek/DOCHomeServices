'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Icon from './Icon';
import { site } from '@/content/site';
import type { VideoTestimonial } from '@/content/videoTestimonials';

// Location pages only: one customer video beside a "Why {neighborhood}
// homeowners choose us" heading. The video is picked at build time by
// videoForLocation(). It plays muted (with controls to unmute) once it scrolls
// into view and pauses when it leaves, so nothing downloads on page load.
// Visitors who ask for reduced motion get it paused, with controls.
export default function LocationVideoProof({
  neighborhood,
  video,
}: {
  neighborhood: string;
  video: VideoTestimonial;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="cv-auto bg-cream py-16 sm:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        {/* Video */}
        <figure className="order-2 mx-auto w-full max-w-[300px] lg:order-none">
          <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-900 shadow-2xl ring-1 ring-brand-900/10">
            <video
              ref={videoRef}
              src={video.video}
              poster={video.poster}
              className="h-full w-full object-cover"
              aria-label={`Video testimonial from ${video.name}`}
              muted
              loop
              playsInline
              preload="none"
              controls
            />
          </div>
        </figure>

        {/* Heading block */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-base font-extrabold uppercase tracking-[0.18em] text-pink-500 sm:text-lg">
            <Icon name="paw" className="h-6 w-6" />
            Happy Homeowners
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-logo text-4xl font-black leading-[1.05] text-brand-900 sm:text-5xl lg:text-6xl">
            Why {neighborhood} Homeowners Choose {site.name}
          </h2>
          <p className="mt-8 font-logo text-3xl font-black text-pink-500 sm:text-4xl">
            Five Paws Across the{' '}Board.
          </p>
          <p className="mt-8 text-base font-extrabold uppercase tracking-wide text-brand-700 sm:text-lg">
            <Icon name="paw" className="mr-2 inline-block h-6 w-6 align-[-5px] text-pink-500" />
            Family owned since {site.founded}, {site.yearsExperience} years of experience
          </p>
          <Link
            href="/video-testimonials"
            className="mt-10 inline-flex items-center gap-2 border-b-2 border-pink-500 pb-1 text-lg font-semibold text-pink-600 transition hover:gap-3"
          >
            Hear more from our customers
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
