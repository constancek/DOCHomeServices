import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'Dry Run is a 1970s-to-2000s suburb of single-family houses, nearly all owner-occupied, and most of them heat with gas. Census figures show 74.7% of homes on gas and 23.5% on electricity, the second number covering electric furnaces and baseboard too. That makes dual fuel the common setup here: a heat pump for milder days and the furnace for hard cold. With a median build year of 1986, many houses are on their second heat pump. We check both systems and price the repair before we start.',
  emergencyParagraph:
    'A January low near 23F is normal at the Cincinnati airport, according to NOAA, and Dry Run sees the same cold. Losing both heat pump and backup is hardest on babies, older relatives and anyone ill. We repair heat pumps and the controls that bring on the furnace, usually the same day, weekends included.',
  commonIntro:
    'Dry Run heat pump calls come from 1980s, 1990s and 2000s houses, most running a heat pump with a gas furnace behind it. These four come up most:',
  localFaqs: [
    {
      q: 'Does Anderson Township require a permit for a heat pump replacement in Dry Run?',
      a: 'Dry Run is unincorporated Anderson Township, where the township handles zoning and the county handles building permits for most improvements. A replacement can need paperwork, and we handle the permit. A repair to your current heat pump, such as a defrost board or fan motor, is priced on the visit.',
    },
    {
      q: 'Is it worth adding a heat pump to my Dry Run gas furnace when the AC dies?',
      a: 'Often, since the heat pump replaces the outdoor AC and the furnace stays as backup. It makes most sense when the furnace and ductwork are in decent shape. If your furnace is near the end too, we’ll say so and price both, rather than pairing a new heat pump with a failing furnace.',
    },
  ],
  overrides: {
    ctaLine: 'Dry Run heat pump repair, quoted flat before work starts',
    band1Heading: 'Common Heat Pump Problems in Dry Run Homes',
    commonSituations: [
      'A 1990s two-story where the heat pump never hands off to the gas furnace',
      'An outdoor unit on a wooded lot clogged with leaves and running short of heat',
      'A second-generation heat pump on original 1980s line sets that keeps losing charge',
      'A thermostat stuck on auxiliary heat with the furnace running all day',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'First, the thermostat should read heat, not cool or off. A filter gone grey with dust gets swapped. Two breakers feed the system, one for the outdoor unit and one for the air handler inside; flip back any that tripped. Keep fall leaves off the sides of the unit and shovel winter snow back from it. Steam off the coil, a thin coat of frost and the fan going quiet for a few minutes all mean it is defrosting. We are needed when ice stays packed on the unit, the fan sits still or you hear grinding. We quote the fix flat before starting.',
      },
      {
        title: 'Repair or Replace Your Heat Pump in Dry Run?',
        body: 'Decide by the heat pump, not the house. A Dry Run home built in 1986 may be on its second outdoor unit, and a failed capacitor or contactor on that one is worth repairing. A refrigerant leak or a compressor that won’t run is the moment we lay a replacement price next to the repair price. In a dual fuel house, a failing heat pump shows up on the gas bill, because the furnace ends up running in weather the heat pump should cover. Financing is available for replacements.',
      },
    ],
    whyTitle: 'Why Dry Run Homeowners Call Us',
    whyParagraph:
      'Dry Run homes are mostly owner-occupied, built after 1970 and run on gas with a heat pump alongside. We repair both. Our technicians are licensed and drug-tested, and you approve a flat-rate price before work.',
    sharedFaqs: [
      {
        q: 'How is heat pump repair priced in Dry Run?',
        a: 'Once we’ve found the fault, you get a flat-rate price for the whole repair, not an hourly meter. A contactor swap is quick; a refrigerant leak needs finding, sealing and a recharge. Nothing happens until you approve, and weekend calls cost the same.',
      },
      {
        q: 'Should I repair or replace the heat pump in my Dry Run house?',
        a: 'Look up the install date on the outdoor unit. A heat pump with one failed part and plenty of years left should be repaired. A compressor failure or a second leak on an older one points toward replacement, and we price both so you decide.',
      },
      {
        q: 'Why does my Dry Run heat pump blow cool air in winter?',
        a: 'Heat pump air comes out warm rather than hot, which feels cool next to a gas furnace. That is fine. Air that is actually cold while the outdoor unit sits iced up or silent means a fault. In a Dry Run dual fuel setup, a furnace that never kicks in points to settings or wiring.',
      },
    ],
  },
};
