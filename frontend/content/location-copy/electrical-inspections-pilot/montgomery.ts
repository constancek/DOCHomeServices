import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const montgomery: LocationServiceCopy = {
  localParagraph:
    'In Montgomery, an electrical inspection usually comes before a change: selling, buying, finishing a lower level, or adding a car charger, generator or hot tub. Census figures show 34.6% of the city’s homes were built in the 1970s, and 63.0% before 1980. Wiring from that era is grounded and generally holds up, but the panels were sized for a different household, and decades of owner add-ons can hide in basements. We go through all of it, put it in writing, and price fixes before work.',
  emergencyParagraph:
    'These can’t wait until next week: an outlet or switch that is hot, buzzing or discolored, sparks, a burning smell, or a breaker that trips the instant it’s reset. Lights dimming hard when the air conditioning starts count too. Turn the breaker off. With smoke or fire, leave and call 911. Most calls get same-day service, weekends included.',
  commonIntro:
    'Montgomery’s 1960s and 1970s single-family homes tend to produce the same few findings:',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work in Montgomery?',
      a: 'The City of Montgomery Community Development Department handles building permits, and it uses an outside agency for electrical plan review and inspections. That official inspection is separate from ours, which is a safety check of the whole house with a written report. When our findings lead to permit work, we take care of the permit.',
    },
    {
      q: 'Can my Montgomery house handle a whole-house generator or EV charger?',
      a: 'Often it can, but the panel decides. A 1970s panel may be full, or close to its limit once the range, dryer and central air are counted. During the inspection we run a load calculation and tell you whether you need a new circuit, a larger panel, or nothing at all.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Montgomery homes before a sale or upgrade',
    band1Heading: 'Common Electrical Problems We Find in Montgomery Homes',
    commonSituations: [
      'A full 1970s panel with no space for a charger, generator or hot tub circuit',
      'Lower-level rooms wired by a previous owner, with no GFCI protection and open splices',
      'Outdoor and garage outlets that never got GFCI protection',
      'Smoke alarms on battery only, with no hardwired power or interconnection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some fixes take a minute. Kitchen, bath, garage and outdoor outlets usually run off a GFCI, and a tripped one can leave outlets in another room dead; push reset. A breaker that trips once and stays on after you reset it doesn’t need a visit, and neither does a fixture with a burned-out bulb. If you bought recently and the home inspector flagged nothing electrical, you can likely wait. Book us for a sale, a planned addition, a charger or generator, flicker on more than one circuit, or extension cords that became permanent in a Montgomery basement.',
      },
      {
        title: 'Inspection, Repair or Rewire in Montgomery?',
        body: 'Houses from the 1960s and 1970s rarely need rewiring; the findings decide it. Loose terminations, a breaker past its best and missing GFCI protection are repairs. A panel with no room or too little capacity for what you’re adding means a panel or service upgrade, done under permit. A full rewire only gets priced if the inspection shows damage or unsafe work spread through the house. You get the written report and make the call, and you’re free to have any licensed electrician do the work.',
      },
    ],
    whyTitle: 'Why Montgomery Homeowners Call Us',
    whyParagraph:
      'With 90.1% of Montgomery homes owner-occupied, our reports go to the people living there. Our licensed, insured electricians pass background checks and drug tests, and you approve a flat rate before any work.',
    sharedFaqs: [
      {
        q: 'How much does a Montgomery electrical inspection cost?',
        a: 'We quote one flat rate before arriving. It depends on the size of the house and why you’re asking: a pre-sale inspection of a large four-bedroom home covers more ground than checking whether there’s room for one new circuit. Repairs are quoted on their own.',
      },
      {
        q: 'What do you look at in an electrical inspection?',
        a: 'Everything on your side of Duke Energy’s meter. That means the panel and every breaker, grounding and bonding, outlets tested with GFCI and AFCI protection checked, wiring we can see in the basement, garage and attic, and whether smoke alarms are powered.',
      },
      {
        q: 'Will I have to use you for the repair work?',
        a: 'You won’t. The report is yours to share with a buyer, a seller or another licensed electrician. If you do want us, every repair is priced at a flat rate up front and you pick which ones happen. Financing covers bigger items like a panel upgrade.',
      },
    ],
  },
};
