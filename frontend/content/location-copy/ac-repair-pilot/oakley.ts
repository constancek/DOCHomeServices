import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const oakley: LocationServiceCopy = {
  localParagraph:
    'Oakley AC calls split two ways, and the building usually tells us which. Census figures date close to half the homes here to before 1940, and most heat with gas, so the cooling coil usually sits on top of a gas furnace. The newer apartment buildings lean electric, which usually means a heat pump air handler in a closet. More than half of homes are rented, so the owner often approves the repair. We find what failed and quote it before any work starts.',
  emergencyParagraph:
    'Top-floor apartments and the upper rooms of pre-1940 Oakley houses heat up first when the cooling stops. The National Weather Service counts about 21 days past 90 in a typical year. We tell the tenant what broke and the owner what it costs, and most calls get fixed within the day, Saturdays and Sundays too.',
  commonIntro:
    'Oakley’s housing splits between pre-1940 houses and newer apartment buildings, and its AC faults split the same way:',
  localFaqs: [
    {
      q: 'Is my Oakley AC safe to run after basement flooding?',
      a: 'Not until it’s checked. When Duck Creek overflowed into Oakley in July 2026, basements across the city took on water. Any furnace, air handler or condensate pump that sat in water should stay off at the breaker. We test the blower motor and control board before anything restarts, and tell you plainly if a part is ruined.',
    },
    {
      q: 'Do I need a permit to replace my Oakley AC?',
      a: 'Not for a repair. Replacing a condenser, heat pump or furnace in Oakley takes a mechanical permit from Cincinnati’s Department of Buildings & Inspections, because the neighborhood is inside city limits. We file it as part of the job, so you don’t have to deal with the city yourself.',
    },
  ],
  overrides: {
    ctaLine: 'Oakley AC repair for older houses and newer apartments',
    band1Heading: 'Common AC Problems in Oakley Homes',
    commonSituations: [
      'Water from a closet heat pump’s blocked drain soaking an apartment floor',
      'A coil perched on a gas furnace icing over behind a clogged filter',
      'Second floors of pre-1940 houses running warm while the basement stays cold',
      'One half of an Oakley two-family cooling while the other side blows warm',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Start with what costs nothing. A matted filter, a thermostat switched to heat or a tripped breaker accounts for plenty of warm Oakley homes, and sorting any of them out means you don’t need us. Apartment dwellers should open the closet too: water in the drain pan, or a float switch that has cut the power, points to a blocked condensate line. Get a technician out when the condenser fan won’t spin or frost coats the larger copper line. We go through the indoor and outdoor sides, show you the cause and price it. Once you agree, we fix it and read the supply air temperature to prove it.',
      },
      {
        title: 'Repair or Replace Your Oakley AC?',
        body: 'Judge the equipment, not the address. A pre-1940 Oakley house may be on its third or fourth air conditioner, while a 2010s apartment can already have a tired heat pump. Below about 12 years, a failed capacitor or fan motor is a repair. Beyond that, a dead compressor or a leaking indoor coil makes new equipment the smarter buy. Size it to the ducts, which in an older house were often laid out for heat rather than cooling. Until you decide, a grimy outdoor coil or a slow leak lengthens every cycle, and you pay for those hours on the Duke Energy Ohio bill.',
      },
    ],
    whyTitle: 'Why Oakley Homeowners Call Us',
    whyParagraph:
      'Oakley calls swing between 1930s basements and apartment closets, and our licensed, background-checked technicians handle both. You see a flat-rate figure and approve it before anything starts, and overtime is never added.',
    sharedFaqs: [
      {
        q: 'What will AC repair cost me in Oakley?',
        a: 'We test first and quote second, because the failed part sets the price. Clearing a blocked drain on an apartment closet unit is a small job. A new compressor for the condenser behind a 1930s house is a big one. You approve one flat figure before we start, and evenings cost the same.',
      },
      {
        q: 'Should I fix or replace the AC in my Oakley home?',
        a: 'Go by the date on the condenser label, not the age of the house. A younger unit with one failed part is worth fixing. An older one with a dead compressor or a leaking coil is usually ready to go, and the new system should be sized to your ducts. If you rent, the owner makes that call.',
      },
      {
        q: 'Why is my Oakley AC blowing warm air?',
        a: 'Check the breaker and the filter first. If those are fine, look at the indoor coil. A clogged filter can freeze it solid, and a frozen coil passes almost no cold air until it thaws. If the coil is clear and the air stays warm, the refrigerant is likely low, which is a job for us.',
      },
    ],
  },
};
