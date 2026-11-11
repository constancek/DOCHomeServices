import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westChester: LocationServiceCopy = {
  localParagraph:
    'Census figures put about seven in ten homes in West Chester as single detached houses, mostly in subdivisions from the 1970s through the 1990s, which usually keeps a charger install simple. Those panels have often filled as finished basements and new kitchens took slots. Houses from 2000 on usually have room or can use load management. Our electrician opens the panel and totals the load before anything else, tells you if the cord in the trunk covers your driving, and fixes the price before wire is pulled.',
  emergencyParagraph:
    'Quit charging if the plug, connector or outlet is scorched or melting, if a burning smell drifts up, if the cable is cut or crushed, or if a breaker trips each time. With the panel dry and cool, shut that circuit off. Smoke or fire means leave the house and dial 911. Most calls are answered that day, weekends too.',
  commonIntro:
    'These four situations account for most charger calls we take in West Chester.',
  localFaqs: [
    {
      q: 'Who handles the permit for an EV charger in West Chester?',
      a: 'West Chester is a township, so the electrical side goes through the Butler County Building & Zoning Department, which enforces the electrical code there. We pull the permit and set up the final inspection. If you own a condo or townhome, your association has to approve the charger before we mount it.',
    },
    {
      q: 'We both commute in West Chester. Is one charger enough for two EVs?',
      a: 'Often, if the cars take turns overnight. When both need a full battery most mornings, two chargers on load management can split the available capacity without overloading the panel. We look at both commutes and the load totals, then price each setup side by side.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 home charging for subdivisions and townhomes in West Chester',
    band1Heading: 'When a Home in West Chester Needs an EV Charger',
    commonSituations: [
      'A long commute down I-75 that the plug-in cord can’t refill overnight',
      'A second EV in a household that already shares one outlet between cars',
      'Breakers in a 1980s panel that trip when the dryer and air conditioner overlap',
      'A townhome owner who needs the association’s approval before a charger goes in',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in West Chester',
        body: 'If your week is work and back with errands in between, a charger at home fits the routine. Level 2 restores range much faster than a household outlet, so more miles go on each charge and the car spends less time parked and waiting. You plug in at night and leave with a charged battery, skipping the public charger and the wait for a free stall. Home charging is usually cheaper than public stations, and many utilities offer lower off-peak rates. Breaker, wiring and grounding sized to the charger keep it from overheating, and buyers touring subdivisions are starting to expect one.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in West Chester',
        body: 'Working from home in West Chester and running a short loop of errands may never justify more than Level 1. That’s the trunk cord, plugged into a regular 120-volt receptacle near where you park, and it’s slow, but light use is fine with slow, so we’d tell you that instead of selling hardware. Two-EV households and I-75 commuters do better with Level 2, fed from a 240-volt breaker dedicated to it. Find out first whether that receptacle shares a breaker, and never route the cord through an extension cord or a receptacle that’s old, loose or warm. Cars kept at the curb usually rule out a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in West Chester',
        body: 'Totaling what the house already draws, on paper, decides the job more than its age does. Headroom gets the charger a circuit nobody shares, typically on a 40 to 60 amp breaker depending on the unit. Without it, you compare a load-management box that dials the charger down when the dryer and air conditioner run against more panel or service capacity. We file the permit and book the inspection, so you have nothing to submit.',
      },
    ],
    whyTitle: 'Why Homeowners in West Chester Choose Us for EV Charger Installation',
    whyParagraph:
      'Before any charger talk, a licensed electrician sits down with your panel and runs the load math. If you need an upgrade or load management, you’re told, the work goes in to code, and the flat price is agreed first.',
    sharedFaqs: [
      {
        q: 'How do you work out the price of an EV charger in West Chester?',
        a: 'Price is a flat figure, set after a look at your panel. It climbs or drops with the charger you pick, the feet of wire needed to reach your parking spot, and any panel work. You sign off before we begin, with financing if you want it.',
      },
      {
        q: 'How long should I expect a charger install to take in West Chester?',
        a: 'Plan on several hours for most installs, with the charger tested and running before we leave. A panel upgrade adds time, and you get that schedule before we start. Load management usually adds far less time than a full service change.',
      },
      {
        q: 'Is a Level 2 charger a do-it-yourself job in West Chester?',
        a: 'It isn’t. The breaker and conductors get sized to the charger, someone has to calculate the panel’s load, and the job requires a permit plus a final inspection. Chargers run near their limit for long stretches and find any weak connection, which is why a licensed electrician should do it.',
      },
    ],
  },
};
