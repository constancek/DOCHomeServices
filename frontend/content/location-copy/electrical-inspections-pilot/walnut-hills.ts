import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walnutHills: LocationServiceCopy = {
  localParagraph:
    'An inspection in Walnut Hills is often for an owner of an apartment building rather than a single house. Census figures show 78.6% of homes here are rented and 48.3% were built in 1939 or earlier. And 63.2% heat with electricity, which puts a heavy, steady load on panels and feeders that were never planned for it. In the oldest buildings we also look for cloth-covered wire and ungrounded outlets. We check the full system, report on it in writing and price any repair up front.',
  emergencyParagraph:
    'If a Walnut Hills unit has a hot smell near an outlet, a scorched plate, sparks, or a breaker that won’t hold for even a minute, skip the scheduled inspection and call. Turn the breaker off. Smoke or fire means getting everyone out and calling 911. Same-day help is available on most calls, weekends included.',
  commonIntro:
    'Around Peebles’ Corner, rowhouses and two-families share blocks with buildings of fifty units or more. In the older stock, these turn up most:',
  localFaqs: [
    {
      q: 'The heat in my Walnut Hills apartment keeps tripping the breaker. Who handles it?',
      a: 'Your landlord. Report it in writing, with dates. Under ORC 5321.04 (A)(4), an Ohio landlord has to keep the electrical fixtures supplied with the unit in good and safe working order. We inspect wiring, not leases; building management calls us, and we find out whether it’s the heater, the breaker or the circuit.',
    },
    {
      q: 'I’m buying a rowhouse in Walnut Hills. Should I get an electrical inspection?',
      a: 'If it dates from before 1940 and has no record of recent electrical work, yes. A general home inspector looks at the panel cover and a few outlets. We open the panel, test circuits and trace the wiring we can reach, then give you a written report before you close.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Walnut Hills buildings and homes',
    band1Heading: 'Common Electrical Problems We Find in Walnut Hills Homes and Apartments',
    commonSituations: [
      'Electric heat in each apartment running on unit panels with no spare capacity',
      'Ungrounded outlets and cloth-covered wire in a rowhouse from the 1800s',
      'Common-area lighting and laundry circuits added piecemeal off an old house panel',
      'A new owner taking over a multi-unit building with no record of past electrical work',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Not every dead outlet is a wiring fault. Check the GFCI outlets in kitchens, baths and any laundry room first, since one trip can take others down with it; press reset. A breaker that tripped during a cold snap and has held since probably just carried too much heat for a moment. If that’s the whole story, you don’t need us. Owners should book an inspection when units still have two-prong outlets, fuses, extension cords doing permanent duty, or flickering on several circuits. Buying an older building with no recent electrical work is a good reason to call us in Walnut Hills too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Walnut Hills?',
        body: 'We decide from what we find, unit by unit. Loose terminals, a breaker that runs hot under electric heat and missing GFCI protection are repairs. A unit panel or building feeder too small for the heating load points to a panel replacement or service upgrade. When cloth or knob-and-tube wire is still carrying most of an old building, we put a rewire price next to the spot repairs so an owner can plan. The report is yours, and another licensed electrician can do the work. We pull the permit and arrange the inspection wherever one is required.',
      },
    ],
    whyTitle: 'Why Walnut Hills Landlords and Owners Call Us',
    whyParagraph:
      'We inspect whole buildings here, not just single units, and write findings an owner can budget from. Our electricians are licensed and insured, background-checked and drug-tested, with flat-rate prices agreed first.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced in Walnut Hills?',
        a: 'By flat rate, quoted before the visit. The number of units and panels sets most of it, along with the reason: a building purchase covers every unit and the service, while one tenant complaint covers one circuit. Financing is available for the repairs that follow.',
      },
      {
        q: 'What does an inspection include?',
        a: 'Each panel and its breakers or fuses, the grounding and bonding, outlets with GFCI and AFCI protection, smoke alarm power, and any wiring we can see in basements, attics and halls. In buildings heated by electricity we also check how loaded each panel runs.',
      },
      {
        q: 'Do I have to hire you after the inspection?',
        a: 'No. Owners here often pass the report to their own electrician. If you hire us, every repair has a separate flat price, and you can schedule them building by building or start with the items that put tenants at risk.',
      },
    ],
  },
};
