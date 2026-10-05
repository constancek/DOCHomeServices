import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import VideoTestimonialRows from '@/components/VideoTestimonialRows';
import { site } from '@/content/site';
import { videoTestimonials } from '@/content/videoTestimonials';

export const metadata: Metadata = {
  title: 'Video Testimonials',
  description: `Watch ${site.name} customers across ${site.serviceArea} talk about the work we did for them, in their own words.`,
  alternates: { canonical: '/video-testimonials' },
};

export default function VideoTestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Video Testimonials"
        title="Video Testimonials"
        description={`Homeowners across ${site.serviceArea}, on camera, in their own words.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Video Testimonials' },
        ]}
      />

      <section className="bg-white pt-16">
        <div className="container-page max-w-4xl text-center">
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-700 sm:text-4xl lg:text-5xl">
            Hear It Straight From Our Customers
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink/75 sm:text-lg">
            No scripts and no actors. These are homeowners we have worked for, talking about what we
            fixed, what it cost, and how the job went. Press play on any of them.
          </p>
        </div>
      </section>

      <VideoTestimonialRows items={videoTestimonials} />

      <PageSections />
    </>
  );
}
