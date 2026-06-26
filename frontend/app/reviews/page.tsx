import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import LogoMarquee from '@/components/LogoMarquee';
import { site } from '@/content/site';
import { reviews } from '@/content/reviews';

export const metadata: Metadata = {
  title: 'Reviews',
  description: `See what homeowners across ${site.serviceArea} are saying about ${site.name}.`,
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Reviews"
        description={`What homeowners across ${site.serviceArea} say about working with ${site.name}.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'The Degree of Comfort Difference', href: '/difference' },
          { label: 'Reviews' },
        ]}
      />

      {/* Five Paws — happy homeowners */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page">
          {/* Heading block — centered */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-pink-500">
              <Icon name="paw" className="h-5 w-5" />
              Happy Homeowners
            </p>
            <h2 className="mt-3 font-logo text-4xl font-black uppercase leading-[1.05] text-brand-900 sm:text-5xl lg:text-6xl">
              Five Paws Across the Board.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
              Don’t just take our word for it — hear from {site.serviceArea} homeowners who trust{' '}
              {site.name}.
            </p>
            <p className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-700">
              <Icon name="paw" className="h-5 w-5 text-pink-500" />
              Family owned with 30+ years of experience
            </p>
          </div>

          {/* Review carousel */}
          <div className="mt-12">
            <ReviewsCarousel reviews={reviews} />
          </div>
        </div>

        {/* Auto-scrolling image strip */}
        <LogoMarquee className="mt-14" />
      </section>

      <PageSections hideMarquee />
    </>
  );
}
