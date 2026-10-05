import Icon from './Icon';
import ReviewsCarousel from './ReviewsCarousel';
import LogoMarquee from './LogoMarquee';
import { site } from '@/content/site';
import { reviews } from '@/content/reviews';

// The "Five Paws" review block. It renders on /reviews and, via PageSections,
// above the booking form on every other page — so editing it here (or editing
// content/reviews.ts) updates the whole site at once.
export default function ReviewsSection({
  showMarquee = true,
  showAllLink = true,
}: {
  showMarquee?: boolean;
  // Off on /reviews itself, where a link to the same page makes no sense.
  showAllLink?: boolean;
}) {
  return (
    <section className="cv-auto bg-cream py-16 sm:py-20">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Heading block */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-pink-500">
            <Icon name="paw" className="h-5 w-5" />
            Happy Homeowners
          </p>
          {/* Non-breaking space keeps "the Board." on one line when it wraps. */}
          <h2 className="mt-3 font-logo text-4xl font-black uppercase leading-[1.05] text-brand-900 sm:text-5xl lg:text-6xl">
            Five Paws Across the{' '}Board.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
            Don’t just take our word for it — hear from {site.serviceArea} homeowners who trust{' '}
            {site.name}.
          </p>
          {/* The paw flows inline with the text so it stays beside "Family" when
              the line wraps, instead of drifting to the left as a flex sibling. */}
          <p className="mt-5 text-sm font-extrabold uppercase tracking-wide text-brand-700">
            <Icon
              name="paw"
              className="mr-2 inline-block h-5 w-5 align-[-4px] text-pink-500"
            />
            Family owned since {site.founded}, {site.yearsExperience} years of experience
          </p>
        </div>

        {/* One review at a time; the "View all reviews" link sits beside the arrows. */}
        <ReviewsCarousel reviews={reviews} showAllLink={showAllLink} />
      </div>

      {/* Auto-scrolling image strip */}
      {showMarquee && <LogoMarquee className="mt-14" />}
    </section>
  );
}
