import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const golfManor: LocationServiceCopy = {
  localParagraph:
    'Golf Manor heat pump calls often start with a renter, because half the village’s homes are rented and many sit in two-family or four-unit buildings from the 1940s and 1950s. Census figures show 73.4% heat with gas and 25.6% with electricity, so a heat pump here is either an electric unit serving one apartment or a dual fuel system on a gas furnace. Duke Energy Ohio supplies the power. We work out which unit failed, explain it to the owner and price it before the repair.',
  emergencyParagraph:
    'Freezing nights are common here: NOAA’s normals for CVG count about 100 a year at 32F or below. In a Golf Manor apartment without heat, the people at risk are babies, older tenants and anyone who’s ill. We repair heat pumps and the air handlers serving each unit, typically the same day, weekends included.',
  commonIntro:
    'In Golf Manor, most heat pump problems turn up in small rental buildings and mid-century single houses. These four come up most:',
  localFaqs: [
    {
      q: 'I rent in Golf Manor and my heat pump stopped. What should I do?',
      a: 'Check the thermostat mode and the filter, then tell your landlord in writing. Ohio law, ORC 5321.04, requires landlords to keep supplied heating equipment working and to supply reasonable heat. We fix heat pumps, not leases, so the owner usually books us and approves the price.',
    },
    {
      q: 'Does replacing a heat pump in Golf Manor need a permit?',
      a: 'Yes. The village lists heating and cooling replacements among the jobs that need a permit, and building projects there start with a village zoning certificate. We take care of the paperwork on a replacement. Repairing the heat pump you already have doesn’t involve any of that.',
    },
  ],
  overrides: {
    ctaLine: 'Golf Manor heat pump repair for owners and landlords',
    band1Heading: 'Common Heat Pump Problems in Golf Manor Homes and Apartments',
    commonSituations: [
      'One unit in a four-family building with no heat while the neighbours are warm',
      'Several outdoor units lined up behind a building, one of them frozen solid',
      'A heat pump in a 1950s single house stuck blowing cold on the cooling setting',
      'A tenant’s electric bill jumping because the backup heat strips never shut off',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Tenants and owners can check a few things. Make sure the thermostat is on heat. Pull the filter and replace it if it’s caked with dust. Each heat pump has two breakers, one outside and one for the indoor air handler, so check both. In a building with several outdoor units, find the one with your apartment number and clear snow from around it. Steam, light frost and a fan that stops briefly are defrost, not a fault. If heat comes back, you don’t need a repair. Otherwise, renters report it to the landlord. Owners, call us for persistent ice, a stuck auxiliary heat light or a silent outdoor fan.',
      },
      {
        title: 'Repair or Replace Your Golf Manor Heat Pump?',
        body: 'Decide on the heat pump itself. A building from the 1950s may have outdoor units of very different ages, so we read each label. A failed capacitor, fan motor or defrost control on a unit in good shape is a repair. A refrigerant leak or a compressor failure is where landlords get two prices side by side, one to repair and one to replace. Watch the electric bills for each apartment, too. One that spikes in an ordinary winter month usually means the backup strips are doing work the heat pump should be doing.',
      },
    ],
    whyTitle: 'Why Golf Manor Landlords and Residents Call Us',
    whyParagraph:
      'We work in Golf Manor’s small apartment buildings and single houses, and we price every repair for the owner before any work starts. Our technicians are licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Golf Manor?',
        a: 'We can’t quote until we know what failed. A blown fuse or contactor at one outdoor unit is a small job. A leak in a coil shared by an older system is bigger. The owner approves a flat-rate price first, and there are no overtime fees on weekends.',
      },
      {
        q: 'Is it worth repairing an older heat pump in a Golf Manor rental?',
        a: 'Often, yes, when one part failed. If the compressor is gone or the unit leaks refrigerant season after season, replacing it can cost the owner less in callbacks and tenant complaints. We give both numbers in writing, and financing is available.',
      },
      {
        q: 'Why does the heat pump in my Golf Manor apartment blow cool air?',
        a: 'Heat pumps deliver gentler heat than a gas furnace, so the air can feel cool even when it’s working. If it’s cold air and your outdoor unit is iced up or not running, that’s a fault. Check the thermostat is on heat, then let your landlord know.',
      },
    ],
  },
};
