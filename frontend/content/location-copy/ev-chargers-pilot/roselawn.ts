import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const roselawn: LocationServiceCopy = {
  localParagraph:
    'Two of every three homes in Roselawn are rented, Census figures show, and three in ten sit in three- and four-unit buildings, so a charger usually begins with the owner’s yes. The typical building dates from the early 1960s. Panels from then were modest and have since been loaded with air conditioning and appliance circuits, and the prewar houses may have less room again. Our electrician sizes up the panel and the load first, mentions it if a Level 1 cord would do, and fixes the price before wiring.',
  emergencyParagraph:
    'Leave the charger off if the plug looks black or soft, the outlet is too hot for your hand, or you smell burning. A breaker that drops each time charging begins counts too. Touch the panel only when you’re dry and it’s cool. Smoke or fire means everyone out and a 911 call. We usually come that day, weekends included.',
  commonIntro:
    'Between the fourplexes, the larger complexes and the single houses, these four come up most often in calls from Roselawn.',
  localFaqs: [
    {
      q: 'My address says 45237. Is my charger permit handled by Cincinnati?',
      a: 'Not necessarily. The 45237 ZIP stretches into Reading and Amberley Village, and each runs its own permits. Inside Cincinnati, Inspection Bureau, Inc. handles electrical permit review and inspection. Before scheduling, we look up which jurisdiction your street falls in and file with that office.',
    },
    {
      q: 'I own a condo in Roselawn. What do I need before installing a charger?',
      a: 'Written approval from your association first. A charger in a shared lot or on common walls is the association’s call, and so is how the power is metered. Once they agree, we check which panel would feed it and price the job for you and the board.',
    },
  ],
  overrides: {
    ctaLine: 'Charging circuits for fourplexes, condos and houses in Roselawn',
    band1Heading: 'When an Apartment or Home in Roselawn Needs an EV Charger',
    commonSituations: [
      'A fourplex owner weighing a charger after a tenant buys an EV',
      'A 1960s panel crowded with circuits for the AC, dryer and range',
      'A commute along Reading Road that a 120-volt cord can’t keep up with',
      'Charging off-peak at home instead of paying at a public station',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Roselawn',
        body: 'Relying on public chargers gets old quickly, and a Level 2 unit at home ends that. It pushes range back into the battery much faster than a wall outlet, so each charge goes further and the car sits idle less. Hook it up at night and it’s full by morning, with no line at a station. Electricity at home tends to undercut public charging, and many utilities discount overnight power. A licensed install pairs the right breaker, wire and ground with the charger so nothing runs hot. For owners, it’s also a feature renters and buyers notice.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Roselawn',
        body: 'Level 2 isn’t for everybody. A resident who runs a few errands each week and parks within reach of a healthy outlet can usually stick with the cord that shipped with the car and keep the money. On 120 volts, that cord wins back only a handful of miles each hour. Commuters, long-distance drivers and anyone sharing the house with a second EV usually need Level 2 wired on its own 240-volt line. Make sure no other loads share the cord’s outlet, and never reach it through an extension cord or plug into a worn, loose or warm receptacle. Street parking generally rules out home charging.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Roselawn',
        body: 'The building’s age hints at the answer, and the load calculation gives it. In a three- or four-unit building, that means checking whichever panel would feed the charger. With spare capacity, the charger runs from its own circuit. Without it, we price load management, which eases charging while the building is busy, next to a panel or service upgrade. You pick, and we pull the permit.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Roselawn Choose Us for EV Charger Installation',
    whyParagraph:
      'Each job starts with a licensed electrician reading the panel and doing the load math. You learn plainly whether it calls for an upgrade or load management, and the code-compliant install costs exactly what you approved.',
    sharedFaqs: [
      {
        q: 'What sets the cost of an EV charger in Roselawn?',
        a: 'Your flat rate comes after we’ve looked at the panel, and it rests on three things, the charger model, the distance the wire travels to reach the car, and any panel work. Owners who would rather spread the cost can finance it.',
      },
      {
        q: 'How long is a typical EV charger installation?',
        a: 'Several hours for most installs. A panel upgrade adds time and can push the job to another day. We hand you the timeline before starting, which helps a landlord give tenants notice and helps an owner plan when the car can’t charge.',
      },
      {
        q: 'Is a home EV charger a safe do-it-yourself project?',
        a: 'No. Getting the breaker size wrong, skipping the load calculation or leaving out the permit and inspection can all end with a circuit overheating. Licensed electricians are trained to handle each of those steps, which is why that’s who should wire it, and who we send.',
      },
    ],
  },
};
