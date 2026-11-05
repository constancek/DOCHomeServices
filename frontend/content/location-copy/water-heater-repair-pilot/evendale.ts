import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evendale: LocationServiceCopy = {
  localParagraph:
    'Evendale water heater trouble mostly turns up in houses built during the 1980s or 1990s, which make up 57.2% of the village by Census count. Gas service is common here, and nearly every home is a detached house with the heater down in the basement or out in the garage. At that age we usually find a worn component, or a tank that has simply run its course, rather than bad piping. We test, say plainly what failed, and give the price before starting.',
  emergencyParagraph:
    'Water spreading under the heater: close the cold line at its top, then its gas or power. Gas in the air: everybody out, no switches, no relighting, and call the gas company from the driveway. Same for a carbon monoxide alarm. Infants, grandparents and anyone sick need hot water back, so most visits happen that day, weekends too.',
  commonIntro:
    'Evendale work is mostly gas tanks in houses from the 1980s and 1990s. These show up:',
  localFaqs: [
    {
      q: 'Water got into my Evendale basement in a storm. Can I relight the water heater?',
      a: 'No. Mill Creek runs through the village, and a gas heater whose controls were soaked shouldn’t be relit or run until someone checks it, since the control valve and burner can corrode inside. Leave the gas cock off. We inspect it and tell you whether new parts or a new heater make sense.',
    },
    {
      q: 'Does Evendale require a permit for a new water heater?',
      a: 'Plumbing permits for Evendale addresses are issued by Hamilton County Public Health; the village Building Department takes building and HVAC permits. If your replacement needs one, we file it. Repairing what you already have, a fresh thermocouple or element for example, is priced and finished during the visit.',
    },
  ],
  overrides: {
    ctaLine: 'Evendale gas and electric water heater repair',
    band1Heading: 'Common Water Heater Problems in Evendale Homes',
    commonSituations: [
      'A 1990s gas tank whose pilot flickers out over and over',
      'Sediment knocking inside a tank nobody has ever drained',
      'A relief valve leaving a wet ring on the basement floor',
      'A heater that sat in water after a heavy storm',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Plenty of cold-tap calls don’t need us. After laundry and a string of showers, the tank just has to catch up. The knob on the control may have been knocked lower, or the gas cock may be turned off. An electric unit may have a flipped breaker. If the pilot went out and the basement smells normal, the relighting steps are printed on the heater. You do need us for water on the floor, hot water that smells like rotten eggs or runs brown, a pilot that won’t hold, or soot near the burner. We test, quote, and wait for your yes.',
      },
      {
        title: 'Repair or Replace Your Evendale Water Heater?',
        body: 'Read the sticker on the heater, not the deed. Plenty of Evendale houses from the 1980s may already be on a second tank, and the install date tells you more than the year the house was finished. A faulty thermostat, worn anode rod, bad relief valve or broken dip tube can each be swapped. A tank seeping through its own seams is beyond any part. You get both figures and you decide. On a new heater we handle the permit and check the flue and gas connection before lighting it.',
      },
    ],
    whyTitle: 'Why Evendale Homeowners Call Us for Water Heater Repair',
    whyParagraph:
      'Evendale is almost all single-family houses lived in by their owners. We send licensed technicians who have passed background checks, quote a flat rate first, and make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How is water heater repair priced in Evendale?',
        a: 'By the part and the fuel. A thermocouple on a gas heater and an element on an electric one are separate jobs with separate prices. Once the fault is found, you see a flat rate, no work starts without your approval, and weekend calls carry no extra charge for overtime.',
      },
      {
        q: 'Should I fix my Evendale water heater or put in a new one?',
        a: 'Fix it if the tank stays dry and one part has failed. Replace it when water is coming through the tank wall. Since many Evendale homes went up in the same twenty years, the date on the sticker is worth a look. We price both options.',
      },
      {
        q: 'Why does my Evendale hot water run out so quickly?',
        a: 'Sediment or a broken dip tube, most often. Sediment fills the bottom of the tank, and a cracked dip tube lets incoming cold water mix near the top. On electric units, a failed lower element does the same. With no hot water at all, look at the pilot or breaker first.',
      },
    ],
  },
};
