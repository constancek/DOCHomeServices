import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'A Hamilton AC call usually means a 1950s house and an electric bill from the city, not Duke Energy. Census figures put 57.7% of homes here before 1960, so the ducts were laid out for a furnace and the cooling came later. The City of Hamilton runs its own electric and gas utilities and issues its own HVAC permits, which only a city-registered contractor can pull before work starts. Plenty of homes are rented, so the owner often approves the job. We find what failed and price it first.',
  emergencyParagraph:
    'NOAA’s 1991 to 2020 normals for the Cincinnati airport, about 30 miles south, show 22.2 days a year at 90 degrees or above. Tenants in Hamilton rentals can’t fix a dead system themselves, and older residents feel the heat first. We repair central air and heat pumps across the city, usually the same day, weekends included.',
  commonIntro:
    'Most Hamilton homes predate 1960, and their cooling problems tend to follow that age. The ones we see most:',
  localFaqs: [
    {
      q: 'Do Duke Energy rebates apply to AC work in Hamilton?',
      a: 'No. Hamilton runs its own municipal electric and gas utilities, so Duke Energy programs and billing don’t reach addresses inside the city. We can’t confirm whether the city offers an HVAC rebate of its own, so ask Hamilton’s utility before counting on one. We won’t build a quote around a rebate we can’t verify.',
    },
    {
      q: 'Who can pull an AC permit in Hamilton?',
      a: 'Only a contractor with a City of Hamilton registration, through its Master Registration holder or an authorized representative. The city lists HVAC and refrigeration permits separately and expects the permit before work starts. Hamilton County’s building office does not cover the City of Hamilton, despite the shared name.',
    },
  ],
  overrides: {
    ctaLine: 'Hamilton AC repair on both sides of the Great Miami',
    band1Heading: 'Common AC Problems in Hamilton Homes',
    commonSituations: [
      'Weak airflow from ducts first laid out for a 1950s furnace',
      'A pre-2010 R-22 condenser leaking refrigerant',
      'A heat pump that runs all afternoon without bringing the temperature down',
      'The breaker tripping each time an older condenser kicks on',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Some Hamilton no-cool problems are yours to fix for free. If the filter is gray and matted, change it. If the thermostat screen is blank, replace its batteries. Either one can bring cold air back, and then you don’t need a technician. Book one when the outdoor unit hums without its fan turning, ice coats the larger copper line, or the breaker trips a second time. We inspect the condenser and the indoor coil, explain the problem in plain terms and quote a flat rate for you to approve. After the repair, we measure the air at the supply vents to show it’s cooling again.',
      },
      {
        title: 'Repair or Replace AC in a 1950s Hamilton Home?',
        body: 'The AC in a 1956 house is rarely original, so date the condenser, not the home. Fewer than a dozen years old with a bad capacitor or fan motor: repair it. Older, running R-22 and leaking: replacing often makes more sense, since new R-22 is no longer made or imported. A new system needs a City of Hamilton HVAC permit, and in historic areas such as German Village and Dayton Lane, exterior work goes through the Architectural Design Review Board. Meanwhile, a dirty coil or a slow leak makes the compressor run longer, and those extra hours land on your City of Hamilton electric bill.',
      },
    ],
    whyTitle: 'Why Hamilton Homeowners Call Us',
    whyParagraph:
      'Hamilton has its own utility and its own permit rules, and we work within both. Our technicians are licensed and drug tested, and every price is approved by you before work starts, with no overtime fees.',
    sharedFaqs: [
      {
        q: 'What will an AC repair cost in Hamilton?',
        a: 'That depends on what failed, so we diagnose before quoting. A capacitor on a newer condenser is a modest repair, while an R-22 leak on an older unit costs much more. You see the flat-rate price and approve it before work begins, and there are no overtime fees.',
      },
      {
        q: 'Should I fix or replace the AC in my Hamilton house?',
        a: 'Go by the equipment. A younger system with one failed part is worth fixing. An older R-22 unit with a leak or a dead compressor usually isn’t. In a Hamilton house from the 1940s or 1950s, the ducts deserve a look before a new system goes on them, since they were sized for heat alone.',
      },
      {
        q: 'Why does my Hamilton AC blow warm air?',
        a: 'If the breaker and filter are fine, the outdoor unit is the next place to look, usually a capacitor that has given out or refrigerant that has leaked away. In a Hamilton home with a heat pump, a reversing valve that won’t switch out of heat mode will push warm air through the vents in July.',
      },
    ],
  },
};
