import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'In Mount Lookout, a furnace call almost always means a gas unit squeezed into the basement of a prewar house. The median home here dates to 1938 by Census figures, so whatever furnace you own replaced at least one before it, and it often shares a cramped corner with old ductwork at the foot of narrow stairs. Gas heats 73.1% of homes, electricity most others. Many basements took water in the July 2026 flooding, which changes our first checks. You hear the diagnosis and the price before we start.',
  emergencyParagraph:
    'January nights at CVG average about 23 degrees by NOAA normals, and an old Mount Lookout house loses heat fast once the burners stop. That hits babies, elderly parents and anyone ill hardest, and pipes along exterior walls can freeze. Most calls here see a technician at the door that day, Saturdays and Sundays too.',
  commonIntro:
    'Mount Lookout furnaces are nearly all gas, tucked into the basements of prewar houses. Here’s what breaks most:',
  localFaqs: [
    {
      q: 'Water came into my Mount Lookout basement. Is the furnace safe to restart?',
      a: 'Leave it off until we’ve looked. Floodwater on the burners, gas valve, circuit board or blower motor can lead to a fire or a gas leak once power returns. Fox19 listed Mount Lookout among the East Side neighborhoods hit hardest in the July 2026 flooding, so even if the floor dried weeks ago, have it checked.',
    },
    {
      q: 'Does a Mount Lookout rental have to stay at 70 degrees?',
      a: 'Often, yes. Mount Lookout sits inside city limits, so Cincinnati’s rule applies where the tenant has no thermostat of their own: after a full day under 60 outdoors, indoor heat must reach 70. Landlords can schedule us directly, usually that day. Lease questions stay between owner and tenant; we only fix the furnace.',
    },
  ],
  overrides: {
    ctaLine: 'Mount Lookout furnace repair, usually the same day',
    band1Heading: 'Common Furnace Problems in Mount Lookout Homes',
    commonSituations: [
      'A gas furnace that went dead after July floodwater reached it',
      'Second-floor bedrooms in a 1930s house running colder than downstairs',
      'Burners that light, hold for a minute, then cut out',
      'A rattling blower on a furnace wedged beneath the basement steps',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Plenty of Mount Lookout no-heat calls clear up before we arrive. The thermostat may have flipped to cool or run its batteries flat. In these basements the furnace power switch usually sits on a beam or the stair wall, and the breaker can trip after a storm. A filter caked with dust can shut things down, and the burner door has to sit tight or a safety switch keeps the furnace off. Fix one of those and heat returns? No visit needed. Smell gas: walk out, touch no switches, and call the gas company from the yard. With a CO alarm sounding, everyone leaves first. We diagnose, price, then retest.',
      },
      {
        title: 'Repair or Replace Your Mount Lookout Furnace?',
        body: 'Read the furnace label, not the house date. A 1938 house may be on a furnace installed only a few winters back, and a bad igniter, flame sensor or inducer on a unit that young is a straightforward fix. A cracked heat exchanger changes everything, because carbon monoxide can slip through it into the living space; we won’t leave that furnace running. One that spent hours underwater in July is often safer replaced than rebuilt. The City of Cincinnati Department of Buildings & Inspections issues the permit for a new unit, and we take care of it. A gas bill creeping up each winter is often the first hint.',
      },
    ],
    whyTitle: 'Why Mount Lookout Homeowners Call Us',
    whyParagraph:
      'Prewar basements with low ceilings and patched ducts are normal work for us. Mount Lookout jobs get licensed, background-checked technicians, and a flat price you agree to before anything gets taken apart.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Mount Lookout?',
        a: 'It depends on what testing finds, and we won’t guess. Cleaning a flame sensor takes minutes; pulling a blower motor out from under basement stairs takes a good while longer. You get a single flat figure and say yes before we start, and nights or weekends don’t raise it.',
      },
      {
        q: 'Should I repair or replace my Mount Lookout furnace?',
        a: 'Base it on the furnace, since the house will nearly always be older. When one part fails on a sound unit, fix it. When the heat exchanger has cracked, or the furnace sat in July floodwater, replacement is usually the call, for safety as much as money. We quote the two together.',
      },
      {
        q: 'Why is my Mount Lookout furnace blowing cold air?',
        a: 'Look for a thermostat set to fan instead of heat, and a dusty filter. When the filter chokes airflow, the furnace overheats, kills the flame and leaves the blower going. If the burners never fire at all, a worn igniter or dirty flame sensor is the likely culprit, and that’s our job.',
      },
    ],
  },
};
