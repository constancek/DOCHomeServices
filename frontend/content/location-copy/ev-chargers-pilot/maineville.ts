import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const maineville: LocationServiceCopy = {
  localParagraph:
    'Maineville was named for settlers from Maine, and Census figures put its median year built at 2004, so most panels have open slots. Heating complicates it. Just over half the homes heat with electricity, and a heat pump plus an EV can crowd a panel on a January night. A controller that slows the car while the heat runs often fixes that. We assess the panel and do a load calculation first, say if the car’s cord suffices, and quote a fixed price.',
  emergencyParagraph:
    'Pull the plug and stop if the charger, its plug or the outlet behind it turns hot or shows scorch marks. Flip the breaker only if your hands and the panel are dry. If smoke or fire shows up, get everyone out and then call 911. Our crew can usually come the same day, weekends too.',
  commonIntro:
    'In a village built mostly since 1980, these are what bring us out for chargers in Maineville:',
  localFaqs: [
    {
      q: 'My house in Maineville has a heat pump. Can it also handle a charger?',
      a: 'Usually, but the math has to include the heat pump running flat out with its backup strips on. If that leaves too little for the car, a controller that pauses charging while the heat is calling is usually cheaper than a bigger service. We put both options in writing.',
    },
    {
      q: 'Who handles the electrical permit for a charger in Maineville?',
      a: 'The village sends building work to the Warren County Building Department, and we handle the permit and inspection there. Not every mailing address in Maineville is inside the village, since the ZIP also covers Landen, so we confirm where yours falls first.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 chargers for newer houses in Maineville',
    band1Heading: 'When a Home in Maineville Needs an EV Charger',
    commonSituations: [
      'A heat pump house where the charger has to share the panel with electric heat',
      'A new EV and a trunk cord that falls behind on a long weekday commute',
      'A second EV on the way and one panel to serve both',
      'A driver who wants to plug in at off-peak times instead of using public stations',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Maineville',
        body: 'Most houses in Maineville are owner-occupied, which makes a charger a long-term part of the house. Level 2 puts energy into the pack much faster than an ordinary receptacle, so you net more range per session and the car is parked on the cord for less time. It refills while you sleep, and there’s no driving over to a public station and hoping one is free. Home electricity tends to cost less than public charging, and many utilities charge less outside peak times. A correctly matched breaker, wire and ground keep things from overheating, and buyers of newer houses are starting to expect one.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Maineville',
        body: 'Some drivers in Maineville can skip a 240-volt line. When most trips are short and the car rests near a dependable outlet, the cord that came with it tops up on 120 volts, adding only a few miles per hour connected, which may be enough. A long commute toward Cincinnati or a second EV is when Level 2 on its own circuit starts to make sense. Keep the cord on an outlet nothing else uses, never extend it with an extension cord, and replace any receptacle that’s loose or warm. If the car stays on the street, home charging usually isn’t an option.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Maineville',
        body: 'A 2000s house still gets a load calculation, because a heat pump and its backup heat claim much of the panel. If there’s headroom, the charger gets a circuit of its own. If there isn’t, you get a quote for load management and one for a panel or service upgrade, and the call is yours. We file the permit and schedule the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Maineville Choose Us for EV Charger Installation',
    whyParagraph:
      'Electric heat and an EV on one panel is common work for us. Our licensed electricians open the panel, total the load, tell you whether you need load control or an upgrade, and install to code at the quoted price.',
    sharedFaqs: [
      {
        q: 'How much does a charger installation cost in Maineville?',
        a: 'You get one flat rate once we’ve seen the panel. The charger, the length of wire to where the car parks, and any panel work set it, and in a house this new the panel often needs nothing. You sign off first, and the cost can be financed.',
      },
      {
        q: 'How long does a home charger install usually take in Maineville?',
        a: 'Most installs run several hours. Panel work stretches that. You get the plan in writing before we start, including when the house will be without power and for how long, so the day can be planned around it.',
      },
      {
        q: 'Could I install a Level 2 charger in Maineville without an electrician?',
        a: 'We’d advise against it. The circuit must be matched to the charger, the load calculation has to count the electric heat, and the work needs a permit and inspection. A licensed electrician gets the breaker and wire right so nothing runs hot.',
      },
    ],
  },
};
