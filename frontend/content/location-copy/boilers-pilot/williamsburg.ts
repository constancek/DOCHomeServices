import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const williamsburg: LocationServiceCopy = {
  localParagraph:
    'Boiler work in Williamsburg centers on the older part of the village. Census figures put 28.8% of homes at 1939 or earlier, and those houses were built when radiators were the usual heat. With 52.4% of the village on gas, most boilers we see here are gas-fired hot water or steam systems whose circulator pumps, zone valves and pressure controls have been replaced piecemeal over the years. Newer homes in the village mostly have forced air. We diagnose the problem and give you the price before anything changes.',
  emergencyParagraph:
    'January nights in Williamsburg run near 23F (NOAA normals, CVG station), cold enough that a house without heat turns risky quickly for babies, older relatives and anyone ill. A boiler down through a long cold spell can also put radiator pipes at risk. Most no-heat calls get a technician the same day, weekends included.',
  commonIntro:
    'Williamsburg calls come from the village’s pre-1940 houses and from apartment buildings on a shared boiler. The common ones:',
  localFaqs: [
    {
      q: 'Our Williamsburg apartment building has one boiler and my unit is cold. What now?',
      a: 'Tell the landlord or manager in writing; with a central boiler, the fix is theirs to book. Ohio law (ORC 5321.04) requires landlords to keep supplied heat in good working order. Meanwhile, if your radiator is cold at the top, bleeding it may help. We fix boilers, not leases.',
    },
    {
      q: 'Do Williamsburg home boilers need a state inspection?',
      a: 'No, if it heats a single home or a building of five units or fewer. Ohio’s ORC 4104.04 leaves those out of state inspection, provided steam stays at 15 psi or less and hot water at 160 psi or less. Larger Williamsburg apartment buildings don’t get that pass.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Williamsburg houses and apartments',
    band1Heading: 'Common Boiler Problems in Williamsburg Homes',
    commonSituations: [
      'Radiators in a pre-1940 village house that go lukewarm on the second floor',
      'End units going cold in a small Williamsburg rental building that shares one boiler',
      'A steam boiler that kettles and bangs while it heats up',
      'A relief valve dripping onto the basement floor every few days',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Plenty of no-heat calls in Williamsburg end with a radiator key. Crack the bleed screw on any radiator with a cold top and close it when water appears. A hot water boiler whose needle has slipped below normal after that needs refilling. Next, the thermostat: set to heat, calling for it. Then the boiler switch. If warmth returns, you’ve saved yourself a visit. We should come when the needle falls again within days, the boiler or a valve leaks, it shuts down showing an error, or the burner flame turns yellow. A gas smell means leaving, not touching switches or relighting, and calling the gas company from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Williamsburg?',
        body: 'Read the install date on the boiler’s label before you judge it by the house; a village house from the 1930s can have a boiler only a few years old. Swapping out a dead circulator, a sticking zone valve, an igniter or a waterlogged expansion tank keeps a sound boiler running. Water seeping from a section or the heat exchanger, or a breakdown every single winter, is our cue to quote a new boiler alongside the fix. Each fall, give the yearly service 60 to 90 minutes: we check pressure, the expansion tank, safety limits, burner, flue and weeping joints, then bleed the radiators.',
      },
    ],
    whyTitle: 'Why Williamsburg Homeowners and Landlords Call Us',
    whyParagraph:
      'Williamsburg mixes owner-occupied houses with a good number of rentals. Whoever calls, the technician is licensed, insured and background-checked, there are no overtime fees, and the price is set before the work begins.',
    sharedFaqs: [
      {
        q: 'How much will my Williamsburg boiler repair cost?',
        a: 'That depends on what broke. Clearing a lockout and fitting a new sensor takes little time; a split cast-iron section takes a lot more. The technician tracks down the cause first, then gives you a single flat-rate price, and work begins once you agree. Our guarantee: we make it right, or you don’t pay.',
      },
      {
        q: 'Repair or replace: what’s right for a Williamsburg boiler?',
        a: 'Fix it while the boiler itself is tight and only one component has quit. A bad pump, valve or control is no reason to buy new. Leaks from the vessel or heat exchanger, or a repair every season, shift the math, and then you see a replacement quote beside the repair one, with financing on offer.',
      },
      {
        q: 'Why are some radiators in my Williamsburg house cold?',
        a: 'Air trapped at the top is the most likely cause; bleeding usually clears it. On hot water heat, low pressure starves the radiators farthest from the boiler first. If a radiator stays cold after bleeding and refilling, a stuck valve, blocked pipe or tired circulator pump is next on the list.',
      },
    ],
  },
};
