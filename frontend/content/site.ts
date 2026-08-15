// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR BRAND DETAILS
// Swap these values for your real company name, phones, etc.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Degree of Comfort',
  shortName: 'Degree of Comfort',
  tagline: 'Heating · Cooling · Electrical · Plumbing',
  // Used for canonical URLs, sitemap, Open Graph
  url: 'https://www.cincydegreeofcomfort.com',
  description:
    'Heating, cooling, plumbing, and electrical for the Tri-State area. Same-day service, upfront pricing, and a satisfaction guarantee on every job.',
  email: 'cincydegreeofcomfort@gmail.com',
  // Zapier "Catch Hook" webhook that forms POST to. Zapier then forwards the
  // submission to GoHighLevel. Paste the Catch Hook URL here (or set
  // NEXT_PUBLIC_FORM_WEBHOOK_URL at build time). Empty = forms run in demo mode.
  formWebhookUrl:
    process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL ??
    'https://services.leadconnectorhq.com/hooks/Gf0JzWoHH620Euo1oWww/webhook-trigger/40b69dfc-a036-4f08-a8b0-43065f4cfd1b',
  founded: 2009,
  rating: 4.9,
  reviewCount: 6000,
  yearsExperience: new Date().getFullYear() - 2009,

  phones: [
    { label: '', number: '(513) 586-5107', href: 'tel:+15135865107' },
  ],

  primaryPhone: { number: '(513) 586-5107', href: 'tel:+15135865107' },

  location: 'Cincinnati, OH',

  offices: [
    {
      city: 'Cincinnati, OH',
      street: '',
      region: '',
      mapHref: 'https://maps.google.com/?q=Cincinnati,OH',
    },
  ],

  hours: 'Mon–Sun: 8am–8pm',
  serviceArea: 'Cincinnati and surrounding areas',

  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Yelp', href: 'https://yelp.com' },
  ],

  licenses: ['KY HVAC #M12345', 'OH Plumbing #PL48820', 'KY Electrical #CE99041'],
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  arrow?: boolean;
  children?: NavChild[];
};
export type NavItem = {
  label: string;
  href: string;
  caret?: boolean;
  children?: NavChild[];
  cta?: NavChild;
};

