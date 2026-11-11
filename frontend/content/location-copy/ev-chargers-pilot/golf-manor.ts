import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const golfManor: LocationServiceCopy = {
  localParagraph:
    'Census figures put the median build date in Golf Manor at 1954 and count only about half the homes as detached houses. Two-family and three- or four-unit buildings make up most of the rest, and half of households rent. A 1950s panel tends to be stuffed with breakers, which makes space for a 240-volt line the opening question. Before quoting, we open the panel and total the load, and you’ll hear if the Level 1 cord is plenty. The price is settled before a single wire is pulled.',
  emergencyParagraph:
    'A charger smelling of hot plastic, a browned plug, a softened outlet or a breaker that snaps off every charge means stop now in Golf Manor. Cut power to that circuit only if the floor is dry and nothing you touch is hot. If smoke or flame shows up, leave and call 911. Same-day visits are usual, weekends too.',
  commonIntro:
    'Half the households rent and many panels date from the late 1940s and 1950s, so charger requests in Golf Manor tend to start one of these four ways.',
  localFaqs: [
    {
      q: 'I rent half of a two-family in Golf Manor. Can a charger go in?',
      a: 'It can if the owner signs off in writing, and then the owner or property manager is the one who schedules us. With half the village renting, it comes up often. Our job is the wiring, not the lease, so who pays and who keeps the charger later is for you and your landlord to settle.',
    },
    {
      q: 'Will a crowded 1950s panel rule out a charger in Golf Manor?',
      a: 'Not by itself. Plenty of panels on these streets look full and still have capacity once we do the math. The load calculation sorts it into one of three answers, a new circuit as things stand, a load-management device, or a panel replacement, each priced before you choose.',
    },
  ],
  overrides: {
    ctaLine: 'Chargers wired for two-family houses, small apartment buildings and single homes in Golf Manor',
    band1Heading: 'When an Apartment or Home in Golf Manor Needs an EV Charger',
    commonSituations: [
      'A first EV on the way and every slot in a 1950s panel spoken for',
      'Two EVs in one household trading a single Level 1 cord back and forth',
      'Breakers that already pop when the dryer and the furnace fan start at once',
      'A two-family owner fielding a tenant’s request to charge on site',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Golf Manor',
        body: 'Level 2 reshapes charging in Golf Manor. Each night restores far more range than the factory cord ever did, and the car needs a much shorter window plugged in. It leaves full every morning, and the side trip to a public station, with its waiting, drops out of the week. Electricity billed to your own account typically undercuts public charging, and lots of utilities offer reduced off-peak pricing, so a call to yours is worthwhile. A licensed electrician fits breaker, conductor and ground to the unit, so a busy 1950s panel isn’t pushed into overheating. Down the line, buyers count a charger in the house’s favor.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Golf Manor',
        body: 'In Golf Manor, some EV owners never need us. A light driver, running short errands and parking by a healthy outlet, can stick with the Level 1 cord packed with the car, which runs on household 120-volt power and returns only a few miles per hour of charge. Give that outlet its own circuit. Plug the cord straight in, with no extension cord in between, and stop using any receptacle that’s cracked, wobbly or warm. A commuter, or a household with two EVs, is better served by Level 2 on a dedicated 240-volt line. When the car is kept on the street, a home charger is rarely realistic.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Golf Manor',
        body: 'Your panel’s fitness for a charger is settled by arithmetic, not by the year the building went up. If there’s capacity, the charger gets a dedicated circuit. If there isn’t, one sheet shows two prices, a load-management device that eases off charging while the house draws heavily, and a panel upgrade, and the owner decides. Through its contract with the village, Hamilton County handles the electrical permit and the inspection visit, and we take care of both.',
      },
    ],
    whyTitle: 'Why Property Owners in Golf Manor Choose Us for EV Charger Installation',
    whyParagraph:
      'In Golf Manor, no charger goes in until our licensed electricians have read the panel and done the load math. Then you get an honest call on upgrades or load management, code-compliant work, and a flat price agreed up front.',
    sharedFaqs: [
      {
        q: 'What drives the cost of a charger install in Golf Manor?',
        a: 'Three variables, mostly. The unit itself, the distance from the panel to the spot where the car sits, and any work the panel needs first all go into one flat-rate quote, written after we inspect the panel. Financing is an option, and the figure you approve is the figure you pay.',
      },
      {
        q: 'Is a charger install finished in a day in Golf Manor?',
        a: 'Usually it wraps up within several hours, so the car charges on the new circuit that night. Panel replacement turns it into a longer job. We give you the schedule ahead of time, including the stretch when the power is shut off, which matters in a two-family where tenants need notice.',
      },
      {
        q: 'Why not hang an EV charger myself in Golf Manor?',
        a: 'Because the risky part is hidden once the cover goes back on. The breaker and wire must suit the charger, a load calculation must show the panel has room, and the county expects a permit followed by an inspection. Leave it to a licensed electrician, and the install stays safe and on record.',
      },
    ],
  },
};
