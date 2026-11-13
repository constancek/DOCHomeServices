import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Aurora has some of the oldest housing we inspect. Census figures count 38.8% of homes as built in 1939 or earlier, and over a fifth of all homes sit in two- to four-unit buildings. That means cloth-covered or knob-and-tube wiring may still be live in the walls, outlets often lack a ground, and old fuse boxes are still around. Aurora’s riverfront has no levee, so after Ohio River flooding we check what got wet. We report it all and price fixes first.',
  emergencyParagraph:
    'Aurora’s older wiring makes these urgent: a burning smell, a hot, buzzing or blackened outlet or switch, sparks, a fuse that blows or a breaker that trips again after you replace or reset it. Shut off that circuit. If there’s smoke or fire, get everyone out and call 911. We’re there the same day on most calls, weekends included.',
  commonIntro:
    'Aurora inspections mostly involve prewar houses and small buildings split into two to four apartments. What we see most:',
  localFaqs: [
    {
      q: 'My Aurora house is in the downtown historic district. Does electrical work need approval?',
      a: 'Aurora’s downtown district is a local one: the Historic Preservation Commission issues a Certificate of Appropriateness before work other than painting or routine maintenance, and then Dearborn County issues the building permit. If the job moves the meter or service mast on the outside, we check with the commission first.',
    },
    {
      q: 'Should I have my Aurora wiring inspected after a flood?',
      a: 'It’s worth it if the water got high enough to touch outlets, wiring or the panel. Keep that part of the house switched off until we’ve looked. Parts that sat under water, such as breakers and receptacles, usually get replaced, not dried. You get a written list and a price before any work.',
    },
    {
      q: 'I rent an apartment in an older Aurora building. Who deals with wiring problems?',
      a: 'Your landlord. Write down what’s happening, such as a warm outlet or a breaker that won’t stay on, and send it to them. If it sparks or smells hot, turn that breaker off first. They book the inspection or repair. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Aurora’s older homes and apartments',
    band1Heading: 'Common Electrical Problems We Find in Aurora Homes and Apartments',
    commonSituations: [
      'A prewar house with knob-and-tube still live in the attic alongside newer cable',
      'An old house split into apartments, with circuits for each unit added over the years',
      'Fuse boxes holding oversized fuses because the right size kept blowing',
      'Two-prong outlets with three-prong adapters running window units and space heaters',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some things you can check first. A dead outlet in a kitchen, bath, garage or porch is often a tripped GFCI elsewhere on the circuit; press reset. A breaker that trips once and then holds is likely just an overload. Try a new bulb, and a wall switch, before assuming a fault. Book us for a fuse box, ungrounded outlets in most rooms, cords standing in for wiring, flickering on several circuits, or before buying or selling one of Aurora’s prewar houses. A newer home with a clean buyer’s inspection can skip us.',
      },
      {
        title: 'Inspection, Repair or Rewire in Aurora?',
        body: 'Old doesn’t automatically mean rewire in Aurora; the findings decide. A loose splice, a failing breaker or a kitchen without GFCI protection is repair work. A fuse box, or a panel too small for the house or for the apartments carved out of it, gets replaced. Where knob-and-tube or cloth-jacketed cable still feeds most rooms, we quote the rewire and the spot repairs side by side. The report stays yours, and any licensed electrician can bid on it. If the work takes a building permit, we pull it and line up the official inspection.',
      },
    ],
    whyTitle: 'Why Aurora Homeowners and Landlords Call Us',
    whyParagraph:
      'Over a third of Aurora homes are rented, many in older two- to four-unit buildings, so we work for landlords and owners alike. Our electricians are licensed and insured, and the flat rate comes before the work.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Aurora?',
        a: 'One flat rate, quoted before we start. It depends on how big the building is and why you want it inspected; a two-family house takes more than a small cottage. Every repair we find gets its own quote, and you decide on each.',
      },
      {
        q: 'What gets checked in an Aurora electrical inspection?',
        a: 'Fuse box or panel, each fuse or breaker, how the system is grounded and bonded, outlets plus GFCI and AFCI protection, whatever wiring shows in the basement and attic, and whether smoke alarms get power. In Aurora’s prewar houses we also follow any knob-and-tube within reach.',
      },
      {
        q: 'Am I required to hire you for the repairs?',
        a: 'No. The report is yours as soon as the inspection is paid. Get other bids, use it in a sale, or have us price the work. If a buyer, lender or insurer asks for a written report, you’ll have one.',
      },
    ],
  },
};
