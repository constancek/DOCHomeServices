import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const melbourne: LocationServiceCopy = {
  localParagraph:
    'In Melbourne, three of every ten houses predate 1940, and Census figures put the middle of the range at 1958. Rooms from those years got a receptacle or two, so space heaters, lamps and chargers now hang off extension cords, and you’ll still find ungrounded two-slot outlets. Electric heat warms over half the homes, which keeps those circuits busy through January. We check the receptacle, its circuit and the panel before quoting, say so if flipping a breaker solved it, and agree a set price first.',
  emergencyParagraph:
    'Phone us that day if a plate turns warm, a receptacle crackles or browns, a switch zaps your fingers, or a breaker flips back off right away. When the panel is dry and you can reach it, switch that circuit off. If smoke shows up, get everybody out and call 911. We’re usually there the same day, weekends too.',
  commonIntro: 'Older wiring in Melbourne tends to show itself in one of these four ways.',
  localFaqs: [
    {
      q: 'Can more outlets be added to a 1950s house in Melbourne?',
      a: 'Usually without much mess. We confirm the panel can carry extra circuits, then fish new cable through walls and floors from the basement or attic, cutting as few holes as we can. You see the layout and the fixed price before any drilling starts.',
    },
    {
      q: 'What does a humming light switch in Melbourne mean?',
      a: 'Most often a terminal screw has worked loose or the switch itself is worn through. Either way, the hum is current struggling across a bad contact, and that makes heat. If the plate feels warm, leave it off and let us open the box and replace whatever has failed.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repairs for older houses in Melbourne',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Melbourne',
    commonSituations: [
      'Extension cords snaking to a space heater in a room with one receptacle',
      'Two-slot outlets in a bedroom that no modern plug fits',
      'A wall switch that hums or warms its cover plate',
      'A bathroom from the 1950s with no reset-button outlet near the sink',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Melbourne',
        body: 'Current that goes into a toaster on one wire should come home on the other, and a GFCI sits in the middle counting both. Should the return come up short, the leftover is draining through something it shouldn’t, a person included, and the device shuts that outlet down quickly. It has no water sensor, though damp is how most leaks begin. The code list covers bathrooms, kitchens, garages, basements and anything outside, and most houses in Melbourne were framed decades ahead of that list, so we often protect the bath and the basement first. A USB outlet for phones and tablets is a nice extra and no more.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Melbourne',
        body: 'Before calling, walk the house with a flashlight. Push the reset on any GFCI you find in a bathroom, the basement or on an outside wall, because one tripped device can darken outlets two rooms away. At the panel, look for a handle that has flipped toward the middle, and push it fully off and back on once. Try nearby wall switches as well. If that brings power back, you’re finished. A USB outlet or smart switch makes life easier but fixes nothing. Leave alone anything warm, buzzing, browned or throwing sparks, and any breaker that will not hold. Those are ours.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Melbourne',
        body: 'In a house from 1958, the panel and the old cable decide how many outlets you can add, so we test both before quoting. Where either falls short, you’ll see Electrical Panel Replacement or Home Rewiring priced as its own line, and the call is yours. Work is done to code. If the job needs a permit and inspection, we take care of both.',
      },
    ],
    whyTitle: 'Why Homeowners in Melbourne Choose Us for Switches and Outlets',
    whyParagraph:
      'Our licensed electricians open the box, test the circuit and check the panel before naming a price. When a GFCI reset or one fresh receptacle is the whole answer, you hear it, and everything installed is grounded to code.',
    sharedFaqs: [
      {
        q: 'How do you work out a price for outlet repairs in Melbourne?',
        a: 'After testing, we write one flat number and wait for your yes. It rises with the count of receptacles and switches, with GFCI or USB versions, and with any panel or wiring work the old circuits turn out to need. Financing can spread a bigger job out.',
      },
      {
        q: 'Why does a GFCI shut off when nothing looks wrong?',
        a: 'Because it caught an imbalance you can’t see. The device compares outgoing and returning current, and even a small leak, through a worn cord, a damp outdoor box or a person, makes it cut the power. It isn’t detecting water; damp is just the commonest trigger. Repeated trips deserve a look.',
      },
      {
        q: 'Can I replace an old outlet myself in Melbourne?',
        a: 'We’d rather you didn’t. Older houses often have no ground at the box, shared neutrals or brittle insulation, and a new outlet has to suit the circuit it lands on and meet code. A licensed electrician sorts that out and tests the finished device under load.',
      },
    ],
  },
};
