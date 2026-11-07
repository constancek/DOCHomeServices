import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const arlingtonHeights: LocationServiceCopy = {
  localParagraph:
    'Arlington Heights is mostly old houses: 64.7% predate 1940 by Census figures, and just over half are rented. The furnace usually sits in the basement, probably not the first thing to heat the house, vented up a chimney that predates it, and the landlord is often the one booking. Gas heats most homes; about a third use electricity, which may be a heat pump or baseboard. Venting and the heat exchanger get our closest look. You hear the price first, and we’ll say if nothing’s needed.',
  emergencyParagraph:
    'A gas smell is a repair call in Arlington Heights, not a tune-up: get outside, touch no switches, phone the gas company. A carbon monoxide alarm empties the house first. Also urgent: no heat in a freeze, a weak yellow flame, nonstop restarts. Babies and older people feel it first. Most get same-day help, weekends included.',
  commonIntro:
    'Pre-war houses and small rentals make up most of our furnace visits in Arlington Heights. These usually lead to a booking:',
  localFaqs: [
    {
      q: 'I rent a house in Arlington Heights. Should I book the furnace tune-up?',
      a: 'No, ask your landlord. The furnace is the owner’s, and in Ohio ORC 5321.04 says landlords must keep supplied heating equipment in good and safe working order. We service furnaces, not leases. Tell the owner about any noise or smell in writing, and get out if you smell gas.',
    },
    {
      q: 'Why does the tune-up look so hard at the chimney in Arlington Heights?',
      a: 'Because most houses here were built before 1940, long before today’s gas furnaces. An old chimney can be oversized or deteriorated inside, and that affects how the furnace vents. We check the draft, the flue pipe and its joints, and price anything that needs work before starting.',
    },
  ],
  overrides: {
    ctaLine: 'Fall furnace tune-ups for older houses and rentals in Arlington Heights',
    band1Heading: 'Signs a Furnace in Arlington Heights Is Due for Maintenance',
    commonSituations: [
      'A pre-1940 house with the furnace vented into the original chimney',
      'A landlord with several rentals and no idea when each furnace was last checked',
      'A tenant reporting a burning smell that doesn’t go away',
      'A furnace cycling on and off more often than it did last year',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Arlington Heights',
        body: 'Old basements in Arlington Heights can mean narrow stairs and a furnace tucked into a corner, so we work carefully in tight spaces. The routine: replace a dirty filter, clean the blower wheel and check the motor bearings, then run the thermostat through a call for heat. Next the safety side: wire connections plus the limit switch, flame sensor and pressure switch, each proven. With the burners firing we read the flame and the igniter, and look inside the heat exchanger for cracks. Because most of these houses predate 1940, the draft up the chimney gets measured, not guessed. A full cycle finishes. Repairs wait for the owner’s approved price.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'For a landlord in Arlington Heights with a few rentals, a fall round is the easy call: every furnace looked at in one trip, each with its own notes. Owners living in their house should book when the furnace arrived with no records, when they’ve recently moved in, when the scorched-dust odor doesn’t fade, when a rattle shows up, or when burners cut out early. Leave it if the furnace was checked last fall and runs right. A dead furnace calls for Furnace Repair. A heat exchanger already found cracked means banking the money for a replacement. Boilers and heat pumps are booked separately. Filters and registers are yours.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Arlington Heights',
        body: 'Arlington Heights is mostly on gas. Those furnaces get the flame side checked: igniter, burners, flame sensor, the fitting where gas comes in, the heat exchanger and the flue. Electricity heats roughly a third of homes, a figure that includes heat pumps and baseboard heaters. For an actual electric furnace, the elements, sequencers and wiring are tested and airflow measured. Heat pumps go to their own service.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Arlington Heights Book Furnace Maintenance With Us',
    whyParagraph:
      'Owners of small rentals in Arlington Heights get a licensed, insured technician who has passed a drug test and background check, a flat price per furnace before work, and no overtime fees on weekend visits.',
    sharedFaqs: [
      {
        q: 'What does furnace maintenance cost in Arlington Heights?',
        a: 'Each furnace is priced flat before work. The number depends on fuel type and how hard the furnace is to reach; a cramped pre-war basement can take longer. Parts we find worn are listed separately with their own price, and the owner signs off before we do anything.',
      },
      {
        q: 'How often should a furnace be tuned up, and when?',
        a: 'One visit every fall. The National Weather Service gives the normal first freeze as about October 25, so get on the schedule before that. Landlords with a few houses usually have us do them all in one week.',
      },
      {
        q: 'What can I do to my furnace without a technician?',
        a: 'Between visits, owners can replace filters as they get dirty and change the thermostat batteries. Tenants can keep rugs and furniture off registers and keep the basement corner around the furnace free of storage. Nobody but a licensed technician opens the burner compartment or touches the gas valve, and tenants should report problems to the owner.',
      },
    ],
  },
};
