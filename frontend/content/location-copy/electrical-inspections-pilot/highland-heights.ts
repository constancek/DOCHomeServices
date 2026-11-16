import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const highlandHeights: LocationServiceCopy = {
  localParagraph:
    'An electrical inspection in Highland Heights usually means a family house from the 1970s or 1980s, or an apartment near Northern Kentucky University. The Census puts the median home here at 1985, so most wiring is grounded, but many panels were sized before EV chargers and all-electric kitchens. Electric heat runs in 65.2% of homes, and in January that load sits on the same panel. You get every finding on paper, and a price for each fix before anyone picks up a tool.',
  emergencyParagraph:
    'A few Highland Heights warnings need a technician today: an outlet face that’s brown or hot, a switch that crackles, a smell like melting plastic, sparks, or a breaker that won’t hold even once. Leave that breaker off. Smoke or fire means get out of the building and call 911. Same-day help on most calls, weekends included.',
  commonIntro:
    'Highland Heights has two kinds of housing: family homes from the 1970s and 1980s, and apartment buildings, many of them near campus. Here’s what we find most often:',
  localFaqs: [
    {
      q: 'I rent near NKU and my outlets keep losing power. Can I book you myself?',
      a: 'Report it to the landlord or the building office in writing and keep a copy, since they own the wiring and they’re the ones who book an inspection or repair. We inspect wiring, not leases. If an outlet smells hot, switch its breaker off and tell them the same day.',
    },
    {
      q: 'Does the meter on my Highland Heights house belong to me?',
      a: 'Duke Energy Kentucky, which supplies power in Highland Heights, owns the meter and the drop wire to your house. Your side starts at the meter base, and that’s where our inspection begins. If a fault is on Duke’s side, we show you where and you report it to them.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Highland Heights homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Highland Heights Homes and Apartments',
    commonSituations: [
      'A panel from the 1980s in an NKU-area rental, with double-tapped breakers feeding added rooms',
      'Apartment units where one kitchen circuit trips whenever the microwave and toaster run together',
      'Bathrooms and basements remodeled without GFCI protection',
      'An all-electric home where the lights dim each time the heat strips kick on',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of dead outlets in Highland Heights apartments come back with one button. Find the GFCI, which may be in a bathroom or the kitchen rather than the room that went dark, and reset it. A breaker that tripped when a space heater and a hair dryer shared a circuit, then held after reset, was simply overloaded. Book us if the tripping repeats, outlets feel warm, lights waver in more than one room, or cords snake under rugs to reach the far wall. Owners selling a 1970s or 1980s house book us too. Findings come in writing.',
      },
      {
        title: 'Inspection, Repair or Rewire in Highland Heights?',
        body: 'Rewiring rarely comes up in Highland Heights, since most homes here postdate 1960. What usually turns up is a backstabbed outlet that has loosened, a breaker that runs warm, or a basement remodel with no GFCI, and those get fixed one by one. When a panel is crowded with tandems or can’t carry electric heat plus a charger, we price a new one. Our visit gives you a written safety report. Separately, any job that needs a permit gets an official sign-off; we pull the permit and book that inspection. Who does the repairs is up to you.',
      },
    ],
    whyTitle: 'Why Highland Heights Homeowners and Landlords Call Us',
    whyParagraph:
      'With 37.5% of Highland Heights homes rented, many reports we write go to landlords as well as owners. Every technician is licensed, insured, background-checked and drug-tested, and works to a price you approved.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Highland Heights?',
        a: 'You get one flat price before the visit. A studio near campus costs less to inspect than a four-bedroom house on Johns Hill Road, and the reason for the visit matters too. Anything we find that needs fixing gets its own quote, and nothing is done until you agree.',
      },
      {
        q: 'What do you check during the inspection?',
        a: 'We open the panel and look at each breaker and its wire, test the ground and bonding, then go room by room checking outlets, switches and GFCI and AFCI protection. Exposed cable in a basement or attic gets a look, and so does smoke alarm power. Apartments: your unit and its panel only.',
      },
      {
        q: 'Do I have to hire you to make the repairs?',
        a: 'No. Landlords near NKU can use our report to line up their own electrician; it’s theirs once we hand it over. If you’d like us to take the work, every item gets a flat-rate quote first, and bigger jobs such as a new panel can be financed.',
      },
    ],
  },
};
