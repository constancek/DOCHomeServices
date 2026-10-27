import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Most Downtown Cincinnati homes are apartments and condos heated by electricity, so heat pump repair here usually means a unit inside a large building. Census figures show 69.6% of Downtown homes heat with electricity, which also counts electric furnaces and baseboard, and 71.6% of units are in buildings of 50 or more. Nearly nine in ten households rent, so the building owner or manager usually books the work. We find the fault, explain it to whoever approves it and price it before starting.',
  emergencyParagraph:
    'NOAA normals put Cincinnati’s January low around 23F, and a Downtown apartment with a failed heat pump loses heat even with neighbors on every side. Babies, older relatives and anyone sick are the people to check on first. For owners and managers we repair heat pumps, air handlers and backup heat, same day on most calls, weekends too.',
  commonIntro:
    'Downtown Cincinnati heat pump calls come from condos and apartments in large buildings, both converted older buildings and towers built since 2010. These four come up most:',
  localFaqs: [
    {
      q: 'I rent a Downtown Cincinnati apartment and the heat pump stopped. Can I call you?',
      a: 'Report it to your landlord or building management first, in writing, since they own the equipment and approve repairs. City of Cincinnati rules require rentals where tenants don’t control the heat to stay at 70F or more once it turns cold outside. Managers can call us directly. We fix heat pumps, not leases.',
    },
    {
      q: 'Do I need a permit to replace the heat pump in my Downtown condo?',
      a: 'Yes. Replacing HVAC equipment at a Cincinnati address takes a mechanical permit from the City of Cincinnati Department of Buildings & Inspections, and we pull it as part of the job. Your condo association may have its own rules about access and equipment, so check with them before we schedule.',
    },
  ],
  overrides: {
    ctaLine: 'Downtown Cincinnati heat pump repair for condo owners and managers',
    band1Heading: 'Common Heat Pump Problems in Downtown Cincinnati Apartments and Condos',
    commonSituations: [
      'A condo air handler in a utility closet that runs but only blows lukewarm air',
      'A unit stuck on emergency heat, with the electric bill climbing to match',
      'Backup heat strips that trip their breaker every time they come on',
      'A heat pump stuck in cooling mode after a fall cold snap',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Before you report a no-heat problem, run a few checks. Confirm the thermostat is on heat, not cool or off. Replace the filter if it is dark. Look in your panel for two breakers, one for the indoor air handler and one for the outdoor unit, wherever the building put it. Steam, light frost or the fan stopping for a few minutes is a defrost cycle and is normal. If heat comes back, you don’t need us, though renters should still tell management. Call when the emergency heat light stays on, the air runs cold or the unit grinds. We inspect, explain, price for approval and test.',
      },
      {
        title: 'Repair or Replace Your Downtown Cincinnati Heat Pump?',
        body: 'Go by the equipment, not the building. A Downtown tower from the 2010s may already have aging heat pumps, and a converted older building may have new ones. A failed fan motor, contactor or defrost control is normally a repair. A refrigerant leak or a dead compressor is when we price replacement alongside the repair for the owner or association. On the Duke Energy bill, a jump in a normal winter month usually means the backup heat strips are doing what the heat pump should. Financing is available for replacements.',
      },
    ],
    whyTitle: 'Why Downtown Cincinnati Owners and Managers Call Us',
    whyParagraph:
      'Electric heat is the norm in Downtown Cincinnati, so heat pumps and air handlers are routine work for us. Technicians are licensed, insured and background-checked, and owners approve a flat-rate price before any repair.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Downtown Cincinnati?',
        a: 'It depends on what failed and where the equipment sits in the building. A contactor or capacitor is a short job; a leak in a closet air handler’s coil takes longer. After diagnosis the owner or manager gets one flat-rate price to approve. Weekend visits have no overtime fees.',
      },
      {
        q: 'Should our Downtown condo repair or replace its heat pump?',
        a: 'Find the install date on the equipment label rather than going by the building’s age. A younger heat pump with one failed part is worth fixing. A failed compressor or repeated refrigerant leaks on an older unit usually make replacement the better spend, and we quote both.',
      },
      {
        q: 'Why does my Downtown Cincinnati heat pump blow cool air?',
        a: 'Heat pump air comes out milder than furnace air, so a lukewarm vent is often normal. Cold air that never warms up is a fault, especially if the outdoor unit is iced or not running. A system that cools when set to heat usually has a reversing valve problem.',
      },
    ],
  },
};
