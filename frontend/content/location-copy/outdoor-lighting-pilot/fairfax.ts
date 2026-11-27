import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfax: LocationServiceCopy = {
  localParagraph:
    'Lighting the outside of a house in Fairfax tends to begin with an old porch and end at a garage behind it. Census figures put the median house in this small village at 1942, and close to half predate 1940, so porch boxes often hang on old wiring. Fixtures bolted to the siding are one job and low-voltage lights along the walk are another. Before a spade touches the lawn, we pace the lot, meter the circuit and write down the price.',
  commonIntro:
    'Between Wooster Pike and Little Duck Creek, the requests we get from detached houses in Fairfax tend to look like this.',
  localFaqs: [
    {
      q: 'Can yard lights go in the low ground of Lower Fairfax that floods?',
      a: 'They can, if the plan respects the creek. Heavy rain has sent Little Duck Creek into the streets of Lower Fairfax, so the transformer goes high on the back wall, splices stay on the uphill side of the yard and each fixture carries a wet rating. After any flood, keep soaked lights switched off until we have tested them.',
    },
    {
      q: 'My rented house in Fairfax has a dead porch light. Who fixes it?',
      a: 'Your landlord. Under ORC 5321.04 (A)(4), an Ohio landlord has to keep supplied electrical fixtures in good and safe working order, so tell them in writing. Changing the bulb is fine for you to do. Anything new on the house or in the yard waits for the owner to approve and book. Leases are not our department.',
    },
  ],
  overrides: {
    ctaLine: 'Porch, walk and garage-path lighting for houses in Fairfax',
    band1Heading: 'Signs It’s Time for Outdoor Lighting in Fairfax',
    commonSituations: [
      'A porch lantern on a 1940s house whose canopy has rusted and whose bulb blinks in the wind',
      'Front steps from the sidewalk that guests feel for with their feet after dusk',
      'A walk from a rear garage to the kitchen door with not one light along it',
      'A patio slab poured years ago that turns into storage once the sun sets',
    ],
    proseSections: [
      {
        title: 'Outdoor Lighting Types and Fixtures in Fairfax',
        body: 'Two kinds of fixture do the work on a house in Fairfax. Lights screwed to the house itself, meaning the porch lantern, a side-door sconce and a motion flood over the back stoop, run on ordinary household voltage. Out on the lawn, a 12-volt transformer feeds the small stuff, such as walk lights, a step light or two and an uplight under the tree out front. Rain kills indoor-rated fittings within a couple of seasons, so everything we mount carries a wet-location label. We fit LED throughout to keep the load small. When a lantern goes dark, swap the bulb, flip the switch twice and look at the breaker.',
      },
      {
        title: 'Outdoor Lighting Design and Placement in Fairfax',
        body: 'Lots in the older part of the village often run narrow, so a plan in Fairfax usually follows one line from the curb, up the porch steps, along the side of the house and back to the garage. We pace that line with you and note where feet land in the dark. Fixtures then go where their pools of light just meet, so nobody walks from bright into black, and nothing shines into the bedroom next door. The steps get safer, a lit side passage helps deter unwanted activity, and an old facade looks its age in a good way after dusk.',
      },
      {
        title: 'Outdoor Wiring and Circuits in Fairfax',
        body: 'NOAA counts about 100 nights a year at or below freezing here, and each thaw works water into weak joints. Our outdoor runs use cable rated for burial, gel-filled or sealed splices and GFCI protection. Any trench, any new circuit and any switch added inside the house is on the quote before work begins. The village wants a Zoning Certificate from its Zoning Officer for every project first, and we file the electrical permit where the job requires one.',
      },
    ],
    whyTitle: 'Why Homeowners in Fairfax Choose Us for Outdoor Lighting',
    whyParagraph:
      'From porch lantern to garage path, a licensed electrician lays out each light with you, picks fixtures built for wet weather, wires them to code for freeze-thaw winters and fixes the price on paper first.',
    sharedFaqs: [
      {
        q: 'What will outdoor lighting cost me in Fairfax?',
        a: 'The quote climbs with each fixture and with the kind you pick, house-mounted line-voltage or yard lights on low voltage. Distance from the power source matters, and so does any cable we bury or circuit we add at the panel. You see one flat figure before we start, and qualifying homeowners can finance it.',
      },
      {
        q: 'Can my outdoor lights in Fairfax be put in the same day?',
        a: 'Most projects are done within one day. Swapping a porch lantern and setting a short row of walk lights on a narrow lot is a single visit. Trenching the whole length of a deep backyard to a rear garage, plus a fresh circuit, can run longer, and we say so in writing.',
      },
      {
        q: 'Why use low-voltage lights in the yard but not on the house?',
        a: 'Yard lights such as walk lights, step lights, well lights and tree uplights point down at paths and planting, so they run off a transformer at low voltage, which costs less to run and is gentler to be around. Lanterns and security floods fastened to the house stay on line voltage.',
      },
    ],
  },
};
