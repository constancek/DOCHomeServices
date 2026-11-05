import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evendale: LocationServiceCopy = {
  localParagraph:
    'In Evendale a heat pump most likely shares the work with a gas furnace in a dual fuel setup. Census figures show 84.5% of homes heat with gas and only 14.2% with electricity. Every home in the village is a single-family house, most built between 1980 and 1999, so the original equipment has usually been replaced at least once. We check both halves of the dual fuel pairing and quote the fix before any work begins.',
  emergencyParagraph:
    'January lows at the Cincinnati airport average close to 23F, per the National Weather Service. If the heat pump stops and the furnace doesn’t step in, the house loses warmth quickly, hardest on a baby, a grandparent or anyone sick. We fix heat pumps and their dual fuel controls, often the day you call, weekends too.',
  commonIntro:
    'Evendale heat pump calls usually involve a dual fuel system in a single-family house from the 1980s or 1990s. These four come up most:',
  localFaqs: [
    {
      q: 'Does Evendale require a permit for a new heat pump?',
      a: 'Yes. The Village of Evendale Building Department requires a permit for HVAC work, using its mechanical permit application, and residential HVAC jobs need a site plan rather than drawings. We file the application for a replacement, so you don’t have to. Repairs to your existing heat pump are quoted on the visit.',
    },
    {
      q: 'My Evendale heat pump runs, but the gas furnace never kicks in. What’s wrong?',
      a: 'In a dual fuel system the thermostat or a control board decides when the furnace takes over from the heat pump. If that handoff fails, the heat pump keeps running on the coldest nights and the house falls behind. It can be the thermostat setup or the furnace itself, and we test both.',
    },
  ],
  overrides: {
    ctaLine: 'Evendale dual fuel and heat pump repair, priced first',
    band1Heading: 'Common Heat Pump Problems in Evendale Homes',
    commonSituations: [
      'A heat pump that won’t hand off to the gas furnace on a frigid night',
      'An outdoor unit on low ground along Mill Creek that took on water',
      'A 1980s house where the heat pump runs but the upstairs stays cold',
      'A heat pump stuck on cool after a reversing valve fault',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Try a few things before booking. The thermostat mode needs to show heat. Replace a gray filter. In a dual fuel house the condenser has its own breaker and the furnace has another, and a trip on either stops the heat. Clear leaves and snow from around the condenser. A thin layer of frost, a wisp of vapor and a fan that stops for a few minutes add up to a normal defrost. Warm again? Then we aren’t needed. Call us if the coil stays packed in ice or the fan never turns. Any gas smell by the furnace: everyone out, then call the gas company from the yard.',
      },
      {
        title: 'Repair or Replace Your Evendale Heat Pump?',
        body: 'Read the date on the condenser label. The median Evendale house was built in 1982, and many have had the heat pump swapped since, so the house’s age is a poor guide. On a young unit, a bad capacitor or fan motor gets fixed. On an aging one, leaking refrigerant or a dead compressor gets a replacement quote written next to the repair quote. Gas backup hides a struggling heat pump: the furnace fires more often and the gas bill climbs while the electric bill barely moves. If Mill Creek water got into the condenser, leave the breaker off until we inspect it.',
      },
    ],
    whyTitle: 'Why Evendale Homeowners Call Us',
    whyParagraph:
      'Evendale is a village of owner-occupied houses with gas heat, and we repair the heat pumps paired with those furnaces. Family owned since 1993, we send licensed technicians and agree the flat-rate price before work.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Evendale?',
        a: 'It depends on the fault we find. Swapping a capacitor is quick. Sorting out a dual fuel handoff, or chasing a refrigerant leak, takes more time. Before any part is changed, you see one flat price and approve it. Saturday and Sunday calls cost the same as weekday ones.',
      },
      {
        q: 'Should I repair or replace my Evendale heat pump?',
        a: 'Young unit, one bad part: fix it. Older unit with a seized compressor or refrigerant that won’t stay in: look at a new one. With 84.5% of Evendale homes on gas, most owners have a furnace carrying the house while they think it over, so nobody has to rush.',
      },
      {
        q: 'Why does my Evendale heat pump blow cool air in winter?',
        a: 'You are used to furnace heat, which comes out hot. A heat pump in mild weather sends milder air, and that is how it should feel. Cold air while the condenser is frozen over or silent means a part failed. A furnace that won’t step in on a bitter night points to the dual fuel control.',
      },
    ],
  },
};
