import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'Practically every home in Dry Run is a detached house its owner lives in, and Census figures put the median build at 1986, with more than nine in ten dating from 1960 on. Panels that young typically still have a breaker space or two for a 240-volt circuit, and when one is full, load management usually closes the gap. We still open it up and run a load calculation, tell you when Level 1 covers your miles, and settle the price before a wire is run.',
  emergencyParagraph:
    'A plug or wall unit warming up, a burning smell, or a breaker that refuses to hold through a charge ends the session. Turn the circuit off only if nothing around the panel is wet. With smoke or flames, leave and dial 911. Expect us the same day on most calls, weekends included.',
  commonIntro:
    'In the newer houses of Dry Run, these are the reasons owners give us for adding a charger:',
  localFaqs: [
    {
      q: 'We have two EVs. Can we charge both at a house in Dry Run?',
      a: 'Usually. A newer panel often has room for two circuits, or for one charger that shares its power between two cars. The load calculation tells us which works. If capacity is short, load management can keep both cars charging overnight without a service upgrade, and we price each option.',
    },
    {
      q: 'Does Anderson Township need to approve an EV charger in Dry Run?',
      a: 'In Dry Run, electrical permits and inspections go through Inspection Bureau, Inc. (IBI), and we pull that permit. Anderson Township issues zoning certificates for many improvements; whether a wall-mounted charger needs one isn’t something we assume, so we check before work starts.',
    },
  ],
  overrides: {
    ctaLine: 'EV charger installs for newer houses in Dry Run',
    band1Heading: 'When a Home in Dry Run Needs an EV Charger',
    commonSituations: [
      'Two EVs in one household and only one charger to share',
      'A 1990s panel with open spaces and a new EV arriving soon',
      'A commuter who wants to stop planning trips around public stations',
      'An owner who would like to charge off-peak overnight and control when the car charges',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Dry Run',
        body: 'Owners in Dry Run with a Level 2 charger stop planning errands around a public station. It refills the battery much faster than the 120-volt cord, so every overnight session adds real range and the car is ready when you head out. You set the hours, and some utilities bill late-night power at a discount, which often makes home charging cheaper than a public plug. Correctly sized breakers, conductors and grounding keep the line from straining. As more buyers drive EVs, a charger already on the wall is something they notice when a house in Dry Run is listed.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Dry Run',
        body: 'Some households here can wait on a charger, and we’ll say so. Level 1 is only the car’s cord in a household 120-volt outlet, adding a few miles of range an hour, which is enough for a light driver who parks near a sound outlet. Before trusting it nightly, make sure that outlet isn’t also feeding a chest freezer or workshop tools, and never hang it on an extension cord or a warm, loose receptacle. Long commutes, or two EVs under one roof, usually justify Level 2 on its own 240-volt circuit, installed by a licensed electrician.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Dry Run',
        body: 'In a house this new, room is likely, but the load calculation proves it before any equipment gets ordered. Spare capacity sends the charger onto a circuit of its own. Tight capacity gets you two prices, load management and a panel or service upgrade, and you choose. Then we file the permit and meet the inspector when the work is done.',
      },
    ],
    whyTitle: 'Why Homeowners in Dry Run Choose Us for EV Charger Installation',
    whyParagraph:
      'In Dry Run, our licensed electricians start at the panel with a load calculation, tell owners plainly whether they need an upgrade, load management or nothing, and install to code at the price set beforehand.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for an EV charger in Dry Run?',
        a: 'A single flat rate, given after we inspect the panel. Charger choice, the length of the run out to where you park, and any panel work set it, though houses this young need panel work less often. Financing is available.',
      },
      {
        q: 'How long is the install for a home EV charger in Dry Run?',
        a: 'Several hours on most jobs. A panel upgrade or a load-management device stretches it. You’ll get the timeline before we arrive, plus a warning about when the power drops, so nobody’s mid-laundry when it does.',
      },
      {
        q: 'Why not install a Level 2 charger yourself in Dry Run?',
        a: 'Because getting the circuit, breaker and wire size right, doing a load calculation and passing a permit inspection is licensed electrician work. A charger pulls power for a long stretch, and an error there ends up as heat inside a wall.',
      },
    ],
  },
};
