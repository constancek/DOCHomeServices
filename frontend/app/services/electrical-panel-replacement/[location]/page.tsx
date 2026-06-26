import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { panelReplacementCopy } from '@/content/location-copy/electrical-panel-replacement';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'electrical-panel-replacement',
  serviceName: 'Electrical Panel Replacement',
  eyebrow: 'Electrical',
  hubLabel: 'Electrical Panel Replacement',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Electrical Panel Replacement',
  ctaLine: 'Outgrowing your old electrical panel in {neighborhood}? Call for a free estimate',
  heroImage: '/services/panel-hero.jpg',
  introHeading: 'Electrical Panel Replacement in {neighborhood}',
  introParagraphs: [
    'Your electrical panel is the heart of your home’s electrical system — it feeds every circuit and protects the house when something goes wrong. {brand} replaces and upgrades breaker panels and old fuse boxes for homeowners in {place}, sized for modern demand and done with minimal disruption.',
    'Our licensed electricians pull the permit, set the right amperage for your home, and complete the work to code so it passes inspection — with clear, upfront pricing.',
  ],
  sidebarSections: [
    {
      title: 'What We Handle',
      body: [
        'For {neighborhood} homes we replace outdated breaker panels, swap old fuse boxes for modern breakers, upgrade service amperage (100A to 200A and up), and repair panels where a full replacement is not needed.',
        'Every job is permitted, right-sized, and tested before we leave.',
      ],
    },
    {
      title: 'Why It Matters Here',
      body: [
        'A lot of the housing across {neighborhood} predates today’s electrical loads, so original panels and fuse boxes struggle with modern appliances, HVAC, and EV chargers. A right-sized panel ends the tripping and the safety risk that comes with an overloaded system.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'home-rewiring', title: 'Home Rewiring' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'surge-protector-installation', title: 'Surge Protection' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/panel-signs.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Needs a New Panel',
  commonSituations: [
    'Breakers that trip frequently or won’t reset',
    'Flickering or dimming lights across the home',
    'A burning smell or warm spots near the panel',
    'An old fuse box instead of circuit breakers',
    'Scorch marks, buzzing, or a panel that feels hot',
    'Large appliances or HVAC not getting full power',
    'No capacity left to add a circuit, hot tub, or EV charger',
  ],
  trustedBanner: 'Your Local & Trusted Electrical Panel Pros in {neighborhood}',
  band2Image: '/services/panel-hero.jpg',
  band2Heading: 'What to Expect From Your Panel Service in {neighborhood}',
  band2Paragraphs: [
    'We start by assessing your existing panel, service size, and wiring, then explain whether a repair or a full replacement makes sense — with the permit and flat-rate price laid out before any work begins.',
    'We set the new panel at the right amperage, label every circuit, coordinate any utility disconnect, and test the system so your {neighborhood} home is safe, code-compliant, and ready for modern demand.',
  ],
  proseSections: [
    { title: 'Repair or Replace Your Panel?', body: 'Not every panel problem means a full replacement. A failed breaker, a loose connection, or a single faulty circuit is often a targeted repair. But an old fuse box, a panel past 25–40 years, or one showing scorch marks and heat needs replacing before it becomes a hazard. We diagnose it and tell you honestly which your {neighborhood} home needs.' },
    { title: 'Right-Sizing the Amperage', body: 'Many older {neighborhood} homes run 60A or 100A service that modern living has outgrown — central air, electric ranges, hot tubs, and EV chargers all pull hard. We size the new panel (commonly 200A) to your real demand so you can add what you need without tripping breakers or overloading circuits.' },
    { title: 'Permitted, Code-Compliant, Inspected', body: 'Panel work is high-voltage and has to be done right. We pull the permit, install to current code, and see the job through final inspection. That protects your {neighborhood} home, keeps your insurance valid, and gives a buyer confidence down the road.' },
    { title: 'Safer Home, Higher Value', body: 'A modern panel ends the nuisance trips and the safety risks of an overloaded or aging system, and it is a genuine selling point in {neighborhood}. Many insurers now require an updated panel to keep coverage, so the upgrade pays off in more ways than one.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'High-voltage panel work handled safely by trained pros.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Permitted installs that pass final inspection.' },
    { icon: 'badge', title: 'Right-Sized Amperage', text: 'A panel sized for your home’s real electrical demand.' },
    { icon: 'house', title: 'Minimal Disruption', text: 'A smooth process that respects your home and time.' },
  ],
  proofQuote:
    'Our 1960s house still had the original panel and breakers tripped constantly. They upgraded us to 200A, labeled everything, pulled the permit, and passed inspection same week. No more flickering lights, and we can finally run the AC and oven at once.',
  sharedFaqs: [
    { q: 'What are the common signs that my electrical panel needs to be replaced?', a: 'Look for frequent breaker trips, flickering or dimming lights, buzzing sounds, burning smells, scorch marks, warm or hot panel surfaces, and an inability to support new high-demand appliances.' },
    { q: 'How long does an electrical panel typically last?', a: 'Most panels last 25–40 years, depending on use and environmental conditions. A panel near or past that range should be evaluated by a licensed electrician, especially if other warning signs are present.' },
    { q: 'Can I replace the electrical panel myself?', a: 'No. Panel replacement involves high-voltage work and must comply with safety codes. It should only be done by a licensed electrician to avoid electrical hazards, code violations, and insurance issues.' },
    { q: 'How much does panel replacement cost?', a: 'Costs vary depending on panel size, amperage, permits, and any required upgrades to the wiring or meter. We provide a clear, upfront quote after assessing your system.' },
    { q: 'Will a new electrical panel help with insurance or resale value?', a: 'Yes. Many insurers require updated panels to maintain coverage, and a modern panel can be a selling point for buyers — especially when it replaces an outdated or unsafe one.' },
  ],
  related: [
    { label: 'Electrical Panel Replacement (overview)', href: '/services/electrical-panel-replacement' },
    { label: 'Home Rewiring', href: '/services/home-rewiring' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Surge Protection', href: '/services/surge-protector-installation' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => panelReplacementCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Electrical Panel Replacement in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Electrical panel replacement and upgrades in ${place} — breaker panel and fuse-box replacement by licensed electricians, sized for modern demand. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/electrical-panel-replacement/${loc.slug}` },
    openGraph: {
      title: `Electrical Panel Replacement in ${place} | ${site.name}`,
      description: `Licensed panel replacement and upgrades serving ${place} and nearby areas.`,
    },
  };
}

export default async function PanelReplacementLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = panelReplacementCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
