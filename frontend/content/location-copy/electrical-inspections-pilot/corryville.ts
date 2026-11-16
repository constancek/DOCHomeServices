import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const corryville: LocationServiceCopy = {
  localParagraph:
    'Corryville inspections are mostly booked by landlords and property managers, because 92.7% of homes here are rented, according to Census figures. The housing is split. About a third went up before 1940, and those old houses and small walk-ups are where we find ungrounded outlets and tired panels. Another 40.2% was built in 2000 or later, mainly large apartment blocks whose wiring is usually sound. Either way, we go over the full system, put the findings in a report and price any repair before it starts.',
  emergencyParagraph:
    'Report these in Corryville straight away: a smell of burning plastic, a light switch that’s hot or crackling, sparking at a plug, or a breaker that trips the instant it goes back on. Leave the breaker off. For smoke or fire, get out and dial 911. Owners and managers get a technician the same day on most calls, weekends included.',
  commonIntro:
    'Near Short Vine, old student houses and newer apartment blocks sit on the same streets. What we find most in the older ones:',
  localFaqs: [
    {
      q: 'I’m a student renting in Corryville and the power keeps cutting out. Can I book you?',
      a: 'Tell your landlord or building manager in writing first. Ohio’s ORC 5321.04 (A)(4) makes them keep supplied electrical fixtures in good and safe working order, so the repair is theirs to arrange. We inspect wiring, not leases. Once they call, we find the cause and report back to them.',
    },
    {
      q: 'My Corryville building is newer. Is an inspection worth it?',
      a: 'Often not. Wiring from the 2000s is usually in good shape, and if the buyer’s home inspector found nothing, you can skip us. It’s worth booking before adding a large load, such as EV chargers in a parking area, or when a lender or insurer wants a written report.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Corryville rentals and apartment buildings',
    band1Heading: 'Common Electrical Problems We Find in Corryville Homes and Apartments',
    commonSituations: [
      'An old house rented room by room, with space heaters and power strips loading one circuit',
      'A small walk-up where each unit has a tiny subpanel fed from a basement panel at its limit',
      'Missing GFCI protection in kitchens and baths that were updated without a permit',
      'A landlord buying a pre-1940 rental who wants to know what the wiring needs before the lease-up',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Corryville calls end at a reset button. Kitchen, bath and outdoor outlets are often fed through one GFCI, so a single trip can kill power in two rooms; find it and press reset. A breaker that trips once with a space heater running and then holds is an overload, not a wiring fault. Owners should book us when a unit still has two-prong outlets, a fuse box, extension cords run room to room as fixed wiring, or flicker on several circuits. An older rental changing hands with no recent electrical work is a good time too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Corryville?',
        body: 'We go by what turns up, not by when the building went up. In a Corryville walk-up the fixes are usually repairs: tightening connections, replacing a breaker that runs hot, adding GFCI protection at the sinks. A panel with no room left, or one failing, is a panel job. If cloth or knob-and-tube wire still feeds most of an old house, we price a rewire next to the spot repairs, which matters to an owner planning years of leases. You keep the report and can hire anyone for the work. We pull the permit and arrange the inspection when one is needed.',
      },
    ],
    whyTitle: 'Why Corryville Landlords and Managers Call Us',
    whyParagraph:
      'We write reports an owner can act on unit by unit, and we schedule around tenants. Our electricians are licensed and insured, background-checked and drug-tested, and every price is agreed before work begins.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost for a Corryville rental?',
        a: 'It’s a flat rate set before we arrive. The size of the building and the purpose drive it: one rented house before a lease is a smaller job than a whole walk-up a new owner is buying. Give us the unit count and the reason.',
      },
      {
        q: 'What do you check during the inspection?',
        a: 'In each unit we test outlets and their GFCI and AFCI protection and confirm the smoke alarms have power. Then the panel and every breaker or fuse, grounding and bonding, and whatever wiring is exposed in the basement, attic or common halls. It all goes into one report.',
      },
      {
        q: 'Does using you for the inspection mean using you for repairs?',
        a: 'No. Owners often send the report to their own electrician or maintenance company. If we do the work, each line item carries a flat price and you approve them one at a time, starting with whatever is a safety risk for tenants.',
      },
    ],
  },
};
