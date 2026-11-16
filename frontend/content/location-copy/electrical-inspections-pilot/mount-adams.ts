import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'Plenty of Mount Adams homes have been renovated since the neighborhood began changing in the late 1960s, and the question is how far the electrical work went. Census figures put half the homes here at 1939 or earlier, and many older houses, doubles and small apartment buildings were updated room by room, so new circuits can sit beside old cloth wire on the same floor. We trace where the update stopped, test the panel and outlets. Then you get a written report with repairs priced first.',
  emergencyParagraph:
    'A few problems shouldn’t sit overnight: a burning smell, an outlet or switch that is warm, darkened or buzzing, sparks, or a breaker that keeps tripping as soon as it’s reset. Switch that breaker off. Smoke or flames mean get out and call 911. Same-day visits on most calls, weekends included.',
  commonIntro:
    'Mount Adams renovations leave a familiar pattern, and these are the findings on most reports:',
  localFaqs: [
    {
      q: 'The house I’m buying in Mount Adams was renovated. Do I need an electrical inspection?',
      a: 'It depends how far the renovation went. A kitchen and bath redo often leaves older wiring in the bedrooms and attic. We check where new work meets old, test the panel and look for open grounds, so you know what you’re buying before closing.',
    },
    {
      q: 'Who issues electrical permits in Mount Adams?',
      a: 'Mount Adams is inside the City of Cincinnati, so permits come from the city’s Department of Buildings & Inspections. A panel change or new circuits need one. We pull the permit and arrange the inspection, and you don’t have to deal with the city yourself.',
    },
    {
      q: 'I rent in Mount Adams and half my outlets don’t work. Who fixes it?',
      a: 'Your landlord, once you tell them in writing. ORC 5321.04 (A)(4) requires Ohio landlords to keep the electrical fixtures they supply in good and safe working order. We inspect wiring, not leases, so the owner books us to track it down.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mount Adams houses, doubles and condos',
    band1Heading: 'Common Electrical Problems We Find in Mount Adams Homes',
    commonSituations: [
      'A renovated kitchen on new circuits while the upstairs still runs on cloth wire',
      'Three-prong outlets added during a remodel with no ground behind them',
      'A double where both units feed from a panel with no spare spaces',
      'Old wiring left live in the attic after a past owner’s partial update',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'If a bathroom or kitchen outlet dies, look for a tripped GFCI before anything else; one reset button can bring back several outlets. A single breaker that trips, resets and holds doesn’t need a visit, and a dark fixture may just need a new bulb. A home with a full, permitted rewire and a clean buyer’s inspection rarely needs us. Book an inspection for fuses, rooms full of two-prong outlets, cords used as wiring, flicker on several circuits, or a Mount Adams purchase where nobody can say how much wiring was replaced.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mount Adams?',
        body: 'We go by what turns up, not just the 1938 median for the neighborhood. An open ground, a scorched terminal or a missing GFCI is a repair. A panel that’s full, undersized for an EV charger or failing gets replaced under a City of Cincinnati Department of Buildings & Inspections permit. Where cloth or knob-and-tube wire still feeds whole floors, we price finishing the rewire beside fixing the worst spots, since half the job is often done already. You keep the report and decide who does the work.',
      },
    ],
    whyTitle: 'Why Mount Adams Homeowners and Landlords Call Us',
    whyParagraph:
      'For a Mount Adams owner, the useful question is what the last renovation left behind, and our report shows it room by room. Licensed, insured, background-checked electricians with a flat price you approve first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Mount Adams?',
        a: 'A flat rate, quoted before we begin. A condo or small house costs less than a double or a small apartment building, and the reason matters as well, from a pre-closing check to a load review before adding an EV charger.',
      },
      {
        q: 'What’s covered in a Mount Adams electrical inspection?',
        a: 'Your panel, breakers or fuses, grounding and bonding, outlets, GFCI and AFCI protection, all visible wiring and smoke alarm power. In renovated homes we pay extra attention to the places where new circuits were joined to older ones.',
      },
      {
        q: 'If you find problems, do I need to hire you to fix them?',
        a: 'No. You get the report to keep, and any licensed electrician can work from it. We give each repair its own flat price, so a Mount Adams owner can finish an earlier renovation’s wiring in stages if that suits.',
      },
    ],
  },
};
