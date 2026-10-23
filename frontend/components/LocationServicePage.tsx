import Link from 'next/link';
import Icon from './Icon';
import LocationHero from './LocationHero';
import { LocationSections } from './PageSections';
import MainWithSidebar from './Sidebar';
import { sidebarCouponFor } from '@/content/coupons';
import Accordion from './Accordion';
import LocationVideoProof from './LocationVideoProof';
import LogoMarquee from './LogoMarquee';
import LocationTeamPhotos from './LocationTeamPhotos';
import { videoForLocation } from '@/content/videoTestimonials';
import { site } from '@/content/site';
import type { Location, Adjacent } from '@/content/locations';

// Unique, per-neighborhood copy authored for one specific service.
// (Sections that must be unique: intro, the local-relevance moat, the
// common-problems lead-in, and at least one localized FAQ.)
export type LocationServiceCopy = {
  // Legacy layout only (towns not yet on the one-format layout).
  intro?: string;
  relevance?: string[];
  commonIntro: string;
  localFaqs: { q: string; a: string }[];
  // One-format layout (see page-format.md): when both are set, the intro
  // section is just "Local [Service] Pros Who Know [Town]" + localParagraph
  // (70-90 words) and "Emergency [Service] in [Town]" + emergencyParagraph
  // (45-60 words), replacing the intro heading, relevance and sidebar sections.
  localParagraph?: string;
  emergencyParagraph?: string;
  // Fully localized towns replace the service's shared sections with their own
  // versions (same topics, written for that town). Anything left out falls back
  // to the shared config.
  overrides?: Partial<Pick<ServiceLocationConfig, LocalizableField>>;
};

type LocalizableField =
  | 'ctaLine'
  | 'introHeading'
  | 'introParagraphs'
  | 'sidebarSections'
  | 'band1Heading'
  | 'commonSituations'
  | 'trustedBanner'
  | 'proseSections'
  | 'whyTitle'
  | 'whyParagraph'
  | 'sharedFaqs';

