import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const glendale: LocationServiceCopy = {
  localParagraph:
    'Most boiler work in Glendale is in the village’s older houses. Census figures put 53.4% of homes as built in 1939 or earlier, many of them Italianate and Second Empire houses from the railroad era that were built around radiators and cast-iron pipe runs. Those systems have often had parts swapped over the decades, so the fault is often in a newer part bolted to an old setup. We trace it, tell you what failed, and quote it before touching anything.',
  emergencyParagraph:
    'A Glendale boiler that quits in January, when normal lows sit around 23F (NOAA, CVG station), leaves a big old house cooling fast. That matters most for babies, older relatives and anyone ill. Radiator piping along outside walls can be at risk if the cold lasts. We reach most no-heat calls the same day, weekends included.',
  commonIntro:
    'Glendale boiler calls mostly come from detached older homes where one boiler heats two or three floors. What we find:',
  localFaqs: [
    {
      q: 'Do I need village approval to work on a boiler in Glendale’s historic district?',
      a: 'Not for the boiler itself, since it sits indoors. Glendale’s local historic district requires a certificate of appropriateness for exterior changes, and a new vent or flue through an outside wall is exterior work. If a replacement means moving the vent, we check with the Planning and Historic Preservation Commission before it goes in.',
    },
    {
      q: 'Does my Glendale home boiler have to pass a state inspection?',
      a: 'No. Ohio law (ORC 4104.04) leaves boilers in private houses, and in buildings of fewer than six units, out of state inspection, provided steam runs at 15 psi or less and hot water at 160 psi or less. No inspector will look at your Glendale boiler, so a yearly service visit is the only regular check it gets.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Glendale’s older village homes',
    band1Heading: 'Common Boiler Problems in Glendale Homes',
    commonSituations: [
      'Third-floor rooms in a Victorian house that stay cold while the parlor radiators run hot',
      'An old cast-iron boiler with a newer burner that shuts down on a flame fault',
      'A radiator valve weeping water onto an old hardwood floor',
      'An expansion tank that has filled with water, so the relief valve drips on each cycle',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Start upstairs in a Glendale house. A radiator hot along its base but cool along the top is holding air; let it out with a radiator key until water shows, then see if the whole panel warms. With hot water heat, read the boiler pressure and top it up if it dropped. Confirm the thermostat is set above room temperature and the service switch is on. If that brings the heat back, keep your money. We are the call for pressure that drains away again, kettling or banging, a yellow flame, or an error-code lockout. If the carbon monoxide alarm sounds, get everyone outside, then call 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Glendale?',
        body: 'A Glendale house from the 1850s rarely still has its first boiler, so read the label on the one you have; it usually shows the install date. A worn circulator pump, a failed igniter, a sticking zone valve or a waterlogged expansion tank are all repairs. We start pricing a new boiler when the cast-iron sections or heat exchanger leak, or when you have needed us every winter for several years. For a boiler worth keeping, book a 60 to 90 minute service in early fall. It checks pressure and the tank, tests safety controls, looks over burner and venting, and bleeds the radiators upstairs.',
      },
    ],
    whyTitle: 'Why Glendale Homeowners Call Us',
    whyParagraph:
      'Most Glendale homes are owner-occupied and old, and we would rather repair a sound boiler than sell a new one. Our technicians are licensed, insured, background-checked and drug-tested, and the price is agreed before work starts.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Glendale?',
        a: 'The fault decides the bill. Letting air out of the system or fitting a new thermocouple takes little time, while a cast-iron section that leaks is a far larger job. We find the problem, name a flat-rate price and start only once you say yes. Financing is available on bigger repairs.',
      },
      {
        q: 'Should I repair or replace my Glendale boiler?',
        a: 'Repair it if the vessel is sound and a part has worn out; pumps, valves and controls are made to be replaced. If the sections or heat exchanger leak, or the repair bills come back each heating season, we quote a new boiler next to the repair so you can weigh them side by side.',
      },
      {
        q: 'Why are some radiators cold in my Glendale house?',
        a: 'In a tall older house the top-floor radiators lose heat first, usually to trapped air. Bleed them, then check the boiler pressure. On steam, a radiator pitched away from its valve can trap water and stay cold. If bleeding changes nothing, a stuck valve or a tired circulator pump is the next thing we check.',
      },
    ],
  },
};
