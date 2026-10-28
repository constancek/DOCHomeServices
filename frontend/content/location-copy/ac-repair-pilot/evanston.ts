import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evanston: LocationServiceCopy = {
  localParagraph:
    'Most Evanston AC repairs are on split systems added to pre-war houses, with the indoor coil sitting on a gas furnace and relying on its fan and ductwork. Census figures put 70.9% of homes before 1940 and gas heating 73.7%, so when the cooling fails, we check the furnace blower as well as the outdoor unit. A lot of homes here are two-families and apartments, and parts of the neighborhood are mostly rentals. We diagnose first, then quote a price you approve.',
  emergencyParagraph:
    'July nights around Cincinnati bottom out near 66 degrees, per NOAA’s climate normals, so an Evanston house that overheats during the day gets little relief after dark. Older residents and people sleeping upstairs suffer first. Cooling failures here, from outdoor units to the furnace fans behind them, mostly get fixed the day you reach us, weekends too.',
  commonIntro:
    'Evanston’s pre-war singles and two-families share a set of AC faults that come from cooling added decades after the house was built:',
  localFaqs: [
    {
      q: 'I rent in Evanston. Who handles my AC repair?',
      a: 'Usually your landlord. Tell the owner in writing. Under Ohio’s ORC 5321.04, air conditioning a landlord supplies must be kept in good and safe working order, though we repair equipment and don’t interpret leases. When the owner books us, you hear the diagnosis at the door and the owner gets the quote.',
    },
    {
      q: 'One side of my Evanston two-family cools and the other doesn’t. Why?',
      a: 'If each side has its own furnace and condenser, the two systems fail separately, so start with the warm side’s breaker and filter. If those check out, the usual culprits on that side are a weak capacitor, lost refrigerant or a tired furnace blower. We test the warm side and price only what it needs.',
    },
  ],
  overrides: {
    ctaLine: 'Evanston AC repair for pre-war houses and two-families',
    band1Heading: 'Common AC Problems in Evanston Homes',
    commonSituations: [
      'An old furnace fan that can’t lift cold air to a pre-war house’s top floor',
      'A two-family where the downstairs unit cools and the upstairs unit doesn’t',
      'Condensate from the cooling coil dripping onto an aging gas furnace',
      'A condenser squeezed into a narrow side yard and short of the airflow it needs',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'A warm second floor in Evanston doesn’t always mean something is broken. Ducts laid out before 1940 for heat alone often can’t carry enough cold air upstairs, and no repair will change that. Swap the filter, confirm the thermostat says cool, and flip a tripped breaker back one time. Then partly close a few first-floor registers and see if upstairs improves. Get a technician out if the outdoor fan won’t turn, frost forms along the refrigerant piping, or water pools by the furnace. Ours tests the system, shows you the cause and puts a flat rate in front of you before anything is fixed.',
      },
      {
        title: 'Repair or Replace AC in a Pre-1940 Evanston House?',
        body: 'Let the equipment’s age decide, not the house’s. A condenser younger than a dozen years that lost one part, say a capacitor or contactor, should be fixed. Past that, a seized compressor or an R-22 system that needs a recharge points to replacement. Gas heats most Evanston homes, so a new outdoor unit depends on the furnace that moves its air. Check the furnace’s age and blower before you buy, or the new AC may cool no better than the old one. Until then, a grimy outdoor coil quietly lengthens every cooling cycle on the Duke Energy Ohio meter.',
      },
    ],
    whyTitle: 'Why Evanston Homeowners Call Us',
    whyParagraph:
      'In Evanston the AC usually leans on an old furnace, so our technicians, all licensed and drug-tested, check both before naming a fault. The flat price comes first, overtime is never added, and unsatisfactory work costs you nothing.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Evanston?',
        a: 'That depends on what failed, and in an older Evanston house the furnace blower is sometimes the real problem rather than the AC. A capacitor swap is short work, while tracing a refrigerant leak is not. Once the fault is clear, you get one flat figure to approve, never with overtime added.',
      },
      {
        q: 'Should I repair or replace the AC in my Evanston home?',
        a: 'If the system is younger than about a dozen years and only one component quit, fix it. If it’s older and the compressor has died, replacing it usually makes more sense. Most Evanston owners make this call themselves, so ask for both prices and weigh them against the furnace’s age, since the two work together.',
      },
      {
        q: 'Why is my Evanston AC blowing warm air?',
        a: 'Rule out the filter, the breaker and the thermostat setting before anything else. An outdoor fan standing still usually points to a dead capacitor. A fan that spins while the air stays warm usually means lost refrigerant. In Evanston homes on electric heat, a heat pump stuck on its heating cycle gives the same symptom.',
      },
    ],
  },
};
