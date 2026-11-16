import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const greendale: LocationServiceCopy = {
  localParagraph:
    'Greendale is mostly a mid-century city, and that’s what its inspections look like. Census figures put the median year built at 1958, and over half the houses went up before 1960. Houses from that era often have a small panel, few circuits per room and outlets with no ground, and some have had kitchens and basements updated since. The City of Greendale Electric Department owns the meter and service; we start at the meter base and work through every circuit, then price fixes before anything starts.',
  emergencyParagraph:
    'You schedule a Greendale inspection, but some things jump the queue: a hot-plastic smell, a faceplate that’s warm or discolored, humming from an outlet, sparks, or a breaker that pops back off. Switch it off and keep it off. For smoke or fire, get the household out and phone 911. Most calls see us the same day, weekends included.',
  commonIntro:
    'Most Greendale houses date from the 1940s to the 1970s and have been updated piece by piece. The problems we find most:',
  localFaqs: [
    {
      q: 'Is the panel in my 1950s Greendale house big enough for an EV charger?',
      a: 'Sometimes not. Panels from that era were sized for far fewer appliances, and air conditioning added later often took the last open spaces. We measure the existing load and check the panel’s rating, then tell you if the new circuit fits or a panel replacement comes first.',
    },
    {
      q: 'I live in the Greendale Historic District. Does that limit electrical work?',
      a: 'Greendale’s district is a National Register listing, and we found no local review board, so interior electrical work isn’t affected by it. Anything on the outside of the house, like a new meter base or service mast, we check with the city first.',
    },
    {
      q: 'I rent in Greendale. Who handles electrical problems?',
      a: 'Tell your landlord in writing, and include what you saw: a dead circuit, a warm outlet, a breaker that won’t hold. The landlord or owner books the inspection or repair. We inspect wiring, not leases, so lease questions go to them.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Greendale’s mid-century homes',
    band1Heading: 'Common Electrical Problems We Find in Greendale Homes',
    commonSituations: [
      'A 1950s panel where the central air took the last breaker space years ago',
      'Three-prong outlets put in on old two-wire circuits with no ground behind them',
      'A finished basement wired off one overloaded circuit',
      'Kitchen counter outlets from a 1960s remodel with no GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Greendale homeowners can sort a problem themselves. If outlets in the kitchen, a bathroom, the garage or outside stop working, look for a tripped GFCI and press reset; one GFCI often protects others. A breaker that trips once and stays on is no emergency, and a lamp outlet may just be on a wall switch. Book an inspection for two-prong outlets around the house, an old fuse box, extension cords serving as wiring, flickering on several circuits, or a 1950s house about to be sold or bought.',
      },
      {
        title: 'Inspection, Repair or Rewire in Greendale?',
        body: 'Let the findings steer it, not the 1950s date on the deed. Loose terminals, a breaker that’s worn out or a kitchen counter outlet lacking GFCI protection get repaired. A panel too small for central air plus a modern kitchen, or one that runs warm, gets replaced. Cloth-covered or knob-and-tube wiring across most of the house is the point where we price a rewire, shown beside the spot-repair cost. Any licensed electrician can work from your report. If permits apply, we pull them and the official inspector checks the work.',
      },
    ],
    whyTitle: 'Why Greendale Homeowners Call Us',
    whyParagraph:
      'Greendale is a city of owners, many of them living with the same wiring for years. We send licensed, insured electricians, each background-checked and drug-tested, and quote a flat rate before work starts.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Greendale?',
        a: 'You’ll get a flat rate before we start, worked out from the size of the house and what you need the report for, say a sale or a new circuit. Repairs aren’t included; each one is quoted separately and waits on your approval.',
      },
      {
        q: 'What does the inspection include for a Greendale house?',
        a: 'The panel and breakers or fuses, grounding and bonding, a test of outlets and their GFCI and AFCI protection, a look at all visible wiring, and a check that smoke alarms have power. In mid-century homes we pay close attention to ungrounded outlets.',
      },
      {
        q: 'Do I have to use you for repairs after the inspection?',
        a: 'You don’t. The written report is yours outright, and other licensed electricians can bid from it. Some Greendale owners file it with the house papers for a future sale. Should a buyer, lender or insurer ask for a written report, you’ll have one.',
      },
    ],
  },
};
