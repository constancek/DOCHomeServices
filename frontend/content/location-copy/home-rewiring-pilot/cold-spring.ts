import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const coldSpring: LocationServiceCopy = {
  localParagraph:
    'Most houses in Cold Spring are too young to need a full rewire. Census figures put the median build year at 1999, and nearly half of the city’s homes were built after 2000. Those owners usually call about a finished basement, a sunroom or a circuit that keeps dropping out. The older ranches from the 1960s and 1970s are a different story, because some may have aluminum branch wiring. We test before we price anything, say plainly when nothing needs replacing, and write up the job at one flat rate.',
  emergencyParagraph:
    'Some calls should not wait for Monday. That includes a burnt odor from an outlet, a blackened or hot cover plate, popping or buzzing in a box, a breaker that refuses to stay on, and a shock from any switch or appliance. If you can get to the panel dry, turn that breaker off. Smoke means leave and call 911.',
  commonIntro:
    'In the newer subdivisions and townhouses of Cold Spring, as well as the older houses near Alexandria Pike, these signs come up most:',
  localFaqs: [
    {
      q: 'We are finishing our basement in Cold Spring. Does the house need rewiring?',
      a: 'Probably not. A house built in the last few decades tends to have good wiring, and the basement just needs new circuits run to code. We look at whether the panel has open slots for them. If it doesn’t, the quote shows a panel upgrade next to the circuit work.',
    },
    {
      q: 'How do I know if my house in Cold Spring has aluminum wiring?',
      a: 'With the breaker off, pull an outlet cover and look at the wire. Aluminum is a dull gray-silver and its jacket is often printed AL. Houses from the 1960s and 1970s are where it turns up. We can confirm it and check each connection for heat.',
    },
  ],
  overrides: {
    ctaLine: 'New circuits and rewiring for houses and townhouses in Cold Spring',
    band1Heading: 'Signs a Home in Cold Spring Needs Rewiring',
    commonSituations: [
      'A bedroom circuit in a 1990s house that pops whenever a space heater runs',
      'Gray-silver aluminum conductors at the receptacles of an early-1970s ranch',
      'Kitchen lights that flicker since a new induction range went in',
      'A switch plate that runs warm in a townhouse nobody has inspected',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Cold Spring',
        body: 'For an older ranch here, the main gain is getting rid of aluminum wire, which swells and shrinks more than copper, slowly loosens its terminals and builds heat there. For a newer house it comes down to capacity. Extra circuits stop the existing ones from straining and leave room for a heat pump, an electric range, an EV charger outlet and smart lighting, all inside current code. Electrical faults are one of the main ways houses catch fire, so retiring overloaded or worn circuits cuts that risk. Power stays steadier, and the house keeps its value when it sells.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Cold Spring',
        body: 'Here, most jobs turn out partial, and testing is how we know. A weak run or two, one room, dedicated lines for a remodeled kitchen or grounded outlets in place of two-prong ones all fit that. When aluminum shows up throughout a house, we quote the complete rewire and the partial side by side, with new breakers, a rebalanced load and a panel upgrade if the old one can’t keep up. The choice is yours. Push the reset on any tripped GFCI in the garage, kitchen, bath or patio first, and remember one dead outlet often just needs replacing.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Cold Spring',
        body: 'You stay in the house while we work. Our electricians go one room at a time and let you know ahead of every shutoff. In newer houses, wire usually travels through the attic and unfinished basement, so fewer walls get cut, and every spot we do open is marked in the written scope. We file the permit and bring in the inspector when it’s finished.',
      },
    ],
    whyTitle: 'Why Homeowners in Cold Spring Choose Us for Home Rewiring',
    whyParagraph:
      'Licensed electricians lay out each new circuit with proper grounding and an even load on the panel. We follow current code, tell you when a house needs far less than a rewire, and fix the price beforehand.',
    sharedFaqs: [
      {
        q: 'What does it cost to rewire part of a house in Cold Spring?',
        a: 'Once we test, you get one flat price. The size of the house, the number of circuits, whether an attic or basement gives us easy access and any panel update set that number. One added circuit costs a small fraction of a full rewire, and you approve it first.',
      },
      {
        q: 'Will we have power while our house in Cold Spring is rewired?',
        a: 'Most rooms keep power the whole time. We cut one area at a time and warn you before each one goes off. Families stay home throughout, and in a townhouse we take extra care with the walls you share with neighbors.',
      },
      {
        q: 'Can a homeowner add circuits or rewire without an electrician?',
        a: 'It isn’t a safe weekend project. The work means energized wire and a detailed code, and errors bring shock and fire risk, a failed inspection and insurance trouble. A licensed electrician gets grounding and load sharing right and handles the permit.',
      },
    ],
  },
};
