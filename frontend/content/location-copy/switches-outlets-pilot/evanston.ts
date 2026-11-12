import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evanston: LocationServiceCopy = {
  localParagraph:
    'Census figures show seven of every ten homes in Evanston were built by 1939, most of them single houses and two-families set on narrow lots. Back then a bedroom got a single receptacle for a reading lamp, so owners now thread cords beneath rugs and still find the odd ungrounded outlet. A redone kitchen or bath generally needs GFCI protection added. Our electrician reads the receptacle, its circuit and the panel, owns up when pressing a reset solves it, and writes the price down first.',
  emergencyParagraph:
    'In Evanston, a blackened or arcing receptacle, a switch radiating heat, a burnt odor, a shock, a fused plug or a breaker that won’t latch belongs on today’s schedule. Turn off that circuit if the panel is dry and reachable. Flames or smoke mean you leave and ring 911. Weekends included, most calls get a visit that day.',
  commonIntro: 'These four bring owners and tenants to us more than anything else in Evanston.',
  localFaqs: [
    {
      q: 'My old house in Evanston has one outlet per room. Can you add more?',
      a: 'We can. Before planning anything, our electrician measures what the panel and existing branch circuits will bear, then marks receptacle spots and decides whether a new circuit is warranted. Cable gets fished behind plaster through small holes. One flat price covers the plan, and splitting it into stages, a floor at a time, works too.',
    },
    {
      q: 'I rent a unit in Evanston. Who should fix a warm outlet?',
      a: 'Your landlord, after you unplug whatever was in it. Ohio’s ORC 5321.04 (A)(4) makes owners keep supplied electrical fixtures safe and working, so send the complaint in writing and they arrange us. Peeking at the breakers or a GFCI button is fine meanwhile. Fixing wiring is our part; the lease belongs to you two.',
    },
  ],
  overrides: {
    ctaLine: 'Adding receptacles and fixing switches in pre-war houses around Evanston',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Evanston',
    commonSituations: [
      'A cord running under the rug because the bedroom has a single receptacle',
      'A loose or scorched outlet in an old house that drops every plug',
      'Computer, monitor and printer living on a daisy chain of strips in a spare room',
      'A hallway light switch that hums or makes the bulbs flicker',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Evanston',
        body: 'We most often find old baths, cellar laundry corners and back porch receptacles unprotected in Evanston, and every one of those spots is on code’s GFCI list, together with kitchens and garages. A GFCI pairs the hot and neutral conductors through a sensor and expects equal flow in each. An imbalance tells it current is escaping, maybe through someone gripping a faucet, and it disconnects within a fraction of a second. Dampness alone doesn’t register. Water is merely the easiest escape route. A USB receptacle at the desk or bedside spares an adapter, and that’s its full value.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Evanston',
        body: 'An owner in Evanston can often skip our visit. Older houses here pick up GFCIs piecemeal, so one in a bathroom or the basement may quietly guard receptacles two rooms away; when it pops, push its center button. Glance over the breaker panel as well for a handle that isn’t lined up. Some parlors and bedrooms put an outlet on the wall switch, so try those. Adding a USB port or a smart switch upgrades the room without repairing anything. A plate warm to the touch, a hum, brown marks, a spark, or a breaker that won’t stay up after one reset all need a licensed electrician.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Evanston',
        body: 'In Evanston, we promise extra receptacles only after the panel and the pre-war branch cable have been tested. Should the panel be full, or the old wire unfit for added load, the reason is spelled out and Electrical Panel Replacement or Home Rewiring shows up as a separately priced line. Nothing extra happens without your yes. It’s all done to code, with Inspection Bureau, Inc. (IBI) inspecting permitted jobs.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Evanston Choose Us for Switches and Outlets',
    whyParagraph:
      'Prices come after a licensed electrician has metered the receptacle, the circuit and your panel. If pushing a reset or changing a single device is the honest answer, that’s the answer given. Every device ends up grounded and code-compliant.',
    sharedFaqs: [
      {
        q: 'How do you set the price for outlet work in Evanston?',
        a: 'Measurements come before money. Once the circuit is tested, a flat rate is written up, and nothing proceeds until you accept it. Device count, any GFCI or USB receptacles, and repairs the circuit or panel may need determine it. Financing helps when an old house needs circuits added along with receptacles.',
      },
      {
        q: 'What is a GFCI outlet doing when it trips in Evanston?',
        a: 'Catching a leak. Less current returned along the neutral than left along the hot, so some found another route to ground, and a human body is one possible route. Cutting the circuit takes it a split second. No water sensing is involved; damp locations simply produce most leaks, so code puts GFCIs there.',
      },
      {
        q: 'Why shouldn’t I rewire an outlet myself in Evanston?',
        a: 'Pre-1940 boxes often hold cable much older than the receptacle mounted on it, and whether a real ground exists is anyone’s guess until it’s tested. Licensed electricians confirm the circuit, check grounding against code, and land each device on its correct circuit, so the repair actually holds.',
      },
    ],
  },
};
