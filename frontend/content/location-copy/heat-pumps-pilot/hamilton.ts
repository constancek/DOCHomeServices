import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'Hamilton is one of the few places around here where both your electricity and your gas come from the city, not Duke Energy. Census figures show 35.2% of homes heat with electricity and 61.0% with gas, and more than half the houses were built before 1960. So heat pumps here are split between all-electric homes and dual fuel systems added to older gas houses near German Village and Dayton Lane. Close to half the homes are rented. We find the fault and quote the repair before any work.',
  emergencyParagraph:
    'January nights at CVG bottom out near 23F on average, per NOAA’s 1991-2020 normals. A home without heat in that cold is hardest on babies, elderly relatives and anyone who is sick. We repair heat pumps, air handlers and dual fuel controls, most often the same day, weekends included.',
  commonIntro:
    'Hamilton heat pump calls come from older houses near the river districts, mid-century houses across the city and plenty of rentals. These four come up most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a heat pump in Hamilton?',
      a: 'Yes. The City of Hamilton issues its own HVAC permits, and only a contractor registered with the city can pull one. We handle it before work starts. In a city historic area like German Village or Dayton Lane, exterior work needs design review approval, so we check with the city before moving an outdoor unit.',
    },
    {
      q: 'I rent in Hamilton and the heat pump isn’t heating. What are my options?',
      a: 'Tell your landlord in writing. Under Ohio’s ORC 5321.04, landlords must keep the heating equipment they supply in good working order and supply reasonable heat. We fix heat pumps, not leases. Once the owner books us, we diagnose the problem and send them a price to approve.',
    },
  ],
  overrides: {
    ctaLine: 'Hamilton heat pump repair, priced before the work',
    band1Heading: 'Common Heat Pump Problems in Hamilton Homes',
    commonSituations: [
      'A city electric bill climbing because the heat strips run instead of the heat pump',
      'A dual fuel system on an older house near German Village that keeps the gas furnace running',
      'A rental heat pump stuck on cooling after a reversing valve failure',
      'An outdoor unit on a narrow city lot hemmed in by snow and leaves',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Check the easy things before you call. The thermostat should be on heat, and the filter clean enough to see light through. Both breakers, outdoor unit and indoor air handler, should be on. Clear any snow or leaves around the outdoor coil. If you see steam and thin frost and the fan pauses for a few minutes, that’s a normal defrost. If heat comes back after that, you don’t need us. Call when ice won’t melt off the coil, the emergency heat light stays on, the fan outside won’t move, or the system won’t leave cooling mode.',
      },
      {
        title: 'Repair or Replace Your Hamilton Heat Pump?',
        body: 'Go by the heat pump, not the house. A Hamilton home from the 1920s may have an outdoor unit a few years old. A failed fan motor, capacitor or defrost board on a healthy system is a repair. A refrigerant leak or a dead compressor is where we price both choices next to each other. Your city utility bill helps here: if the electric charge jumps in a normal winter month, the backup heat strips are likely doing the work. In a historic area, a replacement in the same spot is simpler than a move. Financing is available.',
      },
    ],
    whyTitle: 'Why Hamilton Homeowners and Landlords Call Us',
    whyParagraph:
      'We repair heat pumps in Hamilton’s all-electric homes and dual fuel systems in its older gas houses. Every technician is licensed, insured, background-checked and drug-tested, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Hamilton?',
        a: 'We tell you once we’ve found the fault. A failed contactor on the outdoor unit is a short job. A refrigerant leak in an older coil takes more time to trace. You approve one flat-rate price before the work, and weekends carry no overtime fees.',
      },
      {
        q: 'Is it better to repair or replace my Hamilton heat pump?',
        a: 'Repair when one part failed and the rest is sound. Replacement makes more sense when the compressor fails or the unit keeps losing refrigerant. Landlords and homeowners get both prices from us, and we make it right or you don’t pay.',
      },
      {
        q: 'Why does my Hamilton heat pump blow cool air in winter?',
        a: 'Heat pump air is warm but gentler than gas furnace air, which can feel cool and still be normal. If it’s cold air and the outdoor unit is frozen or stopped, something has failed. Check the thermostat mode and both breakers, then call us.',
      },
    ],
  },
};
