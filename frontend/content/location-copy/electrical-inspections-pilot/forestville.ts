import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestville: LocationServiceCopy = {
  localParagraph:
    'In Forestville most inspections are for a sale, a purchase or a new appliance rather than old wiring. Census figures put the median home at 1981, so the original wiring tends to be fine. Load is the thing to watch: 38.2% of homes here heat with electricity, and an electric furnace or heat pump already takes a big share of the panel before anyone adds a car charger. We check the full system, put it in writing, and quote any fix first.',
  emergencyParagraph:
    'Skip the scheduling and call us if a Forestville outlet smells like burning plastic, a breaker won’t stay on after one reset, or you see sparks at a plug. Shut off the breaker for that circuit. If smoke appears, get out and call 911 before anything else. On most calls a technician arrives the same day, Saturdays and Sundays too.',
  commonIntro:
    'Forestville has 1980s and 1990s houses on some streets and large apartment complexes on others. What we find in both:',
  localFaqs: [
    {
      q: 'I rent in one of Forestville’s apartment complexes. Can I book an electrical inspection?',
      a: 'For wiring in your unit, report the problem to management in writing. Ohio law (ORC 5321.04) makes the landlord keep the electrical fixtures they supply in good and safe working order. We inspect wiring, not leases, so the owner or manager books us and receives the report.',
    },
    {
      q: 'Who handles electrical permits in Forestville?',
      a: 'Forestville is part of unincorporated Anderson Township, and Inspection Bureau, Inc. (IBI) inspects permitted electrical work here, not the township. That’s a different thing from our inspection, which is a safety check with a written report. If a fix needs a permit, we take care of it.',
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
        body: 'Let the findings decide. In Forestville homes that’s usually a repair: a loose lug, a breaker that’s failing, an outlet near water with no GFCI. If the panel can’t carry what the house now runs, especially with electric heat in the mix, replacing the panel is the fix, and we say so plainly. Rewiring hardly ever comes into it in houses from the 1980s and 1990s. The report is yours and so is the decision; you can hire anyone you like for the repairs. When a repair needs a permit, we pull it and arrange the inspection.',
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
        a: 'We start at the meter base, since the meter and the line to it are Duke Energy’s, and work inward: panel, breakers, grounding and bonding, outlets and their GFCI and AFCI protection, exposed wiring, and power to the smoke alarms. The findings come to you as a written report.',
      },
      {
        q: 'Can I take the report to another electrician?',
        a: 'Yes. The report is yours, and any licensed electrician can quote from it. If you’d rather we do the work, you’ll see a flat price for each item and say yes or no before we start.',
      },
    ],
  },
};
