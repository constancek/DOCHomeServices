import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Almost every household in Winton Hills rents. Most homes are CMHA public housing in Winton Terrace and Findlater Gardens, where outlet and switch repairs go through a work order with management. The Census median for buildings here is 1955, and rooms wired that long ago tend to have fewer outlets than tenants use now. For the private houses and two-family buildings around them, our electrician checks the receptacle, its circuit and the panel, says so when a reset is enough, and agrees a price with the owner beforehand.',
  emergencyParagraph:
    'A receptacle or switch that’s hot, sparking or smoking, a burning smell, a shock off a plate, or a breaker that drops after a reset is an emergency in Winton Hills. Stop using that outlet and report it to management. If there’s smoke or fire, get out and call 911. Owners get same day on most calls, weekends included.',
  commonIntro: 'In the private houses and two-family buildings of Winton Hills, these four come up most.',
  localFaqs: [
    {
      q: 'As a tenant in Winton Terrace, should I call you about a broken outlet?',
      a: 'No, and you shouldn’t need to. Repairs in CMHA housing run through work orders to the housing authority or its property manager. Put in a work order for a dead, warm or sparking outlet, and mark anything hot or smoking as an emergency. Pressing reset on a GFCI or a tripped breaker is still fine.',
    },
    {
      q: 'What do landlords owe tenants on outlets in Winton Hills?',
      a: 'Ohio’s ORC 5321.04 (A)(4) puts the upkeep of supplied electrical fixtures on the landlord. For a privately owned two-family or house, the owner books the repair once a tenant reports it. We fix outlets for owners and managers, not leases, and we work around the people living there.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch work for property owners in Winton Hills',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Winton Hills',
    commonSituations: [
      'A brick two-family where each flat has one or two outlets per room',
      'A basement laundry outlet with no GFCI protection',
      'Tenants running space heaters until a breaker trips',
      'Worn outlets that won’t hold a plug after a long line of tenants',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Winton Hills',
        body: 'Ground-fault outlets keep track of current in both directions. What leaves for the kettle should come back from it, and if part goes missing, it may be passing through a resident at the sink, so the GFCI cuts power at once. It isn’t sensing the water itself; wet hands and floors are simply how current most often gets loose. Code asks for this protection at kitchen counters, in bathrooms and basements, in garages and outside. Across the older rentals of Winton Hills, laundry basements and kitchens untouched for decades get them first. Owners also add USB outlets in bedrooms so tenants can charge phones without adapters.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Winton Hills',
        body: 'A tenant has a few things to try before reporting a dead outlet. Every GFCI in the kitchen, bath or basement has a reset button worth pushing, since one of them can cover outlets in other rooms. Where the breaker panel is inside your unit, look for a tripped breaker and reset it once. A wall switch may also be what controls that outlet. A USB outlet or smart switch would be a convenience, not a repair, and that’s for the owner to decide. Warmth, buzzing, scorch marks or sparks, or a breaker that trips again, go to management or the owner, who books the electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Winton Hills',
        body: 'Before quoting more outlets for a building in Winton Hills, we test its panel and wiring. Houses and two-families from the 1940s and 50s often need more than new devices, so a short panel or outdated wiring appears as Electrical Panel Replacement or Home Rewiring on the same quote, and the owner chooses. Inspection Bureau, Inc. inspects electrical work for the city, and we book that inspection where a permit applies.',
      },
    ],
    whyTitle: 'Why Owners and Landlords in Winton Hills Choose Us for Switches and Outlets',
    whyParagraph:
      'Owners get a licensed electrician who checks the receptacle, its circuit and the panel first, then says when a reset is enough. Each device is wired and grounded to code, the price is set beforehand, and visits fit around tenants.',
    sharedFaqs: [
      {
        q: 'What does outlet work on a rental cost in Winton Hills?',
        a: 'After testing, the owner signs off on one flat rate before work starts. Outlet and switch count moves it, so does choosing GFCI or USB, and so does any wiring or panel work the building needs. Overtime fees never apply, and financing can cover larger jobs.',
      },
      {
        q: 'Why does code want GFCI protection in basements and kitchens?',
        a: 'Because those are the places current most easily finds a way through a person. A GFCI compares outgoing and returning current, and if the two differ, it opens the circuit fast. Water as such doesn’t set it off, only the leak that water so often causes.',
      },
      {
        q: 'Should a landlord swap outlets in Winton Hills without an electrician?',
        a: 'We wouldn’t advise it. A rental outlet has to be wired to the right circuit, grounded or protected properly, and installed to code, and the tenant lives with the result. A licensed electrician tests all of that before leaving, so a loose or ungrounded connection doesn’t become the owner’s problem later.',
      },
    ],
  },
};
