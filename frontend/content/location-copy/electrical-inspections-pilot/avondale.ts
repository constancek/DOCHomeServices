import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const avondale: LocationServiceCopy = {
  localParagraph:
    'Avondale inspections are mostly in two-families and three- and four-unit buildings, which make up a big share of the housing here. Census figures put 43.0% of homes at 1939 or earlier, with a lot more from the 1940s through the 1970s. In the oldest buildings we look for cloth wire and ungrounded outlets; in the mid-century ones, panels with too few circuits. With 49.6% of homes on electric heat, we check how hard each panel works in winter. Every finding goes in writing, and repairs are priced first.',
  emergencyParagraph:
    'Some Avondale problems can’t be booked for later: a burning smell, an outlet gone brown around the slots, snapping sounds or sparks, a breaker that trips again right away. Turn that breaker off. If there’s smoke or fire, get people out and call 911. We send someone the same day on most calls, weekends included.',
  commonIntro:
    'With 76.1% of Avondale homes rented, most of our inspections are for owners of small multi-unit buildings. The problems we find most:',
  localFaqs: [
    {
      q: 'I rent in Avondale and the lights flicker whenever the heat runs. What should I do?',
      a: 'Write to your landlord or the building manager and describe it, with dates. Ohio’s ORC 5321.04 (A)(4) requires landlords to keep supplied electrical fixtures in good and safe working order. We inspect wiring, not leases. In managed buildings, management decides who comes out, and we work for them.',
    },
    {
      q: 'I just bought a three-family in Avondale. Where should I start?',
      a: 'With a full inspection before the first new tenant moves in. We check the service, each unit’s panel, grounding and every room’s outlets, then give you a list sorted by urgency. That lets you fix safety items first and plan bigger work, like a panel or rewire, across leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Avondale homes and rental buildings',
    band1Heading: 'Common Electrical Problems We Find in Avondale Homes and Apartments',
    commonSituations: [
      'A two-family where both units run off panels that have been patched for decades',
      'Electric baseboard or furnace heat loading a mid-century panel to its limit in January',
      'Ungrounded outlets and cloth-covered wire in a pre-1940 three- or four-unit building',
      'A new owner of a small rental building with no record of what electrical work was done',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before you book, reset what you can. A dead outlet in a kitchen, bath, basement or outside is often fed through a GFCI somewhere else, and pressing its reset button brings it back. A breaker that tripped once with the heat and microwave going, then stayed on, was an overload. You don’t need us for either. Avondale owners should book an inspection when units still have two-prong outlets, fuse boxes, extension cords standing in for circuits, or flicker on several circuits. Buying an older building with no electrical history is a strong reason too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Avondale?',
        body: 'The findings decide it, not the date on the cornerstone. Loose connections, a breaker that’s worn out, kitchens with no GFCI protection: those are repairs, and most Avondale buildings need some. A unit panel that can’t carry electric heat plus a modern kitchen is a panel replacement. When cloth or knob-and-tube wire still feeds most of a building, we lay a rewire price beside the spot repairs so you can plan by unit. The report belongs to you and any licensed electrician can use it. We pull the permit and arrange the inspection when work needs one.',
      },
    ],
    whyTitle: 'Why Avondale Landlords and Homeowners Call Us',
    whyParagraph:
      'We inspect a lot of small rental buildings and write reports owners can act on unit by unit. Our electricians are licensed and insured, background-checked and drug-tested, and we agree the price first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Avondale?',
        a: 'We quote one flat rate before the visit. It rises with the number of units and panels, and with the reason: a purchase inspection of a four-family covers far more than checking one unit after a tenant complaint. Financing is available for repairs.',
      },
      {
        q: 'What do you check in an Avondale inspection?',
        a: 'The panels and every breaker or fuse, grounding and bonding, outlets and their GFCI and AFCI protection, smoke alarm power and any wiring you can see in basements and attics. Where units heat with electricity, we measure how loaded each panel runs.',
      },
      {
        q: 'Am I required to hire you for the repairs?',
        a: 'No. Hand the report to whichever licensed electrician you like. If you hire us, each repair is priced on its own line and approved before we start, so the work can be split across units and months.',
      },
    ],
  },
};
