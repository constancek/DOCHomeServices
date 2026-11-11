import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const harrison: LocationServiceCopy = {
  localParagraph:
    'Census figures put the median house in Harrison at 1992, with four in ten built since 2000, so most panels have open slots for a 240-volt charger circuit or can take load management. What complicates it is heat. Close to two-thirds of homes here run on electric heat, and a heat pump or electric furnace pulls hard on a January night, when the car charges. That goes into the load calculation, along with a plain answer on whether Level 1 will do, and a price set in advance.',
  emergencyParagraph:
    'Stop charging in Harrison when a charger, plug or outlet heats up, browns or melts, when a burnt smell shows up, or when the breaker trips each session. Turn that breaker off only standing dry, away from anything hot. If smoke or fire appears, get outside and call 911. Same-day service is normal on most calls, weekends included.',
  commonIntro:
    'In a city of newer, mostly all-electric houses, these are the reasons a charger install comes up in Harrison.',
  localFaqs: [
    {
      q: 'My house in Harrison has electric heat. Can it still take a Level 2 charger?',
      a: 'Usually. Electric heat is one of the biggest loads in a house, so it gets counted next to the charger, the water heater and the rest. When everything fits, the charger has a dedicated circuit. When a cold night would push the panel too close, a load-management device holds the charger back while the heat runs.',
    },
    {
      q: 'Will a newer house in Harrison need a panel upgrade for a charger?',
      a: 'Often it won’t. Houses from the 1990s and 2000s commonly have open spaces and capacity left. We prove it with a load calculation instead of guessing, and if the numbers fall short, load management and an upgrade get quoted together so you can compare.',
    },
  ],
  overrides: {
    ctaLine: 'EV charger installation for newer and all-electric houses in Harrison',
    band1Heading: 'When a Home in Harrison Needs an EV Charger',
    commonSituations: [
      'An all-electric house where the heat pump and a new EV would share one panel',
      'A household adding a second EV and wanting both charged by morning',
      'A commute toward Cincinnati that outruns what the Level 1 cord puts back overnight',
      'Lights that flicker or a breaker that trips when the heat and the dryer run together',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Harrison',
        body: 'In Harrison, a car on a Level 2 unit comes off a night of charging with much more range than a household receptacle could give it, and spends a shorter part of the evening connected. Mornings start with a full battery, and public stations, with their lines, drop out of the weekly routine. Charging at home generally runs cheaper than paying per session in public, and some utilities price late-night power below daytime power, so ask yours. A professional install matches breaker, conductors and ground to the unit, which counts for a lot when a heat pump already leans on the panel. Buyers notice a charger later.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Harrison',
        body: 'In Harrison, plenty of owners can skip us. A car that mostly runs errands and parks next to a healthy outlet may be served fine by the Level 1 cord that came with it, which uses everyday 120-volt power and recovers just a few miles per hour. That outlet should be the only thing on its circuit, and the cord goes straight into it, never by way of an extension cord or into an outlet that wobbles or runs warm. Once there’s a daily commute or a second EV, Level 2 on a 240-volt line of its own is the usual answer. Street parking usually rules out a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Harrison',
        body: 'A house built after 2000 still gets the full load calculation in Harrison, and that number, not the build date, decides. If there’s room, a breaker and circuit go in for the charger alone. If electric heat has eaten the margin, a load-management device and a panel upgrade get priced on the same page, and the choice is yours. Electrical permits here are reviewed and inspected by Inspection Bureau, Inc. (IBI), and we file with them.',
      },
    ],
    whyTitle: 'Why Homeowners in Harrison Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians count your heating load in the calculation, tell you honestly whether the panel needs an upgrade or simply load management, and install the charger to code at a flat price you approve first.',
    sharedFaqs: [
      {
        q: 'What goes into the price of an EV charger in Harrison?',
        a: 'The unit, the distance the cable must cover from the breaker box to the car, and any work the panel needs. Those three set one flat number, written after we’ve seen the panel, and that number stays fixed after your approval. Financing is offered for anyone who’d rather pay over time.',
      },
      {
        q: 'How quickly can you finish an EV charger install in Harrison?',
        a: 'Most take several hours, and the car can charge that night. A panel upgrade means a longer day. You get the full timeline before we start, including when the power will be shut off, which matters in an all-electric house in cold weather.',
      },
      {
        q: 'Why does a Level 2 charger in Harrison need a licensed electrician?',
        a: 'Because the math and the paperwork both matter. The circuit is sized to the charger, the load calculation has to make room for electric heat, and IBI expects a permit and a passed inspection. A mistake there can overload the panel, so this is licensed-electrician work.',
      },
    ],
  },
};
