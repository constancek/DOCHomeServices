import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Gas edges out electric in Aurora, though not by a wide margin. Census figures show 60.8% of homes on gas heat and 38.3% on electricity, so electric furnaces turn up on our Aurora schedule all winter. A large share of the city’s houses predate 1940, which means the furnace came decades after the walls, usually wedged into a basement corner with ducts routed wherever there was room. The technician finds the part that failed and you hear the price before anything is taken apart.',
  emergencyParagraph:
    'NOAA puts the average January low at CVG around 23F, and an Aurora house with a dead furnace gives up its warmth quickly at that temperature. Babies, older family members and anyone who is ill feel it first. A cold house can freeze its plumbing, too. Gas or electric, we usually repair Aurora furnaces the day you call, weekends included.',
  commonIntro:
    'Aurora heating is a mix of gas furnaces in older basements and electric furnaces in smaller homes and flats. These faults come up most:',
  localFaqs: [
    {
      q: 'My Aurora basement took on river water. Can I run the furnace?',
      a: 'Keep it switched off, even once the floor has dried. Ohio River water damages a furnace’s gas valve, control board and burners in places you can’t see, and starting it can be dangerous. We open the cabinet, check each part and tell you straight which pieces can be kept and which need replacing.',
    },
    {
      q: 'I rent half of a two-family house in Aurora. Who fixes the furnace?',
      a: 'Usually the landlord. Let them know in writing on the day the heat quits, and hold on to a copy. Lots of older Aurora houses were divided into two or more apartments, often with a furnace for each. We fix furnaces, not leases, so the owner normally books us and approves the repair.',
    },
  ],
  overrides: {
    ctaLine: 'Furnace repair for Aurora’s gas and electric homes',
    band1Heading: 'Common Furnace Problems in Aurora Homes',
    commonSituations: [
      'A pre-1940 basement gas furnace that fires and then cuts out',
      'Electric heat knocking out its breaker when the first hard freeze arrives',
      'Rear rooms of an older downtown Aurora house running colder than the front',
      'A furnace that flood water reached and nobody has inspected since',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'In Aurora, the thermostat belongs on heat, with batteries that still have life. The furnace power switch, on the cabinet or a nearby wall, should be on, and no breaker should be tripped. A clogged filter gets replaced, and the blower door gets pushed until it seats, since a loose one keeps plenty of furnaces from starting. Warm air after all that means you can skip the call. Smelling gas means flipping nothing, leaving, and ringing the gas company once outside. A carbon monoxide alarm means everybody out. For anything else we test the furnace, explain what failed, price it for your approval and run a full heat cycle after.',
      },
      {
        title: 'Repair or Replace Your Aurora Furnace?',
        body: 'Weigh the furnace itself, not the age of the house. A pre-war home in Aurora can easily hold a furnace installed a few winters ago, and when its igniter, inducer motor or blower gives out, a repair is usually the sensible move. A cracked heat exchanger is another story. Carbon monoxide can escape through it into the rooms, so we shut that furnace off and treat it as a safety problem. If a replacement makes more sense, Dearborn County issues the building permit, and homes downtown may need the Aurora Historic Preservation Commission to approve exterior changes. We check on that before any work.',
      },
    ],
    whyTitle: 'Why Aurora Homeowners and Landlords Call Us',
    whyParagraph:
      'Aurora’s houses are old and often split into apartments, so we take time to find the real fault. Each technician is licensed, insured and background checked, and if a repair fails, we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Aurora?',
        a: 'No one can quote it fairly until the furnace has been tested. Cleaning a flame sensor is a short Aurora visit, and replacing a blower motor in a cramped old basement takes longer. You approve a single flat price before work begins, and evening or weekend calls carry no overtime.',
      },
      {
        q: 'Should I repair or replace my furnace in Aurora?',
        a: 'Fix it when one part has failed and the rest of the furnace is in good shape. Replace it when the heat exchanger has cracked or major repairs keep piling up year after year. You get both numbers on one page, along with the option we would choose for our own house.',
      },
      {
        q: 'Why is my Aurora furnace blowing cold air?',
        a: 'Check that the thermostat reads heat instead of fan, and look for a choked filter. With gas heat, cool air usually means the burners caught and then went out, often because of a dirty flame sensor. With electric heat, a burned element is the usual culprit in Aurora homes.',
      },
    ],
  },
};
