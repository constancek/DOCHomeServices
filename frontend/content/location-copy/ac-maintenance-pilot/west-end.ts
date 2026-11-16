import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'Nearly every tune-up we do in the West End is booked by a landlord; Census figures show 87.1% of homes here are rented. Buildings range from Italianate rowhouses, put up generations before home cooling, to apartment blocks from the 1960s on. Rowhouses got their AC late, with the air handler wedged into an attic or closet, duct runs threaded through tight floors and a condenser on a scrap of back lot or the roof. Owners approve a flat price first, and a unit that needs nothing is called fine.',
  emergencyParagraph:
    'In the West End, an apartment going hot during a scorcher is a repair for the landlord to call in. Frosted copper lines are another; switch the system off until the ice clears. Add water dripping below and any burning smell. Babies and anyone short of breath feel heat first. Most of these calls get a same-day visit, weekends too.',
  commonIntro:
    'For landlords in the West End, a spring round usually begins after one of these turns up.',
  localFaqs: [
    {
      q: 'Can I book AC maintenance as a tenant in the West End?',
      a: 'Not on the landlord’s equipment. Write to your landlord or manager about the problem. ORC 5321.04 (A)(4) puts Ohio landlords on the hook for keeping the air conditioning they provide safe and working, so scheduling service is up to them. We service air conditioners, not leases.',
    },
    {
      q: 'Does AC work need historic approval in the West End?',
      a: 'A tune-up doesn’t, because nothing on the outside changes. In the Betts-Longworth district, exterior changes need a Certificate of Appropriateness from the Historic Conservation Board, so if a condenser ever has to be replaced or moved there, we check with the city before any work.',
    },
  ],
  overrides: {
    ctaLine: 'Spring AC rounds for rowhouse and apartment owners in the West End',
    band1Heading: 'Signs an AC in the West End Is Due for Maintenance',
    commonSituations: [
      'An Italianate rowhouse with an attic air handler nobody has opened in years',
      'Tenants on an upper floor reporting a damp spot on the ceiling',
      'A condenser on a narrow back lot buried in leaves and debris',
      'A 1960s apartment block where no two units share a service record',
    ],
    proseSections: [
      {
        title: 'What AC Maintenance Includes in the West End',
        body: 'In the West End, a rowhouse air handler is usually up in the attic or behind a closet door, and that’s where we start. A grey filter is replaced and the coil checked for dust and corrosion. We push water through the condensate line and make sure the tray below stays dry, since an overflow in a rowhouse comes straight through the ceiling. On the back lot or the roof, the condenser gets its coil rinsed. Gauges show whether the refrigerant holds; a low reading means a leak, priced as a repair. The capacitor, contactor, wiring, blower and thermostat are tested before a full cooling run. Owners approve every part.',
      },
      {
        title: 'When AC Maintenance Is Worth It, and When It Isn’t',
        body: 'In the West End, a spring round is money well spent on units nobody has a record for, on a building that just changed owners, and on apartments where tenants mention water, a new noise or a room that won’t cool. It’s money wasted on a unit we serviced within the past year that still runs right. Warm air or iced lines call for AC Repair, and a system we’ve already said should go is better left while you save for AC Installation & Replacement. We don’t service window units. Between visits, staff can change filters and keep debris off the condensers. Once a year does the job.',
      },
      {
        title: 'Central Air and Heat Pump Maintenance in the West End',
        body: 'In the West End, heating splits close to evenly, with Census figures at 47.9% gas and 44.3% electricity. That electric figure covers heat pumps plus electric furnaces and baseboard, so a round here mixes both kinds of system. A straight air conditioner only works summers and needs one spring check. A heat pump earns two a year, the second in autumn, when the valve that reverses it and the defrost board get tested.',
      },
    ],
    whyTitle: 'Why Landlords in the West End Book AC Maintenance With Us',
    whyParagraph:
      'In the West End, our AC work is mostly attic and closet air handlers in rowhouses and older apartment blocks. Technicians we send are licensed and insured, background-checked and drug-tested, and owners sign off on flat prices first.',
    sharedFaqs: [
      {
        q: 'How do you price AC tune-ups for rentals in the West End?',
        a: 'Every unit carries a flat rate, given before we start, and a building can go on one quote. Heat pump or central air, and whether we’re hauling gear into an attic or onto a roof, set the number. Repairs we spot are priced one by one and wait for the owner.',
      },
      {
        q: 'When should a landlord book AC maintenance?',
        a: 'Book it each spring, ahead of the hot weeks. Doing all the units on one visit keeps the records in one place and makes the laggards obvious. Heat pumps need an autumn visit as well, because they heat the apartments too.',
      },
      {
        q: 'What can tenants and staff do between AC visits?',
        a: 'Tenants can keep furniture off vents and returns and report a dirty filter, water or a new noise to the landlord. Staff can change filters, clear debris from condensers and replace thermostat batteries. Nobody but a technician should open the panels or touch the refrigerant lines.',
      },
    ],
  },
};
