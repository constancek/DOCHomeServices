import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'An electrical inspection in Hamilton often starts in a house older than anyone living in it. By Census figures, 57.7% of the city’s homes were built before 1960 and 27.4% before 1940. In the 19th-century houses of German Village, Dayton Lane and Rossville we look for knob-and-tube, cloth wiring and fuse boxes; in the 1950s houses, for panels and kitchens with too few circuits. Nearly half of Hamilton homes are rented, so landlords are a big part of our work. We report what we find and price repairs before starting.',
  emergencyParagraph:
    'Some Hamilton problems skip the inspection and need us today: hot plastic smell, a cover plate that’s warm, crackling or browned, sparks, a breaker that won’t stay reset, lights that dip hard as the furnace or AC kicks on. Turn that breaker off. Smoke or flames: everyone out, call 911. Same day on most calls, weekends included.',
  commonIntro:
    'In a city with this much old housing, a few findings appear in report after report.',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work in Hamilton?',
      a: 'The City of Hamilton issues its own electric permits, not Butler County, and only contractors registered with the city can pull them. We pull the permit before work starts and the city inspects it. Hamilton also runs its own electric utility, which owns the meter and the line to the house; we work from the meter base in.',
    },
    {
      q: 'My Hamilton house is in a historic district. Does that affect electrical work?',
      a: 'Inside the house, no. Exterior work in a City of Hamilton historic area, such as German Village, Dayton Lane or Rossville, needs a Certificate of Appropriateness from the Architectural Design Review Board. If a repair touches the outside, like a new service mast, we check with the city first.',
    },
    {
      q: 'I own rentals in Hamilton. What does Ohio law require on the wiring?',
      a: 'Hamilton landlords answer to ORC 5321.04 (A)(4): supplied electrical fixtures kept in good and safe working order, from an old two-family to a 1950s single. Tenants put problems in writing to you; you or your manager book us. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Book a Hamilton electrical inspection',
    band1Heading: 'Common Electrical Problems We Find in Hamilton Homes',
    commonSituations: [
      'Knob-and-tube still feeding upstairs rooms in a pre-1940 house',
      'Fuse boxes with oversized fuses screwed in so they stop blowing',
      'Two-family houses where circuits wander between units and meters',
      'A 1950s kitchen trying to run a modern fridge, microwave and dishwasher on one circuit',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Not every dead outlet in Hamilton is a wiring problem. In older houses that had GFCIs added later, one of them in the kitchen, a bath, the basement or outdoors may be feeding outlets two rooms away; find it and reset. A breaker that trips once and then holds was just overloaded. Call us when the house still runs on two-prong outlets, a fuse box is in the basement, cords run along walls as wiring, or flicker shows on more than one circuit. Buying or listing an old Hamilton house, or adding a charger or heat pump, is a good reason too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Hamilton?',
        body: 'In a city where a 1890s house might have a 1990s panel, the build date tells us little; the findings decide. A loose splice, a worn-out breaker or a missing GFCI is ordinary repair work. A fuse box, or a panel that is undersized, damaged or running warm, points to a panel replacement. Where knob-and-tube or cloth wiring still feeds most rooms, we price a rewire beside targeted repairs so you can weigh cost against disruption. The report is yours, and hiring us for the work is your call. Permitted work gets the city’s inspection before walls close.',
      },
    ],
    whyTitle: 'Why Hamilton Homeowners and Landlords Call Us',
    whyParagraph:
      'Old houses and a big rental market mean we work for Hamilton owners and landlords alike. Each technician holds a license and insurance and has passed a background check and drug test, and the flat price comes first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Hamilton?',
        a: 'Flat rate, quoted before we lift a cover. A small single costs less than a two-family on two meters, and a pre-sale look is a different scope from a rental check across several units. Weekend visits carry no overtime fee, and financing is available for the repairs.',
      },
      {
        q: 'What does a Hamilton electrical inspection cover?',
        a: 'At the panel, every breaker or fuse and the grounding and bonding. Through the house, outlets with their GFCI and AFCI protection, any wiring exposed in the basement or attic, and smoke alarm power. In older Hamilton houses we also trace where knob-and-tube is still live.',
      },
      {
        q: 'Do I have to hire you to fix what the report finds?',
        a: 'No. Take it to any electrician registered with the city. If a buyer, lender or insurer asks for a written report, you’ll have one. Should you want us for the repairs, the list comes priced line by line so you can do the urgent items first.',
      },
    ],
  },
};
