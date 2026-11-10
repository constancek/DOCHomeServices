import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'Census figures put the median home in Newport at 1947, with close to half the stock older than 1940. Houses that age may still run knob-and-tube or cloth-wrapped cable with no ground, and their two-slot outlets weren’t built for a space heater and a microwave on one wall. Plenty have been cut into flats, so one weak circuit can serve two households. We test first, tell you if it holds up, and give the owner a written scope and fixed price before plaster is cut.',
  emergencyParagraph:
    'A cover plate too hot to touch, a burning odor from inside a wall or a jolt from a light fixture means a visit that day. Switch that circuit off only if the panel is dry and nothing near it is hot. If you see smoke, get every tenant out and call 911. We come on weekends too.',
  commonIntro:
    'From the tall Victorians of the East Row to the walk-ups near Monmouth Street, these are the wiring complaints owners and tenants bring us in Newport:',
  localFaqs: [
    {
      q: 'Does rewiring a house in the East Row need historic approval?',
      a: 'Running new cable through interior walls isn’t usually exterior work. Buena Vista, East Row and York Street are local districts where many outside changes need a Certificate of Appropriateness. If a rewire means relocating a meter or adding anything to the facade, we talk to the city’s Historic Preservation office before we start.',
    },
    {
      q: 'I rent a flat with two-prong outlets. Who books a rewire in Newport?',
      a: 'The building’s owner or manager does. Send them a dated note about the outlets, the flicker or the breaker that keeps dropping, and save a copy. We settle scope and price with the owner. We rewire houses, not leases, so who pays sits between you and your landlord.',
    },
  ],
  overrides: {
    ctaLine: 'Rewiring for Victorian row houses and converted flats in Newport',
    band1Heading: 'Signs an Apartment or Home in Newport Needs Rewiring',
    commonSituations: [
      'Ungrounded two-slot outlets in every room of a pre-1940 brick house',
      'A tenant’s lights dimming each time the neighbor’s dryer kicks on',
      'A faint scorched smell near a receptacle in a double that’s been split into flats',
      'A fuse box still feeding the original cable in a house nobody has updated',
    ],
    proseSections: [
      {
        title: 'Benefits of Rewiring a Home in Newport',
        body: 'Insulation on wire this old turns brittle and terminals slacken, and bad wiring ranks high among the causes of house fires. Pulling out those runs and adding circuits keeps anything from cooking inside the walls, and the work brings each unit up to current code. A pre-1940 house also picks up a ground at every receptacle for the first time. Landlords stop fielding upstairs complaints about dead outlets. An owner heading toward a sale gets wiring that clears a buyer’s inspection and supports the price, and there’s finally capacity for smart switches, new fixtures or a bigger appliance.',
      },
      {
        title: 'Partial or Whole-Home Rewiring in Newport',
        body: 'The scope comes from test results, not the building’s age. Re-running one apartment’s failing circuits, giving a kitchen its own lines or swapping two-slot outlets for grounded ones counts as partial work. If original cable runs through every floor, or knob-and-tube or aluminum turns up room after room, the owner sees a whole-home price next to the partial, with breakers replaced and loads spread evenly. Then the owner decides. Start by pressing reset on the GFCIs in the kitchen, bath and basement, since a tripped one can cut outlets upstairs. Fuses over healthy wiring may only call for a panel.',
      },
      {
        title: 'Permits and Living at Home During a Rewire in Newport',
        body: 'Residents almost never have to move out. In a split house we finish one unit before opening the next, and every tenant gets warning before the power is cut. The written scope lists which plaster walls and ceilings we’ll open. The City of Newport Building Department issues the electrical permit, and our office files it and schedules the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Newport Choose Us for Home Rewiring',
    whyParagraph:
      'Row houses and split doubles are routine work for our licensed electricians, who spread loads evenly between units and ground each new run. Everything meets current code, and the owner approves scope and price in writing first.',
    sharedFaqs: [
      {
        q: 'What does it cost to rewire a house in Newport?',
        a: 'You get one fixed figure once testing is done. Square footage, circuit count, how much plaster has to be opened and whether the panel needs work all move it. In a building with several units we price each unit as its own line, so an owner can phase the work across turnovers.',
      },
      {
        q: 'Can tenants stay in the building while it’s rewired in Newport?',
        a: 'Yes, in nearly every case. Crews take one unit or one room at a time and post notice ahead of each shutoff, so nobody goes a night without lights. The scope sets out the order of rooms, which helps the owner coordinate with tenants.',
      },
      {
        q: 'Why can’t I rewire part of my house myself in Newport?',
        a: 'Cable that looks dead can still be live, and the city wants a permit and an inspection. A mistake can hide a fire risk in a wall, shock the next person to touch it, fail inspection and stall an insurance claim. Licensed electricians handle grounding and load balance. Resetting a GFCI or breaker is fine to try.',
      },
    ],
  },
};
