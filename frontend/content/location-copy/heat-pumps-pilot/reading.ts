import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'In Reading, most heat pumps we repair work alongside a gas furnace, since gas heats the large majority of homes. Census figures show 70.8% of Reading homes on gas and 26.6% on electricity, which also counts electric furnaces and baseboard. The median house was built in 1956, and a lot of homes sit in Mill Creek’s mapped floodplain, so basement air handlers and outdoor units in low yards are part of the job. We locate the fault and give you the price before any work starts.',
  emergencyParagraph:
    'Normal January lows at the Cincinnati airport sit close to 23F (NOAA, 1991-2020). In Reading, if the heat pump stops and the gas furnace behind it won’t light, think first of babies, older relatives and anyone who is ill in the house. Our technicians repair heat pumps and dual fuel systems same day on most calls, weekends included.',
  commonIntro:
    'Reading heat pump calls mostly come from 1940s and 1950s houses with a gas furnace backing up the heat pump, plus apartments. These come up most:',
  localFaqs: [
    {
      q: 'Our Reading basement flooded from Mill Creek. Can we run the heat pump?',
      a: 'Not until it’s been checked. If water reached the air handler, the furnace or the outdoor unit, switch the system off at the breakers and leave it off. Flood water damages controls and motors, and running wet equipment can make things worse. We inspect it, tell you what can be saved, and price the repair.',
    },
    {
      q: 'Does Reading require a permit to replace a heat pump?',
      a: 'Yes. The City of Reading lists HVAC units among the work that needs a permit. XPEX runs the building department for the city, and the city’s zoning official reviews projects first. We take care of that filing when we replace a unit. Repairs to the heat pump you already have are quoted at the house.',
    },
    {
      q: 'I rent an apartment in Reading and the heat pump isn’t keeping up. Who fixes it?',
      a: 'Whoever owns the building. Ohio’s ORC 5321.04 says a landlord who supplies heating equipment has to keep it in good and safe working order and provide reasonable heat. Make sure the thermostat is set to heat, then give the manager the details in writing. We fix heat pumps, not leases, so the request goes through the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump and dual fuel repair for Reading homes and apartments',
    band1Heading: 'Common Heat Pump Problems in Reading Homes',
    commonSituations: [
      'A 1950s Reading house where the gas furnace has taken over the heating entirely',
      'An air handler in a basement that took on water from Mill Creek',
      'A heat pump outdoor unit in a low back yard sitting in ice that won’t melt',
      'An apartment heat pump stuck running backup heat around the clock',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Look at the thermostat first; heat is the only mode that heats. Hold the filter up to a window, and if it’s matted gray, change it. In the panel, the outdoor unit and the furnace each have their own breaker; one reset is fine, a second trip is our job. Rake leaves away from the outdoor unit and knock off snow. Defrost makes the unit steam and frost over a little while its fan rests. Warm air back means you don’t need us. Ice that stays, a unit locked in cooling, a grinding fan, or a furnace that won’t light all need a visit. We quote before we repair.',
      },
      {
        title: 'Repair or Replace Your Reading Heat Pump?',
        body: 'The heat pump’s condition decides this, not the house’s age. Reading’s houses are mostly postwar, but the outdoor unit may be only a few years old, and a dead fan motor or defrost control on a newer unit gets fixed. An aging unit that has lost its compressor or keeps leaking refrigerant gets two quotes from us, repair and replace. Flood exposure changes the math: equipment that sat in Mill Creek water may not be worth saving. We handle the city permit when a unit is replaced. In a dual fuel house, watch the Duke Energy gas bill; if it climbs on mild days, the heat pump is slacking.',
      },
    ],
    whyTitle: 'Why Reading Homeowners and Landlords Call Us',
    whyParagraph:
      'Reading has more renters than most suburbs, and Mill Creek flooding adds its own problems. We repair heat pumps for owners and landlords alike, with licensed, drug-tested technicians and a price approved before work starts.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Reading?',
        a: 'It depends on the failed part and the condition of the system. A worn contactor is a short repair; a blower motor or a coil leak takes more time and parts. We find the fault first, then give you a flat-rate price. Nothing starts until you approve it.',
      },
      {
        q: 'Should I repair or replace a Reading heat pump?',
        a: 'If one part failed on a heat pump that’s otherwise sound, repair it. If an older unit needs a compressor, keeps leaking, or sat in flood water, we price replacement next to the repair so you can weigh them. Financing is available if you replace.',
      },
      {
        q: 'Why does my Reading heat pump blow cool air?',
        a: 'A heat pump delivers steady warm air, not the blast a gas furnace gives, so a hand at the register may call it cool. Nothing is wrong there. If the air is cold and the outdoor unit is frozen or quiet, the heat pump has failed, and the furnace in a dual fuel home should take over.',
      },
    ],
  },
};
