import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { boilersCopy } from '@/content/location-copy/boilers';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'boilers',
  serviceName: 'Boiler Repair, Maintenance & Replacement',
  eyebrow: 'Heating',
  hubLabel: 'Boilers',
  parentCrumb: { label: 'Heating', href: '/services/heating' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Boiler Repair, Maintenance & Replacement',
  ctaLine: 'Boiler not heating in {neighborhood}? Call for service',
  heroImage: '/services/boiler-hero.webp',
  introHeading: 'Boiler Service in {neighborhood}',
  introParagraphs: [
    'A boiler heats water to roughly 140°F and sends it through radiators, baseboards, or tubing under the floor. {brand} repairs, maintains, and replaces boilers for homes and rental buildings in {place}: hot water, steam, gas-fired, oil-fired, combi, and cast iron.',
    'If your building’s boiler is under a service contract with another company, call them first so you don’t pay twice. For everything else, our licensed technicians handle 7-day no-heat calls, annual tune-ups, and replacement quotes, with the price up front.',
  ],
  sidebarSections: [
    {
      title: 'Boiler Repair, Maintenance & Replacement',
      body: [
        'Most boiler repairs come down to a specific part: a circulator pump, a pressure relief valve, an expansion tank, a zone valve, or an igniter. We find the cause in your {neighborhood} home first, then fix it.',
        'One service a year, usually 60 to 90 minutes, keeps a boiler efficient and catches small leaks and weak parts before they turn into a no-heat call in January.',
      ],
    },
    {
      title: 'Repair or Replace Your Boiler?',
      body: [
        'Low pressure, a stuck valve, or a failed pump is a repair. Replacement is worth pricing out once a boiler is past 15 to 25 years, the vessel or heat exchanger is leaking, or repair bills keep stacking up. If a repair will get you through several more winters, we’ll say so.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'furnace-repair', title: 'Furnace Repair' },
    { slug: 'furnace-maintenance', title: 'Furnace Maintenance' },
    { slug: 'gas-line-repair-replacement', title: 'Gas Line Repair & Replacement' },
    { slug: 'mini-splits', title: 'Ductless Mini-Splits' },
  ],
  band1Image: '/services/boilers.webp',
  band1Heading: 'Signs Your {neighborhood} Boiler Needs Service',
  commonSituations: [
    'Radiators or baseboards that stay cold, or only warm at the bottom',
    'Pressure gauge reading low, or dropping again after a refill',
    'Banging, gurgling, or kettling noises from the boiler or pipes',
    'Water pooling around the boiler or a radiator valve',
    'The boiler short cycling or locking out with an error code',
    'Rising gas bills with no change in how you use the heat',
    'A yellow or flickering burner flame',
  ],
  trustedBanner: 'Your Local & Trusted Boiler Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.webp',
  band2Heading: 'What to Expect From Boiler Service in {neighborhood}',
  band2Paragraphs: [
    'For a repair, a licensed technician checks system pressure, the circulator pump, valves, and the burner to find the exact cause, then explains the flat-rate price before any work begins.',
    'For a tune-up, we check pressure and the expansion tank, look for leaks and corrosion, test the safety controls, inspect the burner and venting, and bleed trapped air from the radiators so they heat fully.',
  ],
  proseSections: [
    { title: 'Boiler vs. Furnace', body: 'A furnace heats air and blows it through ducts. A boiler heats water and moves it through radiators or floor tubing, so there is no forced air, less dust, and quieter, even heat. Most {neighborhood} homes with radiators don’t have ductwork, which is why replacing a boiler with a new boiler is usually simpler than switching to a furnace.' },
    { title: 'Hot Water and Steam Boilers', body: 'Hot water boilers circulate water in a closed loop and depend on steady pressure. Steam boilers, common in older homes, turn water to steam that rises to the radiators and returns as condensate. We service both, and the maintenance each needs is different.' },
    { title: 'High-Efficiency Replacement', body: 'A modern high-efficiency boiler runs around 90% efficient, so more of the gas you pay for turns into heat. We size the new boiler to your {neighborhood} home’s heat loss, not just the label on the old unit.' },
    { title: 'Financing Your Boiler in {neighborhood}', body: 'A boiler replacement is a large expense, so we offer financing with flexible terms and an estimate, so you know the cost before you decide.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Choose Us',
  whyUs: [
    { icon: 'clock', title: 'Seven-Day No-Heat Service', text: 'A boiler that quits gets a technician the same day, 7 days a week from 8am to 8pm.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and code-compliant gas and venting work.' },
    { icon: 'star', title: 'Financing Available', text: 'Flexible plans when a replacement makes more sense than another repair.' },
  ],
  proofQuote:
    'Our old boiler kept losing pressure every winter. They found the leak, fixed it, and explained what to watch for. The radiators have been hot since.',
  sharedFaqs: [
    { q: 'How often should a boiler be serviced?', a: 'Once a year, ideally before heating season. The visit usually takes 60 to 90 minutes and covers water pressure, leaks, safety controls, the circulator pump, and bleeding air from the radiators.' },
    { q: 'How long does a boiler last?', a: 'With regular maintenance, most boilers last 15 to 25 years, which is longer than a typical furnace.' },
    { q: 'Why is my boiler pressure low?', a: 'Low pressure usually means water is leaving the closed loop, often through a small leak, a weeping relief valve, or after radiators were bled. Topping it up is a short-term fix. If the pressure keeps dropping, the leak needs to be found.' },
    { q: 'Why are some radiators cold when the boiler is running?', a: 'Trapped air is the most common cause, especially when a radiator is cold at the top. Bleeding it with a radiator key often fixes it. If bleeding doesn’t help, the problem may be a stuck valve, a weak circulator pump, or low system pressure.' },
    { q: 'Can I replace a boiler with a furnace?', a: 'You can, but a furnace needs ductwork, and most boiler homes don’t have it. Adding ducts is a large job, so replacing a boiler with a new, high-efficiency boiler is usually simpler and keeps the radiant comfort you already have.' },
  ],
  related: [
    { label: 'Boiler Repair, Maintenance & Replacement (overview)', href: '/services/boilers' },
    { label: 'Furnace Repair', href: '/services/furnace-repair' },
    { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
    { label: 'Gas Line Repair & Replacement', href: '/services/gas-line-repair-replacement' },
    { label: 'Ductless Mini-Splits', href: '/services/mini-splits' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => boilersCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    // The root layout template appends " | Degree of Comfort".
    title: `Boiler Repair in ${loc.neighborhood}, ${loc.state}`,
    description: `Boiler repair, tune-ups, and replacement in ${place}. Hot water, steam, gas, and oil boilers, with 7-day no-heat service.`,
    alternates: { canonical: `/services/boilers/${loc.slug}` },
    openGraph: {
      title: `Boiler Service in ${place} | ${site.name}`,
      description: `Boiler repair, maintenance, and replacement serving ${place} and nearby areas.`,
    },
  };
}

export default async function BoilersLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = boilersCopy[loc.slug];
  if (!copy) notFound();
  // Some areas have no boiler page, so only link neighbors that do.
  const nearby = getNearby(loc, 20).filter((a) => boilersCopy[a.slug]).slice(0, 3);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
