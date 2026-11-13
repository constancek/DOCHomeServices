import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastWestwood: LocationServiceCopy = {
  localParagraph:
    'In East Westwood, the person booking an AC tune-up is usually a landlord. Census figures show about three in four homes are rented, and roughly two in five sit in buildings of five or more units, so the work is often a run of closet air handlers and a row of condensers behind one building. The single-family houses here mostly date from the 1950s, with central air added later. Owners hear a flat price per unit first, and a unit that needs nothing is listed that way.',
  emergencyParagraph:
    'Some calls belong with AC Repair. An apartment without cooling in a heat wave, water dripping into the flat below, or a burning smell all qualify, and with that smell the breaker stays off. Elderly tenants, infants and residents with breathing problems are in the most danger. Expect us the same day on most calls, Saturdays and Sundays as well.',
  commonIntro:
    'These are the problems that bring building owners in East Westwood to us for maintenance:',
  localFaqs: [
    {
      q: 'My apartment AC is running loud. Can I book a tune-up as a tenant?',
      a: 'The landlord or manager has to book it, since the equipment is theirs. Send them a written note about the noise or any water. Ohio’s ORC 5321.04 (A)(4) requires supplied air conditioning be kept in good and safe working order. We service air conditioners, not leases.',
    },
    {
      q: 'Can one visit cover all the AC units in my building?',
      a: 'Yes. We go unit by unit on the same trip, clean the condensers out back as a group, and give you a sheet showing each unit and anything it needs. Repairs carry their own prices, so the urgent ones can go ahead and the rest can wait.',
    },
  ],
  overrides: {
    ctaLine: 'Building-wide AC tune-ups for rental owners in East Westwood',
    band1Heading: 'Signs an AC in East Westwood Is Due for Maintenance',
    commonSituations: [
      'A row of condensers behind an apartment building with grass grown up around them',
      'A tenant reporting water in the pan under a closet air handler',
      'A rental just bought with no record of any AC service',
      'A heat pump that hums loudly every time it switches on',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in East Westwood',
        body: 'For each unit, the filter is checked and replaced if it’s clogged. Out back, every condenser coil is cleaned and the grass and litter around it cleared. Inside, the closet air handler gets its evaporator coil inspected, its drain line cleared and its pan checked, since a full pan is the usual tenant complaint. We put gauges on to read refrigerant; low pressure means a leak, which we quote as a repair instead of recharging. Electrical parts, meaning the capacitor, contactor and connections, are tested with the blower, airflow and thermostat, and the unit runs a complete cooling cycle. The owner approves any part first.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'A yearly round makes sense for a building where no one knows the service history, a property just purchased, or units where tenants report drips, rattles or weak cooling. It’s not worth it for a unit serviced in the last year that’s running fine. Units that have stopped cooling, or show ice on the lines, need AC Repair, not a tune-up. Where we’ve said a system is at the end, put the money into AC Installation & Replacement. Window units aren’t part of this. Maintenance staff can change filters and keep the outdoor units clear between our visits.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in East Westwood',
        body: 'Census figures show 61.9% of homes in East Westwood heat with electricity, a number that lumps heat pumps in with electric furnaces and baseboard, so expect a fair few heat pumps on these buildings. Because a heat pump handles winter warmth as well as summer cooling, it gets two visits, spring and fall, and the fall one adds its reversing valve and defrost controls. Central air sharing ducts with a gas furnace gets the spring visit alone.',
      },
    ],
    whyTitle: 'Why Landlords in East Westwood Book AC Maintenance With Us',
    whyParagraph:
      'Much of our work here is apartment buildings with many systems under one roof. Licensed and insured technicians, background checks and drug tests on every employee, and a per-unit flat price the owner signs off on.',
    sharedFaqs: [
      {
        q: 'How much does AC maintenance cost per unit in East Westwood?',
        a: 'Every system is priced at a flat rate up front, and a whole building can go on one quote. The price moves with whether it’s a heat pump or straight central air, and with how far we have to go to reach closets and the condenser row. Repairs we spot are listed separately, and the owner picks which go ahead.',
      },
      {
        q: 'How often should apartment AC systems be serviced?',
        a: 'Once a year in spring, before the hot weeks, works for central air. Heat pumps carry the heating too, so they should be seen again in the fall. Doing a whole building in one week each spring keeps every unit on the same record.',
      },
      {
        q: 'What can our maintenance staff handle themselves?',
        a: 'Staff can change filters when they’re dirty, keep grass and trash back from the condensers, make sure vents aren’t blocked, and replace thermostat batteries. Panels, refrigerant lines and coil fins should stay untouched; those are for a licensed technician.',
      },
    ],
  },
};
