import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const paddockHills: LocationServiceCopy = {
  localParagraph:
    'Paddock Hills has two kinds of boiler customer. One owns a Dutch Colonial, Tudor or bungalow from the early 1900s, built when radiators were the standard way to heat; Census figures date 41.8% of homes here to 1939 or earlier. The other lives in one of the large apartment buildings, where heat may come from a central boiler or from electric units. For the houses, we find the failing part and quote it first. For the buildings, we work with the owner or manager.',
  emergencyParagraph:
    'January nights in Cincinnati average a low of about 23F (NOAA normals), and a house or apartment with no heat gets dangerous for infants, elderly residents and anyone who is ill. Long cold snaps can also put radiator pipes at risk. Same-day boiler service is the norm for most Paddock Hills calls, weekends included.',
  commonIntro:
    'In Paddock Hills the calls come from older single houses and from apartment buildings with a shared heating plant. Most often:',
  localFaqs: [
    {
      q: 'I rent in a large Paddock Hills building and the heat is off. Can I call you directly?',
      a: 'Report it to your building manager or owner first, in writing; they decide who repairs the boiler. As a Cincinnati neighborhood, Paddock Hills falls under the city rule that landlord-controlled heat keep units at 70F once outdoor temperatures stay below 60F for 24 hours. We fix boilers, not leases.',
    },
    {
      q: 'Does a large Paddock Hills apartment building need boiler inspections?',
      a: 'Usually, yes. Ohio law (ORC 4104.04) exempts boilers only in private homes and buildings under six units, with steam at 15 psi or less and hot water at 160 psi or less. A house on Avon Drive is exempt; a big apartment building is not, so its owner keeps the state inspection current.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Paddock Hills houses and apartment buildings',
    band1Heading: 'Common Boiler Problems in Paddock Hills Homes and Apartments',
    commonSituations: [
      'An upstairs bedroom in a Tudor or Dutch Colonial that stays cold while the living room is warm',
      'An apartment building boiler that trips on a lockout code during the first hard freeze',
      'Water dripping from a radiator valve onto old hardwood floors',
      'A pressure gauge that reads low every morning no matter how often the system is refilled',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Start at the thermostat: heat mode, set a few degrees over the room. Then check the boiler’s on/off switch, often on a nearby joist. A radiator hot along its base but cool across the top is holding air; open its bleed valve with a key. If you have hot water heat, the gauge may sit low once you’ve bled, so refill it. Heat back on means no visit needed. Get us out when pressure sinks again, a puddle forms below the boiler, the flame looks yellow, it bangs, or it locks out. Gas odor: walk out, then phone the gas company or 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Paddock Hills?',
        body: 'An old house doesn’t mean an old boiler, so read the label on the unit for its install date. On a boiler that is otherwise sound, a worn pump, a stuck valve, a weak igniter or a waterlogged expansion tank gets repaired. Leaks from the vessel or heat exchanger, or a boiler that has needed repairs every heating season, are when we price a new one alongside the fix. For upkeep, an early-fall service of 60 to 90 minutes covers pressure, the expansion tank, safety controls, burner and venting, a leak check and bleeding. Ducted homes should see our furnace repair page instead.',
      },
    ],
    whyTitle: 'Why Paddock Hills Residents and Owners Call Us',
    whyParagraph:
      'Paddock Hills mixes period houses with big rental buildings, and we work on both. Expect a licensed, insured technician with a clean background check and drug test, and a flat-rate price you approve first.',
    sharedFaqs: [
      {
        q: 'How much will my Paddock Hills boiler repair cost?',
        a: 'That depends on what failed. Bleeding a radiator line or replacing a thermocouple is quick; a cracked section on an older cast-iron boiler is major work. We find the cause, quote one flat price and only begin once you say yes. Evenings and weekends carry no overtime fees.',
      },
      {
        q: 'Should I fix or replace the boiler in my Paddock Hills house?',
        a: 'Fix it if one component quit and the boiler body is sound; pumps, valves and controls are made to be replaced. When the heat exchanger leaks or repairs keep coming back each winter, we show you a replacement quote beside the repair quote. Financing is available.',
      },
      {
        q: 'Why is my Paddock Hills radiator cold when the boiler is running?',
        a: 'Air in the radiator is the usual reason, especially when the top is cold and the bottom is warm. Bleed it. If several radiators are cool, check the pressure gauge and top up a hot water system. Still cold after that points to a valve or the circulator pump.',
      },
    ],
  },
};
