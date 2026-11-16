import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const paddockHills: LocationServiceCopy = {
  localParagraph:
    'Paddock Hills has two kinds of housing, and an electrical inspection looks different in each. The Dutch Colonial and Tudor Revival houses are the older half; Census figures put 41.8% of homes in the area at 1939 or earlier, and those are where ungrounded outlets and old cloth wiring turn up. Another 40.2% went up between 1960 and 1979, many of them in apartment buildings, where small panels and too few circuits are the usual findings. Either way, we test the system and quote any fix before starting.',
  emergencyParagraph:
    'Don’t save these for a booked inspection: a switch or outlet that’s warm, crackling or scorched, a breaker that won’t stay on after a reset, or lights that dip hard when the furnace starts. Turn that breaker off. If there’s smoke or fire, get everyone out and call 911. We see most of these calls the same day, weekends included.',
  commonIntro:
    'Between the older houses off Paddock Road and the apartment buildings near Reading Road, these are the findings we write up most:',
  localFaqs: [
    {
      q: 'Who signs off permitted electrical work in Paddock Hills?',
      a: 'Paddock Hills sits inside Cincinnati, so the city’s Department of Buildings & Inspections issues those permits and sends an inspector to pass the finished job. Treat that as separate from what we sell, which is a whole-house safety review handed over in writing. Repairs needing a permit get one from us.',
    },
    {
      q: 'I rent an apartment in Paddock Hills and an outlet sparks. What should I do?',
      a: 'Unplug whatever was in it and leave that outlet alone. Flip its breaker off if your unit has a panel you can reach, then email or text the landlord so there’s a dated record. Ohio lands that fix on the owner under ORC 5321.04 (A)(4). We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Paddock Hills houses and apartment buildings',
    band1Heading: 'Common Electrical Problems We Find in Paddock Hills Homes and Apartments',
    commonSituations: [
      'Two-prong outlets in a Tudor Revival house that never had a ground run',
      'A 1960s apartment with a small panel and one circuit for most of the living space',
      'Cloth-covered wiring in the attic of an older bungalow',
      'An EV charger or heat pump planned for a panel with no open spaces',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'If you are buying one of the older Paddock Hills houses, or plan to add a hot tub, heat pump or car charger, an inspection tells you what the wiring can take. A fuse box or flicker across several circuits is a good reason on its own. You can skip us when a GFCI has tripped and resets (look in the kitchen, bathroom, garage and outside, since one can shut off others), or when a breaker resets once and holds. A buyer’s home inspector finding nothing in a newer unit is also a fair reason to wait.',
      },
      {
        title: 'Inspection, Repair or Rewire in Paddock Hills?',
        body: 'The report decides it, not the year the house went up. Most findings are repairs, such as a loose lug in the panel or a missing GFCI by the sink. When a panel is too small for what the household now runs, or is wearing out, replacement makes more sense. Where cloth or knob-and-tube wiring fills most walls of an older house, we price rewiring next to targeted repairs so you can compare the two. The report is yours either way, and so is the choice of who does the work.',
      },
    ],
    whyTitle: 'Why Paddock Hills Residents Call Us',
    whyParagraph:
      'We work for the owners of Paddock Hills’ older houses and for the landlords of its apartment buildings, and both get the same flat-rate quote before work. Our electricians are licensed, insured and background checked.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Paddock Hills?',
        a: 'We give a flat rate up front. It depends on the size of the house or unit and on why you want the report: a buyer checking a whole older house needs more of our time than an owner adding one circuit. Nothing starts until you agree to the price.',
      },
      {
        q: 'What does a Paddock Hills inspection include?',
        a: 'We open and check the panel, test breakers or fuses, confirm grounding and bonding, test outlets and GFCI or AFCI protection, follow the wiring we can see, and check that the smoke alarms are powered. On apartment visits we start at the unit’s own panel.',
      },
      {
        q: 'Can I take your Paddock Hills report to another electrician?',
        a: 'Yes. Paying for the visit makes the findings your property, ready for any licensed electrician to bid on. Hand the work to us instead and every item carries a separate flat figure, backed by a plain promise: we make it right, or you don’t pay.',
      },
    ],
  },
};
