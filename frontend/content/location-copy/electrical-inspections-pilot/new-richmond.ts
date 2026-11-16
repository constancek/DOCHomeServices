import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newRichmond: LocationServiceCopy = {
  localParagraph:
    'New Richmond inspections usually follow one of two things: a home sale, or Ohio River water. Census figures put the median home at 1986, with a third built since 2000, so most wiring here is sound. The 12.1% built before 1940 are different; cloth-covered wiring and ungrounded outlets can still turn up in those. After high water, any outlet or panel that sat in it needs checking before the power goes back on. We test everything, write it up and quote any work before starting.',
  emergencyParagraph:
    'Don’t pencil these in for later: burning odors, a cover plate that’s hot or browned, an outlet that buzzes, sparks, or a breaker that keeps tripping after a reset. Cut power to that circuit at the panel; with smoke or fire, get clear of the house and dial 911. We reach most of these the same day, weekends too.',
  commonIntro:
    'New Richmond calls come from older village houses, homes built since 2000, and homes that took river water. What we see most:',
  localFaqs: [
    {
      q: 'The river got into our New Richmond basement. Can we turn the power back on?',
      a: 'Not to circuits that were under water. The National Weather Service notes that at 58 feet on the Cincinnati gauge, homes from Market Street to the river flood, and the river crested near 61 feet in April 2025. Leave those breakers off and have us inspect outlets, boxes and the panel first.',
    },
    {
      q: 'Who handles electrical permits in New Richmond?',
      a: 'Clermont County Building Inspection issues permits inside the village. Our inspection is our own safety check, and you get the written report. The official inspection comes only when repair work needs a permit; we pull it, and the county inspector signs the work off.',
    },
    {
      q: 'I rent in New Richmond. Who books the inspection?',
      a: 'Your landlord does. Report the problem in writing, and switch that breaker off if it smells hot. Ohio’s ORC 5321.04 (A)(4) requires landlords to keep the electrical fixtures they supply in good and safe working order. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for New Richmond homes, including after a flood',
    band1Heading: 'Common Electrical Problems We Find in New Richmond Homes',
    commonSituations: [
      'Basement outlets and a panel that sat in floodwater',
      'A sump pump plugged into a basement outlet with no GFCI protection',
      'Ungrounded outlets in a village house built before 1940',
      'A newer home where a buyer wants a written electrical report',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'If a few outlets in the kitchen, bath, garage or outside go dead, look for a GFCI that tripped and reset it; one can kill power to the rest. A breaker that trips once and holds after a reset is fine, and a newer New Richmond house that came through the buyer’s home inspection clean probably doesn’t need us. Book an inspection after any flood that reached outlets or the panel, when two-prong outlets fill an older house, when cords serve as permanent wiring, or before a sale or a big appliance like a hot tub.',
      },
      {
        title: 'Inspection, Repair or Rewire in New Richmond?',
        body: 'We let the findings decide. A corroded outlet, a breaker that doesn’t trip cleanly or a missing GFCI is a repair. A panel that took water, is too small or is failing gets a replacement quote. If cloth-covered or knob-and-tube wiring runs through much of an older house, we price rewiring next to spot repairs so you can see both. Newer homes rarely get past the repair line. The report is yours to keep, and you can hire anyone to do the work. Any permit, we handle.',
      },
    ],
    whyTitle: 'Why New Richmond Homeowners Call Us',
    whyParagraph:
      'River towns get flood calls, and we know which parts to replace after water and which only need testing. Our electricians are licensed and insured, pass background checks and drug tests, and quote a flat price first.',
    sharedFaqs: [
      {
        q: 'How do you price a New Richmond electrical inspection?',
        a: 'One flat rate, given before we start. The size of the house and the reason, whether a sale or a post-flood check, set it. Fixes found during the inspection get their own quotes, and nothing is done until you approve. Financing is available for bigger repairs.',
      },
      {
        q: 'What does a New Richmond electrical inspection include?',
        a: 'Breakers or fuses, the ground and bond connections, outlets with their shock and arc-fault protection, wiring in plain view, and power to hard-wired smoke detectors. After a flood we also open boxes and the panel to look for rust and river silt, which tell us what has to go.',
      },
      {
        q: 'Do I have to hire you for any repairs?',
        a: 'No. You own the report. Share it with a buyer, keep it on file, or get a second quote from another licensed electrician. If a buyer, lender or insurer asks for a written report, you’ll have one. We don’t tie the inspection to repair work.',
      },
    ],
  },
};
