import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const harrison: LocationServiceCopy = {
  localParagraph:
    'Most Harrison homes heat with electricity, 64.5% by Census figures, and that number includes electric furnaces along with heat pumps. The city is newer than people think, too: 42.4% of homes date from 2000 or later. That means many no-heat calls here involve fairly young equipment with a single failed part, not a worn-out system. About one home in five is in an apartment building. We find the fault, explain it and give you a price before any repair.',
  emergencyParagraph:
    'Winters here bring about 100 nights a year at or below freezing, by NOAA’s count at the Cincinnati airport. A Harrison home without heat on one of those nights is a real risk for babies, older relatives and anyone who is ill. We repair heat pumps and electric furnaces, most calls the same day, weekends included.',
  commonIntro:
    'Harrison has a lot of electric heat in newer subdivisions, plus apartments and some mobile homes. These four problems come up most:',
  localFaqs: [
    {
      q: 'Our Harrison heat pump sat in floodwater in August. Can we turn it on?',
      a: 'No. Leave an outdoor unit or air handler off if water reached it during the Whitewater River flood. Mud and water can damage the electrical parts and controls, and switching it on can make the damage worse. We inspect it, tell you what can be saved, and price any repair first.',
    },
    {
      q: 'Does Harrison require a permit to replace a heat pump?',
      a: 'Yes. The city’s Department of Buildings and Inspections requires HVAC permits for new installations and replacement units. We take care of the permit as part of a replacement, so you don’t have to deal with the paperwork. Repairing the heat pump you already have, such as a new contactor, is priced and handled on the visit.',
    },
  ],
  overrides: {
    ctaLine: 'Harrison heat pump repair for electric-heat homes',
    band1Heading: 'Common Heat Pump Problems in Harrison Homes',
    commonSituations: [
      'A heat pump from the 2000s with a failed capacitor and a fan that won’t start',
      'An outdoor unit that sat in Whitewater River floodwater',
      'A mobile home heat pump blowing cold air through the floor ducts',
      'An apartment air handler running on backup strips all winter',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Run through the basics first. The thermostat has to be on heat; cool or off will blow unheated air or nothing. A clogged filter can choke the system, so change it. Check two breakers, the outdoor unit’s and the air handler’s. Rake leaves and shovel snow away from the outdoor unit. Steam and light frost, with the fan stopped for a few minutes, are part of a normal defrost. If that clears it up, you don’t need us. Call when the auxiliary heat light stays on or the outdoor unit grinds. We inspect it, and you approve the price before we repair and test it.',
      },
      {
        title: 'Repair or Replace Your Harrison Heat Pump?',
        body: 'Look at the heat pump’s age, not the house’s. With so much of Harrison built since 2000, a lot of equipment here is still young, and a failed fan motor or capacitor on it is a repair. A refrigerant leak or compressor failure on an older unit is the bigger decision, and we lay out repair and replacement prices together. A Duke Energy bill that jumps in an ordinary month usually means backup heat strips are making up for a weak heat pump. Renters: Ohio’s ORC 5321.04 puts heating repairs on the landlord, and we fix heat pumps, not leases.',
      },
    ],
    whyTitle: 'Why Harrison Homeowners Call Us',
    whyParagraph:
      'Electric heat is the norm in Harrison, and we repair the heat pumps and air handlers behind it, from new subdivisions to mobile homes. Licensed technicians come the same day on most calls, with no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does a Harrison heat pump repair cost?',
        a: 'It comes down to what failed. A capacitor on a newer outdoor unit is a quick fix, while a refrigerant leak needs to be found and sealed before a recharge. We give you one flat-rate price after the diagnosis and wait for your approval. Weekend calls carry no overtime fees.',
      },
      {
        q: 'Should I repair or replace the heat pump in my Harrison home?',
        a: 'Check the install date on the unit’s label. Many Harrison systems are young enough that a single failed part is a clear repair. An older unit with a bad compressor or repeated leaks is worth pricing against a new one, and we give you both prices.',
      },
      {
        q: 'Why is my Harrison heat pump blowing cold air?',
        a: 'Some coolness is normal. Heat pump air comes out warm but not as hot as a gas furnace, so it can feel cool on your hand. If it’s truly cold, and the outdoor unit is iced solid or not running, the system has a fault and needs a look.',
      },
    ],
  },
};
