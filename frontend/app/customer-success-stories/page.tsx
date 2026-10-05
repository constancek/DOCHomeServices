import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import SuccessStoriesGrid from '@/components/SuccessStoriesGrid';
import { site } from '@/content/site';
import { successStories } from '@/content/successStories';

export const metadata: Metadata = {
  title: 'Customer Success Stories',
  description: `Real customer success stories from ${site.name} — HVAC and plumbing projects across ${site.serviceArea}, in our customers' own words.`,
  alternates: { canonical: '/customer-success-stories' },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Success Stories"
        title="Customer Success Stories"
        description={`Real projects, real results — in our customers' own words, across ${site.serviceArea}.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Customer Success Stories' },
        ]}
      />

      {/* Intro */}
      <section className="pt-16">
        <div className="container-page max-w-4xl text-center">
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-700 sm:text-4xl lg:text-5xl">
            Hear From Our Wonderful Clients in Cincinnati and Surrounding Areas
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Discover the firsthand experiences of our satisfied clients on our Customer Success Stories
            page. Here, you’ll find genuine reviews that highlight our commitment to excellence in
            service and customer satisfaction. See why homeowners and businesses alike trust us with
            their most important HVAC or plumbing needs.
          </p>
        </div>
      </section>

      {/* Story cards */}
      <section className="py-12">
        <div className="container-page max-w-5xl">
          <SuccessStoriesGrid
            stories={successStories.map((s) => ({
              slug: s.slug,
              name: s.name,
              avatar: s.avatar,
              cardImage: s.cardImage,
              cardQuote: s.cardQuote,
            }))}
          />
        </div>
      </section>

      <PageSections />
    </>
  );
}
