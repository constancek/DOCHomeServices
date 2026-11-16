import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const miamitown: LocationServiceCopy = {
  localParagraph:
    'Eight in ten households in Miamitown rent, and Census figures show most live in buildings of five or more units, with nearly a third of the housing from before 1940. Prewar units were wired around a lamp per room, so tenants string cords to reach a bed or a desk. In the later buildings, a worn GFCI or a dead hallway switch is the usual complaint. Owners get the receptacle, circuit and panel tested, a straight word if a reset was all it took, and a fixed price first.',
  emergencyParagraph:
    'A tenant who finds a scorched or hot receptacle, sees sparks at a switch, gets a jolt from a plate, or watches a breaker trip straight back off should tell the landlord that day. Leave the panel alone if anything is wet. If there’s smoke, leave and dial 911. An owner’s call usually gets us there that day, weekends included.',
  commonIntro: 'In Miamitown, most calls involve one of these four.',
  localFaqs: [
    {
      q: 'Who pays for a dead outlet in my rented apartment in Miamitown?',
      a: 'Your landlord or the management company arranges it. Ohio’s ORC 5321.04 (A)(4) obliges landlords to keep the electrical fixtures they provide in good and safe working order, so put the problem in writing. Resetting a GFCI or a breaker inside your unit is fine. We fix outlets, not leases.',
    },
    {
      q: 'Is it safe to use outlets after the Great Miami River floods an apartment in Miamitown?',
      a: 'Not until an electrician has checked them. The National Weather Service names Route 128 and Front Street among the first places river water enters buildings. Any receptacle or switch that sat in floodwater gets replaced rather than dried and reused, so leave those circuits off and have the owner call us.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repairs for apartments and houses in Miamitown',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Miamitown',
    commonSituations: [
      'Bedroom outlets that died because a bathroom GFCI tripped',
      'A prewar flat with one receptacle and a cord run under the rug',
      'A stairwell or hallway switch that clicks but lights nothing',
      'A kitchen receptacle so loose the kettle plug drops out',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Miamitown',
        body: 'The outlet with two small buttons, test and reset, is a GFCI. It keeps a running comparison between current sent out and current returned, and if part of it disappears, perhaps through a tenant’s hand on a faulty appliance, it drops the power in a blink. A wet counter doesn’t trigger it by itself. Wetness is just how leaks usually start. Code expects this protection in bathrooms, kitchens, garages, basements and at outdoor outlets, and in Miamitown, the prewar buildings went up long before anyone required it. Owners who add USB ports beside beds and counters spare tenants a drawer of adapters, but that’s comfort, not safety.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Miamitown',
        body: 'Tenants can bring back many dead outlets without anyone visiting. Look for the reset button on the bathroom or kitchen GFCI, or the one by the back door, and press it firmly. If your unit has its own breaker box, check for a tripped handle and push it off, then on. Flip the switch beside the room’s entry, since it may feed a lamp outlet. If power returns, there’s nothing to report. A USB outlet or smart switch is an owner’s upgrade, not a repair. Heat, buzzing, scorching, sparks, or a breaker that trips again straight away go to the landlord that day.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Miamitown',
        body: 'Before an owner adds receptacles to a unit in Miamitown, we test the panel serving it and the cable running to each room. If either can’t carry more, the estimate shows Electrical Panel Replacement or Home Rewiring separately, and the owner decides. Installation follows code, and in the townships of Hamilton County, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits, which we file wherever one is required.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in Miamitown Choose Us for Switches and Outlets',
    whyParagraph:
      'Property owners get a licensed electrician who finds the fault before quoting, admits when a reset or a receptacle settles it, and grounds every device to code. Tenants get a working outlet, and the price is fixed up front.',
    sharedFaqs: [
      {
        q: 'What does an owner pay for outlet work in Miamitown?',
        a: 'That depends on what testing turns up. We quote one flat rate per job, set by how many receptacles and switches are involved, whether any are GFCI or USB, and whether a unit’s wiring or panel needs work first. The owner approves it in advance, and financing helps with whole-building upgrades.',
      },
      {
        q: 'How is a GFCI different from an ordinary outlet?',
        a: 'An ordinary receptacle hands power to whatever is plugged in and stops there. A GFCI also tallies the current going out against what comes back, and the moment part of it goes missing, possibly through a person, it shuts off. It has no idea whether water is around; water is merely the common cause.',
      },
      {
        q: 'Should a landlord hire an electrician just to change outlets in Miamitown?',
        a: 'Yes. Every receptacle has to sit on the right circuit with a working ground and connections that satisfy code, and a slip in one unit can leave a tenant with an outlet that powers a lamp but can shock someone later. A licensed electrician tests each one under load.',
      },
    ],
  },
};
