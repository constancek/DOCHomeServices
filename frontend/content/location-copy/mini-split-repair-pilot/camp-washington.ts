import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const campWashington: LocationServiceCopy = {
  localParagraph:
    'Camp Washington is old and mostly rented. Census figures put 88.9% of the housing in 1939 or earlier and 79.4% of homes in renters’ hands. The old houses, doubles and small apartment buildings here never had ducts upstairs, so a mini-split is often the only cooling, its line set pinned along an outside wall and its condenser hung on a bracket or tucked into a gap between buildings. Tenants report the failure, owners book us, and the owner approves the price before we start.',
  emergencyParagraph:
    'The National Weather Service counts roughly 21 days a year at 90F or above here, and a top-floor apartment holds that heat once its mini-split fails. Elderly tenants, infants and anyone sick suffer first. If water is coming through a ceiling from the unit upstairs, shut that head’s breaker. Most calls get someone out the same day, weekends too.',
  commonIntro:
    'In Camp Washington, ductless work mostly means rented units in old buildings, often several heads under one roof. These four come up most.',
  localFaqs: [
    {
      q: 'What should a tenant in Camp Washington do when the mini-split quits?',
      a: 'Write to your landlord about it and hold on to a copy. If the landlord supplied the unit, ORC 5321.04 (A)(4) makes them keep it in good and safe working order, and where it’s the apartment’s only heat, Cincinnati’s 70F rental heat rule also applies. We fix mini-splits, not leases. The owner books the visit.',
    },
    {
      q: 'Who permits a mini-split replacement in Camp Washington?',
      a: 'Camp Washington lies within Cincinnati city limits, which puts replacement permits with the Department of Buildings & Inspections. A mechanical permit is required, and we take care of it. Smaller jobs, such as a fan motor swap or clearing a drain, need nothing filed and usually wrap up on the first trip.',
    },
  ],
  overrides: {
    ctaLine: 'Ductless repairs for rentals and older buildings in Camp Washington',
    band1Heading: 'Common Mini-Split Problems in Camp Washington Homes and Apartments',
    commonSituations: [
      'A head in an upper-floor apartment dripping into the unit below',
      'A bracket-mounted outdoor unit between buildings that won’t start',
      'One failed head in a building where the other units still cool',
      'A loft apartment unit blinking an error code the tenant can’t clear',
    ],
    proseSections: [
      {
        title: 'Signs Your Mini-Split Needs Repair, and When It Doesn’t',
        body: 'A tenant can rule out a few things before reporting the unit. Swap the remote’s batteries and set it to cooling rather than fan, since fan alone just moves warm air around. If you can reach the panel, check the unit’s breaker. Unclip the front of the indoor unit, take the filter mesh to the sink, rinse it and let it dry before refitting it. After a power cut, flip that breaker off, wait, and flip it on. A cool room means you’re set. Water from the unit, ice on the lines, a code that won’t clear or air as warm as the hallway goes to the landlord.',
      },
      {
        title: 'Repairing or Replacing a Mini-Split in Camp Washington',
        body: 'Weigh the equipment, not the century-old building it’s bolted to. Nearly every mini-split here went up decades after the walls did, so a fan motor, a sensor, a seeping flare connection, a slimed drain or a dusty coil is normally a repair. For landlords, replacement belongs on the table when a compressor seizes, a coil leaks, a board can’t be bought anymore, or one unit keeps failing between tenants. One dead head on a worn multi-zone system can settle it. We quote both ways, and the owner makes the call.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Camp Washington Choose Us for Mini-Split Repair',
    whyParagraph:
      'Most of our work in Camp Washington is for landlords, in buildings where tenants are waiting on cooling. Licensed, insured, background-checked and drug-tested technicians diagnose first, quote one flat rate, and add no overtime on weekends.',
    sharedFaqs: [
      {
        q: 'How much does a mini-split repair cost in Camp Washington?',
        a: 'Access drives a lot of the cost here. A condenser squeezed into a gap between buildings, or bolted high on a bracket, takes more time than one sitting on a pad. Once the code is read and the cause found, the owner approves one flat number.',
      },
      {
        q: 'Should a landlord repair or replace a failing mini-split?',
        a: 'Repair it when the system runs and a single part has failed. Price a new system if the compressor dies, the coil leaks, or that unit keeps putting tenants out. We give owners both quotes together so they can plan across the whole building.',
      },
      {
        q: 'Why is the mini-split in my apartment dripping or blowing warm?',
        a: 'Dripping usually means the condensate line is clogged with gunk, or a filter got so dirty the coil iced and then thawed. Warm air can be the remote stuck on fan, packed filters, or a failed part or refrigerant leak. Ice on the lines means switch it off and tell your landlord.',
      },
    ],
  },
};
