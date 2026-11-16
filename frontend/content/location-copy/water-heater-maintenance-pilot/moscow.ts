import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'Moscow is a river village of old houses: Census figures show 81.0% of homes went up before 1940. Expect the heater in a low cellar or a back room off the kitchen, a drain spigot seized from neglect, and vent connectors and copper laid by several owners in turn. Few homes here heat with piped gas; on an electric tank we meter the elements and thermostats instead of tuning a burner. A set price comes before we start, and if your tank isn’t worth servicing, we say it.',
  emergencyParagraph:
    'Book a repair for these. Water seeping out: turn the supply valve atop the tank closed, then kill the breaker or gas. Gas odor: get outdoors, touch no switch, relight nothing, ring the gas company. Carbon monoxide alarm: people out first. Relief valve that keeps gushing, or no hot water: same. We’re usually out the same day, weekends too.',
  commonIntro:
    'Down by the river in Moscow, a heater that still runs may be hinting at these:',
  localFaqs: [
    {
      q: 'High water reached our cellar in Moscow. Is a tune-up enough now?',
      a: 'No. A heater that stood in Ohio River water needs a repair technician first, and it should stay off until then. Thermostats, wiring and gas controls that were submerged are usually ruined, and sometimes so is the heater. Yearly upkeep picks up again once we’ve cleared it.',
    },
    {
      q: 'I rent a house in Moscow. May I set up the annual service myself?',
      a: 'Write to your landlord; the tank is theirs and so is the booking. ORC 5321.04, Ohio’s landlord duty law, has owners keep provided appliances fit and safe under (A)(4) and supply reasonable hot water under (A)(6). We service water heaters, not leases, so the owner schedules and you open the door.',
    },
  ],
  overrides: {
    ctaLine: 'Annual water heater care for pre-war houses in Moscow',
    band1Heading: 'Signs a Water Heater in Moscow Is Due for Maintenance',
    commonSituations: [
      'A cellar heater beneath a house from before 1940 that’s never been emptied',
      'Crackling as the lower element in an electric unit comes on',
      'A newly bought place on Water Street with nothing on file about the heater',
      'The second bath of the evening going tepid halfway through',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Moscow',
        body: 'We empty the tank through a hose and keep flushing until the sludge stops coming. Every water supply carries dissolved minerals; heat makes them drop out, and over time an element or flame ends up heating through a crust on the floor. We pull the anode, a rod meant to corrode first and spare the steel, and quote one if little is left. The relief valve gets a test lift and its outlet pipe a look. Shutoff, supply copper and that stubborn cellar spigot get checked before we turn anything. Electric units here get their elements and thermostats metered. Any part waits for your go-ahead.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Good candidates: a tank that runs fine yet has never been drained, a house you just closed on with no record of the heater, or crackling that only started this season. Poor candidates: a shell that’s already dripping, because that’s a replacement and flushing does nothing for it; and orange-tinted hot water or an obviously spent unit, where we’ll suggest saving the service fee toward its successor. Between our visits, a handy owner may run off some water from the bottom spigot into a pail. One visit a year is our usual recommendation.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Moscow',
        body: 'Storage tanks get the drain and anode check described above. Tankless heaters need descaling instead: a cleaning solution is pumped round the heat exchanger, then rinsed, and the little screen on the cold inlet is cleared. Gas units get the burner, flue and fitting looked at; electric units the elements. Swapping to tankless is something to ask about only on replacement day, and we won’t raise it before then.',
      },
    ],
    whyTitle: 'Why Homeowners in Moscow Book Water Heater Maintenance With Us',
    whyParagraph:
      'Old cellars near the Ohio River are most of our work in Moscow. Licensed, insured, background-checked technicians, a flat price you approve first, and a plain guarantee: if it isn’t right, you don’t pay for it.',
    sharedFaqs: [
      {
        q: 'What does a water heater tune-up run in Moscow?',
        a: 'One flat figure, given before work begins. It’s shaped by tank versus tankless, electric versus gas, and the route to the heater. Ducking into a low cellar under a house from before 1940 is slower than stepping into a laundry room. Replacement parts are priced individually, and you decide on each.',
      },
      {
        q: 'How frequently should a water heater get serviced?',
        a: 'Yearly is the usual advice for storage and tankless types alike. If crackling or rumbling turns up sooner, call before the year is out; that sound is mineral sludge settling under the water, and it doesn’t go away by itself.',
      },
      {
        q: 'Is draining the water heater something I can do?',
        a: 'Running some water off the bottom spigot into a pail between visits is fine for a handy owner. Call us for the rest: a cellar spigot so old it might not shut again, the burner side of a gas heater, and lifting the relief valve, which can leave a worn one weeping.',
      },
    ],
  },
};
