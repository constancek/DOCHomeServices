import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const covington: LocationServiceCopy = {
  localParagraph:
    'Covington homes mostly heat with gas, but electricity covers a large share, so we repair both all-electric heat pumps and heat pumps backed by a gas furnace. Census figures put electric heat at 37.7% of homes and gas at 59.3%. With 44% of the housing built before 1940, a heat pump here was almost always added later, and its refrigerant lines had to find a path through old walls and brick. We trace the fault and price it before any work.',
  emergencyParagraph:
    'The CVG weather station in Boone County records about 100 nights a year at or below freezing, based on NOAA normals. Losing heat on one of those nights puts babies, aging parents and anyone ill at risk first. We repair heat pumps, air handlers and the controls that link them to a furnace, usually that same day, weekends included.',
  commonIntro:
    'Covington heat pump calls come from older houses split between owners and renters. These are the usual problems:',
  localFaqs: [
    {
      q: 'We live in a Covington historic zone. Can the outdoor unit be replaced?',
      a: 'Usually. Covington’s Historic Preservation Overlay zones require a Certificate of Appropriateness before exterior alterations, and the city doesn’t say whether an outdoor unit counts. We check with the Historic Preservation Office first, and pull the HVAC permit from Planning and Development Services of Kenton County.',
    },
    {
      q: 'I rent in Covington and the heat pump stopped. What should I do?',
      a: 'Check the thermostat mode, the filter and the breakers, then tell your landlord in writing, since the equipment is theirs and so is the repair decision. Kentucky doesn’t have Ohio’s landlord heat rules, so your lease usually sets the terms. We fix heat pumps, not leases, and work for the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Covington heat pump repair for homeowners and landlords',
    band1Heading: 'Common Heat Pump Problems in Covington Homes',
    commonSituations: [
      'A heat pump added to a pre-1940 house with its line set run along a brick wall',
      'An air handler in an older multi-unit building stuck on backup heat',
      'A dual fuel system where the furnace carries the house because the outdoor unit failed',
      'An outdoor unit in a tight rear yard buried under drifted snow',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'A thermostat bumped to cool or off looks exactly like a broken heat pump, so look there first. Put in a new filter. Each heat pump has two breakers, so reset a tripped one once. Sweep drifted snow back from the outdoor unit. Defrost makes the unit hiss, steam and frost over lightly, and that is normal. If the heat is back, you don’t need us. Phone us when the coil stays frozen solid, the emergency heat lamp won’t go dark, the system is stuck on cooling, or the fan grinds. You get a diagnosis and a price before anything is fixed.',
      },
      {
        title: 'Repair or Replace Your Covington Heat Pump?',
        body: 'Judge the heat pump, not the age of the house. Plenty of Covington homes from before 1940 have heat pumps that went in much later, and a bad contactor, capacitor or fan motor on a sound unit is worth repairing. A dead compressor or a coil that won’t hold refrigerant on an older system is the real decision point, and we price repair and replacement together. With all-electric heat, a Duke Energy Kentucky bill that spikes in normal weather usually means the backup strips are carrying the load. In a dual fuel house, the same problem shows up on the gas side instead.',
      },
    ],
    whyTitle: 'Why Covington Homeowners and Landlords Call Us',
    whyParagraph:
      'Covington’s old houses, apartments and historic zones each need care with heating work. Every tech we send holds a license, carries insurance and has cleared a background check and drug test, and the flat price is settled before work.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Covington?',
        a: 'The fault sets the price. A failed capacitor outside is a short repair, while a leak in a line set routed through an old brick house can take a while to find. We quote a flat rate once we know what broke, with no overtime charges on weekends, and start only when you approve.',
      },
      {
        q: 'Should I repair or replace my Covington heat pump?',
        a: 'Repair a heat pump that’s sound apart from one failed part. A compressor failure or repeated refrigerant loss on an older unit is the point to compare replacement, and we put both prices in front of you. Financing is available, and in a dual fuel house we check the furnace too.',
      },
      {
        q: 'Why does my Covington heat pump blow cool air?',
        a: 'Covington houses that ran on gas for decades set the bar for hot air at the vents, and a heat pump delivers a milder, steadier stream instead. That part is fine. A real fault looks different: cold air with the outdoor coil packed in ice or the outdoor fan standing still. If a dual fuel furnace never takes over, call.',
      },
    ],
  },
};
