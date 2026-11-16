import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'In Reading, the bulk of the houses went up in the 1940s and 1950s, Census figures show, and around a quarter are older still. Later owners usually filled every slot in the postwar panels. In prewar houses, the original service may be small enough that a 240-volt run means rethinking the panel. About four in ten homes are rented, so the owner decides. We check that panel and total your load before quoting, tell you whether the cord in your trunk will do, and lock the price before work starts.',
  emergencyParagraph:
    'Quit charging when a plug, outlet or wall unit turns hot, browns or smells of smoke. A crushed cable or a breaker quitting mid-charge is as urgent. Switch the circuit off only when you’re standing on dry concrete and the panel cover is cool. If you see smoke, go outside before calling 911. We’re usually there that day, weekends included.',
  commonIntro:
    'Across the older streets and the postwar blocks alike, these are the reasons owners call us about charging.',
  localFaqs: [
    {
      q: 'Our basement panel took water when Mill Creek flooded. Can we still add a charger?',
      a: 'Yes, but the panel gets looked at first. Breakers that sat in flood water can corrode inside, so we inspect them before adding any load. If the panel needs replacing, we price that alongside the charger so both happen in one job, and you see each cost separately.',
    },
    {
      q: 'I rent a house in Reading. Can I get a Level 2 charger put in?',
      a: 'Yes, as long as the landlord signs off in writing, and the landlord or manager is the one who schedules us. Our work is the charger, not the lease, so whether it stays when you leave and who covers the bill are for you and the owner to settle. The quote goes to whoever signs.',
    },
  ],
  overrides: {
    ctaLine: 'Charging at home, wired right for houses in Reading',
    band1Heading: 'When a Home in Reading Needs an EV Charger',
    commonSituations: [
      'Every slot in a postwar panel already holding a breaker',
      'Lights that dim when the dryer kicks on, before any charger is added',
      'A new EV whose Level 1 cord can’t catch up between workdays',
      'An owner adding a charger to a rental before a tenant’s EV arrives',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Reading',
        body: 'Speed is the obvious gain. Level 2 fills the battery far quicker than the 120-volt cord, which buys you more driving out of each session and less time stuck waiting. Plug in when you get home, and by the time you leave for work the car is topped off, with no search for a free public charger on the way. Electricity at home generally costs less than those public plugs, and many utilities charge less overnight. A properly sized breaker, the right gauge of wire and a solid ground keep the circuit from running warm. A charger on the wall is also turning into a selling point.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Reading',
        body: 'Some drivers here never need us. With a short commute and a healthy outlet nearby, the factory Level 1 cord is often enough, and we’ll say that first. Running on 120 volts, it wins back just a few miles of range per hour. Long daily drives, or two electric cars sharing the house, are where Level 2 earns its place, wired on a separate 240-volt circuit. Before booking, see whether the cord’s outlet also powers a freezer or a workbench, and keep extension cords and tired or warm outlets out of the chain. If the car sleeps at the curb, a home charger usually isn’t workable.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Reading',
        body: 'Age alone tells us little, since a 1950s house might have been rewired last year or not touched in decades. The load calculation answers it. If there’s room, the charger gets a circuit to itself. If not, we quote a load controller that slows charging while the dryer and furnace are busy, alongside a panel or service upgrade, and the choice is yours. We file the permit and book the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Reading Choose Us for EV Charger Installation',
    whyParagraph:
      'Before quoting, a licensed electrician opens your panel and totals the load. You hear straight whether an upgrade or a load controller is needed, the install meets code, and the price you approved is the price you pay.',
    sharedFaqs: [
      {
        q: 'What does an EV charger installation cost in Reading?',
        a: 'Expect a flat price, quoted after the panel inspection. It moves with the charger model, how much wire it takes to get from the panel to your charging spot, and any panel work. Financing is on offer, and no one picks up a tool until you’ve said yes.',
      },
      {
        q: 'How long will the charger install take?',
        a: 'Most charger jobs are wrapped up within several hours on a single visit. A panel upgrade adds time, and a service change also means coordinating with Duke Energy. Whatever applies to your house, you get the schedule ahead of time, so you can plan around it.',
      },
      {
        q: 'Why can’t I install a home charger myself?',
        a: 'The breaker and wire must suit the charger’s draw, the load calculation has to show your panel can handle it, and the work needs a permit and an inspection. Mistakes there can cook wiring inside a wall. It’s licensed electrician work, start to finish.',
      },
    ],
  },
};
