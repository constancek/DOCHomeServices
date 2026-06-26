import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import { site } from '@/content/site';
import { successStories, getStory } from '@/content/successStories';

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: `${story.serviceTag} — ${story.name}'s Story | ${site.name}`,
    description: `A ${story.serviceTag.toLowerCase()} success story from ${story.name}, a Degree of Comfort customer in ${site.serviceArea}. ${story.cardQuote}`,
    alternates: { canonical: `/customer-success-stories/${story.slug}` },
    openGraph: {
      title: `${story.name}'s Story — ${story.serviceTag} | ${site.name}`,
      description: story.cardQuote,
      images: [{ url: story.cardImage }],
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Customer Success Stories', item: `${site.url}/customer-success-stories` },
      { '@type': 'ListItem', position: 3, name: `${story.name}`, item: `${site.url}/customer-success-stories/${story.slug}` },
    ],
  };
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'HVACBusiness',
      name: site.name,
      telephone: site.primaryPhone.number,
      areaServed: site.serviceArea,
    },
    reviewBody: story.heroQuote,
    author: { '@type': 'Person', name: story.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  };

  const moreStories = successStories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <PageHero
        eyebrow={`Customer Success Story · ${story.serviceTag}`}
        title={`${story.name}'s Story`}
        description={`${story.serviceTag} in ${site.serviceArea}`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Customer Success Stories', href: '/customer-success-stories' },
          { label: story.name },
        ]}
      />

      {/* Quote banner (below header) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page max-w-4xl py-10 text-center sm:py-12">
          <p className="font-display text-lg font-extrabold leading-snug sm:text-2xl">
            “{story.heroQuote}”
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white/90">— {story.name}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12">
        <MainWithSidebar>
          <div className="mb-5 flex items-center gap-3">
            <img
              src={story.avatar}
              alt={story.name}
              width={56}
              height={56}
              className="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-brand-100"
            />
            <span className="font-display text-lg font-extrabold text-brand-800">{story.name}</span>
          </div>
          <div
            className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${story.cardImage})` }}
            role="img"
            aria-label={`${story.serviceTag} project for ${story.name}`}
          />
          {story.blocks.map((block, i) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2 key={i} className={`section-title text-brand-700 ${i === 0 ? '' : 'mt-10'}`}>
                    {block.text}
                  </h2>
                );
              case 'subheading':
                return (
                  <h3 key={i} className="mt-6 font-display text-base font-extrabold text-brand-700">
                    {block.text}
                  </h3>
                );
              case 'paragraph':
                return (
                  <p key={i} className="mt-3 text-[15px] leading-relaxed text-ink/75">
                    {block.text}
                  </p>
                );
              case 'quote':
                return (
                  <p key={i} className="mt-3 text-[15px] leading-relaxed text-ink/75">
                    {block.text}
                  </p>
                );
              case 'list':
                return (
                  <ul key={i} className="mt-4 space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                        <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}

          {/* Related services */}
          <div className="mt-8 flex flex-wrap gap-2">
            {story.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-full border border-brand-200 px-4 py-1.5 text-sm font-semibold text-brand-700 transition hover:border-pink-400 hover:text-pink-600"
              >
                {r.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Start Your Own Success Story</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Same problem, or something else entirely? Call now or request a free estimate and we will take care of it.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.primaryPhone.href} className="btn-pink text-base">
                <Icon name="phone" className="h-5 w-5" />
                Call {site.primaryPhone.number}
              </a>
              <Link href="/free-estimate" className="btn-outline border-white text-white hover:bg-white/10">
                Free Estimate
              </Link>
            </div>
          </div>
        </MainWithSidebar>
      </section>

      {/* More stories */}
      <section className="bg-brand-50 py-16">
        <div className="container-page">
          <h2 className="text-center font-display text-2xl font-black uppercase text-brand-700 sm:text-3xl">
            More Customer Success Stories
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreStories.map((s) => (
              <Link
                key={s.slug}
                href={`/customer-success-stories/${s.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <span
                  className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${s.cardImage})` }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/45 to-transparent transition group-hover:from-pink-700" />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block font-display text-sm font-extrabold uppercase leading-snug text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.7)]">
                    “{s.cardQuote}”
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-white/90">
                    Read {s.name}’s story
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
