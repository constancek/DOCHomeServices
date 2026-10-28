import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'Most Mount Lookout AC calls start in the basement, where the indoor cooling coil sits on a gas furnace. Census figures put 50.9% of homes at 1939 or earlier, so central air was fitted into houses designed without it, and the upstairs bedrooms usually lag behind. Most houses here are owner-occupied, so you make the call and approve the work yourself. Before any work begins, you hear the diagnosis and see the price.',
  emergencyParagraph:
    'In an average Cincinnati year, NWS Wilmington logs 21 days at or above 90 degrees, and older Mount Lookout houses hold that heat on their top floors. Infants and older people are the first to struggle. We fix central systems and heat pumps, and most emergency calls get a technician the same day, weekends no exception.',
  commonIntro:
    'Mount Lookout’s pre-1940 houses mostly run central air through a basement furnace, so most AC calls start downstairs. What we see most:',
  localFaqs: [
    {
      q: 'My Mount Lookout basement flooded in July. Is my AC safe to run?',
      a: 'Not until someone checks it. Fox19 named Mount Lookout among the East Side neighborhoods hit hardest by the July 2026 flooding and sewer backups. If water reached the furnace or the condensate pump, switch the breaker off and leave the system down. We inspect the wiring and blower, then tell you what can be cleaned and what has to go.',
    },
    {
      q: 'Who issues AC permits in Mount Lookout?',
      a: 'Cincinnati’s Department of Buildings & Inspections. Mount Lookout is inside city limits, so no township or Hamilton County office is involved. Swapping out an air conditioner here requires a mechanical permit from the city, and we pull it ahead of the install, so there’s nothing for you to file.',
    },
  ],
  overrides: {
    ctaLine: 'Mount Lookout AC repair, from the Square up the hill',
    band1Heading: 'Common AC Problems in Mount Lookout Homes',
    commonSituations: [
      'A basement condensate pump that hums but no longer drains',
      'Upstairs bedrooms several degrees warmer than the first floor',
      'Water pooling around the furnace from a clogged coil drain',
      'A condenser pad tilting on a sloped hillside yard',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'A warm house isn’t always a repair. Fit a fresh filter, set the thermostat to cool, and if the cold air comes back, you don’t need us. If your basement took water in the July 2026 storms, leave any furnace or air handler that sat in it off until someone has checked the wiring and blower. Otherwise, call for a visit if the copper line ices over or the outdoor fan stops spinning. The technician looks over the basement equipment and the condenser, tells you plainly what failed, and quotes a flat-rate price for your approval before starting. Afterward we check every register for cold air.',
      },
      {
        title: 'Repair or Replace Your Mount Lookout AC?',
        body: 'Let the equipment’s age decide, not the house’s. Repair a system put in within the last 12 years when a single part, like a fan motor or capacitor, has failed. Replace it when an older unit’s compressor dies, or when the indoor coil sitting over the furnace has also started leaking. For a 1938 house, match the new system to the existing ductwork rather than copying the old unit’s label. Inside city limits, a replacement requires a mechanical permit. Before that point, a slow leak or a dirty outdoor coil shows up first as a bigger Duke Energy Ohio bill.',
      },
    ],
    whyTitle: 'Why Mount Lookout Homeowners Call Us',
    whyParagraph:
      'Most Mount Lookout calls involve a cooling coil perched on a basement furnace, in a house older than central air itself. Our licensed, background-checked technicians price every job for your approval first, with no overtime fees.',
    sharedFaqs: [
      {
        q: 'How is AC repair priced in Mount Lookout?',
        a: 'By the job, once the diagnosis is done. Clearing a clogged coil drain above a basement furnace goes fast, and a failed compressor does not. The technician points out the fault, gives a flat-rate price and starts only after you approve it, without overtime fees.',
      },
      {
        q: 'When should a Mount Lookout home replace its AC instead of repairing it?',
        a: 'Once the equipment is older than roughly 12 years and its compressor fails, or once the indoor coil is leaking too. If the system is younger and only one part went bad, repair it. In a pre-1940 Mount Lookout house, we check what the old ductwork can carry before sizing the new unit.',
      },
      {
        q: 'What makes a Mount Lookout AC blow warm air?',
        a: 'Begin with the filter and breaker, and check the thermostat is on cool. Most homes here heat with gas, so the cooling coil sits over the furnace, and a dirty or iced coil can stop the cold air. If the outdoor fan isn’t turning, the capacitor or motor has probably failed.',
      },
    ],
  },
};
