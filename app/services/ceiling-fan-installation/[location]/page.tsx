import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { ceilingFanCopy } from '@/content/location-copy/ceiling-fan-installation';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'ceiling-fan-installation',
  serviceName: 'Ceiling Fan Installation',
  eyebrow: 'Electrical',
  hubLabel: 'Ceiling Fan Installation',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Ceiling Fan Installation',
  ctaLine: 'Want a ceiling fan installed in {neighborhood}? Call for a free estimate',
  heroImage: '/services/ceilingfan-hero.jpg',
  introHeading: 'Ceiling Fan Installation in {neighborhood}',
  introParagraphs: [
    'A properly installed ceiling fan improves comfort, airflow, and energy efficiency all year. {brand} installs and replaces ceiling fans for homeowners in {place} — fan-rated mounting, safe wiring, and balanced, quiet operation by licensed electricians.',
    'Whether you are upgrading an outdated fixture, adding a fan to a bedroom or porch, or replacing a wobbling unit, we handle it cleanly with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What We Handle',
      body: [
        'For {neighborhood} homes we install new fans, replace old ones, mount to a fan-rated box, wire to your switches and remotes, add a down rod for vaulted ceilings, and balance the blades for quiet operation.',
        'We also handle weather-rated fans for covered porches and patios.',
      ],
    },
    {
      title: 'Why a Fan-Rated Box Matters',
      body: [
        'A standard lighting box is not built to carry a fan’s weight and motion — a common shortcut in older {neighborhood} homes that leads to wobble and, eventually, a fan that drops. We anchor to a proper fan-rated box so it stays secure for the long haul.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'lighting-fixture-installation', title: 'Lighting Fixtures' },
    { slug: 'recessed-lighting', title: 'Recessed Lighting' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
  ],
  band1Image: '/services/ceiling-fan-installation.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Needs Ceiling Fan Service',
  commonSituations: [
    'Wobbling or shaking during operation',
    'Grinding, clicking, or humming noises',
    'Inconsistent or failing speed control',
    'Flickering or dimming fan light',
    'Poor airflow even at the highest speed',
    'A fan mounted to a box that is not fan-rated',
    'An outdated style that no longer fits the room',
  ],
  trustedBanner: 'Your Local & Trusted Ceiling Fan Pros in {neighborhood}',
  band2Image: '/services/ceilingfan-hero.jpg',
  band2Heading: 'Our Ceiling Fan Installation Process in {neighborhood}',
  band2Paragraphs: [
    'We start by checking the ceiling box — confirming it is rated for a fan’s weight and motion — then secure the mount, complete the wiring to your switches and controls, and explain the flat-rate price before any work begins.',
    'We test the fan at every speed, adjust the blade balance for smooth, quiet operation, and clean up before we leave your {neighborhood} home.',
  ],
  proseSections: [
    { title: 'Why a Fan-Rated Box Is Non-Negotiable', body: 'A ceiling fan moves and carries real weight, so it has to hang from a fan-rated box — not the lightweight box meant for a light fixture. In older {neighborhood} homes we often find fans hung on standard boxes, which is what causes wobble, noise, and the occasional fan coming loose. We install or confirm a proper fan-rated box every time.' },
    { title: 'Choosing the Right Fan for the Room', body: 'Blade span should match the room — larger {neighborhood} living rooms need a wider span for real circulation, while bedrooms do well with a smaller fan. Vaulted or high ceilings need a down rod, and covered porches need a weather-rated model. We help you pick the size, mount, and style that actually fits the space.' },
    { title: 'Comfort in Every Season', body: 'A fan is not just for summer. Running it in reverse through a {neighborhood} winter pushes warm air back down off the ceiling, evens out the temperature, and takes some load off your heating system. Proper installation keeps it running safely and quietly in both directions.' },
    { title: 'DIY vs. a Licensed Electrician', body: 'Hanging a fan looks simple until you hit the wiring and the structural support. A bad install in a {neighborhood} home leads to wobble, noise, or a safety hazard overhead. Our licensed electricians handle the box, wiring, balancing, and controls so it is secure and code-compliant from day one.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Fan-Rated Mounting', text: 'We anchor to a fan-rated box so your fan stays secure and wobble-free.' },
    { icon: 'check', title: 'Licensed Electricians', text: 'Safe, code-compliant wiring and controls every time.' },
    { icon: 'badge', title: 'Balanced & Quiet', text: 'We balance the blades and test every speed for smooth, quiet operation.' },
    { icon: 'clock', title: 'Upfront Pricing', text: 'Clear quotes you approve before any work begins.' },
  ],
  proofQuote:
    'Our old fan wobbled and rattled for years — turned out it was hung on a regular light box. They put in a fan-rated box, mounted a new fan, balanced it, and it runs dead quiet now. Clean work and a fair, upfront price.',
  sharedFaqs: [
    { q: 'Do you offer financing for ceiling fan installation?', a: 'Yes — we offer financing for qualifying homeowners, which is handy when you are combining a fan with other electrical work like lighting or a switch upgrade.' },
    { q: 'Is ceiling fan installation safe on vaulted or high ceilings?', a: 'Yes. We use proper extension (down) rods and fan-rated anchoring suited to the height and the fan’s weight, and we bring the right equipment to install safely on vaulted and high ceilings.' },
    { q: 'How do I choose the right ceiling fan size for my room?', a: 'Match the blade span to the room: larger rooms need wider blades, and ceiling height affects whether you need a down rod or a flush mount. We help you pick the right size and style for the space.' },
    { q: 'What should I do if my ceiling fan starts making noise?', a: 'Noise usually means loose mounting, unbalanced blades, or a worn motor. We can rebalance the blades, resecure the mount, or replace the fan if the motor is failing.' },
  ],
  related: [
    { label: 'Ceiling Fan Installation (overview)', href: '/services/ceiling-fan-installation' },
    { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
    { label: 'Recessed Lighting', href: '/services/recessed-lighting' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => ceilingFanCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Ceiling Fan Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Ceiling fan installation and replacement in ${place} — fan-rated mounting, safe wiring, and balanced, quiet operation by licensed electricians. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/ceiling-fan-installation/${loc.slug}` },
    openGraph: {
      title: `Ceiling Fan Installation in ${place} | ${site.name}`,
      description: `Licensed ceiling fan installation and replacement serving ${place} and nearby areas.`,
    },
  };
}

export default async function CeilingFanLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = ceilingFanCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
