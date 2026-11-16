import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const riverside: LocationServiceCopy = {
  localParagraph:
    'Riverside is newer than its neighbors along River Road. Census figures put the median build year at 1971, and about half the homes went up between 1970 and 1999, so the wiring we open is usually sound copper on breakers. The older houses are the exception, with fuse boxes and ungrounded outlets still turning up. People here mostly book us for a sale, a landlord’s check on an apartment building, or a new heat pump or charger. We test everything, then quote fixes before starting.',
  emergencyParagraph:
    'If an outlet is hot to the touch, a cover plate has scorch marks, you hear crackling in a wall or smell burning plastic, cut power to that circuit and don’t reset it. A breaker that won’t stay on is telling you something. Fire or smoke: get out first, then call 911. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Riverside’s mix of 1970s apartment buildings and older river houses gives us a short list of repeat findings:',
  localFaqs: [
    {
      q: 'The river got into my Riverside basement. Is the wiring safe to turn back on?',
      a: 'Not until it’s been checked. Breakers, outlets and panels that sat in floodwater can fail later even if they look dry. Leave that power off and have us test everything below the waterline, then replace what got wet. We pull the permit and arrange the inspection if the panel has to go.',
    },
    {
      q: 'My apartment in Riverside keeps losing power to one room. What should I do?',
      a: 'Check for a tripped GFCI or breaker first. If it keeps happening, report it to your landlord in writing. Ohio’s ORC 5321.04 (A)(4) requires landlords to keep the electrical fixtures they supply in good and safe working order. We inspect wiring, not leases; management books us.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Riverside houses and apartment buildings',
    band1Heading: 'Common Electrical Problems We Find in Riverside Homes and Apartments',
    commonSituations: [
      'Outlets and breakers in a basement that took on water when the Ohio rose',
      'A 1970s apartment building with original breakers that no longer trip cleanly',
      'Fuses and ungrounded outlets in the river houses built before 1940',
      'Bathrooms and kitchens in older units with no GFCI protection at all',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Riverside homes don’t need a full inspection. Wiring from the 1970s onward is usually fine, so if the buyer’s home inspector found nothing, you can likely skip us. A dead bathroom outlet often comes back once you reset the GFCI, which may be in the kitchen, garage or outside. One tripped breaker that stays on after a reset is no emergency. Book us for flicker on several circuits, warm cover plates, or a building that has had no electrical work since it went up.',
      },
      {
        title: 'Inspection, Repair or Rewire in Riverside?',
        body: 'The test results drive this, whatever year the building went up. A breaker that won’t trip, a loose lug or an outlet missing GFCI protection is a straightforward repair. A panel that’s undersized or shows corrosion gets replaced, and we pull the permit and arrange the inspection for that. Rewiring is rare in the newer buildings; in a pre-1940 river house with cloth wire throughout, we price it beside targeted repairs. Duke Energy owns the meter and service drop; we work from the meter base in. You decide what gets done.',
      },
    ],
    whyTitle: 'Why Riverside Residents and Landlords Call Us',
    whyParagraph:
      'We work on both the apartment blocks and the older river houses along Route 50. Licensed, insured electricians who pass background checks and drug tests, a written report, and a flat price you approve first.',
    sharedFaqs: [
      {
        q: 'How much does a Riverside electrical inspection cost?',
        a: 'A flat rate, quoted before we start. A single house costs less than a multi-unit building, and a quick pre-sale check costs less than a full load review before a heat pump. Tell us the size and the reason when you book and we’ll give you the number.',
      },
      {
        q: 'What’s included in an electrical inspection in Riverside?',
        a: 'We check the panel, each breaker or fuse, grounding and bonding, outlets, GFCI and AFCI protection, all the wiring in view, and that smoke alarms have power. In an apartment building we also look at the meter bank and each unit’s subpanel.',
      },
      {
        q: 'Do I have to use you for the repairs on my Riverside property?',
        a: 'No. You own the report, and you can hand it to whichever licensed electrician you like. We list each fix with its own price so a landlord can do the safety items now and plan the rest around the budget.',
      },
    ],
  },
};
