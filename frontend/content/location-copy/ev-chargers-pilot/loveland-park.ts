import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lovelandPark: LocationServiceCopy = {
  localParagraph:
    'Loveland Park, first divided into wooded lots in the 1920s, has more than half its houses dating from 1980 or later, Census figures show. What sets it apart is heating, because close to half the homes run on electric heat, which leaves less room in a panel than gas would. Some early lot houses have modest services. The first visit is a panel check and load calculation, plus a straight word if the cord is enough, and the price is fixed before we start.',
  emergencyParagraph:
    'If the charging plug or its outlet is hot or darkened, or the cable has been pinched or split, stop using it. A burning smell gets the same answer. Shut the breaker only when you can reach it dry-handed and clear of anything hot. For smoke or flames, leave and phone 911. We’re normally there the same day, weekends counted.',
  commonIntro:
    'From the original river lots to the newer streets on the Warren County side, here is what usually prompts a charger visit in Loveland Park:',
  localFaqs: [
    {
      q: 'Will electric heat stop me from adding a charger in Loveland Park?',
      a: 'Rarely, though it makes the numbers tighter. A heat pump or furnace with electric strips pulls hard in January, and our load figures count that before anything else. When there isn’t enough left over, a controller that lets the heat win and the car wait often spares you a service upgrade. Both get priced.',
    },
    {
      q: 'Who handles the permit for a charger in Loveland Park?',
      a: 'That depends on the county line, which runs through the community. Houses on the Warren County side fall under the Warren County Building Department for electrical work, and Hamilton County addresses use Inspection Bureau, Inc. We match your address to the right office before filing.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charging for river-lot houses and newer homes in Loveland Park',
    band1Heading: 'When a Home in Loveland Park Needs an EV Charger',
    commonSituations: [
      'A heat pump and a new charger that would draw from the same panel',
      'A first EV whose trunk cord falls behind on weekday driving',
      'An early lot house with a full panel and no spare slots',
      'A family that expects a second EV and wants the wiring ready',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Loveland Park',
        body: 'In Loveland Park, most households own a detached house, so a wall charger is a fixture worth getting right. Level 2 moves energy into the battery much faster than an everyday outlet, which means extra range per session and less waiting around. Overnight charging leaves the car topped off at dawn, and nobody has to go looking for a public plug. Charging at home often beats public stations on price, and plenty of utilities knock the rate down after hours. A careful install matches breaker, wire and ground to the unit so nothing runs hot, and buyers are beginning to expect it.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Loveland Park',
        body: 'Some households here can skip the install. A light driver whose car rests near a sound outlet may be fine with the cord from the car, which draws 120 volts and adds only a few miles for each hour connected. Commutes, daily mileage or a second EV are where a 240-volt Level 2 circuit earns its keep. In the meantime, check what else shares the cord’s outlet, never splice in an extension cord, and stop using any receptacle that has worked loose or warms up. Street parking usually rules out a home unit.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Loveland Park',
        body: 'Electric heat goes into the load calculation first, and the result settles whether the charger fits. When there’s room, it gets a dedicated circuit, typically on a 40 to 60 amp breaker depending on the unit. When there isn’t, load management and a panel or service upgrade are both quoted, and you choose. We take care of the permit and the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Loveland Park Choose Us for EV Charger Installation',
    whyParagraph:
      'Electric heat changes how much room a panel has, so our licensed electricians measure it before anything else. You get a straight call on an upgrade or load control, then a code-compliant install at the quoted price.',
    sharedFaqs: [
      {
        q: 'How do you price a charger installation in Loveland Park?',
        a: 'We look inside the panel first, then hand you one flat price. What drives it is the unit itself, how much wire it takes to reach your parking spot, and whether the panel needs help. You approve before we start, and payments can be financed.',
      },
      {
        q: 'How much of the day will a charger install take in Loveland Park?',
        a: 'Most of a morning or afternoon, since a typical job takes several hours. Upgrading the panel adds to that. You’ll hear how long the power will be off before we flip anything, so you can plan meals and work calls around it.',
      },
      {
        q: 'Can I install a Level 2 charger in Loveland Park on my own?',
        a: 'It isn’t worth the risk. The circuit has to be sized for the unit, the load math has to include your electric heat, and the work needs a permit and inspection. A licensed electrician handles each step, and a mistake in any of them can overheat wiring.',
      },
    ],
  },
};
