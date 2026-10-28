import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const taylorMill: LocationServiceCopy = {
  localParagraph:
    'Most Taylor Mill AC calls come from owners of detached houses, and the first thing we sort out is what kind of system you have. Census figures put 41.5% of homes on gas heat and 40.5% on electricity, so a condenser beside a gas furnace is about as common here as a heat pump that also carries your winter heat. The typical house went up in 1975, so the cooling equipment has usually been replaced at least once. We find the fault and price it before any work starts.',
  emergencyParagraph:
    'Upstairs bedrooms in a shut Taylor Mill house heat fastest, so look in on older relatives and anybody with heart or breathing trouble when the cooling quits. The National Weather Service logs about 21 days each year of 90 or more in the Cincinnati area. Same-day repair is the norm on most central air and heat pump calls, weekends included.',
  commonIntro:
    'Taylor Mill is mostly owner-occupied houses from the postwar years and the 1980s and 1990s, heated by gas or electricity in close to equal measure. What we fix most:',
  localFaqs: [
    {
      q: 'Does my Taylor Mill house have a heat pump or a furnace with AC?',
      a: 'Look at the indoor unit. A gas line and a flue pipe mean a gas furnace with a separate condenser outside. No flue, and an outdoor unit that also runs all winter, usually means a heat pump. Taylor Mill has plenty of both, so we confirm which one you have on the visit before quoting anything.',
    },
    {
      q: 'My Taylor Mill house heats with fuel oil. Can you still repair the AC?',
      a: 'Yes. In an oil-heated Taylor Mill house the cooling side is usually an ordinary condenser outside with a coil tied into the indoor air handler, and that coil and condenser are what we repair. Anything on the oil burner itself is a separate question, and we tell you plainly on the visit.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair for Taylor Mill’s owner-occupied houses, postwar to 1990s',
    band1Heading: 'Common AC Problems in Taylor Mill Homes',
    commonSituations: [
      'A 1950s house whose ducts were sized for a furnace, leaving the back rooms warm',
      'A 1990s heat pump with a sticking reversing valve, blowing warm air in July',
      'An add-on condenser paired with an older oil-fired air handler, running short on refrigerant',
      'A coil above a gas furnace icing over after the filter goes a whole season unchanged',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Three things cost nothing to try in a Taylor Mill house. Swap in a new filter. Lower the cooling setpoint until it sits a few degrees beneath what the room reads now. Then find the AC breaker in the panel and reset it once. Heat pump owners can also confirm nobody switched it to emergency heat. Cold air inside five minutes means no appointment. Our turn comes when the condenser hums yet its blade never spins, or the breaker refuses to hold. We check both units, show you what failed, and work only after you okay the price. Before leaving, we compare supply and return air with you.',
      },
      {
        title: 'Repair or Replace Your Taylor Mill AC?',
        body: 'Find the manufacture date on the condenser’s plate; the house’s age is a poor guide. A 1950s Taylor Mill house has almost surely replaced its air conditioner, while a 1990s one could still run its first. Young equipment with one bad part earns a repair. Aging equipment whose compressor has seized, or whose coil keeps bleeding refrigerant, rarely does, and a heat pump also carries your winter heat, so weigh that before patching. For a replacement, Planning and Development Services of Kenton County (PDS) issues the Kentucky permit, and we pull it. A summer electric bill climbing while your routine hasn’t changed often means a leak.',
      },
    ],
    whyTitle: 'Why Taylor Mill Homeowners Call Us',
    whyParagraph:
      'Taylor Mill owners mostly ask whether an old unit deserves another repair, and the answer you get is a plain one. Nobody works for us without clearing a background check and drug screen, and the technicians hold licenses and insurance.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in Taylor Mill?',
        a: 'Price follows diagnosis, since we can’t quote a repair we haven’t found. Replacing a pitted contactor is quick, and a compressor on a worn condenser is a far bigger job. One fixed figure goes in front of you, and the work waits for your yes. In Taylor Mill, evening and weekend visits carry no extra charge.',
      },
      {
        q: 'Should I repair or replace the AC in my Taylor Mill house?',
        a: 'Go by the equipment’s age and condition. One failed part on a healthy system is a repair. A worn compressor, a coil that keeps leaking, or a heat pump needing work every season points to replacement. A Taylor Mill house built in the 1980s or 1990s may still run its first condenser, so read the date on its label.',
      },
      {
        q: 'Why is my Taylor Mill AC blowing warm air?',
        a: 'Start inside: the thermostat should read cool, the filter should be clean, and the breaker should be on. Then step outside. A motionless condenser fan suggests a dead motor or capacitor. A fan turning while the vents blow warm usually means refrigerant is short. In Taylor Mill houses on electric heat, a heat pump left heating can also cause it.',
      },
    ],
  },
};
