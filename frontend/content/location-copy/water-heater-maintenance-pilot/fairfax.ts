import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfax: LocationServiceCopy = {
  localParagraph:
    'Fairfax is a village of old basements. Census figures show 46.5% of houses built before 1940 and a median of 1942, with gas heat in most of them. So the heater we’re servicing usually sits on a basement floor beside a vent connector that has seen decades of exhaust, a gas cock of uncertain age, and a drain spigot that may not have turned since it was fitted. The visit costs a fixed amount you agree to first, and if the tank isn’t worth the money, we’ll say so.',
  emergencyParagraph:
    'If the floor is wet because the tank is leaking, that’s a repair call: shut its cold inlet, then the gas or breaker. A gas smell sends everyone outside, with no switches flipped, to call the gas company. A carbon monoxide alarm does the same, people first. Those calls get same-day help most times, weekend or not.',
  commonIntro:
    'Homeowners in Fairfax most often book a service after noticing:',
  localFaqs: [
    {
      q: 'Water reached our heater in the July flash flood in Fairfax. Will a tune-up cover it?',
      a: 'No. Any heater that stood in floodwater needs a repair visit before it’s relit or powered back up, since the burner, gas control or wiring can be ruined without showing it. After it has been checked and passed as safe, the yearly flush and anode check can resume.',
    },
    {
      q: 'I rent half of a two-family in Fairfax. Who books the service?',
      a: 'The owner. Put any concern about the tank to them in writing. Ohio’s ORC 5321.04 obliges a landlord to keep furnished appliances in good, safe repair and to provide a reasonable supply of hot water. We service water heaters, not leases, so the landlord arranges the visit.',
    },
  ],
  overrides: {
    ctaLine: 'Yearly water heater service for pre-war basements in Fairfax',
    band1Heading: 'Signs a Water Heater in Fairfax Is Due for Maintenance',
    commonSituations: [
      'A gas heater beside the furnace in a 1920s or 1930s basement, with no service sticker',
      'Crackling from the burner each time it lights',
      'A tank that sat near the July floodwater and hasn’t been inspected',
      'Showers going cool sooner than they did last year',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Fairfax',
        body: 'We drain the heater through its spigot, flush until the silt stops coming, and refill. The anode, a rod that corrodes so the steel of the tank can last, gets pulled and judged; a spent one is quoted before any swap. We open the relief valve to show it releases and closes again, and check its pipe drops toward the floor. Since most homes in Fairfax burn gas, the burner, pilot, vent connector and gas fitting get a careful look, more so in a pre-war basement. Electric tanks get elements and thermostats metered. The shutoff and supply lines are checked last, and every fix waits for your yes.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Book one if the tank works but nobody can remember it ever being drained, if you’ve just bought an older house on either side of Little Duck Creek, or if the crackling is brand new. Hold off if the tank is seeping through its shell: flushing won’t patch that, and the money is better spent on the replacement. The same holds for rusty hot water or a heater at the end of its useful life; we’ll say so plainly. Handy owners can bleed a pail from the spigot between our visits. One service a year is enough for most.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Fairfax',
        body: 'A tank in Fairfax gets the drain, the flush and the anode check. Tankless models get descaled instead: we circulate a cleaning solution through the heat exchanger, then clear the screen at the water inlet. With gas service common in the village, burner and vent checks are standard; electric heaters get element and thermostat tests. Tankless can come up once, when the old tank retires.',
      },
    ],
    whyTitle: 'Why Homeowners in Fairfax Book Water Heater Maintenance With Us',
    whyParagraph:
      'Most of our water heater calls in Fairfax are in pre-war basements, often right next to an old flue. Licensed and insured techs who have passed background checks and drug tests, and a fixed price you approve before we start.',
    sharedFaqs: [
      {
        q: 'How much is a water heater service in Fairfax?',
        a: 'You hear a single flat rate before work. Storage tank versus tankless, which fuel, and how awkward the spot is set it. A heater jammed behind the furnace under a low ceiling takes longer than one in open floor space. You approve first; weekend visits cost the same.',
      },
      {
        q: 'How often does a tank in Fairfax need flushing?',
        a: 'Once a year for most households. Minerals settle out of the water onto the tank bottom, and the flame heats through that layer, which is the crackling you hear. If it starts, or showers run cool early, call before the year comes round.',
      },
      {
        q: 'Can I flush the heater on my own?',
        a: 'If you’re handy, running a pail off the spigot is fine. We’d rather handle an old spigot that may not seat again, anything near the gas burner, and the relief valve test. Those are the steps where a quick job ends with water across the basement floor.',
      },
    ],
  },
};
