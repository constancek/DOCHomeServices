import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { holidayLightingCopy } from '@/content/location-copy/holiday-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'holiday-lighting',
  serviceName: 'Holiday Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Holiday Lighting',
  parentCrumb: { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Holiday Lighting Installation',
  ctaLine: 'Want to skip the ladder this holiday season in {neighborhood}? Call today',
  heroImage: '/services/holiday-lighting-hero.jpg',
  introHeading: 'Holiday Lighting Installation in {neighborhood}',
  introParagraphs: [
    'A professional holiday lighting install lets a {neighborhood} home stand out for the season without anyone climbing a ladder in the cold or untangling cords. {brand} designs, installs, and removes custom Christmas and holiday displays for homeowners across {place} — with commercial-grade materials and safe electrical connections.',
    'Our team plans a layout that fits your roofline and landscaping, installs it neatly, and takes it down after the season — with a free estimate and clear pricing up front.',
  ],
  sidebarSections: [
    {
      title: 'What the Service Includes',
      body: [
        'For {neighborhood} homes we start with an on-site consultation and free estimate, plan a custom design, install commercial-grade lighting with secure attachment and safe connections, handle in-season maintenance if needed, and return for scheduled removal after the holidays.',
        'We balance the electrical load so the display runs without tripping breakers or overloading outdoor circuits.',
      ],
    },
    {
      title: 'Built for Midwest Winters',
      body: [
        'Holiday lighting in {neighborhood} has to survive snow, ice, and the freeze-thaw swing. We use commercial-grade lights and weather-rated connections so the display stays bright and safe from the first cold snap through New Year.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'outdoor-lighting', title: 'Outdoor Lighting' },
    { slug: 'landscape-lighting', title: 'Landscape Lighting' },
    { slug: 'patio-lighting', title: 'Patio Lighting' },
    { slug: 'lighting-fixture-installation', title: 'Lighting Fixtures' },
  ],
  band1Image: '/services/holiday-lighting-benefits.jpg',
  band1Heading: 'Reasons {neighborhood} Homeowners Hire a Pro for Holiday Lights',
  commonSituations: [
    'Steep rooflines or tall homes that are unsafe to climb',
    'Cold-weather ladder work you would rather not do',
    'Tangled, mismatched, or worn-out light strings',
    'A display that trips breakers or overloads outdoor outlets',
    'Wanting a clean, balanced look with straight lines',
    'No time to install and take down the lights yourself',
    'A custom roofline, tree, and walkway design for the season',
  ],
  trustedBanner: 'Your Local & Trusted Holiday Lighting Pros in {neighborhood}',
  band2Image: '/services/holiday-lighting.jpg',
  band2Heading: 'Our Holiday Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We start with an on-site consultation, plan a design that fits your home and landscaping, and give you a free estimate before any work begins.',
    'We install commercial-grade lighting with secure attachment and safe connections, maintain it through the season if needed, and return for scheduled removal so your {neighborhood} home looks great without the hassle.',
  ],
  proseSections: [
    { title: 'Custom Design for Your Home', body: 'Every roofline and yard is different, so we plan the layout around your {neighborhood} home — rooflines, windows, columns, trees, and walkways. Whether you want clean white lights or a multi-color display, we tailor the design so the lines are straight and the spacing is balanced.' },
    { title: 'Safe Install, No Ladder for You', body: 'Most holiday-lighting injuries come from ladders and roofs in cold weather. Our trained installers handle the heights and the electrical connections so a {neighborhood} homeowner never has to, and every attachment is secure enough to hold through winter storms.' },
    { title: 'Commercial-Grade, Weather-Rated Lighting', body: 'Store-bought strings fade and fail in a Midwest winter. We use commercial-grade lights and weather-rated connections so a {neighborhood} display stays bright and reliable from the first install through the end of the season.' },
    { title: 'Install, Maintenance, and Removal', body: 'We handle the full season — install, any in-season fixes, and scheduled takedown after the holidays. That means a {neighborhood} homeowner gets the look without storing tangled lights or climbing back up to pull them down in January.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Experienced Installers', text: 'Trained installers who handle every detail safely.' },
    { icon: 'badge', title: 'Commercial-Grade Lighting', text: 'High-quality materials built to withstand winter weather.' },
    { icon: 'check', title: 'Custom Design Options', text: 'Layouts tailored to your home, landscaping, and style.' },
    { icon: 'clock', title: 'Install & Removal', text: 'We handle setup and scheduled takedown after the season.' },
  ],
  proofQuote:
    'They designed the roofline and wrapped the front trees, ran it all off a balanced circuit so nothing tripped, and came back in January to take it down. Straight lines, no tangles, and we never touched a ladder.',
  sharedFaqs: [
    { q: 'What is the benefit of professional holiday lighting installation?', a: 'Professional installation ensures safety, high-quality results, and a polished holiday light display without the risks of DIY decorating.' },
    { q: 'How do custom holiday lights work?', a: 'We create a lighting design tailored to your home or business, install commercial-grade lights, and remove them after the holiday season.' },
    { q: 'Can I choose the design for my lights?', a: 'Yes. You can select color schemes, layout preferences, and specific areas you want highlighted.' },
    { q: 'How long does the installation process take?', a: 'Most holiday light installation projects are completed in one day, depending on property size and design complexity.' },
    { q: 'How much will holiday lighting cost me?', a: 'The cost depends on home size, design complexity, and materials. We provide a free estimate to give you clear pricing upfront.' },
  ],
  related: [
    { label: 'Holiday Lighting (overview)', href: '/services/holiday-lighting' },
    { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
    { label: 'Landscape Lighting', href: '/services/landscape-lighting' },
    { label: 'Patio Lighting', href: '/services/patio-lighting' },
    { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => holidayLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Holiday Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Holiday and Christmas light installation in ${place} — custom displays, commercial-grade materials, safe install and scheduled removal. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/holiday-lighting/${loc.slug}` },
    openGraph: {
      title: `Holiday Lighting Installation in ${place} | ${site.name}`,
      description: `Professional holiday lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function HolidayLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = holidayLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
