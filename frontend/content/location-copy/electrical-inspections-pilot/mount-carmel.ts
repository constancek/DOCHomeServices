import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountCarmel: LocationServiceCopy = {
  localParagraph:
    'Most Mount Carmel homes went up between the 1940s and the 1970s, and that shapes what an electrical inspection finds. Census figures put the median at 1973. Houses from that stretch often have panels sized for far fewer appliances, too few circuits per room, and outlets added over the years without GFCI protection. With 38.7% of homes rented, landlords book us too. We check the whole system, write it up and price repairs first.',
  emergencyParagraph:
    'Call the same day if a Mount Carmel outlet is scorched or hot, a switch hums, you smell something burning, you see sparks, or a breaker pops straight back off. Shut that circuit down at the panel. If smoke or flames appear, get everyone outside and phone 911. We reach most of them that day, weekends included.',
  commonIntro:
    'Mount Carmel calls come from mid-century single homes and from apartments and their owners. Most often we find:',
  localFaqs: [
    {
      q: 'I rent in Mount Carmel. Does my landlord have to fix bad wiring?',
      a: 'Yes. Ohio’s landlord statute, ORC 5321.04 (A)(4), makes the landlord responsible for keeping supplied electrical fixtures in good and safe working order. Put the complaint in writing and keep a copy. The owner or manager books the inspection or repair; we inspect wiring, not leases.',
    },
    {
      q: 'My Mount Carmel basement took on water. What should I do about the wiring?',
      a: 'Keep the power off to anything that got wet, and don’t stand in water to reach the panel. Outlets, furnace or water heater controls, and any panel or subpanel that was under water should be checked before they’re used again; submerged parts usually get replaced. We put the findings in writing.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mount Carmel homes and rental owners',
    band1Heading: 'Common Electrical Problems We Find in Mount Carmel Homes',
    commonSituations: [
      'A 1950s or 1960s panel with every space taken and a subpanel added on later',
      'Kitchens where the countertop appliances all share one circuit',
      'Bathroom and basement outlets that predate GFCI protection',
      'Rental units with extension cords and power strips standing in for missing outlets',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before you book, rule out the easy causes. An outlet that quit in the bathroom, kitchen or garage may be downstream of a tripped GFCI in another room; reset it. One breaker that trips, resets and holds is usually a one-time overload. Do book an inspection when you see two-prong outlets throughout the house, a fuse box still in service, cords tacked along the baseboards, or flicker on more than one circuit. A Mount Carmel house with no recent electrical work that you’re buying or selling is worth a look too. We test, explain and report in writing.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mount Carmel?',
        body: 'Go by the report, not the build year. Most Mount Carmel findings are repairs: loose terminals, a breaker that won’t trip properly, outlets that need GFCI protection or a ground. When a 1950s or 1960s panel is full or failing, we quote a panel replacement. Rewiring comes up only where old cable runs through most of the house. Clermont County’s Permit Central reviews residential work in unincorporated areas like Union Township; for permitted jobs we pull the permit and arrange that inspection. Ours is the safety check before it, and the report is yours.',
      },
    ],
    whyTitle: 'Why Mount Carmel Homeowners and Landlords Call Us',
    whyParagraph:
      'Mount Carmel owners call before a sale or a big appliance; landlords call between tenants. Both get a licensed, insured, drug-tested technician, a written report and a flat-rate price approved before anything is fixed.',
    sharedFaqs: [
      {
        q: 'How much does a Mount Carmel electrical inspection cost?',
        a: 'We give you a flat rate before the visit. Two things set it: how big the home is, and what the inspection is for, such as a sale, a rental turnover or a new heat pump. If we find repairs, each one is quoted separately, and none goes ahead without your approval.',
      },
      {
        q: 'What’s covered in the inspection?',
        a: 'Duke Energy Ohio owns the meter and the line in; we start at the meter base. From there: the panel and whatever breakers or fuses it holds, the ground and bonding, a test of each outlet and switch we can reach, GFCI and AFCI coverage, open wiring in the basement or attic, and smoke alarm power.',
      },
      {
        q: 'Will I have to hire you for the repairs?',
        a: 'Not at all. The report is yours, written plainly enough for another licensed electrician to quote from. If you’d rather we do it, you get a flat-rate price per item, no overtime fees and a satisfaction guarantee.',
      },
    ],
  },
};
