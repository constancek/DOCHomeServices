import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Bethel was platted in 1798, and Census figures date roughly one house in four to before 1940, with a median build year of 1958. Those oldest houses can hide knob-and-tube behind the plaster, ungrounded and brittle, while the postwar ones tend to run a kitchen off a single circuit. More than half the units are rentals, many in small apartment buildings. We start with a meter on every circuit, and if nothing is wrong you’ll hear that. Scope and flat price go on paper before any plaster comes down.',
  emergencyParagraph:
    'If a receptacle smells like hot wax, a cover plate feels warm, drywall crackles, or a lamp switch zaps you, we want to hear about it the same day, weekends too. Shut that circuit’s breaker only from a dry spot with dry hands. Flames or smoke mean get outdoors, then call 911.',
  commonIntro:
    'In Bethel, worn-out wiring in the older houses and small apartment blocks usually announces itself in one of these ways:',
  localFaqs: [
    {
      q: 'Who calls the electrician when an outlet sparks in my rented apartment in Bethel?',
      a: 'Your landlord. Email or write to them the day it happens and keep the message. Ohio’s landlord statute, ORC 5321.04(A)(4), says electrical fixtures a landlord supplies have to be kept in good and safe working order. Leases aren’t our department, wiring is, so the property owner or manager is the one who books us and approves the cost.',
    },
    {
      q: 'Is a tingle from a light switch something to worry about in an older house in Bethel?',
      a: 'Yes. A tingle means current is reaching somewhere it shouldn’t, often because the circuit has no ground or the insulation behind the switch has cracked. Leave that switch alone and keep kids away from it. We trace the fault and tell you whether it’s a single worn device or the whole run.',
    },
  ],
  overrides: {
    ctaLine: 'Wiring updates for older houses and rentals in Bethel',
    band1Heading: 'Signs an Apartment or Home in Bethel Needs Rewiring',
    commonSituations: [
      'Ceiling lights that sag dim the moment a space heater clicks on in a postwar house',
      'Ungrounded two-slot receptacles in each room of a pre-1940 house',
      'One breaker in a small apartment block that a tenant resets over and over',
      'A cover plate warm to the hand in a unit nobody has touched in decades',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Bethel',
        body: 'Fire is the reason to take old wiring seriously, since faulty wiring ranks among the leading causes of house fires. In the pre-1940 houses in Bethel, cloth insulation has had the better part of a century to dry out and crack, and splices have had just as long to work loose. Fresh copper with a ground on every outlet takes that risk out of the walls. Extra circuits stop the old ones from running hot, the work meets current code, and the house can finally carry a heat pump, bigger appliances, brighter lighting and smart switches. Landlords also field fewer complaints, and a rewired building is an easier sale.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Bethel',
        body: 'Size the job by what the meter says, not the deed. Two or three tired runs, one bedroom, or a kitchen whose counter appliances keep fighting over one circuit makes a partial job. Cloth wiring or knob-and-tube in nearly every room is different, and then you see two quotes side by side, the partial and the whole house, the second covering fresh breakers, the load evened out, and a larger panel if the old box is full. The owner picks. Before you phone, find any GFCI receptacle with a popped button and push it back in, since one can black out a string of outlets beyond it.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Bethel',
        body: 'Few families in Bethel need to move out for this. Our crew opens one area, finishes it and closes it before starting the next, and you get a heads-up before any shutoff. The written scope marks every spot where plaster or drywall comes open. Tenants in a small building stay put too, with notice passed through the owner. We take out the permit and stay with the job through the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Bethel Choose Us for Home Rewiring',
    whyParagraph:
      'A safe rewire depends on proper grounding and a load spread evenly across the panel, and our licensed electricians do both every week. Everything goes in to current code, with the scope and flat price agreed up front.',
    sharedFaqs: [
      {
        q: 'What sets the price of rewiring a house in Bethel?',
        a: 'Four things, all measured after testing. We look at how big the house is, how many circuits it should have, how easy it is to fish wire behind the plaster, and whether the panel has to change. You get one flat number, with a partial option priced right beside it.',
      },
      {
        q: 'Can we keep living in our house in Bethel while it gets rewired?',
        a: 'You can, and most families do. Power goes off one section at a time, so most of the house stays live while we work, and we warn you before each cut. In a small apartment building, the owner gets the schedule to hand out, so each tenant knows when their unit is affected.',
      },
      {
        q: 'Is rewiring something I can do myself in Bethel?',
        a: 'Not safely. You’d be handling energized conductors under a code with no room for guesswork, and one slip can mean a shock, a fire, a failed inspection or an insurer who balks at a claim. A licensed electrician knows how grounding and circuit load fit together and holds the permit. Resetting a breaker is fair game for anyone.',
      },
    ],
  },
};
