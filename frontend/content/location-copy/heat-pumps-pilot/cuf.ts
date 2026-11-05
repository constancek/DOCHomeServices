import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'CUF heats with a mix of gas and electricity, and most of its homes are rentals. Census figures put electric heat at 42.6% of homes and renters at 84.5% of households, so many of our heat pump calls here come from landlords with all-electric apartments. In Fairview and western Clifton Heights, most houses predate 1940, while the larger buildings lean toward the 1970s. The owner gets the diagnosis and a price before any work begins.',
  emergencyParagraph:
    'NOAA normals for CVG count roughly 100 nights a year at freezing or colder. In a CUF apartment, a dead heat pump on a night like that falls hardest on infants, elderly tenants and people who are ill. Owners and managers can book us for heat pumps and electric air handlers, often the same day, Saturdays and Sundays included.',
  commonIntro:
    'CUF heat pump calls come from old houses with two to four units and from 1970s apartment buildings. These come up most often:',
  localFaqs: [
    {
      q: 'My CUF apartment heat pump stopped working. What can I do?',
      a: 'Look at the thermostat first: it should say heat. Then see whether a breaker flipped. If neither fixes it, put the problem in writing to your landlord. CUF is part of Cincinnati, and city rules say a landlord supplying heat keeps it at 70F or more after 24 hours below 60F outdoors. We fix heat pumps, not leases.',
    },
    {
      q: 'Our CUF building has an old heat pump for each unit. Should we replace them all at once?',
      a: 'Not automatically. Repair any unit that’s sound apart from one failed part, and replace the ones with compressor failures or repeated leaks. If several are the same age and starting to fail, pricing them together can make sense, and financing is available. We give you a price per unit.',
    },
  ],
  overrides: {
    ctaLine: 'CUF heat pump repair for landlords and property managers',
    band1Heading: 'Common Heat Pump Problems in CUF Homes and Apartments',
    commonSituations: [
      'A 1970s apartment building air handler stuck on emergency heat',
      'A heat pump in an old Fairview house that can’t keep the top floor warm',
      'A two-family house where one heat pump works and the other blows cold',
      'An outdoor unit on a steep lot packed with leaves from the hillside',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Rule these out first. The thermostat needs to say heat. A grey filter should come out. At the panel, the outdoor unit and the indoor air handler each have a breaker; flip a tripped one back once. Rake leaves off the outdoor unit. Steam or thin frost during defrost is part of normal running. Heat back on means no visit, though a tenant should still let the landlord know. Owners should book us when the coil stays caked in ice, the aux heat light won’t go dark, the system is stuck in one mode, or the outdoor fan scrapes. You see the price before repairs.',
      },
      {
        title: 'Repair or Replace Your CUF Heat Pump?',
        body: 'Base it on the equipment, not the year on the house. Plenty of Fairview homes built before 1940 now have a fairly new heat pump, and when a capacitor or fan motor quits on one of those, we fix it. In a 1970s building with aging units, a dead compressor or a coil that won’t hold refrigerant is when we write up a repair price and a replacement price together. Replacing means a city mechanical permit, which we pull. Watch the Duke Energy Ohio bill in all-electric apartments too: backup strips covering for a weak heat pump push it up, and the first sign is often a tenant complaint.',
      },
    ],
    whyTitle: 'Why CUF Landlords and Property Managers Call Us',
    whyParagraph:
      'Most CUF homes are rented, so we work mainly for owners keeping tenants warm in old houses and 1970s buildings. Expect licensed, background-checked technicians, approved flat-rate pricing and no overtime fees on weekend calls.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost for a CUF rental?',
        a: 'It depends on what failed and how hard it is to reach. Swapping a contactor in an outdoor unit at ground level goes fast; chasing a leak in a line set that climbs the outside of an old house takes longer. After diagnosis the owner gets a flat-rate quote to approve before we start.',
      },
      {
        q: 'Should I repair or replace the heat pump in a CUF rental?',
        a: 'Repair when one part failed on a working system. Replace when an older unit’s compressor fails or it keeps losing refrigerant, since repeat leaks mean repeat no-heat calls from tenants. We quote both options in writing, and you decide which way to go.',
      },
      {
        q: 'Why is the heat pump in my CUF apartment blowing cool air?',
        a: 'Air from a heat pump is warm rather than hot, so after years with a gas furnace it can feel cool. On its own that’s fine. Cold air with the outdoor unit frozen over or sitting still means a repair is due. Let your landlord know; they can call us.',
      },
    ],
  },
};
