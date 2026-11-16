import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const burlington: LocationServiceCopy = {
  localParagraph:
    'Close to half of the houses in Burlington were finished in 2000 or later, Census figures show, and panels that new usually have space for a Level 2 circuit or can work with a charging controller. Electric heat is the thing we watch. About six homes in ten use it, and a heat pump plus a charger are two heavy loads on one service. We run the load calculation first, tell you if the Level 1 cord is enough, and quote a fixed price ahead of time.',
  emergencyParagraph:
    'If a charging cable is nicked or flattened, the charger smells scorched, or its outlet is too hot to touch, take the car off the charger now. Turn that breaker off if the floor is dry and nothing near the panel is hot. Fire or smoke means getting outside and calling 911. Most calls get same-day help, weekends included.',
  commonIntro:
    'Newer subdivisions, townhouse rows and apartment buildings fill most of Burlington, and charger requests there tend to look like this.',
  localFaqs: [
    {
      q: 'Do I need my association’s approval for a charger at a townhouse in Burlington?',
      a: 'If an association runs the building or the parking, get its sign-off before you book. Anything in shared parking is the association’s or manager’s decision. With approval in hand, we check whichever panel would feed the charger and send a flat price you can pass to the board.',
    },
    {
      q: 'Who supplies the power if my house in Burlington needs a service upgrade?',
      a: 'It depends on the street, because Duke Energy Kentucky and Owen Electric both serve Burlington. Heavier service only comes into play when the panel math falls short and a charging controller won’t do the job, and in that case we work with whichever utility serves your address.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charging for newer houses and townhouses in Burlington',
    band1Heading: 'When a Home in Burlington Needs an EV Charger',
    commonSituations: [
      'A heat pump house that needs its load checked before a charger goes in',
      'A second EV coming home and only one slow cord to share',
      'A townhouse owner waiting on the association’s sign-off',
      'A daily commuter done with planning around public stations',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Burlington',
        body: 'Because so much of Burlington was built recently, Level 2 usually goes in without drama, and the benefits arrive right away. It outruns a standard outlet by a wide margin, so a single night refills a commute’s worth of range. Charging on your own meter generally beats public station prices, and a number of utilities bill late-night use at a lower rate, so a quick call to yours is worth making. Weekend errands stop being planned around which public plug is free. Properly sized breaker, wire and ground mean nothing runs hot and the panel isn’t strained. Buyers touring newer subdivisions increasingly expect to find a charger.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Burlington',
        body: 'Short trips around Burlington, with the car parked close to a dependable outlet, may never call for more than the trickle cord packed with the car. It’s slow on 120 volts, and for light use that’s rarely a problem, which we’ll tell you. Long commutes, heavy daily mileage or a second EV usually justify Level 2 on a 240-volt circuit of its own. Before booking, check whether anything else shares that outlet’s breaker. Keep extension cords out of it, and retire any receptacle that’s old, loose or warm. A car that lives on the street is hard to serve with a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Burlington',
        body: 'Newer houses usually have headroom built in, though electric heat can eat into it, so the load numbers make the call. If there’s room, the charger gets its own circuit. If there isn’t, a controller that eases charging back and a bigger panel or service both get priced, and the choice is yours. We pull the permit and line up the inspection for you.',
      },
    ],
    whyTitle: 'Why Homeowners in Burlington Choose Us for EV Charger Installation',
    whyParagraph:
      'Licensed electricians look at your panel and run the load numbers before suggesting a charger. You get a straight answer on upgrades or load control, wiring that meets code and a price agreed in advance.',
    sharedFaqs: [
      {
        q: 'How is the price figured for a charger install in Burlington?',
        a: 'You’ll see a flat rate once the panel’s been opened. It’s built from the charger you choose, the length of wire to your parking spot and any panel work. Nothing starts until you sign off, and financing is available if you’d like it.',
      },
      {
        q: 'How long does it take to put a charger in a newer house in Burlington?',
        a: 'Most newer houses take several hours. A panel upgrade lengthens the job, and in a townhouse the association may set when work can happen. We share the timeline before starting so you can plan around it.',
      },
      {
        q: 'Should I install my own Level 2 charger in Burlington?',
        a: 'We wouldn’t recommend it. A licensed electrician matches the circuit and breaker to the charger, figures the panel’s load and handles the permit and inspection. Skipping any of that is how wiring ends up running hot under a long charge.',
      },
    ],
  },
};