// Reusable, write-once-per-service config — mirrors that service's MASTER page
// so location pages carry the full experience (banners, sidebar, photo bands,
// prose, PageSections), just tailored to the neighborhood. Strings may contain
// {neighborhood} / {place} / {brand} / {area} tokens.
export type ServiceLocationConfig = {
  slug: string;
  serviceName: string;
  eyebrow: string;
  hubLabel: string;
  parentCrumb?: { label: string; href: string };
  businessType: string; // schema @type: 'HVACBusiness' | 'Plumber' | 'Electrician'
  schemaServiceType: string;
  ctaLine: string; // orange top banner heading
  heroImage: string; // sidebar hero photo
  promo?: string; // optional lime promo callout
  introHeading: string; // sidebar H2
  introParagraphs: string[];
  sidebarSections?: { title: string; body: string[] }[]; // extra prose in the main column
  relatedCards: { slug: string; title: string }[]; // image cards
  band1Image: string;
  band1Heading: string; // uses copy.commonIntro + commonSituations
  commonSituations: string[];
  trustedBanner: string;
  band2Image: string;
  band2Heading: string;
  band2Paragraphs: string[];
  proseSections: { title: string; body: string }[];
  whyTitle: string;
  whyParagraph: string; // 30-40 words under whyTitle; may use {neighborhood}
  proofQuote: string;
  sharedFaqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export default function LocationServicePage({
  config: baseConfig,
  loc,
  copy,
  nearby,
}: {
  config: ServiceLocationConfig;
  loc: Location;
  copy: LocationServiceCopy;
  nearby: Adjacent[];
}) {
  const config: ServiceLocationConfig = { ...baseConfig, ...copy.overrides };
  const place = loc.city
    ? `${loc.neighborhood}, ${loc.city}, ${loc.state}`
    : `${loc.neighborhood}, ${loc.state}`;
  const fill = (s: string) =>
    s
      .split('{neighborhood}').join(loc.neighborhood)
      .split('{place}').join(place)
      .split('{brand}').join(site.name)
      .split('{area}').join(site.serviceArea);

  const faqs = [...copy.localFaqs, ...config.sharedFaqs];

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': config.businessType,
    name: `${site.name} — ${config.serviceName}, ${loc.neighborhood}`,
    telephone: site.primaryPhone.number,
    url: `${site.url}/services/${config.slug}/${loc.slug}`,
    areaServed: { '@type': 'Place', name: place },
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.city ?? loc.neighborhood,
      addressRegion: loc.state,
      ...(loc.zip ? { postalCode: loc.zip } : {}),
      addressCountry: 'US',
    },
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: config.schemaServiceType,
    description: `${config.serviceName} in ${place}.`,
    provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
    areaServed: { '@type': 'Place', name: place },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      ...(config.parentCrumb
        ? [{ '@type': 'ListItem', position: 3, name: config.parentCrumb.label, item: `${site.url}${config.parentCrumb.href}` }]
        : []),
      { '@type': 'ListItem', position: config.parentCrumb ? 4 : 3, name: config.hubLabel, item: `${site.url}/services/${config.slug}` },
      { '@type': 'ListItem', position: config.parentCrumb ? 5 : 4, name: loc.neighborhood, item: `${site.url}/services/${config.slug}/${loc.slug}` },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    ...(config.parentCrumb ? [config.parentCrumb] : []),
    { label: config.hubLabel, href: `/services/${config.slug}` },
    { label: loc.neighborhood },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero + intro (unique) */}
      <LocationHero
        title={`${config.serviceName} in ${place}`}
        crumbs={crumbs}
        image={config.heroImage}
        imageAlt={`${config.serviceName} in ${loc.neighborhood}`}
      />

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar hideMenu mascot place={loc.neighborhood} couponTitle={sidebarCouponFor(config.slug)}>
          {config.promo && (
            <div className="mb-5 rounded-2xl bg-lime-500 px-5 py-3 text-center font-display text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
              {fill(config.promo)}
            </div>
          )}
          {copy.localParagraph && copy.emergencyParagraph ? (
            <>
              {/* One-format layout: two headings, one paragraph each. */}
              <h2 className="section-title text-brand-700">
                Local {config.serviceName} Pros Who Know {loc.neighborhood}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{copy.localParagraph}</p>
              <h2 className="mt-10 section-title text-brand-700">
                Emergency {config.serviceName} in {loc.neighborhood}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{copy.emergencyParagraph}</p>
            </>
          ) : (
            <>
              <h2 className="section-title text-brand-700">
                {fill(config.introHeading)}
              </h2>
              {/* Opening paragraph: the town intro. */}
              <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{copy.intro}</p>

              {/* Local relevance — THE MOAT (unique) */}
              <h2 className="mt-10 section-title text-brand-700">
                Local {config.serviceName} Pros Who Know {loc.neighborhood}
              </h2>
              <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/80">
                {(copy.relevance ?? []).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {config.sidebarSections?.map((sec) => (
                <div key={sec.title}>
                  <h2 className="mt-10 section-title text-brand-700">{fill(sec.title)}</h2>
                  {sec.body.map((p, i) => (
                    <p key={i} className="mt-3 text-[17px] leading-relaxed text-ink/75">{fill(p)}</p>
                  ))}
                </div>
              ))}
            </>
          )}

        </MainWithSidebar>
      </section>

      {/* Band 1: common problems (photo left) — localized lead */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: `url(${config.band1Image})` }} role="img" aria-label={`${config.serviceName} in ${loc.neighborhood}`} />
          <div>
            <h2 className="section-title">{fill(config.band1Heading)}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">{copy.commonIntro}</p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {config.commonSituations.slice(0, 4).map((c) => (
                <li key={c} className="flex gap-3 text-base font-medium leading-snug">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews: one local customer video, right after the common problems */}
      <LocationVideoProof
        neighborhood={loc.neighborhood}
        video={videoForLocation(loc.neighborhood, loc.county, config.businessType)}
      />

      {/* Awards strip, right under the customer video */}
      <section className="bg-cream pb-16">
        <div className="container-page">
          <LogoMarquee />
        </div>
      </section>

      {/* Orange call banner, right under the awards */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold leading-tight sm:text-2xl">{fill(config.ctaLine)}</h2>
          <a
            href={site.primaryPhone.href}
            className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      {/* Lower prose + why us + proof + FAQ + mesh + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <div className="space-y-8">
            {config.proseSections.map((sec) => (
              <div key={sec.title}>
                <h2 className="section-title text-brand-700">{fill(sec.title)}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-ink/75">{fill(sec.body)}</p>
              </div>
            ))}
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">{fill(config.whyTitle)}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">{fill(config.whyParagraph)}</p>

        </div>
      </section>

      {/* Van, tech and team photos, in a full-width blue band */}
      <LocationTeamPhotos neighborhood={loc.neighborhood} />

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* FAQ */}
          <h2 className="section-title text-brand-700">{config.serviceName} FAQs for {loc.neighborhood}</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({ title: f.q, body: <p className="text-[15px] leading-relaxed text-ink/75">{f.a}</p> }))}
              defaultOpen={0}
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Need {config.serviceName} in {loc.neighborhood}?</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Call now for fast, licensed service in {place}, or request an estimate.
            </p>
            <a href={site.primaryPhone.href} className="btn-pink mt-6 text-base">
              <Icon name="phone" className="h-5 w-5" />
              Call {site.primaryPhone.number}
            </a>
          </div>
        </div>
      </section>

      <LocationSections neighborhood={loc.neighborhood} seed={config.slug} />

      {/* Related services — pills, below the booking form so the page
          gets the visitor to book before offering them somewhere else to go. */}
      {config.relatedCards.length > 0 && (
        <section className="py-14">
          <div className="container-page max-w-4xl">
              <h2 className="section-title text-brand-700">Related Services</h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {config.relatedCards.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="inline-block rounded-full bg-white px-5 py-2.5 font-display text-sm font-extrabold text-brand-600 ring-1 ring-brand-100 transition hover:bg-brand-50">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </section>
      )}
    </>
  );
}
