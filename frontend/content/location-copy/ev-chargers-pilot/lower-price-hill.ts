import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lowerPriceHill: LocationServiceCopy = {
  localParagraph:
    'In Lower Price Hill, most charger requests start with the building owner, since Census figures show more than four in five homes here are rented. The housing is old, too, with nearly two-thirds built in 1939 or earlier, much of it in two-families and small multi-unit buildings. Their services were sized long before anyone plugged in a car. When an owner calls, we open the panel, do the load calculation, say if a 120-volt cord will do, and price it before any work.',
  emergencyParagraph:
    'Charging should stop if a plug or outlet runs hot or black, something smells burnt, or the car’s cord is on an extension cord. Go to the breaker only if nothing near the panel is wet or warm. Should smoke or flame appear, get outside and call 911. Tell the landlord; we can usually come that day, weekends as well.',
  commonIntro:
    'Owners of two-families and small apartment buildings tend to call about one of these in Lower Price Hill:',
  localFaqs: [
    {
      q: 'I rent an apartment in Lower Price Hill. Can I get a charger put in?',
      a: 'Not without the owner. A landlord’s written approval comes first, and then the landlord or property manager books the work. Chargers for a shared lot are likewise the owner’s decision. We put in chargers, not lease clauses, so start with whoever owns the building.',
    },
    {
      q: 'I park on the street in Lower Price Hill. Can I still charge at home?',
      a: 'Usually not. A cord stretched across the sidewalk to the curb is a hazard to everyone walking by, and a charger needs a fixed mounting point beside an off-street space. If the building has one, the owner can ask us to look. Otherwise a public station is the realistic choice.',
    },
  ],
  overrides: {
    ctaLine: 'Charger wiring for owners of old two-families and walk-ups in Lower Price Hill',
    band1Heading: 'When an Apartment or Home in Lower Price Hill Needs an EV Charger',
    commonSituations: [
      'A tenant with a new EV and the landlord’s signature on an approval',
      'An 1800s building whose service has nothing left for a 240-volt line',
      'A charging cord plugged into an aging receptacle that warms up',
      'An owner adding a charger to an off-street space to attract tenants with EVs',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Lower Price Hill',
        body: 'For a building owner in Lower Price Hill, a charger is a feature that sets a unit apart. Level 2 pushes energy into a battery much faster than a wall plug, so tenants gain more range per session and spend less time waiting. The car fills overnight and leaves ready, with no trek to a public station. Home charging tends to cost less than public plugs, and many utilities lower the rate off-peak. Getting breaker size, conductors and grounding right in an old building keeps the circuit from cooking, and future buyers are starting to look for chargers.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Lower Price Hill',
        body: 'A lot of drivers here won’t need us. If your trips are short and the car parks within reach of a sound outlet, the cord that came with it runs on plain 120-volt power and trickles back only a few miles for each hour connected, which may cover you. A daily commute usually calls for Level 2 on a dedicated 240-volt line. Ask the owner whether that receptacle feeds anything else, keep extension cords out of the setup, and stop using a worn, loose or warm outlet. Curbside parking usually means a home charger won’t work, and we’ll tell you before you spend a dime.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Lower Price Hill',
        body: 'An old building can still have room, so the load calculation decides, not the year. With capacity to spare, the charger gets its own breaker sized for the unit. Without it, the owner compares a load-management quote with a service upgrade quote and chooses. Inside Cincinnati, Inspection Bureau, Inc. reviews and inspects electrical work, and we file and meet the inspector.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Lower Price Hill Choose Us for EV Charger Installation',
    whyParagraph:
      'Owners hear it straight from licensed electricians who have opened the panel and tallied the building’s load first. If an upgrade or load control is needed, you’ll know why, and the code-compliant work comes in at the approved figure.',
    sharedFaqs: [
      {
        q: 'What does a charger installation cost in Lower Price Hill?',
        a: 'The owner gets a single flat rate after we’ve opened the panel. It turns on the charger chosen, the length of wire from panel to parking space, and any panel or service work the building needs. The owner approves first, and financing is an option.',
      },
      {
        q: 'How long does a charger install take in an older building in Lower Price Hill?',
        a: 'Plan on several hours for an ordinary job. Fishing wire through an old building or upgrading a panel adds time. Before we begin, the owner and tenants get the schedule, including when the building’s power will be cut.',
      },
      {
        q: 'Can a landlord wire a charger in Lower Price Hill without an electrician?',
        a: 'Not safely. Breaker and wire have to suit the charger, the load numbers have to clear, and the job needs a permit and an inspection. A licensed electrician covers each step, and an undersized wire buried in an old wall can overheat where nobody sees it.',
      },
    ],
  },
};
