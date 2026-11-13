import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfax: LocationServiceCopy = {
  localParagraph:
    'Fairfax is a village of detached houses, and nearly half of them predate 1940, by Census figures. Plenty still carry a modest original service, so the first question for an EV is whether a 240-volt line fits at all. Houses from the 1940s and 1950s tend to have a panel where every slot is taken. We start inside that panel, with a load calculation. If your car’s Level 1 cord is enough, we’ll say so. If not, you get a firm price before we pull a single wire.',
  emergencyParagraph:
    'Scorch marks on the plug, a faceplate gone soft, or an outlet you can’t keep a hand on means the car stops charging. Reach for that breaker only when your feet are dry and the panel isn’t warm. If smoke or flame turns up, walk out to the sidewalk and phone 911. Same-day visits are usual, weekends too.',
  commonIntro:
    'For owners of older houses in Fairfax, these four reasons come up most.',
  localFaqs: [
    {
      q: 'Is a house built before 1940 able to take a Level 2 charger in Fairfax?',
      a: 'It depends on what the house has been through. A few still run the service they were built with, and plenty were upgraded long ago. Our load calculation sorts out which you have. With headroom, the car gets its own 240-volt line. Without it, we quote a load manager alongside a bigger service.',
    },
    {
      q: 'Our basement has flooded before. Where should the charger go in Lower Fairfax?',
      a: 'Up and out of the low spots. We mount the charger by the spot where you park, and an outdoor-rated unit is fine on an outside wall once it’s mounted properly and protected from weather. Any outlet or charger that has sat in water stays unplugged until we’ve tested it.',
    },
  ],
  overrides: {
    ctaLine: 'Charger installs for prewar and postwar houses in Fairfax',
    band1Heading: 'When a Home in Fairfax Needs an EV Charger',
    commonSituations: [
      'An EV on order and a 1930s house without a free circuit for it',
      'A commute too long for the cord in the trunk to cover overnight',
      'A 1940s or 1950s panel where every slot already holds a breaker',
      'A kitchen breaker dropping whenever the car is plugged in nearby',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Fairfax',
        body: 'Level 2 at home is the difference between topping up and filling up. Range flows back far quicker than from a kitchen outlet, so an evening plugged in covers much more driving and the car is tethered for less of the night. Park after dinner, and the battery is full by breakfast with no circling for a public plug. Electricity from your own meter usually undercuts what stations charge, and some utilities bill late-night use lower. In houses as old as these, the quiet win is a breaker, wire and ground matched to the load so nothing runs hot inside a wall. Buyers have begun asking about chargers.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Fairfax',
        body: 'Plenty of drivers here never need us. A car doing short local trips that rests beside a sound outlet overnight can live on the cord it shipped with, trickling along at 120 volts. Level 2 earns its keep with a long commute, heavy mileage or a second EV, and it wants a 240-volt circuit nobody else touches. Before you ring, look at two things. Find out what else hangs on that outlet’s circuit, and never let the cord near an extension cord or a receptacle that’s cracked, loose or warm. Street parking alone rarely makes a home charger worth it.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Fairfax',
        body: 'A deed date says little about a panel, so we measure. The arithmetic shows what’s left over. Enough headroom earns a circuit for the car alone, typically on a 40 to 60 amp breaker depending on the unit. A shortfall earns two quotes, a load manager versus more panel or service, and the pick is yours. The village wants its Zoning Certificate ahead of any work, and that paperwork is ours along with the permit and inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Fairfax Choose Us for EV Charger Installation',
    whyParagraph:
      'We open the panel and run the numbers before anyone mentions a charger model. You hear plainly whether it’s an upgrade, a load manager or neither, and a licensed electrician wires it to code for the figure you agreed.',
    sharedFaqs: [
      {
        q: 'How is a charger installation priced in Fairfax?',
        a: 'Expect one flat figure after we’ve had a look at the panel. It shifts with the charger you settle on, the length of the run to your parking spot, and anything the panel itself needs. Financing can spread it out, and the work waits for your yes.',
      },
      {
        q: 'How long will an EV charger installation take in Fairfax?',
        a: 'Plan for several hours on a typical job. Panel work stretches it, and so does fishing a long wire through plaster in an older house. You’ll know beforehand when the electricity goes off and when the car can plug in again.',
      },
      {
        q: 'Can I wire a Level 2 charger myself in Fairfax?',
        a: 'We’d talk you out of it. Matching breaker and wire to both the charger and the panel’s leftover capacity takes a real load calculation, and a permit and an inspection follow. Get the sizing wrong and wiring buried in a wall can overheat, which is why a licensed electrician belongs on this.',
      },
    ],
  },
};
