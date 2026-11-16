import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Hyde Park inspections are usually booked around a sale, a purchase or a renovation in an older single house. By Census figures, 51.6% of homes here were built in 1939 or earlier, and many have been remodeled several times. That leaves newer circuits in the kitchen and baths alongside original cloth or knob-and-tube wire upstairs, sometimes still feeding ungrounded outlets. Buyers rarely know which they’re getting until someone opens the panel and follows the runs. We do that, put it in a written report and price fixes before work begins.',
  emergencyParagraph:
    'Don’t hold these for an inspection date in Hyde Park: a hot-plastic smell, a warm or discolored cover plate, buzzing or sparks from an outlet, a breaker that trips again within seconds. Turn the breaker off. If smoke or flames appear, get everyone outside and call 911. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Hyde Park is mostly owner-occupied, and 48.6% of its homes are detached single houses. On those, our inspections find these most often:',
  localFaqs: [
    {
      q: 'Should I get an electrical inspection before buying in Hyde Park?',
      a: 'For a house built before 1940 with no paperwork on electrical updates, it’s worth it. A general home inspection looks at the panel and tests some outlets. We trace the circuits, look for old wire left behind after remodels and give you a written report, which helps if a lender or insurer asks for one.',
    },
    {
      q: 'I rent a Hyde Park apartment and an outlet sparked. Who fixes it?',
      a: 'Kill the breaker for that outlet, then send the landlord a written note describing the spark. ORC 5321.04 (A)(4) holds Ohio landlords responsible for keeping the electrical fixtures in a rental in good and safe working order. We inspect wiring, not leases, so the request for our visit comes from the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Hyde Park homes before a sale or remodel',
    band1Heading: 'Common Electrical Problems We Find in Hyde Park Homes',
    commonSituations: [
      'A remodeled kitchen on new circuits while the bedrooms above still run on cloth-covered wire',
      'Knob-and-tube left live in the attic after an earlier partial rewire',
      'A panel too small for a finished basement, an EV charger and central air together',
      'Sellers wanting a written report on hand before buyers and lenders start asking',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Not every outage needs an electrician. Outlets by the kitchen sink, in the baths, in the garage and outside often hang off a single GFCI, so one trip darkens several; reset it and they return. A breaker that tripped once and never again was a brief overload. A dead bulb, or a lamp plugged into a switched outlet, is just that. If a newer Hyde Park house passed the buyer’s home inspection, skip us. Call when an older house still has ungrounded outlets throughout, fuses, cords serving as fixed wiring, or flicker on several circuits, or before a big new load goes in.',
      },
      {
        title: 'Inspection, Repair or Rewire in Hyde Park?',
        body: 'It depends on what’s behind the walls, not on the year the house went up. A 1938 Hyde Park house might already be mostly rewired and need only repairs: a loose connection, a tired breaker, GFCI protection added by the sinks. A panel that’s too small for the house you live in now gets replaced. If cloth or knob-and-tube wire still feeds much of the house, we price a rewire next to spot repairs and plan it around your plaster and trim. You keep the report and can hire anyone. We pull the permit and arrange the inspection.',
      },
    ],
    whyTitle: 'Why Hyde Park Homeowners Call Us',
    whyParagraph:
      'Hyde Park owners often have years of remodels layered on old wiring, and we sort out which is which. Our electricians are licensed and insured, background-checked and drug-tested. Family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Hyde Park?',
        a: 'You get a flat rate before we start. A three-floor house with a finished basement takes longer than a small bungalow, and a pre-sale inspection covers more than a check before installing a car charger. Financing is available if repairs follow.',
      },
      {
        q: 'What does the inspection cover?',
        a: 'Duke Energy’s meter and service line are theirs, so we begin at the meter base. Then we open the panel, test each breaker or fuse, confirm grounding and bonding, try outlets and their GFCI and AFCI protection, follow any wire showing in the attic or basement, and check the smoke alarms get power. Your report lists it all.',
      },
      {
        q: 'Do I need to use you for the repairs?',
        a: 'No. The report is yours, and you can take it to your own electrician or your remodeling contractor. If we do the work, each item has its own flat price, so you can fold some repairs into a planned renovation.',
      },
    ],
  },
};
