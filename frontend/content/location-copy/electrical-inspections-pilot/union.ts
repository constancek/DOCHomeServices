import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const union: LocationServiceCopy = {
  localParagraph:
    'Union housing is young. Census counts show the city grew from 5,379 people in 2010 to 7,416 in 2020, and 80.1% of homes here went up in 2000 or later. Wiring that young is usually in good shape, so Union owners mostly book us before a sale, after a purchase, or when adding a big load like a hot tub or an EV charger. We tell you what the panel can carry, in writing, and price any fix first.',
  emergencyParagraph:
    'New wiring can still fail at a connection. If a Union outlet or switch is hot, scorched or buzzing, sparks fly, or a breaker snaps off each time you reset it, turn that breaker off. Smoke or flame means get out and call 911. We cover most urgent calls the same day, Saturday and Sunday included.',
  commonIntro:
    'Union calls come from subdivision houses built in the last two decades and a few larger apartment complexes. Here’s what the inspections turn up most:',
  localFaqs: [
    {
      q: 'My Union house is less than 20 years old. Why would it need an inspection?',
      a: 'Most of the time it doesn’t. Owners here book one when they’re adding something the builder didn’t plan for, like a hot tub, a generator inlet or a second EV charger, or when a basement was finished without a permit. A buyer or lender asking for a written report is the other reason.',
    },
    {
      q: 'Who owns the meter on my Union house, Duke or Owen?',
      a: 'It depends on the street: parts of Union are served by Duke Energy Kentucky and parts by Owen Electric. Either way, the meter and the line from the pole or transformer belong to the utility. Everything from the meter base into the house is yours, and that’s what we inspect and repair.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Union homes before you add, buy or sell',
    band1Heading: 'Common Electrical Problems We Find in Union Homes',
    commonSituations: [
      'A builder-installed panel sized for the house as sold, not for a hot tub added later',
      'Basement finishes with outlets daisy-chained off one circuit and no permit on file',
      'Generator setups that backfeed through an outlet instead of using a transfer switch or interlock',
      'Exterior and garage outlets where the GFCI has worn out and no longer trips',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A lot of Union calls don’t need a visit. If outlets die in the garage, a bathroom or outside, look for a GFCI that tripped, possibly in a different room, and reset it. One breaker that trips, resets and stays on is not a warning sign by itself. And a clean home inspection on a 2010 house usually means there’s nothing for us to add. Book us when one breaker keeps tripping, lights flicker on several circuits, or you’re adding a large appliance. We go over everything and you get the results on paper.',
      },
      {
        title: 'Inspection, Repair or Rewire in Union?',
        body: 'In Union, rewiring is off the table for nearly every house; the question is repair or a bigger panel. Small findings, such as a loose lug, a GFCI that no longer trips or a breaker the wrong size for its wire, get fixed. If the panel can’t take the load you’re planning, we quote a panel replacement. Our inspection ends with a written report for you. Permitted work gets its own official inspection, and we pull the permit and arrange it. Use the report with us or anyone else.',
      },
    ],
    whyTitle: 'Why Union Homeowners Call Us',
    whyParagraph:
      'Most Union homes, 82.5%, are owner-occupied, and many owners call us before a project rather than after a problem. We’re family owned since 1993, with licensed, insured technicians and prices you approve first.',
    sharedFaqs: [
      {
        q: 'How much will an electrical inspection in Union cost?',
        a: 'We quote one flat rate before the visit, based on the house’s size and your reason. A check before adding a hot tub includes working out the panel’s spare capacity; a pre-sale report is written with a buyer’s questions in mind. Repairs get their own price, approved by you first.',
      },
      {
        q: 'What gets checked?',
        a: 'We start at the panel: breakers, the main, grounding and bonding. Then we go room by room through outlets and switches, test GFCI and AFCI protection, look at wiring in the garage, basement and attic, and confirm hard-wired smoke alarms have power. In an apartment, we check your unit only.',
      },
      {
        q: 'Must I use you to fix what you find?',
        a: 'No, the report is yours. Some owners fix small items with another licensed electrician and call us for the panel; that’s your call. If we do the work, it’s flat-rate, with financing for larger jobs. Renters: report problems to your landlord in writing; we inspect wiring, not leases.',
      },
    ],
  },
};
