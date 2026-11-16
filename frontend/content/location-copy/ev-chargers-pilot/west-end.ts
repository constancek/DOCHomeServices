import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'Renters fill close to nine in ten homes in the West End, by Census figures, which makes most charger decisions the owner’s or association’s. Rowhouses outnumber detached houses, and nearly two in five homes predate 1940, built when a modest service was normal and a spare 240-volt line wasn’t part of the plan. Newer buildings in the neighborhood usually have more to give. The panel gets opened and its load added up first, you hear if the cord you own is enough, and the price comes before any wire.',
  emergencyParagraph:
    'Stop charging if the charger or outlet is hot, if there’s a burnt smell, if the cable is crushed or if the breaker trips the moment the car connects. Flip that breaker only with dry hands on a dry floor. Smoke or fire means everybody leaves and someone calls 911. We’re out the same day on most calls, weekends included.',
  commonIntro:
    'In the West End, owners and residents usually reach out about charging for one of these reasons.',
  localFaqs: [
    {
      q: 'Can a charger go on the outside of a rowhouse in the West End?',
      a: 'Sometimes, but in the Betts-Longworth Historic District a charger on an outside wall may count as an exterior change that needs review, so we check with the city first. Wherever it goes, an outdoor charger needs an outdoor-rated unit, solid mounting and weather protection for its connections.',
    },
    {
      q: 'I rent in the West End. How do I get a charger?',
      a: 'Put the request to your landlord in writing. A charger needs the owner’s written yes, and the owner or manager is the one who books us. In a managed complex, everything goes through management. We wire chargers and leave leases alone, so the quote goes to the owner.',
    },
  ],
  overrides: {
    ctaLine: 'EV charging for rowhouses and apartment buildings in the West End',
    band1Heading: 'When an Apartment or Home in the West End Needs an EV Charger',
    commonSituations: [
      'A tenant with a new EV who has put the charger request to the landlord in writing',
      'A rowhouse owner whose original small service has no space for a new circuit',
      'A plug-in cord stretched through an extension cord to reach the car',
      'A building owner who wants to offer residents off-peak charging at home',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in the West End',
        body: 'For an owner in the West End, a charger is something tenants and buyers increasingly look for. For the driver, Level 2 refills the battery much sooner than a regular outlet, so each charge carries further and less time is spent tethered. Charging overnight at home avoids lining up at a public charger near downtown, and it usually costs less than paying one, especially where the utility has lower off-peak rates, as many do. Properly sized breakers, wire and grounding keep a long charging session from overheating an old circuit or straining the rest of the building.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in the West End',
        body: 'In the West End, plenty of drivers won’t need Level 2. The cord packed with the car runs off a normal 120-volt receptacle and charges slowly, which a few short trips around downtown can live with, provided a sound receptacle is near where you park. A daily commute or a two-EV household is a Level 2 job, on a 240-volt line that serves nothing else. First, ask whether that receptacle has a breaker to itself, and keep extension cords and old, wobbly or warm receptacles out of the setup. Street parking usually makes a charger at the house impractical, and we’ll say so up front.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in the West End',
        body: 'Old rowhouse panels surprise people in both directions, so we do the arithmetic. Headroom gets the charger a line of its own, typically on a 40 to 60 amp breaker depending on the unit. No headroom gets the owner two quotes to weigh, load management or a larger panel or service. Inspection Bureau, Inc. (IBI) reviews and inspects city electrical permits, and the filing is ours.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in the West End Choose Us for EV Charger Installation',
    whyParagraph:
      'Owners get licensed electricians who open the panel and do the load math before quoting anything. You hear whether the building needs more capacity, load management or neither, and the price is fixed before wiring starts.',
    sharedFaqs: [
      {
        q: 'What does an EV charger installation cost in the West End?',
        a: 'No single number covers it. Once the panel’s been checked, the flat rate is built from the charger, the distance from panel to parking space and any panel work an older building needs. The owner okays it first, and financing is offered.',
      },
      {
        q: 'How quickly can a charger be installed in a building in the West End?',
        a: 'After the owner signs off, a typical job is several hours. Panel work stretches that. Tenants can be told ahead of time when the power goes off and when charging can start, because we hand over the schedule before work begins.',
      },
      {
        q: 'Why can’t I just wire a charger myself in the West End?',
        a: 'Matching the breaker and wire to the charger, a load calculation and a permit with inspection are all licensed work. In an older rowhouse, a slip can overheat wiring that has already spent a long time in the walls.',
      },
    ],
  },
};
