// Continuous, auto-scrolling image strip (no controls). Two copies of the 7
// images form a seamless loop via the .animate-marquee utility (-50% shift).
const IMAGES = [1, 2, 3, 4, 5, 6, 7];

export default function LogoMarquee({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-[#f2f2f2] py-8 ${className}`}>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {[...IMAGES, ...IMAGES].map((n, i) => (
            <img
              key={i}
              src={`/carousel/${n}.png`}
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
