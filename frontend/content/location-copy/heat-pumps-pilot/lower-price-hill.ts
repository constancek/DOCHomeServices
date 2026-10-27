import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lowerPriceHill: LocationServiceCopy = {
  localParagraph:
    'Lower Price Hill is mostly rentals, and electric heat is as common here as gas. Census figures show 47.5% of homes on electric heat, slightly more than the 46.0% on gas, so heat pumps and electric air handlers are a regular repair. Much of the housing is in doubles and small multi-unit buildings from before 1940, where the equipment was fitted into basements, closets and back yards. We diagnose the fault and give the owner a price before any work.',
  emergencyParagraph:
    'NOAA counts about 100 nights a year at or below freezing at the CVG station. In an old Lower Price Hill building, a heat pump failing on one of those nights puts babies, older tenants and anyone sick at risk first. We repair heat pumps and electric air handlers for landlords and owners, often the same day, weekends included.',
  commonIntro:
    'Lower Price Hill heat pump calls come mostly from landlords with all-electric units in pre-war doubles and small apartment buildings. These four come up most:',
  localFaqs: [
    {
      q: 'I rent in Lower Price Hill and the heat pump quit. What can I do?',
      a: 'Check that the thermostat is on heat and the breakers are on, then report it to your landlord in writing. If the landlord controls the heat, Cincinnati requires 70F indoors once it stays below 60F outside for 24 hours. We fix heat pumps, not leases; your landlord books the repair.',
    },
    {
      q: 'Does the historic district limit heat pump work in Lower Price Hill?',
      a: 'The Lower Price Hill Historic District is on the National Register, and that listing alone doesn’t trigger city design review. Repairs to an existing heat pump aren’t affected. If a replacement moves the outdoor unit, we check with the city first, and we handle the permit with the job.',
    },
  ],
  overrides: {
    ctaLine: 'Lower Price Hill heat pump repair for landlords and owners',
    band1Heading: 'Common Heat Pump Problems in Lower Price Hill Homes and Apartments',
    commonSituations: [
      'A heat pump in a pre-war double where one unit heats and the other blows cold',
      'An apartment running on backup heat strips while the outdoor unit sits iced',
      'An outdoor unit in a back yard, half buried in snow',
      'A tenant’s electric bill jumping because the heat pump stopped doing its share',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Start with these checks. Make sure the thermostat is set to heat and not cool or off. Swap a dirty filter. Check that both breakers are on, the outdoor unit’s and the air handler’s. Brush snow and leaves off the outdoor unit. Steam, frost and a short fan pause are just defrost. If the heat returns, no repair is needed. If ice won’t clear, the emergency heat light stays on or the outdoor fan won’t turn, report it, or call us if you own the building. We inspect, explain and price it for the owner first, and nothing starts until they approve.',
      },
      {
        title: 'Repair or Replace Your Lower Price Hill Heat Pump?',
        body: 'For owners, judge the heat pump, not the pre-war building around it. A unit installed a few years ago with a failed contactor or fan motor should be repaired. An older unit with a refrigerant leak or a dead compressor is where we put repair and replacement prices side by side. Replacing equipment inside the city takes a mechanical permit from the Department of Buildings & Inspections, which we pull. When a heat pump weakens, the backup strips run longer and the Duke Energy Ohio electric bill rises, often on the tenant’s account first.',
      },
    ],
    whyTitle: 'Why Lower Price Hill Landlords and Residents Call Us',
    whyParagraph:
      'Lower Price Hill’s old rental buildings lean on electric heat, and we keep those heat pumps running for the people who own them. Technicians are licensed, insured and drug-tested, and if we don’t make it right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Lower Price Hill?',
        a: 'It depends on the failure. A contactor or capacitor is a small job, and a leak or compressor is a large one. In a multi-unit building we price each unit separately after testing. The owner approves a flat-rate price before we start, and weekends carry no overtime fees.',
      },
      {
        q: 'Should a Lower Price Hill landlord repair or replace a heat pump?',
        a: 'Repair a newer unit with one bad part. Replace when an older unit has a failed compressor or a leak that won’t stay sealed, especially if tenants are paying for long backup heat runs. We give both prices, and financing is available for replacements.',
      },
      {
        q: 'Why does the heat pump in my Lower Price Hill apartment blow cool air?',
        a: 'A working heat pump sends out air that’s warm but not hot, so it can feel cool at the vent. That’s normal. Cold air with an iced or silent outdoor unit is a fault. Check the thermostat, then tell your landlord so they can get it repaired.',
      },
    ],
  },
};
