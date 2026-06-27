import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { garbageDisposalsCopy } from '@/content/location-copy/garbage-disposals';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'garbage-disposals',
  serviceName: 'Garbage Disposal Repair & Installation',
  eyebrow: 'Plumbing',
  hubLabel: 'Garbage Disposals',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Garbage Disposal Repair & Installation',
  ctaLine: 'Garbage disposal jammed or leaking in {neighborhood}? Call today',
  heroImage: '/services/disposal-hero.jpg',
  introHeading: 'Garbage Disposal Repair & Installation in {neighborhood}',
  introParagraphs: [
    'A working garbage disposal keeps a {neighborhood} kitchen clean and the drains clear — and when it jams, leaks, or quits, everyday cleanup turns into a hassle. {brand} repairs, replaces, and installs disposals for homeowners in {place}, with proper drain and dishwasher connections, leak-tested before we leave.',
    'Our licensed plumbers fix what is wrong when a repair makes sense, or help you choose the right new unit for your sink and household — with upfront flat-rate pricing. Call (513) 586-5107.',
  ],
  sidebarSections: [
    {
      title: 'Repair, Replace, or Install',
      body: [
        'For {neighborhood} homes we diagnose the problem first — a worn motor, a blocked pipe, a loose connection — and repair it on the spot when that is the better value, or replace the unit if it is failing.',
        'Adding a disposal where there was not one before? We handle the plumbing and electrical connections and test everything before we go.',
      ],
    },
    {
      title: 'Connected and Leak-Tested',
      body: [
        'A disposal ties into the drain and often the dishwasher line, so the connections have to be right. We seal and leak-test every {neighborhood} install so there is no water under the sink after we leave.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'drain-cleaning', title: 'Drain Cleaning' },
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
    { slug: 'faucet-repair-replacement', title: 'Faucet Repair' },
    { slug: 'plumbing-installation', title: 'Plumbing Installation' },
  ],
  band1Image: '/services/disposal-signs.jpg',
  band1Heading: 'Signs of a Failing Garbage Disposal in {neighborhood}',
  commonSituations: [
    'Rattling or unusually loud noises',
    'Frequent jams or locking up',
    'Bad smells that will not leave',
    'Water leaking under the sink',
    'Humming motor that will not spin',
    'A unit that trips the breaker or keeps resetting',
    'Adding a disposal to a sink that never had one',
  ],
  trustedBanner: 'Your Local & Trusted Garbage Disposal Pros in {neighborhood}',
  band2Image: '/services/garbage-disposals.jpg',
  band2Heading: 'Our Garbage Disposal Process in {neighborhood}',
  band2Paragraphs: [
    'We find out what is wrong — motor, pipe, gasket, or connection — and explain the flat-rate price and whether repair or replacement is the better call before any work begins.',
    'We make the drain and dishwasher connections cleanly, leak-test the unit, and confirm it runs quietly so your {neighborhood} kitchen sink is back to normal the same visit when possible.',
  ],
  proseSections: [
    { title: 'Repair First When It Makes Sense', body: 'A disposal that hums without grinding, leaks from the bottom, or keeps resetting can often be repaired rather than replaced. We inspect the motor, electrical parts, gaskets, and pipes in {neighborhood} homes and fix the real problem instead of pushing a new unit you do not need.' },
    { title: 'Choosing the Right Replacement', body: 'When a unit is loud, unreliable, or tripping the breaker, a modern disposal is quieter and stronger. We walk {neighborhood} homeowners through power and size options and fit the new unit cleanly to the sink and drain.' },
    { title: 'Drain and Dishwasher Connections', body: 'A disposal ties into the drain line and usually the dishwasher, and a bad connection means leaks or backups. We make and seal every connection in {neighborhood} kitchens and leak-test before we leave.' },
    { title: 'Adding a Disposal Where There Was None', body: 'Putting a disposal in a sink that never had one takes both plumbing and electrical work. We handle the wiring and the drain tie-in for {neighborhood} homes and test the finished install end to end.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed & Insured', text: 'Experienced plumbers who install and repair disposals safely.' },
    { icon: 'check', title: 'Repair First', text: 'We recommend repair before replacement when it is the better value.' },
    { icon: 'badge', title: 'Right-Sized Models', text: 'Help choosing a disposal that fits your sink and household.' },
    { icon: 'house', title: 'Leak-Tested', text: 'Proper connections, tested before we leave.' },
  ],
  proofQuote:
    'Disposal was humming but not spinning and leaking at the bottom. They cleared the jam, found the gasket was shot, and swapped the unit for a quieter one. Connected it to the dishwasher line, leak-tested it, and cleaned up. Done in one visit.',
  sharedFaqs: [
    { q: 'What causes a garbage disposal to jam so often?', a: 'Jams usually happen because of hard food scraps, bones, silverware, or fibrous materials like celery or corn husks. Over time, these items wear down the motor or get tangled in the blades, which can lead to repairs or replacement.' },
    { q: 'What are the signs I need garbage disposal repair instead of replacement?', a: 'If your disposal turns on but hums without grinding, leaks from the bottom, or resets constantly, repair may be the answer. We inspect the motor, electrical components, gaskets, and pipes to identify the underlying problem.' },
    { q: 'Why does my garbage disposal smell bad even after cleaning?', a: 'Bad odors stick around when food particles build up inside the unit or the drain pipe. Grease and food remnants can collect beneath the blades or within the drainage system even after cleaning attempts.' },
    { q: 'Do I need regular maintenance on my garbage disposal?', a: 'Your garbage disposal works hard every day. Regular upkeep helps catch buildup, rust, and early wear before they turn into failures.' },
    { q: 'Can you install a new garbage disposal in a home that did not have one before?', a: 'Yes. We take care of the plumbing and electrical wiring needed to support a brand-new garbage disposal unit.' },
  ],
  related: [
    { label: 'Garbage Disposals (overview)', href: '/services/garbage-disposals' },
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
    { label: 'Faucet Repair & Replacement', href: '/services/faucet-repair-replacement' },
    { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => garbageDisposalsCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Garbage Disposal Repair & Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Garbage disposal repair, replacement, and installation in ${place} — licensed plumbers with proper drain and dishwasher connections, leak-tested. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/garbage-disposals/${loc.slug}` },
    openGraph: {
      title: `Garbage Disposal Repair & Installation in ${place} | ${site.name}`,
      description: `Licensed garbage disposal service serving ${place} and nearby areas.`,
    },
  };
}

export default async function GarbageDisposalsLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = garbageDisposalsCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
