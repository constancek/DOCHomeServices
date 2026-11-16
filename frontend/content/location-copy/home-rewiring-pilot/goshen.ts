import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const goshen: LocationServiceCopy = {
  localParagraph:
    'Close to the Route 28 crossroads in Goshen, roughly one house in three predates 1940 by Census figures. Places that old can still hold knob-and-tube or cloth-jacketed cable with no grounding conductor anywhere. Farther out in the township the houses are mostly far younger, and they tend to need a circuit for an addition or a fix for one line that keeps quitting. We put a tester on everything before making a case for work, tell you if the wiring passes, and fix the plan and price in writing first.',
  emergencyParagraph:
    'A melting-plastic smell from a wall, a hot or tan cover plate, crackling at a plug, a jolt off a lamp, or a breaker that clicks back out as you reset it can’t wait. Most such calls get a truck that day, weekends too. Throw the breaker only with dry feet. With smoke, get out and call 911.',
  commonIntro:
    'Old houses near the center and newer ones across the township both show up in Goshen, and wiring trouble in either tends to look like this:',
  localFaqs: [
    {
      q: 'Can ungrounded wiring shock someone in an older house in Goshen?',
      a: 'It can. Knob-and-tube and early cloth cable carry no ground wire, so if a toaster or lamp develops a fault, the current looks for another way out, sometimes through a hand. Brittle insulation makes that likelier. Our readings show which rooms lack a ground, and fixing only those is common.',
    },
    {
      q: 'Do I need new wiring for an addition on my house in Goshen?',
      a: 'New circuits, yes; a whole new system, almost never. We run lines for the addition, confirm the panel can carry them, and test the original house while we’re on site. Sound old wiring stays where it is, and your paperwork says we checked it.',
    },
  ],
  overrides: {
    ctaLine: 'Rewiring for older houses and newer homes around Goshen',
    band1Heading: 'Signs a Home in Goshen Needs Rewiring',
    commonSituations: [
      'Ungrounded plugs in every room of a pre-1940 house near the crossroads',
      'A fuse box in the basement still running half the lights',
      'Bulbs that flutter whenever electric baseboard heaters cycle on',
      'A faint scorched odor at a receptacle in a room added on long after the house was built',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Goshen',
        body: 'For a 1930s house, the big win is a real ground. Without one, a fault has no safe path, and cloth or rubber insulation turns brittle over the decades, which is how faulty wiring climbs high among the causes of house fires. Lots of homes in the township heat with electricity, so new, properly sized circuits also keep cables from cooking under that winter load. Afterward the place meets current code, holds steady when a heat pump or bigger appliance runs, and is ready for brighter lighting and smart switches. A buyer looking at an old house notices updated wiring too.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Goshen',
        body: 'We let measurements choose the scope instead of guessing from the house’s age. Two or three tired runs, one bedroom, a kitchen missing appliance lines, or ungrounded plugs swapped for grounded ones make for a smaller project. If knob-and-tube or cloth cable turns up on every floor, a full-house quote sits beside the smaller one, covering new breakers, an even split of load and a larger panel if the current box is full. A fuse box over healthy wiring may only need a panel swap. Reset any GFCI in the garage, bath or porch first, and see whether a reset breaker stays on.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Goshen',
        body: 'Families nearly always stay in the house. Rooms get done in an order you pick, outages are announced ahead, and the signed plan shows each wall or ceiling that gets opened. Permit filing and the inspection appointment are on us, and the work isn’t signed off until the inspector passes it. The furnace and kitchen never go dark at the same time.',
      },
    ],
    whyTitle: 'Why Homeowners in Goshen Choose Us for Home Rewiring',
    whyParagraph:
      'Licensed electricians who understand grounding and load sharing handle every job, which counts most in old ungrounded houses. The finished wiring meets current code, and you approve plan and price before we begin.',
    sharedFaqs: [
      {
        q: 'How is the price set for rewiring a house in Goshen?',
        a: 'After testing, we hand you one flat number. Square footage, the count of circuits, how much plaster or drywall stands in the way, and whether the panel has to change move it. An old plaster house simply takes more labor than an open, newer one.',
      },
      {
        q: 'Can my family keep living at home during a rewire in Goshen?',
        a: 'Almost always. One section loses power at a time while the rest of the house runs normally, and we let you know before each shutoff. If heat or the kitchen has to be off for a stretch, you’ll hear about it the day before.',
      },
      {
        q: 'Is rewiring a house something I can do myself in Goshen?',
        a: 'We’d steer you away from it. Energized conductors and a strict code are involved, and a slip can bring a shock, a fire, a failed inspection or an insurance claim that gets denied. Licensed electricians are trained in grounding and spreading load, and the permit comes with the job.',
      },
    ],
  },
};
