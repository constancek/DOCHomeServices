import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'In Moscow, central air almost always came after the house did, since Census figures show most homes here predate 1940. The ducts and line sets were fitted in later, so upstairs rooms lag first. Many homes heat with electricity, usually through a heat pump. The National Weather Service says much of the village floods at 63 feet on the Meldahl Dam gauge. If your condenser sat in floodwater, leave it off until we test it. We find the fault and price it before starting.',
  emergencyParagraph:
    'An old Moscow house with a dead AC heats up from the top down, and the upstairs bedrooms get the worst of it, which matters most for older residents. Cincinnati’s official weather records average about 21 days a year at 90 degrees or higher. We repair central air and heat pumps, same day on most calls, weekends included.',
  commonIntro:
    'Most Moscow homes are prewar houses with central air added later. These are the repairs we see most:',
  localFaqs: [
    {
      q: 'Do you come out to Moscow the same day?',
      a: 'On most calls, yes, weekends included. Moscow is a small village on the river in southern Clermont County, but the drive doesn’t change how we price. You get a flat rate to approve before work starts, and evenings and Saturdays cost the same.',
    },
    {
      q: 'Why does my Moscow heat pump struggle to cool upstairs?',
      a: 'In a house built before central air, the ducts were added later and the upstairs runs tend to be long and undersized. A heat pump loses ground if its outdoor coil is dirty or its refrigerant is low. We check the charge and airflow, and if the ducts are the limit, we tell you rather than sell a bigger unit.',
    },
  ],
  overrides: {
    ctaLine: 'Moscow AC repair for prewar village homes',
    band1Heading: 'Common AC Problems in Moscow Homes',
    commonSituations: [
      'Upstairs bedrooms in a prewar house that never catch up',
      'A heat pump that ices over on humid afternoons',
      'A line set leaking where it passes through an old exterior wall',
      'A condenser that hums while its fan won’t turn',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Swap the filter, put fresh batteries in the thermostat and reset the breaker before you pick up the phone. If cold air returns, you don’t need us. Call when the breaker won’t stay on or the unit outside hums with a motionless fan. In Moscow’s older houses, also look at where the copper lines enter the wall; oily residue there usually means a refrigerant leak. Our technician checks both units and explains the fault in plain words. You approve a flat-rate price before work begins, and we test the air at the vents once the repair is done.',
      },
      {
        title: 'Repair or Replace Your Moscow AC?',
        body: 'Judge the equipment, not the house. A Moscow house built before 1940 can have a heat pump that’s only a few years old, and that unit deserves a repair when a capacitor or fan motor fails. An old system with a dead compressor usually doesn’t. Clermont County Building Inspection issues the replacement permit. For homes in the floodplain, a swap may also need a county flood permit; that isn’t settled, so we check before we schedule. Short of that, watch your electric bill. If it rises in an ordinary month, a dirty coil or a slow leak is usually why.',
      },
    ],
    whyTitle: 'Why Moscow Homeowners Call Us',
    whyParagraph:
      'We drive to Moscow for a single repair, and we know how central air gets fitted into prewar houses. Our technicians are licensed and drug-tested, and if the repair isn’t right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in Moscow?',
        a: 'The price follows the fault, so we test before we quote. A failed capacitor is a short visit, while tracing a leak along a line set inside an old wall takes longer. Either way you see one flat-rate price and approve it before we start, with no overtime charge for evenings or weekends.',
      },
      {
        q: 'Should I repair or replace an old AC in Moscow?',
        a: 'Go by the unit’s own age and what broke. One failed part on a newer system is worth fixing, even in a prewar house. A worn-out compressor on an old system usually isn’t, and we’ll price repair and replacement together so you can compare them before deciding.',
      },
      {
        q: 'Why is my Moscow AC blowing warm air?',
        a: 'Set the thermostat to cool, lower it a few degrees and confirm the breaker hasn’t tripped. A heat pump can blow warm in summer if it’s stuck in heat mode, and a still outdoor fan usually points to a capacitor. If both look normal, the refrigerant may be low, which means a leak for us to find.',
      },
    ],
  },
};
