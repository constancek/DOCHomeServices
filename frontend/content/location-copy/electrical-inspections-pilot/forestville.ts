import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestville: LocationServiceCopy = {
  localParagraph:
    'Most people in Forestville book us ahead of a closing, after buying, or before a big new appliance goes in, not because the wiring is old. The median house dates to 1981 in Census figures, and wiring from that era usually holds up. Load needs the closer look. Electricity heats 38.2% of homes here, and an electric furnace or heat pump eats into panel capacity long before an EV charger shows up. You get the whole system checked, a written report, and a price on any repair before it starts.',
  commonIntro:
    'Forestville has 1980s and 1990s houses on some streets and large apartment complexes on others. What we find in both:',
  localFaqs: [
    {
      q: 'I rent in one of Forestville’s apartment complexes. Can I book an electrical inspection?',
      a: 'Problems in your own unit go to management, in writing. Under Ohio’s ORC 5321.04, a landlord has to keep the electrical fixtures they provide safe and in good repair. Leases are between you and the owner, so the owner or property manager schedules the inspection and gets our report.',
    },
    {
      q: 'Who handles electrical permits in Forestville?',
      a: 'Inspection Bureau, Inc. (IBI) handles inspections of permitted electrical work in Forestville, which sits in unincorporated Anderson Township, and the township itself doesn’t. Our visit is separate, a safety walk-through that ends with a written report. Where a repair calls for a permit, we file it and deal with IBI.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Forestville homes and apartments',
    band1Heading: 'Common Electrical Problems We Find in Forestville Homes and Apartments',
    commonSituations: [
      'A heat pump and an electric water heater sharing a panel that has no room left for a car charger',
      'Apartment outlets that went dead because a GFCI tripped in another room',
      'Deck outlets with no weatherproof cover and no GFCI protection',
      'A finished basement a past owner wired with no permit on file',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Several Forestville calls get settled over the phone. Bathrooms, kitchens, garages and patios are wired through GFCI outlets, and when one trips it can silence others in a different room, so hunt down each one and press its button. A breaker that flipped once, then held after you pushed it back, is working as designed. Burned-out bulbs and switches tied to a lamp outlet fool plenty of people too. If the buyer’s home inspector signed off on your 1990s place without comment, save your money. Bring us in for flicker spread across circuits, cords standing in for wiring, or ahead of a heat pump install.',
      },
      {
        title: 'Inspection, Repair or Rewire in Forestville?',
        body: 'What we find sets the next step, not the year the house went up. In Forestville the answer is usually a repair, such as a lug that’s worked loose, a breaker on its way out, or a receptacle by a sink without GFCI protection. When the panel can’t keep up with today’s load, electric heat especially, a panel replacement is the honest fix, and we tell you that. Houses built in the 1980s and 1990s almost never need rewiring. You keep the report and make the call, and any licensed electrician can do the repairs. If one needs a permit, we file it and book the inspection.',
      },
    ],
    whyTitle: 'Why Forestville Homeowners and Landlords Call Us',
    whyParagraph:
      'With 35.2% of Forestville households renting, we work for owners and property managers alike. Every electrician we send is licensed, insured, background-checked and drug-tested, and prices are agreed before any work.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced in Forestville?',
        a: 'One flat rate, given to you before we arrive. Two things set it: the size of the home and what you need the report for, like a closing or a heat pump install. Repairs aren’t bundled in; each comes with its own quote for you to approve.',
      },
      {
        q: 'What’s included in an electrical inspection?',
        a: 'The meter and the service line feeding it belong to Duke Energy, so our check begins at the meter base and moves inside. From there we go through the panel and breakers, the grounding and bonding, every outlet with its GFCI and AFCI protection, any wiring in view and the smoke alarm circuits. You get it all back in writing.',
      },
      {
        q: 'Can I take the report to another electrician?',
        a: 'Yes. It’s your report to use however you like, and a licensed electrician of your choosing can price the work from it. Should you want us for the repairs, each item gets its own flat price, and you approve or skip them one by one.',
      },
    ],
  },
};
