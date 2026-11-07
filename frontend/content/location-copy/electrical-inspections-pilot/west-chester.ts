import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westChester: LocationServiceCopy = {
  localParagraph:
    'West Chester inspections mostly involve houses from the 1970s to the 1990s, the decades when the township filled with subdivisions. Census figures put the median house at 1988, and 42.3% of homes heat with electricity, so plenty of panels already carry electric heat and central air. Add an EV charger or a basement remodel and the real question is whether that panel has room. We test the system, write up what we find, and give you a flat price for any fix before anyone starts.',
  emergencyParagraph:
    'Put these on today’s list, not the calendar: heat coming off a switch plate, a brown mark around an outlet, buzzing inside a wall, sparks, the smell of something scorching, or a breaker that snaps off again the second it’s reset. Shut that breaker. If smoke or flames show, everybody out, then 911. Same day on most calls, weekends too.',
  commonIntro:
    'Most of what we find in West Chester comes from panels sized for the 1970s and 1980s and the loads people have added since:',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work in West Chester?',
      a: 'West Chester is a township, so a Butler County Building & Zoning inspector signs off permitted electrical work, not the township. That is a separate step from our visit, which is a whole-house safety review with a written report. When a repair needs a permit, we file for it and book the county inspector.',
    },
    {
      q: 'I rent an apartment in West Chester and an outlet sparks. What should I do?',
      a: 'Unplug whatever is in it, leave it alone, and put the problem to your landlord or the leasing office in writing. That duty sits with them: ORC 5321.04 (A)(4) says Ohio landlords must keep the electrical fixtures they provide in good and safe working order. We inspect wiring, not leases, and the complex arranges our visit.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for West Chester homes and condos',
    band1Heading: 'Common Electrical Problems We Find in West Chester Homes',
    commonSituations: [
      'A 1970s panel already carrying electric heat and central air, with an EV charger planned',
      'A basement finished in the 1990s on circuits borrowed from the floor above',
      'Older garage and exterior outlets that never got GFCI protection',
      'A condo with a small subpanel and no room for another appliance circuit',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some calls end before we arrive. When a bath, kitchen, garage or patio outlet goes dead, hunt down the GFCI that feeds it, which may be in another room, and push its reset. A breaker that resets and stays on needs nothing more. Check whether the dead outlet is switched, and try a fresh bulb. A newer West Chester house that passed the buyer’s home inspection cleanly doesn’t need us either. We’re worth booking for two-prong outlets, a fuse box, cords stapled up as house wiring, flicker in several rooms, or a big new load headed for an older panel.',
      },
      {
        title: 'Inspection, Repair or Rewire in West Chester?',
        body: 'The report decides it, not the year on the deed. A 1975 West Chester house with an updated panel may need only small repairs, such as a tightened connection, a replacement breaker or added GFCI outlets. A panel that’s undersized, corroded or full is a panel replacement, and that is the common finding before a heat pump or charger goes in. Rewiring is rare here; we price it only where old wiring runs through the house. Duke Energy owns the meter and the line to the house, and our work starts at the meter base. You decide what gets done.',
      },
    ],
    whyTitle: 'Why West Chester Homeowners Call Us',
    whyParagraph:
      'West Chester owners tend to stay put and add on, so we inspect with the next project in mind. Licensed, insured technicians who pass background checks and drug tests, and a flat quote before any work.',
    sharedFaqs: [
      {
        q: 'What will an electrical inspection cost in West Chester?',
        a: 'It’s a flat rate, given before we begin. Size and purpose drive it: a two-bedroom condo checked before listing is a short visit, while a large 1980s house getting an addition needs a full load review. Once you approve the number, it holds.',
      },
      {
        q: 'What’s included in a West Chester inspection?',
        a: 'We start at the panel, checking each breaker or fuse and whether the house is properly grounded. Then we work through the rooms: outlets, switches, and every GFCI and AFCI device tested. Exposed garage, basement and attic wiring gets a look, and so does power to the smoke alarms. You get a written report.',
      },
      {
        q: 'Am I obliged to hire you for the repairs?',
        a: 'No. You own the report and can take it to any licensed electrician, or do nothing for now. We list a flat price beside each repair so you can compare, and we only start work you’ve approved in advance.',
      },
    ],
  },
};
