import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fortMitchell: LocationServiceCopy = {
  localParagraph:
    'Many Fort Mitchell AC calls come from a landlord or property manager, not the person sitting in the heat. Census figures show 41.7% of homes here are rented, so the owner usually approves the repair. The city mixes 1910s and 1920s houses near Dixie Highway with mid-century homes and apartment buildings. Electricity heats 36.8% of homes, which means plenty of heat pumps, and most of the rest pair a gas furnace with a condenser. We find the fault and give whoever signs off a price before work starts.',
  emergencyParagraph:
    'Upstairs apartments in Fort Mitchell turn hot quickly when the cooling quits, and older tenants and young children are the most exposed. National Weather Service records for CVG average 21 to 22 days a year topping 90 degrees. Central air and heat pump repairs here typically wrap up the day they’re booked, weekend days included.',
  commonIntro:
    'Fort Mitchell mixes older houses near Dixie Highway with mid-century homes and a large stock of apartments. The AC calls we take most:',
  localFaqs: [
    {
      q: 'I rent in Fort Mitchell. Who should call for an AC repair?',
      a: 'Usually your landlord or property manager, since tenants here seldom control the system. Check the thermostat setting, and the filter if changing it is your job, then report the problem to the owner in writing and keep a copy. If they book us, the price goes to them for approval, and we explain the fault to you.',
    },
    {
      q: 'Do Fort Mitchell’s historic districts limit AC work?',
      a: 'Not for a repair, as far as we’ve found. Fort Mitchell has four National Register districts, including Beechwood and Fort Mitchell Heights, and that listing alone doesn’t restrict work on a private home. We know of no local review rule, but before a replacement moves the condenser on an older Beechwood house, we check with the city.',
    },
  ],
  overrides: {
    ctaLine: 'Fort Mitchell AC repair for houses and apartments off Dixie Highway',
    band1Heading: 'Common AC Problems in Fort Mitchell Homes and Apartments',
    commonSituations: [
      'An apartment heat pump that cools fine at night but loses ground every afternoon',
      'A 1910s or 1920s house in Fort Mitchell Heights with cooling squeezed into ducts never meant for it',
      'A 1960s or 1970s house where the coil on the gas furnace freezes over',
      'A condensate line clogging in a three- or four-unit building and dripping into the unit downstairs',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Several Fort Mitchell AC problems have a free fix. Slide in a fresh filter, confirm cool mode with the setpoint under the room’s temperature, and reset the condenser’s breaker once. When the house cools again, you can stop there and pay nobody. Tenants who reach this point without luck should pass it to the landlord. Book a technician if the breaker won’t hold after one reset or the condenser drones with a stalled fan. We inspect the inside and outside units and describe the fault plainly. A fixed price gets your signature, or the owner’s, before work, and we finish by confirming cold air at the registers.',
      },
      {
        title: 'Repair or Replace Your Fort Mitchell AC?',
        body: 'Read the age off the equipment label. Half the houses in Fort Mitchell were built before 1971, so many have already gone through one condenser. When the system is young and only one part broke, repair makes sense. When an older unit needs a compressor, or the coil has leaked more than once, new equipment usually costs less across the next few summers. Landlords should also weigh the winter no-heat calls an old heat pump brings. Fort Mitchell replacements need a Kentucky permit from Planning and Development Services of Kenton County, which we obtain. A Duke Energy Kentucky bill rising while rooms stay warm signals a struggling system.',
      },
    ],
    whyTitle: 'Why Fort Mitchell Landlords and Homeowners Call Us',
    whyParagraph:
      'Fort Mitchell landlords and owners both want a repair that lasts and a price agreed ahead of time. Licensed, insured technicians handle it, and our guarantee is simple: we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Fort Mitchell?',
        a: 'We quote once the fault is known. Unclogging an apartment’s condensate line is short work, while fitting a compressor to an aging condenser takes far longer. The owner or homeowner okays one flat figure before we begin, and Saturday or Sunday visits add nothing for overtime.',
      },
      {
        q: 'Should a Fort Mitchell landlord repair or replace an old AC?',
        a: 'Fix it when the system is in fair shape and a single part gave out. Replace it when the compressor has died or the unit generates tenant complaints every summer. For heat pumps, add up the winter heating calls as well. In older houses within the historic districts, we measure ducts before sizing new equipment.',
      },
      {
        q: 'Why is my Fort Mitchell AC blowing warm air?',
        a: 'Thermostat mode and the breaker come first, and if you have a heat pump, check it hasn’t flipped into heating. Outside, a stalled condenser fan generally traces to a capacitor or motor. A fan that spins while Fort Mitchell vents blow warm suggests a low refrigerant charge, which a licensed technician must handle.',
      },
    ],
  },
};
