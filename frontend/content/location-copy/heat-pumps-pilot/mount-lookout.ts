import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'Most heat pumps we repair in Mount Lookout share the ductwork with a gas furnace, because Census figures show 73.1% of homes here heat with gas and 23.6% with electricity. Half the houses went up in 1939 or earlier, so the heat pump came decades later as an add-on to ductwork sized for the furnace. When one stops heating, we test the outdoor unit, the controls and the furnace hand-off, then give you the price before any repair starts.',
  emergencyParagraph:
    'Expect about 23F on an ordinary January night, going by NOAA normals for CVG. If a Mount Lookout heat pump gives out then and the gas side doesn’t pick up, the house chills within hours, and infants, grandparents and anyone fighting an illness feel it first. Same-day service covers most calls, Saturday and Sunday as well.',
  commonIntro:
    'In Mount Lookout the typical job is an older house where a heat pump and a gas furnace split the winter between them. Four faults top the list:',
  localFaqs: [
    {
      q: 'I rent a Mount Lookout apartment and the heat pump is blowing cold. What does my landlord owe me?',
      a: 'Cincinnati’s rule covers you here. When the landlord controls the heat, the apartment must stay at 70F or above whenever it has been under 60F outdoors for 24 hours. Before you call the landlord, set the thermostat to heat and look for a tripped breaker. Send the complaint in writing so there’s a record. We fix heat pumps, not leases.',
    },
    {
      q: 'My Mount Lookout basement flooded in July. Can I run the heat pump?',
      a: 'Don’t turn it on until it has been checked. Mount Lookout was among the East Side neighborhoods hit hardest by the July 2026 flooding and sewer backups, and an air handler or furnace that sat in water can short out or hide damage. We inspect it, test the controls, and tell you plainly what has to be replaced.',
    },
    {
      q: 'Will I need a permit to replace my Mount Lookout heat pump?',
      a: 'Yes, a replacement needs a mechanical permit from the City of Cincinnati Department of Buildings & Inspections. Our office handles that filing. Fixing the heat pump you already own is different: you read our written price, say yes or no, and there is no city paperwork.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump and dual fuel repair in Mount Lookout',
    band1Heading: 'Common Heat Pump Problems in Mount Lookout Homes',
    commonSituations: [
      'A heat pump that hands off to the gas furnace far too early in the season',
      'An upstairs that stays cool because the heat pump was added to ducts sized for a furnace',
      'An air handler or furnace that needs testing after basement water in the July flooding',
      'A heat pump stuck in cooling after the first cold snap of fall',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Mount Lookout owners can rule out a lot themselves. A thermostat bumped to cool or off reads as a broken system, so put it back on heat. Swap a filter that blocks light. Heat pumps need two circuits, outside and in, and a tripped one may be reset a single time. Sweep snow or wet leaves off the outdoor coil. A defrost cycle throws off steam and a dusting of frost while the fan sits still for a few minutes. Warm air afterward means you can skip the call. Ice that won’t leave or an aux heat light glowing all day is a fault we price before fixing.',
      },
      {
        title: 'Repair or Replace Your Mount Lookout Heat Pump?',
        body: 'A 1938 house says nothing about the heat pump bolted to it, so read the outdoor unit’s label for its install year. On a younger Mount Lookout system, a pitted contactor or a dead defrost sensor gets fixed and you move on. Refrigerant escaping from a coil, or a compressor that has locked up, is a different conversation; on an older unit we put the replacement cost next to the repair cost and you pick. With dual fuel, a tired heat pump gives itself away when the furnace keeps lighting on mild days.',
      },
    ],
    whyTitle: 'Why Mount Lookout Homeowners Call Us',
    whyParagraph:
      'Mount Lookout dual fuel houses need someone who understands both the heat pump and the gas furnace it hands off to, and we service the pair in one trip. Every technician is licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How is heat pump repair priced in Mount Lookout?',
        a: 'By the job, not the hour. We test the system and give you one written price for the failed part. A sensor or contactor is a quick fix; tracing a refrigerant leak takes longer and costs more. Nothing starts until you say yes, and weekend visits carry no overtime charge.',
      },
      {
        q: 'Is it worth fixing an older heat pump in Mount Lookout?',
        a: 'Often it is, if the compressor still runs and the coils hold refrigerant. When the compressor has failed or a leak keeps coming back, we give you both numbers, repair and replacement. You choose. Financing is available for replacements, and we won’t talk you into one you don’t need.',
      },
      {
        q: 'Why does my Mount Lookout heat pump feel like it’s blowing cool air?',
        a: 'Heat pump air leaves the registers cooler than gas furnace air and keeps flowing longer, so it can feel lukewarm against your hand. That is how it should work. Cold air while the outdoor unit sits frozen or quiet is different, and so is a dual fuel system where the furnace never takes over. Both mean a fault.',
      },
    ],
  },
};
