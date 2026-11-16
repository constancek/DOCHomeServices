import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const oakley: LocationServiceCopy = {
  localParagraph:
    'In Oakley an electrical inspection depends on which side of the neighborhood you’re in. Census figures show 47.7% of homes were built in 1939 or earlier, mostly bungalows and two-families where we check for cloth-covered wire, ungrounded outlets and small panels. Another 12.5% date from 2000 or later, many of them apartments whose wiring is usually fine; people there book us before adding a charger or after a problem. Either way we go through the system, write down what we find and quote repairs before work starts.',
  emergencyParagraph:
    'A burning smell, a charred or buzzing switch, sparks, or a breaker that flips off again once it’s reset shouldn’t wait for an Oakley inspection slot. Cut power to that circuit at the panel. With smoke or fire, everyone gets out and someone calls 911. Most calls are covered the same day, weekends included.',
  commonIntro:
    'Oakley’s older streets are full of bungalows and two-families from before 1940. What our inspections turn up most:',
  localFaqs: [
    {
      q: 'My Oakley basement flooded in July. Is the wiring safe to use?',
      a: 'Not until it’s checked, if water reached the panel, outlets or a furnace circuit. Keep those circuits off, and the main too if the panel got wet. The July 2026 flash flood, when Duck Creek overflowed, put water in plenty of Oakley basements; get the panel and those circuits tested before they go back on.',
    },
    {
      q: 'Who issues electrical permits in Oakley?',
      a: 'The City of Cincinnati Department of Buildings & Inspections, because Oakley is inside city limits. Its inspector signs off permitted work like a new panel or added circuits. Our inspection is a different thing: a full safety check with a written report. If repairs need a permit, we pull it.',
    },
    {
      q: 'I rent half of an Oakley two-family and a breaker keeps tripping. What can I do?',
      a: 'Write down when it trips and what was on, and send that to your landlord. Under ORC 5321.04 (A)(4), an Ohio landlord must maintain supplied electrical fixtures, keeping them in good and safe working order. We inspect wiring, not leases; the owner of the two-family is the one who books us.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Oakley bungalows, two-families and apartments',
    band1Heading: 'Common Electrical Problems We Find in Oakley Homes',
    commonSituations: [
      'A pre-1940 bungalow with cloth-covered wire and two-prong outlets in every bedroom',
      'One basement panel serving both halves of a two-family, with no spare spaces left',
      'Basement circuits, outlets or a panel that sat in floodwater',
      'A buyer planning a kitchen remodel and EV charger who wants to know what the panel can take',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A lot of Oakley outages are a button press away. Kitchen, bath, garage and yard outlets are often protected by one GFCI upstream, so find the tripped one and reset it. A breaker that went off once and has held since was a momentary overload, and a lamp outlet might be wired to a wall switch. If a newer apartment or house in Oakley passed the buyer’s home inspection, you can skip us. Book an inspection when an older house has ungrounded outlets throughout, fuses, extension cords doing a circuit’s job, or flicker on several circuits, and always after water reached the panel.',
      },
      {
        title: 'Inspection, Repair or Rewire in Oakley?',
        body: 'We go by the findings, not the year the house went up. In an Oakley bungalow from 1938 the answer is often a few repairs: a connection tightened, a breaker replaced, GFCI protection added where water is close. A panel that’s full, failing or too small for a charger or a remodel is a panel replacement, which the city inspects. Where cloth or knob-and-tube wire runs through most rooms, we quote a rewire beside the spot repairs. You keep the report and choose who does the work.',
      },
    ],
    whyTitle: 'Why Oakley Homeowners and Landlords Call Us',
    whyParagraph:
      'Oakley mixes century-old bungalows with new apartments, and we tell owners plainly which one needs work. Our electricians are licensed and insured, background-checked and drug-tested, and we agree prices first.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Oakley?',
        a: 'It’s a flat rate, given before we start. A two-family with two units to test costs more than one bungalow, and a pre-purchase inspection covers more than a panel check before a remodel. Financing is available for any repair work.',
      },
      {
        q: 'What does an Oakley electrical inspection include?',
        a: 'The panel and all breakers or fuses, grounding and bonding, every outlet we can reach along with GFCI and AFCI protection, the wiring visible in basement and attic, and the power to the smoke alarms. After a flood we also test basement circuits before they go back into use.',
      },
      {
        q: 'Do I have to hire you for the repairs?',
        a: 'You’re free to use anyone. The report is yours, and a licensed electrician of your choosing can price from it. When we’re hired, repairs are listed one by one with flat prices, and we start only on the items you sign off.',
      },
    ],
  },
};
