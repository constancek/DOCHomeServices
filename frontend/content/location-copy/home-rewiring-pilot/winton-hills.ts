import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'CMHA owns most of the housing here, at Winton Terrace and Findlater Gardens, and those tenants use CMHA work orders instead of us. Census counts show nearly every household in Winton Hills rents. We rewire for private owners of doubles, townhouses and small buildings. The median home dates from 1955, so many units have ungrounded two-prong outlets and too few circuits for electric heat plus a modern kitchen. We test first, tell the owner if the wiring holds up, and write scope and flat price before any wall opens.',
  emergencyParagraph:
    'Some problems need an electrician that day, like a smell of scorching from a wall or outlet, a switch plate too hot to touch, sparks, a breaker that drops right after reset, or any shock. Cut that circuit only if it’s dry to reach. If there’s smoke or fire, everyone leaves and calls 911. Weekend bookings are fine.',
  commonIntro:
    'In the private doubles and townhouses of Winton Hills, tenants and owners usually report wiring trouble like this:',
  localFaqs: [
    {
      q: 'I live at Winton Terrace or Findlater Gardens. Can I book you for wiring problems?',
      a: 'No. Those homes belong to CMHA, and its own system handles repairs. File a work order with CMHA and hang on to the number. If an outlet smells hot or sparks, stop using it, and if there’s smoke, leave the unit and call 911.',
    },
    {
      q: 'What does a private landlord have to fix in the wiring of a rental in Winton Hills?',
      a: 'Ohio’s ORC 5321.04 (A)(4) obliges landlords to keep any electrical fixtures that come with the unit safe and working. If you rent from a private owner, put the problem in a dated note and hold on to a copy. The owner hires us and approves the price. We stick to wiring, not lease disputes.',
    },
  ],
  overrides: {
    ctaLine: 'Rewiring for private rental owners in Winton Hills',
    band1Heading: 'Signs an Apartment or Home in Winton Hills Needs Rewiring',
    commonSituations: [
      'A tenant in a 1950s double calling about lights that flicker each time the electric heat comes on',
      'A townhouse with two-prong outlets and a power strip plugged into every one of them',
      'A rental kitchen where the microwave and a space heater keep knocking out the same breaker',
      'A switch plate that runs warm in a unit nobody has rewired in decades',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Winton Hills',
        body: 'For a rental owner here, the main payoff is fewer calls that begin with flickering lights or a dead kitchen. Circuits sized for electric heat and a modern kitchen stop overloading. Brittle insulation comes out, cutting the fire risk, since faulty wiring sits among the leading causes of house fires. Grounded receptacles mean tenants stop leaning on adapters. The unit meets current code, the system runs steadier, and there’s capacity for a heat pump, bigger appliances and better lighting. Inspected wiring on record also helps when a double is sold or refinanced.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Winton Hills',
        body: 'Testing tells the owner how much to do, and the building’s age doesn’t. Partial work could be one side of a double, a couple of runs that failed, a kitchen moved onto new dedicated runs, or grounded receptacles replacing the two-prong kind. If first-generation wiring runs through the whole building, or aluminum or knob-and-tube surfaces everywhere, a whole-building price goes beside the partial, with new breakers, the load evened out and a panel upgrade where it’s short. The owner decides. Tenants can press reset on a tripped GFCI first, and a breaker that resets and holds may have been a one-off overload.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Winton Hills',
        body: 'Tenants nearly always stay in their units. We wire one area, then the next, tell the owner and tenants ahead of every shutoff, and work around jobs and school if the owner asks. Every wall or ceiling we open is named in the written scope. Electrical permits in Cincinnati are reviewed and inspected by Inspection Bureau, Inc. (IBI), and we apply and meet their inspector for the final.',
      },
    ],
    whyTitle: 'Why Landlords in Winton Hills Choose Us for Home Rewiring',
    whyParagraph:
      'Outages get planned with tenants at home, not sprung on them. Grounding and load balance are second nature to our licensed electricians, the work meets current code, and the owner signs a written scope and price before we start.',
    sharedFaqs: [
      {
        q: 'How do you price rewiring for a rental in Winton Hills?',
        a: 'After testing, the owner sees one flat rate. How big the unit or building is, the circuit count, how tough the walls are to get behind, and the state of the panel drive it. Each side of a double is priced on its own, so one unit can be done now and the other at turnover.',
      },
      {
        q: 'Can tenants stay in a rental in Winton Hills while it’s rewired?',
        a: 'In most cases, yes. We take a room or two at a time, warn tenants before each outage, and keep the rest of the unit powered where we can. Kitchens and bedrooms come back first so the household isn’t without them for long.',
      },
      {
        q: 'Why does a rental in Winton Hills need a licensed electrician to rewire it?',
        a: 'Rewiring means handling energized conductors under an exacting code, and an error invites shocks, fires, a failed inspection and a headache with the owner’s insurer. A licensed electrician grounds every circuit and spreads the load across the panel, and the job needs a permit and an IBI inspection before it’s closed out.',
      },
    ],
  },
};
