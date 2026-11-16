import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const norwood: LocationServiceCopy = {
  localParagraph:
    'Norwood’s housing is far older than Hamilton County’s as a whole, and its wiring shows it. Census figures put 66.5% of the city’s homes at 1939 or earlier, against 25.4% countywide, and 26.5% of homes sit in two- to four-unit buildings. So a Norwood inspection often means fuse boxes, ungrounded outlets, cloth-covered wire and separate panels per unit that were updated at different times. We check the full system, give you a written report, and quote each repair before anything is done.',
  emergencyParagraph:
    'An inspection can wait a week; these can’t. A crackling or warm outlet, a scorched switch plate, a burning smell with no clear source, or a breaker that won’t reset without tripping straight away. Flip that breaker off and keep it off. If there’s smoke or fire, everybody out, then 911. Same-day service covers most Norwood calls, weekends as well.',
  commonIntro:
    'In Norwood’s two-families and pre-war single homes, the same problems come up again and again:',
  localFaqs: [
    {
      q: 'I rent half of a Norwood two-family and the lights flicker. Is that my landlord’s job?',
      a: 'Yes. Norwood is its own city, but Ohio law still applies: ORC 5321.04 (A)(4) says landlords keep supplied electrical fixtures in good and safe working order. Put the problem in writing to the owner. We inspect wiring, not leases; the landlord books us and gets the report.',
    },
    {
      q: 'Does Norwood require an electrical inspection before I sell?',
      a: 'No law in Ohio requires one to sell a house. Booking one anyway means the wiring questions on a pre-war Norwood house get answered early. If a buyer, lender or insurer asks for a written report, you’ll have one, and you’ll know about any repairs before they come up in a negotiation.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Norwood houses and two-families',
    band1Heading: 'Common Electrical Problems We Find in Norwood Homes',
    commonSituations: [
      'A screw-in fuse box feeding one unit of a two-family while the other has breakers',
      'Cloth-covered wire spliced onto newer cable inside a basement ceiling',
      'Window air conditioners and space heaters running on the same old bedroom circuit',
      'Outlets changed to three-prong without a ground, which the tester flags at once',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Rule out the simple stuff before booking. Bathrooms, kitchens, basements and outside walls have GFCI outlets, and when one trips it can take others with it; press reset on each. A breaker that tripped once and stays on after resetting is fine. A light out may just need a bulb or the right switch. You need us when a Norwood house still has fuses, when nearly every outlet is two-prong, when cords run under rugs and along walls as permanent wiring, or when flicker shows up on several circuits. A pending sale of a pre-war house is reason enough too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Norwood?',
        body: 'Age points us at the right places, but the findings set the work. Loose connections, a breaker that won’t trip, or no GFCI near water are repairs. A fuse box or a panel too small for today’s appliances means a new panel. Once cloth or knob-and-tube wiring turns out to run through much of the house, a rewire gets priced beside the spot fixes. In a two-family we can quote each unit separately. Our inspection is a safety check; for work that needs a permit, we pull the permit and arrange the official inspection. The report is yours either way.',
      },
    ],
    whyTitle: 'Why Norwood Homeowners and Landlords Call Us',
    whyParagraph:
      '52.5% of Norwood homes are rented, many in doubles with two panels to check. We send licensed, insured electricians who have passed background checks and drug tests, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Norwood?',
        a: 'One flat rate, agreed before we begin. It reflects the size of the building and what the inspection is for; a two-family with two services takes more time than a single house. Repairs from the report get their own flat-rate quotes, and you choose.',
      },
      {
        q: 'What’s included in a Norwood electrical inspection?',
        a: 'Each panel and its breakers or fuses, the service grounding and bonding, outlets throughout with GFCI and AFCI protection tested, exposed wiring in basements and attics, and power to the smoke alarms. In a two-family we do both units and any shared circuits in the basement.',
      },
      {
        q: 'Are we obligated to have you do the repairs?',
        a: 'No obligation. You keep the report and can use any licensed electrician. If you’d like us to handle it, every item is quoted at a flat rate and only the ones you approve get done. Financing is available on panel changes and larger work.',
      },
    ],
  },
};
