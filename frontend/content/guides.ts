// Curated groups of related blog posts. A post that belongs to a group shows
// the rest of that group in a link block under its FAQ, so posts on the same
// topic link to each other. Order here is the order readers see.
export type GuideGroup = { title: string; slugs: string[] };

export const guideGroups: GuideGroup[] = [
  {
    title: 'Landlord Heating Guides',
    slugs: [
      'cincinnati-landlord-heating-requirements-ohio-law',
      'tenant-has-no-heat-cincinnati-landlord-guide',
      'rental-property-hvac-maintenance-plan-cincinnati',
      'pre-winter-hvac-checklist-rental-properties-cincinnati',
      'frozen-pipes-vacant-rental-units-cincinnati',
      'space-heaters-rentals-safety-rules-cincinnati',
      'furnace-filter-rentals-tenant-or-landlord-cincinnati',
      'carbon-monoxide-detectors-rentals-ohio-landlord',
      'upgrading-heating-older-cincinnati-rental',
      'budget-furnace-replacement-multiple-rentals-cincinnati',
      'heating-options-cincinnati-duplex-small-apartment-buildings',
      'individual-furnaces-vs-central-boiler-multi-unit-cincinnati',
      'rental-turnover-checklist-hvac-plumbing-electrical-cincinnati',
    ],
  },
  {
    title: 'Boiler and Radiator Guides',
    slugs: [
      'signs-boiler-needs-repair-before-winter-cincinnati',
      'boiler-banging-kettling-noise-cincinnati',
      'how-to-bleed-radiators-cincinnati',
      'annual-boiler-maintenance',
      'boiler-replacement-cost-cincinnati',
      'boiler-vs-furnace-cincinnati',
      'what-you-should-know-about-boilers',
      'converting-old-heating-system-historic-cincinnati-home',
      'individual-furnaces-vs-central-boiler-multi-unit-cincinnati',
    ],
  },
];
