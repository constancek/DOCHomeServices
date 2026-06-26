import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { waterQualityCopy } from '@/content/location-copy/water-quality';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'water-quality',
  serviceName: 'Water Quality',
  eyebrow: 'Plumbing',
  hubLabel: 'Water Quality',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Water Quality & Filtration',
  ctaLine: 'Water quality concerns in {neighborhood}? Call to schedule a test',
  heroImage: '/services/wq-hero.jpg',
  introHeading: 'Water Quality Services in {neighborhood}',
  introParagraphs: [
    'Bad taste, hard-water buildup, or staining? {brand} tests your water and installs whole-house filtration and softeners for homeowners in {place} — cleaner, better-tasting water at every tap, not just the kitchen sink.',
    'The hard water common across the area leaves scale on fixtures and inside pipes and appliances, so treatment here does real work. We test first so you only treat what you actually have, with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What We Install',
      body: [
        'We treat water at the main line so every tap, shower, and appliance in your {neighborhood} home benefits: whole-house carbon and sediment filtration for taste and chlorine, water softeners for hardness, and reverse-osmosis systems for drinking water.',
        'We test your water first and tailor the system to your results — many homes use a combination, and we size it to what you actually have.',
      ],
    },
    {
      title: 'Hard Water Is the Local Reality',
      body: [
        'The water across {neighborhood} runs hard, leaving calcium and magnesium scale that builds up inside pipes, water heaters, and fixtures — reducing flow and shortening appliance life. A softener prevents that buildup and protects everything downstream.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'water-heater-installation', title: 'Water Heater Installation' },
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
    { slug: 'faucet-repair-replacement', title: 'Faucet Repair & Replacement' },
    { slug: 'leak-repair', title: 'Leak Repair' },
  ],
  band1Image: '/services/wq-signs.jpg',
  band1Heading: 'Signs of Poor Water Quality in Your {neighborhood} Home',
  commonSituations: [
    'Unpleasant taste or odor in your tap water',
    'Cloudy, discolored, or rusty-looking water',
    'White mineral buildup on faucets, fixtures, or dishes',
    'Dry skin, irritation, or dull hair after bathing',
    'Soap that does not lather well or leaves residue',
    'Staining on sinks, tubs, or laundry',
    'Scale shortening the life of your water heater',
  ],
  trustedBanner: 'Your Local & Trusted Water Quality Pros in {neighborhood}',
  band2Image: '/services/water-quality.jpg',
  band2Heading: 'What to Expect From Your Water Service in {neighborhood}',
  band2Paragraphs: [
    'We start by testing your water to see exactly what is in it — hardness, chlorine, sediment, metals — then explain the results and quote a flat rate before any work begins.',
    'We install the right system at the cold-water main, whether that is filtration, a softener, a drinking-water unit, or a combination, and test the output so every tap in your {neighborhood} home runs cleaner from day one.',
  ],
  proseSections: [
    { title: 'Why Test First in {neighborhood}?', body: 'Water varies street to street, especially where {neighborhood} mixes city supply with the occasional well. We test before we recommend anything so you treat what you actually have — not a guess. A pitcher filter cannot match a properly sized system that intercepts contaminants at the main before they reach a single tap.' },
    { title: 'Softening Hard Water', body: 'The hard water common across {neighborhood} is not a health hazard, but it is rough on your home — scale builds inside pipes, the water heater, and fixtures, cutting flow and shortening appliance life. A water softener breaks down the calcium and magnesium so soap lathers, skin feels better, and your plumbing lasts longer.' },
    { title: 'Whole-House Filtration', body: 'A whole-house system treats every drop flowing into your {neighborhood} home — showers, sinks, the washing machine — not just the kitchen faucet. Carbon filtration clears chlorine taste and odor, sediment filters catch grit, and a reverse-osmosis unit gives you clean drinking water at the sink. We tailor the mix to your test results.' },
    { title: 'Protecting Your Plumbing and Appliances', body: 'Treating the water is one of the cheapest ways to protect everything downstream of it. Less scale means fewer clogs and leaks, a water heater that lasts its full life, and a dishwasher and coffee maker that run the way they should — a real payoff for a {neighborhood} home on hard water.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'Whole-House Solutions', text: 'We treat water at the main line so every tap, shower, and appliance benefits.' },
    { icon: 'badge', title: 'Trusted Brands', text: 'Customized system recommendations using proven, reliable equipment.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and careful, code-compliant installation.' },
    { icon: 'star', title: 'We Test First', text: 'We test your water so you only treat what you actually have — no guesswork.' },
  ],
  proofQuote:
    'Hard water was wrecking our fixtures and the coffee always tasted off. They tested the water, installed a softener and a carbon filter, and the difference at every tap was obvious within a day. No pressure, just straight answers.',
  sharedFaqs: [
    { q: 'What is a whole-house water filtration system?', a: 'It is a system installed at your main water line so every tap, shower, and appliance in the home gets filtered water — not just the kitchen sink. It treats the water before it reaches anything in the house.' },
    { q: 'Are water purification services really necessary?', a: 'It depends on your water. If you notice taste or odor problems, staining, or hard-water buildup, a properly sized, professionally installed system makes a real difference that a pitcher filter cannot match. We test first so you only treat what you actually have.' },
    { q: 'Is hard water harmful to my plumbing system?', a: 'Hard water is not a health hazard, but it is hard on your plumbing — mineral scale builds up inside pipes, water heaters, and fixtures, reducing flow and shortening appliance life. A water softener prevents that buildup.' },
    { q: 'What is the cost of a whole-home water filtration system?', a: 'It varies with the system type and your home’s water, so we test your water and quote a flat rate before installation. Financing is available for larger systems.' },
    { q: 'What are the different types of water filtration systems?', a: 'Common options include sediment filters, carbon filters (for taste and chlorine), reverse-osmosis systems for drinking water, and water softeners or conditioners for hardness. Many homes use a combination, which we tailor to your test results.' },
  ],
  related: [
    { label: 'Water Quality (overview)', href: '/services/water-quality' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
    { label: 'Faucet Repair & Replacement', href: '/services/faucet-repair-replacement' },
    { label: 'Leak Repair', href: '/services/leak-repair' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => waterQualityCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Water Quality Services in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Water testing, whole-house filtration, and softeners in ${place} — cleaner, better-tasting water at every tap. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/water-quality/${loc.slug}` },
    openGraph: {
      title: `Water Quality Services in ${place} | ${site.name}`,
      description: `Water testing, filtration, and softeners serving ${place} and nearby areas.`,
    },
  };
}

export default async function WaterQualityLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = waterQualityCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
