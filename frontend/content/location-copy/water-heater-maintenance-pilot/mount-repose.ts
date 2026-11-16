import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountRepose: LocationServiceCopy = {
  localParagraph:
    'Mount Repose is mainly owner-occupied houses from the 1960s and 1970s; Census figures give a median build of 1978, and 84.4% of units are detached homes. So the heater is usually in a basement or garage, likely the second or third one on that spot, hooked to gas pipe and a vent connector that have outlasted several tanks. The newer streets are simpler: drain, rod, valve. We put a number on it before starting and will tell you if your tank no longer earns a service.',
  emergencyParagraph:
    'Leaking from the tank body: turn the cold valve at its top, then shut fuel or power. Smelling gas: get out, leave every switch and the pilot alone, and phone the gas company outside. Hearing a carbon monoxide alarm: out first, questions later. Same for a relief valve stuck discharging or no hot water. Usually same day, weekends too.',
  commonIntro:
    'In owner-occupied houses across Mount Repose, a heater tends to drop these hints before it needs real repair:',
  localFaqs: [
    {
      q: 'We just bought a house in Mount Repose. Should we have the water heater serviced?',
      a: 'It makes a good first job, particularly when the sellers left nothing in writing about it. We drain it, pull the anode, trip the relief valve and give you a plain verdict, so you know whether to budget for a new heater soon or simply keep a yearly visit on the calendar.',
    },
    {
      q: 'The water heater in our 1970s house in Mount Repose has started popping. Is it failing?',
      a: 'Usually not. Popping almost always comes from sediment on the floor of the tank, and draining it out is the fix. If it also weeps at the base or sends rusty water to the taps, that points toward replacement, and we’d rather tell you straight than sell you a flush.',
    },
  ],
  overrides: {
    ctaLine: 'Annual water heater check-ups for houses in Mount Repose',
    band1Heading: 'Signs a Water Heater in Mount Repose Is Due for Maintenance',
    commonSituations: [
      'A garage tank that pops for a minute after the burner lights',
      'A basement heater with a drain valve nobody in the family has opened',
      'A gas line and vent connector older than the last two tanks',
      'A house bought this year with a heater of unknown age',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Mount Repose',
        body: 'Most of the visit goes to the drain-out. Water brings dissolved minerals that fall to the tank floor, and that deposit sits between the flame or elements and the water, so the heater labors and you get popping or a shorter run of hot water. With the tank empty we unscrew the anode, a rod meant to corrode before the steel does, and price a new one if it’s down to wire. The relief valve gets a manual test and its outlet pipe a look. Gas heaters get burner, pilot, vent connector and fittings checked. Electric heaters get elements and thermostats tested. Nothing is swapped without a yes.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Good reasons to book: a heater that runs fine but has never been drained, a home bought without any service record, or popping that began recently. Owners with a rental house can fold it into the same trip. Poor reasons: a tank already seeping from the steel, which only replacement solves, and a heater that sends out rusty water or has reached old age, where we’ll advise saving the cost toward a new one. If you can handle a hose, running some water off the drain between visits is fine to do yourself. A yearly visit is the usual advice.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Mount Repose',
        body: 'Tanks get the drain-out and anode check described above. Tankless heaters get descaled: a cleaning solution is pumped through the heat exchanger to dissolve buildup, and the inlet screen is rinsed. Gas units get burner and vent checks, electric units element checks. Gas heat is common in Mount Repose, so plenty of heaters here have a flame to inspect. Tankless is worth a conversation when an old tank retires.',
      },
    ],
    whyTitle: 'Why Homeowners in Mount Repose Book Water Heater Maintenance With Us',
    whyParagraph:
      'Garage and basement tanks in 1970s houses are most of what we service in Mount Repose. Licensed and insured, with drug tests and background checks for everyone on staff, and the price agreed in advance.',
    sharedFaqs: [
      {
        q: 'What does water heater maintenance cost in Mount Repose?',
        a: 'A flat rate you hear before any wrench turns. We base it on the heater type, whether it burns gas or runs on electric, and how reachable it is. A garage tank with open floor around it goes faster than one boxed in under the basement stairs. Weekends cost the same.',
      },
      {
        q: 'How often should we service the water heater?',
        a: 'Once a year suits most households. If popping or a low growl starts before the year is up, ask us to come sooner, because sediment is already collecting. Putting the visit on the same month every year keeps it from drifting.',
      },
      {
        q: 'Can we flush the water heater ourselves?',
        a: 'Opening the drain and letting a bucket of water out between visits is fine if you’re handy. The trouble starts with an old drain valve that drips after it’s closed, a gas burner that needs a look, or the relief valve test. Those are ours.',
      },
    ],
  },
};
