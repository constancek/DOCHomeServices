import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millville: LocationServiceCopy = {
  localParagraph:
    'In Millville, over half the houses predate 1960, according to Census figures. Back then a bedroom got one receptacle, maybe two, which explains the extension cords tucked under rugs and the ungrounded outlets hanging on in hallways. Indian Creek put water into basements across the village in March 2026, and an outlet that sat in it needs replacing. Our electrician tests the outlet, then the wire feeding it, then the panel. If flipping a breaker was the whole fix, you hear that, and the price is agreed before work starts.',
  emergencyParagraph:
    'In Millville, a few outlet faults won’t keep. Think of brown marks on a faceplate, a plug that softened in the wall, a tingle off a switch plate, or a breaker that refuses to hold. Switch that circuit off only if the floor is dry. With smoke, go outdoors and phone 911. We usually come that day, weekends too.',
  commonIntro: 'Houses in Millville tend to show their age through one of these four.',
  localFaqs: [
    {
      q: 'Do basement outlets need replacing after the Indian Creek flood in Millville?',
      a: 'If they were under water, yes. A receptacle or switch that sat in floodwater gets swapped for a new one, not dried and put back in service, and its circuit is tested before power goes back on. The mayor said almost every basement in the village took water, so keep those breakers off until we’ve checked.',
    },
    {
      q: 'Is it possible to ground the old outlets in my house in Millville?',
      a: 'Often it is. We trace what’s behind each two-slot receptacle and look for an existing ground or a practical way to run one. When the original cable can’t give you a proper ground, we say so and quote Home Rewiring for those rooms, and you decide.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch work for older houses in Millville',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Millville',
    commonSituations: [
      'A garage or basement with no reset-button outlet anywhere',
      'A two-slot bedroom outlet that refuses a three-prong plug',
      'A breaker that trips when the space heater and the vacuum run together',
      'A worn receptacle that lets plugs slide out of the wall',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Millville',
        body: 'A GFCI does its job by comparing two numbers. Current that leaves along one wire should return along the other, and a shortfall means some is escaping, possibly through a person on a damp basement floor, so it shuts the outlet off before that current can do much harm. Water is not what it senses, but water causes most of those escapes. Code requires GFCIs in bathrooms, kitchens, garages, basements and outdoors, and houses in Millville from before 1960 were built well ahead of that rule. USB outlets at a counter or nightstand are handy for phones and tablets, and that’s all they are.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Millville',
        body: 'In a village of older houses like Millville, a dead receptacle often traces back to a reset button somewhere else. Push the reset on each GFCI you can find, bathroom, basement, garage and outside walls included. Then open the panel door and see whether any breaker handle has flipped. Older living rooms often put a lamp receptacle on the wall switch, so flip that too. If the lights return, that’s the whole job. Swapping in USB ports or a smart switch is about convenience; neither one repairs anything. Call us instead for anything warm, humming, singed or spitting sparks, or a breaker that trips the second time you reset it.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Millville',
        body: 'Circuits laid out in the 1950s were sized for far lighter loads, so adding outlets in Millville means a test of the panel and the old cable. If capacity is short or the wire is worn out, you’ll see Electrical Panel Replacement or Home Rewiring priced as an option next to the outlet work, and the decision stays with you. Every piece goes in to code, and a required permit is ours to pull, inspection included.',
      },
    ],
    whyTitle: 'Why Homeowners in Millville Choose Us for Switches and Outlets',
    whyParagraph:
      'The electrician at your door in Millville is licensed, tests before talking money, admits when a reset or one new receptacle will do, and grounds every device to code. You agree the price before work begins.',
    sharedFaqs: [
      {
        q: 'How are outlet and switch repairs priced in Millville?',
        a: 'You get a single flat rate, worked out once we’ve tested and okayed by you before work. Many devices cost more than few, GFCI and USB receptacles cost more than plain ones, and any old wiring or panel work adds its own amount. No overtime fees apply, and financing is available.',
      },
      {
        q: 'How does a GFCI protect a damp basement in Millville?',
        a: 'It measures the current flowing out against what comes back. A gap means some current has strayed, maybe through someone standing on a wet floor, and the GFCI cuts power quickly. It has no sense of water as such; water is simply the commonest cause of stray current.',
      },
      {
        q: 'Is it worth hiring an electrician just to change an outlet?',
        a: 'Yes, because an outlet is only as safe as the circuit, the ground and the connections behind it. In a house from the 1950s those are often the real problem, not the receptacle itself. A licensed electrician checks them, installs the device to code, and tests it under load before leaving.',
      },
    ],
  },
};
