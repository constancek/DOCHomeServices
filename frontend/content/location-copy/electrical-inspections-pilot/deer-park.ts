import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const deerPark: LocationServiceCopy = {
  localParagraph:
    'Deer Park is older than most suburbs around it. Census figures put the median house at 1947, and close to eight in ten were built before 1960. That means small panels, a circuit or two per room, and in the oldest homes, two-prong outlets and sometimes cloth-covered wiring. Those houses now run central air, home offices and bigger kitchens than they were wired for. Our inspection shows where the system is stretched and what it would take to fix, written down and priced.',
  emergencyParagraph:
    'Phone us at once for an outlet that’s warm, discolored or humming, sparks from a plug, the smell of something burning, a breaker that refuses to stay on, or lights that sag hard when the AC kicks in. Shut that circuit down. With smoke or flames, everybody out and call 911. Same-day help reaches most Deer Park homes, weekends included.',
  commonIntro:
    'Most Deer Park inspections are single-family houses from the 1940s and 1950s, with older ones in between. What we see most:',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work in Deer Park?',
      a: 'Deer Park sends electrical permits and their inspections to Inspection Bureau, Inc. (IBI); building and zoning permits go through the city office. That sign-off covers one permitted job. Our inspection is broader, the whole house checked on your behalf. When a fix needs a permit, we file it and schedule IBI.',
    },
    {
      q: 'I rent a house in Deer Park. Who should book an inspection?',
      a: 'The owner. Ohio’s landlord law, ORC 5321.04 (A)(4), says electrical fixtures a landlord provides must stay in good and safe working order. Email or write to your landlord describing the problem and the date it started. We inspect wiring, not leases, and arrange the visit with the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Deer Park’s older houses',
    band1Heading: 'Common Electrical Problems We Find in Deer Park Homes',
    commonSituations: [
      'A 1940s house where the bedrooms share one circuit and the breaker trips with two space heaters on',
      'Three-slot receptacles fitted to old two-wire circuits with no ground connected',
      'A basement fuse box still in service alongside a newer subpanel',
      'A central air unit wired into a panel that had no spare capacity to begin with',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A kitchen or bath outlet that died is often a GFCI somewhere else that tripped, and in a house updated a room at a time the reset button can hide in the basement or garage. Find it and press it. One breaker that tripped and now holds needs nothing. Try another bulb, and flip nearby wall switches. It’s time to book when most rooms have two-prong outlets, the basement still has fuses, cords run under rugs as wiring, several circuits flicker, or you’re buying or selling a house nobody has rewired in years.',
      },
      {
        title: 'Inspection, Repair or Rewire in Deer Park?',
        body: 'What we find settles it. Many 1940s Deer Park houses have been partly rewired already, so the build date alone tells you little. A loose lug, a tired breaker, a bathroom with no GFCI: those are repairs. A panel too small for what the house now runs, or one that’s failing, gets replaced, with IBI signing off. If cloth-insulated or knob-and-tube circuits still carry much of the load, we quote a rewire and a spot-repair option side by side. Take the report to anyone you like.',
      },
    ],
    whyTitle: 'Why Deer Park Homeowners Call Us',
    whyParagraph:
      'Deer Park is mostly single-family homes, many from before 1950, and those houses reward a slow, careful look. Expect a licensed, insured electrician who has cleared background checks and drug tests, and a price you approve first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Deer Park?',
        a: 'A flat figure you’ll hear before we start. Size of the house and purpose set it: confirming one panel can carry a heat pump is quick, while a full write-up on a 1940s home headed for listing takes longer. Weekend appointments carry no overtime.',
      },
      {
        q: 'What does the inspection look at?',
        a: 'Fuse box or breaker panel first, including the main and the grounding and bonding. Then outlets around the house, tested for ground and for GFCI or AFCI protection, plus any wiring left exposed in the basement and whether each smoke alarm is getting power. If a buyer, lender or insurer asks for a written report, you’ll have one.',
      },
      {
        q: 'Can I use another electrician for the repairs?',
        a: 'Absolutely. Nothing in our report ties you to us, so bring it to whichever licensed electrician you trust. Should you pick us, the quoted repair prices hold, financing is available, and we make it right or you don’t pay.',
      },
    ],
  },
};
