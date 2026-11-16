import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAiry: LocationServiceCopy = {
  localParagraph:
    'In Mount Airy, the panel more than the car decides how a home charger goes in. Census figures put 1,781 of 4,127 homes in the 1960s and 1970s, an era whose panels tend to be crammed with breakers by now. About half the households heat with electricity, which eats into the capacity a charger wants. Most homes are rented, many inside larger complexes, so management has the final word. We size up the panel and load before quoting, flag it when Level 1 suffices, and price it all ahead.',
  emergencyParagraph:
    'A charger that turns hot, an outlet face gone brown, a scorched smell mid-charge or a cable pinched under a tire means unplugging now. If the panel is dry and within reach, flip that breaker. Smoke or fire means everyone leaves and someone calls 911. Saturdays and Sundays included, most calls in Mount Airy get a visit that day.',
  commonIntro:
    'Between the houses off Colerain Avenue and the bigger apartment buildings, these situations account for most of the charger requests we get.',
  localFaqs: [
    {
      q: 'Can a panel feeding electric heat in Mount Airy also run a charger?',
      a: 'Sometimes, and only the numbers say for sure. Electric furnaces and heat pumps claim a big slice of capacity on a January night, so we add them, the water heater and the charger together. If it’s too tight, a device that throttles charging while the heat runs often beats paying for a larger service.',
    },
    {
      q: 'Who arranges a charger at an apartment complex in Mount Airy?',
      a: 'The management office. Chargers in a shared lot or garage are the owner’s or manager’s decision, and they book the electrician. Renting a house instead means getting the landlord’s written okay first. We wire chargers and leave leases to the people who signed them, so the owner approves our quote.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 chargers wired for houses and apartment owners in Mount Airy',
    band1Heading: 'When an Apartment or Home in Mount Airy Needs an EV Charger',
    commonSituations: [
      'A 1960s panel with no blank slots left and a Level 2 charger on the wish list',
      'Electric heat and a new EV fighting over one panel through the winter',
      'A second EV joining the family with only the factory cord to share',
      'A complex owner hearing from residents who are tired of hunting public plugs',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Mount Airy',
        body: 'Level 2 moves energy into the battery far faster than a household receptacle, so a night on the charger yields more driving and fewer mornings stuck waiting. Wake up to a full car and skip the detour to a public station and the line there. Electricity bought at home generally runs cheaper than public charging, and plenty of utilities price overnight power lower, so call yours and ask. Because so many homes here already run electric heat, a properly sized breaker, conductor and ground matters, since it keeps a hard-working panel from overheating. Buyers increasingly count a home charging station among the extras they hope to find.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Mount Airy',
        body: 'Not every driver in Mount Airy needs Level 2. A short daily round trip on Colerain Avenue and a reliable outlet near the car often leave the Level 1 cord handling things, and we’ll say so. That cord draws a modest 120 volts and replaces only a handful of miles for each hour. Heavy mileage, a long commute or a pair of EVs generally call for Level 2 with its own 240-volt feed. Make sure the outlet doesn’t share a breaker with other rooms and that the cord never runs through an extension or a cracked, loose or warm socket. Street-only parking makes a home charger a poor fit.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Mount Airy',
        body: 'Capacity is a math question, and the year of construction is just one input. Room to spare gets the charger a circuit nobody else shares. A shortfall gets you two quotes, one for load management and one for an Electrical Panel Replacement or service upgrade, and you choose. Inside city limits, IBI reviews and inspects electrical permits, so we file the paperwork and meet their inspector.',
      },
    ],
    whyTitle: 'Why Residents and Owners in Mount Airy Choose Us for EV Charger Installation',
    whyParagraph:
      'Each job opens with a licensed electrician checking the panel and adding up the load. If an upgrade or load management is needed, you’ll hear it straight, the wiring meets code, and the price is settled first.',
    sharedFaqs: [
      {
        q: 'How do you figure the price of a charger in Mount Airy?',
        a: 'We open the panel, then quote one flat rate. Three inputs drive it, the charger model, how far wire must go from panel to parking space, and whatever panel changes the load math demands. You agree before work begins, and financing can spread the cost.',
      },
      {
        q: 'How long will a charger installation take in Mount Airy?',
        a: 'Several hours handles most jobs. Plan on extra when the service or panel needs upgrading, and a little more in an older house where the wire has to snake through finished rooms. The timeline arrives with your quote, so there’s no guessing on the day.',
      },
      {
        q: 'Is a Level 2 charger safe to wire yourself in Mount Airy?',
        a: 'Not really. Breaker and wire have to match the charger, a load calculation must show the panel copes next to electric heat, and the city expects a permit plus an inspection. A licensed electrician should carry it from the first measurement to the inspector’s sign-off.',
      },
    ],
  },
};
