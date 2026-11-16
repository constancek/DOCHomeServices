import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'In Winton Hills, CMHA owns most of the homes, at Winton Terrace and Findlater Gardens, and Census figures show nearly every household rents. Any charger there is the housing authority’s decision, so residents should take it to management, not to us. Our charger customers are private owners of doubles, townhouses and the few detached houses. With a 1955 median, panels are often full, and electricity heats most units. We assess the panel and load first, say if Level 1 will do, and price before wiring.',
  emergencyParagraph:
    'Unplug and stop if a charger, plug or outlet runs hot, shows scorch marks or begins to melt, or smells burnt. So does a Level 1 cord on an extension cord. Switch that breaker off if it’s safe. Smoke or flames mean get out and dial 911. Owners usually see us the same day, weekends too.',
  commonIntro:
    'These are the situations that bring private landlords to us in Winton Hills.',
  localFaqs: [
    {
      q: 'I live at Winton Terrace. Can I ask you to install a charger?',
      a: 'Not directly. CMHA owns the property and handles changes through its own management and work orders, so a charger request goes to the housing authority or its property manager. If management decides to add charging, it books the work. We can’t install anything a resident requests on their own.',
    },
    {
      q: 'What happens when a tenant wants a charger at my double in Winton Hills?',
      a: 'Put your approval in writing for the tenant, then book the work yourself as the owner. We check the panel that would feed the charger, run the load calculation and quote a flat price. Older doubles often need load management or a panel upgrade, and we price both. We install chargers, not lease terms.',
    },
  ],
  overrides: {
    ctaLine: 'EV chargers for private owners of doubles and townhouses in Winton Hills',
    band1Heading: 'When an Apartment or Home in Winton Hills Needs an EV Charger',
    commonSituations: [
      'A tenant with a new EV asking the owner of a double for a charger',
      'An electrically heated unit where the panel has little left for a car',
      'A 1950s panel with every slot full and breakers that trip in winter',
      'An owner adding charging to make a rental easier to let',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Winton Hills',
        body: 'On a private rental in Winton Hills, a Level 2 charger gives the tenant’s car back its range in far less time than a wall socket, so each charge goes further and the car spends less time tied down. Overnight, the car fills and leaves in the morning with nobody hunting for a public station. Electricity at home usually comes cheaper than public charging, and many utilities discount off-peak power. A professional install matches breaker, wiring and grounding to the charger, so a 1950s panel isn’t pushed into overheating. For the owner of a double, a charger is turning into something tenants ask about and buyers expect.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Winton Hills',
        body: 'Before an owner pays for anything, ask how the tenant drives. A tenant on short daily trips, parked near a sound outlet, may do fine with the Level 1 cord from the car, which wins back only modest range each hour from 120 volts, and we’ll say that before quoting. Long commutes, or two EVs at one address, usually justify Level 2 wired on a dedicated 240-volt line. Have the tenant confirm nothing else shares that outlet and that the cord never runs through an extension cord or a warm, loose outlet. Curbside parking usually rules out a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Winton Hills',
        body: 'In Winton Hills, a 1955 median says little about one building’s panel, and the load calculation says a lot. With room, the charger gets a dedicated circuit, typically on a 40 to 60 amp breaker depending on the unit. Without room, the owner chooses between a load controller and a bigger panel or service, priced together. Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits for the City of Cincinnati.',
      },
    ],
    whyTitle: 'Why Property Owners in Winton Hills Choose Us for EV Charger Installation',
    whyParagraph:
      'Here the owner hears from a licensed electrician only after the panel is open and the load is added up. You get a plain verdict on upgrade or load controller, wiring that meets code, and a price settled first.',
    sharedFaqs: [
      {
        q: 'How do you price a charger installation in Winton Hills?',
        a: 'The owner gets one flat rate once we’ve opened the panel. It follows the charger chosen, the footage of wire from that panel to the tenant’s parking spot, and any panel work required. Financing is available, and nothing begins until the owner signs off.',
      },
      {
        q: 'How long does a charger installation take in Winton Hills?',
        a: 'Several hours for most jobs. An older double needing a load controller or a panel upgrade takes longer, as does a building whose panel sits far from the parking. Owner and tenant both get the timeline first, including any stretch without power.',
      },
      {
        q: 'Can a landlord install an EV charger without an electrician in Winton Hills?',
        a: 'No. Someone licensed has to size the circuit against the panel with a load calculation, and the work needs a permit and inspection. In a rental, that paperwork also protects the owner if a question ever comes up later.',
      },
    ],
  },
};
