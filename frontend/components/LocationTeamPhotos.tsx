'use client';

import RevealGroup from './RevealGroup';
import { site } from '@/content/site';

// Location pages only: a full-width blue band with "Degree of Comfort in
// {neighborhood}" over three photos: the van, a tech greeting a homeowner, and
// the team. On wider screens all three share one height and the van gets a
// wider column (it is about 2.3:1, the others about 4:3), so every photo fills
// its card with almost no cropping. On phones they stack at their own shapes.
// When the band scrolls into view the heading rises in word by word, then the
// photos fade up one at a time.
const PHOTOS = [
  { src: '/van.webp', width: 1100, height: 475, alt: (n: string) => `${site.name} service van on the way to a home in ${n}` },
  { src: '/orange-club.webp', width: 1000, height: 726, alt: (n: string) => `${site.name} technician greeting a homeowner in ${n}` },
  { src: '/community-club.webp', width: 1000, height: 667, alt: () => `The ${site.name} team, family owned since ${site.founded}` },
];

const WORD_STEP = 90; // ms between heading words
const PHOTO_STEP = 250; // ms between photos

export default function LocationTeamPhotos({ neighborhood }: { neighborhood: string }) {
  const words = `${site.name} in ${neighborhood}`.split(' ');
  const photosStart = words.length * WORD_STEP + 150;

  return (
    <section className="cv-auto overflow-hidden bg-blue-section py-16 sm:py-20">
      <RevealGroup className="container-page">
        {(shown) => (
          <>
            <h2 className="text-center font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                  <span
                    style={{ transitionDelay: shown ? `${i * WORD_STEP}ms` : '0ms' }}
                    className={`inline-block transition-all duration-700 ease-out ${
                      shown ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                  >
                    {w}
                  </span>
                  {i < words.length - 1 && ' '}
                </span>
              ))}
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-[2fr_1.5fr_1.6fr]">
              {PHOTOS.map((p, i) => (
                <li
                  key={p.src}
                  style={{ transitionDelay: shown ? `${photosStart + i * PHOTO_STEP}ms` : '0ms' }}
                  className={`overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 transition-all duration-700 ease-out ${
                    shown ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.alt(neighborhood)}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full object-cover md:h-48 lg:h-60 xl:h-64"
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </RevealGroup>
    </section>
  );
}
