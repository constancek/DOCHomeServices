import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walton: LocationServiceCopy = {
  localParagraph:
    'Walton has two kinds of houses, and they raise different questions. Census figures show one home in five was built before 1960, while 55.3% went up in 2000 or later. In the older ones we look for cloth-covered wiring, ungrounded two-prong outlets and fuse boxes or small panels. In the newer subdivisions the question is usually whether the panel can take what you want to add. Either way, you get a written report and prices before any work.',
  emergencyParagraph:
    'Some Walton warnings can’t sit until a booked inspection: a blackened or hot outlet, crackling behind a cover plate, sparks, or a fuse or breaker that goes again right away. Turn that circuit off. With smoke or fire, leave the house and call 911. We get to most urgent calls the same day, weekends included.',
  commonIntro:
    'Walton calls come from older houses in the original town, two-family homes, and the newer subdivisions. These come up most:',
  localFaqs: [
    {
      q: 'Is the South Main Street Historic District a problem for electrical work in Walton?',
      a: 'Not for wiring inside the house. The district is listed on the National Register, and that listing alone doesn’t put interior electrical work under design review. If a job moves something on the outside, such as the meter base, we check with the city before we start and handle the permit.',
    },
    {
      q: 'I own a two-family in Walton. Should I have it inspected?',
      a: 'If it’s one of the older ones and you don’t know when the wiring was last updated, yes. We check each unit’s panel and circuits, the shared areas, and smoke alarm power in both units. Tenants report problems to you in writing; you book the visit. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Walton’s old town houses and new subdivisions',
    band1Heading: 'Common Electrical Problems We Find in Walton Homes',
    commonSituations: [
      'A pre-war house on a fuse box with a few circuits feeding the whole upstairs',
      'Three-prong outlets added to old two-wire cable with no ground behind them',
      'A two-family where a hallway light or basement outlet runs off one tenant’s panel',
      'A newer all-electric house whose panel can’t take an EV charger without changes',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some Walton problems aren’t problems. Reset any GFCI in the kitchen, bathrooms, garage and outside, since one tripped GFCI can kill outlets elsewhere. Check the bulb, and whether a dead outlet is the one a wall switch controls. A breaker that resets once and stays on can be left. Book an inspection if the house still has two-prong outlets throughout or an old fuse box, cords run as permanent wiring, or flickering across several circuits, or if you’re buying an older house with no record of electrical work. We explain findings on site and in writing.',
      },
      {
        title: 'Inspection, Repair or Rewire in Walton?',
        body: 'Walton’s two housing groups get different answers. In a post-2000 subdivision house, expect a loose connection, a weak breaker or a missing GFCI, all repairs, and maybe a bigger panel for an EV charger. In a pre-1940 house, if cloth or knob-and-tube cable still feeds most rooms, we write up a rewire price and a spot-repair price side by side. Neither is decided by age alone; the report decides. Any permitted job gets its official inspection, which we set up with the permit. Take the report to any electrician you like.',
      },
    ],
    whyTitle: 'Why Walton Homeowners and Landlords Call Us',
    whyParagraph:
      'Walton mixes old and new houses, and 26.8% of its homes are rented. Each gets the same visit: a licensed, insured, background-checked technician and a flat-rate price approved before any work.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Walton?',
        a: 'Before we come, you get one flat price. What sets it is how large the house is and why you want the report, like a purchase or a planned EV charger. We don’t charge overtime, and anything we find to fix is priced separately for your approval.',
      },
      {
        q: 'What do you look at during a Walton inspection?',
        a: 'The fuse box or panel and every fuse or breaker in it, grounding and bonding, outlets for ground and polarity, GFCI and AFCI protection, visible wiring in basements and attics, and smoke alarm power. Owen Electric or Duke Energy Kentucky, depending on your street, owns the meter itself; we start at the meter base.',
      },
      {
        q: 'Do I need to hire you for the repairs?',
        a: 'No. The report stays with you, to use with whoever you hire. Should you choose us, each repair is quoted flat before any work, and a rewire or new panel can be financed. The choice is entirely yours.',
      },
    ],
  },
};
