import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { electricalInspectionsCopy } from '@/content/location-copy/electrical-inspections';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'electrical-inspections',
  serviceName: 'Electrical Inspections',
  eyebrow: 'Electrical',
  hubLabel: 'Electrical Inspections',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Electrical Inspections',
  ctaLine: 'Need an electrical inspection in {neighborhood}? Call to schedule',
  heroImage: '/services/inspect-hero.webp',
  introHeading: 'Electrical Inspections in {neighborhood}',
  introParagraphs: [
    'Your home’s electrical system powers everything you use — and over time wiring and breakers wear down, connections loosen, and panels age. {brand} performs thorough electrical inspections for homeowners in {place}, checking the panel, wiring, grounding, and safety devices, and giving you a clear written report.',
    'Our licensed electricians look beyond the surface at the internal components and protective devices you cannot safely access, catching small problems before they become hazards — with flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What We Check',
      body: [
        'For {neighborhood} homes the inspection covers the panel (breakers, grounding, labeling, overheating), visible wiring and circuit load balance, outlet and switch operation, GFCI and AFCI protection, and a code-and-permit review of any recent work.',
        'You get a plain-English written report, and clear next steps if anything needs attention.',
      ],
    },
    {
      title: 'Why It Matters Here',
      body: [
        'Much of the housing across {neighborhood} is old enough that codes have changed several times since it was wired. An inspection confirms whether the system still meets today’s safety standards or has quietly fallen behind.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
    { slug: 'home-rewiring', title: 'Home Rewiring' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'surge-protector-installation', title: 'Surge Protection' },
  ],
  band1Image: '/services/electrical-inspections.webp',
  band1Heading: 'Signs Your {neighborhood} Home Needs an Inspection',
  commonSituations: [
    'Lights that flicker or dim',
    'Breakers that trip often',
    'Burning smells near outlets or switches',
    'Warm or discolored wall plates',
    'A buzzing sound from the electrical panel',
    'Recent renovations or major upgrades to verify',
    'A home more than 25 years old',
  ],
  trustedBanner: 'Your Local & Trusted Electrical Inspection Pros in {neighborhood}',
  band2Image: '/services/inspect-hero.webp',
  band2Heading: 'Our Inspection Process in {neighborhood}',
  band2Paragraphs: [
    'We follow a clear checklist so nothing is missed — examining the panel, reviewing wiring and circuit load, testing outlets and switches, and verifying GFCI/AFCI protection and code compliance on any recent work.',
    'At the end of the visit we explain the findings in plain terms, hand over a written report on your {neighborhood} home’s system, and outline clear next steps if repairs are needed.',
  ],
  proseSections: [
    { title: 'Why Older {neighborhood} Homes Especially Benefit', body: 'Electrical codes have changed many times over the decades, and a lot of {neighborhood} homes were wired to standards long since updated. An inspection confirms whether the panel, grounding, and circuits still meet today’s requirements — or whether the system has quietly fallen behind in ways you cannot see.' },
    { title: 'What an Inspection Uncovers', body: 'Beyond the obvious, inspections in {neighborhood} homes routinely turn up loose or deteriorating wiring, corroded or double-tapped breakers, inadequate grounding, circuits carrying too much load, and work done without proper permits. Catching these early prevents the fire and shock risks they create.' },
    { title: 'Why a Pro, Not a DIY Look', body: 'A quick glance can spot obvious damage, but it cannot safely open the panel or evaluate grounding and load balance. Our licensed electricians access the internal components properly, document what they find, and keep you out of the way of live wiring, shock, and arc-flash hazards in your {neighborhood} home.' },
    { title: 'When to Schedule One', body: 'Inspections are not just for emergencies. They make sense before buying or selling a {neighborhood} home, after a major renovation, when adding HVAC or large appliances, after a severe storm or lightning, when upgrading the panel, or simply when the home is more than 25 years old. Insurers and real-estate deals often ask for the documentation, too.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'Detailed Reports', text: 'A clear, written summary of your system’s condition and any recommended fixes.' },
    { icon: 'shield', title: 'Licensed Electricians', text: 'Trained, experienced electricians who safely access internal components.' },
    { icon: 'check', title: 'Code-Compliant', text: 'Recommendations aligned with current local electrical code.' },
    { icon: 'clock', title: 'Honest Pricing', text: 'Clear, upfront pricing with no surprises.' },
  ],
  proofQuote:
    'Had them inspect before we bought an older home. They opened the panel, found double-tapped breakers and a grounding issue the listing never mentioned, and gave us a written report we used in the deal. Thorough and clearly explained.',
  sharedFaqs: [
    { q: 'What is an electrical safety inspection?', a: 'It is a thorough check of your electrical system — panel, wiring, outlets, grounding, and protective devices — to find hazards and confirm code compliance. You receive a written report on the system’s condition.' },
    { q: 'How often should I have a home electrical inspection?', a: 'Every few years is reasonable for most homes, and it is smart to inspect before buying or selling, after major renovations, after a severe storm, or if your home is more than 25 years old.' },
    { q: 'What does a certified inspection include?', a: 'A panel inspection, wiring and circuit review, outlet and switch testing, GFCI/AFCI verification, and a code-and-permit review of any recent work.' },
    { q: 'What are the signs my home needs an inspection?', a: 'Flickering or dimming lights, frequent breaker trips, burning smells near outlets, warm or discolored wall plates, or a buzzing panel are all good reasons to schedule one.' },
    { q: 'How much will an inspection cost?', a: 'It depends on your home’s size and the scope of the inspection. We provide flat-rate pricing up front, so you know the cost before we begin.' },
  ],
  related: [
    { label: 'Electrical Inspections (overview)', href: '/services/electrical-inspections' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Home Rewiring', href: '/services/home-rewiring' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Surge Protection', href: '/services/surge-protector-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => electricalInspectionsCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Electrical Inspections in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Professional electrical inspections in ${place} — panel, wiring, grounding, and safety-device checks with a detailed written report. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/electrical-inspections/${loc.slug}` },
    openGraph: {
      title: `Electrical Inspections in ${place} | ${site.name}`,
      description: `Licensed electrical safety inspections serving ${place} and nearby areas.`,
    },
  };
}

export default async function ElectricalInspectionsLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = electricalInspectionsCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
