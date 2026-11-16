import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const crescentSprings: LocationServiceCopy = {
  localParagraph:
    'Most Crescent Springs wiring is fairly young. Census figures put the median building year at 1993, so few homes here have the cloth wiring or fuse boxes we find in older towns. What people book us for is a change: a condo sale, a townhouse purchase, a hot tub, an EV charger. With 61.8% of homes heated by electricity, the panel already carries a heavy load, and a new appliance can push it over. We check it, report back, and quote any work before we start.',
  emergencyParagraph:
    'Don’t wait on these in Crescent Springs: a warm or scorched outlet, a switch that buzzes, a smell like hot plastic, sparks, or a breaker that won’t stay reset. Flip that breaker off and leave it off. Smoke or flames mean get everyone outside and dial 911. We get to most calls the same day, Saturdays and Sundays too.',
  commonIntro:
    'About half the homes in Crescent Springs are in buildings of five units or more, and the rest are mostly houses from the 1970s on. The findings we see most:',
  localFaqs: [
    {
      q: 'I rent an apartment in Crescent Springs and an outlet sparks. Can I book you?',
      a: 'Turn off that breaker and report it to your landlord or property manager in writing, with the date. The owner or manager books the inspection or repair, and we work with them directly. We inspect wiring, not leases, so questions about who pays go to your landlord.',
    },
    {
      q: 'Does my all-electric Crescent Springs condo have room for an EV charger?',
      a: 'Sometimes. Electric heat, a water heater and a range already take a big share of the panel. We add up the loads, look at the service size and tell you if a charger fits as is or needs a bigger panel. Duke Energy Kentucky owns the meter and the line to it; we work from the meter base in.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Crescent Springs condos, townhomes and houses',
    band1Heading: 'Common Electrical Problems We Find in Crescent Springs Homes and Apartments',
    commonSituations: [
      'An all-electric condo panel with no spare capacity left for an EV charger or hot tub',
      'Bathroom and balcony outlets in a 1980s building that never got GFCI protection',
      'Smoke alarms on battery only after an owner removed the hard-wired ones',
      'A townhouse basement finished by a past owner with no permit on file for the wiring',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A dead bathroom outlet in a Crescent Springs unit is usually a GFCI that tripped somewhere else, often in the kitchen or on the patio. Press reset on each one. A breaker that trips once and holds after you reset it is not a reason to call, and neither is a lamp plugged into a switched outlet. Call when breakers trip on several circuits, lights dim hard when the heat comes on, or extension cords are doing the job of wiring. For a newer place where the buyer’s home inspector found nothing, you probably don’t need us.',
      },
      {
        title: 'Inspection, Repair or Rewire in Crescent Springs?',
        body: 'In homes this young, rewiring almost never comes up. The usual findings are smaller: a loose connection at a breaker, a missing GFCI, an amateur basement circuit. Those are repairs. When the panel is too small for an all-electric home plus a new charger or hot tub, a panel replacement or load management is the honest answer, and we lay out the price for each. You get the written report and make the call; there is no obligation to hire us for the fixes. If the work needs a permit, we pull the permit and arrange the inspection.',
      },
    ],
    whyTitle: 'Why Crescent Springs Owners and Landlords Call Us',
    whyParagraph:
      'With 42.0% of households renting, many of our Crescent Springs visits are booked by owners and managers. Every electrician is licensed, insured, background-checked and drug-tested, with flat rates approved first.',
    sharedFaqs: [
      {
        q: 'What does a Crescent Springs electrical inspection cost?',
        a: 'The price is set by the size of the home and the reason for the visit. A one-bedroom condo before a sale takes less time than a large house before adding a charger. You get a flat-rate quote before we begin, and there are no overtime fees.',
      },
      {
        q: 'What do you check during the inspection?',
        a: 'Breaker by breaker through the panel first, then the grounding and bonding, every reachable outlet, GFCI and AFCI protection, exposed wire in a basement or utility room, and whether power reaches the smoke alarms. For a condo, that stops at your own panel and circuits. It all lands in one written report.',
      },
      {
        q: 'Once I have the report, am I tied to you for repairs?',
        a: 'Not at all. Take the report to any licensed electrician you like. If you’d rather we handle it, each item gets a flat price you approve before we pick up a tool, and we test the work when we’re done.',
      },
    ],
  },
};
