import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { BlogSections } from '@/components/PageSections';
import { posts } from '@/content/posts';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Home Comfort Blog',
  description:
    'Practical heating, cooling, plumbing, and electrical tips from the licensed technicians at ' +
    site.name + '.',
  alternates: { canonical: '/blog' },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="The blog"
        title="Home comfort tips, minus the jargon"
        description="Straight answers from our technicians on the heating, cooling, plumbing, and electrical questions homeowners actually ask."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl font-black uppercase leading-tight tracking-tight text-brand-600 sm:text-4xl">
            Welcome to the Degree of Comfort Blog!
          </h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-900/5 transition hover:shadow-lg"
              >
                <div className="relative">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  ) : (
                    <div className="grid aspect-[16/10] place-items-center bg-brand-50">
                      <Icon name="heart" className="h-10 w-10 text-brand-300" />
                    </div>
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-lime-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-pill">
                    {post.category}
                  </span>
                </div>
                <div className="bg-blue-section px-6 py-4">
                  <h2 className="font-display text-lg font-extrabold uppercase leading-snug text-white">
                    {post.title}
                  </h2>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-brand-600">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-pink-700 transition group-hover:gap-2.5">
                    Read More
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                  <span className="mt-4 border-t-2 border-lime-400 pt-3 text-xs font-medium text-brand-600">
                    {formatDate(post.date)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BlogSections />
    </>
  );
}
