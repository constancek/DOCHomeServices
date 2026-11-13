import Link from 'next/link';
import Icon from '@/components/Icon';
import SlideInRight from '@/components/SlideInRight';
import { posts, type Post } from '@/content/posts';

function formatDate(iso: string) {
  // Month and year only, matching the blog index.
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
}

// The newest post from each category, then the three most recent of those,
// so the homepage always shows three different topics.
function latestByCategory(count = 3): Post[] {
  const newest = new Map<Post['category'], Post>();
  for (const post of [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))) {
    if (!newest.has(post.category)) newest.set(post.category, post);
  }
  return [...newest.values()].slice(0, count);
}

export default function HomeBlogSection() {
  const picks = latestByCategory();

  return (
    <section aria-label="From the blog" className="cv-auto bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((post, i) => (
            <SlideInRight key={post.slug} delay={i * 120} className="flex">
              <Link
                href={`/${post.slug}`}
                className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-900/5 transition duration-200 hover:scale-[1.03] hover:shadow-lg"
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
                  <h3 className="font-display text-lg font-extrabold leading-snug text-white">
                    {post.title}
                  </h3>
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
            </SlideInRight>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-pink hover:scale-105">
            View All Blogs
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
