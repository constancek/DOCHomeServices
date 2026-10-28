import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'A Northside no-heat call usually takes us down into a stone or brick basement to a gas furnace. Census figures show about 69% of Northside homes burn gas, and more than half the houses predate 1940, so the ducts were bolted on decades after the walls went up. Most other homes use electric furnaces, which fail differently and get tested differently. Duke Energy Ohio delivers the gas. Once we have pinned the fault, you get a price to approve before a single part comes out.',
  emergencyParagraph:
    'NOAA normals for the CVG station put January lows in Northside near 23F, and an unheated pre-1940 house gives up its warmth fast. Call early when a baby, an older relative or someone ill is home. Opening sink cabinets on outside walls helps the pipes. Most Northside calls get a technician that same day, weekends included.',
  commonIntro:
    'Northside heating trouble comes mostly from gas furnaces in pre-1940 basements and electric units in its apartment buildings. The calls we take most:',
  localFaqs: [
    {
      q: 'My Northside apartment is cold and the landlord controls the heat. What can I do?',
      a: 'Write to your landlord first so there is a record. Northside is City of Cincinnati, and a rental whose heat the tenant can’t control must hold 70F or warmer once the outdoors stays under 60F for a day. The Health Department enforces it. Owners and landlords book us; we fix furnaces, not leases.',
    },
    {
      q: 'Do I need a permit to replace a furnace in Northside?',
      a: 'Yes. Because Northside is inside the City of Cincinnati, swapping in a new furnace takes a mechanical permit from the Department of Buildings & Inspections. Fixing the furnace you already own takes none. On a Northside replacement, we have the permit in hand before the old unit leaves the basement.',
    },
  ],
  overrides: {
    ctaLine: 'Northside furnace repair, from stone basements to apartments',
    band1Heading: 'Common Furnace Problems in Northside Homes',
    commonSituations: [
      'Burners in a Northside basement furnace that fire, then quit a minute later',
      'A third floor that stays cold in a pre-1940 house while downstairs is fine',
      'An apartment electric furnace putting out lukewarm air',
      'A rusted flue pipe feeding an old brick chimney',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Plenty of Northside no-heat calls are solved on the basement stairs. Thermostat set to heat, fresh batteries in it. The switch next to the furnace flipped back up. Breaker reset. A clogged filter pulled and replaced. Front panel pressed home, since a loose one keeps many furnaces from firing at all. If that does it, keep your money. Gas smell: leave every switch alone, walk out and call Duke Energy from the sidewalk. Carbon monoxide alarm: everyone out before anything else. Past that, we inspect, tell you what failed, quote it for approval and run the furnace through a full cycle.',
      },
      {
        title: 'Repair or Replace Your Northside Furnace?',
        body: 'The furnace decides, not the house. Lots of 1920s Northside homes got a new furnace a few winters back, and a dead igniter or inducer motor on that one is a plain repair. A cracked heat exchanger is a safety call, since it can leak carbon monoxide into the living space, so we don’t patch it. When the repair runs to a big share of a new unit’s cost, you get both numbers to weigh. Replacing means a city mechanical permit, and we file it. Gas use that climbs in a mild month is often the first hint of a struggling furnace.',
      },
    ],
    whyTitle: 'Why Northside Homeowners and Landlords Call Us',
    whyParagraph:
      'Old Northside basements and its apartment buildings are both regular stops for us. Each technician is licensed, insured and background checked, the flat-rate price gets settled up front, and a night or weekend visit carries no overtime.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Northside?',
        a: 'Whatever failed sets the price, which is why we test before quoting. Cleaning a flame sensor on a Northside basement gas furnace goes quickly; a blower motor takes longer and costs more. You approve one flat price before we start, and if the fix doesn’t hold, you don’t pay.',
      },
      {
        q: 'Should I repair or replace my Northside furnace?',
        a: 'Size up the furnace’s age and shape, and ignore how old the Northside house is. A single failed part is normally worth fixing. A cracked heat exchanger, or a unit wanting several major parts at once, usually isn’t. We put the repair price and a replacement price next to each other.',
      },
      {
        q: 'Why is my Northside furnace blowing cold air?',
        a: 'Confirm the thermostat reads heat rather than fan on, and change a dirty filter. A gas furnace that keeps tripping its safety switch will push cool air while the blower runs, often over a weak flame sensor or a blocked flue. That part is a technician’s job, so call us.',
      },
    ],
  },
};
