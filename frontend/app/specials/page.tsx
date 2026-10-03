import type { Metadata } from 'next';
import CouponExpiry from '@/components/CouponExpiry';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import { site } from '@/content/site';
import { coupons } from '@/content/coupons';

export const metadata: Metadata = {
  title: 'Coupons & Specials',
  description: `Current coupons and special offers from ${site.name} on heating, cooling, plumbing, and electrical service in ${site.serviceArea}.`,
  alternates: { canonical: '/specials' },
};

export default function SpecialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Save Money"
        title="Coupons & Specials"
        description="Print or mention these offers when you book. Ask us about seasonal deals and new-customer savings."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Specials' }]}
      />

      <section className="py-16">
        <div className="container-page space-y-6">
          {coupons.map((c) => (
            <div
              key={c.title}
              className="relative overflow-hidden rounded-2xl border-2 border-dashed border-pink-400 bg-gray-100 px-6 py-8 transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              {/* Mascot watermark behind the offer */}
              <img
                src="/bulldog.webp"
                alt=""
                aria-hidden="true"
                width={768}
                height={768}
                className="pointer-events-none absolute -top-[8%] right-0 h-[162%] w-auto select-none object-contain opacity-[0.18]"
              />

              {/* Mascot */}
              <img
                src="/mascot.webp"
                alt="Degree of Comfort mascot"
                width={130}
                height={130}
                className="absolute left-4 top-1/2 hidden h-28 w-28 -translate-y-1/2 object-contain md:block"
              />

              {/* Offer */}
              <div className="relative mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                  Hurry, Offer Ends Soon!
                </p>
                <h2 className="mt-1 font-display text-2xl font-black uppercase leading-tight text-ink md:text-3xl">
                  {c.price} {c.title}
                </h2>
                <p className="mt-1 text-[15px] leading-relaxed text-ink/70">{c.details}</p>
                <a href={site.primaryPhone.href} className="btn-pink mt-4">
                  Click to Schedule
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
                <p className="mt-3 text-[11px] text-ink/50">
                  *Cannot be combined with any other offers. Some restrictions apply.
                </p>
                <p className="text-[11px] font-semibold italic text-ink/60">
                  Expires: <CouponExpiry kind={c.expiryKind} initial={c.expires} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageSections />
    </>
  );
}
