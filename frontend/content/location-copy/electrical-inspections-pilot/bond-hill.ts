import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bondHill: LocationServiceCopy = {
  localParagraph:
    'Bond Hill’s housing spans a century, so an electrical inspection here depends on which house you’re in. Census figures put 44.5% of homes at 1939 or earlier, where we look for ungrounded outlets and old cloth-sheathed wire, and 28.7% from 1940 to 1959, where the panel is often too small for central air and a modern kitchen. Many are doubles and three- or four-unit buildings, so we check each unit’s circuits separately. Every repair we find comes with a price before work begins.',
  emergencyParagraph:
    'These are urgent. Kill the breaker and call us if an outlet or switch plate is hot, scorched or humming, if you see sparks, smell burning, or a breaker trips again the moment it’s reset. Smoke or fire means getting everyone out and calling 911. Bond Hill calls are seen the same day in most cases, weekends included.',
  commonIntro:
    'Bond Hill has single houses, plenty of doubles and small multi-unit buildings, and the electrical findings follow the building’s age. These come up most:',
  localFaqs: [
    {
      q: 'My house is on Bella Vista Street. Does the historic district limit electrical work?',
      a: 'Bella Vista became a local historic district in 2019, and its conservation guidelines cover the outside of its 17 homes. Which exterior electrical work, such as a new meter base or service mast, needs review there isn’t something we’ve confirmed, so we check with the city before touching the outside.',
    },
    {
      q: 'I own a Bond Hill double. What do Ohio rules say about the wiring?',
      a: 'ORC 5321.04 (A)(4) requires you, as landlord, to keep the electrical fixtures you supply in good and safe working order. An inspection of both sides gives you a dated written report. Tenants report problems to you in writing; we inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Bond Hill houses and doubles',
    band1Heading: 'Common Electrical Problems We Find in Bond Hill Homes',
    commonSituations: [
      'A 1940s double with a panel too small for two kitchens’ worth of appliances',
      'Cloth-sheathed cable in the basement of a house from the 1920s or 1930s',
      'A 1950s ranch with a single circuit serving most of one floor',
      'Basement wiring extended over the years with cords and loose splices',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Book one before buying or selling a Bond Hill house built before 1960, when adding central air, a heat pump or an EV charger to an older panel, or before renting out a unit. Two-prong outlets throughout and an old fuse box are signs on their own. You don’t need us for a tripped GFCI: reset it, and try the kitchen, bath, garage and outdoor ones, because one GFCI can shut off others downstream. One breaker that trips, resets and stays on is fine, and so is a newer house your buyer’s home inspector passed. We leave a written report.',
      },
      {
        title: 'Inspection, Repair or Rewire in Bond Hill?',
        body: 'What we find decides it. Loose connections and missing GFCI protection are repairs, and in a double they can differ from one side to the other. A panel that’s too small or failing gets replaced. If cloth or knob-and-tube wiring runs through most of an older house, we price rewiring beside spot fixes and show you both. Our inspection is a safety check with a report; work that needs a permit gets the official inspection, and we pull the permit and arrange it. You decide what to fix and who does it.',
      },
    ],
    whyTitle: 'Why Bond Hill Homeowners and Landlords Call Us',
    whyParagraph:
      'Bond Hill is split nearly evenly between owners and renters, and we work for owners and landlords alike. Our electricians are licensed, insured, background checked and drug tested, and every quote is a flat rate approved before work.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Bond Hill?',
        a: 'It’s quoted as a flat rate before we start. A single 1950s ranch takes less time than a three-unit building, and a buyer’s full report covers more than a check ahead of one new circuit. House size and purpose set the price, and you approve it first.',
      },
      {
        q: 'What do you inspect in a Bond Hill house?',
        a: 'The panel, the breakers or fuses, grounding and bonding, outlets including GFCI and AFCI protection, wiring we can see in the basement and attic, and power to smoke alarms. In doubles and small apartment buildings, we go through each unit’s panel as well as the shared meter area.',
      },
      {
        q: 'Do I have to use you to fix what you find in my Bond Hill house?',
        a: 'No. The report is yours and works with any licensed electrician. If you want us, every item is priced on its own so you can fix urgent ones first and schedule the rest. Financing is available for panel or rewiring jobs.',
      },
    ],
  },
};
