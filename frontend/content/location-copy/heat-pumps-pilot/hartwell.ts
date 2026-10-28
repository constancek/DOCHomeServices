import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hartwell: LocationServiceCopy = {
  localParagraph:
    'Most Hartwell heat pump calls come from renters and the people who own their buildings. Census figures for the area show about two in three homes are rented, with large apartment buildings, two-families and older houses mixed together. Gas heats 60.1% of homes and electricity 31.6%, so apartments often run an electric heat pump while the houses use gas, sometimes with a heat pump added as dual fuel. Duke Energy Ohio supplies both. We find the failed part and price it for the owner before the repair.',
  emergencyParagraph:
    'NOAA counts about 100 nights a year at or below freezing at CVG. A Hartwell apartment or house that loses heat on one of them is hard on babies, older residents and anyone ill. We repair heat pumps and the air handlers inside each unit, and reach most calls the same day, weekends included.',
  commonIntro:
    'Hartwell heat pump repairs happen mostly in rental apartments, with some in owner-occupied houses built before 1960. These four come up most:',
  localFaqs: [
    {
      q: 'My Hartwell apartment heat pump isn’t keeping up. Does my landlord have to fix it?',
      a: 'If you don’t control your own heat, Cincinnati requires landlords to keep apartments at 70F or more once it stays below 60F outside for 24 hours, and the Cincinnati Health Department enforces it. Put the problem in writing to your landlord. We fix heat pumps, not leases, and the owner can send us.',
    },
    {
      q: 'Who issues the permit for a heat pump replacement in Hartwell?',
      a: 'Hartwell is a City of Cincinnati neighborhood, so the Department of Buildings & Inspections issues mechanical permits for replacing HVAC equipment. We get the permit before the old unit comes out. A repair to the heat pump you already have doesn’t need one.',
    },
  ],
  overrides: {
    ctaLine: 'Hartwell heat pump repair for renters, owners and landlords',
    band1Heading: 'Common Heat Pump Problems in Hartwell Homes and Apartments',
    commonSituations: [
      'One apartment in a large building with no heat while the rest stay warm',
      'An air handler closet in a rental blowing lukewarm air with a clogged filter',
      'An outdoor unit behind a two-family house iced over and not defrosting',
      'A tenant’s Duke Energy bill spiking because the heat strips carry the load',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Renters can check a few things without opening any panels. Put the thermostat on heat. If you change your own filter, swap a dirty one. Check your apartment’s breaker box for the air handler and outdoor unit circuits. Steam, light frost and the fan stopping briefly mean the unit is defrosting. If heat comes back, you don’t need a repair. If not, tell the landlord. Owners and managers, call us when the outdoor coil stays iced, the emergency heat light is on, or the outside fan won’t spin. We inspect, explain what failed and price it before any work.',
      },
      {
        title: 'Repair or Replace Your Hartwell Heat Pump?',
        body: 'Judge each heat pump on its own. In a Hartwell apartment building, units installed in different years sit side by side, so we read the label on the one that failed. A failed contactor, fan motor or defrost board on a sound unit is a repair. A refrigerant leak or a compressor failure is where we give the owner both prices. For tenants, the Duke Energy bill is often the first warning: a big jump in an ordinary winter month means the backup strips are doing the heating. Financing is available for owners replacing several units.',
      },
    ],
    whyTitle: 'Why Hartwell Landlords and Residents Call Us',
    whyParagraph:
      'Hartwell is mostly rentals, so we work with owners and managers as much as residents, and every price is approved before work. Our technicians are licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Hartwell?',
        a: 'It depends on the fault, which we find first. Replacing a capacitor at the outdoor unit is quick. Tracking a refrigerant leak through an apartment building’s line set takes longer. The owner approves a flat-rate price up front, with no overtime fees on weekends.',
      },
      {
        q: 'Is it worth repairing the heat pumps in my Hartwell rental building?',
        a: 'Usually, one at a time, when a single part has failed. A unit with a dead compressor or a refrigerant leak that keeps returning is a replacement candidate. We give landlords repair and replacement prices for each unit so they can plan.',
      },
      {
        q: 'Why does the heat pump in my Hartwell apartment blow cool air?',
        a: 'Heat pump air is lukewarm next to gas heat, so it can feel cool and be working fine. Cold air with the outdoor unit iced over or not running is a fault. Check the thermostat is on heat, then report it to your landlord.',
      },
    ],
  },
};
