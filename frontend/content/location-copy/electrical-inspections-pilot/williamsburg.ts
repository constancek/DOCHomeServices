import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const williamsburg: LocationServiceCopy = {
  localParagraph:
    'Williamsburg has two kinds of houses, and the inspection changes with each. Census figures show 28.8% of homes in the village were built in 1939 or earlier; the ones near Main Street can still carry cloth wiring, ungrounded outlets and screw-in fuses. The rest went up from the 1950s on, and there the usual finding is a panel short of circuits for a modern kitchen and electric heat. Either way, we test the system, write up what we see and quote any fixes before work starts.',
  emergencyParagraph:
    'A Williamsburg outlet hot under your palm, a switch that hums or has gone black at the edges, the smell of melting plastic, sparks, or lights that sag when the dryer starts: shut that circuit off at the panel today. Smoke or flame means leave and dial 911. Expect us the same day on most calls, weekends too.',
  commonIntro:
    'Old houses near the village center and newer streets around them give us a fairly steady list.',
  localFaqs: [
    {
      q: 'Who signs off electrical work in Williamsburg?',
      a: 'Williamsburg leans on Clermont County Building Inspection as its building department. When a repair or panel change needs a permit, we file for it and a county inspector comes out to approve the work. Ours is a different kind of visit: a whole-house safety check that ends in a written report.',
    },
    {
      q: 'I rent in Williamsburg and half my outlets don’t work. What should I do?',
      a: 'First try any GFCI reset buttons. If the outlets stay dead, write to your landlord and keep a copy. Ohio’s ORC 5321.04 (A)(4) puts supplied electrical fixtures on the landlord to keep in good and safe working order, so the landlord or manager books us. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Get a written electrical report on your Williamsburg home',
    band1Heading: 'Common Electrical Problems We Find in Williamsburg Homes',
    commonSituations: [
      'Screw-in fuses still protecting circuits in a pre-1940 house near Main Street',
      'Kitchen counters with one or two outlets carrying every appliance',
      'Apartment units with painted-over outlets and no GFCI near the sink',
      'Buyers of an older village house who want the wiring looked at before closing',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Start simple. In a lot of Williamsburg houses a single GFCI guards outlets in two or three rooms, so look for a tripped one in the bath, kitchen, garage or on the porch and press reset. A breaker that kicked once and stayed on after you reset it was simply overloaded. A lamp outlet run off a wall switch isn’t a fault either. Book an inspection once you’re living with two-prong outlets everywhere, a fuse panel, cords tacked along baseboards, or flicker in more than one room. Buying or listing one of the older village houses is a good moment too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Williamsburg?',
        body: 'A 1920s house with a 1990s panel and a 1960s house with original fuses need very different work, so the findings set the plan. A connection that has loosened, a breaker that’s past it, or a bathroom with no GFCI gets repaired. An undersized, overcrowded or failing panel gets swapped. Where cloth or knob-and-tube shows up in most rooms of an early house, we put a rewire quote beside the targeted repairs so you can weigh both. You keep the report and choose who does the work. Anything needing a permit goes through the county before the walls are closed.',
      },
    ],
    whyTitle: 'Why Williamsburg Homeowners and Landlords Call Us',
    whyParagraph:
      'With nearly four in ten Williamsburg homes rented, we write reports for owners and landlords alike. A family business since 1993, we send licensed and insured technicians who have passed background checks and drug tests.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Williamsburg?',
        a: 'You hear a flat rate and say yes before we start. The size of the house and the reason behind the visit, such as a sale, a new appliance or a rental check, set the figure. Nothing is added once we’re in the door, and a Saturday visit carries no overtime fee.',
      },
      {
        q: 'What’s included in your inspection?',
        a: 'Panel first: each breaker or fuse and how it’s wired. Then grounding and bonding, outlets with their GFCI and AFCI protection, exposed wiring in the basement, attic and garage, and whether the smoke alarms are powered. In the older village houses we also hunt for fuses and cloth-covered runs.',
      },
      {
        q: 'Do I need to hire you to make the repairs?',
        a: 'No. That report is yours to use however you like, and any licensed electrician can quote from it. If a buyer, lender or insurer asks for a written report, you’ll have one. Should you want us for the repairs, each comes with a separate price.',
      },
    ],
  },
};
