import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const ludlow: LocationServiceCopy = {
  localParagraph:
    'Most Ludlow AC calls are in houses built long before anyone had central air. Census figures put 60.5% of homes here at 1939 or earlier, so the cooling went in later, with ducts squeezed into closets and attics, and the upstairs rooms fall behind first. Most of these houses are owner-occupied, so you usually make the call yourself, and the indoor coil normally sits on a gas furnace in the basement. We find what failed and tell you the price before any work starts.',
  emergencyParagraph:
    'Ludlow’s pre-1940 houses trap heat in their upstairs rooms once the condenser stops, and the elderly and babies take it worst. CVG sees roughly 21 or 22 days of 90-plus heat a year, by National Weather Service counts. Central air or heat pump, we usually fix it the day you call, weekends as well.',
  commonIntro:
    'Ludlow is mostly pre-1940 houses retrofitted for cooling, plus a newer slice built since 2000. Here’s what breaks most:',
  localFaqs: [
    {
      q: 'Do I need city approval to fix my AC in Ludlow’s historic district?',
      a: 'Not for a repair. Fixing the condenser you already have doesn’t change the outside of the house. In the Ludlow Historic District, exterior alterations need a Certificate of Appropriateness from the Urban Design Review Board, so if a replacement would move the unit or add a second one, we check with the city before we start.',
    },
    {
      q: 'My Ludlow condenser sat in floodwater. Can I turn it back on?',
      a: 'No. Keep it off at the breaker until a technician has looked at it. When the Ohio came up over the low north end, condensers there went under water, and a submerged unit can have wet wiring and silt packed into the coil and fan motor. We test it before it runs, and sometimes replacing it is the honest answer.',
    },
  ],
  overrides: {
    ctaLine: 'Ludlow AC repair for river-town houses built before central air',
    band1Heading: 'Common AC Problems in Ludlow Homes',
    commonSituations: [
      'Upstairs back bedrooms in a 1930s Ludlow house sitting at the far end of a duct run added decades later',
      'An outdoor unit on the low north end that needs testing after the 2025 high water',
      'Refrigerant seeping from the coil perched over a gas furnace after years of summer duty',
      'A 2000s-built Ludlow house whose heat pump short-cycles through a humid afternoon',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Spend a few minutes before you spend money. Put in a clean filter, set the thermostat to cool a few degrees under the room, and look at the condenser breaker in the panel. Cold air again means you can skip us. A Ludlow appointment makes sense once the outdoor unit hums with a motionless fan, or the breaker flips straight back off after a reset. Our technician goes over the condenser outside and the coil inside and names the failed part in everyday words. You accept or decline a fixed figure before any work. Repair done, we hold a thermometer to a supply vent with you watching.',
      },
      {
        title: 'Repair or Replace Your Ludlow AC?',
        body: 'The sticker on the condenser matters more than the year the house was built, since a 1930s Ludlow home may be on its third air conditioner. Where the equipment still has life and a single motor or contactor quit, fix it. Where an old compressor has died or the indoor coil leaks for the second time, the next dollar belongs to new equipment. Swapping a condensing unit or heat pump takes a Kentucky permit, which Planning and Development Services of Kenton County issues for Ludlow, and our office files it. Slow refrigerant loss usually appears first on the Duke Energy Kentucky statement, climbing month over month through summer.',
      },
    ],
    whyTitle: 'Why Ludlow Homeowners Call Us',
    whyParagraph:
      'In a town where most houses are older than central air, Ludlow owners ask whether one more repair is sensible. We answer plainly. Every employee passes a background check and drug test, and we’ve stayed family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Ludlow?',
        a: 'It depends on what failed, and we won’t guess before we test. A burnt contactor is a small job. A leaking coil on top of an older gas furnace is a big one. The technician gives you one flat price, you say yes or no, and evening and weekend visits cost the same.',
      },
      {
        q: 'Is it worth fixing the AC in an old Ludlow house?',
        a: 'Go by the equipment, not the house. A 1930s Ludlow house may be on its third air conditioner. If the unit has years left and one part quit, fix it. If an old compressor died or the coil is leaking again, put the money toward new equipment, and we measure the ducts before sizing it.',
      },
      {
        q: 'Why is my Ludlow AC blowing warm air?',
        a: 'Check the breaker, and make sure the thermostat isn’t on heat or fan only. Then look at the outdoor unit. If its fan isn’t turning, the capacitor or the motor has likely gone. If the fan runs and the house stays warm, the refrigerant is probably low, and that’s work for a licensed technician.',
      },
    ],
  },
};
