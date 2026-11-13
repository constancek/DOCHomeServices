import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westwood: LocationServiceCopy = {
  localParagraph:
    'Westwood is Cincinnati’s largest neighborhood, and much of its housing is apartment buildings. By Census figures about two in three homes are rented and one in three is a single detached house, so plenty of charger requests start with a landlord or manager. Over half the housing went up from the 1940s through the 1970s, and panels of that age are often crowded. We look inside the panel and tally the load before quoting, tell you if the cord you own is enough, and price the job up front.',
  emergencyParagraph:
    'Renters who find a plug, outlet or wall unit hot or darkened, smell burning, notice a crushed cable or watch a breaker keep tripping should stop charging and tell the landlord. Owners can flip that breaker off if the floor is dry. Get out and call 911 at any sign of smoke or fire. Most calls are same-day, weekends too.',
  commonIntro:
    'In Westwood, these are the requests and problems that usually lead to a call about charging.',
  localFaqs: [
    {
      q: 'Can I get a charger at my apartment in Westwood?',
      a: 'Only through your landlord or manager. The owner has to approve a charger in writing, and in a managed building the manager books the work and decides about chargers in shared lots. Send the request in writing and keep a copy. We wire chargers and leave leases to owners, so the call is theirs.',
    },
    {
      q: 'Does a house in Westwood from the 1960s have room for a charger?',
      a: 'Sometimes. Plenty of panels from that decade are crowded already, and some can’t safely carry a Level 2 charger on top of what they serve. Tallying the load shows where yours stands. Without room, we price load management next to a panel upgrade, and you pick.',
    },
  ],
  overrides: {
    ctaLine: 'EV charging for houses and apartment buildings in Westwood',
    band1Heading: 'When an Apartment or Home in Westwood Needs an EV Charger',
    commonSituations: [
      'A renter with a new EV asking the landlord or manager about a charger',
      'A landlord who wants to offer tenants charging at home as a perk',
      'A mid-century panel already crowded, with no slot left for a 240-volt line',
      'A plug-in cord feeding from an old outlet that warms up while the car charges',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Westwood',
        body: 'An EV is simpler to own once it refills where you sleep. Level 2 beats a household outlet by a wide margin, so each session adds more range and the car is ready when you head out. Crowded public chargers become optional, and you can plug in when it suits you, often on lower off-peak rates, which many utilities offer. Over a year, home charging usually costs less than paying at public stations. Breaker, wire and ground sized correctly keep the line from overheating. For landlords and sellers, a charger is turning into a feature renters and buyers ask about.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Westwood',
        body: 'Level 1 is the slow cord meant for an ordinary 120-volt receptacle. For a few short trips a week and a parking spot beside a sound receptacle, it may be all you need, and we’ll say so instead of selling you hardware. Daily drivers, long commutes and two-EV homes usually need Level 2 on a 240-volt line nothing else uses. Find out first whether that receptacle shares its breaker. Never daisy-chain the cord through an extension cord, and never plug it into a receptacle that’s loose, warm or worn. Cars parked along the street usually can’t charge from the house.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Westwood',
        body: 'Age gives a hint, but the decision comes from totaling what the panel already carries. Where there’s margin, the charger gets wiring nobody else uses, typically on a 40 to 60 amp breaker depending on the unit. Where there isn’t, you or the owner compare load management, which turns the charger down when the building’s demand peaks, against more service capacity. Inspection Bureau, Inc. (IBI) reviews and inspects city electrical permits, and we file ours.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Westwood Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians tally the panel’s load before anyone suggests a charger. Owners and residents get a straight answer on whether to upgrade, use load management or leave things alone, a code-compliant install, and a price agreed first.',
    sharedFaqs: [
      {
        q: 'How do you price an EV charger for a home in Westwood?',
        a: 'After the panel check, one flat rate covers it. The charger, the distance the wire travels to the parking spot and any panel work needed first decide the figure. You or the owner approve it before anything starts, and you can finance it.',
      },
      {
        q: 'How long does it take to install a charger in Westwood?',
        a: 'Several hours of work on most installs, and longer when the panel needs an upgrade. We give the timeline before starting, and in apartment buildings that lets the manager warn residents when power or parking will be affected.',
      },
      {
        q: 'Why does an EV charger in Westwood need a licensed electrician?',
        a: 'A charger needs breaker and wire sized to it, and a load calculation has to count the heating, cooling and other big appliances already on the panel. A permit and inspection come with the job. Mistakes show up as tripped breakers or overheated wiring, which is why this is licensed work.',
      },
    ],
  },
};
