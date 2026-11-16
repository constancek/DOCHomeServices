import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const madeira: LocationServiceCopy = {
  localParagraph:
    'Madeira is a city of 1950s houses, and that is what an electrical inspection here works around. Census figures give a median build year of 1960, with 29.5% of homes from the 1950s alone. Those houses were wired for far less than a household uses now: often a 60-amp or 100-amp panel, one or two circuits per bedroom, and grounding that may stop short of some outlets. We test the system, write down what it can and can’t carry, and price changes before work starts.',
  emergencyParagraph:
    'If a plug or switch is too warm to touch, buzzing or charred, if something smells scorched, or a breaker kicks off again the second you reset it, that circuit needs attention today. Shut its breaker off. With smoke or fire, get everybody out and call 911. We can usually be there the same day in Madeira, weekends included.',
  commonIntro:
    'In Madeira’s mid-century single-family homes, these are the findings we write up most:',
  localFaqs: [
    {
      q: 'Who handles electrical permits in Madeira?',
      a: 'The City of Madeira Building Department issues building permits, but electrical permits go through a separate office. For permit work, we pull the permit and arrange the official inspection. That sign-off is separate from our inspection, which is a safety check with a written report.',
    },
    {
      q: 'We’re buying a 1950s house in Madeira. Is an electrical inspection worth it?',
      a: 'Usually, yes. A general home inspector looks at the panel and a few outlets; we test the whole system and tell you what a kitchen remodel or EV charger would need. If a buyer, lender or insurer asks for a written report, you’ll have one, and you’ll know repair costs before closing.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Madeira’s mid-century homes',
    band1Heading: 'Common Electrical Problems We Find in Madeira Homes',
    commonSituations: [
      'A 1950s panel too small for central air, a modern kitchen and a dryer together',
      'Bedrooms that share one circuit, so a space heater trips everything upstairs',
      'Two-prong outlets in the original rooms and three-prong ones only in the addition',
      'A detached garage fed by an old underground line with no GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Try the reset buttons before you call. Kitchens, bathrooms, garages and outdoor spots usually have a GFCI outlet, and one that trips can cut power to plugs elsewhere in the house. If a breaker trips, you reset it and it holds, the system did what it should. A dead fixture may be just the bulb. An inspection makes sense when you’re buying or selling a 1950s Madeira house, when most outlets have two prongs, when cords have turned into permanent wiring, or when lights flicker on several circuits. Planning a remodel, charger or heat pump is a good reason too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Madeira?',
        body: 'The findings decide this, and in a 1950s house rewiring is less common than people fear. A failing breaker, loose connections and missing GFCI protection are repairs. The panel is where a 1950s house usually falls short; if it is full or undersized for what you run today, we price a panel or service upgrade. A rewire only comes into it if the inspection finds old wiring damaged throughout. You hold the report and decide. Any licensed electrician can work from it, not only us.',
      },
    ],
    whyTitle: 'Why Madeira Homeowners Call Us',
    whyParagraph:
      'Madeira is 92.2% owner-occupied, so most of our inspections there are for families planning a sale, a purchase or a remodel. Our electricians are licensed, insured, background-checked and drug-tested, and quote first.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Madeira?',
        a: 'You’ll have a flat rate before we start. It comes from the size of the house and what you need the inspection for; a full pre-sale check takes longer than confirming whether one new circuit will fit. Any repairs are quoted separately and wait on your approval.',
      },
      {
        q: 'What does the inspection look at?',
        a: 'The panel and its main, each breaker, the grounding electrode and bonding, outlets checked for polarity, ground and GFCI or AFCI protection, visible wiring in the basement and attic, and whether smoke alarms are powered. In a 1950s house we pay close attention to the grounding.',
      },
      {
        q: 'Is it required to hire you to fix what you find?',
        a: 'No. The report is yours, and you can take it to any licensed electrician you like. If you’d rather we do the work, each repair gets its own flat-rate price before we start, and you choose. We offer financing on panel upgrades.',
      },
    ],
  },
};
