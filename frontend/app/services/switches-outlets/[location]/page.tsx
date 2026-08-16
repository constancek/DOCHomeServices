import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { switchesOutletsCopy } from '@/content/location-copy/switches-outlets';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'switches-outlets',
  serviceName: 'Switches & Outlets',
  eyebrow: 'Electrical',
  hubLabel: 'Switches & Outlets',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Switch & Outlet Installation',
  ctaLine: 'Need outlets or switches fixed or added in {neighborhood}? Call today',
  heroImage: '/services/outlets-hero.webp',
  introHeading: 'Switches & Outlets in {neighborhood}',
  introParagraphs: [
    'Outlets and switches are the parts of your electrical system you touch every day — and even small problems can be a real headache or a safety risk. {brand} installs, replaces, and repairs switches and outlets for homeowners in {place}, wired safely and to code.',
    'From swapping broken outlets and fixing faulty switches to adding modern GFCI and USB outlets, our licensed electricians handle it with clear, upfront pricing and a tidy job site.',
  ],
  sidebarSections: [
    {
      title: 'What We Handle',
      body: [
        'For {neighborhood} homes we replace worn or broken outlets, repair and rewire light switches, add new outlets to end extension-cord clutter, and install GFCI outlets for kitchens, baths, garages, and exteriors plus USB outlets for convenience.',
        'We test grounding and load on every device before we leave.',
      ],
    },
    {
      title: 'Why It Matters Here',
      body: [
        'Older {neighborhood} homes were built with far fewer outlets than modern life needs, and many still run ungrounded two-prong receptacles. Adding properly grounded, GFCI-protected outlets ends the overloaded circuits and shock risk that come with aging wiring.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
    { slug: 'home-rewiring', title: 'Home Rewiring' },
    { slug: 'surge-protector-installation', title: 'Surge Protection' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/outlets-signs.webp',
  band1Heading: 'Common Outlet & Switch Problems in {neighborhood} Homes',
  commonSituations: [
    'Broken, loose, or scorched outlets',
    'Light switches that flicker, buzz, or don’t respond',
    'Ungrounded two-prong outlets in an older home',
    'No GFCI protection in kitchens, baths, or outdoors',
    'Too few outlets and a reliance on extension cords',
    'Outlets that feel warm or trip the breaker',
    'A want for modern USB or smart switches',
  ],
  trustedBanner: 'Your Local & Trusted Switch & Outlet Pros in {neighborhood}',
  band2Image: '/services/outlets-hero.webp',
  band2Heading: 'What to Expect From Your Service in {neighborhood}',
  band2Paragraphs: [
    'We assess your existing outlets and switches, check the wiring and panel capacity, and recommend what your {neighborhood} home actually needs — then explain the flat-rate price before any work begins.',
    'We wire each device to the correct circuit, secure and ground it, bring it up to current code, and test for proper power and stability before we clean up and go.',
  ],
  proseSections: [
    { title: 'Why Older {neighborhood} Homes Run Short on Outlets', body: 'Homes built decades ago were wired for a lamp and a radio, not today’s kitchens, offices, and entertainment centers. That is why so many {neighborhood} homes lean on power strips and extension cords. Adding properly wired outlets where you need them ends the clutter and the overloaded-circuit risk that comes with it.' },
    { title: 'GFCI Protection Where It Counts', body: 'GFCI outlets cut power the instant they sense a fault, which is why code requires them near water — kitchens, bathrooms, garages, basements, and outdoors. Many older {neighborhood} homes never had them. We install GFCI protection where it belongs so a wet hand or a leaky appliance does not become a shock.' },
    { title: 'Faulty Switches Are Worth Fixing Early', body: 'A switch that buzzes, feels warm, or flickers the lights is often a loose or worn connection — a small fix that prevents a bigger problem. We repair or replace the switch and confirm the wiring behind it is sound, a common call across {neighborhood}’s older homes.' },
    { title: 'When an Outlet Job Points to Bigger Work', body: 'Sometimes replacing outlets reveals an overloaded panel or aging wiring that cannot safely support more load. When that happens in a {neighborhood} home we will tell you honestly, and we can handle the panel upgrade or rewiring so the whole system is safe — not just the one outlet.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Trained pros who wire every device safely and to code.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Proper grounding and stable connections, tested before we leave.' },
    { icon: 'badge', title: 'Modern Upgrades', text: 'USB and GFCI outlets for added convenience and safety.' },
    { icon: 'house', title: 'Tidy Installs', text: 'Minimal disruption and a clean workspace when we finish.' },
  ],
  proofQuote:
    'Our 1940s house had two-prong outlets everywhere and not enough of them. They added grounded outlets, put GFCIs in the kitchen and bath, and fixed a switch that always buzzed. Clean work and they tested every one before leaving.',
  sharedFaqs: [
    { q: 'What is involved in a switch installation?', a: 'Switch installation includes evaluating home wiring, confirming code compliance, and connecting the switch to the appropriate circuit for reliable operation.' },
    { q: 'What are the benefits of GFCI outlets?', a: 'GFCI outlets reduce the risk of electrical shock by shutting off power when moisture is detected, making them essential in kitchens and bathrooms.' },
    { q: 'How can I tell if my light switches are faulty?', a: 'Signs include flickering lights, unusual sounds, or no response when toggled. We can diagnose and repair the issue.' },
    { q: 'How do I know if I need outlet installation services?', a: 'Consider installation if your home lacks sufficient outlets or you experience issues like tripped breakers and over-reliance on extension cords.' },
    { q: 'Why is outlet installation important?', a: 'Proper installation ensures safe, efficient power distribution while protecting your home and devices from electrical issues.' },
  ],
  related: [
    { label: 'Switches & Outlets (overview)', href: '/services/switches-outlets' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Home Rewiring', href: '/services/home-rewiring' },
    { label: 'Surge Protection', href: '/services/surge-protector-installation' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => switchesOutletsCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Switches & Outlets in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Switch and outlet installation in ${place} — outlet replacement, GFCI and USB upgrades, and switch repair by licensed electricians. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/switches-outlets/${loc.slug}` },
    openGraph: {
      title: `Switches & Outlets in ${place} | ${site.name}`,
      description: `Licensed switch and outlet installation and repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function SwitchesOutletsLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = switchesOutletsCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
