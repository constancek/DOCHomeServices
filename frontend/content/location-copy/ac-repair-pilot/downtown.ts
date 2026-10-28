import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Nearly every Downtown AC call is inside one unit of a large building. Census figures put about seven in ten homes in buildings of 50 or more units, and close to nine in ten are rented, so the first step is often approval from a landlord, condo association or building manager. Most units heat with electricity, which usually means an in-unit heat pump or an electric air handler in a closet. We work inside your unit, find the fault and price the repair before starting.',
  emergencyParagraph:
    'On the 21 days a year the Cincinnati area reaches 90 degrees, per the National Weather Service, an apartment with a dead cooling system warms up quickly, and older residents feel it first. We repair in-unit heat pumps, split systems and air handlers, and most urgent Downtown calls get a technician the same day, weekends included.',
  commonIntro:
    'Downtown cooling trouble usually sits inside one unit’s equipment closet, not in the whole building. The four we see most:',
  localFaqs: [
    {
      q: 'Do I need building approval for AC repair in a Downtown condo?',
      a: 'Often, yes. Most Downtown homes are in large buildings, and many associations set rules for contractor access and proof of insurance. Check with your manager or association before the visit. Our technicians are licensed and insured, and we can send the building what it asks for.',
    },
    {
      q: 'My Downtown apartment has electric heat. Is that the same system as my AC?',
      a: 'Usually. Most Downtown apartments heat with electricity, and most of those run a heat pump that also cools. That heat pump works all winter, so a summer cooling failure can trace back to wear from the cold months. We test both modes before we quote.',
    },
  ],
  overrides: {
    ctaLine: 'Downtown Cincinnati AC repair for condos and apartments',
    band1Heading: 'Common AC Problems in Downtown Apartments and Condos',
    commonSituations: [
      'An in-unit heat pump blowing room-temperature air after a long winter on heat',
      'A closet air handler’s drain backing up toward the neighbour’s ceiling',
      'A control board or thermostat fault in a condo built after 2010',
      'Weak airflow from long duct runs in a pre-1940 building now split into apartments',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'First find out who owns the equipment. If your building cools apartments from a central plant its own engineers run, building maintenance is the right first contact, and you don’t need us. If the unit has its own heat pump or air handler, make sure the filter behind the return grille is clean and the thermostat is on cool. When cold air doesn’t come back within an hour, or water shows up near the closet, tell management and book a visit. The technician inspects the equipment inside your unit and quotes a flat rate that you, or your landlord, approve before any work.',
      },
      {
        title: 'Repair or Replace Your Downtown AC?',
        body: 'Downtown housing splits sharply by age. Many units are in buildings from before 1940, and a large share are in buildings finished since 2010, with little in between. A system in one of the newer buildings is likely young enough that repairing the failed part is the right answer. In older buildings, equipment past 12 to 15 years with a dead compressor is usually worth replacing, which needs a City of Cincinnati mechanical permit and the building’s sign-off. Because most units heat with electricity, a worn heat pump also pushes up the Duke Energy Ohio bill in January, not just in July.',
      },
    ],
    whyTitle: 'Why Downtown Condo Owners and Renters Call Us',
    whyParagraph:
      'A Downtown repair often involves a tenant, an owner and a building manager. We work within the building’s rules, explain the fault to whoever approves the cost, and set the price first. If it isn’t right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in a Downtown apartment?',
        a: 'We can’t quote fairly until we see the fault. A clogged condensate drain in a closet air handler is a short visit, and a failed heat pump compressor is a much bigger job. The technician explains the cause and gives a flat-rate price to approve first, with no overtime fees.',
      },
      {
        q: 'Should I repair or replace the AC in my Downtown condo?',
        a: 'In buildings finished since 2010, most equipment is still young enough to repair. In older buildings, a heat pump past 12 to 15 years with a failed compressor is usually due for replacement. Check your association’s rules before choosing new equipment.',
      },
      {
        q: 'Why is my Downtown unit’s AC blowing warm air?',
        a: 'Start with the thermostat mode and the filter. If those are fine, a heat pump stuck in heating, a worn capacitor or low refrigerant is the likely culprit. In a high-rise, the outdoor half may sit on the roof or a balcony, so the visit can include building access.',
      },
    ],
  },
};
