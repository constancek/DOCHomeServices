import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'Houses in Northside are mostly older than the appliances plugged into them. By Census figures, the typical home off Hamilton Avenue dates to 1938, and roughly every second dwelling stands alone while the others are two-families or flats. A parlor of that vintage may own one lonely receptacle, so cords wander behind sofas and some ungrounded devices linger. Our electrician probes that device, the wiring behind it and the breaker box before quoting, admits it when a simple reset was enough, and locks in the price.',
  emergencyParagraph:
    'Phone right away about a warm faceplate, a charred or crackling receptacle, a whiff of melting plastic, a jolt off a lamp, a fused plug, or a breaker refusing to stay up. Kill power to that line only with dry hands. Flames or smoke mean get outside and dial 911. We’re out the same day on most, weekends too.',
  commonIntro:
    'Most of our calls in Northside, from owners and landlords alike, come down to one of these four:',
  localFaqs: [
    {
      q: 'Can you add grounded outlets to an old two-family in Northside?',
      a: 'Usually, yes. Two-families here often share a basement and a panel arrangement nobody has looked at in decades, so we trace which circuit feeds which unit before we touch a box. Where a ground wire can’t be reached, a GFCI protects the outlet and we label it the way code asks.',
    },
    {
      q: 'Why does the hallway light switch buzz in my house in Northside?',
      a: 'That hum points to a slack terminal, a switch near the end of its life, or a dimmer paired with bulbs it can’t handle. A slack terminal warms a little more each time, so don’t ignore it. We pull the switch, tighten or renew what’s failing and run the rest of that hallway circuit through a tester.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch work for older houses in Northside',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Northside',
    commonSituations: [
      'A front room with one outlet and an extension cord running behind the couch',
      'A hallway switch that buzzes or makes the ceiling light flicker',
      'A basement laundry corner with no GFCI protection near the washer',
      'Worn receptacles in a rental unit that let plugs drop out of the wall',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Northside',
        body: 'Picture a GFCI as a turnstile counter for electricity. It tallies what flows out along the hot conductor and what flows home on the neutral, and if the two counts disagree, some is escaping, maybe through a hand on a hair dryer, so it trips in an instant. Moisture isn’t what it reads, even though damp is behind most trips. Code puts GFCIs in kitchens, bathrooms, garages, basements and outdoors. Lots of Northside’s pre-war baths and basement washer corners were finished generations before anyone wrote that rule. USB receptacles beside a bed or on a kitchen backsplash are a modest comfort, nothing more.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Northside',
        body: 'Three free checks come first. Somewhere a GFCI, maybe in the bath, the cellar, the garage or out by the porch, may have popped; push its button back in, since that single device can silence wall plugs a room or two off. Then visit the breaker box and look for a lever sitting crooked in its row. Finally, flip the light switches, because older rooms in this neighborhood often wired a lamp plug to one. Swapping in USB ports or a smart switch is a treat, not a cure. Heat, a hum, scorch marks, sparks, or a breaker that keeps dropping after you reset it belong to an electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Northside',
        body: 'More wall plugs means first proving that the breaker box and the cable can carry them. If the box is packed full or the old cable shouldn’t be stretched further, you get that in writing, priced separately next to the plug work, and our Electrical Panel Replacement or Home Rewiring service picks it up. Nothing proceeds without your say. Work follows code, and IBI, which reviews electrical permits for the city, inspects it where a permit applies.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Northside Choose Us for Switches and Outlets',
    whyParagraph:
      'Our licensed electricians probe the device, its line and your breaker box before any talk of money. If a reset or one swap solves it, we say so. Everything is grounded and wired to code at a figure you signed.',
    sharedFaqs: [
      {
        q: 'How do you price outlet and switch work in Northside?',
        a: 'Testing comes before any number. You then get one flat rate to approve, shaped by how many receptacles or switches are involved, any GFCI or USB upgrades, and whatever cable or panel repair the house needs to carry them. Bigger jobs can be financed.',
      },
      {
        q: 'How does a GFCI outlet know to shut off?',
        a: 'It weighs outgoing current against returning current, nonstop. A shortfall means leakage, perhaps through a person, and it trips at once. It doesn’t notice water as such, which is why a frayed cord can set it off in a bone-dry room.',
      },
      {
        q: 'Can I replace an outlet myself in Northside?',
        a: 'Unscrewing the old receptacle is the easy bit. In a house from the 1930s the box may have no ground, the insulation can crumble, and the new device must suit that circuit and that room under code. A licensed electrician sorts out all three.',
      },
    ],
  },
};
