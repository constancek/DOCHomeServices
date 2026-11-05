import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'More than half of Newport’s homes are rented, by Census figures, so a water heater repair here is as likely to be booked by a landlord as by a homeowner. The housing is old too: 46.5% went up in 1939 or earlier. That means gas tanks wedged into pre-war basements with old venting, and small heaters in closets, one per unit, in houses split into flats. We work out what failed, explain it in plain words and quote the price before any part comes out.',
  emergencyParagraph:
    'Close the cold supply valve on a leaking tank, then turn its gas or power off, and in a split-up house warn whoever lives below. For a gas smell, walk out, leave switches alone and phone the gas company from the sidewalk. Carbon monoxide alarm: everyone out. Babies and older relatives can’t wait; most calls are same day, weekends included.',
  commonIntro:
    'In Newport most water heater calls come from old basements and from apartments carved out of old houses. These come up most:',
  localFaqs: [
    {
      q: 'I rent in Newport and the hot water is out. Who do I call?',
      a: 'Your landlord, in writing, so there’s a record. Kentucky tenants report repairs to the owner or manager, who decides who to send. In some buildings one large water heater serves every unit, and that’s management’s call. We fix water heaters, not leases, and landlords book us directly.',
    },
    {
      q: 'Does the East Row Historic District affect replacing my water heater?',
      a: 'Not for work inside the house. Newport asks for a Certificate of Appropriateness for many exterior changes in the East Row, Buena Vista and York Street districts, so a new vent through a wall could need one. Plumbing inspections are done by the state, and we pull the permit where one is needed.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for Newport homes and rentals',
    band1Heading: 'Common Water Heater Problems in Newport Homes and Apartments',
    commonSituations: [
      'A closet heater in a house split into flats with a relief valve dripping on the floor',
      'One shared tank in a small building leaving every unit with lukewarm water',
      'A basement gas heater near the river that took water in a flood',
      'A pilot that goes out every few days on an older gas tank',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Start with what you can check safely. When several people shower in a row, a small tank runs dry and needs time to heat again. The dial on the heater may have been bumped lower. An electric unit may have a breaker off. A gas unit may have its valve closed, or the pilot out; relight it per the label only with no smell of gas. In a rental, tell the landlord rather than opening anything. We’re needed for water on the floor, discolored or rotten-egg hot water, popping noises or a pilot that won’t stay on. We find the fault and price it first.',
      },
      {
        title: 'Repair or Replace Your Newport Water Heater?',
        body: 'The heater’s label, not the house’s age, is the guide. A Newport house built before 1940 often has a far younger tank in its basement. Thermocouples, gas valves, elements, thermostats, relief valves, anode rods and dip tubes are replaceable parts. A tank leaking from the body is beyond repair, so we price a new one. If a heater took floodwater, its controls usually have to be replaced before it runs again. We show both prices when both make sense. In Kentucky the state inspects plumbing, and we pull the permit where one is needed.',
      },
    ],
    whyTitle: 'Why Newport Landlords and Homeowners Call Us for Water Heater Repair',
    whyParagraph:
      'Our technicians know Newport’s cramped older basements and closet heaters in split-up houses. They are licensed, background-checked and drug-tested, and landlords and owners approve a flat rate before we start.',
    sharedFaqs: [
      {
        q: 'What does water heater repair cost in Newport?',
        a: 'Your bill tracks the failed part and the fuel. A thermocouple on gas is a shorter visit than a control valve, and electric elements have a separate figure. Owners get one flat number after we test, and no wrench turns until they agree. Weekends cost the same as weekdays.',
      },
      {
        q: 'Should I repair or replace the water heater in my Newport rental?',
        a: 'If a part failed and the tank is dry, repair it. Read the install date on the heater rather than judging by the building. A tank leaking through its wall has to go. For landlords with several units, we price each heater separately so you can plan.',
      },
      {
        q: 'Why does the hot water run out after one shower?',
        a: 'A closet tank in a Newport flat holds less than a basement heater, so it empties first. If the change was sudden, look at a cracked dip tube or, on electric, a burned lower element. With nothing hot at all, try the breaker or the supply handle, then call us.',
      },
    ],
  },
};
