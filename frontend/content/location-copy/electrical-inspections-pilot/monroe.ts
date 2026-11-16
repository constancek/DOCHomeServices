import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const monroe: LocationServiceCopy = {
  localParagraph:
    'Monroe’s houses are mostly young, so our inspections there are planning visits. More than half the homes, 53.3% by Census figures, date from 2000 or later, and their wiring tends to be fine. People call before selling, after buying, or before adding an EV charger, a hot tub or a finished basement, when the question is whether the panel has room. Electric heat in about a third of homes already eats into that panel. We check, write it up and price any work first.',
  emergencyParagraph:
    'Even a young Monroe house can throw an urgent fault. A burning odor, an outlet that’s hot or humming, sparking at a switch, lights that sag when the AC compressor starts, or a breaker that won’t hold after a reset: shut that breaker. Smoke or fire, leave and call 911. Same-day visits on most calls, Saturdays and Sundays included.',
  commonIntro:
    'Monroe’s 2000s subdivisions and its homes from before 1980 turn up different findings. These come up most:',
  localFaqs: [
    {
      q: 'I’m adding an EV charger to my Monroe garage. Do I need an inspection first?',
      a: 'Not by law, but a load check first saves surprises. Many Monroe homes heat with electricity, and a heat pump plus backup heat already draws a lot. We look at the panel’s size, open spaces and the existing load, then tell you if the charger fits or the panel needs work.',
    },
    {
      q: 'Does a Monroe home need an electrical inspection before it sells?',
      a: 'No. Ohio doesn’t require one to sell a house. Sellers book us to find problems before a buyer’s inspector does, and buyers book us when a report raises electrical questions. If a buyer, lender or insurer asks for a written report, you’ll have one.',
    },
    {
      q: 'I rent in Monroe. Who books an inspection if something looks wrong?',
      a: 'Your landlord. Under ORC 5321.04 (A)(4), Ohio landlords answer for the electrical fixtures they provide, which have to stay in good and safe working order. Email or write them with what you’re seeing; they arrange the visit. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Monroe homes, old and new',
    band1Heading: 'Common Electrical Problems We Find in Monroe Homes',
    commonSituations: [
      'A builder-grade panel in a 2000s house with few open spaces left for new circuits',
      'Outdoor and garage GFCI outlets that trip in rain and get left off',
      'A basement finished years after the house, wired off circuits that were already busy',
      'Original smoke alarms in a 2000s house that chirp or have lost their power connection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Monroe calls end without a booking. If the garage or patio outlets die, find the GFCI that tripped and press reset; one GFCI often feeds several outlets. A breaker that trips once and holds after a reset is normal, and so is a lamp outlet that only works from the wall switch. Book us for flickering across several rooms, a breaker that won’t hold, warm outlets, or before you sell, buy or add a large load. A newer house with a clean home-inspection report usually doesn’t need us at all.',
      },
      {
        title: 'Inspection, Repair or Rewire in Monroe?',
        body: 'In Monroe the answer is rarely a rewire. The houses are young, so most findings are repairs: a loose connection at a breaker, a missing GFCI, a box overfilled when the basement was finished. The bigger call is the panel. If it can’t take an EV charger or hot tub on top of electric heat, a panel upgrade goes in the report next to the cheaper option, such as a load-managed charger. You decide, and you can hire anyone for it. If the work needs a permit, we pull it and arrange the official inspection.',
      },
    ],
    whyTitle: 'Why Monroe Homeowners Call Us',
    whyParagraph:
      'Four in five Monroe homes are owner-occupied, and many owners call us before a big change to the house. Our electricians are licensed and insured, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Monroe?',
        a: 'We quote a flat rate before any work starts. It’s set by the size of the house and the reason you want the report, a sale or a new EV charger for example. Repairs aren’t bundled in; each one is priced and waits for your yes.',
      },
      {
        q: 'What does your electrical inspection check in a Monroe house?',
        a: 'Breakers and the panel they sit in, grounding and bonding, every outlet we can get to with GFCI and AFCI protection tested, wiring exposed in the garage, basement or attic, and whether smoke alarms are hardwired and powered. On a 2000s house we pay close attention to anything added since the builder finished.',
      },
      {
        q: 'Do I have to use you for repairs the inspection finds?',
        a: 'No. The report belongs to you once the inspection is paid for. Use it to get quotes from other electricians, to negotiate a sale, or to have us do the work. Monroe homeowners often keep it with the house papers for the next sale.',
      },
    ],
  },
};
