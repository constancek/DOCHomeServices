import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Census figures show most homes in Millvale are rented, and much of the housing is public-housing townhomes from the 1950s, many of them recently renovated. Tenants report a broken mini-split to the landlord or the housing management office rather than calling us, and the owner or manager books the work. The ductless units we repair here are mostly in those townhomes and in small apartment buildings, with condensers on pads or wall brackets. Whoever owns the unit hears what failed and the flat rate first.',
  emergencyParagraph:
    'The National Weather Service tallies roughly 21 days a year at 90F or hotter, and an upstairs townhome bedroom traps that heat. A grandparent, a newborn or a child with asthma is most exposed. When the head spills water or gives off a scorched smell, cut its breaker and tell management. Most booked calls are seen that day, weekends too.',
  commonIntro:
    'Nearly all of this work is in rented homes, so these are the faults tenants report and managers send us out for.',
  localFaqs: [
    {
      q: 'What should I do if I rent in Millvale and the mini-split stops?',
      a: 'Put it in writing to your landlord or the housing management office, and note anyone at home who is elderly, very young or unwell. Under Ohio’s ORC 5321.04, landlords must keep the air conditioning they supply in good and safe working order. We fix mini-splits, not leases, and we take bookings from owners.',
    },
    {
      q: 'Is a permit needed to replace a mini-split in Millvale?',
      a: 'Yes, for a replacement. Millvale is part of the City of Cincinnati, where the Department of Buildings & Inspections requires a mechanical permit to install or replace an air conditioner. Repairs to an existing system go ahead without one. We pull the permit before the old equipment is removed.',
    },
  ],
  overrides: {
    ctaLine: 'Ductless repairs for rental townhomes in Millvale',
    band1Heading: 'Common Mini-Split Problems in Millvale Homes and Apartments',
    commonSituations: [
      'An upstairs bedroom head in a townhome that runs but never cools',
      'Water from a head spotting a newly renovated floor',
      'A code that comes back each time management restarts the unit',
      'A bracket-mounted condenser whose fan refuses to turn',
    ],
    proseSections: [
      {
        title: 'Signs Your Mini-Split Needs Repair, and When It Doesn’t',
        body: 'Tenants can rule out a few things without touching the equipment. Fresh batteries in the remote, set to cool and not fan only, come first. Look in your breaker panel for a tripped switch and reset it once. The filters pull out from under the front cover of the head and can be rinsed in a sink and left to dry. Cool air again means there’s nothing to report. A dripping head, frosted copper lines, a code that won’t stay gone or a stalled outdoor fan goes to management. Once the owner books us, we read the code, price the repair and check every head.',
      },
      {
        title: 'Repairing or Replacing a Mini-Split in Millvale',
        body: 'For a property manager, the deciding factor is the unit itself, not when the building went up. Grimy coils, plugged condensate pumps, failed sensors, worn fan motors and weeping flare joints all get repaired, and so do control boards that are still made. A dead compressor, a leaking coil or a unit tenants report over and over pushes the numbers toward replacement. On multi-zone systems, a single failed head on aging equipment gets priced both ways. Replacement here needs a City of Cincinnati mechanical permit, which we pull for the owner.',
      },
    ],
    whyTitle: 'Why Landlords and Managers in Millvale Choose Us for Mini-Split Repair',
    whyParagraph:
      'Owners and managers of rented homes call us to keep their tenants cool in Millvale. Every technician is licensed, background-checked and drug-tested, each repair is priced flat before it begins, and weekend calls carry no overtime fees.',
    sharedFaqs: [
      {
        q: 'How is a mini-split repair priced for a rental in Millvale?',
        a: 'After the error code is read and the fault found, the part and the access to the head and condenser set a flat rate. The owner or manager approves it before work starts. A drain clearing is a much smaller bill than a control board.',
      },
      {
        q: 'Should a landlord repair or replace a failing mini-split in a rental in Millvale?',
        a: 'Repair, in most cases, if one part has gone and the compressor is healthy. A failed compressor, a leaking coil or the same unit generating service calls again and again is where replacement makes sense. We quote both so the owner can weigh them.',
      },
      {
        q: 'Why is the mini-split in my rental dripping or blowing warm air?',
        a: 'Drips mostly trace to a blocked condensate line, or to filters grimy enough that the coil frosts over and then sheds water. Air at room temperature tends to start with the remote sitting on fan or those same grimy filters. Past that, refrigerant has escaped or a component quit. Frosted copper means switch off and call management.',
      },
    ],
  },
};
