import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastWestwood: LocationServiceCopy = {
  localParagraph:
    'In East Westwood, most ductless repair calls come from landlords. Census figures show 75.9% of homes here are rented, and about four in ten sit in buildings of five units or more. The median home was built in 1958, and a mini-split in one of those houses usually serves a room the original heating left short, with the outdoor unit hung on a wall bracket. Owners and managers hear what failed and what it costs before we start, and tenants get a working room back.',
  emergencyParagraph:
    'On about 21 afternoons a year Cincinnati reaches 90F, the National Weather Service reports. An apartment with a dead mini-split is no place for a newborn, an elderly tenant or anyone on oxygen or with asthma. When a head is leaking into the unit below, flip its breaker off and tell the manager. Same-day visits cover most calls, weekends too.',
  commonIntro:
    'Apartment buildings and 1950s houses make up much of the work here. The faults below are the ones landlords and residents report most.',
  localFaqs: [
    {
      q: 'My rental in East Westwood has a broken mini-split. What should I do?',
      a: 'Put it in writing to the landlord or property manager, dated, and keep your own copy. Where the landlord supplied the unit, ORC 5321.04 obliges them to keep that air conditioning in good and safe working order. The repair request has to come from the owner, since it’s their equipment. We fix mini-splits, not leases.',
    },
    {
      q: 'Do you repair mini-splits across several apartments in East Westwood?',
      a: 'Yes. Landlords here often have several units on one property, and we can look at each head on the same visit, read every code and price each repair separately. You approve the work unit by unit. The tested-before-we-leave rule applies to every head we touch.',
    },
  ],
  overrides: {
    ctaLine: 'Ductless repairs for rentals and mid-century houses in East Westwood',
    band1Heading: 'Common Mini-Split Problems in East Westwood Homes and Apartments',
    commonSituations: [
      'An apartment head that clicks on and off and never cools the bedroom',
      'A bracket-hung outdoor unit on a 1950s house with a seized fan motor',
      'A blocked drain sending water down the wall into the apartment below',
      'A code flashing on one unit in a building where the rest run fine',
    ],
    proseSections: [
      {
        title: 'Signs Your Mini-Split Needs Repair, and When It Doesn’t',
        body: 'Tenants and owners can try four things first. Put new batteries in the handheld remote and confirm it reads cool, heat or dry rather than fan. See whether the breaker or the switch box near the outdoor unit has been knocked off. Open the indoor unit’s face, pull the screen filters, run water through them and let them dry. After a Duke Energy outage, a short spell with the breaker off often clears a confused board. If the room cools again, no visit is needed. Water pooling below the head, ice on the pipes, grinding, or a light that keeps blinking needs us.',
      },
      {
        title: 'Repairing or Replacing a Mini-Split in East Westwood',
        body: 'What’s on the wall decides it, not the year the building went up. Plenty of 1950s houses and older apartment blocks here carry a mini-split that is fairly new, and on those a weeping flare joint, a worn fan motor, a sensor or a plugged drain usually gets fixed on the visit. When the compressor quits, the coil leaks, the board is no longer sold, or one apartment’s unit is a constant callback, the owner should see what a new system costs. We hand over both figures. Inside city limits a replacement needs a mechanical permit from Buildings & Inspections, and we pull it.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in East Westwood Choose Us for Mini-Split Repair',
    whyParagraph:
      'Landlords here get a written price per unit before anything is fixed, and tenants get a technician who is licensed, insured and drug-tested. There are no overtime fees, and if the repair isn’t right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much will a mini-split repair cost in East Westwood?',
        a: 'We can’t say before reading the code and finding the fault. A cleared drain is far cheaper than a compressor part, and an outdoor unit high on a bracket takes more setup than one on a pad. Owners get one flat price per repair to approve, weekend or not.',
      },
      {
        q: 'Is it better to repair or replace an old mini-split in East Westwood?',
        a: 'Check the install date on the outdoor label first. A unit with one bad part, a fan motor or a sensor, is usually worth fixing. A dead compressor, a coil leak or constant callbacks on the same apartment tip it toward replacing. We quote both.',
      },
      {
        q: 'Why would a mini-split leak water or blow warm air?',
        a: 'Look at the drain. Condensate should leave through a small hose, and when slime blocks it the water spills from the head. A matted filter can freeze the coil, which drips as it melts. Lukewarm air may be a mode mistake or a starved filter, or a leak or dead part. Ice on the copper means switch off and call.',
      },
    ],
  },
};
