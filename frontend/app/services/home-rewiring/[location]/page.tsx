import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { homeRewiringCopy } from '@/content/location-copy/home-rewiring';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'home-rewiring',
  serviceName: 'Home Rewiring',
  eyebrow: 'Electrical',
  hubLabel: 'Home Rewiring',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Home Rewiring',
  ctaLine: 'Worried about old wiring in your {neighborhood} home? Call for a free estimate',
  heroImage: '/services/rewiring-hero.webp',
  introHeading: 'Home Rewiring in {neighborhood}',
  introParagraphs: [
    'Old wiring puts a home at risk — insulation breaks down, connections loosen, and circuits struggle with modern demand, showing up as flickering lights, tripping breakers, and warm outlets. {brand} handles partial and whole-home rewiring for homeowners in {place}, replacing unsafe wiring with modern materials.',
    'Our licensed electricians review the system, plan the scope, rewire to current code, and test the whole thing before finishing — with clear, upfront pricing on the rewiring cost.',
  ],
  sidebarSections: [
    {
      title: 'What We Rewire',
      body: [
        'For {neighborhood} homes we handle whole-home rewiring, partial room and circuit updates, aluminum-wire and knob-and-tube replacement, two-prong-to-grounded outlet conversions, and the panel upgrades that often go with them.',
        'We tailor the scope to what your home actually needs — not every house needs a full rewire.',
      ],
    },
    {
      title: 'Why It Matters Here',
      body: [
        'A lot of the housing across {neighborhood} predates modern electrical loads, and original knob-and-tube or aluminum wiring is both a fire and shock risk that today’s appliances overload. Updating it makes the home safer and ready for current demand.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'electrical-mast-repair', title: 'Mast Repair' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/rewiring-signs.webp',
  band1Heading: 'Signs Your {neighborhood} Home Needs Rewiring',
  commonSituations: [
    'Flickering or dimming lights',
    'Breakers that trip frequently',
    'Burning smells or warm outlets and switches',
    'Two-prong, ungrounded outlets',
    'Aluminum wire or knob-and-tube wiring',
    'An old fuse panel instead of breakers',
    'A home more than 30 years old never updated',
  ],
  trustedBanner: 'Your Local & Trusted Home Rewiring Pros in {neighborhood}',
  band2Image: '/services/rewiring-hero.webp',
  band2Heading: 'Our Rewiring Process in {neighborhood}',
  band2Paragraphs: [
    'We review your electrical system to find the weak spots, lay out a clear scope and timeline, and explain any temporary power interruptions and the flat-rate price before any work begins.',
    'We replace the outdated wiring with modern materials, update breakers and balance circuits where needed, and test the full system so your {neighborhood} home is safe and code-compliant before we finish.',
  ],
  proseSections: [
    { title: 'Knob-and-Tube and Aluminum in {neighborhood}', body: 'Many of the older homes across {neighborhood} still run original knob-and-tube or 1960s-70s aluminum wiring. Both struggle with modern demand — aluminum expands and loosens at connections, creating heat, and knob-and-tube has no ground. We replace them with grounded copper that today’s appliances and electronics need.' },
    { title: 'Whole-Home or Partial?', body: 'Not every {neighborhood} home needs a full rewire. If most of the system is sound, a partial update to the problem circuits, a few rooms, or the two-prong outlets may be all it takes. If the wiring is original throughout, whole-home rewiring is the safer long-term fix. We evaluate and tell you honestly which.' },
    { title: 'Why It Has to Be a Pro', body: 'Rewiring means working with live wiring and strict code — done wrong it leads to fire hazards, shock, failed inspections, and insurance problems. Our licensed electricians understand grounding and load balance, and every rewire in a {neighborhood} home is installed to meet current code and pass inspection.' },
    { title: 'Safer Home, Ready for Modern Demand', body: 'Faulty wiring is a leading cause of house fires, and overloaded circuits and worn insulation only raise the risk. Rewiring a {neighborhood} home removes the damaged wiring, increases circuit capacity, and prepares the house for smart devices, new lighting, and larger appliances without strain.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Trained pros who understand grounding and load balance.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Every rewire is installed to meet current safety code.' },
    { icon: 'badge', title: 'Clear Estimates', text: 'Upfront pricing on your rewiring cost before work begins.' },
    { icon: 'clock', title: 'Reliable Scheduling', text: 'Dependable timelines and tidy, professional service.' },
  ],
  proofQuote:
    'Our 1920s house still had knob-and-tube and two-prong outlets everywhere. They walked us through a whole-home rewire, kept the power planned around our schedule, and passed inspection. Lights are steady and we can finally run everything at once.',
  sharedFaqs: [
    { q: 'What is involved in electrical rewiring?', a: 'Rewiring replaces outdated electrical wiring and updates circuits to meet code. Projects may involve partial home rewiring or full whole-home rewiring, depending on your home’s condition.' },
    { q: 'Is it safe to live in a home while it’s being rewired?', a: 'In many cases, yes. We plan each project carefully and explain any temporary power interruptions ahead of time so you know what to expect.' },
    { q: 'What does electrical rewiring cost?', a: 'Electrical rewiring cost depends on your home’s size and the scope of the work. We provide a detailed estimate after evaluating your system, so you know the price before we begin.' },
    { q: 'Can outdated wiring cause electrical shocks?', a: 'Yes. Damaged or poorly grounded wiring increases the risk of both shock and fire, which is one of the main reasons to replace it.' },
    { q: 'Can I just rewire one part of my home?', a: 'Yes. Partial rewiring may be possible if the rest of the system is in good condition. We tailor each project to what your home actually needs.' },
  ],
  related: [
    { label: 'Home Rewiring (overview)', href: '/services/home-rewiring' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Electrical Mast Repair', href: '/services/electrical-mast-repair' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => homeRewiringCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Home Rewiring in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Partial and whole-home electrical rewiring in ${place} — knob-and-tube and aluminum-wire replacement by licensed electricians, code-compliant and built for modern demand. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/home-rewiring/${loc.slug}` },
    openGraph: {
      title: `Home Rewiring in ${place} | ${site.name}`,
      description: `Licensed partial and whole-home rewiring serving ${place} and nearby areas.`,
    },
  };
}

export default async function HomeRewiringLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = homeRewiringCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
