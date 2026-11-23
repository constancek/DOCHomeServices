'use client';

import RevealGroup from './RevealGroup';
import { site } from '@/content/site';

// Location pages only: a full-width blue band with "Degree of Comfort in
// {neighborhood}" over three photos: the van, a tech greeting a homeowner, and
// the team. On wider screens all three share one height and the van gets a
// wider column (it is about 2.3:1, the others about 4:3), so every photo fills
// its card with almost no cropping. On phones they stack, each card at 70%
// of the column width, centered.
// When the band scrolls into view the heading rises in word by word, then the
// photos fade up one at a time.
const PHOTOS = [
  { src: '/van.webp', width: 1100, height: 475, alt: (n: string) => `${site.name} service van on the way to a home in ${n}` },
  { src: '/orange-club.webp', width: 1000, height: 726, alt: (n: string) => `${site.name} technician greeting a homeowner in ${n}` },
  { src: '/community-club.webp', width: 1000, height: 667, alt: () => `The ${site.name} team, family owned since ${site.founded}` },
];

// Each photo is an instant-print: thick white border, square corners, its own
// slight tilt, and a small overlap with its neighbour on wider screens.
const PRINT_TILT = ['rotate-[4deg] md:translate-x-5', 'z-10 -rotate-[6deg] md:mt-5', 'rotate-[5deg] md:-translate-x-1'];

const WORD_STEP = 90; // ms between heading words
const PHOTO_STEP = 250; // ms between photos

// One-format location pages pass their "Why ... Choose Us" heading and
// paragraph, which replace the "Degree of Comfort in {neighborhood}" heading.
export default function LocationTeamPhotos({
  neighborhood,
  title,
  paragraph,
}: {
  neighborhood: string;
  title?: string;
  paragraph?: string;
}) {
  // The "Why ..." heading and paragraph are static; only the default
  // "Degree of Comfort in ..." heading rises in word by word.
  const words = `${site.name} in ${neighborhood}`.split(' ');
  const photosStart = title ? 150 : words.length * WORD_STEP + 150;

  return (
    <section className="cv-auto overflow-hidden bg-blue-section py-16 sm:py-20">
      <RevealGroup className="container-page">
        {(shown) => (
          <>
            {title ? (
              <>
                <h2 className="mx-auto max-w-3xl text-balance text-center font-sans text-[26px] font-black leading-tight text-white sm:text-[30px] lg:text-[36px]">
                  {title}
                </h2>
                {paragraph && (
                  <div className="relative mx-auto mt-7 max-w-3xl rounded-3xl bg-white/10 px-6 pb-7 pt-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/20 backdrop-blur-sm sm:px-10 sm:pb-9 sm:pt-10">
                    <span aria-hidden="true" className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500" />
                    <p className="text-center text-[19px] leading-relaxed text-white sm:text-[21px]">
                      {paragraph}
                    </p>
                  </div>
                )}
              </>
            ) : (
            <h2 className="text-center font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
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
            )}
            <ul className={`${paragraph ? 'mt-16 sm:mt-24' : 'mt-12'} grid gap-8 md:grid-cols-3 md:items-start md:gap-2 md:px-4`}>
              {PHOTOS.map((p, i) => (
                <li
                  key={p.src}
                  style={{ transitionDelay: shown ? `${photosStart + i * PHOTO_STEP}ms` : '0ms' }}
                  className={`relative mx-auto w-[70%] bg-white p-4 md:mx-0 md:w-auto shadow-[0_24px_45px_-14px_rgba(0,0,0,0.65)] transition-all duration-[1100ms] ease-[cubic-bezier(0.34,1.45,0.64,1)] sm:p-5 ${PRINT_TILT[i]} ${
                    shown ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.alt(neighborhood)}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] h-auto w-full object-cover"
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
