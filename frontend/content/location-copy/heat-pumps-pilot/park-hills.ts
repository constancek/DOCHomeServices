import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const parkHills: LocationServiceCopy = {
  localParagraph:
    'In Park Hills, most heat pumps work alongside a gas furnace, but a sizable share of homes run on electricity alone. Census figures show 69.2% of homes heat with gas and 30.8% with electricity, and about a third of the housing is in apartment and condo buildings. So one call is a dual fuel house from the 1920s through the 1950s, and the next is an all-electric condo built since 2000. We work out which system you have, find the fault and price it before starting.',
  emergencyParagraph:
    'NOAA normals for CVG count roughly 100 nights each year when the thermometer reaches 32F or lower. In a Park Hills home with a dead heat pump, those nights put infants, elderly parents and sick family members in trouble. Our technicians fix the heat pump, its strip heat or its partner furnace, mostly the same day, weekends too.',
  commonIntro:
    'Park Hills is mostly owner-occupied houses from the 1920s through the 1950s, plus a good number of condos and apartments. These four heat pump calls come up most:',
  localFaqs: [
    {
      q: 'Does a heat pump replacement in Park Hills need a permit?',
      a: 'Yes. Kentucky requires a permit to replace a heat pump, and in Park Hills it comes from Planning and Development Services of Kenton County. A repair to the heat pump you already have doesn’t need one. When we replace a unit, we take care of the permit and the inspection.',
    },
    {
      q: 'Much of Park Hills is a historic district. Does that limit where a new outdoor unit can go?',
      a: 'The Park Hills Historic District is on the National Register, and that listing alone doesn’t restrict work on private homes. We haven’t found a local design review for the city. Before a replacement that moves the outdoor unit somewhere visible, we still check with the city first.',
    },
    {
      q: 'I rent a Park Hills apartment and the heat pump is out. Who handles it?',
      a: 'Your landlord or building manager, so report it in writing along with what you already checked: thermostat on heat, filter, breakers. Your lease spells out how repairs are handled. Owners and managers can book us directly, and we send them the diagnosis and price. We fix heat pumps, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Park Hills heat pump repair, from older houses to condos',
    band1Heading: 'Common Heat Pump Problems in Park Hills Homes',
    commonSituations: [
      'A dual fuel house where the heat pump quit and the gas furnace carries the winter',
      'An all-electric condo running on backup strips with the outdoor unit iced',
      'A heat pump on a sloping lot with leaves drifting against the outdoor coil',
      'A thermostat swapped during a remodel that no longer controls the backup heat',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Check these first. Make sure the thermostat reads heat. Hold the filter up to a window; no light through it means it’s due. Your panel has a breaker for the outdoor unit and another for the indoor side, so flip back any that tripped. Streets near Devou Park drop a lot of leaves, and a buried outdoor coil can’t pull heat from the air, so clear it. A defrost cycle gives off steam, frosts lightly and idles the fan for a bit. Heat back on means you’re done. A coil that stays frozen, a backup light that never clears or a grinding noise is our cue.',
      },
      {
        title: 'Repair or Replace Your Park Hills Heat Pump?',
        body: 'Decide on the heat pump, not the house. Park Hills houses from the 1930s often had a heat pump added much later, and newer condos have equipment that may still be young. A failed fan motor, contactor or defrost control is a repair. A dead compressor or a recurring refrigerant leak is where we put replacement and repair prices side by side. A struggling heat pump shows on the Duke Energy Kentucky bill when backup strips do the heating, or on the gas bill in a dual fuel house. On a replacement, we handle the permit.',
      },
    ],
    whyTitle: 'Why Park Hills Homeowners Call Us',
    whyParagraph:
      'We repair the dual fuel systems in Park Hills’ older houses and the all-electric heat pumps in its condos and apartments. Technicians are licensed, insured, background-checked and drug-tested. Financing is available.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Park Hills?',
        a: 'That depends on the failure, which we find before quoting. A contactor or capacitor swap is a short visit; a refrigerant leak takes longer to locate and seal. You get one flat-rate price to approve before we begin, and weekend visits carry no overtime fee.',
      },
      {
        q: 'Should I repair or replace the heat pump at my Park Hills home?',
        a: 'Repair it when one component failed on a unit that’s otherwise healthy. A failed compressor or repeated leaks usually point to replacement. If your gas furnace can carry the house meanwhile, take the time to compare both prices; in an all-electric condo, the backup heat costs more each week you wait.',
      },
      {
        q: 'Why does my Park Hills heat pump blow cool air in winter?',
        a: 'If you grew up with gas heat, heat pump air will feel tepid at the register, and that alone isn’t a problem. Air that’s actually cold, an outdoor unit locked in ice or a fan that won’t start are faults. In a dual fuel house, a furnace that never steps in suggests the controls.',
      },
    ],
  },
};
