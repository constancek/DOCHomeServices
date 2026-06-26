import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { surgeProtectorCopy } from '@/content/location-copy/surge-protector-installation';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'surge-protector-installation',
  serviceName: 'Whole-Home Surge Protector Installation',
  eyebrow: 'Electrical',
  hubLabel: 'Surge Protector Installation',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Whole-Home Surge Protector Installation',
  ctaLine: 'Protect your {neighborhood} home from power surges — call today',
  heroImage: '/services/surge-hero.jpg',
  introHeading: 'Whole-Home Surge Protector Installation in {neighborhood}',
  introParagraphs: [
    'Power surges happen any time — lightning, grid fluctuations, and large appliances cycling on and off send excess voltage through your wiring and can fry electronics, HVAC, and smart-home devices in seconds. {brand} installs whole-home surge protectors for homeowners in {place}, right at the electrical panel.',
    'A panel-level device diverts surges safely to ground before they ever reach your circuits. Our licensed electricians install it to code, with upfront pricing and financing for qualifying homeowners.',
  ],
  sidebarSections: [
    {
      title: 'What We Install',
      body: [
        'For {neighborhood} homes we install a whole-home surge protective device at the panel, verify panel compatibility and placement, and pair it with point-of-use protection on your most sensitive electronics when it helps.',
        'It guards everything connected to your wiring — appliances, HVAC, and the panel itself.',
      ],
    },
    {
      title: 'Why It Matters Here',
      body: [
        'Most surges are small and frequent, not just dramatic lightning strikes, and they quietly wear down electronics over time. With the storms that roll through {neighborhood} and homes full of modern devices, protection at the panel is the most effective defense.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'home-rewiring', title: 'Home Rewiring' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/surge-protector-installation.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Needs Surge Protection',
  commonSituations: [
    'Lights that flicker or dim without a clear cause',
    'Electronics that stop working unexpectedly',
    'Breakers tripping with no obvious reason',
    'A newly installed HVAC system or air conditioner to protect',
    'Lots of smart-home devices and sensitive electronics',
    'Storm- and lightning-related electrical worries',
    'A home that has never had panel-level surge protection',
  ],
  trustedBanner: 'Your Local & Trusted Surge Protection Pros in {neighborhood}',
  band2Image: '/services/surge-hero.jpg',
  band2Heading: 'Our Surge Protector Process in {neighborhood}',
  band2Paragraphs: [
    'We inspect your panel to confirm compatibility and the right placement, review the appliances, HVAC, and electronics most at risk, and explain the flat-rate price before any work begins.',
    'We install the surge protective device to local code and the manufacturer’s spec, connect it securely at the panel, and test it to confirm it is protecting your {neighborhood} home before we leave.',
  ],
  proseSections: [
    { title: 'Protection at the Source', body: 'A whole-home surge protector wires into your panel, the central point where power spreads to every circuit in your {neighborhood} home. Instead of relying only on plug-in strips at a few outlets, it intercepts excess voltage at the source and protects everything downstream — from the furnace and AC to the kitchen appliances.' },
    { title: 'Small Surges Add Up', body: 'The dramatic lightning strike is rare; the small, repeated surges from the grid and from big appliances cycling are constant. Over time they degrade sensitive electronics in a {neighborhood} home without any obvious sign. Panel-level protection absorbs them so your devices last longer.' },
    { title: 'Layered Defense', body: 'Whole-home protection handles the large surges at the panel, while point-of-use strips add a second layer for your most sensitive gear — computers, TVs, smart-home hubs. We recommend the combination for {neighborhood} homes that lean heavily on electronics, and install the panel device that anchors it.' },
    { title: 'Licensed, Code-Compliant Install', body: 'A whole-home surge device ties directly into the electrical panel — high-voltage work that is not a DIY job. Our licensed electricians install it to code and the manufacturer’s guidelines in your {neighborhood} home, with financing available so protecting your equipment does not have to wait.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Whole-Panel Protection', text: 'Protection installed at the source, guarding everything connected to your wiring.' },
    { icon: 'check', title: 'Licensed Electricians', text: 'Experienced with surge protection devices and your panel.' },
    { icon: 'badge', title: 'Code-Compliant Install', text: 'Installed to local code and the manufacturer’s guidelines.' },
    { icon: 'star', title: 'Financing Available', text: 'Flexible options for qualifying homeowners.' },
  ],
  proofQuote:
    'After a storm took out our TV and a couple of devices, they installed a whole-home surge protector at the panel and explained how it covers the HVAC and appliances too. Clean install, fair price, and real peace of mind next time the lights flicker.',
  sharedFaqs: [
    { q: 'What is a whole-home surge protector?', a: 'It is a device installed at your electrical panel that diverts excess voltage safely into the ground before it reaches your circuits, appliances, and connected equipment.' },
    { q: 'Will a whole-home surge protector cover all my electronics?', a: 'It protects everything connected to your home’s wiring at the panel level. Pairing it with point-of-use protectors on your most sensitive devices adds a helpful second layer of defense.' },
    { q: 'Do I still need power strips with surge protection?', a: 'Whole-home protection handles the large surges at the source, while plug-in power strips add point-of-use protection for sensitive electronics. The two work well together.' },
    { q: 'Will surge protection increase the value of my home?', a: 'It can be an attractive feature for buyers and it protects valuable systems, but its main benefit is preventing the costly damage a surge can cause.' },
    { q: 'Can I install a surge protector myself?', a: 'No. A whole-home surge protector wires directly into your electrical panel and should be installed by a licensed electrician for safety and to meet code.' },
  ],
  related: [
    { label: 'Surge Protector Installation (overview)', href: '/services/surge-protector-installation' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Home Rewiring', href: '/services/home-rewiring' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => surgeProtectorCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Whole-Home Surge Protector Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Whole-home surge protector installation in ${place} — panel-level protection for appliances, HVAC, and electronics by licensed electricians. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/surge-protector-installation/${loc.slug}` },
    openGraph: {
      title: `Whole-Home Surge Protection in ${place} | ${site.name}`,
      description: `Licensed panel-level surge protector installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function SurgeProtectorLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = surgeProtectorCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
