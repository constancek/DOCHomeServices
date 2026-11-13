import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'Close to nine in ten homes in the West End are rented, Census figures show, so panel work here is usually an owner’s or manager’s call. The housing runs from Italianate rowhouses built before 1940, where a fuse box or small original panel can still turn up, to 1960s and 1970s apartment buildings whose unit panels may be too small for today’s appliances. We check the panel, its breakers, the wiring to them and the meter base, say when a repair is enough, and price it before anything comes out.',
  emergencyParagraph:
    'If a tenant reports a burning smell, sparks, a scorched or hot cover, or a breaker that won’t stay on, treat it as urgent. Leave a leak-soaked panel alone. A breaker can be switched off if nothing you’d touch is hot or wet. With smoke, everyone gets out and calls 911. Expect a same-day visit on most calls, weekends included.',
  commonIntro:
    'In the rowhouses and apartment buildings of the West End, these are the panel problems owners hear about most:',
  localFaqs: [
    {
      q: 'Does a rowhouse in the Betts-Longworth district of the West End need approval for a new panel?',
      a: 'The panel itself sits indoors, so it usually doesn’t. Betts-Longworth is a local historic district, and exterior changes there need a Certificate of Appropriateness from the Historic Conservation Board. If the meter base outside has to move or change, we check with the city before any work.',
    },
    {
      q: 'What does a landlord owe a tenant who reports a hot panel in the West End?',
      a: 'Start with a fast response. ORC 5321.04 (A)(4) obliges Ohio landlords to keep the electrical fixtures they provide in good and safe working order, and a hot panel is a same-day matter. Tenants should report in writing. We replace panels, not leases, and we’ll arrange access with whoever lives there.',
    },
  ],
  overrides: {
    ctaLine: 'New electrical panels for rowhouses and apartments in the West End',
    band1Heading: 'Signs an Apartment or Home in the West End Needs a New Electrical Panel',
    commonSituations: [
      'A basement fuse box in an Italianate rowhouse that blows fuses when a space heater runs',
      'Breakers in a 1970s apartment that trip when the electric range and air conditioner overlap',
      'Lights that flicker in a unit whenever the electric heat cycles on',
      'A burning smell or scorch marks at one breaker in a shared building panel',
    ],
    proseSections: [
      {
        title: 'Benefits of a New Electrical Panel for Homes in the West End',
        body: 'In the West End, a new panel lets a rowhouse or an apartment run an electric range, air conditioning, laundry and electric heat without the breakers tripping every time two of them overlap. In the pre-1940 houses, it means breakers instead of fuses and circuits for rooms that never had enough outlets on them. Labeled circuits spare a maintenance call when a tenant needs to reset one. Owners also hear fewer repeat complaints from the same unit. When a building sells, the buyer’s inspector looks at every panel, and current ones don’t end up on the repair list.',
      },
      {
        title: 'Electrical Panel Repair or Replacement in the West End',
        body: 'Inside the cover is where the answer lives, whatever year the building went up. A breaker gone bad, a terminal that worked loose and scorched its wire, or one faulty circuit gets fixed, and the panel stays. Fuse boxes, panels with no space for the circuits a unit needs, heat-damaged ones and panels with no parts available get replaced. The owner sees both prices and decides. A tenant can first switch the tripped breaker fully off and on again, and hunt for a popped GFCI in the kitchen or bath, since one of those can kill power in other rooms.',
      },
      {
        title: 'Sizing and Permits for a New Electrical Panel in the West End',
        body: 'We size each panel for the unit’s load today and what the owner plans, like a heat pump or an in-unit washer and dryer, rather than copying what was there. Older buildings sometimes need a new meter base or service to get more capacity, which changes the scope. Duke Energy Ohio cuts and restores power for the swap. Inspection Bureau, Inc. reviews the electrical permit for the city and inspects the work; we pull the permit.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in the West End Choose Us for Electrical Panel Replacement',
    whyParagraph:
      'Italianate rowhouses and 1970s apartment buildings both show up in our panel work across the West End. Owners get a flat price first, and every electrician we send is licensed and background-checked.',
    sharedFaqs: [
      {
        q: 'How much does a new electrical panel cost in the West End?',
        a: 'Each panel gets a flat rate after we’ve looked at it. What sets the number is the panel, the capacity the unit or building should have, a meter base change if one is needed, and the permit. Several units in one building each get their own line. The owner approves before we start.',
      },
      {
        q: 'Which signs mean a panel in the West End should be replaced?',
        a: 'Fuses that blow in an old rowhouse, breakers that trip whenever the range and heat run together, lights that dim, and a hot, buzzing or scorched cover are the main ones. A panel with no space left for a circuit the unit needs also qualifies. One weak breaker is just a repair.',
      },
      {
        q: 'Can a handyman replace an electrical panel in the West End?',
        a: 'Not safely. The lines from the meter stay hot until the utility shuts off service, and turning off the main doesn’t change that. A panel swap needs a permit, a final inspection and a licensed electrician doing the work, not a general handyman.',
      },
    ],
  },
};
