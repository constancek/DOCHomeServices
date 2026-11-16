import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wyoming: LocationServiceCopy = {
  localParagraph:
    'Boiler work in Wyoming centres on the Victorian and early-1900s homes in the Village area. Census figures put 24.9% of the city’s homes at 1939 or earlier, and those are the houses most likely to have radiators. The post-war ranch and mid-century homes in the Wyoming Hills mostly run forced air, and our furnace repair page covers those. On older radiator systems we test the pump, valves, controls and pressure, find the cause, and quote it before we start.',
  emergencyParagraph:
    'With January lows around 23F at CVG (NOAA normals), a Wyoming house with a dead boiler cools quickly, and babies, older relatives and anyone ill are most at risk. Pipes feeding radiators can be at risk in a long freeze too. We reach most no-heat calls the same day, and weekends are no exception.',
  commonIntro:
    'Most Wyoming boiler calls come from the Village area’s older houses, owner-occupied and heated by radiators. The usual problems:',
  localFaqs: [
    {
      q: 'My Wyoming home is in the Village Historic District. Does that limit a boiler replacement?',
      a: 'Not the boiler inside. The city says homes in the Village Historic District have extra requirements, so if a new boiler needs a vent through an outside wall, we check with the city and its Historic Preservation Commission before planning the vent.',
    },
    {
      q: 'Does a boiler in a Wyoming house need a state inspection?',
      a: 'No. Ohio law (ORC 4104.04) exempts boilers in private homes and in buildings with fewer than six units, as long as steam boilers stay at 15 psi or below and hot water boilers at 160 psi or below. Annual service is still worth booking.',
    },
    {
      q: 'I rent a Wyoming home with a boiler. Who pays for repairs?',
      a: 'Usually the landlord. Under ORC 5321.04, an Ohio landlord who provides the heating has to keep it in good and safe working order and deliver reasonable heat. Send them a written note about the problem. We fix boilers, not leases; the owner normally books us.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Wyoming’s older radiator homes',
    band1Heading: 'Common Boiler Problems in Wyoming Homes',
    commonSituations: [
      'A Victorian house where the third-floor radiators barely warm',
      'A steam boiler that keeps shutting off on low water',
      'Radiator valves seized from decades without being turned',
      'A boiler that kettles loudly as it heats up',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Before booking, try the fixes any Wyoming homeowner can do. Radiators that stay cool along the top are air-bound; loosen the bleed valve until a dribble of water replaces the hiss. If your hot water boiler’s gauge then reads below its usual mark, refill it. Make sure the thermostat wants heat and the boiler’s switch is on. Radiators warming means we aren’t needed. We are for pressure that won’t stay up, water at the boiler or a valve, banging pipes, a cold zone, or repeated lockouts. Gas smell: leave, touch no switches, and call from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Wyoming?',
        body: 'A Village-area Victorian might be well over a century old while its boiler went in recently, so we check the boiler’s data plate, not the house’s history. Worn circulators, zone valves, igniters and expansion tanks come out and new ones go in. Once a cast-iron section, the vessel or the heat exchanger starts to leak, or you’re calling us every winter, you’ll see a replacement price beside the repair price. Each fall a 60 to 90 minute tune-up checks the gauge, relief valve, expansion tank, safety limits, burner and flue, looks for drips and bleeds the radiators. Big houses with many radiators feel that bleeding most.',
      },
    ],
    whyTitle: 'Why Wyoming Homeowners Call Us',
    whyParagraph:
      'In Wyoming 88.9% of homes are owner-occupied, and it’s usually the family in the house who rings us about the boiler. Our techs are licensed, insured, background-checked and drug-tested, and no wrench turns until you okay a flat rate.',
    sharedFaqs: [
      {
        q: 'How much does it cost to fix a boiler in Wyoming?',
        a: 'The part decides the price. Clearing air or replacing a thermocouple is a small job; rebuilding valves on an old steam system or replacing a leaking section is large. We name a flat-rate price after diagnosis and start only once you’ve agreed to it.',
      },
      {
        q: 'When is a Wyoming boiler worth replacing?',
        a: 'When the boiler itself is failing, not one of its parts. A cracked section, a leaking vessel or a repair every season points to replacement, and we’ll quote it next to the fix. A bad pump, valve or control on a sound boiler is just a repair. Financing is available.',
      },
      {
        q: 'Why do some radiators in my Wyoming house stay cold?',
        a: 'In a tall older house, air and low pressure hit the top floor first. Bleed those radiators and top up a hot water system. On steam, a stuck air vent on the radiator does the same thing. If it persists, a closed valve or weak pump is next.',
      },
    ],
  },
};
