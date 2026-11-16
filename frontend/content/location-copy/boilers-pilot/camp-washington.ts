import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const campWashington: LocationServiceCopy = {
  localParagraph:
    'Camp Washington has almost no new housing. Census figures show 88.9% of homes were built in 1939 or earlier and almost none since 1980, so radiators fed by a boiler are a normal sight here. Most homes are in two-families and small apartment buildings, and 79.4% are rented. The jobs we see are worn pumps and valves, low pressure and steam systems that knock. We trace the problem and agree a price before the work begins.',
  emergencyParagraph:
    'The Cincinnati area sees about 100 nights a year at or below freezing, per NOAA normals at the CVG station, and a Camp Washington house with a dead boiler cools quickly on one of them. Small children, older relatives and anyone ill should not wait it out. Most calls are same day, weekends too.',
  commonIntro:
    'Camp Washington’s boilers sit in pre-1940 houses, two-families and small apartment buildings. What breaks most:',
  localFaqs: [
    {
      q: 'I rent in Camp Washington and the heat is off. Who fixes it?',
      a: 'If the landlord controls the heat, Cincinnati rules say the unit must be at 70F or warmer once outdoor temperatures stay below 60F for 24 hours. Tell the landlord in writing; they arrange the repair. We fix boilers, not leases, and we explain the fault to whoever books.',
    },
    {
      q: 'My Camp Washington basement took water. Can I run the boiler?',
      a: 'Not until it is checked. Burners, controls and wiring that sat in water can fail unsafely, even if the boiler seems to fire. Keep it off, and have a technician inspect and test it before you turn the heat back on. Report a sewer backup to MSD within 48 hours.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Camp Washington houses and two-families',
    band1Heading: 'Common Boiler Problems in Camp Washington Homes and Apartments',
    commonSituations: [
      'A steam boiler in a pre-war house whose pipes knock when the heat starts',
      'A two-family where the boiler runs fine but the upstairs radiators stay lukewarm',
      'A low-water cutoff on a steam boiler that keeps shutting the burner off',
      'A small apartment building boiler that loses pressure through a leaking radiator valve',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Check the simple things before you call. Bleed any radiator that is cold near the top until water, not air, comes out of the valve. On a hot water boiler, read the pressure afterward and add water if it is low. Set the thermostat to heat, turn it up, and make sure the boiler is switched on. If the heat comes back, there is no need for a visit. We should look when the pressure won’t stay up, a radiator valve leaks, the steam pipes bang every cycle or the boiler locks out. If a CO alarm goes off, get everyone out before you call 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Camp Washington?',
        body: 'Ignore the age of the building, since nearly every house here is old. Read the boiler’s label instead; it gives the install date. Low-water cutoffs, pumps, zone valves and igniters are replaceable parts. A leaking section or vessel, or a boiler with a new problem every winter, is when we put a replacement quote next to the repair quote; financing is available. Yearly service, 60 to 90 minutes before the cold, covers the pressure, expansion tank, leaks, safety controls, burner and venting, and we bleed the radiators. On steam we also check the water level and the sight glass.',
      },
    ],
    whyTitle: 'Why Camp Washington Owners and Renters Call Us',
    whyParagraph:
      'Most Camp Washington homes are rented and in buildings with more than one unit. We work with owners on the repair, keep tenants informed, and send licensed, insured, background-checked technicians with flat prices approved first.',
    sharedFaqs: [
      {
        q: 'How much will my Camp Washington boiler repair cost?',
        a: 'It comes down to what failed. A sticking low-water cutoff, a dead pump and a cracked section are three very different jobs. We find the cause first, give a flat-rate price, and start only when you approve. No overtime charges for evenings or weekends.',
      },
      {
        q: 'Is my old Camp Washington boiler worth fixing?',
        a: 'Often it is. If the vessel holds water and one part failed, replace the part. If the vessel or heat exchanger leaks, or you are calling for repairs each winter, we quote a new boiler beside the repair and you decide. Financing is available.',
      },
      {
        q: 'Why do some radiators stay cold in my Camp Washington home?',
        a: 'On hot water systems, trapped air is the usual reason, and bleeding sorts it. On steam, a stuck air vent on the radiator stops steam getting in. If a whole floor is cold, it is more likely a zone valve, the pump or low pressure at the boiler.',
      },
    ],
  },
};
