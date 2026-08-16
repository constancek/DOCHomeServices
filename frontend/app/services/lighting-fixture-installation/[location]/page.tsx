import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { lightingFixtureCopy } from '@/content/location-copy/lighting-fixture-installation';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'lighting-fixture-installation',
  serviceName: 'Light Fixture Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Light Fixture Installation',
  parentCrumb: { label: 'Lighting', href: '/services/lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Light Fixture Installation',
  ctaLine: 'Installing or replacing a light fixture in {neighborhood}? Call today',
  heroImage: '/services/fixture-hero.webp',
  introHeading: 'Light Fixture Installation in {neighborhood}',
  introParagraphs: [
    'The right fixture changes how a {neighborhood} room looks and works — better light over the kitchen island, a brighter vanity, a dining fixture that finishes the space. {brand} installs and replaces light fixtures across {place}, from pendants and chandeliers to ceiling and wall-mounted lighting, all wired safely by licensed electricians.',
    'Our team removes the old fixture, prepares the connections, mounts the new one securely, and tests it to current electrical standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} homes we review the room and lighting need, safely remove any existing fixture, prepare the electrical connections, mount the new fixture securely, and test brightness and switch operation.',
        'If the box is not rated for the fixture weight, or the wiring or switch needs updating, we handle it and explain the cost up front.',
      ],
    },
    {
      title: 'Every Room, Every Fixture',
      body: [
        'Kitchens, baths, dining rooms, hallways, bedrooms — each calls for a different fixture and mount. We install pendants, chandeliers, flush mounts, vanity lights, and wall sconces throughout {neighborhood} homes.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'indoor-lighting', title: 'Indoor Lighting' },
    { slug: 'recessed-lighting', title: 'Recessed Lighting' },
    { slug: 'led-lighting', title: 'LED Lighting' },
    { slug: 'ceiling-fan-installation', title: 'Ceiling Fans' },
  ],
  band1Image: '/services/fixture-types.webp',
  band1Heading: 'Fixtures We Install and Replace in {neighborhood}',
  commonSituations: [
    'Replacing an outdated or damaged fixture',
    'Hanging a new chandelier or dining fixture',
    'Pendant lights over a kitchen island or counter',
    'Brighter vanity and bathroom fixtures',
    'Ceiling-mounted lights for bedrooms and living rooms',
    'Wall sconces for hallways and entryways',
    'A heavy fixture that needs a properly rated box',
  ],
  trustedBanner: 'Your Local & Trusted Light Fixture Installation Pros in {neighborhood}',
  band2Image: '/services/lighting-fixture-installation.webp',
  band2Heading: 'Our Light Fixture Installation Process in {neighborhood}',
  band2Paragraphs: [
    'We review the room and the fixture, safely remove the old one, and explain the flat-rate price before any work begins.',
    'We prepare the connections, mount the new fixture securely, and test brightness and switch operation so your {neighborhood} fixture works reliably and is connected safely to the electrical system.',
  ],
  proseSections: [
    { title: 'Safe Wiring and Secure Mounting', body: 'A fixture is only as safe as its connections and mount. We wire each {neighborhood} fixture correctly and anchor it to a box rated for its weight, so a heavy chandelier or pendant stays put and the switch works the way it should.' },
    { title: 'Replacing Outdated Fixtures', body: 'Swapping a dated fixture is one of the quickest ways to refresh a {neighborhood} room. We remove the old unit, check the existing wiring and box, update anything that does not meet code, and install the new fixture cleanly.' },
    { title: 'Energy-Efficient LED Fixtures', body: 'Most modern fixtures run LED, which means brighter light, far less energy, and fewer bulb changes. We help {neighborhood} homeowners choose efficient fixtures and bulbs that give strong, steady light with lower running costs.' },
    { title: 'Layered Lighting by Room', body: 'A kitchen often pairs overhead light with pendants over the island; a living room layers ambient and accent fixtures. We plan fixture choices and placement so each {neighborhood} room is lit for how it is actually used.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Experienced pros who wire and mount every fixture safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Secure mounting and connections that meet electrical code.' },
    { icon: 'badge', title: 'Quality Fixtures', text: 'High-quality, energy-efficient fixture and LED options.' },
    { icon: 'house', title: 'Financing Available', text: 'Flexible financing to upgrade lighting across multiple rooms.' },
  ],
  proofQuote:
    'They hung a heavy chandelier over the stairwell, added pendants above the island, and swapped the old vanity lights. Everything is mounted solid, wired right, and the switches all work as expected. Clean, careful work.',
  sharedFaqs: [
    { q: 'What types of lighting fixtures do you install?', a: 'We install many types of fixtures including bathroom light fixtures, kitchen light fixtures, dining room light fixtures, ceiling lights, and wall-mounted lighting.' },
    { q: 'Can you replace existing lighting fixtures?', a: 'Yes. Our electricians provide light fixture replacement services for outdated or damaged fixtures.' },
    { q: 'Do you offer energy-efficient lighting options?', a: 'Yes. Many modern lighting fixtures support LED bulbs that provide strong brightness while using less electricity.' },
    { q: 'How long will light fixture installation take?', a: 'Most installations can be completed during a single service visit, depending on the number of fixtures and electrical connections involved.' },
    { q: 'Should I DIY or hire a professional to install light fixtures?', a: 'Professional installation ensures wiring is handled safely and the fixture is mounted securely. This reduces the risk of electrical issues and ensures proper performance.' },
  ],
  related: [
    { label: 'Light Fixture Installation (overview)', href: '/services/lighting-fixture-installation' },
    { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
    { label: 'Recessed Lighting', href: '/services/recessed-lighting' },
    { label: 'LED Lighting', href: '/services/led-lighting' },
    { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => lightingFixtureCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Light Fixture Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Light fixture installation in ${place} — kitchen, bathroom, dining, pendant, and ceiling fixtures installed and replaced by licensed electricians. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/lighting-fixture-installation/${loc.slug}` },
    openGraph: {
      title: `Light Fixture Installation in ${place} | ${site.name}`,
      description: `Licensed light fixture installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function LightingFixtureLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = lightingFixtureCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
