import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'In Mason, a heat pump may share the job with a gas furnace that takes over on the coldest nights. Census figures show 60.3% of homes heat with gas and 36.6% with electricity, a share that covers electric furnaces as well as heat pumps. Over half the city’s homes went up between 1990 and 2009, so many builder-installed outdoor units are aging together. Townhouses put air handlers in tight closets. We find what failed and quote it before any work begins.',
  emergencyParagraph:
    'Mason gets roughly 100 freezing nights a year, going by NOAA’s Cincinnati airport records. Lose heat on one and infants, elderly parents and sick family members feel it first. We fix heat pumps and the gas furnaces paired with them, usually the day you phone, Saturday and Sunday too.',
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
        body: 'Confirm the thermostat says heat. A dusty filter gets swapped. In the panel, the outdoor unit and the indoor air handler each have a breaker; both belong in the on position. Kick away drifted snow and piled leaves from the outdoor unit. Vapor and a parked fan for a few minutes are a defrost; leave it be. If that brings the heat back, you can skip us. Call when ice keeps crusting the coil or a heat setting gives cool air. Gas smell by the furnace means leave, then call the gas company from outside. We diagnose and quote first.',
      },
      {
        title: 'Repair or Replace Your Mason Heat Pump?',
        body: 'Judge it by the heat pump’s own years, not the house’s. Builders across Mason set a lot of units between 1990 and 2009, and plenty of those are still the originals. On one of those, a leak in the refrigerant circuit or a compressor that has quit is when we write a replacement quote beside the repair quote. The same failure on a younger unit usually gets fixed. In an all-electric house, a Duke Energy bill that leaps in an ordinary month tells you the backup strips are doing the heat pump’s work.',
      },
    ],
    whyTitle: 'Why Mason Homeowners Call Us',
    whyParagraph:
      'We repair heat pumps on their own and heat pumps paired with gas furnaces, both common in Mason. A licensed, drug-tested technician arrives the same day on most calls, and the flat-rate price comes before the work.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Mason?',
        a: 'Diagnosis comes before any number. Swapping a burnt contactor is fast; chasing a refrigerant leak through an older line set is slow. Once we know which it is, you get a single flat-rate figure to approve, and nothing begins until you do. Weekends cost the same, with no overtime added.',
      },
      {
        q: 'Is my Mason heat pump worth repairing?',
        a: 'If it’s fairly young and one part failed, usually yes. If it’s an original 1990s or 2000s unit with a failed compressor or a repeat leak, compare it against a new system. We put both prices in front of you and leave the decision to you.',
      },
      {
        q: 'Why does my Mason heat pump feel cool in winter?',
        a: 'That mild air is how heat pumps work. They run long and steady at a lower temperature than a gas furnace blast, so the register feels lukewarm. In a Mason dual fuel house, the furnace should take the coldest nights. Cold air with the outdoor unit frozen or still means a part has failed.',
      },
    ],
  },
};
