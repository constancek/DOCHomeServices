import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'In Mason, a heat pump may share the job with a gas furnace that takes over on the coldest nights. Census figures show 60.3% of homes heat with gas and 36.6% with electricity, a share that covers electric furnaces as well as heat pumps. Over half the city’s homes went up between 1990 and 2009, so many builder-installed outdoor units are aging together. Townhouses put air handlers in tight closets. We find what failed and quote it before any work begins.',
  emergencyParagraph:
    'NOAA counts about 100 nights a year at or below freezing at the Cincinnati airport, the weather record we go by for Mason. A house without heat on one of those nights is a problem for babies, older relatives and anyone ill. We repair heat pumps and dual fuel systems, most the same day, weekends included.',
  commonIntro:
    'Mason heat pump trouble usually traces to 1990s and 2000s builder equipment, or to the handoff between the heat pump and its gas backup. These four come up most:',
  localFaqs: [
    {
      q: 'Does Mason require a permit to replace a heat pump?',
      a: 'The City of Mason Engineering & Building Department handles permits for work inside the city, and its permit reports list furnace and air conditioner replacements under residential mechanical work. We pull the permit when we replace a heat pump. A repair on your current unit is simply priced and done on the visit.',
    },
    {
      q: 'My Mason home has a heat pump and a gas furnace. Which one is broken?',
      a: 'That’s what we test first. In a dual fuel setup the heat pump handles milder weather and the furnace takes over when it gets colder, with the thermostat deciding the switch. If the furnace never kicks in, or the heat pump never stops, the fault can be in either unit or the control between them.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump and gas backup repair for Mason homes',
    band1Heading: 'Common Heat Pump Problems in Mason Homes',
    commonSituations: [
      'A builder-grade outdoor unit from the early 2000s that hums but won’t start',
      'A gas furnace backup that never takes over on a frigid night',
      'A townhouse air handler wedged in a closet that short-cycles',
      'A heat pump stuck in cooling mode on a December morning',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Check four things first. The thermostat should be on heat. The filter should be clean. Both breakers, outdoor unit and indoor air handler, should be on. Nothing should be packed around the outdoor unit, snow and leaves included. A cloud of steam and a short fan pause in cold weather mean the unit is defrosting, which is normal. Get the heat back that way and you don’t need us. Call if the unit stays crusted in ice or blows cool air on a heat setting. Smell gas near the furnace? Leave and call the gas company from outside. We diagnose it and quote before working.',
      },
      {
        title: 'Repair or Replace Your Mason Heat Pump?',
        body: 'Go by the heat pump’s age and condition, not the year the house was built. Mason builders put in a lot of equipment between 1990 and 2009, and some of those units are original. A refrigerant leak or a dead compressor on one of them is usually the point to price a replacement next to the repair. On a newer unit, the same failure is often worth fixing. In an all-electric Mason home, a sharp jump in the Duke Energy bill in a normal month means the backup heat strips are covering for the heat pump.',
      },
    ],
    whyTitle: 'Why Mason Homeowners Call Us',
    whyParagraph:
      'We repair heat pumps on their own and heat pumps paired with gas furnaces, both common in Mason. A licensed, drug-tested technician arrives the same day on most calls, and the flat-rate price comes before the work.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Mason?',
        a: 'We can’t say until we’ve found the fault. A burned contactor is a quick swap, while a refrigerant leak in an older line set takes longer to find and seal. You approve one flat-rate price after the diagnosis, before any work, and a weekend visit carries no overtime fee.',
      },
      {
        q: 'Is my Mason heat pump worth repairing?',
        a: 'If it’s fairly young and one part failed, usually yes. If it’s an original 1990s or 2000s unit with a failed compressor or a repeat leak, compare it against a new system. We put both prices in front of you and leave the decision to you.',
      },
      {
        q: 'Why does my Mason heat pump feel cool in winter?',
        a: 'A heat pump delivers steady warm air, not the hot blast of a gas furnace, so it can feel lukewarm at the register. That part is normal. Air that’s actually cold, with the outdoor unit iced over or silent, means something has failed and needs a technician.',
      },
    ],
  },
};
