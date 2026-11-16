import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const ludlow: LocationServiceCopy = {
  localParagraph:
    'Ludlow sits on the Ohio west of Covington, and Census figures show about six in ten of its houses date from 1939 or earlier. In a pre-war house the original service may still be in place, with little room for a 240-volt line. Most families own, and most homes are detached or attached single houses. The first visit covers the panel and a load calculation. If the car’s cord keeps up, we say so, and the price is fixed before any wire is run.',
  emergencyParagraph:
    'Quit charging if the plug or outlet is hot, scorched or melted, or smells of burning. Anything that sat in floodwater stays off until an electrician clears it. Throw the breaker only from a dry floor at a dry panel. For smoke or flame, get out and dial 911. Most calls are answered the same day, weekends too.',
  commonIntro:
    'Across a river town full of pre-war houses, these are the charger requests we hear most in Ludlow:',
  localFaqs: [
    {
      q: 'Do I need historic approval to mount a charger outside in Ludlow?',
      a: 'It depends where you live. Inside Ludlow’s local historic district, exterior alterations need a Certificate of Appropriateness before work begins, and it isn’t settled that a wall charger always counts. We check with the city first. On streets outside the district, the issue doesn’t arise.',
    },
    {
      q: 'Who supplies the power if a charger needs a service upgrade in Ludlow?',
      a: 'Duke Energy Kentucky is the utility here. Few chargers require a bigger service, especially when load management is an option. When one does, we coordinate the utility side with Duke and do the electrical work ourselves, and that price sits next to the load-management quote.',
    },
  ],
  overrides: {
    ctaLine: 'Chargers wired into pre-war houses in Ludlow',
    band1Heading: 'When a Home in Ludlow Needs an EV Charger',
    commonSituations: [
      'A first EV on order for a pre-war house with a small service',
      'A weekday commute over the river that a trunk cord can’t keep pace with',
      'Breakers that trip when the washer, dryer and space heater all run',
      'An owner who would rather plug in after dark than queue at a public station',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Ludlow',
        body: 'Since three in four homes in Ludlow are owner-occupied, a charger is a long-term fixture. A Level 2 unit puts back a day’s driving well before morning, giving more range per session than an ordinary receptacle and less time waiting. Nobody has to cross into Covington looking for a public plug. Charging at home usually costs less than public plugs, and many utilities offer cheaper hours overnight. In an old house, a professional install sizes the breaker, wire and grounding so nothing overheats, and buyers are starting to value a charger.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Ludlow',
        body: 'You might not need us. If your driving is mostly short trips around town and the car spends the night beside a reliable outlet, the slow cord packed with it may keep up on 120 volts. Crossing the river to work each weekday, or a second car going electric, is the point where a 240-volt Level 2 line earns its spot on the panel. In a house this old, learn what else shares the cord’s outlet, never plug the cord into an extension cord, and give up on any receptacle that’s loose or warm. Parking on the street usually means a home charger isn’t workable.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Ludlow',
        body: 'An old house in Ludlow can still surprise us with spare capacity, which is why the load calculation decides. Room on the panel means the charger gets a breaker of its own. Not enough room means two written prices, one for load management and one for a bigger service, and the pick is yours. We pull the permit, confirm which office issues it for your street, and book the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Ludlow Choose Us for EV Charger Installation',
    whyParagraph:
      'River floods and pre-war services are everyday work for our licensed electricians. We open the panel, run the numbers, give you a plain answer on load control or an upgrade, and wire it to code at the approved price.',
    sharedFaqs: [
      {
        q: 'How do you figure the cost of a home charger in Ludlow?',
        a: 'Once the panel is open, we put one flat rate in writing. Your pick of charger, the distance from the panel to where the car parks, and any panel work make up the figure. Nothing starts until you okay it, and financing can spread it out.',
      },
      {
        q: 'How long will installing a Level 2 charger take in Ludlow?',
        a: 'Most jobs fit into several hours. Old houses that need panel work run longer. You get the schedule in advance, including when the electricity will be off, so it doesn’t land in the middle of dinner.',
      },
      {
        q: 'Why not install a Level 2 charger myself in Ludlow?',
        a: 'It takes a correctly sized circuit, the load worked out on the panel, a permit and an inspector’s sign-off, which puts it squarely with a licensed electrician. In a house that went up before the war, a guess about the panel or the wire gauge is how circuits end up overheating.',
      },
    ],
  },
};
