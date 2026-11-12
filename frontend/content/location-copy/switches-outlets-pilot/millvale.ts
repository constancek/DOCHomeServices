import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'Around a third of Millvale’s residents live in public housing, 1950s townhomes that the Cincinnati Metropolitan Housing Authority has renovated, and Census figures show most of the remaining homes are rented. Townhomes wired in that era assumed a few lamps, not phones and microwaves, so strips and cords cover the gap. Residents tell management, and management books us. Our electrician tests the receptacle, its circuit and the panel, says when a GFCI reset or a breaker was the whole fix, and the owner signs off on the price beforehand.',
  emergencyParagraph:
    'A receptacle that’s hot, browned or sparking, a switch plate that gave someone a shock, or a breaker that won’t stay on after a reset needs reporting to management right away, and nobody should keep using it. If there’s smoke or fire, get everyone out and call 911. Managers get same-day visits on most calls, weekends too.',
  commonIntro: 'In Millvale, these four account for most outlet and switch calls.',
  localFaqs: [
    {
      q: 'Can I hire you directly if I live in public housing in Millvale?',
      a: 'No. In public housing, the housing authority or its manager arranges electrical repairs, so report a dead, warm or sparking outlet to the management office. You can still press reset on a GFCI in your unit. When the manager books us, we test the outlet and repair it to code.',
    },
    {
      q: 'Who has to fix a broken outlet in a rented house in Millvale?',
      a: 'That’s on the landlord. Ohio’s ORC 5321.04 (A)(4) says landlords must keep the electrical fixtures they supply in good and safe working order, so report it and let the owner schedule the repair. We fix outlets, not leases, and we explain what we found to tenant and owner alike.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repairs for townhomes and apartments in Millvale',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Millvale',
    commonSituations: [
      'A townhome bedroom gone dark because the bathroom GFCI tripped',
      'Strips chained behind the TV in a living room with two receptacles',
      'A kitchen receptacle that spits a spark when the kettle plugs in',
      'A light switch that crackles, or clicks without turning anything on',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Millvale',
        body: 'In a kitchen or bathroom in Millvale, the receptacle with test and reset buttons is a GFCI. It shuts off when the current leaving it and the current returning stop agreeing, because the missing part may be travelling through somebody touching an appliance. Water doesn’t set it off on its own, though water is behind most leaks. Code wants this protection in bathrooms, kitchens, garages, basements and outside, and a renovation is the natural moment to bring an older unit’s kitchen and bath up to it. USB outlets beside beds and counters are a courtesy owners can add so residents stop hunting for plug-in chargers.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Millvale',
        body: 'Before a work order goes in, residents can try three things. Press reset on each GFCI in the unit, because the one by the bathroom sink often feeds bedrooms too. If the unit’s breaker box is yours to open, look for a tripped handle and reset it once. Then try the wall switch nearest the dead receptacle. Power coming back means no work order is needed. A smart switch or USB outlet is a nice extra, not a repair. Anything warm, buzzing, blackened or sparking, and any breaker that trips again, goes to management that same day.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Millvale',
        body: 'When an owner or manager wants receptacles added in Millvale, our first step is testing the panel and the wiring that would supply them. If the panel is short of capacity or the cable is outdated, the estimate shows Electrical Panel Replacement or Home Rewiring as separate items, and the owner decides. The work follows code. In Cincinnati, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits, and we file with them whenever a permit applies.',
      },
    ],
    whyTitle: 'Why Residents and Property Managers in Millvale Choose Us for Switches and Outlets',
    whyParagraph:
      'Managers get a licensed electrician who pins down the fault first, owns up when a reset or one new receptacle covers it, and grounds each device to code. Residents get their power back, and the price is agreed beforehand.',
    sharedFaqs: [
      {
        q: 'How is outlet repair priced for a unit in Millvale?',
        a: 'Once we’ve tested, the owner or manager receives a single flat rate to approve. It reflects the number of devices, whether they’re GFCI or USB, and whether the unit’s wiring or panel needs attention first. Nothing starts until it’s approved, and financing is offered.',
      },
      {
        q: 'Why does a GFCI outlet cut the power so suddenly?',
        a: 'Because it has detected a leak, and speed is the whole point. It weighs current leaving the receptacle against current returning, and any mismatch means some is taking another path, perhaps through a person. It never senses water. Water is simply the most frequent cause.',
      },
      {
        q: 'Why shouldn’t residents swap outlets themselves in Millvale?',
        a: 'Apart from the lease, a safe outlet needs the right circuit, a working ground and connections made to code, and a wrong connection can look fine until it shocks someone. A licensed electrician installs and tests each device under load, and in public housing the work has to go through management anyway.',
      },
    ],
  },
};
