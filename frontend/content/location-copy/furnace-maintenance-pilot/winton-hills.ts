import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Nearly every home in Winton Hills is rented, 97.0% by Census figures, and much of it is housing authority property at Winton Terrace and Findlater Gardens, where furnace upkeep runs through management. So our work here is mostly for owners of detached houses and two-family buildings. Electricity heats 58.4% of homes, a count that also takes in heat pumps and baseboard, so we confirm the system before quoting. The price is set before we start, and we’ll say so if a furnace needs nothing.',
  emergencyParagraph:
    'Tenants: these go to management. Owners: book a repair. A gas smell means out the door, no switches, no relighting, and call the gas company from outside. A carbon monoxide alarm means everybody out. A stone-cold unit in a freeze, endless restarts, a yellow flame. Small children and older neighbors can’t wait; most calls are same day, weekends too.',
  commonIntro:
    'Owners of houses and doubles book a fall visit in Winton Hills after one of these:',
  localFaqs: [
    {
      q: 'I live at Winton Terrace. Can I book a furnace tune-up myself?',
      a: 'No, and you shouldn’t have to. The furnace belongs to the housing authority, so put in a work order with management and describe what you’re noticing: a smell, a noise, weak heat. Inside Cincinnati, rentals where tenants don’t control the heat must stay at 70F once cold weather settles in.',
    },
    {
      q: 'I own a two-family building in Winton Hills. What does a fall visit cover?',
      a: 'Both furnaces, on one trip, on one quote. Each gets the filter, blower, controls, safety switches and a full heating cycle, plus burners and venting on gas units or elements on electric ones. You decide on any repair after seeing its price. Leases are between you and your tenants; we keep to the furnaces.',
    },
  ],
  overrides: {
    ctaLine: 'Fall furnace tune-ups for owners of houses and doubles in Winton Hills',
    band1Heading: 'Signs a Furnace in Winton Hills Is Due for Maintenance',
    commonSituations: [
      'A two-family building where neither furnace has a service date written on it',
      'A tenant reporting a burnt smell from the vents after the first cold night',
      'A detached house bought this year with an electric furnace in a closet',
      'A blower that has started squealing on startup in a rental between tenants',
    ],
    proseSections: [
      {
        title: 'What Furnace Maintenance Includes in Winton Hills',
        body: 'Plenty of units here heat electrically, so a visit may open at the elements and sequencers, yet the base routine never changes. A dirty filter is swapped, the blower wheel cleaned and its motor checked, the thermostat and low-voltage wiring tested. Every unit’s high limit is proven; gas units also have the flame sensor and pressure switch proven. On gas we see the igniter light the burners, read the flame, look for cracks in the heat exchanger and confirm the flue drafts. Closet installs get a clearance check. One full heat cycle wraps up. Repairs are priced for the owner’s yes before anything is replaced.',
      },
      {
        title: 'When Furnace Maintenance Is Worth It, and When It Isn’t',
        body: 'For an owner in Winton Hills, a fall visit earns its keep on a furnace nobody has paperwork for, a building that just changed hands, a tenant reporting scorched air days after the heat came on, a fresh rattle or squeal, or cycles that cut out early. Several units checked on one trip stretch the value further. It’s wasted on a furnace serviced last fall that behaves. A unit that has quit heating needs Furnace Repair. If we’ve found its heat exchanger cracked, put that money toward a replacement. Heat pump and boiler units have separate services. Tenants in managed housing take concerns to management, not to us.',
      },
      {
        title: 'Gas and Electric Furnace Maintenance in Winton Hills',
        body: 'Electricity leads here, though that count lumps heat pumps and baseboard in with furnaces. An electric furnace in Winton Hills gets each element metered, the sequencers checked for staging the elements on one after another, its wiring inspected for heat-darkened insulation, and airflow confirmed. The gas furnaces, a big minority, get burners, igniter, flame sensor, gas fitting, heat exchanger and vent pipe checked.',
      },
    ],
    whyTitle: 'Why Landlords in Winton Hills Book Furnace Maintenance With Us',
    whyParagraph:
      'Owners here want one trip, one quote and a straight word on each unit. Our technicians hold licenses and insurance and pass background and drug screening. Flat prices get approved first, and weekends cost no extra.',
    sharedFaqs: [
      {
        q: 'How is a furnace tune-up priced for a rental in Winton Hills?',
        a: 'Per furnace, at a flat rate you see before we start. Gas or electric and how easy the unit is to reach set it, and a building’s furnaces can share one quote. Anything we find that needs fixing is priced on its own and waits for the owner’s yes.',
      },
      {
        q: 'When should landlords schedule furnace maintenance?',
        a: 'Every fall, once a year. Aim for before the normal first freeze, which the National Weather Service puts around October 25 for Cincinnati. Checking every unit in the same month gives you one date to track and catches problems before tenants are depending on the heat.',
      },
      {
        q: 'What can a tenant or owner do between visits?',
        a: 'Swap a dirty filter, keep vents and returns unblocked, change thermostat batteries and keep the furnace closet free of boxes. In managed units, check the lease; management may want even filters left to them. Only a technician should open the burner section or work the gas valve.',
      },
    ],
  },
};
