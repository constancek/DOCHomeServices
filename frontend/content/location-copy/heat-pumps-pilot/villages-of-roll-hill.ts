import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const villagesOfRollHill: LocationServiceCopy = {
  localParagraph:
    'At the Villages of Roll Hill, heat pump problems go to the leasing office first, and management decides who repairs them. The neighborhood is one large complex of garden apartments and townhouse rows, and Census figures show 86.4% of homes in the surrounding area are rented. Electricity heats 37.7% of those homes, a figure that includes electric furnaces and baseboard as well as heat pumps. When management sends us, we test the unit and price the repair for them before work starts.',
  emergencyParagraph:
    'Two in three people here are under 18, so a heat pump that stops in January means children in a cold apartment. NOAA puts the normal January low at CVG near 23F. Report it to management at once, and say so if a baby or someone ill is at home. Once we’re sent, most repairs happen that day, weekends included.',
  commonIntro:
    'Homes here are 1960s townhouse rows and garden apartments, renovated between 2010 and 2012. Where a unit has a heat pump, these four faults are the likeliest:',
  localFaqs: [
    {
      q: 'The heat pump in my Villages of Roll Hill apartment stopped. Can I call you myself?',
      a: 'Report it to the leasing office in writing and keep a copy, because management owns the equipment and chooses the repair company. In Cincinnati, rentals where tenants don’t control their own heat must stay at 70F or warmer once it’s been under 60F outside for 24 hours. We fix heat pumps, not leases.',
    },
    {
      q: 'I manage units at the Villages of Roll Hill. Can you check several heat pumps in one visit?',
      a: 'Yes. Give us a list of the apartments with heat complaints and we’ll work through them in one trip. Townhouse rows built to the same plan tend to fail in similar ways, so a pattern often shows up quickly. Each repair is priced for your approval before we begin.',
    },
    {
      q: 'Did the 2010 to 2012 renovation put heat pumps in at Roll Hill?',
      a: 'Public records we found don’t list the heating equipment that went in during the rebuild, and some apartments here heat with gas. Look for a date on the label of the outdoor unit or air handler, or ask maintenance. Equipment from that work has been through more than a dozen winters by now.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump repair for Villages of Roll Hill managers and residents',
    band1Heading: 'Common Heat Pump Problems in Villages of Roll Hill Apartments',
    commonSituations: [
      'A townhouse heat pump running on emergency heat while the units next door heat normally',
      'An outdoor unit behind a garden apartment building frozen over and not clearing',
      'A system stuck in cooling mode on a cold morning',
      'A thermostat calling for heat with the outdoor fan sitting still',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'The thermostat should be set to heat, not cool or off. Replace the filter if your lease lets you; otherwise ask maintenance. If you can reach your breaker panel, make sure the breakers for the outdoor unit and the air handler are both on. Steam, a little frost and the fan resting a few minutes are a normal defrost, not a breakdown. If heat comes back, nothing needs fixing. If the coil stays iced or the emergency heat light won’t go off, report it to the leasing office rather than hiring anyone. When management sends us, we test the system and explain the fault to you both.',
      },
      {
        title: 'Repair or Replace a Villages of Roll Hill Heat Pump?',
        body: 'Management makes this call, and it should rest on the heat pump itself. Check the date on its label. If the unit dates from the renovation and a fan motor or control board fails, repair is usually the answer. A compressor that has failed, or a leak that has needed refrigerant more than once, is when we give the owner a replacement price beside the repair. A replacement inside the City of Cincinnati needs a mechanical permit from the Department of Buildings & Inspections, which we file. Residents who pay their own electric bill often spot trouble first, when it climbs in a mild month.',
      },
    ],
    whyTitle: 'How We Handle Heat Pump Repair for Villages of Roll Hill Managers',
    whyParagraph:
      'We work for the owners and managers here, and we explain each fault in plain words so residents know what’s happening. Technicians are licensed, insured and background-checked, and management approves a flat-rate price first.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost at the Villages of Roll Hill?',
        a: 'Management gets the price once we’ve found the fault. A burned-out contactor or a stuck defrost board is a smaller job. A refrigerant leak takes longer to trace. Each unit gets one flat-rate price to approve before work, and there are no overtime fees for weekend calls.',
      },
      {
        q: 'Should Roll Hill management repair or replace a failing heat pump?',
        a: 'Repair, if one part failed on a unit that has otherwise held up. A dead compressor or a leak that keeps returning on an older unit calls for a replacement quote as well. We give the owner both numbers and explain the difference, and financing is available.',
      },
      {
        q: 'Why does the heat pump in my Roll Hill apartment blow cool air?',
        a: 'Heat pump air comes out warm, not hot, and next to a gas furnace that can feel like a breakdown. Mild air at the vents is normal. Air that is plainly cold, an outdoor unit sealed in ice or one that won’t run at all is a fault to report to the leasing office.',
      },
    ],
  },
};
