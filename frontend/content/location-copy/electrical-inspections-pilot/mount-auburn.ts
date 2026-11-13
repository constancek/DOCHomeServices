import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAuburn: LocationServiceCopy = {
  localParagraph:
    'Most electrical inspections we do in Mount Auburn are in 19th-century houses and the two-families and small apartment buildings around them. Census figures put 56.6% of homes here at 1939 or earlier, so knob-and-tube or cloth-covered wire can still be live behind the plaster, feeding ungrounded outlets and a fuse box or a small early panel. The apartment buildings put up since 2010 are another story and usually check out fine. We trace the system, note each problem in writing and give you a price before any repair.',
  emergencyParagraph:
    'A burning smell, a humming or hot switch plate, sparks at a plug, or a breaker that won’t stay on in a Mount Auburn house can’t sit on the calendar. Shut that breaker off. With smoke or fire, get out and call 911. A technician comes the same day on most calls, weekends included.',
  commonIntro:
    'Mount Auburn houses have often been wired and rewired a piece at a time over a century. What we turn up most:',
  localFaqs: [
    {
      q: 'My Mount Auburn apartment has outlets that stopped working. Who should book the inspection?',
      a: 'The landlord. Ohio’s landlord law, ORC 5321.04 (A)(4), says the electrical fixtures an owner supplies have to be kept in good and safe working order. Put the problem in writing to them and keep a copy. We inspect wiring, not leases, and it’s the owner or manager who schedules us.',
    },
    {
      q: 'My house is in the Prospect Hill district. Does that change electrical work?',
      a: 'Not inside. Prospect Hill is a local city historic district, so the Historic Conservation Board looks at exterior changes. A new service mast or meter base on the front wall is where we check with the city first. Panels, circuits and rewiring indoors go through the usual permit, which we pull.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mount Auburn houses, two-families and rentals',
    band1Heading: 'Common Electrical Problems We Find in Mount Auburn Homes and Apartments',
    commonSituations: [
      'Knob-and-tube runs spliced into newer cable during a kitchen remodel decades ago',
      'One small original panel trying to serve both units of a two-family',
      'Ungrounded two-prong outlets on every floor, with adapters and power strips standing in for circuits',
      'A buyer’s lender asking for a written report before closing on a house from the 1800s',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Rule out simple causes first. A bathroom or kitchen outlet that’s gone dead often traces back to a GFCI in a different room, because one GFCI can protect several outlets; find it and press reset. One breaker that trips, goes back on and holds was probably a one-time overload. If that settles it, you don’t need us. Book a visit when a Mount Auburn house still has ungrounded outlets in most rooms, runs on fuses, relies on extension cords stapled along the trim, or flickers on more than one circuit. An old house with no recent electrical work and a sale or an EV charger coming is reason enough.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mount Auburn?',
        body: 'The answer comes from the walls, not the deed. A Mount Auburn house built in 1938 may have been rewired in stages, and what’s left could need only a few fixes: a loose neutral, a breaker that runs warm, GFCI outlets at the kitchen and bath. When the panel is undersized or failing, we replace the panel. When knob-and-tube or cloth wire still carries most rooms, we quote a full rewire beside the smaller fixes and let you weigh them. Hiring us for any of it is optional. If a job needs a permit, we pull the permit and arrange the inspection.',
      },
    ],
    whyTitle: 'Why Mount Auburn Owners and Landlords Call Us',
    whyParagraph:
      'With 66.9% of Mount Auburn homes rented, many reports go to landlords, buyers and lenders. Every electrician we send holds a license and insurance and has passed a background check and drug test. Prices are flat and agreed first.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Mount Auburn?',
        a: 'You get a flat rate before we start. Two things set it: how big the building is and what the report is for, such as a sale, a purchase or a landlord’s check. A two-family with two panels takes more time than a single house, and the quote shows that.',
      },
      {
        q: 'What does an electrical inspection cover?',
        a: 'We begin where Duke Energy’s equipment ends, at the meter base, and work inward: the panel and its breakers or fuses, grounding and bonding, the GFCI and AFCI protection on outlets, wiring exposed in the basement and attic, and the circuit feeding the smoke alarms. In an 1800s house we pay extra attention to old splices.',
      },
      {
        q: 'Do I have to hire you for the repairs the report lists?',
        a: 'You don’t. Keep the report and get quotes from anyone licensed. Should you want us on the job, the report already breaks the repairs into priced items, and Mount Auburn landlords often schedule the risky ones before a new lease and the rest between tenants.',
      },
    ],
  },
};
