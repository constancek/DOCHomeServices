import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Many Aurora houses are older than central air, and that shapes most repairs. Census figures put 38.8% of homes at 1939 or earlier, so ducts and line sets were fitted in later, often through tight walls and attics. Another 21.9% of homes are in buildings with two to four units, where systems sit close together and share basements or yards. Gas furnaces with a coil on top are the usual pairing. We find the problem and give you the price before we start.',
  emergencyParagraph:
    'A dead AC is hardest on older residents in the upstairs rooms of Aurora’s older houses and apartments, where heat gathers by afternoon. The National Weather Service’s CVG station averages about 22 days a year at 90 degrees or higher. We repair central air and heat pumps, same day on most calls, weekends included.',
  commonIntro:
    'Aurora’s cooling was mostly fitted into older houses and small multi-unit buildings. These problems come up most:',
  localFaqs: [
    {
      q: 'Do I need approval to replace an AC in Aurora’s historic district?',
      a: 'A repair leaves the exterior alone, so no. Inside the Aurora Downtown Historic District, work beyond routine maintenance needs a Certificate of Appropriateness from the Historic Preservation Commission, and the Dearborn County Building Department then issues the building permit. Whether a new condenser counts isn’t settled, so we check with the city first.',
    },
    {
      q: 'My Aurora basement flooded. Is the AC safe to run?',
      a: 'Not if the furnace or air handler was under water. Aurora has no levee, and when the Ohio River gets into riverfront basements, the furnace blower and its controls are usually what it reaches. Keep that equipment off at the breaker until a technician checks it.',
    },
  ],
  overrides: {
    ctaLine: 'Aurora AC repair for older homes and small apartment buildings',
    band1Heading: 'Common AC Problems in Aurora Homes',
    commonSituations: [
      'Top-floor rooms in a pre-1940 house that fall behind every afternoon',
      'A refrigerant leak in copper run through an attic decades after the house went up',
      'Two condensers crowded together beside a two-family house',
      'A furnace and coil that sat in river water and need checking before use',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Rule out the easy stuff first: a dirty filter or a tripped breaker. When a fresh filter or a reset puts cold air back in the rooms for good, there’s no need for us. Phone us if the breaker won’t stay on, or the condenser buzzes and its fan blade doesn’t move. Tenants in Aurora’s two-family and fourplex buildings should go to the owner, who makes the repair call. Our technician tests the furnace and the condenser, then asks for your okay on a flat price. When we finish, we read the temperature coming out of the vents.',
      },
      {
        title: 'Repair or Replace Your Aurora AC?',
        body: 'The age that matters is the condenser’s, not the house’s. A pre-1940 Aurora house can have a unit installed a few years ago, and a new contactor or blower motor on that one is money well spent. A system well into its second decade with a failed compressor usually isn’t. Replacements need a building permit from the Dearborn County Building Department, and we file it. Before that point, watch the electric bill. A dirty outdoor coil or a slow leak makes the compressor run longer, and you see it on the bill in a month when the weather didn’t change.',
      },
    ],
    whyTitle: 'Why Aurora Homeowners and Landlords Call Us',
    whyParagraph:
      'We know Aurora’s older houses and small rentals, where cooling came long after construction. Owners see and approve a flat price first, and each technician has cleared a background check and drug test.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Aurora?',
        a: 'An honest price waits until the fault is found. Changing an outdoor capacitor goes fast, and tracking a leak in copper strung through an old attic does not. Before anything begins, you see one flat price and say yes or no, and night or weekend calls carry no surcharge.',
      },
      {
        q: 'Is my Aurora AC worth repairing?',
        a: 'Usually, if it’s young and one part failed. The house’s age doesn’t decide it, since many older Aurora homes have fairly new condensers. If an older unit loses its compressor, we quote the repair and a replacement on the same visit so you can choose.',
      },
      {
        q: 'Why is my Aurora AC blowing warm air?',
        a: 'Set the thermostat to cool, confirm the breaker is on, and put in a new filter. A condenser fan that refuses to turn usually means a dead capacitor. A refrigerant leak can do it as well. Homes on electric heat often have a heat pump, and one stuck on its heating setting pushes warm air in July.',
      },
    ],
  },
};
