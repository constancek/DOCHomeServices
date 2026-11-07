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
    <div className={`overflow-hidden rounded-2xl bg-[#f2f2f2] py-8 ${className}`}>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
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
              className="h-20 w-auto shrink-0 object-contain sm:h-24"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
