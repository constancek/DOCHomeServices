import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const linwood: LocationServiceCopy = {
  localParagraph:
    'Nearly every house in Linwood predates the Second World War. Census figures put 82.1% of homes at 1939 or earlier, with a median of 1938. Along Eastern Avenue and Wooster Pike that means two-family houses and frame singles where the original wiring may still feed some rooms, often behind a panel added decades later. Two-prong outlets and circuits shared between floors are common finds. We trace what’s there, write it up and price any repair before work begins.',
  emergencyParagraph:
    'A few electrical problems need us now, not on a booked inspection date: heat or scorch marks at an outlet, a switch that buzzes, any sparking, or a breaker that won’t stay reset. Shut that breaker off. If you see smoke or flames, get out first and phone 911. We arrive the same day on most calls, including weekends.',
  commonIntro:
    'Linwood’s housing is old and split between owners and renters, with many two-family houses. What we find most:',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work in Linwood?',
      a: 'Linwood is a City of Cincinnati neighborhood, so the Department of Buildings & Inspections issues electrical permits and sends the inspector who approves the job. Our inspection is a different thing: a safety check of the whole system with a written report. When work needs a permit, we pull it.',
    },
    {
      q: 'Water got into my Linwood basement. Should I have the wiring checked?',
      a: 'Yes, if water touched outlets, the panel or any wiring. Keep those circuits off until they’ve been tested, even if everything looks dry. We check for corrosion and damaged insulation, then tell you what’s safe to switch back on and what needs replacing.',
    },
    {
      q: 'I own a Linwood two-family. What do I owe tenants on the electrical side?',
      a: 'Section (A)(4) of ORC 5321.04 makes an Ohio landlord answerable for the wiring, outlets and fixtures that come with each unit. A dated report covering upstairs and downstairs shows what was checked. Have tenants flag trouble on paper, by text or email. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Linwood’s older homes and two-families',
    band1Heading: 'Common Electrical Problems We Find in Linwood Homes',
    commonSituations: [
      'Knob-and-tube still in use on the upper floor of a pre-1940 house',
      'A two-family where each unit’s panel went in at a different time',
      'Basement outlets that sat in water and were switched back on untested',
      'Two-prong outlets with adapters feeding computers and TVs',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'With so many Linwood houses past 85 years old, an inspection makes sense before a sale or purchase, when a landlord takes over a two-family, or before a big new load like a heat pump. Fuses and two-prong outlets in most rooms also warrant one. Before calling, look for a tripped GFCI in the kitchen, bath, garage and outdoors and press reset, since one GFCI can kill power to others. If a breaker trips once, resets and holds, leave it. We test it all and leave a written report.',
      },
      {
        title: 'Inspection, Repair or Rewire in Linwood?',
        body: 'We base the call on the findings. A loose splice or a kitchen outlet without GFCI protection is a repair job. An overloaded or worn panel gets replaced, and in Linwood that work carries a city permit and inspection, which we pull and book. If cloth or knob-and-tube wiring runs through most of the house, we quote rewiring next to spot repairs and let you weigh them. Duke Energy owns the meter and service drop; we work from the meter base in. You keep the report and choose who does the work.',
      },
    ],
    whyTitle: 'Why Linwood Homeowners and Landlords Call Us',
    whyParagraph:
      'Linwood is a small neighborhood of very old houses, roughly half rented, and owners and landlords both want straight answers about wiring. We’re licensed and insured, family owned since 1993, and quote before working.',
    sharedFaqs: [
      {
        q: 'How much does a Linwood electrical inspection cost?',
        a: 'The price is flat and you see it before we start. Bigger houses and two-families take longer, and a full report for a purchase covers more than a look before adding one circuit, so size and purpose set it. There are no overtime fees.',
      },
      {
        q: 'What’s covered in a Linwood electrical inspection?',
        a: 'We start at the panel, breaker by breaker or fuse by fuse, then confirm grounding and bonding. Every reachable receptacle is tested, GFCI and AFCI devices included, exposed runs are followed from cellar to attic, and smoke alarm power is confirmed. Two-families get both units plus the shared cellar wiring.',
      },
      {
        q: 'Do I need to hire you for repairs after a Linwood inspection?',
        a: 'No. You own the report, and any licensed electrician can quote from it. If you pick us, each repair carries its own flat price that you approve first, and we make it right or you don’t pay.',
      },
    ],
  },
};
