import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const loveland: LocationServiceCopy = {
  localParagraph:
    'In Loveland, the usual charger question is whether one panel can feed two cars. Most houses have room, with Census figures showing close to six in ten built in 1980 or later. Electric heat is the wrinkle, since roughly four homes in ten use it, and heat plus a charger is a heavy draw. We size that up with a panel check and load calculation, tell you if the cord that came with the car suffices, and quote a fixed price.',
  emergencyParagraph:
    'Unplug the car if the charger, plug or receptacle has gone hot, discolored or soft, or the room smells scorched. Kill that circuit only from a dry spot, touching nothing warm. Smoke or flame means everyone out and 911 from the yard. An electrician can usually reach you the same day in Loveland, weekend or not.',
  commonIntro:
    'On the hills above the Little Miami, these four situations account for most charger calls in Loveland:',
  localFaqs: [
    {
      q: 'My mailing address says Loveland. Does the city handle my charger permit?',
      a: 'Only if the house sits inside city limits, and a lot of the 45140 ZIP falls in Miami or Symmes Township instead. Within the city, electrical review and inspection are contracted to Inspection Bureau, Inc. Townships route it elsewhere. We look up the parcel before filing anything.',
    },
    {
      q: 'Can one panel handle chargers for two cars in Loveland?',
      a: 'Often it can. The math decides between two separate circuits and a single unit that splits power across both plugs. When the margin is thin, a controller that eases off the chargers while the house is under heavy demand usually costs less than a new service, and we put both on paper.',
    },
  ],
  overrides: {
    ctaLine: 'Chargers for one EV or two, installed at houses across Loveland',
    band1Heading: 'When a Home in Loveland Needs an EV Charger',
    commonSituations: [
      'A second EV arriving and a single trunk cord to share between two cars',
      'An electric furnace or heat pump already claiming much of the panel',
      'A round trip to work that outruns what a 120-volt outlet replaces overnight',
      'A household that wants to plug in after dark when power can be cheaper',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Loveland',
        body: 'Since three in four homes in Loveland are owner-occupied, a charger here usually stays put for the long haul. Level 2 refills the pack far quicker than a kitchen outlet, so every session buys more range and the car sits idle less. Come morning, both vehicles can be full without anyone driving to a public plug and waiting for a stall. Home power often runs cheaper than public charging, and many utilities discount late-night use. A properly sized breaker with correct wire and a solid ground keeps heat out of the circuit, and listings with a charging station are getting noticed.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Loveland',
        body: 'For a light driver in Loveland whose car sits beside a healthy outlet, the cord packed with the car may cover it, and we’ll be upfront about that. On 120 volts it adds only a handful of miles for each hour on the plug. Two commuters, long weekday drives or a pair of EVs usually justify Level 2 on a circuit that serves nothing else. Before booking, confirm the cord’s receptacle isn’t shared with a freezer or a space heater, and keep it off extension cords and tired, loose or warm outlets. If the car lives at the curb, wiring the house won’t help.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Loveland',
        body: 'The panel’s capacity gets calculated, not assumed from the house’s age. With headroom, the charger gets a breaker of its own. Without it, you’ll see a quote for load management and another for a panel or service upgrade, and you decide. Downtown sits in a local historic district, so for an exterior-wall charger there we check with the city first, then handle the permit and inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Loveland Choose Us for EV Charger Installation',
    whyParagraph:
      'We read your panel and work the load out on paper before suggesting a single part. You’ll know plainly whether an upgrade or load control is called for, and our licensed crew installs to code at the agreed price.',
    sharedFaqs: [
      {
        q: 'What sets the cost of a Level 2 charger in Loveland?',
        a: 'Mostly three things, which are the charger model, the distance from your breaker box to where the car parks, and any upgrade the panel needs. After a look at the panel we give one flat number, and you okay it before a tool comes out. Financing is offered.',
      },
      {
        q: 'How long does it take to put in a home charger in Loveland?',
        a: 'A typical install fills several hours of one day. A panel upgrade stretches it beyond that. The quote comes with a schedule, including the window when the power will be shut off, so nobody is caught off guard.',
      },
      {
        q: 'Why should a licensed electrician install my charger in Loveland?',
        a: 'Because the breaker and conductor size, the load math and the inspection all have to line up. A charger pulling hard for hours on an undersized circuit is a real fire risk. A licensed electrician gets the permit, does the math and stands behind the work.',
      },
    ],
  },
};
