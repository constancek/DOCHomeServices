import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const parkHills: LocationServiceCopy = {
  localParagraph:
    'Park Hills was built out mostly from the late 1920s through the 1950s, and its wiring falls into two eras. Census figures put 31.4% of homes before 1940, where ungrounded outlets and old cloth-covered runs are still common, and another 29.5% between 1940 and 1959, when panels were sized for far less than a modern kitchen. About three in ten units are in apartment buildings. We go through the whole system and quote any repair before it starts.',
  emergencyParagraph:
    'In a Park Hills home or apartment, these mean call us now: a burning odor, a hot, buzzing or browned plate on a switch or outlet, any sparking, or a breaker that won’t stay reset. Shut that breaker off. If there is smoke or flame, leave and phone 911 from outside. Most are seen the same day, including weekends.',
  commonIntro:
    'Park Hills mixes 1920s to 1950s houses with sizable apartment buildings. Here is what we find most:',
  localFaqs: [
    {
      q: 'My Park Hills apartment has outlets that spark. Who books the inspection?',
      a: 'Tell your landlord or building manager in writing, and stop using that outlet. The owner or manager books the inspection and the repair, and we work with them. Renters can’t hire us for a building they don’t own. We inspect wiring, not leases.',
    },
    {
      q: 'Does the Park Hills historic district limit electrical work?',
      a: 'Much of Park Hills is in a National Register historic district, but that listing on its own doesn’t restrict work on a private house, and no local design review was found. Inside the walls, there is nothing to approve. For anything that changes the outside, we check with the city first.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Park Hills houses and apartments',
    band1Heading: 'Common Electrical Problems We Find in Park Hills Homes and Apartments',
    commonSituations: [
      'A 1950s panel feeding a remodeled kitchen with no circuits to spare',
      'Two-prong outlets throughout a 1930s house on the slopes near Devou Park',
      'Apartment units with no GFCI at the kitchen sink or in the bath',
      'Lights in an older house that dim hard when the air conditioner starts',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some Park Hills problems are solved with one button. The GFCI outlets in the kitchen, bath, garage and outside can each switch off outlets in other rooms when they trip, so find the one that tripped and reset it. A breaker that trips once and then holds is behaving normally, and a bulb or wall switch may be all that’s wrong. We should look when there’s a fuse box, ungrounded outlets in most rooms, flicker on more than one circuit, or cords run as permanent wiring. A pre-1960 house with a sale, purchase or heat pump coming is also worth booking.',
      },
      {
        title: 'Inspection, Repair or Rewire in Park Hills?',
        body: 'Two houses on the same Park Hills street can need very different things, so the inspection decides. A loose connection, a worn breaker or a kitchen without GFCI outlets is repair work. A 1950s panel straining under a modern kitchen and central air is a panel replacement. A 1920s or 1930s house where cloth or knob-and-tube still feeds most rooms gets a rewire quote set beside the spot-repair one. Apartment buildings are judged unit by unit. Our check ends in a written report; permitted work also gets an official inspection, which we arrange after pulling the permit.',
      },
    ],
    whyTitle: 'Why Park Hills Homeowners and Landlords Call Us',
    whyParagraph:
      'One in three Park Hills homes is rented, so we hear from owners of houses and of buildings. Our licensed, insured electricians are background-checked and drug-tested, and the price is agreed before work.',
    sharedFaqs: [
      {
        q: 'How is the inspection priced for a Park Hills home or building?',
        a: 'We give you a flat rate before starting, based on the size of the property and the reason for the check. One older house before a sale is a shorter visit than an apartment building a landlord wants reviewed unit by unit. Repairs are quoted separately.',
      },
      {
        q: 'What does your inspection include?',
        a: 'Everything from the panel or fuse box outward: each breaker or fuse, the ground and bond connections, outlets and switches room by room, GFCI and AFCI protection where it belongs, open wiring in the basement or attic, and smoke alarm power. All of it is written up.',
      },
      {
        q: 'Will I have to hire you to fix what you find?',
        a: 'No, the report is yours to use with any licensed electrician. If you want us, each item gets a flat price agreed before work starts, and financing is available for something bigger, like a panel replacement.',
      },
    ],
  },
};
