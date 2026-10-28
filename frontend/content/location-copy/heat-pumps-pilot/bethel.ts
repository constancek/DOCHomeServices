import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Bethel is about half renters, and many of them live in small apartment buildings, so we hear from landlords here as often as from homeowners. Census figures show 48.9% of homes heat with electricity and 47.5% with gas. That means plenty of all-electric apartments where a heat pump and backup strips carry the whole winter, next to older village houses where a heat pump shares the work with a furnace. We find what failed and quote it before any work starts.',
  emergencyParagraph:
    'By NOAA normals, January lows at the Cincinnati airport sit around 23F. A heat pump that quits in a Bethel apartment or house on a night like that puts babies, older relatives and anyone ill at the most risk. We repair heat pumps and the electric backup heat behind them, same day on most calls, weekends included.',
  commonIntro:
    'Bethel heat pump calls come from small apartment buildings and older village houses in about equal measure. These four come up most:',
  localFaqs: [
    {
      q: 'I rent in Bethel and the heat pump quit. What should I do?',
      a: 'Put it to your landlord in writing. Ohio law (ORC 5321.04) makes landlords keep the heating equipment they provide in good and safe working order, with reasonable heat. The landlord, or whoever manages the building, can arrange the repair with us. Our job is the heat pump; the lease is between you and them.',
    },
    {
      q: 'Why is my Bethel electric bill so high when the heat pump seems to be working?',
      a: 'The heat pump may be running but losing ground, with the backup strips switching on to make up the difference. Those strips use a lot more electricity. A low refrigerant charge, a dirty outdoor coil or a weak defrost control can cause it, and we test for each.',
    },
  ],
  overrides: {
    ctaLine: 'Bethel heat pump repair for landlords and homeowners',
    band1Heading: 'Common Heat Pump Problems in Bethel Homes and Apartments',
    commonSituations: [
      'An upstairs apartment on emergency heat while the outdoor unit sits idle',
      'A 1950s village house where the heat pump and gas furnace fight over the thermostat',
      'An outdoor unit behind an apartment building frozen solid and not defrosting',
      'A heat pump that blows cold after its outdoor fan motor failed',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Some calls aren’t needed. Look at the thermostat mode: it has to say heat. Put in a clean filter. Two breakers serve the system, the outdoor unit’s and the indoor air handler’s; reset a tripped one a single time. Shovel snow and rake leaves back from the outdoor unit. During defrost you may see steam and thin frost, and the fan can go quiet for a few minutes, which is fine. Heat back on? Then you don’t need us, though a tenant should still let the landlord know. We’re needed when ice won’t let go of the coil, the backup heat light stays on, or the fan won’t turn.',
      },
      {
        title: 'Repair or Replace Your Bethel Heat Pump?',
        body: 'Read the date on the outdoor unit rather than guessing from the building. Plenty of 1950s Bethel houses and older apartment blocks carry heat pumps put in far more recently, and when one of those loses a contactor or defrost board, fixing it makes sense. Refrigerant gone or a compressor that won’t start on an aging unit changes the sum, so we quote both ways. For a swap, Clermont County Building Inspection handles HVAC replacement permits in the village and we apply. Watch the Duke Energy Ohio bill too: a spike in a mild month means the strips are carrying the heat.',
      },
    ],
    whyTitle: 'Why Bethel Landlords and Homeowners Call Us',
    whyParagraph:
      'Half of Bethel’s homes are rented, and we work for the landlords who keep them heated and the homeowners next door. Technicians are licensed and insured, prices are flat-rate and approved first, and financing is available.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Bethel?',
        a: 'Once the fault is found, you get a figure. Swapping a seized outdoor fan or a contactor takes little time, and chasing refrigerant through an older building takes more. Whoever pays signs off on a single flat-rate price first, and a Sunday call costs what a Wednesday one does.',
      },
      {
        q: 'Should a Bethel heat pump be repaired or replaced?',
        a: 'Repair a younger heat pump when one part has failed. If the compressor is done or refrigerant keeps leaking on an older unit, compare replacement, and we give both prices. For landlords with several units of the same age, replacing them together can make sense.',
      },
      {
        q: 'Why is my Bethel heat pump blowing cool air?',
        a: 'A heat pump delivers warm air, not furnace-hot air, so the register can feel cool to your hand, and that’s expected. If it’s plainly cold and the outdoor unit is frozen or silent, something has broken. Tenants should let the landlord know instead of opening the cabinet.',
      },
    ],
  },
};
