import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const overTheRhine: LocationServiceCopy = {
  localParagraph:
    'In Over-the-Rhine, nearly all our switch and outlet work is in brick walk-ups and rowhouses, and Census figures put seven in ten units there before 1940. About the same share is rented, so the building owner usually books us. Older flats tend to have too few outlets per room and some ungrounded ones, while rehabbed units need GFCI protection in kitchens and baths. We test the outlet, circuit and panel first, tell you if a reset was the fix, and agree a price before work.',
  emergencyParagraph:
    'Phone us the same day if an outlet runs hot, shows soot, throws sparks or gives off a burning odor, or if a switch jolts you, a plug has melted or a breaker flips straight back off. Kill that circuit only if nothing near it is wet. If smoke or flames appear, clear the flat and dial 911. Weekends too.',
  commonIntro:
    'In Over-the-Rhine, these four account for most of what owners and tenants ask us to fix:',
  localFaqs: [
    {
      q: 'I rent a flat in Over-the-Rhine and an outlet sparked. Who calls you?',
      a: 'Unplug it, leave it alone and tell the owner or manager by text or email so there’s a record. Under ORC 5321.04 (A)(4), Ohio landlords must keep the electrical fixtures they supply safe and working, so the owner arranges our visit. Resetting a GFCI is still fine. Our job is the outlet; the lease is between you two.',
    },
    {
      q: 'Can you add outlets in a masonry walk-up in Over-the-Rhine?',
      a: 'We can. Thick brick and plaster mean we plan each cable route before cutting anything, using closets, floor cavities and surface raceway where a wall can’t be fished. We work around tenants in occupied buildings and test the circuit first, so the new outlets don’t overload what’s there.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repair for walk-ups and rowhouses in Over-the-Rhine',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Over-the-Rhine',
    commonSituations: [
      'A walk-up flat with one outlet per room and power strips daisy-chained across the floor',
      'A rehabbed kitchen or bath that still lacks GFCI protection',
      'Worn outlets in an older unit that won’t grip a plug',
      'A switch in a shared stairwell that flickers the lights or stops responding',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Over-the-Rhine',
        body: 'Every GFCI outlet checks that the current flowing out matches the current flowing back. A gap means some is leaking, possibly through a person, and the outlet kills the power quickly. It isn’t a moisture detector; wet hands and wet floors are just the usual cause of that leak. Code requires GFCIs in kitchens, bathrooms, garages, basements and outdoors. Plenty of flats in Over-the-Rhine were last wired long before those rules, and shared basements in older buildings are a common gap. In renovated units, owners often add USB outlets at the counter and bedside, which is a convenience tenants notice.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Over-the-Rhine',
        body: 'If an outlet goes dead, check for a GFCI elsewhere in the unit or building, in a bathroom, basement or on an outside wall, and press reset. One GFCI can cover several outlets. Then look at the breaker panel for a tripped handle, and flip nearby wall switches, since some outlets run off one. Tenants can do all of that. A USB outlet or a smart switch adds convenience; it doesn’t repair anything. Anything warm, buzzing, scorched or sparking, or a breaker that won’t stay reset, goes to an electrician, booked through the landlord.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Over-the-Rhine',
        body: 'In old buildings we test the panel and the wiring before adding any outlets. Where a unit’s panel lacks room or the wiring is too dated to extend, we say so and price that alongside the outlet work, with Electrical Panel Replacement and Home Rewiring as the options. The owner chooses. Work is done to code, and IBI inspects electrical work for the city where a permit is required.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Over-the-Rhine Choose Us for Switches and Outlets',
    whyParagraph:
      'Our licensed electricians measure the outlet, its circuit and the building’s panel before an owner sees a number. A reset or a lone replacement gets called what it is. Grounding and code wiring come standard, after sign-off on cost.',
    sharedFaqs: [
      {
        q: 'How do you price outlet work in Over-the-Rhine?',
        a: 'Owners get a flat figure after testing, signed off before anyone opens a box. Three things move it, namely device count, GFCI or USB versus standard, and any wiring or panel repair needed to carry the load. A landlord fixing several flats in one go can spread the cost through financing.',
      },
      {
        q: 'How does a GFCI outlet protect people?',
        a: 'It compares the current heading out with the current coming home. If they differ, electricity is leaking out of the circuit, maybe through someone, and the GFCI cuts power in a fraction of a moment. Water is the usual reason for the leak, but the device only senses the imbalance.',
      },
      {
        q: 'Why can’t a handy owner just replace outlets in old buildings?',
        a: 'Older buildings often have ungrounded boxes, shared circuits between rooms and brittle insulation. Putting a modern outlet on that without testing can hide a fault rather than fix it. A licensed electrician checks the circuit and grounding and installs to code.',
      },
    ],
  },
};
