import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northFairmount: LocationServiceCopy = {
  localParagraph:
    'North Fairmount is a hillside neighborhood of pre-war houses, and Census figures put the median build at 1938. Nearly all are detached, and about half are rented. Houses that age were wired for a light and an outlet or two per room, so many still have ungrounded outlets, worn switches and extension cords doing the work of missing outlets. Landlords call us as often as owners do. Every visit starts with testing the receptacle, its circuit and the panel, and the price is agreed before work.',
  emergencyParagraph:
    'A browned switch plate, a hot-plastic smell at an outlet, a jolt from a lamp, or a breaker that flips back once it’s pushed on are same-day problems in North Fairmount. If the breaker box is dry, flip that circuit off. If something smolders, get everyone outside and dial 911. We’re out that day on most calls, weekends included.',
  commonIntro:
    'In the pre-war houses of North Fairmount, owners and tenants most often call about these.',
  localFaqs: [
    {
      q: 'I rent in North Fairmount and an outlet stopped working. What should I do?',
      a: 'Push the reset on any GFCI first, and check the breaker panel if the house lets you reach it. An outlet that’s still dead, or warm, or sparking goes to your landlord, ideally in writing. Ohio’s ORC 5321.04 (A)(4) puts keeping the electrical fixtures they supply safe and working on landlords. We fix outlets, not leases.',
    },
    {
      q: 'Can you ground the old two-prong outlets in my house in North Fairmount?',
      a: 'Often, yes. We test each circuit first. Where a ground can be run, we fit grounded outlets. Where it can’t, a GFCI outlet marked for an ungrounded circuit is an option code allows, and some houses are better served by rewiring those rooms. We price each choice so you can pick.',
    },
  ],
  overrides: {
    ctaLine: 'Fixing switches and outlets in pre-war houses and rentals around North Fairmount',
    band1Heading: 'Common Outlet and Switch Problems We Fix in North Fairmount',
    commonSituations: [
      'Two-slot receptacles in a 1930s house that refuse a grounded plug',
      'A worn outlet that lets plugs slip out or sparks when one goes in',
      'A switch that buzzes, feels warm or flickers the lights',
      'A rental kitchen or bathroom with no GFCI protection',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in North Fairmount',
        body: 'In North Fairmount, kitchens and bathrooms in pre-1940 houses got their outlets long before GFCIs existed, and many still lack one. A GFCI compares outgoing current with returning current, and if some is missing, it is leaking through something, possibly a person, so the receptacle trips quickly. It isn’t sensing water. Water just makes those leaks likely. Code calls for GFCIs in every kitchen and bathroom, in basements and garages, and on outside walls. USB receptacles are a small convenience in a bedroom or front room where phones charge.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in North Fairmount',
        body: 'Tenants can try these too. By a sink or in the cellar, a GFCI with a little button may have popped, and it can kill power to outlets two rooms away, so push that button in. Peek in the breaker box for a handle that isn’t lined up with its neighbors. Wall switches deserve a flick as well, since one can feed half an outlet in North Fairmount. Swapping in USB ports or a smart switch adds comfort and fixes nothing. Heat at a cover plate, crackling, black marks, sparks or a breaker that won’t stay on after one reset are where an electrician takes over.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in North Fairmount',
        body: 'In North Fairmount, the panel and the old runs get metered before any extra outlet goes into a pre-1940 house. If the box is crowded or the wiring is too brittle to extend, that becomes a separate line on the quote, Home Rewiring for the runs and Electrical Panel Replacement for the box, and the owner picks. The job follows code, and Inspection Bureau, Inc. (IBI) reviews and inspects the electrical permit where one is needed.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in North Fairmount Choose Us for Switches and Outlets',
    whyParagraph:
      'Whoever owns the house in North Fairmount, the electrician we send is licensed, tests before naming a price, and says if a reset covers it. Devices go in grounded and to code, with the price agreed first.',
    sharedFaqs: [
      {
        q: 'How much will outlet repairs cost in North Fairmount?',
        a: 'You approve a flat figure, worked out after testing, before any tools come out. It climbs with the number of receptacles and switches, with GFCI or USB models, and with any old wiring or panel work the test finds. Landlords with several houses can finance the work.',
      },
      {
        q: 'What does a GFCI outlet protect against?',
        a: 'Mainly, it protects against electric shock. The device keeps the outgoing and returning current in balance, and when some of it goes astray, which is what happens when it passes through a person, it shuts that outlet down quickly. It isn’t sensing water. A wet counter or a damp cellar floor simply gives current an easier way out.',
      },
      {
        q: 'Should I fix a loose outlet myself in an old house?',
        a: 'In a house from before 1940, a loose outlet can mean a worn device, a loose wire or a box with no ground. Tightening it without checking hides the problem. A licensed electrician tests the circuit and grounding and installs a device that meets code, so the fix lasts.',
      },
    ],
  },
};
