import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'In Moscow a no-heat call rarely involves gas. Census figures show 63.2% of homes heat with electricity and 14.5% with fuel oil, while only a handful use gas, so our work here is mostly electric furnaces, heat pumps and oil burners. Most of the village’s houses predate 1940, so the heating was added or rebuilt long after the walls went up, and the village sits on low ground by the Ohio River. We find the fault and give you a firm price before any work begins.',
  emergencyParagraph:
    'No heat in a Moscow house means checking on the baby, the grandparents and anyone sick before anything else. January lows run around 23F by NOAA normals, and an old riverside house with no heat sheds warmth fast enough to put pipes at risk. We repair electric and oil heat the same day on most calls, weekends included.',
  commonIntro:
    'Moscow homes mostly heat with electricity or fuel oil, in houses built before 1940. These are the calls we get most:',
  localFaqs: [
    {
      q: 'The Ohio River flooded my basement. Can I turn my furnace back on?',
      a: 'Not yet. Water that reached the controls, wiring or burner can leave a furnace unsafe to run, even after it dries out. Keep it off until it’s inspected. If it has to be replaced, Clermont County Building Inspection issues the permit, and some floodplain jobs need a county flood permit as well. We handle that paperwork.',
    },
    {
      q: 'Do you work on oil furnaces in Moscow?',
      a: 'Yes. Oil heat is more common in Moscow than gas. Typical oil furnace faults are a clogged nozzle or oil filter, a failed ignition part or a burner that locks out. Check the tank gauge first, since an empty tank is the easiest fix there is. Then we inspect the burner, price the repair and test it.',
    },
  ],
  overrides: {
    ctaLine: 'Moscow furnace repair for electric and oil heat',
    band1Heading: 'Common Furnace Problems in Moscow Homes',
    commonSituations: [
      'An electric furnace running with one or more elements burned out',
      'An oil burner locked out by a clogged nozzle or oil filter',
      'A furnace that needs inspecting after Ohio River flood water',
      'A heat pump stuck on backup heat in a drafty pre-1940 house',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Moscow heat often comes back with no visit at all. Read the oil tank gauge if you burn oil. Put the thermostat on heat with new batteries. Look for a tripped breaker and confirm the furnace switch is on. Change a dark filter and seat the furnace door, since many units sit idle while it’s loose. Warm again? Then you don’t need us. We’re needed when electric heat blows cool, the oil burner locks out over and over, or the breaker trips a second time. Smell gas? Out of the house, switches untouched, and phone the gas company from outside. We inspect, explain, price it for your approval and test.',
      },
      {
        title: 'Repair or Replace Your Moscow Furnace?',
        body: 'A pre-1940 river house can hold a recent furnace or heat pump, so the equipment, not the village’s old housing, decides this. Replacing a burned element, sequencer or relay on sound electric equipment is reasonable money. Oil furnaces bring one more risk: a cracked heat exchanger can let carbon monoxide into the rooms, and we won’t leave that unit running. When a carbon monoxide alarm goes off, the household leaves first and phones from the street. If replacement wins, Clermont County’s permit is our job. Watch the electric bill in an ordinary cold month; a sudden jump usually means failing elements or a heat pump stuck on backup heat.',
      },
    ],
    whyTitle: 'Why Moscow Homeowners Call Us',
    whyParagraph:
      'Moscow heat is mostly electric or oil in old riverside houses, and we repair both kinds. Licensed, insured technicians tell you the fault and the flat-rate price before starting. We’re family owned and have been since 1993.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Moscow?',
        a: 'Finding the fault comes first, then the number. Swapping a burned element in an electric furnace is usually simple. An oil burner that keeps locking itself out needs more testing to pin down. Either way you okay a single flat-rate figure before any work, and nights and weekends cost the same as weekdays.',
      },
      {
        q: 'Should I repair or replace my Moscow furnace?',
        a: 'Repair a sound furnace with one failed part. Replace one with a cracked heat exchanger or a string of breakdowns in a single winter. In Moscow’s older houses the furnace is usually far newer than the walls around it, so we judge the unit itself and price both options for you.',
      },
      {
        q: 'Why is my Moscow furnace blowing cold air?',
        a: 'Start with the thermostat on heat and a clean filter. From an electric furnace, cool air usually points to dead elements or a failed sequencer, which switches them on. A heat pump may be in defrost, which is normal for a few minutes. On oil heat, check the tank, then call us if the burner won’t fire.',
      },
    ],
  },
};
