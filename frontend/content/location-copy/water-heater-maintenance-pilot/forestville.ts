import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestville: LocationServiceCopy = {
  localParagraph:
    'The Census median home in Forestville dates to 1981, so a typical tank here sits in a garage or utility room where a flush is quick work. The other big group is apartments: 760 units are in complexes of 50 or more, usually with a closet heater over a drain pan that the property manager books. Either way the quote comes first, and if a heater isn’t worth the money to service, we’ll tell you before we touch it.',
  emergencyParagraph:
    'A leaking tank: close the cold inlet above it, then switch off gas or power. Gas in the air: walk out without a switch or a match and phone the gas company when clear. A carbon monoxide alarm empties the apartment or house first. Endless relief valve venting, or no hot water, means repair. Same day for most, weekends included.',
  commonIntro:
    'Forestville has garages, utility rooms and a lot of apartment closets. In any of them, watch for this:',
  localFaqs: [
    {
      q: 'I manage a complex in Forestville. Can you service every unit’s water heater?',
      a: 'Yes, apartment by apartment. Each closet heater gets drained, its pan and anode inspected, and any part it needs priced for your sign-off before we fit it. Under Ohio’s ORC 5321.04, supplied appliances and reasonable hot water are the landlord’s duty, so tenants bring complaints to you. We service water heaters, not leases.',
    },
    {
      q: 'My house in Forestville has an electric water heater. Is maintenance any different?',
      a: 'Somewhat. No burner, no flue, so after draining we meter the upper and lower elements and check each thermostat. Grit still collects in electric tanks, and once it buries the bottom element, the hot water starts quitting early and the element can burn out.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater upkeep for homes and apartment complexes in Forestville',
    band1Heading: 'Signs a Water Heater in Forestville Is Due for Maintenance',
    commonSituations: [
      'A garage tank from the 1980s whose drain valve has never turned',
      'Closet heaters in a 50-unit complex with no service log',
      'An electric tank running lukewarm by the end of one shower',
      'A condo you just bought with a heater of unknown history',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Forestville',
        body: 'Draining and rinsing the tank comes first. Minerals in the supply settle out as the water heats and form a bed on the bottom; the burner or lower element then has to push through it, which you hear as popping and feel as shorter showers. The anode rod, there to corrode instead of the tank walls, is pulled and priced if it’s spent. We trip the relief valve and inspect its discharge pipe. Gas: burner, pilot, venting, gas line. Electric: elements, thermostats. In apartment closets, the drain pan, shutoff and connectors get checked too. You approve any repair before it happens.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'In Forestville we’d say yes to a service for a 1980s garage tank still running but never flushed, a townhouse bought with no paperwork, the first night it starts popping, and a 50-unit complex whose closet tanks carry no dates. We’d say no for a tank seeping from its body; replacement is the only fix there. Rust-tinted hot water, or a heater in its final stretch, gets the same call: save toward the new one. Handy owners can crack the drain valve now and then and catch some grit in a pail. Every twelve months is enough for a full service.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Forestville',
        body: 'Forestville splits between gas and electric, so both get proper attention. A gas tank: drain, anode, then burner, pilot and the draft at the flue. An electric tank: drain, anode, then each element and thermostat on a meter. Tankless heaters get descaled; we hook a small pump to the service valves, cycle a cleaning solution through the heat exchanger, then clean the inlet filter. Tankless comes up once, if at all, when a tank is nearly done.',
      },
    ],
    whyTitle: 'Why Homeowners and Property Managers in Forestville Book Water Heater Maintenance With Us',
    whyParagraph:
      'Garage tanks in 1980s houses and closet heaters in big complexes fill most of our water heater calendar in Forestville. Licensed, insured technicians, background checks and drug tests for every employee, no overtime on weekends.',
    sharedFaqs: [
      {
        q: 'What does a water heater tune-up cost in Forestville?',
        a: 'A flat rate, shown to you before work. Three things set it: the heater style, the fuel, and how hard it is to reach. A garage tank is quick; a closet unit tucked behind a stacked washer takes longer. Worn parts get separate prices for your yes.',
      },
      {
        q: 'How often should I have my water heater serviced?',
        a: 'Once a year suits most tanks. If popping or rumbling begins before then, call early; that noise is sediment piling up, and it flushes out easier while it’s loose. Complexes do well with every unit on the same yearly date.',
      },
      {
        q: 'Is it OK to drain my own water heater?',
        a: 'In a garage, a handy owner can bleed a little water off the drain valve between our visits, and that’s fine. Three jobs stay with us: a stiff old drain valve that may not close, anything on the gas side, and lifting the relief valve, which can leave a tired one dribbling.',
      },
    ],
  },
};
