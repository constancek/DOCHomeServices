import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountWashington: LocationServiceCopy = {
  localParagraph:
    'Most houses in Mount Washington can take a charger, though the panel deserves a careful look first. Census figures put 4,225 of 7,075 homes in the four decades after 1939, and panels from that stretch are often jammed with circuits by now. Overall, 3,992 homes are detached, which simplifies things when the car parks off the street, and 2,778 are rented, leaving owners to decide. Before any quote, we open the panel and run the load, say whether Level 1 covers you, and settle the price.',
  emergencyParagraph:
    'Stop charging at once if a plug or outlet goes hot or soft, the charger shows scorch marks, a burning smell lingers, or the breaker drops whenever the car connects. With the panel dry and reachable, switch that breaker off. Smoke or fire means leaving and dialing 911. Most calls between Beechmont and Sutton see us that day, weekends included.',
  commonIntro:
    'Post-war houses and apartment buildings make up most of the neighborhood, and these are the situations that usually start a conversation about charging.',
  localFaqs: [
    {
      q: 'Will a panel from the 1950s in Mount Washington have space for a charger?',
      a: 'Often there are no open slots left, because decades of added circuits filled them. Slots aren’t the whole story, though. The load calculation tells us whether the service can carry a charger. If it can’t, a load-management device frequently costs less than a service upgrade, and we price both.',
    },
    {
      q: 'Can I add a charger at a condo or rental in Mount Washington?',
      a: 'Yes, once approval is in hand. A tenant needs the landlord’s written okay, after which the landlord or manager calls us. Condo owners clear it with the association, and chargers in a shared lot are for the owner or manager to decide. Leases sit outside our work, though we’ll coordinate with whoever signs the quote.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 EV charger installs for post-war houses in Mount Washington',
    band1Heading: 'When a Home in Mount Washington Needs an EV Charger',
    commonSituations: [
      'A 1950s panel with every slot taken and a charger on the wish list',
      'A new EV whose battery outruns what the trickle cord replaces overnight',
      'Two EVs at one address and a single slow cord passed between them',
      'A landlord fielding a tenant’s request to add a charger',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Mount Washington',
        body: 'Level 2 pours charge into a battery much faster than a standard outlet, so every night delivers more range and less downtime. By the time you leave for Beechmont Avenue, the car is full, and nobody has to hunt down a public station or wait at one. Electricity off your own meter often costs less than public charging, and lots of utilities discount off-peak hours, which makes a quick call to yours worthwhile. A professional sizes breaker, wiring and ground so a post-war panel doesn’t overheat under long, steady draw. For owners, a charger is becoming one more draw for buyers looking at houses near the Campus Lane water tower.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Mount Washington',
        body: 'Plenty of drivers between Beechmont and Sutton can skip us. Modest mileage plus a sound outlet near the car means the factory Level 1 cord may keep pace, and we’ll be upfront about it. On 120 volts, it restores range slowly, a handful of miles for every hour. Someone driving downtown daily, heading out through Anderson Township, or parking two EVs at one address usually wants Level 2 with a 240-volt line all its own. Check which other outlets ride that breaker. Extension cords and sockets that are old, loose or warm have no place in a charging setup, and curbside parking rules a home charger out.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Mount Washington',
        body: 'Load math decides what the panel can handle. The median build year runs from 1953 to 1976 depending on the part of the neighborhood, and that’s only a clue. Enough capacity earns the charger a circuit of its own, while a shortfall gets a load-management device and an Electrical Panel Replacement or service upgrade priced together for you to pick. IBI reviews and inspects electrical permits inside city limits, and we pull ours and see the final inspection through.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Mount Washington Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians read the panel in a post-war house and total its load before recommending anything. Expect a blunt verdict on upgrade or load management, wiring to code, and a price locked before work.',
    sharedFaqs: [
      {
        q: 'How is the cost of a home charger worked out in Mount Washington?',
        a: 'Pricing is flat, and it comes after we’ve opened the panel. The charger itself, the distance the wire travels from panel to parking spot, and anything the panel needs first determine the figure. Work waits for your approval, and financing can spread the cost for those who want it.',
      },
      {
        q: 'How long will installing a charger take in Mount Washington?',
        a: 'Several hours covers most jobs on this side of town. If the panel or service needs upgrading first, it takes longer. You’ll have the timeline before we start, so you can plan when the car charges and when the hookup will cut the power briefly.',
      },
      {
        q: 'Why do you need an electrician for an EV charger in Mount Washington?',
        a: 'Breaker and wire have to suit the charger, a load calculation must show the panel can take it, and the city requires a permit with an inspection. That trio is licensed electrician work, and the inspector signs off before your first charge.',
      },
    ],
  },
};
