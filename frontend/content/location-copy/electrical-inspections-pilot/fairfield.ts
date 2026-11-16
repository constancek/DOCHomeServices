import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfield: LocationServiceCopy = {
  localParagraph:
    'Fairfield’s housing is mostly from the 1960s through the 1990s, with a median year of 1978 by Census figures, so old cloth wiring is rare and the questions are about capacity. More homes here heat with electricity than gas, 53.4%, and those panels carry a lot before anyone adds a charger or a hot tub. About a quarter of homes are in apartment buildings, where owners book us between tenants. We test the system, put it in writing and price any fixes first.',
  emergencyParagraph:
    'Some Fairfield calls aren’t inspections at all. A burnt smell at an outlet or the panel, a scorched or hot cover, crackling, sparks, a breaker that won’t hold, or lights that sag every time the electric heat cycles on: switch that breaker off and call. Smoke or fire, get outside and dial 911. Most calls are same day, weekends too.',
  commonIntro:
    'Across Fairfield’s subdivisions and apartment complexes, these findings come up more than any others.',
  localFaqs: [
    {
      q: 'Does Fairfield require a permit for electrical work?',
      a: 'Yes for a lot of it. The City of Fairfield Building & Zoning Division, not Butler County, requires electrical permits for new or replacement service and for reconnecting a replaced furnace or AC, and electrical contractors must be registered with the city. We pull the permit and the city inspects the work.',
    },
    {
      q: 'My Fairfield home is near Pleasant Run and took on water. What now?',
      a: 'Leave any circuit that was under water switched off until it’s checked. Outlets, breakers and panels that got wet can corrode and fail weeks later. We inspect what was flooded, tell you what must be replaced, and test the rest before you turn it back on.',
    },
    {
      q: 'I manage apartments in Fairfield. What does Ohio law ask of me?',
      a: 'For a Fairfield complex, ORC 5321.04 (A)(4) means every unit’s supplied electrical fixtures stay in good and safe working order. Residents report problems to the office in writing; the owner or manager schedules us, often at turnover. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Fairfield electrical inspections, quoted before we start',
    band1Heading: 'Common Electrical Problems We Find in Fairfield Homes and Apartments',
    commonSituations: [
      'Electric furnaces and water heaters leaving a 1970s panel with no spare capacity',
      'Aging breakers in apartment units that no longer trip when they should',
      'Basement and garage outlets in older subdivisions with no GFCI protection',
      'Buyers who want a written report on a 1960s or 70s house before closing',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A good share of “no power” calls in Fairfield end at a GFCI. In a 1970s or 80s house that one button often controls the garage, the baths and the outside receptacles together, so reset it before you phone. A breaker that drops once and holds after a reset doesn’t need us, and neither does a newer house that cleared the buyer’s home inspection. Call when lights flicker across several circuits, two-prong outlets are still the norm, cords have become permanent, or an EV charger, heat pump or addition is headed for a house nobody has checked in years.',
      },
      {
        title: 'Inspection, Repair or Rewire in Fairfield?',
        body: 'The report sorts it out. Most of what we find in Fairfield is repair work: a loose termination, a breaker past its life, outlets without GFCI where code now calls for it. When an electric-heat home has a panel that is too small, worn or overheating, we quote a panel replacement. Rewiring is uncommon in houses this age, but if a home has old wiring in most rooms we price it next to spot fixes. You decide, and you don’t have to hire us. Homeowners may pull their own permit for a single-family house; contractors must be city-registered.',
      },
    ],
    whyTitle: 'Why Fairfield Homeowners and Landlords Call Us',
    whyParagraph:
      'Fairfield has a big rental market and a lot of electric heat, so both landlords and owners call us. We send licensed, insured, background-checked technicians and stand behind it: we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Fairfield?',
        a: 'A single flat rate, which you hear and approve before we start. A two-bedroom apartment and a four-bedroom house with electric heat price differently, and so does a quick pre-sale report versus a capacity check for a charger. No overtime fees, and financing for any repairs.',
      },
      {
        q: 'What does your electrical inspection cover?',
        a: 'Your panel and every breaker or fuse in it, the grounding and bonding, receptacles and their GFCI and AFCI protection, visible wiring, and smoke alarm power. The utility owns the meter and the service drop; our work starts at the meter base and runs into the house.',
      },
      {
        q: 'Must I use you for the repairs the report lists?',
        a: 'No. Any electrician registered with the City of Fairfield can work from your report. If a buyer, lender or insurer asks for a written report, you’ll have one. Want us to handle the list? We price it item by item, and you choose.',
      },
    ],
  },
};
