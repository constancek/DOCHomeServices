import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const harrison: LocationServiceCopy = {
  localParagraph:
    'Harrison is one of the newer towns we cover, and that shapes the visit. Census figures show 42.4% of its homes were built in 2000 or later, and 64.5% heat with electricity, so the panel is often doing a lot of work already. Wiring in those houses is usually sound. People book us before a sale or purchase, before adding a charger or hot tub, or after the river has been in the basement. We check everything and give you a price before any repair.',
  emergencyParagraph:
    'Some Harrison problems need us today. A burning smell, a charred or hot cover plate, sparks, or lights that drop when the electric heat kicks on all qualify. So does a breaker that trips again right after a reset; leave it off. Smoke or fire: get out and call 911. Same-day service on most calls, Saturday and Sunday too.',
  commonIntro:
    'Most Harrison homes are newer and heated by electricity, so the findings lean toward capacity and protection more than old wiring:',
  localFaqs: [
    {
      q: 'Our Harrison basement flooded when the Whitewater rose. When can the power go back on?',
      a: 'Only after the wet wiring is checked. News reports from the August 2026 flood describe evacuations and rescues from flooded homes. Outlets, a panel or a furnace circuit that sat in water can fail weeks later. Keep those breakers off, and we test and repair before anything is switched back on.',
    },
    {
      q: 'Who inspects permitted electrical work in Harrison?',
      a: 'The City of Harrison lists Inspection Bureau, Inc. (IBI) for electrical inspections. That is separate from our visit: ours is a safety check of the whole house with a written report, and IBI’s inspector signs off work done under a permit. When a repair needs one, we pull the permit and set up the inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Harrison homes, new and old',
    band1Heading: 'Common Electrical Problems We Find in Harrison Homes',
    commonSituations: [
      'An all-electric house whose panel has no room left for an EV charger',
      'Flood-soaked basement outlets or a panel switched back on without testing',
      'A newer home with no GFCI on the patio, garage or hot tub circuit',
      'Lights that dim each time the electric heat comes on in winter',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Harrison homes never need an electrician to look. A GFCI outlet that tripped can kill power to other outlets in the bathroom, garage or yard; reset it and move on. A breaker that trips once and holds is normal. If the house was built in the last 20 years and the buyer’s inspector found nothing, save your money. Call us for flicker across several circuits, a warm outlet, extension cords serving as permanent wiring, or any wiring that was under water. Before a big new load, we confirm the panel can take it.',
      },
      {
        title: 'Inspection, Repair or Rewire in Harrison?',
        body: 'In a newer Harrison home, rewiring almost never comes up; the inspection usually points to smaller fixes. Loose connections, a breaker that has weakened and missing GFCIs are repairs. A panel carrying electric heat, a dryer and a range with no space for more is when we price a panel replacement. In the handful of pre-war houses, cloth or knob-and-tube wiring gets a rewire quote beside spot repairs. Wiring that sat in floodwater is replaced, not dried out. The report is yours, and you pick who does the work.',
      },
    ],
    whyTitle: 'Why Harrison Homeowners Call Us',
    whyParagraph:
      'Three in four Harrison homes are owned by the people in them, and most are recent builds. We send licensed, insured electricians who pass background checks and drug tests, and price the job before starting.',
    sharedFaqs: [
      {
        q: 'What sets the price of an electrical inspection in Harrison?',
        a: 'Two things: how large the house is and what the inspection is for. A starter home checked before a sale takes less time than a big house getting a charger and a hot tub. You get one flat rate before we start, and repairs are priced apart from it.',
      },
      {
        q: 'What do you go through during a Harrison inspection?',
        a: 'The panel and every breaker, grounding and bonding, outlets and switches, GFCI and AFCI protection, wiring we can see in the garage, basement or attic, and the power supply to your smoke alarms. Each finding is written up so you have a record.',
      },
      {
        q: 'Is the repair work tied to the inspection?',
        a: 'No. You can take the report to any licensed electrician you like. When you want us to do it, each fix gets a flat price you approve before work begins, and there’s financing for something bigger such as a panel.',
      },
    ],
  },
};
