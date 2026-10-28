import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Renters hold 84.5% of CUF’s homes, per Census figures, so the building’s owner or manager signs off on most cooling repairs here. The housing splits in two. Fairview and western Clifton Heights are mostly pre-1940 houses with cooling added later, while other parts lean to large 1970s-era buildings. Gas furnaces with a coil and electric heat pumps turn up in similar numbers, so we check which you have first. The technician names the fault and its cost before picking up a tool.',
  emergencyParagraph:
    'Heat builds fastest at the top of CUF’s three- and four-unit buildings, and the National Weather Service puts the Cincinnati average at 21 days a year of 90 degrees or more. A tenant can’t fix the landlord’s equipment, so we deal with both, repairing split systems and heat pumps, most on the day of the call, weekends included.',
  commonIntro:
    'CUF mixes pre-1940 houses and two-families with small apartment buildings and large 1970s-era blocks. These four faults come up most:',
  localFaqs: [
    {
      q: 'I rent in CUF. Whose job is the AC repair?',
      a: 'Usually the owner’s. Ohio Revised Code 5321.04 makes landlords keep the appliances they supply, air conditioning included, in good and safe working order. That’s the rule as written; we fix air conditioners, not leases. Put the complaint to your landlord in writing, and once they book us, we explain the fault to both of you.',
    },
    {
      q: 'Can CUF’s steep lots cause AC trouble?',
      a: 'They can. The USGS describes landslides as widespread on the steeper slopes of the Ohio valley walls around Cincinnati, and CUF has plenty of them. Ground that moves can tilt a condenser pad, which puts strain on the copper line joints. If your outdoor unit leans, have it leveled when it’s repaired.',
    },
  ],
  overrides: {
    ctaLine: 'CUF AC repair from Fairview to University Heights',
    band1Heading: 'Common AC Problems in CUF Homes',
    commonSituations: [
      'A condenser serving a 1970s-era building that slowly leaks refrigerant',
      'One flat in a two-family or four-unit house cooling while the next stays warm',
      'An electric heat pump that won’t switch from heating to cooling in June',
      'An outdoor unit tilting on a pad set into a sloped hillside lot',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'A tenant can check most of the easy causes without tools. If the lease allows, swap a clogged filter, then lower the cooling setpoint well under the room temperature and flip the AC breaker fully off and back on. Cold air within the hour means you’re finished. If the rooms stay warm, write to the owner or building office rather than hiring someone yourself, because the owner normally chooses the contractor. A still outdoor fan or frost on the thicker refrigerant pipe needs a technician. Ours checks both halves of the system, tells tenant and owner what broke, and gets a flat-rate price approved before starting.',
      },
      {
        title: 'Repair or Replace Your CUF AC?',
        body: 'The equipment label matters more than the building’s age, since a 1930s Fairview house can have a recent condenser. If the unit has fewer than ten summers behind it and only a capacitor or fan motor quit, fix it. Once it’s into its teens and the compressor goes, a new system is usually the smarter money, and Cincinnati’s Buildings & Inspections office issues the mechanical permit for it. Hillside lots add one more check, since a pad that has shifted strains the refrigerant lines. Neglect costs too: grime on the outdoor fins or a pinhole leak stretches each cycle, and landlords pay for that on the Duke Energy Ohio statement.',
      },
    ],
    whyTitle: 'Why CUF Landlords and Renters Call Us',
    whyParagraph:
      'Most CUF repairs involve a tenant who wants cold air and an owner who wants a clear number. We give both the same explanation and agree the cost up front. We make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in a CUF apartment or house?',
        a: 'Nobody can price it honestly until the fault is found. Swapping a pitted contactor takes minutes. Tracing a leak in lines run through an old plaster wall in Fairview takes much longer. The owner signs off on one flat-rate number beforehand, and there’s no overtime charge on any visit.',
      },
      {
        q: 'Should a CUF landlord repair or replace an older AC?',
        a: 'If the system is younger than a decade and one component failed, fix it. If it’s into its teens with a seized compressor or a coil that keeps leaking, replacement wins. Many CUF buildings have swapped equipment before, so the date on the unit itself is what counts, not the building’s age.',
      },
      {
        q: 'Why is my CUF AC blowing warm air?',
        a: 'Check the thermostat mode first. Plenty of CUF systems are heat pumps, and one left on heat or emergency heat blows warm air all day. If the breaker is on and the filter is clean, the usual culprits are a burnt-out capacitor or a refrigerant leak, and both need a technician.',
      },
    ],
  },
};
