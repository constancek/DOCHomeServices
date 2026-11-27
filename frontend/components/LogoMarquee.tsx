// Continuous, auto-scrolling image strip (no controls). Two copies of the 7
// images form a seamless loop via the .animate-marquee utility (-50% shift).
// Logo files and their pixel widths (all 192px tall, 2x the displayed height).
const IMAGES = [
  { n: 1, w: 164 },
  { n: 2, w: 160 },
  { n: 3, w: 161 },
  { n: 4, w: 161 },
  { n: 5, w: 192 },
  { n: 6, w: 186 },
  { n: 7, w: 179 },
];

export default function LogoMarquee({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-[#f2f2f2] py-4 ${className}`}>
      {/* py-4 inside the mask leaves room for a logo to grow on hover without
          being clipped; the outer padding is cut by the same amount. */}
      <div className="marquee-mask overflow-hidden py-4">
        {/* Phones: logo size and gaps scale with screen width (capped at the
            old size) so narrower phones still show about three logos. */}
        <div className="flex w-max animate-marquee items-center gap-[min(10vw,3rem)] pr-[min(10vw,3rem)] sm:gap-16 sm:pr-16">
          {[...IMAGES, ...IMAGES].map(({ n, w }, i) => (
            <img
              key={i}
              src={`/carousel/${n}.webp`}
              width={w}
              height={192}
              loading="lazy"
              decoding="async"
              alt=""
              aria-hidden="true"
              className="h-[min(20vw,5rem)] w-auto shrink-0 object-contain transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none sm:h-24"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
