import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walnutHills: LocationServiceCopy = {
  localParagraph:
    'Landlords book most of our tune-ups in Walnut Hills, and Census figures explain why, since 78.6% of homes here are rented. Close to half the housing predates 1940, when nobody was drawing ducts for cooling. So where central air was retrofitted, the air handler is tucked into a closet or attic at the end of a long duct run, and the condenser sits on a roof, behind the building or in a strip of side yard. Owners see a flat price first, and units that are fine stay untouched.',
  commonIntro:
    'In Walnut Hills, landlords and managers usually book a spring round after seeing one of these.',
  localFaqs: [
    {
      q: 'I rent in Walnut Hills and the AC drips. Who do I call?',
      a: 'Write to your landlord or building manager about the drip, and keep a copy. If the landlord supplies the air conditioning, ORC 5321.04 (A)(4) puts the upkeep on them under Ohio law, keeping it in good and safe working order, and that includes calling for the repair. We work on equipment, not leases, and we’ll gladly take the landlord’s booking.',
    },
    {
      q: 'Why is central air a struggle in older buildings in Walnut Hills?',
      a: 'Plenty of them were never laid out for it. In buildings from before 1940, ducts went in later and often snake a long way, so the rooms at the end cool last. A tune-up measures airflow at those rooms and clears the drain line, which in an upper apartment protects the ceiling below.',
    },
  ],
  overrides: {
    ctaLine: 'Spring AC rounds for rental buildings in Walnut Hills',
    band1Heading: 'Signs an AC in Walnut Hills Is Due for Maintenance',
    commonSituations: [
      'A pre-1940 building where central air was threaded through closets and attics',
      'A tenant’s note about a brown ring on the ceiling under an air handler',
      'Condensers on a roof or back lot with no service dates on any of them',
      'Top-floor apartments near Peebles’ Corner that stay warm while lower floors are fine',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in Walnut Hills',
        body: 'In older buildings in Walnut Hills, the air handler is usually wedged into a closet or attic, so that’s our first stop. We change a clogged filter, check the cooling coil with a flashlight, run water through its drain until it clears and look for rust or a puddle in the pan. On the roof or out back, the condenser gets cleared of leaves and its coil hosed clean. Gauges show the refrigerant charge, and a short charge means a leak we quote as its own repair. The capacitor gets metered, the contactor and wiring checked, and airflow felt in the rooms farthest from the unit. Owners approve parts first.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'In Walnut Hills, the spring round is worth the owner’s money for apartments with no paper trail, a building with a new owner, a tenant who has reported a drip by the closet unit or a fresh rattle, and top floors near Peebles’ Corner that never catch up. A unit we went through last spring that runs quietly can wait a year. No cooling or frost on the copper means AC Repair, and if we’ve already written a unit off, hold the money for AC Installation & Replacement. We don’t service window units. Between visits, building staff keep filters fresh and condensers clear, and one visit a year covers it.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in Walnut Hills',
        body: 'Census figures put electric heat in 63.2% of homes in Walnut Hills. That share mixes heat pumps with electric furnaces and baseboard, so it isn’t a heat pump count, but heat pumps fill plenty of our spring and fall days here. Cooling-only central air needs us each spring. A heat pump works both seasons, so it gets a fall visit as well, when the reversing valve and defrost controls are put through a test.',
      },
    ],
    whyTitle: 'Why Landlords in Walnut Hills Book AC Maintenance With Us',
    whyParagraph:
      'In Walnut Hills, much of our AC work is closet and attic air handlers in old rentals. Our technicians are licensed and insured, every one background-checked and drug-tested, and owners approve flat prices first.',
    sharedFaqs: [
      {
        q: 'What does AC maintenance cost for a building in Walnut Hills?',
        a: 'Before we start, the owner has a per-apartment flat rate, and the whole building is quoted together. Central air or heat pump, and how awkward the attic, closet or roof is, move it. Each repair we turn up has its own price.',
      },
      {
        q: 'How often should a rental AC get a tune-up?',
        a: 'Once every spring, before the hot stretch and the rush of calls that comes with it. Putting every unit on the same month keeps the paperwork easy. Heat pumps get a fall visit as well, because they heat the apartment through winter.',
      },
      {
        q: 'What can building staff do between AC visits?',
        a: 'Staff can swap dirty filters, keep debris off the condensers, keep vents and returns unblocked and change thermostat batteries. Opening a condenser’s panels, touching refrigerant lines or straightening coil fins is for our technicians, not maintenance staff.',
      },
    ],
  },
};
