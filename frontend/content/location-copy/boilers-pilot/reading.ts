import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'Reading’s radiator homes are the older ones. Census figures put 23.5% of the city’s houses at 1939 or earlier, and the median home was built in 1956, after forced air had taken over most new building. So a boiler call here usually means one of those pre-war houses or a small apartment building on a central boiler. Pressure loss, a seized pump and cold upstairs rooms are the regular faults, and we name the cause and quote it before work.',
  emergencyParagraph:
    'January nights in Reading drop to about 23F on average (NOAA normals, CVG station), so a house without heat is a real problem for an infant, an elderly parent or someone sick. Let the boiler sit dead through a hard freeze and the radiator piping can be damaged. Most no-heat calls get a technician that day, weekends too.',
  commonIntro:
    'Reading boiler calls come from pre-war houses and rental buildings. The usual problems:',
  localFaqs: [
    {
      q: 'Mill Creek flooded my Reading basement. Is the boiler safe to run?',
      a: 'Don’t run it yet. The city says revised FEMA maps put many Reading homes in the 100-year floodplain, and a boiler that sat in flood water can have damaged gas controls, wiring and burners. Keep it off, and we inspect it and tell you what needs replacing before it fires.',
    },
    {
      q: 'Who handles a broken boiler in my Reading rental?',
      a: 'The landlord. Ohio law (ORC 5321.04) requires owners to keep the heating equipment they supply in good and safe working order and to provide reasonable heat. Tell them in writing. We fix boilers, not leases, so the owner arranges the repair with us.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Reading homes and rental buildings',
    band1Heading: 'Common Boiler Problems in Reading Homes',
    commonSituations: [
      'A basement boiler that sat in Mill Creek flood water and needs checking before it runs',
      'A hot water system whose gauge drops after every refill, pointing to a leak somewhere in the piping',
      'A zone valve that has failed shut, leaving one floor of a pre-war house with no heat',
      'A boiler that short-cycles, firing and shutting down every few minutes',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Before you phone, check the easy things. Raise the thermostat on heat mode until it clicks, and see that the boiler’s power switch wasn’t bumped off. Air collects at the top of radiators; open the bleed valve with a key until water spits. Hot water systems may then need a refill if the dial reads low. If the radiators warm up, save the service fee. Call us when pressure sinks again a few days on, a valve drips, the pipes bang, or a lockout code stops the boiler. Gas odor means walking out, leaving switches alone, and calling the gas company or 911 outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Reading?',
        body: 'Decide on the boiler itself; its plate lists the year it was installed, which may be decades after the house. If it doesn’t leak, a failed circulator, zone valve, igniter or expansion tank gets fixed and you move on. When water weeps from a section, the vessel or the heat exchanger, or we’re back every heating season, you get a replacement quote next to the repair quote, with financing if you want it. Book the annual tune-up in early fall; it takes 60 to 90 minutes and covers pressure, expansion tank, leak checks, safety controls, burner, flue and radiator bleeding. Reading landlords with rental buildings gain the most.',
      },
    ],
    whyTitle: 'Why Reading Homeowners and Landlords Call Us',
    whyParagraph:
      'Plenty of Reading homes are rented, so we work for owners and landlords alike. Every technician is licensed, insured, background-checked and drug-tested, and nobody starts work before you approve the price.',
    sharedFaqs: [
      {
        q: 'How much is boiler repair in Reading?',
        a: 'It turns on the fault. A lockout reset or air in the radiators is short work, and a seized pump or a leaking section is longer. We diagnose first, then hand you a flat-rate price. Work begins only after you approve it, and evenings and weekends cost no extra.',
      },
      {
        q: 'Is my Reading boiler worth repairing?',
        a: 'If it isn’t leaking from the vessel and one part has failed, yes. Pumps, controls and valves are ordinary repairs. If the heat exchanger leaks, or the boiler has needed us every winter, we give you a replacement price beside the repair, with financing available.',
      },
      {
        q: 'Why are a few radiators cold in my Reading house?',
        a: 'Air is the usual reason, and those radiators will be cool across the top. Bleed them and check that the pressure is in range. If they still won’t heat, the radiator valve may be stuck or the circulator may be too weak to push water that far.',
      },
    ],
  },
};
