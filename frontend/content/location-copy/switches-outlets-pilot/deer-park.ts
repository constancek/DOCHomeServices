import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const deerPark: LocationServiceCopy = {
  localParagraph:
    'Deer Park is mostly houses from the 1940s and 1950s, and the Census median sits at 1947. Kitchens of that age were planned for a percolator and a toaster, so today’s counter of coffee maker, air fryer and microwave can trip a breaker or leave a receptacle warm. Some still lack GFCI protection near the sink or tub, or have ungrounded outlets. We start with a meter at the receptacle and work back to the panel, tell you when a reset or breaker solved it, and agree a price first.',
  emergencyParagraph:
    'Don’t touch a receptacle that’s hot, spitting sparks or smoking, or one where a plug has melted in. Those, a jolt off a switch plate, and a breaker that keeps flipping get a same-day visit on most calls, weekends included. With dry hands, shut that breaker off. Smoke in the room means leave, then call 911.',
  commonIntro: 'These are the four we’re called about most in Deer Park:',
  localFaqs: [
    {
      q: 'Can you add counter outlets to a 1940s kitchen in Deer Park?',
      a: 'Usually, yes. We test the panel first to see whether it can take a new kitchen circuit, then add outlets where you actually set appliances, with GFCI protection as code requires near the sink. If the panel can’t take it, you’ll know before the quote, with that work priced separately.',
    },
    {
      q: 'Who handles the electrical permit for outlet work in Deer Park?',
      a: 'In Deer Park, electrical permits and inspections go to Inspection Bureau, Inc. (IBI). If your job calls for one, our office files it and books the inspector, and you never touch the form. Before any of that, you see the work spelled out and priced.',
    },
  ],
  overrides: {
    ctaLine: 'Receptacle and switch repair for 1940s and 1950s houses in Deer Park',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Deer Park',
    commonSituations: [
      'A 1940s kitchen counter with two outlets and five appliances',
      'A 1950s bathroom receptacle with no GFCI by the tub',
      'A receptacle that runs warm and has browned around its slots',
      'A light switch that clicks but no longer turns anything on',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Deer Park',
        body: 'Bathrooms and kitchens in a 1940s or 1950s house in Deer Park were wired with no ground-fault protection at all, unless someone added it since. A GFCI is a receptacle that weighs current leaving against current returning. Any gap means current is wandering off along another route, and since that route may be a person, it cuts power at once. It can’t sense water; water simply causes most of the gaps. Code sets the rule for bathrooms, kitchens, garages, basements and outdoor spots, and a detached garage or basement workbench deserves a look. USB receptacles suit a kitchen desk.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Deer Park',
        body: 'Each GFCI, whether it lives by the tub, near the furnace, in the garage or out back, gets a firm push, because a tripped one upstream can leave a receptacle two rooms over without power. In the breaker box, hunt for any handle out of step with its neighbors and reset it. Some older living rooms in Deer Park have a receptacle wired to the switch beside the front door, so flip that. Power back means the bill is zero. A USB receptacle or smart switch is a comfort item, not a repair. Warmth, a hum, browning or sparks, or a breaker that flips again right away, is ours.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Deer Park',
        body: 'No receptacles get added to a house in Deer Park until we’ve metered the panel and checked the cable runs. A 1950s panel without spare slots, or cable that has aged out of service, appears on the estimate as Electrical Panel Replacement or Home Rewiring, priced next to the outlet job, and you choose. Work is installed to code, and any required permit is ours to pull.',
      },
    ],
    whyTitle: 'Why Homeowners in Deer Park Choose Us for Switches and Outlets',
    whyParagraph:
      'Our licensed electrician reads the receptacle, its circuit and your panel before any quote. If a reset or fresh device was all you needed, you’ll hear it. Each device is grounded and wired to code for the figure you agreed.',
    sharedFaqs: [
      {
        q: 'How much does it cost to replace or add outlets in Deer Park?',
        a: 'We can’t name a figure before testing, since it rides on the device count, any GFCI or USB units, and whether old cable or the panel needs work. Once tested, you get one flat number to approve before we begin. Financing covers larger jobs, like a new kitchen circuit.',
      },
      {
        q: 'How does a GFCI outlet protect people in a kitchen or bath?',
        a: 'A GFCI keeps two running totals, the current it sends to the hair dryer or toaster and the current that comes home. They should match. When they don’t, current has found a shortcut, maybe through someone standing on a damp floor, and the device opens the circuit almost instantly. Water itself never registers.',
      },
      {
        q: 'Is replacing a switch or outlet a do-it-yourself job in an older house?',
        a: 'We’d say no. In a 1940s house, the box may not be grounded, the circuit may be shared with another room, and the wiring may not suit a modern device. A licensed electrician tests those and installs to code, which is what keeps the house and what’s plugged into it safe.',
      },
    ],
  },
};
