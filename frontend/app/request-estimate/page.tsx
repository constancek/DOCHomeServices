import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import EstimateForm from '@/components/EstimateForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Request an Estimate',
  description: `Request an estimate from ${site.name} on new heating, cooling, and plumbing systems in ${site.serviceArea}.`,
  alternates: { canonical: '/request-estimate/' },
};

const expectations = [
  'Written, itemized estimate',
  'Honest repair-versus-replace advice',
  'Upfront, flat-rate pricing',
  'Financing options explained',
];

export default function RequestEstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Estimates"
        title="Request an Estimate"
        description="Transparent residential estimates on new plumbing, heating, and cooling system installations and replacements."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Request an Estimate' }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <EstimateForm />

          <aside className="space-y-6">
            <div>
              <h2 className="m-center section-title text-brand-700">Transparent Estimates, No Pressure</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Tell us about your project and we will assess your home, lay out your options in plain
                language, and give you a written price. No jargon, no hard sell — just the information
                you need to make a confident decision.
              </p>
            </div>

            <ul className="m-list space-y-3">
              {expectations.map((e) => (
                <li key={e} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-lime-500 text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {e}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-blue-section p-6 text-white">
              <p className="text-[15px] leading-relaxed text-brand-100">Prefer to talk now? Call or text us:</p>
              <a href={site.primaryPhone.href} className="btn-pink mt-3 w-full">
                <Icon name="phone" className="h-4 w-4" />
                {site.primaryPhone.number}
              </a>
              <p className="mt-3 text-xs text-brand-200">{site.hours}</p>
            </div>
          </aside>
        </div>
      </section>

      <PageSections />
    </>
  );
}
