import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northBend: LocationServiceCopy = {
  localParagraph:
    'In North Bend, what an inspection turns up depends on which end of the housing stock you live in. Census figures date 28.8% of homes to before 1940, and those older houses are where we find ungrounded outlets and circuits added one at a time over decades. Another 32.6% went up in 2000 or later; their wiring is usually sound, and owners call before a sale or a big new load. Whichever you have, we test it all and quote any repair first.',
  emergencyParagraph:
    'Don’t wait on a booking for a burning smell, a blackened outlet cover, a switch that buzzes, sparks, or lights that dim hard when an appliance starts. A breaker that trips straight away after a reset counts too; shut it off. Smoke or fire means everyone out and a call to 911. Most North Bend calls get a same-day visit.',
  commonIntro:
    'Between the village’s pre-war houses, its newer homes and its townhouses, a few findings come up again and again:',
  localFaqs: [
    {
      q: 'The Ohio got into my North Bend basement. Is the wiring safe to use?',
      a: 'Not until someone checks it. The river crested at 60.91 feet on the Cincinnati gauge in April 2025, per the National Weather Service, and outlets or a panel that went under can fail later. Leave that power off and we test it first. If your basement stayed dry, there is nothing to inspect.',
    },
    {
      q: 'We’re buying a newer North Bend house. Is an electrical inspection worth it?',
      a: 'Often it isn’t, if the buyer’s home inspector found nothing wrong and the house was built since 2000. It earns its cost when you plan an EV charger, a hot tub or a finished basement, because we confirm the panel has room before you commit to the project.',
    },
    {
      q: 'Do North Bend landlords have a legal duty on the wiring?',
      a: 'Yes. Under ORC 5321.04 (A)(4), Ohio landlords keep the electrical fixtures they provide in good and safe working order. Tenants should put problems to the landlord in writing, and the owner or manager books the visit. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for North Bend homes and townhouses',
    band1Heading: 'Common Electrical Problems We Find in North Bend Homes',
    commonSituations: [
      'A pre-1940 house where a few rooms have three-prong outlets and no ground behind them',
      'A newer home whose panel has no space left for a charger in the garage',
      'Outlets or a panel in a basement the river reached, switched on again without a test',
      'A townhouse with no GFCI protection at the kitchen counter or the patio',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Many North Bend calls we could skip start with a GFCI. Bathroom, garage and outdoor outlets are often chained to one of them, so when they all go quiet, hunt for the tripped one and press reset. A breaker that trips once and stays on after you reset it is fine. A newer house that passed the buyer’s home inspection usually needs nothing from us either. Do book for a fuse box, two-prong outlets in every room, cords standing in for wiring, or flicker on several circuits, and for an older house with a sale ahead.',
      },
      {
        title: 'Inspection, Repair or Rewire in North Bend?',
        body: 'Look at the findings, not the year on the deed. In the newer half of North Bend, the usual answer is a repair or two: a loose terminal, a breaker that no longer trips cleanly, a missing GFCI by the sink. A panel that is undersized or failing gets swapped. In the pre-war half, the question is whether cloth or knob-and-tube wiring still runs through most rooms; if it does, a rewire is quoted beside spot fixes. Our visit ends in a report. Permitted work gets a second, official inspection, arranged by us once the permit is pulled. You decide.',
      },
    ],
    whyTitle: 'Why North Bend Homeowners Call Us',
    whyParagraph:
      'Nearly four in five North Bend homes are owner-occupied, and many owners plan to stay. Our electricians are licensed, insured, background-checked and drug-tested, and you see a flat price before any work begins.',
    sharedFaqs: [
      {
        q: 'What will an electrical inspection in North Bend cost me?',
        a: 'We quote one flat rate up front. It depends on how big the house is and why you want the check: a townhouse looked at for a sale is a smaller visit than a 1930s house before a big addition. Repairs are priced separately, only if you want them.',
      },
      {
        q: 'What does the inspection cover?',
        a: 'Start to finish: the panel and every breaker or fuse in it, grounding and bonding back to the service, outlets and switches, whether GFCI and AFCI devices are where they should be, reachable wiring in the basement, attic and garage, and the supply to your smoke alarms. The report is yours.',
      },
      {
        q: 'If you find problems, am I committed to you for the fixes?',
        a: 'Not at all. The report is yours to hand to any licensed electrician. If we do the work, every item carries a flat price you sign off first, no overtime fees apply, and financing can spread out the cost of something larger.',
      },
    ],
  },
};
