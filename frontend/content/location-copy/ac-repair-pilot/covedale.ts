import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const covedale: LocationServiceCopy = {
  localParagraph:
    'In Covedale, the address comes first, because the name covers two places. The larger part is unincorporated Green Township, where Census figures show 91.3% of homes owner-occupied and a typical house from 1959, often with ducts laid out for a gas furnace. The City of Cincinnati side is older, mostly pre-1940 houses with more two-families and renters. That split decides who issues a replacement permit. We confirm which side you’re on, find the fault and price it before any work starts.',
  emergencyParagraph:
    'By National Weather Service figures, the Cincinnati area averages 21 days a year of 90 degrees or hotter, and an upstairs bedroom in an older Covedale house loses ground first. We repair central air on gas furnaces and heat pumps on both the township and city sides, most on the same day, weekends included.',
  commonIntro:
    'Covedale’s Green Township side is mostly 1950s and 1960s detached houses, and the city side is older. The faults we see most:',
  localFaqs: [
    {
      q: 'Who issues the AC permit in Covedale?',
      a: 'It depends on the address. On the City of Cincinnati side, Buildings & Inspections issues HVAC permits, separate from plumbing and electrical. On the Green Township side, which is unincorporated, Hamilton County Buildings + Inspections handles building permits. We haven’t confirmed the mechanical permit office there, so we check before any replacement.',
    },
    {
      q: 'My Covedale house was built in the 1950s. What usually fails?',
      a: 'Usually the airflow, not the equipment. Many township houses went up in the 1950s with ducts laid out for a gas furnace, so a newer, larger condenser can outrun them. We see coils freezing from low airflow and blower motors worn out by summer use, and we measure before replacing parts.',
    },
  ],
  overrides: {
    ctaLine: 'Covedale AC repair on the township and city sides',
    band1Heading: 'Common AC Problems in Covedale Homes',
    commonSituations: [
      'Ducts in a 1950s or 1960s house sized for heat rather than central air',
      'A coil added onto a gas furnace with a condensate line that clogs each summer',
      'Second-floor rooms in a pre-1940 city-side house that never catch up',
      'One side of a city-side two-family cooling while the other stays warm',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Most Covedale owners can clear the simple causes on their own. Replace the furnace filter, switch the thermostat to cool and reset the AC breaker once if it tripped. Give it an hour. If the rooms cool, you don’t need a visit. On the city side, where many two-families are rented, tenants should go to the landlord first. Get a technician out if the condenser fan won’t turn or the system runs nonstop without bringing the temperature down. We test the condenser and the furnace blower that moves the air, explain the fault plainly and settle a flat-rate figure with you up front.',
      },
      {
        title: 'Repair or Replace Your Covedale AC?',
        body: 'Go by the condenser’s data plate, not the year on the house. Equipment younger than ten years with a single bad part is a repair. In its teens with a seized compressor, a new system is usually the wiser spend, and where the permit comes from depends on whether the house is in the city or Green Township. Because most township homes went up between 1940 and 1969, an aging furnace often sits under the coil, so price the two together. Neglect costs as well: dirt in the outdoor fins or a pinhole leak keeps the compressor running longer, which the Duke Energy bill reflects.',
      },
    ],
    whyTitle: 'Why Covedale Homeowners Call Us',
    whyParagraph:
      'Covedale sits partly in the city and partly in Green Township, and we sort out which rules apply before quoting. Each technician is licensed and background-checked, and you approve the flat-rate price first, with no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in Covedale?',
        a: 'We quote after finding the fault. Changing a capacitor or contactor goes fast, while tracing a leak in a coil sitting on a furnace takes longer. The flat-rate figure you approve beforehand is worked out the same way in the city and the township, and overtime charges never apply.',
      },
      {
        q: 'Should I repair or replace the AC in my Covedale home?',
        a: 'A system under ten years old with one failed component is worth fixing. One in its teens with a dead compressor or a leaking coil is usually worth replacing. On the township side, where most people own, that call is yours. On the city side, renters should take it to the landlord.',
      },
      {
        q: 'Why is my Covedale AC blowing warm air?',
        a: 'Check the breaker and the furnace filter first. If they’re fine and the condenser fan sits still, the capacitor has usually failed. If it turns and the air stays warm, suspect low refrigerant. In the smaller share of homes on electric heat, a heat pump can stick on heating.',
      },
    ],
  },
};
