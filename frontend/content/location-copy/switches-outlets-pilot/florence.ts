import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const florence: LocationServiceCopy = {
  localParagraph:
    'About half the homes in Florence are rentals, and Census figures date two in three before 1980, so our outlet work splits two ways. In the 1960s and 70s houses, it’s kitchens and bedrooms living on cords. In apartments and condos, it’s a worn plug-in that won’t grip and an owner or manager who books the repair. Either way, nothing gets quoted until the outlet, its circuit and the breaker panel have been tested; you’re told when a reset was enough, and the price is settled first.',
  emergencyParagraph:
    'In Florence, stop using an outlet that’s scorched, sparking, smoking or warm. A switch that zaps you, a fused plug and a breaker that trips again after a reset count too. Cut the circuit only if nothing nearby is wet or hot. With smoke or fire, get out and dial 911. Most of these get same-day help, weekends included.',
  commonIntro: 'Florence keeps us busy with these four:',
  localFaqs: [
    {
      q: 'Can a tenant book you directly to fix an outlet in Florence?',
      a: 'Usually the landlord or management office books us, since it’s their wiring and their approval on the price. Before reporting a dead, warm or sparking outlet, you can reset a GFCI or a tripped breaker. In managed complexes, go through the office. We fix outlets, not leases.',
    },
    {
      q: 'In Florence, why do lights across my whole house brighten and dim?',
      a: 'When the whole house surges and sags at once, the trouble is usually the service feeding it, not a single outlet. We check our side at the panel, and if the fault is upstream, the fix belongs to Duke Energy Kentucky or Owen Electric, depending on your street.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repair for rentals, condos and houses in Florence',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Florence',
    commonSituations: [
      'A rental plug-in so loose that a phone charger slides out on its own',
      'A 1970s bathroom with a plain receptacle next to the sink',
      'A space heater that knocks out the bedroom breaker on January nights',
      'Lights all over the house going bright and dim together, which points to the service rather than an outlet',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Florence',
        body: 'Inside every GFCI, a comparison runs all the time between current sent and current returned. A gap means current has wandered off, and if it’s wandering through a person, that’s a shock, so the device shuts down fast. It responds to the gap, never to water; water just creates most gaps. Code calls for these near kitchen counters and in bathrooms, garages, basements and outdoor spots. Lots of 1960s and 70s houses and older rentals in Florence still have plain outlets in a few of those places, and we convert them. USB plug-ins by a bed or a desk retire the spare charger bricks.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Florence',
        body: 'In Florence, a dead plug-in often comes back without us. Track down whichever GFCI it’s chained to, likely in a bathroom, the garage or outside, and hit reset. Open the breaker panel next and find any handle sitting crooked. Flip the wall switch by the door, too, because it may feed half that outlet. Renters can try every one of these. Putting in USB ports or a smart switch makes life easier without fixing a fault. Warmth, buzzing, scorch marks, sparks or a breaker that won’t stay on are past the point of a homeowner or tenant fix.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Florence',
        body: 'In a 1960s or 70s house, the breaker panel can be packed full and the original runs can be close to their limit, so we test both before any outlet is added. When that’s the case, we write it up and price Electrical Panel Replacement or Home Rewiring next to the outlet job, and the owner chooses. The finished work meets code, and wherever a permit applies, we file it and set up the inspection.',
      },
    ],
    whyTitle: 'Why Residents and Landlords in Florence Choose Us for Switches and Outlets',
    whyParagraph:
      'In Florence, every job opens with a licensed electrician testing the plug-in, its circuit and the panel. If a reset solves it, you hear that. A new device or more is wired, grounded to code and priced before anyone starts.',
    sharedFaqs: [
      {
        q: 'How do you come up with a price for outlet work in Florence?',
        a: 'We test before quoting, then give a flat rate the owner signs off on before work starts. What sets it is how many devices, whether you want GFCI or USB versions, and whether the wiring or panel needs help. Financing is there for bigger jobs.',
      },
      {
        q: 'What does a GFCI outlet watch for?',
        a: 'It watches for a mismatch between the current it sends out and the current that returns. A mismatch means some is leaking, maybe through a person, and the GFCI shuts off fast. Wet hands and floors make those leaks more likely, but water itself isn’t what trips it.',
      },
      {
        q: 'Why shouldn’t I replace a worn outlet on my own?',
        a: 'The part is cheap, but what matters is the circuit behind it, whether the box is grounded and whether the work meets code. A miswired outlet can work fine and still shock someone or overheat. A licensed electrician checks every connection before the cover plate goes back on.',
      },
    ],
  },
};
