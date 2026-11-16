import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lincolnHeights: LocationServiceCopy = {
  localParagraph:
    'Most electrical inspections in Lincoln Heights are booked by landlords and property managers, because 73.6% of homes in the village are rented. Census figures put the median building at 1973, so we usually find wiring that’s workable and a panel carrying more than it was built for. Nearly half of homes, 47.4%, heat with electricity, and that load shows up fast in winter. We inspect the whole system, hand over a written report, and price each repair before any work begins.',
  emergencyParagraph:
    'If you live in Lincoln Heights and an outlet is hot, a switch buzzes, or you see sparks or smell burning, turn off that breaker and tell your landlord or building manager right away. Smoke or fire: get out and call 911. Owners and managers can book us, and we come the same day on most calls, weekends included.',
  commonIntro:
    'In Lincoln Heights apartments and rented houses, the problems we write up are mostly about load and upkeep:',
  localFaqs: [
    {
      q: 'I rent in Lincoln Heights and an outlet stopped working. Can I hire you?',
      a: 'Not directly. Send your landlord or building manager a dated note; under ORC 5321.04, an Ohio landlord answers for the electrical fixtures in a rental staying in good and safe working order. We inspect wiring, not leases, so it’s the owner or manager who calls us. First, press reset on any GFCI near the dead one.',
    },
    {
      q: 'I own rentals in Lincoln Heights. Why book an inspection?',
      a: 'A written report shows every problem in the building at once, so you can plan repairs instead of chasing tenant calls one at a time. It also gives you a record that the wiring was checked. Each fix is priced separately, and we pull any permit and arrange the inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Lincoln Heights rentals and homes',
    band1Heading: 'Common Electrical Problems We Find in Lincoln Heights Homes and Apartments',
    commonSituations: [
      'Units with electric heat where a breaker trips whenever a space heater runs alongside it',
      'Cracked cover plates and loose receptacles after years of tenant turnover',
      'Kitchen and bathroom outlets with no GFCI protection',
      'Smoke alarms meant to be hard-wired that run on a dead battery, or nothing',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Not every dead outlet is a wiring problem. In a kitchen, bath, garage or outside, look for a GFCI that tripped and press reset, since one can shut off others after it. A breaker that trips once and stays on after a reset is fine. A bulb may be out, or the switch may only control a lamp outlet. Tenants should report anything beyond that to the landlord. Owners should book an inspection for flickering on several circuits, extension cords used as wiring in a unit, two-prong outlets, or before buying a Lincoln Heights building with no recent electrical work.',
      },
      {
        title: 'Inspection, Repair or Rewire in Lincoln Heights?',
        body: 'We go by the findings in each Lincoln Heights unit, not by the building’s age. Loose connections, worn breakers and missing GFCI protection are repairs, often handled in the same visit. A panel that can’t carry electric heat plus today’s appliances is a panel replacement. Rewiring is unusual in buildings from the 1960s and 1970s; if we find old wiring throughout, we price it next to the spot repairs. The report belongs to the owner, who decides what gets done and by whom. Where work needs a permit, that’s on us.',
      },
    ],
    whyTitle: 'Why Lincoln Heights Landlords and Residents Call Us',
    whyParagraph:
      'Landlords get a clear report and a price for each fix before any work starts. Tenants get a licensed, insured electrician who has passed a background check and drug test. We make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Lincoln Heights?',
        a: 'A flat rate, agreed before we come out. It depends on the size of the building or unit and what the owner needs the report for, such as a purchase or a refinance. Repairs on the report are priced item by item, and nothing starts without approval.',
      },
      {
        q: 'What does the inspection cover in a rental unit?',
        a: 'The same as in any home: the panel, breakers or fuses, grounding and bonding, every outlet we can reach and its GFCI or AFCI protection, visible wiring, and whether smoke alarms have power. In a building with several units, we note which panel serves which.',
      },
      {
        q: 'As the owner, do I have to use you for the repairs?',
        a: 'No. The report is the owner’s to keep and share with any licensed electrician. If you want us to do the work, each repair comes with a flat price, and we start only after you sign off on it.',
      },
    ],
  },
};
