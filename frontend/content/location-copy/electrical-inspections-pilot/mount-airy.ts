import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAiry: LocationServiceCopy = {
  localParagraph:
    'A Mount Airy electrical inspection is usually for an apartment building or a 1960s house. The median home was built in 1964, and Census figures show half of them heat with electricity, so panels here carry heat all winter on top of everything else. Two in five units sit in buildings of five or more, which means landlords and managers book much of this work. We look for circuits near their limit, test protection, and give you the price first.',
  emergencyParagraph:
    'If something in your Mount Airy home smells like it’s burning, an outlet or switch cover feels hot or has gone dark, it buzzes or sparks, or a breaker keeps tripping as soon as you flip it back, don’t wait. Turn the breaker off. Smoke or fire means leave and call 911. Same day on most calls, weekends included.',
  commonIntro:
    'Mount Airy is mostly 1960s and 1970s housing, more apartments than houses, and these come up most:',
  localFaqs: [
    {
      q: 'My Mount Airy apartment has electric heat and the breaker trips on cold nights. Is that normal?',
      a: 'No. A heating circuit shouldn’t trip in normal use. It can mean a failing breaker, a loose connection or a heater drawing more than it should. Report it to your landlord in writing, and run a space heater only on a different circuit, never on an extension cord.',
    },
    {
      q: 'What does my landlord have to do about electrical problems in Mount Airy?',
      a: 'Put it to them in writing. Mount Airy landlords are covered by ORC 5321.04 (A)(4), Ohio’s requirement that electrical fixtures a landlord supplies be kept in good and safe working order. Scheduling and approving the inspection falls to the owner or manager. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mount Airy apartments and houses',
    band1Heading: 'Common Electrical Problems We Find in Mount Airy Homes and Apartments',
    commonSituations: [
      'Electric heat, a range and a dryer all on one small apartment panel',
      'Wall heater circuits with scorched terminals after years of winter load',
      'A 1960s house where the owner wants to add a heat pump or EV charger',
      'Common-area and exterior outlets in an apartment building with no GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before calling about a dead outlet in a Mount Airy kitchen, bath or patio, find the GFCI that feeds it and press reset; one tripped GFCI can take out several outlets. A breaker that trips once and holds after resetting needs nothing from us, and a lamp on a switched outlet isn’t broken. An inspection makes sense when heating circuits trip every winter, lights dim hard when the heat comes on, flicker shows up across several rooms, or you’re buying a building with no recent electrical work. We check it all and put it in writing.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mount Airy?',
        body: 'The inspection, not the build date, tells you which. A loose lug, a weakening breaker or a sink outlet without GFCI is repair work. A Mount Airy panel that can’t carry electric heat on top of a range and dryer, or one that’s failing, is swapped for a bigger one. Rewiring rarely comes up in 1960s buildings, though in the older pre-war homes we quote it next to spot fixes when cloth wiring runs through most rooms. Permit work gets its sign-off from the city’s Department of Buildings & Inspections; our visit is the safety check that comes first. Who does the repairs is up to you.',
      },
    ],
    whyTitle: 'Why Mount Airy Residents and Landlords Call Us',
    whyParagraph:
      'Mount Airy is mostly renters in apartment buildings, with owners in the single houses between them. Our technicians are licensed and insured, background-checked and drug-tested, and we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Mount Airy?',
        a: 'A flat Mount Airy price, settled before testing begins. Size and purpose set it: one apartment’s panel is a short job next to a whole building, and a report for a sale goes wider than checking room for one new appliance. Overtime charges never apply.',
      },
      {
        q: 'What’s covered in a Mount Airy electrical inspection?',
        a: 'We check the panel and each breaker, grounding and bonding, outlets for ground and correct wiring, GFCI and AFCI protection, visible wiring in basements and utility rooms, and power to the smoke alarms. For electric heat we also check how close each heating circuit runs to its limit.',
      },
      {
        q: 'Do I need to hire you for the repairs?',
        a: 'No. The written report is yours for any licensed electrician to work from. If we take the Mount Airy repairs, each gets a separate quote and waits for your sign-off, so the urgent ones can go first.',
      },
    ],
  },
};
