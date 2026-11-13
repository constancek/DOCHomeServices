import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const alexandria: LocationServiceCopy = {
  localParagraph:
    'Most Alexandria homes are too new to have a boiler. Census figures show half of them were built after 1994 and only 1.5% in 1939 or earlier, so the typical house here heats through ducts, and our furnace repair team handles those. Radiators turn up in a small number of older houses around the old downtown. When one of those boilers fails, we work out why and give you a set price before we begin.',
  emergencyParagraph:
    'NOAA normals for CVG count about 100 nights a year at or below freezing. If an Alexandria boiler fails on one of them, keep babies, older relatives and anyone who is sick in the warmest room, and know that radiator lines in cold rooms can freeze in a long spell. Most no-heat calls are handled the same day, weekends too.',
  commonIntro:
    'Alexandria boiler calls are few and come mostly from older houses near the original town center. Typical problems:',
  localFaqs: [
    {
      q: 'How can I tell if my Alexandria home runs on a boiler?',
      a: 'Go to the basement or utility room. A boiler has pipes leaving the top and a pressure gauge on the front, and it feeds radiators or baseboard units. A furnace connects to large sheet-metal ducts. If you have a furnace, our furnace repair page is the one you need.',
    },
    {
      q: 'Who handles a gas smell near my Alexandria boiler?',
      a: 'Get everyone out first, and don’t flip switches or try to relight anything. Once outside, call the gas company or 911. After they have made the house safe, we can find what caused the boiler fault and repair it, with the price agreed before we start.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Alexandria’s older homes',
    band1Heading: 'Common Boiler Problems in Alexandria Homes',
    commonSituations: [
      'An older house near downtown with a boiler that has gone years without a service',
      'Baseboard heat that is warm in one room and cool in the next',
      'A boiler that short-cycles, firing and stopping every few minutes',
      'A dripping relief valve after the system was overfilled',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Plenty of no-heat calls can end before we arrive. Turn the thermostat to heat and above the current temperature. Find the boiler’s on and off switch, often on the wall or at the top of the basement stairs, and make sure it’s on. Bleed any radiator that is cool at the top, and if the gauge on a hot water boiler then reads low, add water to bring it back up. Working heat means you don’t need us. Book a visit when one zone stays cold, the boiler kettles or bangs, there’s water around its base, or pressure falls again within a few days.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Alexandria?',
        body: 'The year on the boiler label tells us more than the year your house went up. A boiler with a sound vessel is worth repairing: pumps, valves, igniters and expansion tanks all wear and get replaced. Once the vessel or heat exchanger leaks, or you’ve had a repair each of the past few winters, we price a new boiler as well and let you choose. A yearly check before cold weather takes 60 to 90 minutes and covers pressure, the expansion tank, safety controls, burner, venting, a leak check and bleeding.',
      },
    ],
    whyTitle: 'Why Alexandria Homeowners Call Us',
    whyParagraph:
      'Nearly every Alexandria home is owner-occupied, so we explain the fault to the person paying for it. The technician is licensed and insured, has passed background and drug checks, and quotes a flat price first.',
    sharedFaqs: [
      {
        q: 'What will my Alexandria boiler repair cost?',
        a: 'That comes down to the part that failed. Bleeding a system and resetting a control is short work; replacing a pump or a zone valve takes longer, and a leaking section takes longer again. We quote a flat rate after diagnosing it, and you decide before anything is done.',
      },
      {
        q: 'Repair or replace an older boiler in Alexandria?',
        a: 'Repair, when the vessel is intact and the fault is a part. Replace, when the vessel or heat exchanger has started to leak or the boiler fails every heating season. We give you both numbers so the decision is yours, and financing is there if you need it.',
      },
      {
        q: 'Why is one radiator cold in my Alexandria home?',
        a: 'Air trapped at the top is the usual reason. Open the bleed valve with a radiator key until water comes out, then check that the boiler pressure is in range. If that radiator still stays cold, its valve may be closed or stuck, and we can free or replace it.',
      },
    ],
  },
};
