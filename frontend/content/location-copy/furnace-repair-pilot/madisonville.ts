import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const madisonville: LocationServiceCopy = {
  localParagraph:
    'Madisonville has two kinds of heating, and the street usually tells us which. The older blocks around Whetsel Avenue are mostly houses from 1939 or earlier, heated by gas furnaces that replaced coal or gravity systems long ago. The newer apartment buildings near Madison and Red Bank Roads lean electric, and Census figures put about 36% of homes across the neighborhood on electric heat. Gas here comes from Duke Energy Ohio. We name the fault and agree the price with you before a single part is touched.',
  emergencyParagraph:
    'No heat in a Madisonville apartment or a prewar house hits newborns, grandparents and sick family members hardest. By NOAA’s count at CVG, about 100 nights a year fall to freezing or lower, so an outage after dark rarely waits well. Gas furnace, electric furnace or heat pump, we come out the same day on most calls, weekends too.',
  commonIntro:
    'Madisonville splits between prewar houses and newer apartments, and close to half of homes are rented. The heating calls we take most often:',
  localFaqs: [
    {
      q: 'My Madisonville rental has no heat. Should I call you or the landlord?',
      a: 'The landlord or property manager, in writing, since approving the repair is their decision. Inside the City of Cincinnati, a rental whose heat the tenant can’t control has to be held at 70 degrees or warmer in cold weather. If you own or manage the building, ring us yourself. We fix furnaces, not leases.',
    },
    {
      q: 'Do I need a permit to replace a furnace in Madisonville?',
      a: 'Yes. Madisonville is a Cincinnati neighborhood, so a furnace replacement takes a mechanical permit from the city’s Department of Buildings & Inspections, and we pull it ahead of the install. Some 45227 addresses actually sit in Fairfax or Columbia Township, where the city permit doesn’t apply, and we sort out the right one.',
    },
  ],
  overrides: {
    ctaLine: 'Madisonville heating repair, prewar houses to new apartments',
    band1Heading: 'Common Furnace Problems in Madisonville Homes',
    commonSituations: [
      'An old Whetsel-area gas furnace that fires, then trips its safety switch',
      'An electric furnace in a newer apartment blowing cool air with the breaker on',
      'A heat pump that won’t come out of defrost on a January morning',
      'Second-floor bedrooms in a prewar house that stay chilly',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Some Madisonville no-heat problems are five-minute fixes. Thermostat on heat, with batteries that aren’t dead. Furnace switch up, breaker not tripped. A filter you can see light through. The blower door clicked fully closed, since lots of furnaces sit idle when it isn’t. Heat back? Then you don’t need us. A gas smell means hands off every switch, no relighting, and a call to the gas company once you’re out on the sidewalk. Ring us when the furnace gives up after a few tries to light, electric heat never warms, or it bangs as it starts. We find the fault, price it and check the heat after.',
      },
      {
        title: 'Repair or Replace Your Madisonville Furnace?',
        body: 'The building’s age is the wrong yardstick; the furnace’s is the right one. Lots of 1920s Madisonville houses run a furnace put in within the last decade or two, and when its inducer or control board gives out, repairing it makes sense. A cracked heat exchanger can leak carbon monoxide into the rooms, so we switch that furnace off and explain the danger before any talk of cost. Replacing it takes a city mechanical permit, and we handle the paperwork. Earlier warning comes on the Duke Energy Ohio bill: more gas used, or longer run times in ordinary weather, means the furnace is struggling.',
      },
    ],
    whyTitle: 'Why Madisonville Homeowners and Landlords Call Us',
    whyParagraph:
      'Madisonville owners and landlords hear in plain words what broke and see the full price before we start, overtime never added. Every technician is background-checked and drug-tested. A repair that fails costs you nothing.',
    sharedFaqs: [
      {
        q: 'How much is furnace repair in Madisonville?',
        a: 'Testing tells us what broke, and the part sets the price. Cleaning a sooty flame sensor is a small job. A dead inducer motor, or a heat pump that won’t defrost properly, takes more labor. You okay one flat figure before we begin, and a call in the evening or on a weekend costs no more.',
      },
      {
        q: 'Should I repair or replace the furnace in my Madisonville house?',
        a: 'With one bad part and an intact heat exchanger, fixing it usually wins, even under a house built before 1940. A cracked exchanger means replacing the furnace, because carbon monoxide is the issue, not money. We write up the repair price and the replacement price together so you can compare.',
      },
      {
        q: 'Why is my Madisonville furnace blowing cold air?',
        a: 'Check the thermostat reads heat and the fan is on auto. A clogged filter can overheat the furnace until its limit switch shuts the burners off, leaving only the fan. In all-electric apartments, a single tripped breaker can cut the heating elements while the blower keeps going. After that, we test the igniter and sensor.',
      },
    ],
  },
};
