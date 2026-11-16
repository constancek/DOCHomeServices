import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const greenhills: LocationServiceCopy = {
  localParagraph:
    'Greenhills was built by the federal government from 1935 to 1938 and filled out after the war, and Census figures put the median home at 1955. Expect small panels and few circuits per room. The original townhomes were built without basements, so some wiring and equipment sits in a crawl space, which we get into and check. Electrical repairs here need a Village of Greenhills permit, which we handle. You get a written report and a price for each repair before work starts.',
  emergencyParagraph:
    'Don’t wait on a Greenhills inspection date for a hot or scorched outlet, a buzzing switch, sparks, or a breaker that keeps tripping the instant it’s reset. Turn that breaker off. Smoke or fire means everybody out and a call to 911. We reach most calls the same day, including weekends.',
  commonIntro:
    'Greenhills has original 1930s townhomes, postwar houses and a few apartment buildings. What we find in them:',
  localFaqs: [
    {
      q: 'Do I need a permit for electrical work in Greenhills?',
      a: 'For most of it, yes. The village requires a Village of Greenhills permit to install, alter, repair or replace an electrical system, and it issues electrical permits itself. Our inspection doesn’t need one. When a repair does, we pull the permit and the village’s inspector signs the work off.',
    },
    {
      q: 'Will the historic district affect electrical work on my Greenhills house?',
      a: 'Inside the house, no. Exterior alterations in the local historic district need a Certificate of Appropriateness from the village, with the focus on what shows from the street. Nothing we’ve seen says whether a meter or outdoor outlet counts, so we check with the village before changing anything outside.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Greenhills townhomes and houses',
    band1Heading: 'Common Electrical Problems We Find in Greenhills Homes',
    commonSituations: [
      'Wiring for the furnace and water heater run through a tight crawl space under an original townhome',
      'A small panel or fuse box in a postwar veterans’ house on Damon Road',
      'Two-prong outlets and few circuits upstairs in a two-story row unit',
      'Kitchen circuits overloaded by appliances nobody planned for in 1955',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some Greenhills calls end with a reset. If a bath, kitchen, garage or outdoor outlet is dead, look for a GFCI that tripped; one can shut down others downstream. A breaker that trips once and stays on after you reset it is fine, and a dark light may only need a bulb. Book us if you still have a fuse box, mostly two-prong outlets, cords run as permanent wiring, or lights flickering on several circuits. Selling or buying a Greenhills house with no electrical work in decades is reason enough to book too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Greenhills?',
        body: 'Go by what we find, not by 1937 or 1955. Loose connections, a failing breaker or missing GFCI protection are repairs. A panel that’s full or failing gets priced for replacement. In the original townhomes and older houses, if cloth-covered wiring turns up through most rooms, we price rewiring beside spot repairs; crawl spaces make some runs harder to reach, and the report says where. You get the report and decide, and you’re free to hire anyone for the work. The village permit and inspection come with any repair that needs them.',
      },
    ],
    whyTitle: 'Why Greenhills Homeowners Call Us',
    whyParagraph:
      'Greenhills homes are 65.8% owner-occupied, and many date from before 1960. Owners get a licensed, insured electrician who has passed a background check and drug test, and who quotes a flat price first.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Greenhills?',
        a: 'A flat rate that you agree to before we come. A one-bathroom townhome takes less time than a full house, and a pre-sale report differs from a check before a new appliance. Repairs on the report are priced separately and only done with your approval.',
      },
      {
        q: 'What does an electrical inspection cover in a Greenhills home?',
        a: 'From the meter base in, since the meter belongs to Duke Energy: the panel, breakers or fuses, grounding and bonding, outlets and their GFCI and AFCI protection, smoke alarm power, and every bit of wiring we can see, including what runs through the crawl space.',
      },
      {
        q: 'Do I have to hire you once I have the report?',
        a: 'No. The report is yours, and another licensed electrician can work from it. If you choose us, each repair gets a flat price you sign off on before we begin, and we pull the village permit.',
      },
    ],
  },
};
