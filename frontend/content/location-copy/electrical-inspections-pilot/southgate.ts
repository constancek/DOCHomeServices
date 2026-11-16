import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const southgate: LocationServiceCopy = {
  localParagraph:
    'Southgate inspections split two ways. Census figures show 28.9% of homes built in 1939 or earlier and 31.3% in the 1980s and 1990s, with 41.0% in buildings of five units or more. In the pre-war houses we look for cloth-covered wiring, ungrounded outlets and panels too small for central air. In the newer apartments and condos, it is usually missing GFCI protection or a panel that can’t take another load. We check everything, write it down and price repairs before we start.',
  emergencyParagraph:
    'Some Southgate calls shouldn’t wait for a booked inspection: a switch or outlet that is hot or buzzing, sparks, a burning smell, or a breaker that pops again the second you reset it. Leave that one off. Smoke or flames: leave the building and phone 911 from outside. Most calls get a visit that day, Saturdays and Sundays too.',
  commonIntro:
    'Southgate is an even mix of pre-war houses, newer apartments and condos, and plenty of rentals. These are the findings we see most:',
  localFaqs: [
    {
      q: 'I manage apartments in Southgate. Can you inspect several units in one visit?',
      a: 'Yes. We go unit by unit and look at the panels, outlets, GFCI protection and smoke alarm power, then the shared wiring if you want it included. Each unit gets its own notes in the report. Tenants should report problems to you in writing; we inspect wiring, not leases.',
    },
    {
      q: 'Should I get an inspection before buying an older Southgate house?',
      a: 'If it was built before 1940 and shows no recent electrical work, yes. Old wiring can look fine at the outlet and still be cloth-covered behind it. We open the panel, test outlets and look in the basement and attic. If a buyer, lender or insurer asks for a written report, you’ll have one.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Southgate houses, condos and apartments',
    band1Heading: 'Common Electrical Problems We Find in Southgate Homes and Apartments',
    commonSituations: [
      'A pre-war house with cloth-covered wiring still feeding the upstairs bedrooms',
      'Apartment kitchens and baths from the 1980s with no GFCI protection',
      'An old panel with double-tapped breakers after years of added circuits',
      'Smoke alarms in a rental unit running on batteries with the hard-wired power cut',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before calling, reset every GFCI outlet you can find, including the kitchen, bath, garage and outdoors, since one can cut power to others. A breaker that trips once and stays on after a reset needs nothing more. A switch that turns on a lamp outlet is normal. If a newer condo passed the buyer’s home inspection cleanly, you can skip us. Book an inspection for an old fuse box, two-prong outlets in most rooms, flickering across circuits, cords run as permanent wiring, or a pre-war house about to be sold or bought.',
      },
      {
        title: 'Inspection, Repair or Rewire in Southgate?',
        body: 'The findings decide this, not the build date alone. Loose connections, a worn breaker, double taps and missing GFCIs are repairs, and that covers most Southgate apartments and condos. An undersized or failing panel is a panel replacement. In the pre-war houses, if cloth or knob-and-tube wire runs through most rooms, we price rewiring next to targeted repairs and let you weigh them. You keep the report and decide who does the work. If a permit is needed, we pull the permit and arrange the inspection.',
      },
    ],
    whyTitle: 'Why Southgate Homeowners and Landlords Call Us',
    whyParagraph:
      'About four in ten Southgate households rent, so owners and managers make up a big share of our calls. Every electrician is licensed, insured, background-checked and drug-tested, and quotes before starting.',
    sharedFaqs: [
      {
        q: 'How much does a Southgate electrical inspection cost?',
        a: 'Two things set the price: how big the place is and why you need the report. A one-bedroom condo going on the market is a quicker job than a pre-war Southgate house ahead of a remodel, or a whole building of rental units. You get one flat number up front, and no overtime fees.',
      },
      {
        q: 'What gets checked during an inspection?',
        a: 'Inside the panel, every breaker or fuse and how it is connected. Then grounding and bonding, each outlet and switch, GFCI and AFCI protection, exposed wiring in a pre-war basement or an apartment utility room, and whether the smoke alarms are getting power. Urgent items are flagged at the top of the written report.',
      },
      {
        q: 'Am I required to hire you for the repairs?',
        a: 'No. The report is yours to hand to whichever licensed electrician you trust. If you pick us, you see a flat price on each fix before anyone starts, we test the work once it’s in, and if you aren’t satisfied we make it right or you don’t pay.',
      },
    ],
  },
};
