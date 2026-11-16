import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const golfManor: LocationServiceCopy = {
  localParagraph:
    'Golf Manor was laid out in the 1920s and filled in after the war. Census figures put the median home at 1954, and 57.0% were built from 1940 through 1959. That era gave most houses a handful of circuits and a modest panel, fine for a radio and a fridge, tight for window units, a microwave and a home office. A third of the units sit in three- and four-family buildings, and about half are rented. We go through each unit and quote any fixes in advance.',
  emergencyParagraph:
    'Not everything waits for a scheduled date. Warm or buzzing receptacles, a scorched cover plate, a burnt-wire smell, or a breaker that pops again right after reset all mean shut that breaker off and get us out. If there’s smoke or fire, clear the building and dial 911. Golf Manor gets same-day service on most of these, weekends too.',
  commonIntro:
    'Golf Manor mixes postwar single homes with two-families and fourplexes, and the same faults turn up in both:',
  localFaqs: [
    {
      q: 'I rent in Golf Manor and an outlet keeps sparking. What should I do?',
      a: 'Quit using that receptacle and flip its breaker off. Then let the landlord know, in writing. ORC 5321.04 makes Ohio landlords responsible for keeping electrical fixtures they provide in good and safe working order. We inspect wiring, not leases; your landlord or the property manager is the one who books us.',
    },
    {
      q: 'Who signs off on electrical work in Golf Manor?',
      a: 'Golf Manor contracts out electrical permits and inspections to Hamilton County. That county visit only covers permitted work. Ours looks at the whole system and leaves you a report. Building projects in the village need a village zoning certificate before the county permit, and we take care of that paperwork.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Golf Manor homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Golf Manor Homes and Apartments',
    commonSituations: [
      'A fourplex with one small panel per unit and window air conditioners on shared circuits',
      'Two-slot receptacles in a 1950s house with nothing grounding them',
      'Extension cords snaking room to room in a rental that has too few outlets',
      'A landlord checking a unit between tenants before it goes back on the market',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before calling, look for a tripped GFCI; in a Golf Manor kitchen or bath, one tripped device can kill outlets two rooms away. A breaker that flipped once and has held since was probably just overloaded for a moment. A dark lamp outlet is usually wired to the wall switch. Get an inspection when the house is mostly two-slot outlets, cords run under rugs as wiring, lights dim on more than one circuit, or a sale or purchase is coming. Landlords: the gap between tenants is the easiest time for us to get in.',
      },
      {
        title: 'Inspection, Repair or Rewire in Golf Manor?',
        body: 'Go by the results. Plenty of 1950s Golf Manor houses only need ground run to a few receptacles and GFCI added at the sinks. A failing breaker or a loose neutral is a quick repair. A box that can’t run window units, a dryer and today’s kitchen at once means a new panel. Rewiring goes on the table only if old cloth cable fills most of the walls, and then you see both prices side by side. You own the report and can hire anyone you like.',
      },
    ],
    whyTitle: 'Why Golf Manor Owners and Landlords Call Us',
    whyParagraph:
      'Our Golf Manor customers split between people who live in their houses and owners of two- to four-unit buildings. Each tech holds a license and insurance, has passed a background check and drug screen, and quotes first.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced in Golf Manor?',
        a: 'At a flat rate, quoted before we start. The size of the building and why you need the inspection set the number, so a fourplex costs more to check than a single house. Repairs are a separate quote, and nothing gets fixed until you say so.',
      },
      {
        q: 'What do you check during an electrical inspection?',
        a: 'Each unit’s panel and every breaker or fuse, grounding and bonding, receptacles and switches room by room, GFCI and AFCI protection, exposed wiring in basement and attic, and power to smoke alarms. Shared hallways and laundry areas in Golf Manor multi-family buildings get checked too.',
      },
      {
        q: 'If you find problems, do I have to use you to fix them?',
        a: 'No. The report goes to you, and you can hand it to any licensed electrician. Plenty of Golf Manor landlords let us do the work since we’ve already seen the building, but nothing obliges you to.',
      },
    ],
  },
};
