import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const campWashington: LocationServiceCopy = {
  localParagraph:
    'Almost nothing in Camp Washington is new. Census figures show close to nine in ten homes were built in 1939 or earlier, and none since 1980. Houses from that era started out on cloth-covered or knob-and-tube wiring, fuse boxes and ungrounded outlets, and most have been patched and updated in pieces over the decades. Around four in five homes are rented, so landlords make a lot of our bookings. We find out what’s really behind the plaster and price any fixes before work begins.',
  emergencyParagraph:
    'Some signs can’t sit until an appointment. Heat at a plug or switch, scorch marks, buzzing, sparks, a burning odor, a breaker that kicks straight back off, or lights that dim sharply when the furnace blower starts. Switch that circuit off. Smoke or flame: leave, then 911. We get to most of these the same day, weekends as well.',
  commonIntro:
    'Camp Washington’s pre-war houses and two-families turn up the same faults again and again:',
  localFaqs: [
    {
      q: 'I own a two-family in Camp Washington. Do I have to inspect the wiring?',
      a: 'Nothing forces a routine inspection. What Ohio law does say, in ORC 5321.04 (A)(4), is that a landlord keeps the electrical fixtures they supply in good and safe working order, and an inspection is the simplest way to know you are. Ask tenants to report problems in writing. We inspect wiring, not leases.',
    },
    {
      q: 'I rent one of the converted factory lofts. Can I book you?',
      a: 'Report electrical problems to building management in writing first, since the owner controls the wiring and panels. Management can book us for one unit or the whole building. If anything is hot, sparking or smells burning, report it right away and stop using that outlet or switch.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Camp Washington houses and rentals',
    band1Heading: 'Common Electrical Problems We Find in Camp Washington Homes',
    commonSituations: [
      'A fuse box still in service in a pre-1940 single house',
      'Both units of a two-family fed through one undersized panel',
      'Knob-and-tube wiring spliced into newer cable during a kitchen update',
      'Three-prong outlets put in with no ground wire behind them',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Rule out the simple causes first. Kitchen, bathroom, basement and outdoor outlets often hang off one GFCI, so when they all quit, find that one and reset it. A breaker that trips once and then holds isn’t a fault. A dead outlet might just be on a wall switch. You need us for a fuse box still in use, two-prong outlets in every room, cords snaking under rugs as wiring, flicker on several circuits, or an old house about to be bought, sold or handed to a new tenant.',
      },
      {
        title: 'Inspection, Repair or Rewire in Camp Washington?',
        body: 'We judge by what turns up, though in Camp Washington the age usually shows. Loose terminals, a worn breaker or a bathroom without GFCI protection get fixed individually. A fuse box, or a panel too small for today’s loads, gets replaced. When cloth or knob-and-tube cable still carries much of the house, you see a rewire price and a targeted-repair price side by side and weigh them. Our visit is a safety check with a report you keep. Anything that needs a permit also gets the official inspection; we handle the paperwork and the scheduling.',
      },
    ],
    whyTitle: 'Why Camp Washington Owners and Landlords Call Us',
    whyParagraph:
      'Camp Washington owners are often landlords keeping old houses rentable on a budget. We sort findings into urgent and can-wait, price each one flat, and leave the choice with you. Licensed, insured technicians.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Camp Washington?',
        a: 'It’s one flat price, quoted before we start. House size and the reason you’re booking set it: a single unit checked between tenants takes less time than a full two-family before a sale. You approve the figure first, and it doesn’t change.',
      },
      {
        q: 'What gets checked in a Camp Washington inspection?',
        a: 'First the fuse box or panel, fuse by fuse or breaker by breaker, and the grounding and bonding. Then every outlet and switch we can reach, each GFCI and AFCI device, wiring showing in the basement and attic, and power to the smoke alarms. The written report puts the urgent items at the top.',
      },
      {
        q: 'Do I need to hire you for the repairs?',
        a: 'No. The report is yours, and any licensed electrician can work from it. Because we price each repair on its own line, you can handle the urgent ones this month and plan the rest, and nothing starts until you’ve agreed.',
      },
    ],
  },
};
