import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'Dry Run is the newest housing on our Anderson Township routes, so most AC repairs here are about the equipment, not old ductwork. Census figures put about a quarter of homes at 2000 or later and most of the rest in the 1980s and 1990s, which means many houses are still on their first or second air conditioner. Nearly every home is a detached house lived in by its owner, and the bigger ones often run two systems. We test, name the fault and agree the price before we start.',
  emergencyParagraph:
    'A larger two-story Dry Run house can heat up fast on the second floor once the AC stops, and that is hard on older owners and small children. The National Weather Service puts the yearly average at 21 days reaching 90 degrees. We repair central air, heat pumps and zoned systems, most often the same day, Saturdays and Sundays included.',
  commonIntro:
    'Dry Run homes mostly date from the 1980s onward, so the problems are less about old ducts and more about aging original equipment. What we fix most:',
  localFaqs: [
    {
      q: 'My Dry Run house was built in the 2000s. Could the AC still be under warranty?',
      a: 'Possibly, if it was replaced recently or the warranty was registered and transferred. A system original to a 2000s house is likely past its warranty, though. Check the paperwork or the installer’s records before you call anyone, since a covered part may change who you should call first.',
    },
    {
      q: 'Why does one floor of my Dry Run home stay warmer than the other?',
      a: 'Bigger 1980s and 1990s houses often run one system for two floors, or two systems with one in the attic. If the upstairs lags only on the hottest afternoons, that can be normal. If it lags all day, we check the attic unit, the zone dampers and the thermostat placement.',
    },
  ],
  overrides: {
    ctaLine: 'Dry Run AC repair for 1980s and newer homes',
    band1Heading: 'Common AC Problems in Dry Run Homes',
    commonSituations: [
      'A 1990s condenser at the end of its life with a compressor that trips the breaker',
      'An attic air handler for the second floor overflowing its drain pan into a ceiling',
      'Zone dampers stuck closed so one floor never cools',
      'A builder-grade thermostat losing its settings and short-cycling the system',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'In a Dry Run house with two systems, first work out which one has the problem. Change the filter on that unit, check the thermostat for that floor is on cool, and reset the matching breaker once. If cold air comes back, you have saved yourself a visit. If the attic unit is dripping, the outdoor fan won’t spin, or the system runs all day and the house still sits several degrees over the setting, call us. We check both systems if needed, explain what failed, and give you a flat price to approve first. Then we measure the air to confirm it cools.',
      },
      {
        title: 'Repair or Replace Your Dry Run AC?',
        body: 'Dry Run houses are newer than most, but a 1988 house with its original condenser has a very old system. The equipment label settles it. Equipment under about ten years old with one failed part is a repair. Once a unit nears 15 and the compressor or coil goes, replacing it usually costs less over time, and with two systems you can replace one without the other. We handle the permit. Until then, compare your summer electric bills year to year: a steady climb with the same settings often means a system losing refrigerant or running with a dirty coil.',
      },
    ],
    whyTitle: 'Why Dry Run Homeowners Call Us',
    whyParagraph:
      'Dry Run owners usually want to know whether original equipment has years left, and we tell them honestly, including when it doesn’t. Our technicians are licensed and drug-tested, and financing is available on replacements.',
    sharedFaqs: [
      {
        q: 'How do you price AC repair in Dry Run?',
        a: 'We find the fault first, then quote it. Clearing a clogged drain on an attic air handler is a small job, and replacing a compressor on a two-story house’s main system is a large one. The price is flat and approved by you before we start, and weekend calls carry no overtime fee.',
      },
      {
        q: 'Should I repair or replace my Dry Run AC?',
        a: 'Repair a younger system with a single failure. Replace one that is around 15 years old with a failing compressor or coil. Many Dry Run homes from the 1990s are now reaching that point with their second system, so we lay out both prices and you decide.',
      },
      {
        q: 'Why is my Dry Run AC blowing warm air?',
        a: 'Check the filter, the breaker and the thermostat on the floor that’s warm. In a Dry Run house with two systems, it is easy to adjust the wrong one. If those are fine, a frozen attic coil, a failed outdoor fan or low refrigerant are the usual causes, and we test before quoting.',
      },
    ],
  },
};
