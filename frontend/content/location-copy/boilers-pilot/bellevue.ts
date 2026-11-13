import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bellevue: LocationServiceCopy = {
  localParagraph:
    'Bellevue is one of the older towns we cover, and that is why boilers still turn up here. Census figures put the median home at 1938, with 63.7% of homes built in 1939 or earlier and barely any built since 2010. Plenty of those houses were piped for radiators from the start, and most homes here heat with gas. Typical calls are a boiler that will not hold pressure, a noisy pump or upstairs rooms that never warm up. You get a firm price before we touch anything.',
  emergencyParagraph:
    'The area sees about 100 nights a year at or below freezing (NOAA normals, CVG station), so a boiler that stops in midwinter is not something to wait out. Babies, older relatives and anyone who is unwell feel it first, and radiator pipes can suffer in a hard freeze. Most no-heat calls are answered the same day, including weekends.',
  commonIntro:
    'Bellevue is mostly owner-occupied single houses from before the war, many still heated by radiators. The calls we get most:',
  localFaqs: [
    {
      q: 'Do I need a Certificate of Appropriateness to replace a boiler in Bellevue?',
      a: 'Not for work inside the house. Bellevue’s Fairfield Avenue and Taylor’s Daughters districts need a Certificate of Appropriateness for most exterior changes, so a new vent through a front or side wall in those areas should be cleared with the city first. We tell you before the plan includes one.',
    },
    {
      q: 'Can you fix a shared boiler in a Bellevue two-family?',
      a: 'Yes. Census figures put 15.4% of Bellevue homes in two to four unit buildings, and many share one boiler. We find out why one unit runs colder, often air, a zone valve or poor balancing, and the owner approves the price. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Bellevue’s pre-war homes',
    band1Heading: 'Common Boiler Problems in Bellevue Homes',
    commonSituations: [
      'A gas boiler in a 1930s house that fires but leaves the back bedrooms cold',
      'Radiator valves on the second floor that weep at the stem when the heat comes on',
      'A two-family where the upstairs unit runs several degrees colder than downstairs',
      'An expansion tank that has filled with water, so the relief valve opens on every cycle',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Three checks and a gauge reading clear up a fair number of Bellevue calls. Is the thermostat set to heat and above room temperature, and is the boiler switch on? Then open the bleed valve on any radiator that is cold up top, and close it once water comes out. On a hot water boiler, look at the gauge afterward and refill if it reads low. Heat back on means you don’t need us. Book us if the pressure sinks again, water collects under a valve, the flame looks yellow or the boiler shows a lockout code. A carbon monoxide alarm means everyone out, then call 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Bellevue?',
        body: 'The boiler’s own condition decides this, and a Bellevue house from 1938 may hold a fairly new boiler or a very old one. Check the label for the install date. Circulators, relief valves, igniters and expansion tanks are parts we replace and move on. A cracked section, a leaking vessel, or a boiler that needs a repair every winter is when we quote replacement alongside the fix, with financing if it helps. To avoid most of that, book a 60 to 90 minute service each fall: we test pressure and safety controls, check the burner and venting, and bleed the system.',
      },
    ],
    whyTitle: 'Why Bellevue Homeowners Call Us',
    whyParagraph:
      'In Bellevue 70.1% of homes are lived in by their owners, so most calls here come from the person who lives with the boiler. Our techs are licensed, insured, background-checked and drug-tested, and you approve the price first.',
    sharedFaqs: [
      {
        q: 'How is boiler repair priced in Bellevue?',
        a: 'By the job, not the hour. A stuck zone valve, a new igniter and a leaking cast-iron section are very different amounts of work. Once we know which it is, you get a flat-rate quote, and nothing starts until you say yes. We don’t add overtime fees on weekends.',
      },
      {
        q: 'When should a Bellevue boiler be replaced instead of repaired?',
        a: 'When the part that failed is the boiler itself: a leaking vessel or heat exchanger. A bad pump, valve or control on a sound boiler is a repair. If you are paying for a fix each winter, we lay the replacement price next to the repair so you can compare.',
      },
      {
        q: 'Why is one radiator cold in my Bellevue home?',
        a: 'Most often it is air, and bleeding fixes it. On a steam system, make sure the radiator valve is fully open and the air vent on the side is not clogged. If it is still cold after both, a valve or vent has likely failed and we can replace it.',
      },
    ],
  },
};
