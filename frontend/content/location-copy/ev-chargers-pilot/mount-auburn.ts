import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAuburn: LocationServiceCopy = {
  localParagraph:
    'A home charger in Mount Auburn is usually doable, though an old house and a new building get different plans. Census figures count 1,771 of 3,128 units built in 1939 or earlier, and a service that age may have little headroom for 240 volts. The 655 units built after 2010 generally have room or can use load management. With two in three homes rented, the owner says yes or no. We study the panel and load before quoting, mention it when Level 1 covers you, and settle the price beforehand.',
  emergencyParagraph:
    'Treat it as an emergency when the plug or receptacle runs hot, a faceplate shows scorch marks, burning odors creep up mid-charge, or the breaker quits each time the car connects. Kill that circuit only with dry hands. With smoke or fire, leave and phone 911. Most calls on the hill see us that day, weekends too.',
  commonIntro:
    'Italianate houses cut into flats sit a few doors from brand-new apartment blocks, and these are the reasons owners and residents ask us about charging.',
  localFaqs: [
    {
      q: 'Can a charger hang on an outside wall in Prospect Hill?',
      a: 'It may be possible. Prospect Hill is a city local historic district, and exterior changes there can need review, so a wall-mounted unit might count as one. We check with the city first. Any outdoor install also needs a unit rated for outdoor use, solid mounting and weather protection.',
    },
    {
      q: 'Do I need landlord approval to add a charger in Mount Auburn?',
      a: 'Yes, written approval, and then the landlord or manager books us. Condo owners go to their association first, and chargers in a shared lot are the owner’s or manager’s call. We handle wiring, not leases. Meanwhile, a Level 1 cord on an outlet the owner has approved may cover lighter driving.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charging at home for old houses and new flats in Mount Auburn',
    band1Heading: 'When an Apartment or Home in Mount Auburn Needs an EV Charger',
    commonSituations: [
      'An 1890s house with a small original service and an EV on the way',
      'A tenant asking the owner of a split-up Victorian for a charger',
      'Overnight charging on a slow cord that never quite fills the battery',
      'A panel with every space spoken for and breakers that already trip',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Mount Auburn',
        body: 'Level 2 beats the outlet in the wall by a wide margin, so each charge buys more miles and the car spends less of its life tethered. Set it for overnight and it’s ready when you head down the hill, with no circling the blocks for a public plug or idling in line. Power from your own meter costs less than public charging, and many utilities bill off-peak hours at a cheaper rate, so ask. Where most houses predate 1940, having a professional size the breaker, wire and ground keeps the new circuit from overheating or straining old equipment. Renters and buyers increasingly notice whether one comes with the property.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Mount Auburn',
        body: 'Lots of light drivers in Mount Auburn can stay with the Level 1 cord the car arrived with, provided a sound outlet sits close to where they park, and we’ll point that out. That cord feeds from a plain household 120-volt outlet and gains back just a few miles each hour. A long commute, steady daily mileage or two EVs sharing one address usually justify Level 2 on a separate 240-volt line. Confirm the cord’s outlet isn’t splitting a breaker with half the floor, and keep extension cords and old, loose or warm outlets away from it. Cars that live at the curb rarely suit a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Mount Auburn',
        body: 'The load calculation answers it, regardless of when the house was framed. Enough room means a line serving the charger alone. Too little means a load-management device and a panel or service upgrade get priced against each other, and you pick. Electrical permits for addresses in Mount Auburn are reviewed and inspected by Inspection Bureau, Inc. (IBI), and we steer ours to final sign-off.',
      },
    ],
    whyTitle: 'Why Owners and Residents in Mount Auburn Choose Us for EV Charger Installation',
    whyParagraph:
      'A licensed electrician reads your panel and runs through the load before anything gets quoted. You get a straight call on upgrade versus load management, wiring that meets code, and a number agreed before we start.',
    sharedFaqs: [
      {
        q: 'How do you price a charger installation in Mount Auburn?',
        a: 'Expect a single flat rate once we’ve seen the panel. It shifts with the charger you choose, the length of run between panel and parking spot, and any work the panel needs. Plaster walls in older houses can lengthen that route. Financing is available, and you sign off before we begin.',
      },
      {
        q: 'How much time should a charger install take in Mount Auburn?',
        a: 'Most are finished in several hours. Allow more if the panel or service has to be upgraded, which turns up more often in a house from before 1940. We lay out the timeline with the quote, so the schedule holds no surprises for you or your tenants.',
      },
      {
        q: 'Why can’t I wire my own Level 2 charger in Mount Auburn?',
        a: 'Because the circuit must match that particular charger, the panel needs to clear a load calculation, and the city’s permit and inspection apply. In a house that may still carry original wiring, guesswork is riskier. Bring in a licensed electrician for the whole job.',
      },
    ],
  },
};
