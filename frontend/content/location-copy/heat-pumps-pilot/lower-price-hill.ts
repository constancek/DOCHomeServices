import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lowerPriceHill: LocationServiceCopy = {
  localParagraph:
    'Lower Price Hill is mostly rentals, and electric heat is as common here as gas. Census figures show 47.5% of homes on electric heat, slightly more than the 46.0% on gas, so heat pumps and electric air handlers are a regular repair. Much of the housing is in doubles and small multi-unit buildings from before 1940, where the equipment was fitted into basements, closets and back yards. We diagnose the fault and give the owner a price before any work.',
  emergencyParagraph:
    'Freezing nights are routine here: NOAA’s CVG records log roughly 100 a year. A dead heat pump in an old Lower Price Hill double on a night like that hits infants, elderly tenants and sick residents hardest. Owners can have us out for the heat pump or the electric air handler, usually that day, Saturdays and Sundays too.',
  commonIntro:
    'Lower Price Hill heat pump calls come mostly from landlords with all-electric units in pre-war doubles and small apartment buildings. These four come up most:',
  localFaqs: [
    {
      q: 'I rent in Lower Price Hill and the heat pump quit. What can I do?',
      a: 'Try two things first: put the thermostat on heat and reset any tripped breaker. If it’s still cold, tell your landlord in writing. Where the landlord supplies heat, the city requires 70F inside once it stays under 60F outdoors for 24 hours. We fix heat pumps, not leases, so the owner books us.',
    },
    {
      q: 'Does the historic district limit heat pump work in Lower Price Hill?',
      a: 'Not for repairs. The Lower Price Hill Historic District, around West Eighth and State, is a National Register listing, which by itself brings no city design review. A repair on the current heat pump goes ahead as usual. If a new outdoor unit would sit somewhere else, we ask the city before we start and pull the permit ourselves.',
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
        body: 'Tenants can try these first. The thermostat should read heat; cool or off leaves rooms cold. A gray, matted filter blocks airflow, so put in a new one. Two breakers serve it, the outdoor unit and the indoor air handler; reset either if tripped. Knock snow and leaves off the back-yard unit. Vapor, light frost and a quiet fan for a few minutes mean the unit is clearing its coil. Heat back means no repair. Ice that stays, an aux light that never goes out or a fan that won’t turn means a fault: tenants report it, owners call us. The owner approves our price before we start.',
      },
      {
        title: 'Repair or Replace Your Lower Price Hill Heat Pump?',
        body: 'Owners: read the heat pump’s nameplate date and ignore the year the building went up. Many houses on these streets date from the 1850s but carry an outdoor unit that is barely broken in, and a burnt contactor or seized fan motor on it is worth fixing. Compressor failure, or refrigerant that won’t stay in, on an aging unit gets two quotes from us, repair and replacement. For a replacement within Cincinnati, Buildings & Inspections issues the mechanical permit, and we apply for it. Watch the tenant’s Duke Energy Ohio statement: backup strips running long show up there first.',
      },
    ],
    whyTitle: 'Why Lower Price Hill Landlords and Residents Call Us',
    whyParagraph:
      'Lower Price Hill’s old rental buildings lean on electric heat, and we keep those heat pumps running for the people who own them. Technicians are licensed, insured and drug-tested, and if we don’t make it right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Lower Price Hill?',
        a: 'We test first, then price what failed. A bad capacitor or contactor is quick; finding a leak or replacing a compressor takes much longer. In a building with several units, each one gets its own price. Nothing starts until the owner signs off on a flat rate, and a Saturday call costs no more than a Tuesday one.',
      },
      {
        q: 'Should a Lower Price Hill landlord repair or replace a heat pump?',
        a: 'One failed part on a young unit is a repair. An aging unit with a dead compressor, or a leak that keeps coming back, is worth pricing for replacement, more so when tenants are paying for hours of backup heat. You see both numbers from us, and replacements can be financed.',
      },
      {
        q: 'Why does the heat pump in my Lower Price Hill apartment blow cool air?',
        a: 'Heat pump air comes out warm, never furnace hot, so your hand at the register may call it cool. That part is fine. Air that is truly cold, while the outside unit is caked in ice or silent, points to a fault. Confirm the thermostat says heat, then let your landlord know.',
      },
    ],
  },
};
