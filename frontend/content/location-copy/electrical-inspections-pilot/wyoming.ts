import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wyoming: LocationServiceCopy = {
  localParagraph:
    'Wyoming built more houses in the 1950s than in any other decade, 30.1% of them by Census figures, and that sets the tone for most electrical inspections we do here. Panels from those years were put in for a fridge, a radio and a few lamps, and kitchens and bedrooms were often wired on one or two circuits. About a quarter, 24.9%, is older still, around the Village, where cloth-covered wire can still turn up. We write up every finding and price any fix before you choose.',
  emergencyParagraph:
    'Don’t hold these for an inspection: a warm switch plate, an outlet that crackles or has a brown ring, a smell like melting plastic, or a breaker that flips off the second you push it up. Leave it off. Smoke or flame means out of the house and 911. In Wyoming most of these get a same-day visit, weekends too.',
  commonIntro:
    'In Wyoming the findings depend on which side of 1950 the house went up. These come up most:',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work in Wyoming?',
      a: 'The city routes electrical permits to Inspection Bureau, Inc., known locally as IBI. That visit is the official one, and it only happens after permitted work. Ours comes before: a look at the entire system, ending in a written report. If repairs follow and need a permit, we file it and book IBI.',
    },
    {
      q: 'Is a pre-purchase electrical check worth it in Wyoming?',
      a: 'For a 1920s house by the Village that nobody has rewired, usually yes. For a 1990s house the buyer’s home inspector cleared, usually no. Ohio sets no inspection requirement for a sale, but a report in hand before closing tells you what the panel and wiring will need.',
    },
    {
      q: 'I rent out a house in Wyoming. What does Ohio expect from me?',
      a: 'Section 5321.04 (A)(4) of the Ohio Revised Code puts the duty on landlords: the electrical fixtures you supply stay in good and safe working order. Have tenants flag problems on paper or by email, and book the visit yourself. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Wyoming homes, pre-war and mid-century',
    band1Heading: 'Common Electrical Problems We Find in Wyoming Homes',
    commonSituations: [
      'Every breaker slot taken in a 1950s panel, with a kitchen remodel or car charger on the list',
      'Ungrounded outlets in a pre-war house by the Village, dressed up with three-prong covers',
      'Two bedrooms and a hall on one circuit that a space heater keeps knocking out',
      'Cloth-jacketed cable found mid-remodel once the plaster came down',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of calls in Wyoming are solved with a fingertip. Outlets in a bathroom or garage often hang off a GFCI elsewhere, and when that one trips, the rest go quiet; push its reset button. A breaker that flipped once and has behaved since doesn’t need a visit, and a lamp that won’t light usually needs a bulb. Book us when every outlet is two-slot, a fuse box still runs the house, lights dip on more than one circuit, or extension cords have turned into wiring. Selling, buying or adding a heavy load such as a heat pump also justifies one. We test, explain and leave a written report.',
      },
      {
        title: 'Inspection, Repair or Rewire in Wyoming?',
        body: 'The findings settle it, not the decade. A neutral that has worked loose, a breaker that won’t latch, or a bath outlet missing GFCI protection we simply fix. A 1950s panel without the room or amperage for a car charger is a swap. When cloth or knob-and-tube wire still feeds most rooms of an older house near the Village, you see two numbers side by side: a full rewire and the spot repairs. IBI signs off anything permitted. Duke Energy Ohio is responsible up to the meter; we start at the meter base. Who does the repairs is your call.',
      },
    ],
    whyTitle: 'Why Wyoming Homeowners Call Us',
    whyParagraph:
      'Owners live in close to nine in ten Wyoming homes, so calls here tend to come ahead of a sale or an addition. Every electrician we send is licensed, insured and has passed a background check and drug test.',
    sharedFaqs: [
      {
        q: 'What will an electrical inspection in Wyoming cost?',
        a: 'One flat figure, given to you before any testing begins. A three-bedroom house checked for a sale is priced differently from a ranch being checked before a car charger goes in, because we look at different things. We never add overtime fees, and the figure you agree to holds.',
      },
      {
        q: 'What gets checked during the visit?',
        a: 'The panel comes first: every breaker or fuse, plus grounding and bonding. Outlets get a tester for ground, and kitchens, baths and bedrooms are checked for GFCI or AFCI protection. We trace visible cable in the basement and attic and confirm each smoke alarm is getting power. Then you get it in writing.',
      },
      {
        q: 'Am I locked into using you for repairs?',
        a: 'No. Once it’s written, the report belongs to you, and any licensed electrician in Wyoming can quote off it. Should you choose us, each item carries its own flat price before work, backed by our guarantee: we make it right, or you don’t pay.',
      },
    ],
  },
};
