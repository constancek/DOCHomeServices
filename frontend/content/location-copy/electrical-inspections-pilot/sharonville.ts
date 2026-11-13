import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const sharonville: LocationServiceCopy = {
  localParagraph:
    'Sharonville’s housing is mostly 1960s to 1990s, with a median build year of 1974 by Census figures, and plenty of it is in apartment buildings. Over a third of homes heat with electricity, which leans hard on older panels. The city puts at least a fifth of properties in the FEMA floodplain, so after high water we check basements and panels before power goes back on. Every inspection ends in a written report, priced repairs and your decision.',
  emergencyParagraph:
    'These can’t wait for a scheduled inspection: a scorched or buzzing outlet, a hot switch plate, sparks, and lights that dim hard when a big appliance starts. Turn off any breaker that trips again after a reset. With smoke or fire, get out and dial 911. Most Sharonville calls are handled the same day, Saturday and Sunday included.',
  commonIntro:
    'Sharonville inspections cover single homes, condos, apartment buildings and mobile homes, and the findings change with each. These come up most:',
  localFaqs: [
    {
      q: 'Who issues electrical permits in Sharonville?',
      a: 'The City of Sharonville does, through its Department of Community Development, and an inspector signs off the finished work. That sign-off covers a specific permitted job. Our inspection is a separate safety check of the whole house with a written report. If a repair needs a permit, we pull it.',
    },
    {
      q: 'Our Sharonville house is in the floodplain and the basement flooded. What now?',
      a: 'Leave the power to the flooded area off, and don’t test it by flipping breakers back on. Outlets, wiring or a panel that sat in water generally need replacing. We inspect what got wet, write up what has to go and what can stay, and price it before work starts.',
    },
    {
      q: 'I rent an apartment in Sharonville. Can I book an inspection?',
      a: 'Report the problem to your landlord or manager in writing first; they book and pay for inspections of the building. Ohio law (ORC 5321.04(A)(4)) makes landlords keep supplied electrical fixtures in good and safe working order. We inspect wiring, not leases, and work for whoever books.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Sharonville homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Sharonville Homes and Apartments',
    commonSituations: [
      'An electric furnace or heat pump and a newer range sharing a panel that’s at its limit',
      'A panel in a floodplain basement with rust on the breakers and bus bars',
      'Apartment units with older breaker panels and too few kitchen circuits',
      'Mobile homes with a weathered service pedestal or loose feeder connections',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before booking, try the easy checks. A tripped GFCI, in a kitchen, bath, garage or outdoor outlet, can leave several other outlets dead until it’s reset. A single breaker that trips and then holds was probably overloaded. A light that won’t come on may be the bulb, or a switch wired to a lamp outlet. Book us when flickering moves across rooms, when outlets throughout are two-prong, or when extension cords have become the wiring. Landlords between tenants and owners in Sharonville adding an EV charger or electric heat are the other common bookings.',
      },
      {
        title: 'Inspection, Repair or Rewire in Sharonville?',
        body: 'The findings set the plan, not the house’s age. Most 1970s and 1980s Sharonville homes need repairs rather than rewiring: a loose connection, a breaker that’s worn out, GFCI protection added where water is near. A panel that’s full, corroded from a past flood or too small for electric heat plus central air gets priced for replacement. Rewiring only enters the quote when older wiring runs through much of the house, and then you see it next to the cheaper spot fixes. You keep the report and choose who does the work.',
      },
    ],
    whyTitle: 'Why Sharonville Homeowners and Landlords Call Us',
    whyParagraph:
      'With close to half of Sharonville households renting, inspections for rental units come up often. Every technician is licensed, insured, background-checked and drug-tested, and repairs start only after you approve the price.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Sharonville?',
        a: 'It’s a flat rate, given before we start. A two-bedroom condo costs less to inspect than a large house, and a check before an EV charger is narrower than one before a sale. Repairs are priced separately and need your approval.',
      },
      {
        q: 'What gets checked in an electrical inspection?',
        a: 'We start at the panel, looking at every breaker or fuse, then confirm the grounding and bonding. After that come the outlets and switches, GFCI and AFCI protection, any wiring we can see, and the power supply to your smoke alarms. You receive the results as a written report.',
      },
      {
        q: 'Can I take your report to another electrician?',
        a: 'Yes. You paid for the inspection, so the report is yours to use however you like, including with a different contractor or in talks with a buyer. If you want us to fix what we found, we’ll price each repair and only do the ones you approve.',
      },
    ],
  },
};
