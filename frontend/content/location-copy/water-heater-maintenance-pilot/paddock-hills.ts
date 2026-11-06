import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const paddockHills: LocationServiceCopy = {
  localParagraph:
    'Paddock Hills has two kinds of heater job. Tudor Revival and Dutch Colonial houses, part of the 41.8% of homes built before 1940, keep theirs in the basement, where we inspect the flue, the gas union and a drain spigot possibly as old as the tank. Apartment buildings run one heater per flat or one big unit for everyone, management’s decision either way; Census figures put renters at 69.3% of households here. You’ll see a fixed price up front, and a frank answer when a tank isn’t worth servicing.',
  emergencyParagraph:
    'Leaking tank: rotate the cold valve on top shut, then gas or breaker off. Any gas odor: exit, flip nothing, and contact the gas company from the yard. Carbon monoxide alarm: the house empties first. A relief valve that keeps venting water, or hot water gone entirely, belongs in the repair column. Same day on most calls, weekends included.',
  commonIntro:
    'Owners and managers in Paddock Hills usually book after noticing one of these:',
  localFaqs: [
    {
      q: 'I rent an apartment in Paddock Hills. Who handles water heater upkeep?',
      a: 'Your landlord or the company managing the building, because the heater is theirs. Ohio’s ORC 5321.04 (A)(4) and (A)(6) oblige landlords to keep appliances in good, safe working order and to supply reasonable hot water. Send them the details in writing. We tend heaters; settling leases isn’t our role.',
    },
    {
      q: 'Our Tudor in Paddock Hills dates from before 1940. Does that basement setup complicate servicing?',
      a: 'Rarely, though it adds a few minutes. We check where the flue meets the chimney, whether the drain spigot opens and reseats cleanly, and the union on the gas line at the tank. When something needs a part, you see a price and decide before we change anything.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater tune-ups for revival-era houses and apartments in Paddock Hills',
    band1Heading: 'Signs a Water Heater in Paddock Hills Is Due for Maintenance',
    commonSituations: [
      'A basement tank under a Dutch Colonial that crackles for a minute after showers',
      'A closet pan in a flat showing a ring of orange',
      'A Tudor bought last spring, heater history blank',
      'A manager facing a whole hallway of closet heaters with no service log',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Paddock Hills',
        body: 'We start at the drain spigot: empty the tank, then flush until the water leaving it is clear. Loose minerals from the supply settle as a crust on the bottom, the flame or elements must heat through that crust, and that’s the crackling and the early run-outs. The anode comes out next; this rod corrodes in the tank’s place, and once it’s worn thin we quote a new one. The relief valve’s lever gets lifted and its outlet pipe traced. On gas: burner, pilot, flue, gas union. On electric: elements and thermostats. Apartment closets get the pan and shutoff checked. Repairs are quoted and wait for approval.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Book it if the tank works but nobody knows its last drain date, if you’ve moved into one of the older houses without records, if crackling has just appeared, or if you own a building with a heater in each flat. Don’t, if water is seeping from the tank body itself; flushing can’t fix a shell, and replacement is the answer. Brownish hot water or a heater at the end of its run earns the same advice: hold that money for the new one. Draining a few buckets yourself between visits is fine. Our recommendation is a single service each year.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Paddock Hills',
        body: 'Storage tanks get the flush and anode pull. Tankless heaters build scale on the heat exchanger, so we cycle a descaler through and clean the inlet screen. Both gas and electric are common in Paddock Hills, so each gets its own checklist: burner and venting for gas, elements and wiring for electric. Tankless is worth discussing when a tank is near replacement, not sooner, and only if you raise it.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Paddock Hills Book Water Heater Maintenance With Us',
    whyParagraph:
      'Basement heaters under revival-style houses and closet units in apartment buildings are most of our work in Paddock Hills. Licensed and insured technicians, each background-checked and drug-tested, with a figure agreed before we begin.',
    sharedFaqs: [
      {
        q: 'How much is a water heater service in Paddock Hills?',
        a: 'A flat rate, quoted after we see the heater and before we touch it. Heater style, fuel and access move the figure; a basement tank down a narrow stair takes longer than a hallway closet in a flat. You approve the number, and weekend visits cost what weekdays do.',
      },
      {
        q: 'What’s the right service interval for a tank?',
        a: 'Once a year. Crackling or rumbling that crops up between visits says sediment is gathering faster, so bring us in early. A tank left alone for a long stretch may need a longer first flush than the routine ones after, and we’ll tell you if that’s the case.',
      },
      {
        q: 'Can I drain the heater on my own?',
        a: 'Handy owners can let a few buckets out of the drain spigot. Stop if the spigot is old and won’t shut tight afterward; that’s our job. So are the gas burner and the relief valve test, which on an older valve can leave it dripping.',
      },
    ],
  },
};
