import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { hotTubWiringCopy } from '@/content/location-copy/hot-tub-wiring';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'hot-tub-wiring',
  serviceName: 'Hot Tub Wiring',
  eyebrow: 'Electrical',
  hubLabel: 'Hot Tub Wiring',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Hot Tub Wiring',
  ctaLine: 'Wiring a new spa in {neighborhood}? Do it safely — call today',
  heroImage: '/services/hottub-hero.webp',
  introHeading: 'Hot Tub Wiring in {neighborhood}',
  introParagraphs: [
    'A hot tub combines water, heat, and high-voltage electricity, so the wiring has to be done right. {brand} handles hot tub and spa electrical wiring for homeowners in {place} — dedicated 240V circuits, GFCI protection, proper bonding, and a code-required disconnect within sight of the spa.',
    'Our licensed electricians evaluate your panel, size the circuit to the manufacturer’s spec, and complete the install to current NEC standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} homes we check panel capacity, run a dedicated 240V GFCI-protected circuit, pull wire through approved (weather-rated) conduit, bond and ground the spa, add the disconnect within sight, and test the control system and startup.',
        'If the panel does not have room for the new circuit, we will tell you and handle the upgrade.',
      ],
    },
    {
      title: 'Why It Has to Be Done Right',
      body: [
        'Water and electricity together leave no margin for error. A miswired spa in a {neighborhood} backyard risks shock, tripped breakers, and fried pumps and control boards. Proper GFCI protection and bonding are what keep it safe.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'outdoor-lighting', title: 'Outdoor Lighting' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/hottub-signs.webp',
  band1Heading: 'Signs You Need Expert Hot Tub Wiring in {neighborhood}',
  commonSituations: [
    'Installing a new 240V hot tub or spa',
    'The breaker panel has no space for a dedicated spa circuit',
    'The spa repeatedly trips the breaker',
    'Lights dim or flicker when the hot tub runs',
    'Existing spa wiring does not meet NEC standards',
    'No GFCI protection or disconnect at the spa',
    'Uncertainty about the right amp rating or wire gauge',
  ],
  trustedBanner: 'Your Local & Trusted Hot Tub Wiring Pros in {neighborhood}',
  band2Image: '/services/hottub-hero.webp',
  band2Heading: 'Our Hot Tub Wiring Process in {neighborhood}',
  band2Paragraphs: [
    'We inspect your panel capacity and service load, confirm the spa manufacturer’s electrical requirements, and explain the flat-rate price before any work begins.',
    'We install a dedicated GFCI-protected 240V circuit through approved conduit, connect and bond the wiring properly, add the disconnect within sight of the spa, and test the control system and startup so your {neighborhood} hot tub runs safely from day one.',
  ],
  proseSections: [
    { title: 'Dedicated 240V Circuit and GFCI', body: 'A hot tub draws too much to share a circuit — it needs its own 240V line with GFCI protection that cuts power the instant it senses a fault, which matters most where water is involved. We size the breaker and wire to the spa’s rating so a {neighborhood} hot tub runs without nuisance trips or strain on the rest of the panel.' },
    { title: 'Bonding, Grounding, and the Disconnect', body: 'Code requires a hot tub to be bonded and grounded and to have a disconnect within sight of the spa — details a DIY install often misses. We handle the bonding grid, secure ground connections, and the disconnect so your {neighborhood} spa meets NEC standards and passes inspection.' },
    { title: 'Will Your {neighborhood} Panel Support It?', body: 'A spa is a big load, and many older {neighborhood} panels are already near capacity or have no open slots. We evaluate the service before installing and, if an upgrade is needed, explain it up front rather than overloading the system.' },
    { title: 'Built for the Backyard', body: 'A spa install lives outdoors year-round, so we use weather-rated fittings and conduit that stand up to moisture and the {neighborhood} seasons. The result is a clean, durable hookup that keeps the pumps, heater, and control board running reliably.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Safety-First Approach', text: 'Every spa install treated as a safety priority, not just another service call.' },
    { icon: 'check', title: 'NEC-Compliant Work', text: 'GFCI protection, proper bonding, and a code-required disconnect within sight.' },
    { icon: 'badge', title: 'Experienced Electricians', text: 'Licensed pros who specialize in hot tub and jacuzzi wiring.' },
    { icon: 'house', title: 'Honest Panel Advice', text: 'A thorough panel evaluation and upfront answers on any upgrade.' },
  ],
  proofQuote:
    'New hot tub on the patio and our panel was nearly full. They sized a dedicated 240V GFCI circuit, added the disconnect, bonded everything, and walked us through the startup. Clean conduit run and it has not tripped once.',
  sharedFaqs: [
    { q: 'How do I know if I need professional hot tub electrical installation?', a: 'If your spa requires a 240V circuit, GFCI protection, or breaker panel upgrades, professional installation is recommended.' },
    { q: 'Can I handle a hot tub electrical hook up myself?', a: 'Because hot tubs combine water and electricity, hiring a licensed electrician ensures safety and code compliance.' },
    { q: 'How long does the installation take?', a: 'Most hot tub electrical wiring projects are completed within one day, depending on panel capacity and installation distance.' },
    { q: 'What safety measures do you follow during installation?', a: 'We follow NEC standards, install GFCI protection, verify proper grounding and bonding, confirm correct wire gauge, and test system performance.' },
    { q: 'Will I need to upgrade my breaker panel for a hot tub?', a: 'In some cases, yes. If your existing breaker panel does not have enough capacity for a dedicated circuit, an upgrade may be required. We inspect your electrical system and explain your options before work begins.' },
  ],
  related: [
    { label: 'Hot Tub Wiring (overview)', href: '/services/hot-tub-wiring' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => hotTubWiringCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Hot Tub Wiring in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Hot tub and spa wiring in ${place} — dedicated 240V circuits, GFCI protection, and code-compliant installation by licensed electricians. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/hot-tub-wiring/${loc.slug}` },
    openGraph: {
      title: `Hot Tub Wiring in ${place} | ${site.name}`,
      description: `Licensed hot tub and spa wiring serving ${place} and nearby areas.`,
    },
  };
}

export default async function HotTubWiringLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = hotTubWiringCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
