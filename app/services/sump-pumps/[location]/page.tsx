import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { sumpPumpsCopy } from '@/content/location-copy/sump-pumps';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'sump-pumps',
  serviceName: 'Sump Pumps',
  eyebrow: 'Plumbing',
  hubLabel: 'Sump Pumps',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Sump Pump Installation & Repair',
  ctaLine: 'Sump pump failing in {neighborhood}? Call before the next storm',
  heroImage: '/services/sump-hero.jpg',
  introHeading: 'Sump Pumps in {neighborhood}',
  introParagraphs: [
    'A working sump pump is the difference between a dry basement and thousands of dollars in water damage. {brand} installs, repairs, and replaces sump pumps for homeowners in {place} — including battery-backup systems that keep running when the power goes out mid-storm.',
    'Our licensed plumbers size the pump to your home, test the float and discharge, and tell you honestly whether a repair will hold or a replacement is the smarter buy, with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What We Install & Repair',
      body: [
        'We handle every part of a {neighborhood} sump system: primary submersible and pedestal pumps, battery-backup pumps, check valves, discharge lines, and float switches. We replace failed pumps and add backup systems to homes that have only a single pump.',
        'Whether it is a quick float-switch fix or a full pump-and-backup install, we set it to spec and test it under water before we leave.',
      ],
    },
    {
      title: 'Why a Backup Pump Matters Here',
      body: [
        'The worst basement floods happen during the same storms that knock out the power — exactly when a single pump quits. A battery-backup pump keeps the pit clear through an outage, and it is the upgrade we recommend most for homes that have flooded before.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'leak-repair', title: 'Leak Repair' },
    { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
    { slug: 'drain-cleaning', title: 'Drain Cleaning' },
  ],
  band1Image: '/services/sump-signs.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Needs Sump Pump Service',
  commonSituations: [
    'Water pooling in the basement or crawl space after rain',
    'A pump that runs constantly or cycles on and off',
    'Strange grinding, rattling, or humming from the pit',
    'Damp, musty odors or visible mold on lower levels',
    'A pump older than 7–10 years',
    'No battery backup in a home that has flooded before',
    'A discharge line that freezes or clogs in winter',
  ],
  trustedBanner: 'Your Local & Trusted Sump Pump Pros in {neighborhood}',
  band2Image: '/services/sump-pumps.jpg',
  band2Heading: 'What to Expect From Your Sump Pump Service in {neighborhood}',
  band2Paragraphs: [
    'We start by checking the pit, the pump, the float switch, the check valve, and where the discharge sends the water — then explain the flat-rate price before any work begins.',
    'For a replacement we size the new pump to your home and drainage, set it, connect a check valve and discharge line, add a battery backup where it makes sense, and pour water in to test the full cycle before we leave.',
  ],
  proseSections: [
    { title: 'Repair or Replace Your Sump Pump?', body: 'A stuck float, a failed check valve, or a clogged discharge line is often a quick repair, and we are glad to make it. But a pump past 7–10 years that runs constantly or cannot keep up is living on borrowed time — replacing it before the next storm beats cleaning up a flooded basement in {neighborhood}. We tell you honestly which is the better value.' },
    { title: 'Battery Backup for Storm-Time Outages', body: 'Most basement floods happen during the storms that also cut the power, which is when a single pump is useless. A battery-backup pump takes over automatically during an outage and keeps the pit clear. For any {neighborhood} home that has taken on water before, it is the upgrade we recommend first.' },
    { title: 'Sizing and Discharge Done Right', body: 'A pump that is undersized cannot keep up, and a discharge line that dumps too close to the foundation just sends the water back. We size the pump to your home’s water volume and route the discharge away from the foundation so a {neighborhood} basement actually stays dry.' },
    { title: 'Same-Day Sump Pump Service in {neighborhood}', body: 'A dead pump with rain in the forecast cannot wait. We staff for demand and reach most {neighborhood} homes the same day to repair or replace a failed pump before the water rises.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Battery Backup Options', text: 'We install backup systems so your pump keeps working during a storm-time power outage.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
    { icon: 'clock', title: 'Same-Day Service', text: 'A failed pump before a storm cannot wait — we reach most homes the same day.' },
    { icon: 'check', title: 'Licensed & Insured', text: 'Background-checked plumbers and installations sized correctly for your home.' },
  ],
  proofQuote:
    'Our pump died the week before a big storm and the basement had flooded once before. They replaced it the same day and added a battery backup — basement stayed bone dry through the rain.',
  sharedFaqs: [
    { q: 'How long does a sump pump last before needing replacement?', a: 'Most sump pumps last about 7–10 years. If yours is older than that, runs constantly, makes new noises, or is not keeping up with the water, it is worth having it checked before the next big storm.' },
    { q: 'What is involved in a sump pump installation?', a: 'We assess the pit and your drainage, set the pump, connect the discharge line and a check valve, test the float switch, and — where it makes sense — add a battery backup so you are covered during a power outage.' },
    { q: 'What is included in your sump pump repair service?', a: 'We diagnose the problem, then fix the common culprits — a failed check valve, a clogged discharge line, or a stuck float switch — and fully test the system. We handle both submersible and pedestal models.' },
    { q: 'What causes sump pumps to fail?', a: 'The usual causes are a stuck float switch, a clogged or frozen discharge line, power loss during a storm, an undersized pump, or simple age and wear. A battery backup protects against the power-loss failures.' },
    { q: 'How much water can a sump pump handle?', a: 'It depends on the pump’s horsepower and how high it has to push the water. We size the pump to your home’s water volume, and a backup pump adds capacity for the heaviest storms.' },
  ],
  related: [
    { label: 'Sump Pumps (overview)', href: '/services/sump-pumps' },
    { label: 'Leak Repair', href: '/services/leak-repair' },
    { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
    { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => sumpPumpsCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Sump Pumps in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Sump pump installation, repair, and replacement in ${place} — including battery-backup systems to keep your basement dry. Same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/sump-pumps/${loc.slug}` },
    openGraph: {
      title: `Sump Pumps in ${place} | ${site.name}`,
      description: `Same-day sump pump installation and repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function SumpPumpsLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = sumpPumpsCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