export const nav: NavItem[] = [
  {
    label: 'Plumbing',
    href: '/services/plumbing',
    caret: true,
    children: [
      {
        label: 'Drains',
        href: '/services/drains',
        arrow: true,
        children: [{ label: 'Drain Cleaning', href: '/services/drain-cleaning' }],
      },
      { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
      {
        label: 'Water Damage Restoration',
        href: '/services/water-damage-restoration',
        arrow: true,
        children: [
          { label: 'Emergency Water Extraction', href: '/services/emergency-water-extraction' },
          { label: 'Structural Drying', href: '/services/structural-drying' },
          { label: 'Mold Prevention & Remediation', href: '/services/mold-prevention-remediation' },
        ],
      },
      {
        label: 'After Flood Plumbing',
        href: '/services/after-flood-plumbing',
        arrow: true,
        children: [
          { label: 'Sewer Backup Repair', href: '/services/sewer-backup-repair' },
          // Points at the existing Sump Pumps master page rather than a duplicate.
          { label: 'Sump Pump Repair & Installation', href: '/services/sump-pumps' },
          { label: 'Basement Flood Plumbing', href: '/services/basement-flood-plumbing' },
        ],
      },
      { label: 'Faucet Repair & Replacement', href: '/services/faucet-repair-replacement' },
      { label: 'Leak Detection', href: '/services/leak-detection' },
      { label: 'Leak Repair', href: '/services/leak-repair' },
      { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
      { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
      { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
      { label: 'Whole-House Repiping', href: '/services/whole-house-repiping' },
      { label: 'Gas Line Repair & Replacement', href: '/services/gas-line-repair-replacement' },
      { label: 'Gas Service Disconnection (Duke Energy)', href: '/services/gas-service-disconnection' },
      { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
      { label: 'Garbage Disposals', href: '/services/garbage-disposals' },
      { label: 'Sump Pumps', href: '/services/sump-pumps' },
      { label: 'Tankless Water Heater', href: '/services/tankless-water-heater' },
      { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
      { label: 'Water Heater Maintenance', href: '/services/water-heater-maintenance' },
      { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
      { label: 'Water Quality', href: '/services/water-quality' },
    ],
  },
  {
    label: 'Heating',
    href: '/services/heating',
    caret: true,
    children: [
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
      { label: 'Furnace Repair', href: '/services/furnace-repair' },
      { label: 'Heat Pumps', href: '/services/heat-pumps' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Shop Furnace Filters', href: '/services/furnace-filters' },
    ],
  },
  {
    label: 'Air Conditioning',
    href: '/services/air-conditioning',
    caret: true,
    children: [
      { label: 'AC Repair', href: '/services/ac-repair' },
      { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
      { label: 'AC Maintenance', href: '/services/ac-maintenance' },
      {
        label: 'Mini-Splits',
        href: '/services/mini-splits',
        arrow: true,
        children: [
          { label: 'Mini-Split Installation', href: '/services/mini-split-installation' },
          { label: 'Mini-Split Repair', href: '/services/mini-split-repair' },
        ],
      },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Shop Air Filters', href: '/services/air-filters' },
    ],
  },
  {
    label: 'Electrical',
    href: '/services/electrical',
    caret: true,
    children: [
      {
        label: 'Lighting',
        href: '/services/lighting',
        arrow: true,
        children: [
          {
            label: 'Outdoor Lighting',
            href: '/services/outdoor-lighting',
            arrow: true,
            children: [
              { label: 'Holiday Lighting', href: '/services/holiday-lighting' },
              { label: 'Hot Tub Wiring', href: '/services/hot-tub-wiring' },
              { label: 'Landscape Lighting', href: '/services/landscape-lighting' },
              { label: 'Patio Lighting', href: '/services/patio-lighting' },
            ],
          },
          {
            label: 'Indoor Lighting',
            href: '/services/indoor-lighting',
            arrow: true,
            children: [
              { label: 'LED Lighting', href: '/services/led-lighting' },
              { label: 'Basement Lighting', href: '/services/basement-lighting' },
              { label: 'Garage Lighting', href: '/services/garage-lighting' },
            ],
          },
          { label: 'Recessed Lighting Installation', href: '/services/recessed-lighting' },
          { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
        ],
      },
      { label: 'Exhaust Fan Installation & Repair', href: '/services/exhaust-fan-installation-repair' },
      { label: 'Whole-Home Surge Protector Installation', href: '/services/surge-protector-installation' },
      { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation' },
      { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
      { label: 'Home Rewiring', href: '/services/home-rewiring' },
      { label: 'EV Chargers', href: '/services/ev-chargers' },
      { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
      { label: 'Switches & Outlets', href: '/services/switches-outlets' },
      { label: 'Electrical Mast Repair', href: '/services/electrical-mast-repair' },
      { label: 'Electricity Disconnection (Duke Energy)', href: '/services/electricity-disconnection' },
      { label: 'Storm Electricity Outage', href: '/services/storm-electricity-outage' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    caret: true,
    children: [
      { label: 'Video Testimonials', href: '/video-testimonials' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Customer Success Stories', href: '/customer-success-stories' },
      { label: 'Blog', href: '/blog' },
      { label: 'Financing', href: '/financing' },
      { label: 'Degree of Comfort University', href: '/university' },
      { label: 'Referral Program', href: '/referrals' },
      { label: "We're Hiring! Apply Today", href: '/careers' },
    ],
  },
  {
    label: 'Specials',
    href: '/specials',
    caret: true,
    children: [
      { label: 'Coupons', href: '/specials' },
      { label: 'Free Estimate', href: '/free-estimate' },
      { label: 'Join the Comfort Club', href: '/comfort-club' },
      { label: 'Heat Pump Incentives & Costs', href: '/heat-pump-incentives' },
    ],
  },
  { label: 'Areas We Serve', href: '/areas' },
];
