import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Downtown Cincinnati is almost all large apartment and condo buildings. Census figures count 71.6% of homes in buildings with 50 units or more, and renters in 87.3%. That makes most of our maintenance here a tank in a unit closet sitting in a pan, or one big heater the whole building shares. Most units heat with electricity, and many closet tanks are electric too. Condo owners book their own tank; renters go through the office. Price comes before work, and we’ll be plain when a heater isn’t worth the visit.',
  emergencyParagraph:
    'A leaking heater soaks the unit beneath: shut the cold-water valve atop the tank, then trip its breaker or close its gas. Smelling gas, leave, hit no switches, light nothing, call the gas company outside. Carbon monoxide alarm: everyone out first. A relief valve that won’t quit, or zero hot water, is a repair. Most are same day, weekends included.',
  commonIntro:
    'A heater shut away in a unit closet gets little attention until it acts up. Signs it’s due:',
  localFaqs: [
    {
      q: 'I own a condo in Downtown Cincinnati. Is the water heater my job or the association’s?',
      a: 'Check the declaration and bylaws first; they settle it. As a rule, a heater inside your unit serving only your taps is the owner’s, while a central plant serving every floor is the association’s. For a unit heater, we drain and flush it, inspect the anode and pressure valve, check the pan, and arrange access through building staff.',
    },
    {
      q: 'I rent an apartment in Downtown Cincinnati. Can I book water heater maintenance?',
      a: 'No, the management office books it. Ohio’s ORC 5321.04 says a landlord must keep the appliances it supplies safe and working, (A)(4), and supply reasonable hot water, (A)(6). We look after heaters; the lease is between you and the building. Tell the office in writing when hot water runs short or the closet starts banging.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater maintenance for condos and apartments in Downtown Cincinnati',
    band1Heading: 'Signs a Water Heater in Downtown Cincinnati Is Due for Maintenance',
    commonSituations: [
      'A closet tank in a condo that hasn’t been drained since the building opened',
      'A unit bought with nothing on file about its heater',
      'Hot water fading early in a unit with a small electric tank',
      'A rumbling closet heater the neighbors can hear through the wall',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Downtown Cincinnati',
        body: 'The hose goes from the tank’s drain to the nearest floor drain or pan line, and we flush until the water runs free of grit. That grit is mineral matter from the supply, and once it coats the bottom, the elements or burner heat through it, so you get popping and a hot shower that ends early. The anode, a rod placed there to corrode instead of the tank, is checked, and a spent one priced. The T&P valve is tested and its discharge line followed. Electric: elements and thermostats metered. Gas: burner, pilot, vent, gas connection. Pan, pan drain and supply lines are checked. You okay any repair.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Downtown, the visit makes sense when a unit tank has run for years with no flush, when you bought the condo and the seller had no service history, when popping or rumbling has just shown up, or when a manager wants a whole floor done at once. It makes no sense for a tank whose body is already leaking. In a tower that’s a replacement to schedule now, not a flush. Rust-tinted hot water or a heater at the end of the line gets the same honest answer: spend on the new one. Owners with a nearby drain can let off a pail between visits. We recommend it yearly.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Downtown Cincinnati',
        body: 'In units that heat with electricity, the tank is usually electric as well, so each element gets metered after the flush and the anode inspection. A gas tank gets its burner and vent examined instead. Tankless heaters, where a unit has one, are descaled: cleaning solution circulates through the heat exchanger for a while, then the inlet filter is rinsed. Big shared heaters are planned with management. At replacement, tankless can free closet space.',
      },
    ],
    whyTitle: 'Why Condo Owners and Managers in Downtown Cincinnati Book Water Heater Maintenance With Us',
    whyParagraph:
      'Closet tanks in condo towers and converted older buildings, plus shared heaters that managers plan around, keep us busy in Downtown Cincinnati. Licensed, insured, background-checked technicians, and a flat price approved first.',
    sharedFaqs: [
      {
        q: 'What does water heater maintenance cost in Downtown Cincinnati?',
        a: 'One flat figure, quoted before work. It depends on the kind of heater and fuel, and on logistics: a closet tucked behind stacked laundry on an upper floor, with the service elevator reserved ahead, is slower than an open utility room. You approve the number first.',
      },
      {
        q: 'How often should a condo’s water heater get serviced?',
        a: 'Yearly. Popping or rumbling earlier than that means grit on the bottom, worth a visit right then. Building managers can set every unit on one annual date so residents get one notice and the elevator is reserved once.',
      },
      {
        q: 'Can I flush the water heater in my unit myself?',
        a: 'Draining a pail is fine if you’re handy and have a drain to run the hose to, which many closets don’t. An old drain valve may not reseal, and in a tall building a drip matters. The pressure valve test, and any gas burner work, are ours to handle.',
      },
    ],
  },
};
