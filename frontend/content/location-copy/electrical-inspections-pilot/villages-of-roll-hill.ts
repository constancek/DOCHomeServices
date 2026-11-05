import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const villagesOfRollHill: LocationServiceCopy = {
  localParagraph:
    'At the Villages of Roll Hill, management books electrical inspections, not residents. The complex of garden apartments and townhouse rows went up in the 1960s as Fay Apartments and was renovated from 2010 to 2012, and Census figures show 86.4% of homes in the area are rented. Whether that renovation replaced the wiring isn’t on public record, so we inspect each building as we find it. Management gets a written report per unit and a flat price for each repair before any work.',
  emergencyParagraph:
    'Two in three residents here are children, so a hot or scorched outlet, sparks, a burning smell or a breaker that trips right after a reset needs reporting to management at once. Switch that breaker off. With smoke or fire, get everyone out and call 911. When management sends us, we come the same day on most calls, weekends included.',
  commonIntro:
    'In the complex’s garden apartments and townhouses, these are the faults we check for first:',
  localFaqs: [
    {
      q: 'I live at the Villages of Roll Hill. Can I hire you to check my apartment?',
      a: 'Management owns the wiring and decides who works on it, so report the problem to the leasing office in writing and keep a copy. If an outlet is hot or sparking, say so plainly. Ohio’s ORC 5321.04 (A)(4) requires landlords to keep supplied electrical fixtures in good and safe working order.',
    },
    {
      q: 'We manage units at the Villages of Roll Hill. Can you inspect several in one visit?',
      a: 'Yes. Send a list of units and we work through them in one trip, starting with any that have open complaints. Units built to one design tend to have the same weak spots, so findings in one often point to the next. Each unit gets its own report and priced repairs.',
    },
    {
      q: 'Did the 2010 to 2012 renovation rewire the buildings?',
      a: 'The public records we found describe the renovation but not its electrical scope. Panel labels and the wiring itself tell us more, and the inspection report records what each building has. Anything installed during that work has now been in service for well over a decade.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Villages of Roll Hill management',
    band1Heading: 'Common Electrical Problems We Find in Villages of Roll Hill Homes and Apartments',
    commonSituations: [
      'Kitchen and bath outlets where GFCI protection has failed or been removed',
      'Bedroom circuits overloaded by space heaters and window units',
      'Smoke alarms with dead backup batteries or no hard-wired power',
      'Outlets and cover plates damaged between tenants and never replaced',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Managers tend to book us for unit turnovers, a run of tenant complaints, or before adding window units or electric heat across a building. Flicker on several circuits, warm outlets, or breakers tripping in more than one apartment point to a wider look. Before booking, staff can check the easy things: a tripped GFCI often cuts power to other outlets, so reset the ones in the kitchen, bath and outside first. A breaker that resets and holds, a dead bulb, or a lamp plugged into a switched outlet isn’t a fault. Each visit ends with a written report.',
      },
      {
        title: 'Inspection, Repair or Rewire in the Villages of Roll Hill?',
        body: 'For buildings renovated in 2012, most findings are repairs: worn receptacles, loose connections, missing GFCI protection. A panel that keeps tripping under today’s loads may need replacing or extra circuits. A full rewire is unlikely unless the inspection shows original 1960s wiring still in service, and then we price it beside the repairs so management can compare. Our inspection is a safety check; permitted work brings an official inspection, and we pull the permit and arrange it. We inspect wiring, not leases, and the report goes to the owner.',
      },
    ],
    whyTitle: 'Why Villages of Roll Hill Managers Call Us',
    whyParagraph:
      'Managing hundreds of family apartments means needing findings by unit, priced clearly and fixed without fuss. Our electricians are licensed and insured, pass background checks and drug tests, and work at flat rates with no overtime fees.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced at the Villages of Roll Hill?',
        a: 'At a flat rate agreed before we start. It depends on how many units you want inspected, their size, and what the report is for, such as a turnover check or a review after complaints. Management approves the figure first, and there are no overtime fees.',
      },
      {
        q: 'What does an inspection of a Roll Hill unit cover?',
        a: 'The unit’s panel and breakers, grounding and bonding, outlets and their GFCI or AFCI protection, any wiring we can see, and whether the smoke alarms have power. For a whole building we add the shared electrical areas, working from the meter base in. Duke Energy owns the meters themselves.',
      },
      {
        q: 'Does Roll Hill management have to hire you for the repairs?',
        a: 'No. The report belongs to whoever paid for it, and any licensed electrician can work from it. If you choose us, each repair is priced separately so the urgent ones, like hot outlets, get done first and the rest can be scheduled.',
      },
    ],
  },
};
