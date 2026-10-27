import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const arlingtonHeights: LocationServiceCopy = {
  localParagraph:
    'Arlington Heights is a small village of old houses, most built before 1940, and slightly more than half of them are rented. Census figures show 35.7% of homes heat with electricity and most of the rest with gas. In a house that old, a heat pump arrived decades after it was built, usually feeding ducts first installed for a furnace, and the upper rooms are often where it falls short. We find the fault, explain it to the owner or tenant, and agree the price before any work.',
  emergencyParagraph:
    'On a typical January night the low at the Cincinnati airport is about 23F, by NOAA normals. A heat pump failure in an Arlington Heights house or apartment is most urgent with a baby, an older relative or someone ill inside. We repair heat pumps and their backup heat, and we reach most calls the same day, weekends included.',
  commonIntro:
    'Arlington Heights heat pump calls come from pre-war houses, rented flats and a few mobile homes. These four come up most:',
  localFaqs: [
    {
      q: 'I rent in Arlington Heights. Is my landlord responsible for a broken heat pump?',
      a: 'In Ohio, ORC 5321.04 requires a landlord to keep supplied heating equipment in good and safe working order and to provide reasonable heat. Put your request in writing. Your landlord can book us for the repair, but we fix heat pumps, not leases.',
    },
    {
      q: 'Can a heat pump keep a pre-1940 Arlington Heights house warm?',
      a: 'It can, if the ducts carry enough air and the unit is sized for the house. Old houses often have small or leaky ducts to the upper rooms, so those rooms lag behind. We check airflow as well as the heat pump before blaming the equipment.',
    },
  ],
  overrides: {
    ctaLine: 'Arlington Heights heat pump repair for owners and renters',
    band1Heading: 'Common Heat Pump Problems in Arlington Heights Homes',
    commonSituations: [
      'A heat pump added to a 1920s house that can’t warm the second floor',
      'A rented flat where the emergency heat light has been on for days',
      'A mobile home heat pump with the outdoor fan seized',
      'A dual fuel system in an older gas house that never switches back to the heat pump',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Do the quick checks first. Set the thermostat to heat, because cool or off won’t bring warm air. Put in a fresh filter. Find the two breakers, outdoor unit and indoor air handler, and reset a tripped one once. Clear snow and leaves from around the outdoor coil. Frost, a bit of steam and a fan that stops briefly are signs of defrost, which is normal. If the heat comes back, you don’t need us, though renters should still let the landlord know. Call when the coil stays iced, the backup heat light stays lit or the fan has stopped. We find the fault and price it before work.',
      },
      {
        title: 'Repair or Replace Your Arlington Heights Heat Pump?',
        body: 'Judge the heat pump on its own age. A house from the 1920s tells you nothing about a heat pump that might be fairly new, and a failed contactor or defrost control on a young unit is a repair. A refrigerant leak or a dead compressor on a tired one is when we price replacing it next to fixing it, and we handle the permit. A struggling heat pump shows on the electric bill when the backup strips do the heating. In a gas house, the furnace runs more and the gas bill rises instead.',
      },
    ],
    whyTitle: 'Why Arlington Heights Residents and Landlords Call Us',
    whyParagraph:
      'Arlington Heights is a village of old houses with a mix of owners and renters, and we work for both. Technicians pass background checks and drug tests, and every repair is priced flat-rate and approved first.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Arlington Heights?',
        a: 'We can’t price it until we’ve found the cause. A stuck outdoor fan or a bad contactor is a short visit, and a refrigerant leak in an older house can take longer to trace. Whoever pays, owner or tenant, approves one flat-rate price first, with no overtime fees.',
      },
      {
        q: 'Repair or replace an Arlington Heights heat pump?',
        a: 'If the heat pump is younger and one part failed, repair it. A compressor that has quit or refrigerant that keeps leaking on an older unit is the point to compare replacement. Read the label on the outdoor unit for its age, since the house’s age won’t tell you.',
      },
      {
        q: 'Why does my Arlington Heights heat pump blow cool air in winter?',
        a: 'Heat pump air is gentler than furnace air and can feel lukewarm, which is normal. If it blows cold while the outdoor unit is frozen or not running, there is a fault. Renters should report it to the landlord rather than open the equipment.',
      },
    ],
  },
};
