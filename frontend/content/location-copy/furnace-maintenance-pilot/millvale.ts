import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Furnace tune-ups in Millvale are booked by owners and managers, not tenants. Census figures for the main blocks show 91% of homes rented and about 65% heated by electricity, a share that includes heat pumps and baseboard. Much of the housing is 1950s CMHA townhomes, many recently renovated, so a typical visit is a utility-closet furnace in a row of units. CMHA residents report heat concerns to management. For private owners, the price per furnace comes first, and we say so when a unit needs nothing.',
  emergencyParagraph:
    'CMHA residents report these to management; private owners book a repair. Smell gas: get out, flip no switches and call the gas company outdoors. Alarm for carbon monoxide: everyone out. No heat during a freeze, a furnace stuck restarting, a yellow flame. Babies, older neighbors and anyone ill are at greatest risk. Same-day help on most calls, weekends too.',
  commonIntro:
    'Owners and managers of townhomes in Millvale tend to book a fall visit after one of these:',
  localFaqs: [
    {
      q: 'I live in CMHA housing in Millvale. Can I book a furnace tune-up myself?',
      a: 'No, and you shouldn’t have to. CMHA owns that furnace and arranges its upkeep through its own staff or the contractors it hires. Write to the management office about anything you notice, such as a burning smell, a new noise or a filter that looks clogged.',
    },
    {
      q: 'I rent a townhome in Millvale from a private landlord. Who books the fall service?',
      a: 'Your landlord does; the furnace is theirs. Cincinnati’s rule for rentals where the tenant can’t set the heat is 70F inside once outdoor air has stayed under 60F for a full day, and Ohio law adds a duty to supply reasonable heat. We service furnaces, not leases. Put concerns to the landlord in writing.',
    },
  ],
  overrides: {
    ctaLine: 'Fall furnace service for townhome owners and property managers in Millvale',
    band1Heading: 'Signs a Furnace in Millvale Is Due for Maintenance',
    commonSituations: [
      'A row of townhome furnaces with no shared service log',
      'A tenant reporting a burning smell from a utility closet after the heat came on',
      'An electric furnace with a dusty blower that hums louder than it used to',
      'A renovated unit whose furnace has never had a yearly check',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Millvale',
        body: 'In the townhomes here, the furnace usually stands in a tight utility closet, so we line up access with the tenant before the day. With the panel off, we check the filter and drop in a new one if it’s caked, clean the blower wheel and listen to the motor bearings, and test the thermostat wiring back to the control board. The high-limit switch gets tested on every unit. Electric furnaces get each element and sequencer metered. Gas units add flame, igniter, flame rod, inducer pressure switch, heat exchanger and flue. Each runs one complete heat call before we close it up. Owners see repair prices first.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'Owners and managers get value from a fall round when nobody has a record of the last service, when a building has just been bought, or when tenants report a hot-dust smell that hasn’t faded, a new rattle or squeal, or heat that clicks on and off in short bursts. It’s poor value on a unit serviced within the year that runs fine. One that’s quit heating needs Furnace Repair; one with a known cracked heat exchanger needs replacing more than a tune-up. Plenty of electric heat in Millvale is really a heat pump, which needs heat pump service. Tenants help by keeping vents uncovered and reporting filthy filters.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Millvale',
        body: 'Millvale is mostly electric heat, and part of that is heat pumps or baseboard, not furnaces. Where it is an electric furnace, we meter the heating elements, check that the sequencers bring them on in stages, look over the wiring for scorching and confirm air is moving across the elements. The minority on gas get the burner, igniter, flame rod, gas fitting, heat exchanger and venting looked at instead.',
      },
    ],
    whyTitle: 'Why Landlords and Managers in Millvale Book Furnace Maintenance With Us',
    whyParagraph:
      'Townhome rows full of electric furnaces are the bulk of our maintenance in Millvale. Each technician is licensed and insured and has passed a background check and drug test, and owners sign off on a flat price per unit.',
    sharedFaqs: [
      {
        q: 'How do you price furnace maintenance for several units in Millvale?',
        a: 'Each furnace gets a flat price, and a block of units goes on a single quote before anyone picks up a tool. Fuel and how the closet opens up set the number. Anything broken we find is priced unit by unit and waits for the owner’s yes.',
      },
      {
        q: 'How often should rental furnaces in Millvale be serviced?',
        a: 'Yearly, in the fall, ahead of the first freeze the National Weather Service puts near October 25. Doing every unit in one week leaves the owner a single date to track and gives tenants one notice to plan around.',
      },
      {
        q: 'What can tenants and owners do between furnace visits?',
        a: 'Tenants: keep beds and couches off the floor vents, put fresh batteries in the thermostat and tell management when a filter looks black. Owners: change filters that are dirty and keep the utility closet empty of storage. The burner panel and the gas valve are for a technician, never a tenant or handyman.',
      },
    ],
  },
};
