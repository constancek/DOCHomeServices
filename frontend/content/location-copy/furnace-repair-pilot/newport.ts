import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'Newport furnace calls mostly take us into old brick. By Census figures, 46.5% of homes here date from 1939 or before, so the furnace was fitted decades after the walls, often in a low basement or a closet carved out of a converted flat. Gas heats a little over half of homes, and electric furnaces and heat pumps cover most of the rest. More than half of households rent, so the landlord often signs off on the repair. We find the fault and quote it before any work.',
  emergencyParagraph:
    'A Newport rowhouse or third-floor apartment without heat is hardest on babies, elderly neighbors and anyone getting over an illness. NOAA puts average January lows at the CVG station near 23 degrees, enough to freeze pipes in a cold building. Gas or electric furnace, we usually make it out the day you call, Saturday and Sunday included.',
  commonIntro:
    'Newport’s furnaces work inside pre-war brick rowhouses and divided apartment buildings, and that shapes the faults we find. The most common:',
  localFaqs: [
    {
      q: 'Who issues the furnace permit in Newport?',
      a: 'The City of Newport Building Department. Kentucky requires a permit when a furnace or heat pump is replaced, and Newport runs its own HVAC permits instead of leaving them to Campbell County. Fixing the furnace you already own needs none. When a replacement makes sense, we file before the install date.',
    },
    {
      q: 'I live in the East Row. Does historic review affect furnace work?',
      a: 'Indoor work doesn’t touch it. Newport’s East Row, Buena Vista and York Street local districts need a Certificate of Appropriateness for many exterior changes, but a furnace repair stays inside. When a replacement means a new vent through an outside wall or a new outdoor unit, we check with the city’s Historic Preservation office first.',
    },
  ],
  overrides: {
    ctaLine: 'Newport furnace repair for rowhouses and apartments',
    band1Heading: 'Common Furnace Problems in Newport Homes',
    commonSituations: [
      'A basement furnace that warms the first floor but not the third',
      'An apartment electric furnace pushing out lukewarm air',
      'Burners that catch, run briefly, then drop out again',
      'A flue pipe rusted through where it meets an old brick chimney',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Some Newport no-heat calls can be solved from the hallway. A blank thermostat screen usually means flat batteries; replace them and set it to heat. The furnace switch often hangs by the basement stairs, and the breaker sits in the panel, so check both. Slide in a fresh filter and push the blower door until it seats, since an open door keeps most furnaces off. Warm air again? Then you can skip us. Tenants, tell the landlord before anything else. Call for short-cycling, a squealing blower or a breaker that won’t hold. Smell gas: get out, flip nothing and phone Duke Energy Kentucky outside.',
      },
      {
        title: 'Repair or Replace Your Newport Furnace?',
        body: 'Let the furnace decide. A pre-1940 Newport rowhouse can hold a furnace put in two or three winters ago, and a worn igniter or a stuck pressure switch on it is worth the repair. A heat exchanger with a crack is not, since carbon monoxide can work through it into the rooms; we turn that unit off and price a new one. If the CO alarm goes off, clear the building first and make calls from outside. New furnaces need a city permit, and we pull it. Before any of that, a gas bill jumping in a mild month tells you the furnace is struggling.',
      },
    ],
    whyTitle: 'Why Newport Homeowners and Landlords Call Us for Heating',
    whyParagraph:
      'Newport owners and landlords hear what broke in plain language and see the flat price before we pick up a tool. Every technician is background-checked and drug-tested, and a repair that isn’t right costs you nothing.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Newport?',
        a: 'The failed part sets the price, and testing tells us which part. A flame sensor or igniter is a smaller bill; a blower motor wedged into a narrow rowhouse basement means more labor. One flat number goes to you for approval first, and an evening or weekend visit costs the same as a Tuesday.',
      },
      {
        q: 'Is it worth repairing an older furnace in Newport?',
        a: 'Usually, as long as just one part failed and the heat exchanger has no cracks. Old brick walls say nothing about the furnace’s age. A cracked exchanger, or a unit chewing through big parts, gets a replacement quote beside the repair so the owner or landlord can weigh them.',
      },
      {
        q: 'Why is my Newport furnace blowing cold air?',
        a: 'On gas, cold air usually means the burners never lit, often from a coated flame sensor or a tired igniter. A packed filter can also trip the high-limit switch, so the fan runs with no flame. On electric, look for a burned element or a tripped breaker. Filter and thermostat come first.',
      },
    ],
  },
};
