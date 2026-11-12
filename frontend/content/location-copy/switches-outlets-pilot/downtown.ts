import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Most homes in Downtown Cincinnati are apartments and condos in big buildings, and Census figures show nearly nine in ten are rented. Buildings from before 1940 can have few outlets per room and older wiring behind them, while buildings finished since 2010 tend to call for USB outlets, added GFCI protection or a new circuit in a condo. Tenants report problems to management, who books us. Our electrician meters the receptacle and panel first, says so when a reset or breaker did the job, and prices it before work.',
  emergencyParagraph:
    'Building management needs to hear about a receptacle that’s hot, sparking or smoking, a melted plug, a jolt from a switch, or a breaker that won’t stay on. With your own unit panel and dry hands, switch that breaker off. If there’s smoke, take the stairs out and call 911. Managers can usually book us that day, weekends too.',
  commonIntro: 'Owners and condo residents call us about these four most often in Downtown Cincinnati:',
  localFaqs: [
    {
      q: 'I rent an apartment Downtown and an outlet is dead. Can I call you directly?',
      a: 'Go to your building management first, since they book electrical work in the building. Ohio’s landlord law, ORC 5321.04 (A)(4), puts the duty to keep supplied electrical fixtures in good and safe working order on the landlord. You can still press a GFCI reset or reset your own breaker. We fix outlets, not leases.',
    },
    {
      q: 'Can you add outlets or a circuit to a condo in Downtown Cincinnati?',
      a: 'Inside your unit, usually yes, once the association approves any work it needs to. We test the unit panel and the circuit first, then plan the route around concrete and finished walls. If the panel has no room, we tell you before quoting. Where a permit is required, we pull it with Inspection Bureau, Inc. (IBI).',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch work for condos and apartment buildings in Downtown Cincinnati',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Downtown Cincinnati',
    commonSituations: [
      'A pre-1940 building with too few outlets in each apartment',
      'Strips plugged into strips behind a desk or TV',
      'A condo kitchen or bath outlet without GFCI protection',
      'Worn receptacles in a rental unit that let plugs sag out between tenants',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Downtown Cincinnati',
        body: 'Apartments in older buildings in Downtown Cincinnati may have kitchens and baths that were never given ground-fault protection, while newer condos more often need a worn GFCI replaced. Code calls for GFCIs in kitchens, bathrooms, basements, garages and outdoors, which for a building means the units plus the laundry room, the parking level and any roof deck. The device compares outgoing and returning current and shuts off fast when they don’t match, since the gap may be flowing through a person. It doesn’t sense water. USB outlets are a practical add for owners updating units between tenants.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Downtown Cincinnati',
        body: 'Residents can rule out a few things before management sends anyone. A dead receptacle in a condo or apartment is often downstream of a GFCI that tripped in the same unit’s kitchen or bath, so push that button. Then open your unit’s breaker panel, if there is one, and look for a handle out of step. Some living rooms put a receptacle on a wall switch; flip it. If the power returns, nobody needs to come. USB receptacles and smart switches are improvements, not repairs. Warmth, humming, burn marks or sparks, or a breaker that trips straight back, goes to management and from there to us.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Downtown Cincinnati',
        body: 'For an owner adding receptacles or a circuit in Downtown Cincinnati, the unit or building panel and its cable get metered first. If an older building’s panel has no capacity left or its cable is past its best, Electrical Panel Replacement or Home Rewiring goes on the estimate beside the outlet work, and the owner chooses. Installation meets code, and if the job needs a permit, our office handles it.',
      },
    ],
    whyTitle: 'Why Building Owners and Residents in Downtown Cincinnati Choose Us for Switches and Outlets',
    whyParagraph:
      'Our licensed electricians work around tenants and building rules, testing the outlet, circuit and panel before quoting. If a reset or one new device solves it, the owner hears that first. Every device is grounded and wired to code.',
    sharedFaqs: [
      {
        q: 'How do you price outlet work for a building or condo in Downtown Cincinnati?',
        a: 'We test, then the owner or association gets a flat rate to approve before work starts. It depends on how many devices, whether they’re GFCI or USB, how far the wiring runs through the building, and whether a panel or circuit needs work. Financing is available.',
      },
      {
        q: 'How does a GFCI outlet decide to shut off?',
        a: 'It measures the current leaving on the hot wire against the current returning on the neutral. If they differ, part of it is escaping, perhaps through a person at the sink, and the GFCI cuts power quickly. Water isn’t what it detects; it detects the escaping current.',
      },
      {
        q: 'Why can’t building maintenance just swap a bad outlet?',
        a: 'Sometimes the outlet isn’t the problem. A licensed electrician checks the circuit, the ground and the box, makes sure the device suits the wiring, and installs to code. In an occupied building, that protects the residents and the building, not just the unit with the dead outlet.',
      },
    ],
  },
};
