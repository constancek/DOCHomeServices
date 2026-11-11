import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'Most homes in Mason were built after 1990, and Census figures put the middle of its housing at 1996, and about seven in ten stand alone. A builder panel from that era tends to have a slot or two open, and where it doesn’t, a load-management device can share what’s there. Over a third of homes heat with electricity, and a heat pump counts against the same service. We size that up first, say so if your plug-in cord is plenty, and quote before a single cable moves.',
  emergencyParagraph:
    'A charger too hot to touch, a plug with browned or melted edges or a tire-flattened cord means unplug the car. Shut that circuit off at the panel if you can reach it dry and safe. If you see smoke or flame, leave the house and dial 911. Most calls get a same-day visit, Saturdays and Sundays too.',
  commonIntro:
    'Calls about chargers from around Tylersville Road and Kings Island usually begin with one of these four.',
  localFaqs: [
    {
      q: 'Can a 1990s builder panel carry a Level 2 charger in Mason?',
      a: 'Many are, though we never assume it. We tally the charger alongside what the house already pulls, with the heat pump, range and dryer among it. If it passes, the charger gets a circuit to itself. If it falls short, you see a load-management price next to an upgrade price on one sheet.',
    },
    {
      q: 'Can two EVs share charging at one house in Mason?',
      a: 'Most households manage it. The cars can trade nights on one Level 2 unit, or a second circuit goes in when the math allows. Which suits you comes down to the load calculation and how much driving each of you does. We sketch both setups before anything is ordered.',
    },
  ],
  overrides: {
    ctaLine: 'Home Level 2 chargers for subdivisions and townhomes around Mason',
    band1Heading: 'When a Home in Mason Needs an EV Charger',
    commonSituations: [
      'A second electric car arriving and two drivers fighting over one plug-in cord',
      'An I-71 commute that drains more overnight than a wall plug puts back',
      'A heat pump and an electric range already leaning on a builder-grade panel',
      'Wanting the car fed late at night at home, not at a crowded public charger',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Mason',
        body: 'Level 2 at home turns charging into something you stop thinking about. It refills far quicker than an ordinary wall plug, so one night connected covers the next day’s driving with room left over, and the car sits idle less. Nobody circles a public lot hunting for a free stall. Power from your own meter usually costs less than public charging, and lots of utilities price late-night power lower, which is worth a call to yours. With the breaker, conductors and ground matched to the unit by a licensed electrician, nothing runs hot. More house hunters look for a charger already on the wall in Mason, too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Mason',
        body: 'Plenty of drivers here never need us. Short trips to school and the store, plus a sound outlet near where the car sits, and the slow 120-volt cord in the trunk keeps up fine. We’ll say that straight. Long I-71 days, or two EVs under one roof, are where Level 2 on a dedicated 240-volt line makes sense. Two quick checks help before you ring us. Find out whether that outlet shares its circuit with anything else, and keep the cord away from extension cords and from any receptacle that’s loose, old or warm. A car kept at the curb rarely suits a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Mason',
        body: 'Guessing from the age of the house gets nobody anywhere, so the load calculation does the deciding. When the numbers clear, the charger lands on a dedicated circuit. When they don’t, we write up a load-management device beside a panel upgrade and leave the pick to you. The permit is ours to pull, the inspector signs off the finished work, and the charger gets a live test with your own car connected.',
      },
    ],
    whyTitle: 'Why Homeowners in Mason Choose Us for EV Charger Installation',
    whyParagraph:
      'Licensed electricians open your panel and work the load numbers before any quote. They’ll say flatly if it wants an upgrade, a load-management device or nothing extra, wire it to code, and hold the price you agreed.',
    sharedFaqs: [
      {
        q: 'What does a home EV charger install cost in Mason?',
        a: 'You get one flat figure once we’ve looked inside the panel. The unit you choose, the length of wire between the panel and your parking spot, and any panel work set it. Financing is offered, and the quote stays put after you sign off on it.',
      },
      {
        q: 'How long will installing a Level 2 charger take in Mason?',
        a: 'Plan on several hours for most houses here. Panel work stretches the day, as does a run that has to cross the whole basement or attic. We map the timeline before starting, including the stretch when your power is down.',
      },
      {
        q: 'Could I wire my own EV charger at home in Mason?',
        a: 'That’s a job to hand off. Matching the circuit to the unit takes a load calculation, the work needs a permit and an inspection, and mistakes tend to show up as heat inside a wall. Licensed electricians carry that responsibility and answer for it.',
      },
    ],
  },
};
