import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastPriceHill: LocationServiceCopy = {
  localParagraph:
    'East Price Hill splits into two kinds of electrical job. On the older streets, the houses and three- and four-family buildings date from before 1940, and Census figures put 40.1% of all homes here in that group. Those can still hide knob-and-tube runs and ungrounded outlets. The 1960s apartment buildings usually have sound wiring but panels sized for a different era. With nearly two thirds of homes rented, landlords book most inspections. We check it all and price repairs before work starts.',
  emergencyParagraph:
    'Call us the same day for a burning odor, an outlet or switch that feels hot or looks charred, buzzing, sparking, or a breaker that won’t stay on after one reset. Leave that breaker off. When there’s smoke or fire, nobody should stay inside; call 911 from outdoors. Weekends included, and most calls get a visit that day.',
  commonIntro:
    'From pre-war multi-family buildings to 1960s apartment blocks, here’s what we find most often:',
  localFaqs: [
    {
      q: 'I own a four-family building in East Price Hill. How often should the wiring be inspected?',
      a: 'We suggest one when you buy, after a tenant reports a problem, and before adding laundry, air conditioning or a new kitchen. Under ORC 5321.04 (A)(4) you must keep supplied electrical fixtures in good and safe working order.',
    },
    {
      q: 'Who signs off electrical work in East Price Hill?',
      a: 'The City of Cincinnati Department of Buildings & Inspections handles permits here, and it contracts electrical permits and inspections to Inspections Bureau, Inc. (IBI). When a repair needs a permit, we pull it and an IBI inspector checks the work. Our own inspection is separate: a safety review of the whole system.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for East Price Hill landlords, buyers and owners',
    band1Heading: 'Common Electrical Problems We Find in East Price Hill Homes and Apartments',
    commonSituations: [
      'Knob-and-tube still live in a 1930s three-family',
      'A 1960s apartment building with each unit on a small panel and few kitchen circuits',
      'Window air conditioners plugged into extension cords because a room has one outlet',
      'Shared hallway and basement lighting on a house panel nobody has labeled',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some outages are a reset, not a service call. A GFCI in the kitchen, bathroom, basement or outside can trip and cut power to outlets further down the line, so press each reset button. One breaker that trips, resets and holds is fine. A light that won’t come on may just need a bulb. You do need an inspection when a building has fuses, rooms full of two-prong outlets, cords used as permanent wiring, or flicker on several circuits, or when you’re buying an East Price Hill property that hasn’t had electrical work in years.',
      },
      {
        title: 'Inspection, Repair or Rewire in East Price Hill?',
        body: 'We go by the test results, not the year on the cornerstone. Loose terminals, a breaker that runs hot or a bathroom with no ground-fault protection get repaired. A panel too small for a unit, or one that’s failing, gets replaced. A building where knob-and-tube still feeds most rooms is when we lay out a rewire next to spot repairs, floor by floor if that suits a landlord. Permitted work goes through IBI for the city. The report is yours, and you don’t have to hire us for any of it.',
      },
    ],
    whyTitle: 'Why East Price Hill Landlords and Residents Call Us',
    whyParagraph:
      'Lots of our East Price Hill work is in buildings with three, four or more units, and we write reports a landlord can act on. Licensed, insured, background-checked electricians and a flat price up front.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in East Price Hill?',
        a: 'You get a flat price before we start. A single-family house is one figure; a multi-family building with several panels is another, and the reason for the inspection matters too. There are no overtime fees for evening or weekend visits.',
      },
      {
        q: 'What gets checked in an East Price Hill electrical inspection?',
        a: 'Every panel in the building, breakers or fuses, grounding and bonding, a sample of outlets in each unit, GFCI and AFCI protection, visible wiring in basements and attics, and whether smoke alarms have power. Common-area lighting gets tested too.',
      },
      {
        q: 'Can I get someone else to make the repairs?',
        a: 'Yes. The written report is yours, and any licensed electrician can quote from it. Landlords can spread fixes over time; we mark which items are safety problems so you know what has to happen first.',
      },
    ],
  },
};
