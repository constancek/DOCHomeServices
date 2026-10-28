import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountCarmel: LocationServiceCopy = {
  localParagraph:
    'Most Mount Carmel AC calls are in postwar houses that got central air years after they were framed. Census figures date 24.2% of homes to the 1940s and 1950s and 35.9% to the 1960s and 1970s, so a repair here often turns up ductwork or wiring never sized for cooling. And 38.7% of households rent, so tenants start with the landlord. Expect a diagnosis and a quoted price ahead of any repair.',
  emergencyParagraph:
    'Mount Carmel renters can’t fix a dead AC until the owner acts, and that wait is hardest on babies and grandparents. Greater Cincinnati sees about 21 days a year that hit 90 or above, a National Weather Service figure. We usually finish central air and heat pump repairs the day we’re called, weekends too.',
  commonIntro:
    'Older houses with retrofitted cooling make up much of Mount Carmel, along with a sizeable stock of apartments. What breaks most often:',
  localFaqs: [
    {
      q: 'I rent my Mount Carmel home. Who calls for the AC repair?',
      a: 'Your landlord or management office, normally, since the system is theirs. Set the thermostat to cool, glance at the breaker, then send the outage report in writing. Ohio’s ORC 5321.04 obliges a landlord to maintain the air conditioning they furnish in good and safe working order. We repair the AC, and the lease stays between you and your landlord.',
    },
    {
      q: 'Water got into my Mount Carmel basement. Can I turn the AC back on?',
      a: 'Not if the water touched the furnace or the condenser. Soaked circuit boards and motors may short at once or quit weeks later, so get the electrical side tested first. A flooded floor that stayed clear of the equipment is a cleanup job, not an AC job, and you can skip us.',
    },
  ],
  overrides: {
    ctaLine: 'Mount Carmel cooling repair, from 1940s houses to apartment complexes',
    band1Heading: 'Common AC Problems in Mount Carmel Homes',
    commonSituations: [
      'An add-on condenser from a 1960s retrofit tripping the breaker on an aging panel',
      'Back bedrooms of a 1950s house running hot because heating ducts were never resized',
      'Water under an apartment’s closet air handler after the drain line plugs',
      'A coil sitting atop a gas furnace frosting solid once a filter is overdue',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Spend five minutes before spending money. Swap in a new filter, check that the thermostat reads cool, and peek at the breaker panel, which in some older Mount Carmel homes is nearly as old as the house. If cool air is back after that, this page is all you needed. Renters stop here and tell the property manager. Bring us in for a breaker that won’t stay set, or a condenser humming away while the rooms stay hot. You see the failed part and get a flat quote to approve before we begin. When the repair is in, we read the vent temperature alongside you.',
      },
      {
        title: 'Repair or Replace Your Mount Carmel AC?',
        body: 'A Mount Carmel house built in 1973 tells you nothing about the condenser out back, which may be the house’s third. Go by the date printed on the equipment. Swap a single bad contactor or motor on a unit with life in it. Retire a unit whose compressor has died or whose coil leaks, and use that moment to test whether postwar ducts and the electrical service can carry new equipment. We handle the permit on replacements. Watch your Duke Energy Ohio statements too, because a failing system tends to push July and August usage up first.',
      },
    ],
    whyTitle: 'Why Mount Carmel Homeowners and Landlords Call Us',
    whyParagraph:
      'Mount Carmel mixes owned houses and rentals. You get a licensed technician who has passed a background check, and a flat price agreed in advance. If the repair fails, we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Mount Carmel?',
        a: 'Cost hinges on what failed, which we find before quoting. Unblocking an apartment air handler’s drain is a quick job. Putting a new compressor in an aging condenser is a long one. You approve one flat figure before we start, and weekend visits carry no surcharge. In a rental, the owner gives that approval.',
      },
      {
        q: 'Is an older Mount Carmel AC worth fixing?',
        a: 'Fix it when one component broke and the rest is healthy. Replace it when the compressor has died or the refrigerant gets topped off each summer. Most Mount Carmel houses predate 1980, so replacement is a good time to measure whether ducts laid out generations ago match the new unit.',
      },
      {
        q: 'Why is my Mount Carmel AC blowing warm air?',
        a: 'Before anything else, confirm the thermostat says cool and the breaker is on. Then go outside. A motionless fan most likely means a burned-out motor or capacitor. A spinning fan with a warm house suggests leaking refrigerant or a compressor on its way out, both jobs for a licensed technician with gauges.',
      },
    ],
  },
};
