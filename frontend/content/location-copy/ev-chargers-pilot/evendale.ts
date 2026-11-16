import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evendale: LocationServiceCopy = {
  localParagraph:
    'In Evendale, every home in the Census count is a detached house, the median one built in 1982, and gas heats the large majority. A gas-heated house tends to leave more slack in the panel than an all-electric one, so a 240-volt charger feed often slots in, though years of added appliances can still crowd a box. Where capacity falls short, load management frequently beats new service on cost. We open the panel, add up demand, say if the factory cord suffices, and quote one flat price.',
  emergencyParagraph:
    'Unplug the moment a charger, plug or receptacle heats up, discolors, melts or smells scorched. Repeated tripping at the panel and a crushed cable are reasons to stop too. Flip the circuit off only when doing so is safe, and with smoke or fire, leave and call 911. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Owners across this village of 1970s, 1980s and 1990s houses mostly bring us one of the following.',
  localFaqs: [
    {
      q: 'Who inspects the electrical work for a new EV charger in Evendale?',
      a: 'Evendale is a village of its own, not part of Cincinnati, and its electrical inspections go through The Inspection Bureau, Inc. Our office files for that permit and books the inspector, so the charger is on record once the job closes. The village’s contractor paperwork is ours to handle.',
    },
    {
      q: 'Is it realistic to charge two EVs at one house in Evendale?',
      a: 'Usually, given a plan. Our demand calculation tells us whether the box can support two charger circuits or should feed a single shared unit. Should it come up short, a device that throttles charging during heavy household use often undercuts a service upgrade, and you see both prices.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 home chargers for houses throughout the village',
    band1Heading: 'When a Home in Evendale Needs an EV Charger',
    commonSituations: [
      'Two EVs in the family now sharing one portable cord',
      'Wanting overnight charging timed to off-peak rates',
      'A 1980s panel whose open slots went to later additions',
      'No longer stopping at public stations on the drive home from work',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Evendale',
        body: 'Level 2 runs rings around a household receptacle, so a night on the wall brings back far more range and keeps downtime short. Because you set the hours, charging can follow the cheaper off-peak pricing many utilities offer, and power from your own meter usually costs less than public stations regardless. You leave each morning on a full battery without a detour. Our licensed electricians match breaker and conductor to the unit and ground the circuit, which keeps heat from building and spares the panel. Where nearly every house is owner-occupied, a charger also becomes a selling point for future buyers.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Evendale',
        body: 'Some owners in the village won’t need us. A car doing short local trips and parked beside a reliable receptacle can live on its portable cord, which draws plain 120-volt power and puts back range slowly, and we’ll recommend exactly that when it fits. Commuters, frequent highway drivers and two-EV families normally want Level 2 on a separate 240-volt feed. Check whether that receptacle also powers other rooms. Never plug the cord into an extension cord, and give up on any outlet that’s worn, loose or warm. Curbside parking usually rules out a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Evendale',
        body: 'Build year doesn’t settle capacity, since the demand calculation does. Space to spare means one new breaker serving the charger alone. No spare space means pricing two answers, load management against a panel or service upgrade, and letting you pick. After we pull the permit, The Inspection Bureau, Inc. inspects the finished work for the village. The village’s contractor forms are on us as well.',
      },
    ],
    whyTitle: 'Why Homeowners in Evendale Choose Us for EV Charger Installation',
    whyParagraph:
      'Quotes come only after a licensed electrician has opened the breaker box and run the demand numbers. You’ll hear plainly whether to upgrade, add load control or change nothing, and the work meets code at your approved price.',
    sharedFaqs: [
      {
        q: 'What does a home EV charger installation cost in Evendale?',
        a: 'A single flat rate follows our panel visit. Your charger choice, how many feet of cable it takes to reach the parking spot, and any needed panel work set the amount. Financing is offered, and work waits for your approval.',
      },
      {
        q: 'How long does an EV charger installation take in Evendale?',
        a: 'Several hours covers a typical house in the village. Upgrading the service or the panel adds to that. Before tools come out, you get the day’s plan, power shutoff timing included, so the afternoon goes as expected.',
      },
      {
        q: 'Why not install a Level 2 charger yourself in Evendale?',
        a: 'Breaker and wire must suit the unit, the household’s full demand from furnace, AC and other big appliances has to be calculated, and an inspector must close out the permit. A licensed electrician handles each piece, so the circuit stays safe through long, steady charging.',
      },
    ],
  },
};
