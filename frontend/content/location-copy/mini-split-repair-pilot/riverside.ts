import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const riverside: LocationServiceCopy = {
  localParagraph:
    'Riverside is mostly renters, about 61% by Census figures, and more than a third of its homes sit in buildings of ten units or more. So a broken ductless unit here is often an apartment call that goes through the owner or the manager. The older houses along River Road, about a quarter of them built before 1940, have heads in upstairs rooms with line sets clipped to the outside walls. We find what failed, name the price and wait for a yes.',
  emergencyParagraph:
    'Normal July afternoons hit 86F at the airport, per National Weather Service figures, and an apartment with its single head dead holds that heat around an older tenant or a baby. Water dripping into the unit below, or a breaker that trips as soon as it’s reset, means leave it off. We reach most calls the same day, weekends too.',
  commonIntro:
    'Here the ductless repairs split between apartment buildings and older houses on the hillside and along River Road. These are the jobs we see most:',
  localFaqs: [
    {
      q: 'Can I book a repair myself if I rent an apartment in Riverside?',
      a: 'Tenants go through the landlord or the building office, with a written, dated note. Where cooling comes with the lease, ORC 5321.04 obliges an Ohio landlord to keep it running safely. We fix mini-splits, not leases, so the call to us and the yes on the quote come from the owner.',
    },
    {
      q: 'Is my outdoor unit safe to run after the Ohio River flooded near River Road?',
      a: 'Not until someone checks it. The National Weather Service says most property between Route 50 and the river floods when the river nears 70 feet. Floodwater inside the outdoor unit can short the board and corrode the wiring, so keep the breaker off and book a test first.',
    },
  ],
  overrides: {
    ctaLine: 'Ductless repairs for apartments and river houses in Riverside',
    band1Heading: 'Common Mini-Split Problems in Riverside Homes and Apartments',
    commonSituations: [
      'One apartment in a larger building with a head that blows room-temperature air',
      'Water leaking from a head onto the floor of the unit downstairs',
      'An outdoor unit near River Road left sitting in river silt',
      'An upstairs head in an older house that rattles and smells musty',
    ],
    proseSections: [
      {
        title: 'Signs Your Mini-Split Needs Repair, and When It Doesn’t',
        body: 'Some problems end before we’re needed. Check that the remote has live batteries and shows cool or heat, not fan. See if the breaker has tripped and whether the switch box beside the outdoor unit is off. Open the head’s front panel, slide out the mesh filters, wash them and let them dry. Clear any debris the river or the wind left around the outdoor unit. If that brings it back, renters can still let the landlord know. We’re the call for a head that drips, copper lines that frost over, a fan outside that won’t turn, or a light that keeps blinking. Every head gets tested before we go.',
      },
      {
        title: 'Repairing or Replacing a Mini-Split in Riverside',
        body: 'Judge the equipment, never the address. Inside a 1970s block along US-50 the head on the wall might be fairly new, and a tired blower, a misreading sensor, a flare nut that seeps or a drain pump full of sludge on it gets fixed. A seized compressor, an internal coil leak, a board that has gone out of production, or one more head failing on a worn-out multi-zone system calls for a replacement figure too. Owners see both on one sheet. Swapping the system takes a City of Cincinnati mechanical permit through Buildings & Inspections, which our office files.',
      },
    ],
    whyTitle: 'Why Residents and Landlords in Riverside Choose Us for Mini-Split Repair',
    whyParagraph:
      'Building owners along the river get a separate written figure for each apartment, and tenants open the door to someone who has passed background and drug screening. Weekend calls cost no more than weekday ones.',
    sharedFaqs: [
      {
        q: 'How much does it cost to fix a mini-split in Riverside?',
        a: 'Three things set it, namely what failed, which part fixes it and how hard each unit is to reach. A condenser hung high on an apartment wall takes more effort than one at grade. The technician reads the stored fault, proves the cause and writes one fixed figure for the owner.',
      },
      {
        q: 'Is it ever cheaper to replace a mini-split in Riverside than to fix it?',
        a: 'Over time it can be. A dead compressor, a coil leaking inside, unobtainable parts or a unit that fails every summer often costs more to keep alive than to swap. A young unit with one bad part is cheaper to repair. Landlords get both quotes per apartment.',
      },
      {
        q: 'What makes a mini-split drip water or blow warm air?',
        a: 'Most leaks at the head come from a drain line packed with sludge or screens thick with lint. Lukewarm air points to the mode button, those screens, a refrigerant leak or a burned-out component. Frost on the copper means switch it off with the remote and book us.',
      },
    ],
  },
};
