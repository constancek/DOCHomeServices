import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { miniSplitRepairCopy } from '@/content/location-copy/mini-split-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'mini-split-repair',
  serviceName: 'Mini-Split Repair',
  eyebrow: 'Air Conditioning · Mini-Splits',
  hubLabel: 'Mini-Split Repair',
  parentCrumb: { label: 'Mini-Splits', href: '/services/mini-splits' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Mini-Split Repair',
  ctaLine: 'Mini-split not working in {neighborhood}? Call for same-day service',
  heroImage: '/services/minisplit-repair-hero.jpg',
  introHeading: 'Ductless Mini-Split Repair in {neighborhood}',
  introParagraphs: [
    'When a ductless mini-split stops cooling or heating, comfort changes fast — a room goes uneven, airflow weakens, or the unit quits responding. {brand} diagnoses and repairs mini-splits for homeowners in {place}, on every major brand, with 24/7 emergency service.',
    'Because mini-splits work differently from central HVAC, the fix often takes specialized diagnosis — our refrigerant-certified technicians know these systems and resolve the problem without guesswork, with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'Common Repairs We Handle',
      body: [
        'For {neighborhood} homes we fix the full range: refrigerant leaks and low charge, electrical and control-board faults, sensor and thermostat trouble, clogged condensate drains, fan-motor and airflow problems, and the error codes that shut a system down.',
        'We work on single- and multi-zone systems from every major brand, with manufacturer-approved parts.',
      ],
    },
    {
      title: '24/7 Emergency Service',
      body: [
        'A mini-split that quits in a heat wave or a cold snap cannot wait, especially when it is the only conditioning a {neighborhood} room has. We answer day or night and work to restore comfort fast while preventing further damage.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'mini-splits', title: 'Mini-Splits (overview)' },
    { slug: 'mini-split-installation', title: 'Mini-Split Installation' },
    { slug: 'ac-repair', title: 'AC Repair' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
  ],
  band1Image: '/services/mini-split-repair.jpg',
  band1Heading: 'Signs Your {neighborhood} Mini-Split Needs Repair',
  commonSituations: [
    'Uneven cooling or heating between rooms',
    'Weak airflow from the indoor head',
    'Unusual noises during operation',
    'Water leaking near the indoor unit',
    'Musty or sour odors from the system',
    'The system shutting down or cycling unexpectedly',
    'A blinking error code on the indoor unit',
  ],
  trustedBanner: 'Your Local & Trusted Mini-Split Repair Pros in {neighborhood}',
  band2Image: '/services/minisplit-repair-hero.jpg',
  band2Heading: 'Our Mini-Split Repair Process in {neighborhood}',
  band2Paragraphs: [
    'Every repair starts with a careful evaluation of both the indoor and outdoor units — we check airflow, electrical connections, and refrigerant levels to find the real source of the problem, then explain it and the flat-rate price before any work begins.',
    'After you approve, we make the repair with proper tools and manufacturer-approved parts, then test the system to confirm steady cooling and heating and safe operation before we leave your {neighborhood} home.',
  ],
  proseSections: [
    { title: 'Why Is My Mini-Split Not Cooling?', body: 'In a {neighborhood} home the usual culprits are low refrigerant from a slow leak, a dirty filter choking airflow, a frozen coil, or a failing sensor or control board. We diagnose the exact cause instead of guessing, because topping off refrigerant without finding the leak just delays the next failure.' },
    { title: 'Leaks, Ice, and Odors', body: 'Water dripping from the indoor head is usually a clogged condensate drain or a coil that froze and is thawing; a musty smell points to moisture and buildup inside the unit. These are common calls across {neighborhood}, and we clear the drain, address the underlying cause, and confirm the head drains properly before we go.' },
    { title: 'Repair or Replace?', body: 'A mini-split that is relatively new with an isolated fault is worth repairing. One that is aging or failing repeatedly is often better replaced — and we will tell you honestly which makes sense for your {neighborhood} home rather than selling you a system you do not need.' },
    { title: '24/7 Emergency Repair in {neighborhood}', body: 'Mini-split failures do not keep business hours, and losing the only conditioning in a room is a real problem in a {neighborhood} heat wave or cold snap. We answer 24/7 and focus on restoring comfort quickly while preventing further damage to the system.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'All Major Brands', text: 'We repair single- and multi-zone mini-splits from every major brand.' },
    { icon: 'shield', title: 'Refrigerant-Certified', text: 'Licensed technicians who handle refrigerant safely and to code.' },
    { icon: 'clock', title: '24/7 Emergency Service', text: 'Lost cooling or heating after hours? We respond day or night.' },
    { icon: 'check', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  ],
  proofQuote:
    'Our mini-split started leaking water and throwing an error code in the middle of a heat wave. They came out same day, found a clogged drain and a low charge, fixed both, and explained exactly what went wrong. Cooling came right back.',
  sharedFaqs: [
    { q: 'Why is my mini-split not cooling?', a: 'The usual causes are low refrigerant, a dirty filter choking airflow, a frozen coil, or a faulty sensor or control board. We diagnose the exact cause and fix it rather than guessing.' },
    { q: 'Why is my mini-split leaking water?', a: 'A leak from the indoor head is most often a clogged condensate drain or a frozen coil that is thawing. We clear the drain, address the underlying cause, and confirm it drains properly.' },
    { q: 'Can you repair any brand of mini-split?', a: 'Yes — we service single- and multi-zone ductless systems from all major brands.' },
    { q: 'Do mini-splits need regular maintenance?', a: 'They do. Cleaning the filters regularly and having the system checked once a year keeps it efficient and prevents many of the repairs we get called for.' },
    { q: 'Should I repair or replace my mini-split?', a: 'If the system is relatively new and the issue is isolated, a repair makes sense. If it is aging or failing repeatedly, a new system is often the better value — and we will advise honestly.' },
  ],
  related: [
    { label: 'Mini-Split Repair (overview)', href: '/services/mini-split-repair' },
    { label: 'Mini-Splits', href: '/services/mini-splits' },
    { label: 'Mini-Split Installation', href: '/services/mini-split-installation' },
    { label: 'AC Repair', href: '/services/ac-repair' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => miniSplitRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return {};
  const place = loc.city ? `${loc.neighborhood}, ${loc.city}, ${loc.state}` : `${loc.neighborhood}, ${loc.state}`;
  return {
    title: `Mini-Split Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Ductless mini-split repair in ${place} — weak cooling, leaks, ice, and error codes fixed on all major brands. 24/7 emergency service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/mini-split-repair/${loc.slug}` },
    openGraph: {
      title: `Mini-Split Repair in ${place} | ${site.name}`,
      description: `Ductless mini-split repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function MiniSplitRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = miniSplitRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
