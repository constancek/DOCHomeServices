import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const daytonKy: LocationServiceCopy = {
  localParagraph:
    'By Census figures, the median house in Dayton was built in 1943, and close to half predate 1940. A bedroom from those years may have one or two receptacles, so cords snake under rugs, strips get daisy-chained, and some outlets still take two prongs. The houses built since 2000 bring different requests, such as a GFCI on the deck or USB ports by the island. We meter from receptacle to panel first, call it honestly when a reset or a breaker settled it, and set a price before work starts.',
  emergencyParagraph:
    'Call the same day if a receptacle sparks, scorches or gives off a burning smell, if a switch plate shocks anyone, or if a breaker trips the instant it’s reset. Shut that circuit down only when your hands are dry. If smoke shows up, get everyone outside and dial 911. We’re usually at the door that day, weekends included.',
  commonIntro: 'In older houses and newer builds in Dayton, these four are the usual calls:',
  localFaqs: [
    {
      q: 'Can two-prong outlets in an old house in Dayton be replaced with three-prong ones?',
      a: 'Only properly. A three-prong outlet needs a ground behind it, and an old box may not have one. We test each box; where there’s no ground, the options are running one or fitting GFCI protection that code accepts in its place, labeled to match. We price both and you choose.',
    },
    {
      q: 'I rent a house in Dayton, and an outlet stopped working. Who fixes it?',
      a: 'Tell your landlord or property manager, who arranges the repair. You can still check for a tripped GFCI or a breaker that’s flipped, since that’s often the whole story. If the outlet is warm, scorched or sparking, stop using it and say so in your report. We fix outlets, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and outlet repair for older and newer houses in Dayton',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Dayton',
    commonSituations: [
      'A bedroom in a pre-1940 house with one outlet and a cord under the rug',
      'Old ungrounded receptacles that refuse a three-prong plug',
      'An outlet with scorch marks behind a space heater',
      'A switch that buzzes and makes the hall light flicker',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Dayton',
        body: 'The kitchens and baths in pre-1940 houses in Dayton were wired long before anyone thought about ground-fault protection. A GFCI watches two things, the current sent out and the current returning, and switches the outlet off quickly when they disagree, because the missing current may be flowing through somebody. It isn’t sensing water, though wet hands and wet floors are why it trips most. Code now expects that protection in a kitchen, any bathroom, the basement, the garage and outside. A basement laundry or a back-porch outlet is often where we start. USB outlets suit a newer kitchen or a bedroom full of chargers.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Dayton',
        body: 'A dead outlet in Dayton may simply be on a GFCI that tripped in a bathroom, the basement or outside, so hunt for that reset button first. After that, check the panel for a breaker that’s off. In older houses one outlet is sometimes wired to a wall switch, so flip any switch nearby. When one of those brings it back, you can skip the service call. A USB outlet or smart switch is nice to have, but it doesn’t fix a fault. An outlet or switch that runs warm, buzzes, shows scorching or sparks, or a breaker that won’t stay reset, needs an electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Dayton',
        body: 'In Dayton, a pre-1940 house asking for more receptacles gets its panel metered and its old cable traced before we commit to anything. No free breaker slots, or cable we wouldn’t load further, shows up as Electrical Panel Replacement or Home Rewiring on the estimate beside the outlet price, and you decide which goes ahead. It’s all installed to code. When a permit applies, we take care of it and set up the inspection.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Dayton Choose Us for Switches and Outlets',
    whyParagraph:
      'A licensed electrician meters your receptacle, follows the circuit and looks over the panel before pricing. If one new device or a reset handles it, we’ll say so. Work is grounded, to code and at your approved price.',
    sharedFaqs: [
      {
        q: 'What decides the price of outlet or switch work in Dayton?',
        a: 'Before any number, we test. Then you get a single flat price, and work waits for your yes. More devices, GFCI or USB units, and repairs to old cable or the panel each push it up. For a larger job in an older house, financing is offered.',
      },
      {
        q: 'How can a GFCI outlet tell that someone is getting a shock?',
        a: 'It can’t see you, but it counts current. What goes out on one wire should come back on the other, and when some is missing it has found another path, possibly a person. The outlet cuts power quickly at that point. It responds to the missing current, not to water.',
      },
      {
        q: 'Why should a licensed electrician install a new outlet in an older house?',
        a: 'In an older house the device is rarely the hard part. The question is whether the box is grounded, whether the circuit can carry what you’ll plug in, and whether the wiring meets code. An electrician tests those before installing, which keeps the house and your devices safe.',
      },
    ],
  },
};
