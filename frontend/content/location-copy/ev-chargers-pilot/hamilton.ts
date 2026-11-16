import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'Census figures count more than a quarter of the houses in Hamilton as built in 1939 or earlier, and close to half of households rent. A pre-war house may still be on its first small service, leaving little headroom for a charger’s 240-volt line, and a 1950s panel is often packed tight. Owners in newer neighborhoods usually have more to work with. We start with the panel and a load calculation, tell you straight if the Level 1 cord covers your driving, and get your sign-off on the price first.',
  emergencyParagraph:
    'In Hamilton, pull the plug if the charger runs hot, the outlet looks melted or charred, the cord jacket is crushed, or the breaker drops on every charge. Cut that circuit only if you can keep dry and clear of heat. Call 911 from outside if there’s smoke or fire. We come out same day on most calls, weekends included.',
  commonIntro:
    'From pre-war houses near downtown to rentals and newer neighborhoods, these are the charger requests we get most in Hamilton.',
  localFaqs: [
    {
      q: 'Does a charger in a historic district in Hamilton need city approval?',
      a: 'It might. The Architectural Design Review Board issues a Certificate of Appropriateness for exterior work in German Village, Dayton Lane, Rossville and the city’s other historic areas. Whether a wall-mounted charger counts as exterior work is something the city decides, so we ask before anything goes on the wall.',
    },
    {
      q: 'Who handles the power side of a service upgrade in Hamilton?',
      a: 'Hamilton runs its own electric utility, so Duke Energy isn’t involved inside the city. If the load calculation shows your charger needs a bigger service, the city utility handles its side of the connection, and we coordinate the panel work and the permit.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charger installs for pre-war and newer houses in Hamilton',
    band1Heading: 'When a Home in Hamilton Needs an EV Charger',
    commonSituations: [
      'A new EV on order for a 1920s house that never got a bigger service',
      'A crowded 1950s panel with no slot left for a 240-volt breaker',
      'A landlord who wants tenants charging on site rather than at public stations',
      'Breakers that already trip when the furnace, dryer and kitchen run together',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Hamilton',
        body: 'Level 2 gets far more charging done overnight than a wall outlet, so more range goes back in and the car spends fewer hours plugged in. Plug in at dinner and it’s finished by morning, so nobody drives across town to a public station and waits there for a free spot. Power through your own meter usually costs less than a public charger, and utilities often bill late-night power at a lower rate, so ask the city utility how it handles that. Correct breaker size, conductor and grounding keep an older electrical system in Hamilton from running warm. Buyers also value a charger.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Hamilton',
        body: 'Your car’s own cord is Level 1, built for a standard 120-volt outlet. It refills slowly, a few miles an hour, yet someone in Hamilton who drives lightly and parks beside a working outlet can live with it and won’t need us. Check that the outlet isn’t shared with lights or other rooms, and skip extension cords, along with any outlet that’s cracked, loose or warm. Weekday commuting, or a second EV, is where Level 2 on a separate 240-volt circuit makes sense. Where the car parks on the street, charging from the house usually isn’t practical.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Hamilton',
        body: 'In Hamilton, an old house doesn’t automatically need a new panel. The load calculation settles it. Enough capacity means a circuit just for the charger. A shortfall means load management priced beside a panel or service upgrade, and you choose. Hamilton has its own permit office and lets only registered contractors pull electric permits, so we pull ours there and set up the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hamilton Choose Us for EV Charger Installation',
    whyParagraph:
      'Before recommending anything in Hamilton, we open the panel and work through a load calculation, say plainly whether an upgrade or just load management is called for, and our licensed electricians build it to code at a price settled first.',
    sharedFaqs: [
      {
        q: 'How much should I budget for an EV charger in Hamilton?',
        a: 'Budget from our written flat rate, which comes after the panel check. The charger you pick, how far the wire has to travel to reach the car, and any panel work set its size. Financing can spread the cost, and the quote holds once you approve it.',
      },
      {
        q: 'What is the usual install time for an EV charger in Hamilton?',
        a: 'Several hours on most jobs. A panel or service upgrade makes it longer, since the city utility has its own part to do. You get the timeline before work starts, along with when the house will be without power.',
      },
      {
        q: 'Is it legal to install my own EV charger in Hamilton?',
        a: 'The city only issues electric permits to registered contractors, and the circuit needs a load calculation, proper sizing and a passed inspection. That makes it a job for a licensed electrician, not a weekend project, and keeps the install on record.',
      },
    ],
  },
};
