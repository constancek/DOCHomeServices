import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestPark: LocationServiceCopy = {
  localParagraph:
    'Forest Park homes split close to evenly between gas and electric heat. Census figures show 46.2% heat with electricity, a share that includes electric furnaces and baseboard, and 52.8% with gas. Most homes date from the 1960s and 1970s, and 45.2% of households rent, many in apartment buildings. That means all-electric apartments on one side and dual fuel houses on the other, and the fault looks different in each. We find it and price it before any work.',
  emergencyParagraph:
    'On an average January night the Cincinnati airport bottoms out near 23F, per NOAA normals. In Forest Park, a dead heat pump at that temperature turns a bedroom cold fast, which hits infants, elderly parents and sick family members hardest. Our crews repair heat pumps and their electric strips, often the day you call, Saturday or Sunday included.',
  commonIntro:
    'Most calls here start either in an apartment complex or in a house built during the 1960s or 1970s. The usual four:',
  localFaqs: [
    {
      q: 'Does Forest Park require a permit to replace a heat pump?',
      a: 'Yes. The Forest Park Building Department lists replacement heat pumps among the work that needs a permit, with a separate application for HVAC, and it inspects the installation. We apply for the permit and meet the inspector, so you don’t have to sort that out yourself.',
    },
    {
      q: 'I rent in Forest Park and my heat pump keeps failing. What should I do?',
      a: 'Tell your landlord or the manager in writing each time it fails, and keep copies. Under ORC 5321.04, an Ohio landlord must keep any heating equipment they supply in good and safe working order. The city also has a rental registration program. We fix heat pumps, not leases, and take calls from owners and managers.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump repair for Forest Park houses and apartments',
    band1Heading: 'Common Heat Pump Problems in Forest Park Homes and Apartments',
    commonSituations: [
      'An apartment heat pump that runs on emergency heat because the outdoor unit failed',
      'A 1960s house where the dual fuel furnace never takes over',
      'An outdoor unit on a complex’s shared pad, buried by plowed snow',
      'A heat pump stuck in cooling mode that blows cold air on a freezing morning',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Check that the thermostat is set to heat and not cool. Pull the filter and replace it if it’s matted with dust. Your panel should show a breaker for the condenser outside and a second for the air handler; reset whichever tripped, and if it trips again, stop there. Clear plowed snow or drifted leaves off the outdoor unit. Light frost, a puff of steam and the fan going quiet for a few minutes are normal defrost. Heat back on means no call needed; tenants should still report it. Call us when the coil stays iced or the emergency heat light stays lit; we price the fix first.',
      },
      {
        title: 'Repair or Replace Your Heat Pump in Forest Park?',
        body: 'Judge the heat pump, not the 1960s or 1970s house around it. Forest Park outdoor units can be decades newer than the houses beside them, and a broken fan blade or a scorched wire on one of those is a straightforward fix. On an aging unit, a coil that leaks or a compressor that buzzes without starting deserves two quotes side by side, repair and replacement, and we write both. In the all-electric apartments, an electric bill that spikes during a mild stretch tells you the backup strips are covering for the heat pump.',
      },
    ],
    whyTitle: 'Why Forest Park Residents and Landlords Call Us',
    whyParagraph:
      'Forest Park has nearly as many electric-heated homes as gas ones, and apartments make up a big share, so we repair heat pumps for homeowners and the landlords and managers who run rentals. Every technician is licensed and insured.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Forest Park?',
        a: 'It comes down to what broke. A scorched wire or a cracked fan blade takes little time, while hunting a leak along a long apartment line set takes more. We find the fault, then give you or your landlord a flat-rate price to approve. Weekend calls carry no overtime fees.',
      },
      {
        q: 'Should I repair or replace my Forest Park heat pump?',
        a: 'Read the sticker on the outdoor unit for its install year; that date counts, not the house’s. If one part quit on an otherwise healthy unit, fix it. If the compressor is gone, or an aging system keeps losing refrigerant, replacing makes more sense. We quote both so you can compare.',
      },
      {
        q: 'Why does my Forest Park heat pump blow cool air in winter?',
        a: 'Partly by design. Heat pump air leaves the register lukewarm compared with furnace air, so your palm reads it as cool, and that’s fine. Forest Park dual fuel houses should hand the coldest days to the gas furnace. Cold air paired with an iced-up or silent outdoor unit is a breakdown, so call.',
      },
    ],
  },
};
