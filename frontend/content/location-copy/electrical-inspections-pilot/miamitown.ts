import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const miamitown: LocationServiceCopy = {
  localParagraph:
    'Most Miamitown homes are rented, many in apartment buildings, and about two in three heat with electricity, Census figures show, so electrical inspections here are usually booked by owners and managers. The housing splits between pre-1940 buildings, where old wiring may still be in the walls, and 1980s and 1990s complexes with sound wiring but busy panels. Along the riverfront streets, Great Miami flooding adds another reason to check. We inspect, report in writing and price repairs before anything is done.',
  emergencyParagraph:
    'Treat these as urgent: a burning smell, an outlet or switch that’s hot, buzzing or blackened, sparks, or a breaker that trips again right after reset. Switch that breaker off and tell the landlord or manager at once. If there’s smoke or fire, get out and call 911. On most calls we’re in Miamitown the same day, weekends too.',
  commonIntro:
    'In Miamitown we mostly inspect small apartment buildings and multi-unit houses, for the owners who run them. The findings that come up most:',
  localFaqs: [
    {
      q: 'I rent in Miamitown. Can I book an electrical inspection myself?',
      a: 'Usually the owner or manager books it, since the wiring is theirs. Report any problem to them in writing. Ohio law (ORC 5321.04(A)(4)) requires landlords to keep supplied electrical fixtures in good and safe working order. We inspect wiring, not leases, and work for whoever books the visit.',
    },
    {
      q: 'The river came up and water reached our Miamitown basement. Is the power safe?',
      a: 'Not until it’s checked. Leave breakers for the flooded area off, and if the panel itself got wet, don’t touch it. Outlets and wiring that were under water usually need replacing. We inspect what got wet and price the work; the permit and official inspection go through the Inspection Bureau, Inc. (IBI).',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Miamitown rentals and homes',
    band1Heading: 'Common Electrical Problems We Find in Miamitown Homes and Apartments',
    commonSituations: [
      'Older buildings split into units, with circuits extended to serve each one',
      'Electric heat loading up the panels in 1980s and 1990s complexes',
      'Basement wiring and outlets near the riverfront streets that have seen floodwater',
      'Common-area lighting and outdoor outlets in small buildings with no GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Not every outage means a wiring fault. A GFCI that tripped in a kitchen, bath or outside outlet can cut power to others downstream; press reset. A breaker that trips once and holds after reset is usually a one-off overload, and a dark light is often just the bulb. Tenants should report anything beyond that to the landlord. Owners should book an inspection for flickering across several circuits, two-prong outlets throughout, cords used as permanent wiring, or a Miamitown building being sold or bought with no recent electrical work.',
      },
      {
        title: 'Inspection, Repair or Rewire in Miamitown?',
        body: 'The inspection sets the answer, building by building. In the 1980s and 1990s complexes, findings are mostly repairs: loose connections, worn breakers, missing GFCI protection near sinks. In older buildings, cloth-covered wiring or circuits stretched to serve extra units can push the quote toward rewiring part or all of the building, and we price that beside the spot repairs. A panel too small for electric heat in every unit is a panel replacement. Owners get the written report and decide; you don’t have to hire us for the work.',
      },
    ],
    whyTitle: 'Why Miamitown Landlords and Residents Call Us',
    whyParagraph:
      'Four in five Miamitown households rent, and many residents are older people living alone. Owners call us for clear reports they can act on; our technicians are licensed, insured, background-checked and drug-tested, and prices are approved first.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced for a Miamitown building?',
        a: 'At a flat rate agreed before we start. The number of units and the reason for the inspection set it: a building changing hands needs a full look, while one unit getting new electric heat needs less. Repairs we find are quoted separately, and nothing proceeds without your approval.',
      },
      {
        q: 'What does the inspection include?',
        a: 'Each panel and its breakers or fuses, grounding and bonding, outlets and switches in every unit we’re asked to see, GFCI and AFCI protection, visible wiring in basements and common areas, and power to the smoke alarms. The owner gets a written report covering each item.',
      },
      {
        q: 'Does the owner have to hire you for the repairs?',
        a: 'No. The report belongs to whoever paid for it, and any licensed electrician can use it. If the owner wants us to do the work, each repair gets its own flat-rate price, and only the approved items go ahead.',
      },
    ],
  },
};
