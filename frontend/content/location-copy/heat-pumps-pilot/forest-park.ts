import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestPark: LocationServiceCopy = {
  localParagraph:
    'Forest Park homes split close to evenly between gas and electric heat. Census figures show 46.2% heat with electricity, a share that includes electric furnaces and baseboard, and 52.8% with gas. Most homes date from the 1960s and 1970s, and 45.2% of households rent, many in apartment buildings. That means all-electric apartments on one side and dual fuel houses on the other, and the fault looks different in each. We find it and price it before any work.',
  emergencyParagraph:
    'NOAA’s normals for the Cincinnati airport show January lows close to 23F. Lose the heat pump in a Forest Park apartment or house on a night that cold and the rooms chill fast, with babies, older relatives and anyone ill feeling it soonest. Our technicians repair heat pumps and backup heat strips, mostly the same day, weekends included.',
  commonIntro:
    'Forest Park heat pump calls come from apartment complexes and from 1960s and 1970s houses. These four come up most:',
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
        body: 'A few checks can save you a visit. The thermostat belongs on heat. Throw out a dusty filter and fit a fresh one. The outdoor unit and the air handler indoors have their own breakers; flip back a tripped one a single time, and if it trips again, leave it off. Shovel snow and rake leaves away from the outdoor cabinet. Vapor and a fan that rests briefly are the unit defrosting itself. If warmth returns, you don’t need us, though renters should still tell management. Call when ice keeps thickening on the coil or the emergency heat light won’t switch off. We quote before any repair.',
      },
      {
        title: 'Repair or Replace Your Forest Park Heat Pump?',
        body: 'The heat pump’s own condition matters more than the building’s age. A Forest Park house from 1970 may have a recent outdoor unit, and a cracked fan blade or a burned wire on that is a repair. A refrigerant leak or a compressor that won’t start on an older unit is when owners should look at a repair quote and a replacement quote together; we provide both. In an all-electric apartment, an electric bill that jumps without a cold snap usually means the heat strips are doing the heat pump’s job.',
      },
    ],
    whyTitle: 'Why Forest Park Residents and Landlords Call Us',
    whyParagraph:
      'Forest Park has nearly as many electric-heated homes as gas ones, and apartments make up a big share, so we repair heat pumps for homeowners and the landlords and managers who run rentals. Every technician is licensed and insured.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Forest Park?',
        a: 'The price depends on the fault. A burned wire or a cracked fan blade is quick, and a refrigerant leak in a long line set takes longer to trace. We diagnose first and quote a flat rate for you or your landlord to approve. There are no overtime fees on weekends.',
      },
      {
        q: 'Should I repair or replace my Forest Park heat pump?',
        a: 'Repair it when one component failed and the rest of the unit is sound. Replace it when the compressor dies or refrigerant keeps leaking on an older unit. The year on the unit’s label tells you more than the year your house was built. We price both.',
      },
      {
        q: 'Why does my Forest Park heat pump blow cool air in winter?',
        a: 'Heat pump air comes out warm rather than hot, so it can feel cool beside a gas furnace, and that is normal. In a dual fuel house the furnace should take the coldest days. Cold air with an iced-over or stopped outdoor unit is a fault we need to see.',
      },
    ],
  },
};
