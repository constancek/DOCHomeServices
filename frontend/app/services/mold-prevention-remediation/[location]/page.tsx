import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { moldPreventionRemediationCopy } from '@/content/location-copy/mold-prevention-remediation';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'mold-prevention-remediation',
  serviceName: 'Mold Prevention & Remediation',
  eyebrow: 'Plumbing',
  hubLabel: 'Mold Prevention & Remediation',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Mold Prevention & Remediation',
  ctaLine: 'Musty smell or visible growth in {neighborhood}? Get it looked at',
  heroImage: '/services/mold-hero.webp',
  introHeading: 'Mold Prevention & Remediation in {neighborhood}',
  introParagraphs: [
    'Mold is a water problem. It needs moisture, something organic to sit on, and time — your {place} home supplies two of those permanently, so the only variable you control is the water. Every remediation job that fails, fails because someone removed the growth and left the leak.',
    '{brand} works both ends. We are plumbers first, so the line, fitting, or drain feeding the growth gets repaired as part of the same job, and the space is dried to measured readings rather than to touch. Prevention is the cheaper half of this: call us during a water event rather than months after one and there is often nothing to remediate at all.',
  ],
  sidebarSections: [
    {
      title: 'What the Job Covers',
      body: [
        'Locating and repairing the moisture source, containment with sheeting and negative air pressure, removal of porous material with growth through it, HEPA filtration and antimicrobial treatment on the surfaces that stay, and drying the area to measured readings.',
        'Containment is what separates remediation from cleaning. Disturbing growth without it moves the problem into rooms in your {neighborhood} home that did not have it.',
      ],
    },
    {
      title: 'Testing, and When It Is Worth It',
      body: [
        'Often it is not. If you can see growth and know where the water came from, testing tells you what you already know and delays the work. It earns its cost when you smell mold but cannot find it, when the extent behind walls has to be established, or when there is a dispute — a claim, a sale, a tenancy. In those cases we recommend an independent testing company rather than testing our own work.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'structural-drying', title: 'Structural Drying' },
    { slug: 'emergency-water-extraction', title: 'Emergency Water Extraction' },
    { slug: 'water-damage-restoration', title: 'Water Damage Restoration' },
    { slug: 'leak-detection', title: 'Leak Detection' },
  ],
  band1Image: '/services/mold-signs.webp',
  band1Heading: 'Signs You Have a Mold Problem in {neighborhood}',
  commonSituations: [
    'A musty smell that comes back after you air the room out',
    'Visible growth on drywall, framing, tile grout, or stored items',
    'Dark staining that spreads along a wall base or ceiling edge',
    'Water damage that was never properly dried out',
    'Condensation on windows or pipes that never clears',
    'Symptoms that ease when you leave the house and return when you come back',
  ],
  trustedBanner: 'Your Local & Trusted Mold Remediation Team in {neighborhood}',
  band2Image: '/services/mold-hero.webp',
  band2Heading: 'What to Expect From Mold Remediation in {neighborhood}',
  band2Paragraphs: [
    'We fix the moisture first, because mold is a symptom — remove it without stopping the water feeding it and it returns to the same spot, usually within months. Then the area is contained with sheeting and negative air so spores are not pushed through the rest of the house while material is disturbed.',
    'Porous material with growth through it comes out. Hard, non-porous surfaces are cleaned and kept. What remains gets HEPA filtration and antimicrobial treatment inside the containment, and the area is dried to measured readings, because leaving it damp restarts the whole process.',
  ],
  proseSections: [
    { title: 'When You Do Not Need Us', body: 'A patch of black spotting in the corner of a shower or along tile grout is almost always surface growth on non-porous material, fed by steam rather than a leak. Clean it, run the exhaust fan, and it stays gone. That is a maintenance job, not a remediation job, and paying anyone to contain a bathroom for it is money wasted. We would rather tell you that on the phone than send a truck to {neighborhood}.' },
    { title: 'Porous Versus Non-Porous', body: 'This is the line worth knowing. Surface growth on tile, glass, or sealed metal cleans off and stays off, provided whatever kept it wet is fixed. Growth on drywall, framing, carpet, or insulation has gone into the material, and cleaning the face of it accomplishes nothing — bleach kills what is on the surface while the growth inside continues. That is why remediation removes material rather than scrubbing it.' },
    { title: 'We Fix the Source, Not Just the Growth', body: 'A remediation crew that cannot touch plumbing hands you back a clean wall and the same drip. Because we are plumbers, the leaking supply line, failed fitting, or weeping drain joint behind the growth in your {neighborhood} home gets repaired as part of the same job. Mold that returns to the same spot means the moisture source was never actually fixed.' },
    { title: 'Prevention Is the Cheaper Half', body: 'Mold can begin establishing in damp material within roughly 24 to 48 hours, given the right temperature and something organic to grow on — which describes drywall paper and framing exactly. Most of the remediation we do could have been prevented by drying that started a day or two earlier. If you have had water damage in {neighborhood} in the last few days, the cheapest version of this conversation is happening now.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'We Fix the Source', text: 'We are plumbers first. The leak feeding the mold gets repaired as part of the same job.' },
    { icon: 'check', title: 'Proper Containment', text: 'Sheeting, negative air, and HEPA filtration — so remediation does not spread the problem.' },
    { icon: 'doc', title: 'Documented Throughout', text: 'Photos and moisture readings written up for your insurer or a future buyer.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
  ],
  proofQuote:
    'We had been cleaning the same wall for two years. They found the drain joint behind it in an afternoon, repaired it, took out the drywall that was actually gone, and it has stayed clean since.',
  sharedFaqs: [
    { q: 'How quickly can mold start after water damage?', a: 'Mold can begin establishing in damp material within roughly 24 to 48 hours, given the right temperature and something organic to grow on — which describes drywall paper and framing exactly. This is the entire reason we push so hard on drying speed. Most mold remediation we do could have been prevented by drying that started a day or two earlier.' },
    { q: 'Can I just clean mold off with bleach?', a: 'On a hard, non-porous surface like tile or sealed metal, a small patch of surface growth cleans off and stays off, provided you also fix whatever kept it wet. On porous material — drywall, framing, carpet — bleach kills what is on the surface while the growth inside the material continues. That is why remediation removes material rather than scrubbing it.' },
    { q: 'Do I need testing before remediation?', a: 'Often not. If you can see growth and you know where the water came from, testing tells you what you already know and delays the work. Testing is genuinely useful when you smell mold but cannot find it, when you need to establish the extent behind walls, or when there is a dispute — an insurance claim, a sale, a tenancy. In those cases we recommend an independent testing company rather than testing our own work.' },
    { q: 'Is the mold in my house the dangerous kind?', a: 'The practical answer is that the species matters less than most people expect. Any significant indoor mold growth is a problem worth removing, and remediation is handled essentially the same way regardless of type. If someone in the house has asthma, an allergy, or a compromised immune system, treat any growth as worth acting on quickly and talk to a doctor about symptoms.' },
    { q: 'Will insurance cover mold remediation?', a: 'It depends heavily on the cause and the policy. Mold arising from a sudden covered event, like a burst pipe, is more often covered — frequently up to a capped limit specific to mold. Mold from a long-running leak or ongoing humidity is usually excluded as a maintenance issue. Our documentation of the source and timeline is what supports the claim either way.' },
    { q: 'How do I stop it coming back?', a: 'Remove the water, not just the mold. That means repairing the leak, drying to measured readings rather than to touch, and controlling humidity in the space afterward — often a dehumidifier in a basement, sometimes better ventilation in a bathroom. Mold that returns to the same spot means the moisture source was never actually fixed.' },
  ],
  related: [
    { label: 'Mold Prevention & Remediation (overview)', href: '/services/mold-prevention-remediation' },
    { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
    { label: 'Structural Drying', href: '/services/structural-drying' },
    { label: 'Emergency Water Extraction', href: '/services/emergency-water-extraction' },
    { label: 'Leak Detection', href: '/services/leak-detection' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => moldPreventionRemediationCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Mold Prevention & Remediation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Mold containment, removal, and repair of the moisture source causing it in ${place}. Upfront pricing, no overtime fees. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/mold-prevention-remediation/${loc.slug}` },
    openGraph: {
      title: `Mold Prevention & Remediation in ${place} | ${site.name}`,
      description: `Mold remediation and prevention serving ${place} and nearby areas.`,
    },
  };
}

export default async function MoldPreventionRemediationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = moldPreventionRemediationCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
