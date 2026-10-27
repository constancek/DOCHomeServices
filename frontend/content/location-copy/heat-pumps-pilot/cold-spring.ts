import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const coldSpring: LocationServiceCopy = {
  localParagraph:
    'Cold Spring splits almost down the middle between electric and gas heat, so plenty of heat pumps here run with electric strips as their only backup. Census figures put electricity at 49.6% of homes and gas at 48.2%. Nearly half the housing was built in 2000 or later, a good share of it townhouses, so many heat pumps in town are original to the house and reaching the age where parts start to fail. We find the failed part, explain it, and quote it before any work.',
  emergencyParagraph:
    'About 100 nights a year drop to freezing or below at CVG, by NOAA normals. When a Cold Spring house loses its heat pump and backup strips on one of those nights, the cold reaches young children, grandparents and anyone sick first. We repair heat pumps and electric air handlers, often within the day, weekends included.',
  commonIntro:
    'Cold Spring heat pump calls mostly come from houses and townhouses built since 2000. These are the usual ones:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a heat pump in Cold Spring?',
      a: 'Yes, Kentucky requires one for a heat pump replacement. We handle that paperwork and the inspection for you, so there is nothing to file on your end. A repair to the unit already sitting on your pad is quoted and done on the visit.',
    },
    {
      q: 'My Cold Spring electric bill jumped in January. Is the heat pump the problem?',
      a: 'It may be. When the outdoor unit fails or ices over, the backup heat strips in the air handler take over, and they use far more electricity from Duke Energy Kentucky to make the same heat. If the auxiliary or emergency heat light stays on in mild weather, have it checked before the next bill.',
    },
  ],
  overrides: {
    ctaLine: 'Cold Spring heat pump repair for houses and townhouses',
    band1Heading: 'Common Heat Pump Problems in Cold Spring Homes',
    commonSituations: [
      'An all-electric townhouse running on emergency heat because the outdoor unit quit',
      'A builder-installed heat pump from the early 2000s with a failing outdoor fan motor',
      'A gas and heat pump pair where the thermostat won’t switch between them',
      'An outdoor unit on a back patio drifted in with snow and ice',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Check a few things before booking a visit. Set the thermostat to heat. Swap a dirty filter. Look in the panel for the two heat pump breakers, outside unit and air handler, and reset a tripped one a single time. Brush snow away from the outdoor coil. A defrost cycle looks alarming, with steam, light frost and a stopped fan, but it’s normal. If heat returns, you’re fine without us. Book a visit when ice keeps building, the auxiliary heat light stays lit, the system won’t switch out of cooling, or the outdoor fan scrapes or stalls. We find the fault, price it for your approval, and test after.',
      },
      {
        title: 'Repair or Replace Your Cold Spring Heat Pump?',
        body: 'Base it on the heat pump’s own condition. Plenty of Cold Spring units went in with houses built after 2000, so many are still the first heat pump the house has had. A worn contactor, capacitor or fan motor on a sound system is worth fixing. A compressor failure or a refrigerant leak in the coil is the larger decision, and we lay out repair and replacement prices together so you can weigh them. In an all-electric house the power bill tells you a lot: when the strips carry the load instead of the heat pump, usage climbs fast without any change in the weather.',
      },
    ],
    whyTitle: 'Why Cold Spring Homeowners Call Us',
    whyParagraph:
      'Cold Spring homes are split between electric and gas heat, and we repair heat pumps on both kinds of system. Every technician is licensed, insured and drug tested, and the flat-rate price comes before the work.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Cold Spring?',
        a: 'It depends on which part failed. A capacitor or contactor outside is a quick swap, while a leak in the indoor coil of a townhouse air handler takes more time to trace and fix. We price it at a flat rate after diagnosis, with no overtime charge on weekends, and you approve it first.',
      },
      {
        q: 'Should I repair or replace my Cold Spring heat pump?',
        a: 'Repair it when the heat pump is sound apart from one failed part. If the compressor has gone, or the system keeps losing refrigerant, compare that repair against a new unit, and we quote both. Financing is available if replacement makes more sense for your house.',
      },
      {
        q: 'Why does my Cold Spring heat pump blow cool air?',
        a: 'A heat pump delivers gentler heat than a gas furnace, so the air can feel cool on your hand even while the house is warming. That’s normal. Cold air from the vents with ice packed on the outdoor coil, or with the outdoor fan stopped, is a fault, and so is backup heat that never comes on.',
      },
    ],
  },
};
