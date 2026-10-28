import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const montgomery: LocationServiceCopy = {
  localParagraph:
    'Most Montgomery homes heat with gas, 68.2% by Census figures, so the heat pumps we see here usually run alongside a gas furnace in a dual fuel setup. Electricity heats another 29.8%, a count that also includes electric furnaces. The 1970s was the city’s biggest building decade, and many of those houses got a heat pump long after they were built. We test the heat pump and the furnace controls together, then give you one price before any work.',
  emergencyParagraph:
    'January lows near Cincinnati average about 23F under NOAA’s 1991 to 2020 normals. A Montgomery house without heat in that weather is hardest on babies, grandparents and anyone ill. We repair heat pumps and the furnace controls that pair with them, and most calls get a technician the same day, weekends included.',
  commonIntro:
    'Montgomery calls come mostly from 1970s and 1980s houses with dual fuel systems. These four come up most:',
  localFaqs: [
    {
      q: 'Does Montgomery require a permit to replace a heat pump?',
      a: 'Yes. The City of Montgomery’s Community Development Department requires a building permit for new or replacement heating and air conditioning equipment. We pull it as part of any replacement, so you don’t deal with the paperwork. A repair to your existing heat pump is priced and done on the visit.',
    },
    {
      q: 'I own one of Montgomery’s older landmark houses. Can you replace the outdoor unit?',
      a: 'Yes. Montgomery’s Landmarks Commission makes recommendations rather than issuing approvals, and we haven’t seen a confirmed rule on outdoor equipment. Before moving a unit to a new spot on a landmark property, we check with the city first. A same-spot replacement is the usual job.',
    },
    {
      q: 'My heat pump and gas furnace both run. How do I know which one failed?',
      a: 'Watch it on a mild day. If the furnace fires when it’s not very cold, the heat pump probably isn’t running and the system has switched to gas. If nothing runs, check the furnace switch and both breakers. If you smell gas, leave the house and call Duke Energy from outside.',
    },
  ],
  overrides: {
    ctaLine: 'Montgomery heat pump and dual fuel repair',
    band1Heading: 'Common Heat Pump Problems in Montgomery Homes',
    commonSituations: [
      'A dual fuel system burning gas on mild days because the heat pump stopped',
      'A heat pump retrofitted onto a 1970s house that short-cycles',
      'An outdoor unit frozen solid behind the shrubs',
      'A stuck reversing valve, so the house cools when it should heat',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'A few things are worth checking yourself. The thermostat should be on heat; on cool or off, neither the heat pump nor the furnace runs. A filter clogged with dust slows the blower, so change it. Check both breakers, outside and in. Pull leaves and snow back from the outdoor unit. Frost, steam and a short fan stop are defrost. If that sorts it, you don’t need us. In Montgomery, the sign we hear most is a furnace running constantly on a mild day, which usually means the heat pump has quit. We inspect, explain and quote before starting.',
      },
      {
        title: 'Repair or Replace Your Montgomery Heat Pump?',
        body: 'Look at the heat pump, not the age of the house. Plenty of 1970s Montgomery houses have much newer heat pumps, and a failed fan motor or defrost board on one is a straightforward repair. A dead compressor or a leak that keeps coming back changes the math, and we quote both ways. Because the gas furnace covers for a weak heat pump, a rising gas bill is often the first sign that something is wrong outside. Replacements need a permit, which we handle for you.',
      },
    ],
    whyTitle: 'Why Montgomery Homeowners Call Us',
    whyParagraph:
      'Montgomery owners usually have a gas furnace and often a heat pump beside it, and we work on both. Our technicians are licensed and drug-tested, and our pricing is flat-rate with no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Montgomery?',
        a: 'It depends on the fault, and on a dual fuel system there’s more to test. A failed contactor is quick; a leak or a reversing valve is a longer job. We quote one flat rate, you decide, and only then do we start. Saturday and Sunday visits cost no extra.',
      },
      {
        q: 'Should I repair or replace my Montgomery heat pump?',
        a: 'Repair it if the compressor is healthy and one part has worn out. If the compressor has failed or refrigerant keeps leaking, compare the repair with replacing the heat pump. Your gas furnace can stay if it’s sound. We price both options and offer financing.',
      },
      {
        q: 'Why does my Montgomery heat pump blow cooler air than the furnace?',
        a: 'Heat pumps heat with a steady flow of milder air, so it feels cool next to the hotter blast from a gas furnace. That’s normal. If the air is cold and the outdoor unit is iced over or silent, the heat pump has a fault, and the furnace may be carrying the house.',
      },
    ],
  },
};
