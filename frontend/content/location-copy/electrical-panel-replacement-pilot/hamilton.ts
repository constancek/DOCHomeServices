import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'In Hamilton, Census figures date over a quarter of all houses to 1939 or earlier, and some brick places in the historic areas keep a fuse cabinet or a tiny first panel downstairs. Postwar houses across the city often run out of slots once central air and an electric range arrive. Nearly half of homes are rented. We open the box and test the breakers, the conductors feeding it and the meter socket. When a breaker swap solves it, we say so, and you approve the price first.',
  emergencyParagraph:
    'Certain panel faults can’t sit until Monday. A hot or buzzing cabinet, a charred smell, sooty marks, sparks or a handle that won’t stay put all need us. Wet from a leak means hands off. Switch off only from a dry spot. If there’s smoke, get out and call 911. Same day on most calls, weekends included.',
  commonIntro:
    'From brick houses near the river to postwar streets farther out, these are the signs we hear about in Hamilton.',
  localFaqs: [
    {
      q: 'Does the City of Hamilton need a permit for a new panel?',
      a: 'Yes. The city issues its own electric permits, and only a contractor registered with the city can pull one before work begins. We’re set up for that, so we file the permit and book the inspection. If your house is in a historic area and the meter has to move, we check with the city first.',
    },
    {
      q: 'Who disconnects the power for a panel swap in Hamilton?',
      a: 'The city does. Hamilton runs its own electric utility, not Duke Energy, so the meter and the line to your house belong to the city. Their crew cuts power for the changeover and restores it after the work passes. We schedule that with them, so you don’t have to.',
    },
    {
      q: 'I rent a double in Hamilton and the panel smells hot. What do I do?',
      a: 'Tell your landlord in writing right away, and call them too if it’s hot now. ORC 5321.04 (A)(4) requires Ohio landlords to keep supplied electrical fixtures in good and safe working order. The owner books us and approves the price. We replace panels, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Fuse box and panel replacements for older houses in Hamilton',
    band1Heading: 'Signs a Home in Hamilton Needs a New Electrical Panel',
    commonSituations: [
      'A cellar fuse box in a brick house in German Village',
      'Central air plus a dryer knocking out a 1950s ranch’s panel',
      'Lights in a double that dim when the downstairs range heats up',
      'A box with brown scorch marks and a faint smell of hot plastic',
    ],
    proseSections: [
      {
        title: 'Benefits of a New Electrical Panel for Homes in Hamilton',
        body: 'Houses in Hamilton from before the war were wired for bulbs and a radio, and many postwar boxes filled up long ago. A new panel clears room for the central air, an electric range, a car charger or a heat pump, each on its own breaker, so the kitchen doesn’t go dark when the dryer runs. Fuses come out for good. Every circuit gets a written label, handy in a double where tenants change. On a sale, the buyer’s inspector removes the panel cover first, and a current one avoids an awkward line in the report.',
      },
      {
        title: 'Electrical Panel Repair or Replacement in Hamilton',
        body: 'A prewar address in German Village can have a sound panel, and a 1990s one can have a cooked one, so the inspection makes the call. Swapping a single tired breaker, retorquing one browned lug, or tracing a shorted branch circuit counts as repair, and you keep the cabinet. Fuses, zero free slots for the circuits on your list, charring along the bus, or a discontinued brand forces a replacement. You see both quotes and decide. Ahead of our visit, snap the tripped handle fully off and back on to see if it stays, then push reset on each GFCI near sinks, tubs, the garage and the porch.',
      },
      {
        title: 'Sizing and Permits for a New Electrical Panel in Hamilton',
        body: 'A load count drives the size. We total what the household runs now, add anything planned such as a charger in the garage, and ignore the rating stamped on the old cabinet. A rusted meter socket or a weathered service drop expands the job, and the quote spells that out. City utility crews handle the cutover. Permit filing and the inspector’s visit stay with us.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hamilton Choose Us for Electrical Panel Replacement',
    whyParagraph:
      'Brick houses in the historic areas, postwar ranches and rental doubles across Hamilton are regular work for us. Licensed, insured electricians do every job, and the family has run the company since 1993.',
    sharedFaqs: [
      {
        q: 'How much does a new electrical panel cost in Hamilton?',
        a: 'Expect one fixed figure after our electrician opens the cabinet. It rests on the equipment, how much service the household requires, meter socket repairs and the city permit. Trading an old fuse cabinet for a larger panel runs higher than a straight swap. You approve first, and there are no overtime fees.',
      },
      {
        q: 'What are the signs a panel in Hamilton needs replacing?',
        a: 'Fuses are the obvious one in older brick houses. Beyond that, look for trips whenever the dryer and window units overlap, bulbs that flutter as the furnace fires, a cabinet warm to your palm, a hot-plastic odor, or black streaks. In postwar ranches, a full cabinet stops new circuits.',
      },
      {
        q: 'Why can’t I replace my own panel in Hamilton?',
        a: 'Shutting the main leaves the incoming conductors energized until utility crews pull the meter, and touching them can kill. The city also requires a registered contractor to pull the permit, plus an inspection. Leave this one to a licensed electrician, even if you’re handy.',
      },
    ],
  },
};
