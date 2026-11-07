import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const golfManor: LocationServiceCopy = {
  localParagraph:
    'Half the homes in Golf Manor are rented, and Census figures put 45.8% of units in two-family or three- and four-unit buildings, so most fall tune-ups here are booked by an owner for a building, not a single house. Most of the housing went up between 1940 and 1959, and 73.4% heats with gas. That means gas furnaces in basements, often one per unit, venting through flues that have outlived a furnace or two. Each furnace gets its price before work, and we’ll say if one needs nothing.',
  emergencyParagraph:
    'In Golf Manor, a gas smell means leaving the unit and calling the gas company from the sidewalk, without touching switches. A carbon monoxide alarm means everyone out. A furnace that won’t heat in a freeze, a yellow flame, or constant restarting is a repair, urgent with a baby or elderly tenant inside. Most are same day, weekends included.',
  commonIntro:
    'In the two-family and four-unit buildings across Golf Manor, owners usually book a visit after one of these:',
  localFaqs: [
    {
      q: 'I rent in Golf Manor. Can I book a tune-up on my furnace?',
      a: 'Ask your landlord to book it; the furnace belongs to the owner. Ohio’s ORC 5321.04 makes landlords keep supplied heating equipment in good and safe working order. We service furnaces, not leases. If yours smells of gas or won’t heat, tell the owner right away and leave the building if you smell gas.',
    },
    {
      q: 'Can you service every furnace in my building in Golf Manor at once?',
      a: 'Yes, and that’s how most owners here do it. We go unit to unit on one booking, write up what we find on each furnace, and quote any repairs separately so you can decide unit by unit. Let tenants know the day ahead so we can reach the basement or closet.',
    },
  ],
  overrides: {
    ctaLine: 'Fall furnace tune-ups for buildings and houses in Golf Manor',
    band1Heading: 'Signs a Furnace in Golf Manor Is Due for Maintenance',
    commonSituations: [
      'A four-unit building where no one can find a service date for any of the furnaces',
      'A tenant reporting a rattle from the basement each time the heat starts',
      'A two-family house just bought, with two furnaces and no records',
      'A 1950s flue pipe with rust at the joints above a newer furnace',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Golf Manor',
        body: 'In the two- and four-unit buildings of Golf Manor, every furnace gets the full list, unit by unit. Filters are changed where dirty. Each blower wheel is cleaned and its motor checked, and each thermostat is tested from the tenant’s wall to the furnace. We tighten wiring and prove the high limit, flame sensor and pressure switch. With the burners firing, we check flame and igniter and put a light into the heat exchanger to look for cracks. Buildings from the 1950s often vent into an old chimney, so the vent connections get time. A full cycle per unit ends it. Each repair is quoted to the owner first.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'The best case for it is an owner with several units and no records, since one fall round shows where every furnace stands. It also pays on a building you just bought, a dusty smell lingering past the first days of heat, a new rattle or whine, or short cycling. It’s wasted on a furnace serviced last fall that runs normally. A unit with no heat needs Furnace Repair. If we’ve already found a cracked heat exchanger, that money goes toward replacement. Units on a boiler or heat pump need those services. Tenants can keep registers clear and tell the owner about dirty filters.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Golf Manor',
        body: 'Golf Manor heats mostly with gas, so the bulk of each visit is on burners, igniter and flame sensor, the gas line connection, and the heat exchanger and vent. A smaller group of units runs on electric heat. If that’s an electric furnace, we test its elements, sequencers and wiring and confirm the airflow; if it’s a heat pump, we’ll point you to that service.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Golf Manor Book Furnace Maintenance With Us',
    whyParagraph:
      'Landlords in Golf Manor get one booking for the whole building, a written note per furnace and a flat price each, approved before work. Our technicians are licensed and insured and pass drug tests and background checks.',
    sharedFaqs: [
      {
        q: 'How much does furnace maintenance cost in Golf Manor?',
        a: 'We quote every furnace at a flat price before starting. Fuel and access set it, and a building with several units goes on one quote. Worn parts are listed with separate prices, and the owner picks which ones we fix.',
      },
      {
        q: 'How often do the furnaces in a rental need servicing?',
        a: 'Yearly, each fall, ahead of the normal first freeze around October 25 according to the National Weather Service. Seeing all the units in the same week makes record keeping simple and catches trouble before tenants need the heat.',
      },
      {
        q: 'What can tenants or owners do between furnace tune-ups?',
        a: 'Tenants can keep registers and returns clear, swap thermostat batteries and keep storage away from the furnace closet or basement corner. Owners or a handy manager can change dirty filters. The burner compartment and gas valve are for a licensed technician. Odd sounds or smells should go straight to the owner.',
      },
    ],
  },
};
