import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const batavia: LocationServiceCopy = {
  localParagraph:
    'Batavia has been the Clermont County seat since 1824, and its village housing shows that age, with a Census median of 1955 and about six homes in ten built before 1960. Houses from the 1940s and 50s were wired for far less than today’s kitchens, so many have had circuits tacked on until no slots remain. Roughly two households in five rent. We look inside that panel and tally the load first, admit it when a Level 1 cord is fine, and settle the price before a wire is run.',
  emergencyParagraph:
    'Quit charging if a charger, plug or outlet turns hot, discolored or soft, or smells burnt. Treat a breaker that trips each session or a split cable jacket the same way. If the floor is dry, kill the circuit, and with smoke or fire, leave and call 911. We come the same day on most calls, weekends included.',
  commonIntro:
    'Older village houses and apartment buildings lead to charger calls like these in Batavia:',
  localFaqs: [
    {
      q: 'Who issues the permit for an EV charger in Batavia?',
      a: 'Clermont County Building Inspection, through Permit Central on Bauer Road, issues permits for work in the village, and its fee schedule covers electrical permits. We file the application, book the inspection and meet the county inspector, so you don’t have to sort out which office handles what.',
    },
    {
      q: 'My house in Batavia was built in the 1950s. Is there room for a charger?',
      a: 'Maybe. Panels from that decade were often filled long ago with circuits for newer appliances. Open spaces aren’t the whole story, so we run a load calculation to see how much capacity is really left. If it’s short, we quote a load-management device next to a panel upgrade and you decide.',
    },
  ],
  overrides: {
    ctaLine: 'EV charging at home for older houses and rentals in Batavia',
    band1Heading: 'When a Home in Batavia Needs an EV Charger',
    commonSituations: [
      'A 1950s panel that ran out of breaker slots years before the EV arrived',
      'A second EV in the family and one slow cord trying to serve both',
      'A landlord in the village adding a charger to attract EV-driving tenants',
      'A breaker that already trips when the dryer and the space heaters run together',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Batavia',
        body: 'In Batavia, a Level 2 charger in the house means the morning drive starts on a full battery, because a night on a 240-volt circuit restores much more range than a cord on a wall outlet ever could. You skip the trip to a public station and the wait for an open plug. Charging at your own place is often less expensive than public charging, and many utilities set lower off-peak rates, so ask yours. A professional install puts the right breaker, wire size and grounding on the circuit so a 1950s panel isn’t strained. Chargers are also catching the eye of buyers.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Batavia',
        body: 'In Batavia, short-trip drivers sometimes never outgrow the Level 1 cord, as long as the car sleeps near a dependable outlet. That cord pulls ordinary 120-volt current and gives back only a few miles of range per hour, which is fine for errands around the village, and we’ll be upfront when that describes you. Daily commuters and families with two EVs generally need Level 2 on its own 240-volt circuit. Check whether the cord’s outlet shares its breaker with other rooms, and don’t feed the cord through an extension cord or an outlet that wobbles or warms. A car that lives at the curb usually can’t use a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Batavia',
        body: 'In Batavia, two houses from the same year can be wired very differently, so arithmetic rather than age decides. Headroom earns the charger a line of its own, typically on a 40 to 60 amp breaker depending on the unit. Too little headroom earns two prices from us, one for load management and one for a panel or service upgrade. Clermont County then permits and inspects the job.',
      },
    ],
    whyTitle: 'Why Homeowners in Batavia Choose Us for EV Charger Installation',
    whyParagraph:
      'Older village panels get read carefully by our licensed electricians, who add up the house’s load before talking price. You hear honestly whether it needs an upgrade or just load management, and the to-code install holds its price.',
    sharedFaqs: [
      {
        q: 'Why does one charger install cost more than another in Batavia?',
        a: 'Our flat rate, quoted after an electrician has seen your panel, reflects which charger you want, the run of wire from the panel to where you park, and whether that panel needs work. In older village houses the panel tends to be the biggest variable. You approve the figure first, and financing is available.',
      },
      {
        q: 'Does a charger install take all day in Batavia?',
        a: 'Usually not. Several hours takes most jobs from arrival to testing the car on the new charger. When a panel upgrade is part of it, the day runs longer, and we spell out the timeline in advance so you can plan around the power being off.',
      },
      {
        q: 'Why do you recommend a licensed electrician for a charger in Batavia?',
        a: 'A charger draws a heavy load for hours, so the circuit has to be sized right and the panel checked with a load calculation. The work also needs a county permit and inspection. On wiring from the 1940s or 50s, an amateur install is a fire risk we won’t leave behind.',
      },
    ],
  },
};
