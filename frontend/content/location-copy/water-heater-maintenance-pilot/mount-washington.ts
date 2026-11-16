import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountWashington: LocationServiceCopy = {
  localParagraph:
    'Mount Washington went up after World War II: Census figures put only 11.4% of homes at 1939 or earlier, and 40.6% of households rent. The heater we service off Beechmont Avenue is usually in a 1950s or 1960s basement, ready for a flush, an anode pull and a relief valve test, plus a look at the flue and gas line. Apartment heaters sit in closets over pans, and the owner books those. The price is set first, and we’ll tell you if a tank isn’t worth it.',
  emergencyParagraph:
    'Tank leaking? Change the booking to a repair, and turn the cold inlet off at the top, then kill the gas or breaker. Same for a stuck-open relief valve or no hot water. Gas odor: get out, leave switches alone, ring the gas company. Carbon monoxide alarm: everyone outside. Same day on most calls, weekends too.',
  commonIntro:
    'Up on the hills of Mount Washington, these are the usual reasons a service gets booked:',
  localFaqs: [
    {
      q: 'I rent in one of the apartment buildings in Mount Washington. Can I book the water heater service?',
      a: 'Not the landlord’s tank, no. Send your landlord the problem in writing. Ohio’s ORC 5321.04 says supplied appliances have to be kept in good and safe working order and tenants get reasonable amounts of hot water. We service water heaters, not leases; owners in Mount Washington tend to book the whole building in one go.',
    },
    {
      q: 'Our house in Mount Washington dates from the 1950s. What does a first service usually turn up?',
      a: 'Often a thick layer of sediment, if nobody has drained it, and a drain valve we crack open slowly because older ones can refuse to shut tight. The label tells us when the tank went in. After the anode and relief valve checks, you’ll hear plainly whether it’s worth keeping up.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater checkups for post-war houses and apartments in Mount Washington',
    band1Heading: 'Signs a Water Heater in Mount Washington Is Due for Maintenance',
    commonSituations: [
      'A 1950s basement heater with no flush anyone remembers',
      'Popping from a closet heater on an upper floor of an apartment building',
      'An owner with several rental units and no service dates written down',
      'A rust streak running down from the end of the relief valve pipe',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Mount Washington',
        body: 'Here’s the visit. First the tank gets drained and flushed, because minerals from the water pile up on its floor and the burner or elements waste their heat getting through them; that pile is the rumble. Second, the anode rod: it’s screwed into the top and corrodes so the tank shell can stay whole, and when it’s down to bare wire we quote another. Third, the relief valve, which we trip by hand while watching its discharge line. Gas heaters get the burner, pilot, vent and gas connection inspected, and electric ones get elements and thermostats tested. Apartment closet pans get checked. You okay any repair.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Three Mount Washington situations make the visit worth paying for: a post-war basement tank never once flushed, a house you just bought with nothing in the file, and an owner with a building full of closet units. A heater that has started popping makes four. The visit is wasted on a shell that already weeps water; replacing it is the only fix. It’s also poor value on a heater giving rusty water or one close to the end of its run, and we’ll say keep that money for the new one. Draining a bucket now and then is fine for handy owners. Yearly is our advice.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Mount Washington',
        body: 'Gas service is common in Mount Washington, which puts a burner, pilot and vent on the checklist at many homes; electric tanks swap those for a test of each element and thermostat. Either kind gets drained and its anode looked at. Tankless heaters work differently: they get descaled, with cleaning solution circulated through the heat exchanger, and the small inlet filter cleaned. Moving to tankless later is your call, and we won’t lean on it.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Mount Washington Book Water Heater Maintenance With Us',
    whyParagraph:
      'From 1950s basements off Beechmont to apartment closets with drain pans, we know how heaters are set up in Mount Washington. Licensed, insured, background-checked and drug-tested technicians, no overtime charges, and your approval on price first.',
    sharedFaqs: [
      {
        q: 'What does a water heater tune-up cost in Mount Washington?',
        a: 'A flat rate, quoted before we start and set by the heater, tank or tankless, its fuel and how easy it is to reach. A closet heater boxed in behind shelving takes longer than an open basement tank. Landlords get each unit priced on one quote, and extra parts such as an anode rod are listed separately.',
      },
      {
        q: 'How often should I have my water heater maintained?',
        a: 'Every year is what we advise. If popping or rumbling starts before the next visit, call then, since that noise is sediment, and the longer it sits the harder your burner or elements work through it.',
      },
      {
        q: 'Can I just flush the tank myself?',
        a: 'A handy owner can open the drain valve and let a bucket or two run out. If that valve is stiff with age, leave it, since an old one may not close tight after. The gas burner and tripping the relief valve are ours to handle.',
      },
    ],
  },
};
