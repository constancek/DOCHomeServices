import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantRidge: LocationServiceCopy = {
  localParagraph:
    'Pleasant Ridge inspections are mostly about pre-war wiring in houses and two-families. By Census figures, 53.8% of the homes around Montgomery Road and Ridge Avenue were built in 1939 or earlier, so we expect to find original circuits extended many times, outlets with no ground and, now and then, knob-and-tube still live in a wall. A two-family usually has two panels, and both get checked. The report spells out what is safe, what isn’t, and what each fix costs before we start.',
  emergencyParagraph:
    'These shouldn’t wait for an inspection date. An outlet that is hot, crackling or charred, sparks from a switch, a smell of burning, or lights that sag whenever the furnace or a microwave starts all count. Switch off that breaker. If there’s smoke or flame, everyone leaves and someone calls 911. Most calls get a same-day technician, weekends too.',
  commonIntro:
    'Pleasant Ridge’s older singles, two-families and small apartment buildings tend to show the same faults:',
  localFaqs: [
    {
      q: 'I own a Pleasant Ridge two-family. What are my electrical duties to tenants?',
      a: 'In Ohio, ORC 5321.04 (A)(4) says a landlord keeps the electrical fixtures supplied with the unit in good and safe working order. A written inspection of both units is a simple way to know where you stand. Tenants should report problems in writing. We inspect wiring, not leases.',
    },
    {
      q: 'Which office handles electrical permits for a Pleasant Ridge address?',
      a: 'Inside city limits it’s the City of Cincinnati Department of Buildings & Inspections, and its inspector signs off permit work. Pleasant Ridge borders Norwood, Golf Manor, Amberley Village and Columbia Township, which have their own offices, so we confirm the jurisdiction for edge addresses before pulling a permit.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Pleasant Ridge homes and two-families',
    band1Heading: 'Common Electrical Problems We Find in Pleasant Ridge Homes',
    commonSituations: [
      'A two-family where the upstairs panel was replaced and the downstairs one never was',
      'Original 1930s circuits extended room by room until nobody knows what feeds what',
      'Ungrounded outlets in a kitchen with a modern fridge, microwave and dishwasher plugged in',
      'Knob-and-tube still energized behind plaster on the second floor',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Start at the GFCI outlets. Kitchens, bathrooms, basements and outdoor spots usually have one, and a single tripped GFCI can knock out outlets further down the line. Reset it before calling anyone. A breaker that trips one time and stays on after you reset it is normal. A dead ceiling light is often the bulb. Call for an inspection when most outlets in a Pleasant Ridge house are two-prong, when the panel is a fuse box, or when extension cords are doing permanent duty. Flickering across several rooms, or buying a pre-war house, belongs on the list.',
      },
      {
        title: 'Inspection, Repair or Rewire in Pleasant Ridge?',
        body: 'We decide from what we find in the walls and the panel. A loose wire on a receptacle, a breaker that won’t hold or a bathroom outlet with no GFCI is a repair. If the panel is undersized for the house or showing heat damage, it gets replaced. Where knob-and-tube or cloth wiring still feeds a large part of the house, a rewire gets priced next to targeted repairs, floor by floor if that helps. The report is yours to use with any electrician. Permit work also gets the city inspector’s sign-off, separate from our safety check.',
      },
    ],
    whyTitle: 'Why Pleasant Ridge Homeowners and Landlords Call Us',
    whyParagraph:
      'Owners and landlords split Pleasant Ridge close to evenly, and many own two-families with a unit on each floor. Our technicians are licensed, insured, background-checked and drug-tested, and we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does a Pleasant Ridge electrical inspection cost?',
        a: 'A flat rate, set before the visit. House size and purpose drive it: a two-family with two panels takes longer than a single home, and a pre-purchase check covers more than a look at one new circuit. Any repairs get their own quote that you approve or decline.',
      },
      {
        q: 'What do you check?',
        a: 'From the meter base inward: the panel, every breaker or fuse, the grounding and bonding, a sample of outlets in each room with GFCI and AFCI protection tested, the visible wiring in the basement and attic, and power to the smoke alarms. Problems are listed in plain words in the report.',
      },
      {
        q: 'Can I use another electrician for the repairs?',
        a: 'Yes. The report belongs to you, and any licensed electrician can work from it. You can do the urgent items now and the rest later. If you hire us, each repair is quoted at a flat rate first, with financing on larger jobs.',
      },
    ],
  },
};
