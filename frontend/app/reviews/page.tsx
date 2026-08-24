import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import ReviewsSection from '@/components/ReviewsSection';
import { site } from '@/content/site';

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
          { label: 'Reviews' },
        ]}
      />

      <ReviewsSection />

      {/* The section above already carries the reviews, so PageSections skips its
          own copy on this page. */}
      <PageSections hideMarquee hideReviews />
    </>
  );
}
