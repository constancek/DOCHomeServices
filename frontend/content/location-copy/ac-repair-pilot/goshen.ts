import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const goshen: LocationServiceCopy = {
  localParagraph:
    'Across Goshen Township, most of the AC we repair went in during the 1980s or later, since Census figures put the township’s median home at 1983. About 15% of homes here are mobile homes, where the air handler usually sits in a closet and the ducts run under the floor, so a duct leak can go unnoticed for years. Over half the township heats with electricity, which usually means a heat pump. We find the fault and give you the price before any work begins.',
  emergencyParagraph:
    'Heat is hardest on Goshen’s mobile homes, which warm up fast once the AC stops, and on anyone elderly or very young. National Weather Service records for the Cincinnati area average about 21 days a year at 90 degrees or more. We repair central air and heat pumps, the same day on most calls, weekends included.',
  commonIntro:
    'Goshen Township has a lot of mobile homes alongside its 1980s and newer houses. These are the repairs we see most:',
  localFaqs: [
    {
      q: 'Can you repair the AC in a mobile home in Goshen?',
      a: 'Yes. Most mobile homes here use a split system or a heat pump with the indoor unit in a hall closet, and we repair both. The usual faults are a weak capacitor outside or a torn duct under the floor that dumps cold air beneath the home instead of into the rooms.',
    },
    {
      q: 'My Goshen heat pump runs all afternoon in July. Is it broken?',
      a: 'Not always. On the hottest afternoons a heat pump can run for hours and still be working fine. It’s a problem when the house keeps getting warmer or you see ice on the copper line outside. If there’s ice, switch the system off and call us, because running it frozen can hurt the compressor.',
    },
  ],
  overrides: {
    ctaLine: 'Goshen AC repair for houses and mobile homes',
    band1Heading: 'Common AC Problems in Goshen Homes',
    commonSituations: [
      'A 1980s condenser that clicks but won’t start',
      'A loose duct under a mobile home blowing air beneath the floor',
      'A heat pump iced over on a humid July afternoon',
      'A closet air handler with a clogged filter and a frozen coil',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Start at the thermostat. Put in new batteries, then swap the filter and flip the AC breaker off and on at the panel. If cold air comes back and stays, you don’t need us. Call when the breaker trips a second time or the outdoor fan won’t spin. In a mobile home, hold a hand near the floor vents; weak airflow with the system running often points to a duct that has pulled loose underneath. The technician checks both units and tells you what failed. You approve a flat-rate price before anything starts, and after the repair we measure the air at the vents before leaving.',
      },
      {
        title: 'Repair or Replace Your Goshen AC?',
        body: 'Look at the date on the outdoor unit, not the age of the house. A 2000s house in Goshen Township may already be on its second system, and a 1980s one may still have its first. Cheap parts on a system with years left are worth replacing, but a dead compressor on a tired unit usually means it’s time. Clermont County Building Inspection issues the replacement permit, and we pull it for you. Keep an eye on the electric bill in the meantime. A summer bill that runs higher than last year’s with similar weather often means the coil is matted or refrigerant is slowly escaping.',
      },
    ],
    whyTitle: 'Why Goshen Township Homeowners Call Us',
    whyParagraph:
      'We work on Goshen Township’s mix of houses and mobile homes, and we know where each one hides its air handler. Every technician is licensed and background-checked, and you approve the price before work starts.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Goshen?',
        a: 'We can’t say until we’ve tested it, because the fault sets the price. Swapping a capacitor on a 1980s condenser is quick work, while chasing a duct leak under a mobile home takes longer. You get one flat price to approve first, and nights and weekends cost no more.',
      },
      {
        q: 'Should I repair or replace my AC in Goshen?',
        a: 'Repair it if the system still has years left and only one part failed. Replace it if the compressor is gone on an old unit, or if you’re paying for refrigerant every summer. Goshen Township has houses from every decade since 1980, so we read the unit’s data plate and price both options.',
      },
      {
        q: 'Why is my Goshen AC blowing warm air?',
        a: 'Start with the thermostat setting and the breaker, then change the filter. If the fan outside is still, the capacitor has likely failed. A heat pump stuck in heating mode blows warm air too, and so does a system low on refrigerant. Those last two need a technician.',
      },
    ],
  },
};
