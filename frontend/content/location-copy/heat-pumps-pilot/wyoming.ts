import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wyoming: LocationServiceCopy = {
  localParagraph:
    'Wyoming is a gas town, with Census figures showing 86.9% of homes heated by gas, so most heat pumps we repair here are dual fuel: an outdoor heat pump paired with the gas furnace the house already had. The median home was built in 1954, so the heat pump went in decades later and shares ducts sized for that furnace. A smaller group of all-electric homes depends on the heat pump alone. We test the system and give you a flat price before any work.',
  emergencyParagraph:
    'The CVG station’s January low averages about 23F under NOAA’s 1991-2020 normals. If the heat goes out in a Wyoming home on a night like that, a baby or an older parent is most at risk, as is anyone ill. We repair the heat pump and the gas furnace behind it, often the same day, weekends included.',
  commonIntro:
    'Most Wyoming heat pump calls are dual fuel systems added to houses from the 1950s and earlier. These four come up most:',
  localFaqs: [
    {
      q: 'We live in the Wyoming Village Historic District. Can we replace the outdoor unit?',
      a: 'Usually, but check first. The city says properties in the Village Historic District have additional requirements and points owners to its Historic Preservation Commission. We check with the city before placing or moving an outdoor unit, and the permit itself comes from Wyoming’s Community Development Department.',
    },
    {
      q: 'Our Wyoming house has a gas furnace. Is it worth fixing the heat pump at all?',
      a: 'Nothing forces a quick decision, since the furnace can heat the house in the meantime. A working heat pump handles milder days on electricity so the furnace runs less. If an older unit has lost its compressor, running on gas until you replace it is a fair choice, and we’ll tell you so.',
    },
    {
      q: 'Our Wyoming furnace runs even on mild days. Is the heat pump broken?',
      a: 'Possibly, or the thermostat is set to switch to gas too early. A dual fuel thermostat picks the furnace below an outdoor temperature someone chose at setup. If the outdoor unit never starts, even on a mild afternoon, we test the heat pump and the controls together and tell you which one is at fault.',
    },
  ],
  overrides: {
    ctaLine: 'Wyoming dual fuel and heat pump repair',
    band1Heading: 'Common Heat Pump Problems in Wyoming Homes',
    commonSituations: [
      'A heat pump added to a 1950s house that shares narrow ducts with the gas furnace',
      'A dual fuel thermostat that never lets the outdoor unit run',
      'An outdoor unit placed tight against an older house and packed with leaves',
      'A heat pump stuck in cooling mode on a cold morning',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Rule out the easy things. The thermostat must be on heat, since a setting left on cool from autumn is a common culprit. Put in a clean filter. Check the outdoor unit’s breaker and the furnace’s, because a dual fuel system needs both. Rake leaves and clear snow from around the outdoor unit. A short stretch of steam and frost with the fan stopped is defrost, and it’s normal. If heat returns, you don’t need us. Call when ice won’t leave the coil, the system stays in cooling or the outdoor fan grinds. We test, explain and agree the price first.',
      },
      {
        title: 'Repair or Replace Your Wyoming Heat Pump?',
        body: 'Look at the heat pump’s age, not the 1954 median for Wyoming homes. A fan motor, capacitor or contactor on a sound unit is a repair. A failed compressor or a recurring refrigerant leak on an older unit is where we price both repair and replacement, and in a gas house you can stay warm on the furnace while you choose. The city’s Community Development Department issues replacement permits, and in the Village Historic District we check with the city first. A weak heat pump shows up as more gas use, because the furnace takes over sooner.',
      },
    ],
    whyTitle: 'Why Wyoming Homeowners Call Us',
    whyParagraph:
      'Wyoming heat pumps almost always work alongside a gas furnace, and we repair the whole dual fuel system. Every technician is licensed and insured, passes a background check and drug test, and quotes a flat price first.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Wyoming?',
        a: 'The fault decides it, so we test before quoting. A capacitor or contactor is a quick repair, while a refrigerant leak or a compressor is a much bigger one. You approve a flat price before work begins, weekend visits carry no overtime fee, and financing is available.',
      },
      {
        q: 'Should I repair or replace my Wyoming heat pump?',
        a: 'Repair it when the unit is sound and one part has failed. When an older unit has a dead compressor or a leak that keeps coming back, compare the repair with a new system. We give you both prices, and the gas furnace keeps the house warm while you decide.',
      },
      {
        q: 'Why does my Wyoming heat pump blow cool air?',
        a: 'After years of gas heat, heat pump air feels gentle, warm rather than hot, and some owners mistake it for cool air. That’s normal. If the air is cold and the outdoor unit is iced over or not running, or the furnace never steps in, call us.',
      },
    ],
  },
};
