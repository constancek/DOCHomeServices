import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Downtown, 87.3% of homes are rented, by Census figures, and most sit in buildings of 50 or more units, so tenants start with management. The mini-splits we see here are mostly in condos and in pre-1940 buildings, where heads were added to rooms with no ductwork and outdoor units ended up on a roof or a back wall. Owners and managers get the diagnosis and a flat price before any work.',
  emergencyParagraph:
    'Electric heat is the norm Downtown, and with January lows near 23F on National Weather Service normals, a dead mini-split matters where it’s the only heat. Older residents, babies and anyone ill feel it first. If water comes through the ceiling from upstairs, or a breaker trips again, cut that breaker. Most calls get same-day service, weekends too.',
  commonIntro:
    'Condo owners, landlords and building managers book most of this work, in older buildings and new ones alike. What we see most:',
  localFaqs: [
    {
      q: 'My apartment mini-split quit, and I live Downtown. Who fixes it?',
      a: 'Building management or the landlord does, so report it in writing. Under Ohio Revised Code 5321.04 (A)(4), a landlord who supplied the air conditioning has to keep it in good and safe working order, and where the head is your heat, Cincinnati’s 70F rental rule also applies. We fix mini-splits, not leases.',
    },
    {
      q: 'Is a city permit needed to replace a mini-split Downtown?',
      a: 'Yes. Every address Downtown is in the City of Cincinnati, and the Department of Buildings & Inspections requires a mechanical permit before HVAC equipment is installed or replaced. We take care of it on a replacement, along with roof access through management. A repair, such as a sensor or a drain pump, needs no permit.',
    },
  ],
  overrides: {
    ctaLine: 'Ductless repair for condos and apartment buildings Downtown',
    band1Heading: 'Common Mini-Split Problems in Downtown Cincinnati Homes and Apartments',
    commonSituations: [
      'A condo head on heat blowing air no warmer than the room',
      'Water from a head soaking into the ceiling of the unit below',
      'A rooftop condenser whose fan has stopped',
      'One head on a multi-zone system flashing an error while the others run',
    ],
    proseSections: [
      {
        title: 'Signs Your Mini-Split Needs Repair, and When It Doesn’t',
        body: 'A tenant can check a few things before reporting a fault, and an owner can check them before calling us. The remote needs fresh batteries and a mode of cool, heat or dry, since fan only circulates air. The unit’s breaker should be on. Filters behind the head’s front panel rinse clean and go back dry. After a power cut, a breaker reset often clears the board. Past those, a dripping head, iced lines, a returning error light or room-temperature air means a repair. Rooftop disconnects are for management. We read the code, price the repair for the owner, and test each head.',
      },
      {
        title: 'Repairing or Replacing a Mini-Split in Downtown Cincinnati',
        body: 'The building’s age doesn’t decide this, since a pre-1940 building Downtown may hold a recent head. Most failures are fixable, from a leaking flare connection or tired fan motor to a bad sensor, a dirty coil, a plugged drain or pump, or a board still in production. A failed compressor, a leaking coil, a unit that keeps breaking, or a part out of production gets a replacement price beside the repair. On an aging multi-zone system with one dead head, the owner sees both. Replacements go through the city permit, and roof access is set up with management.',
      },
    ],
    whyTitle: 'Why Owners and Managers in Downtown Cincinnati Choose Us for Mini-Split Repair',
    whyParagraph:
      'Condos, older buildings and managed high-rises Downtown are routine work for us, and we schedule roof and unit access through management. Technicians are licensed, insured and background-checked, owners approve a flat price first, and weekend calls carry no overtime fees.',
    sharedFaqs: [
      {
        q: 'How much does mini-split repair cost Downtown?',
        a: 'Access matters as much as the fault here. Clearing a drain on a condo head is a short job, while a fan motor on a rooftop condenser takes longer and needs building access. The code gets read and the cause confirmed, then the owner approves a flat rate before work begins.',
      },
      {
        q: 'Is it better to repair or replace a mini-split Downtown?',
        a: 'Repair it when one part failed on a sound unit. A dead compressor, a leaking coil or a breakdown that keeps returning makes replacing worth pricing, and in a managed building the owner makes that call. Both prices go to the owner together, so nobody has to guess.',
      },
      {
        q: 'What should I do if my mini-split drips or blows warm air?',
        a: 'Switch it off at the remote if there’s ice on the copper lines, then report it to management or call us. Dripping is usually a backed-up condensate drain or a frozen coil behind a dirty filter. Warm air can be the mode, the filter, lost refrigerant from a leak or a failed part.',
      },
    ],
  },
};
