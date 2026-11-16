import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northFairmount: LocationServiceCopy = {
  localParagraph:
    'North Fairmount is a hillside of single houses, most built before 1940 according to Census figures, with a second wave from the 1960s and 1970s and nothing new since 2000. In the older houses we look for cloth-covered or knob-and-tube wiring, fuse boxes and ungrounded outlets. In the postwar ones the usual issue is a small panel with too few circuits for a modern kitchen. Homes here are split about evenly between owners and renters. We inspect, explain, and price any work up front.',
  emergencyParagraph:
    'These can’t wait: an outlet too hot to touch, a cracked and scorched switch plate, a plug that sparks, the smell of burning insulation, a breaker that drops again the instant it’s reset, or lights that dip as an appliance starts. Turn that circuit off. Smoke or fire: everyone out, then 911. Most get a same-day visit, weekends too.',
  commonIntro:
    'In North Fairmount’s single houses, old and postwar alike, these faults turn up most:',
  localFaqs: [
    {
      q: 'Is your inspection the same as a city electrical inspection?',
      a: 'No. Ours is booked whenever you like and covers the whole house, ending in a written safety report. The city’s happens only when work needs a permit; an inspector from the City of Cincinnati Department of Buildings & Inspections comes to sign that work off. When our repairs need a permit, we apply and set up the visit.',
    },
    {
      q: 'I rent a house in North Fairmount and half the outlets are dead. What now?',
      a: 'Reset any tripped GFCI or breaker first. If the outlets stay dead, put it to your landlord in writing. Ohio’s ORC 5321.04 (A)(4) says landlords keep the electrical fixtures they provide in good and safe working order, so the repair is theirs to arrange. We inspect wiring, not leases; the landlord books us.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for North Fairmount houses',
    band1Heading: 'Common Electrical Problems We Find in North Fairmount Homes',
    commonSituations: [
      'A fuse box in a pre-1940 house where someone fitted larger fuses to stop them blowing',
      'A 1960s kitchen on one or two circuits that trip whenever two appliances run',
      'Knob-and-tube wiring buried under attic insulation',
      'Three-prong outlets added to a two-wire system with no ground',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some of this you can sort out yourself. If outlets in a bathroom, kitchen, garage or on the porch stop, look for a tripped GFCI, which can kill outlets in other rooms too, and reset it. A breaker that trips and then holds is nothing to chase. A lamp outlet may simply be on a switch. Book us if the house still runs on fuses, most rooms have two-prong outlets, extension cords are doing a wire’s job, lights flicker on more than one circuit, or a sale or purchase is coming up.',
      },
      {
        title: 'Inspection, Repair or Rewire in North Fairmount?',
        body: 'The inspection sets the plan, not the year built. A pre-war North Fairmount house rewired in the 1980s may need a handful of fixes, while a 1965 house can still have its first panel. A slack connection, a worn-out breaker or a kitchen without GFCI protection gets repaired on its own. A fuse box, or a panel that’s full and failing, gets replaced. Where cloth or knob-and-tube cable runs through most rooms, you see a rewiring price beside the spot repairs. Duke Energy owns the meter and service line; we work from the meter base in. Then you decide.',
      },
    ],
    whyTitle: 'Why North Fairmount Homeowners Call Us',
    whyParagraph:
      'North Fairmount houses have been patched by several owners over a century. We sort out what’s safe, what isn’t and what it costs to fix, and quote flat before starting. Licensed, insured, background-checked technicians.',
    sharedFaqs: [
      {
        q: 'How much does a North Fairmount electrical inspection cost?',
        a: 'Flat, and you hear it before we start. A quick look at a rented house before a new tenant moves in costs less than a full inspection ahead of a sale or a new appliance, and the size of the house matters too. Once agreed, the price stays put.',
      },
      {
        q: 'What will you check in my North Fairmount house?',
        a: 'We open the panel or fuse box and go through each breaker or fuse, then check the grounding and bonding. After that it’s every room: outlets and switches tested, GFCI and AFCI devices tripped, smoke alarm power confirmed. Basement and attic wiring that’s in view gets looked at too. The report notes each problem and where we found it.',
      },
      {
        q: 'Will I have to hire you for the repairs?',
        a: 'No. The report stays with you, and any licensed electrician can use it. Every finding has our flat price attached in case you want us, and you decide which items get fixed and in what order.',
      },
    ],
  },
};
