import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const burlington: LocationServiceCopy = {
  localParagraph:
    'Burlington is the Boone County seat, but almost all of its housing is modern. Census figures show just under 1% of homes predate 1960, and the median was built in 1998. Older houses cluster in the original town grid, now a National Register historic district. Everywhere else, wiring is usually sound, and the real question is load: 60.1% of homes heat with electricity, which can leave little room in a panel for an EV charger. We check, write it up and quote any work first.',
  emergencyParagraph:
    'Book a regular inspection for most things, but not these: a burning smell, a warm or discolored outlet, buzzing from the panel, sparks, or a breaker that pops again right after reset. In Burlington, turn that breaker off. With smoke or flames, everyone out and call 911. We reach most urgent calls the same day, weekends included.',
  commonIntro:
    'Burlington calls split between single homes built since the 1980s, apartments and condos, and a few older houses in the old town. Most often we find:',
  localFaqs: [
    {
      q: 'My Burlington house is in the historic district. Does that affect electrical work?',
      a: 'Inside the house, no. The Burlington Historic District is a National Register listing, and that alone doesn’t bring a review of interior wiring. If a job changes the outside of the house, such as moving the meter base, we check with the county first and handle any permit it needs.',
    },
    {
      q: 'I rent an apartment in Burlington and an outlet sparks. Who do I call?',
      a: 'Switch off that outlet’s breaker, stop using it, and tell your landlord or property manager in writing the same day. They own the wiring, so they book the repair or inspection, and we work for them. We inspect wiring, not leases. If there’s smoke, leave and call 911.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Burlington houses, condos and rentals',
    band1Heading: 'Common Electrical Problems We Find in Burlington Homes',
    commonSituations: [
      'An all-electric house whose panel has no room left for an EV charger or a hot tub',
      'Condo units with a kitchen circuit shared by the dishwasher, microwave and disposal',
      'Outlets added in a finished basement by a previous owner, without AFCI or GFCI protection',
      'An older house in the original town with a mix of two-prong and grounded outlets',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some calls end before they start. A dead bathroom or garage outlet is often a GFCI that tripped in another room; find it and press reset. A breaker that holds after one reset can be left alone, and a dark lamp may just be on a switched outlet. Book us when tripping keeps coming back, lights flicker in several rooms, extension cords have become fixtures, or you’re buying, selling or adding a big electric load. We inspect the panel and circuits, show you what we see, and put it in a written report.',
      },
      {
        title: 'Inspection, Repair or Rewire in Burlington?',
        body: 'What the inspection finds decides it. In a Burlington house from the 1990s or 2000s, expect repairs: a loose connection, a breaker that’s failing, a basement outlet without GFCI protection. If the panel can’t take an EV charger on top of electric heat, a larger panel is the fix. Rewiring only comes up in the few older homes, and then we price it beside spot repairs. When work needs a permit, we pull it and arrange the official inspection. Ours comes first and is written for you, not the county. You decide who does the work.',
      },
    ],
    whyTitle: 'Why Burlington Homeowners and Landlords Call Us',
    whyParagraph:
      'In Burlington, 26.6% of homes are rented, and landlords need reports they can act on between tenants. Owners and managers get the same thing: licensed, insured, background-checked technicians and a price agreed before work.',
    sharedFaqs: [
      {
        q: 'What does it cost to have a Burlington home inspected?',
        a: 'The price is a flat rate that we give you before we start. It’s set by the size of the home and the purpose, so a condo before a sale and a large house before an EV charger won’t cost the same. Repairs are separate, and each waits for your yes.',
      },
      {
        q: 'What will the inspection look at?',
        a: 'The panel or subpanel and all breakers, grounding and bonding, outlets and switches room by room, GFCI and AFCI protection, visible wiring in the attic, basement and garage, and power to the smoke alarms. In a condo, that means your unit’s panel and circuits, not the building’s common wiring.',
      },
      {
        q: 'Can another electrician do the repairs from your report?',
        a: 'Yes. The report is written so any licensed electrician can price from it, and it’s yours to keep. If you choose us, we quote each repair at a flat rate with no overtime fees, and if we don’t get it right, we make it right or you don’t pay.',
      },
    ],
  },
};
