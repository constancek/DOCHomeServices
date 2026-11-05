import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Downtown inspections are mostly about single units, not whole buildings. Census figures show 71.6% of homes here sit in buildings of 50 or more units, where the main switchgear belongs to the building. What we check is your unit: its panel, circuits, outlets and fixtures. Age varies a lot, with 43.3% of units built in 1939 or earlier and many others since 2010, so a converted older building and a new tower get very different reports. We test, write it up and quote any fix before work starts.',
  emergencyParagraph:
    'A burning smell, an outlet or switch plate that’s hot, buzzing or blackened, sparks, or a breaker in your unit panel that trips again straight after a reset all need attention today. Turn that breaker off. Smoke or fire: leave by the stairs and call 911. We come out the same day on most calls, weekends included.',
  commonIntro:
    'Downtown units range from conversions of older buildings to towers built since 2010, and these are the issues we see most:',
  localFaqs: [
    {
      q: 'I rent a Downtown apartment and something is wrong with the wiring. Can I book you?',
      a: 'Report it to building management in writing; they arrange repairs. Ohio’s ORC 5321.04 (A)(4) requires landlords to keep the electrical fixtures they supply in good and safe working order. We inspect wiring, not leases, so the owner of the unit or the building books us.',
    },
    {
      q: 'I own a condo Downtown. What part of the electrical system is mine?',
      a: 'Usually everything from your unit’s panel outward: the breakers, circuits, outlets and fixtures inside your walls. Risers, meter rooms and switchgear belong to the building, and your association’s rules say who handles them. We inspect your unit and flag anything that looks like a building issue.',
    },
  ],
  overrides: {
    ctaLine: 'Unit electrical inspections for Downtown condo owners and landlords',
    band1Heading: 'Common Electrical Problems We Find in Downtown Homes and Apartments',
    commonSituations: [
      'A unit panel in a converted older building with every breaker space taken',
      'Kitchen outlets in a renovated condo that trip when two appliances run',
      'Bathroom or balcony outlets missing GFCI protection after a remodel',
      'Fixtures and outlets added by a past owner without a permit',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Units in towers built since 2010 rarely need a full inspection unless you’re remodeling or a buyer asks for one. A dead outlet in a kitchen or bathroom is usually a GFCI that tripped; find it and press reset. One breaker that trips and stays on after a reset is fine, and a dead light may only need a bulb. Book us when a unit in an older building has two-prong outlets, cords used as permanent wiring, flicker on several circuits, or breakers that trip whenever the heat and kitchen run together.',
      },
      {
        title: 'Inspection, Repair or Rewire in Downtown Cincinnati?',
        body: 'What testing finds settles it. A loose connection, a breaker that won’t hold or a missing GFCI is a quick repair. A unit panel that’s too small or failing gets replaced, under a permit from the City of Cincinnati Department of Buildings & Inspections, and in a large building we coordinate access with management. Rewiring a whole unit is rare, mostly in older conversions where cloth wire turns up behind a wall, and we price it beside spot repairs. You get the report and decide; you don’t have to use us.',
      },
    ],
    whyTitle: 'Why Downtown Condo Owners and Landlords Call Us',
    whyParagraph:
      'Downtown jobs happen inside occupied buildings, so we sort out access with management before the visit, not at the door. Licensed, insured, background-checked electricians and a flat price agreed before we start.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection for a Downtown unit?',
        a: 'A flat rate you hear before we begin. A studio costs less than a large corner unit, and the reason for the visit matters, whether you’re selling, buying or adding something like an induction range. Financing is available for any larger work.',
      },
      {
        q: 'What does an inspection of a Downtown condo or apartment cover?',
        a: 'The unit panel and its breakers, grounding and bonding at the panel, outlets with their GFCI and AFCI protection, visible wiring and fixtures, and power to the smoke alarms. Building systems outside your unit aren’t part of it unless management asks.',
      },
      {
        q: 'Do I have to use you for the repairs?',
        a: 'No. Your Downtown unit’s report is yours, and you can give it to any licensed electrician your building allows. We list each fix with its own flat price, so you can choose what to do and when.',
      },
    ],
  },
};
