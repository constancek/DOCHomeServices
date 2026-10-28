import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const norwood: LocationServiceCopy = {
  localParagraph:
    'In Norwood, most central air was added to a house that was never built for it. Census figures show two out of three homes went up before 1940, so ducts run through attics and closets, and the old wiring sometimes needs a new circuit before a condenser can go in. Just over half of households rent, many in brick two-families with a condenser for each unit side by side on a small lot. We track down which unit failed and why, and you see the price before we start.',
  emergencyParagraph:
    'Heat builds fastest in Norwood’s top-floor apartments and the upstairs of old two-families, and older tenants living alone are most at risk. The National Weather Service counts about 21 days a year at 90 degrees or higher in Cincinnati. We repair central air, heat pumps and ductless mini-splits, and most calls get same-day service, weekends included.',
  commonIntro:
    'Most Norwood cooling was added to pre-war houses and two-families long after they were built. These are the repairs we make most often:',
  localFaqs: [
    {
      q: 'I rent in Norwood and my AC quit. Should I call you?',
      a: 'Call your landlord first. Ohio law (ORC 5321.04) requires landlords to keep the appliances they supply in good and safe working order, and that usually includes the air conditioning, so the repair decision sits with the owner. We fix air conditioners, not leases, so anything about the lease terms is between you and your landlord.',
    },
    {
      q: 'Do you work on Norwood two-families with two separate systems?',
      a: 'Yes. About a quarter of Norwood homes are in buildings with two to four units, and most have a separate furnace, coil and condenser for each one. We confirm which condenser serves which apartment before testing, and we price each unit’s repair separately so the owner can see where the money goes.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair for Norwood houses and two-families',
    band1Heading: 'Common AC Problems in Norwood Homes',
    commonSituations: [
      'An upstairs unit in a two-family running warm while downstairs stays cool',
      'A retrofitted attic duct leaking cooled air into the attic',
      'Side-by-side condensers on a narrow lot with one fan stopped',
      'A breaker on an older panel that trips when the AC starts',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Swap the filter and look at the breaker first. If the breaker tripped once and holds after a reset, or a clean filter brings the cold air back, you don’t need a technician. In a two-family, make sure you’re checking your own thermostat and breaker, because labels in older buildings aren’t always right. Renters should report the problem to the landlord before anyone books. Call us if the breaker keeps tripping or the condenser hums without the fan turning. We inspect the indoor and outdoor sides and explain the cause. You approve a flat price before work begins, and we run the system and check the vents afterward.',
      },
      {
        title: 'Repair or Replace Your Norwood AC?',
        body: 'Judge the equipment, not the house. A Norwood home from the 1920s can have a condenser that went in last decade, and that one deserves a repair. A worn-out system with a failed compressor usually doesn’t. In old houses, replacement can mean an electrical upgrade, since the original wiring may not carry a new condenser circuit, and some rooms are better served by a ductless mini-split. The City of Norwood Building Department issues the replacement permit, and we file it. Keep an eye on the electric bill too. If it climbs while the weather stays the same, a slow leak or a matted outdoor coil is the usual reason.',
      },
    ],
    whyTitle: 'Why Norwood Homeowners and Landlords Call Us',
    whyParagraph:
      'Norwood’s pre-war houses and two-families need a technician who expects cramped attics and shared basements. The owner approves a flat price before work starts, and if the repair isn’t right, we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in Norwood?',
        a: 'It depends on the fault, so we test before we price. Replacing a contactor on a side-by-side condenser is quick. Tracing a leak in ducts or line sets run through plaster walls takes longer. You get a flat-rate price to approve before work starts, and evening or weekend visits carry no overtime fees.',
      },
      {
        q: 'Is it worth repairing an older AC in Norwood?',
        a: 'Usually, if the unit itself is fairly young and one part failed. The house being from the 1920s matters less, since the AC was added later. If an aging system’s compressor has failed, replacement often makes more sense, and we may need to check the electrical panel first. We price both options side by side.',
      },
      {
        q: 'Why is my Norwood AC blowing warm air?',
        a: 'Check that the thermostat is set to cool and the filter isn’t clogged. In a two-family, make sure you’re resetting your own unit’s breaker. If the outdoor fan isn’t spinning, a capacitor has probably failed. A refrigerant leak also causes warm air, and confirming that takes a technician’s gauges.',
      },
    ],
  },
};
