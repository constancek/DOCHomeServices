import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const arlingtonHeights: LocationServiceCopy = {
  localParagraph:
    'Arlington Heights has one of the oldest housing stocks we work in. The Census median house dates to 1939 or earlier, and a little over half the homes are rented. Houses that old are drafty, often have damp basements, and run ductwork that went in long after they were built and moves dust from room to room. In rentals, the owner makes the call on equipment. We test first, fix the price before any work, and if a new filter will do, we tell you.',
  emergencyParagraph:
    'Once a carbon monoxide alarm sounds, everybody goes outside and someone calls 911. A whiff of gas means leaving every light and switch alone and ringing the gas company. Scorched air from the registers means flipping the thermostat to off. Spreading mold after a leak is urgent with asthma in the house. Most calls are same day, weekends included.',
  commonIntro:
    'In the old houses of Arlington Heights, these are the problems we see first.',
  localFaqs: [
    {
      q: 'The rental I live in at Arlington Heights has a damp, musty basement. What should I do?',
      a: 'Write to your landlord about it and keep a copy. Under Ohio’s ORC 5321.04 (A)(2), a landlord has to keep the place fit and habitable, and a basement that stays wet or grows mold falls under that. Leases aren’t our trade. When the owner books us, we test the basement and price a dehumidifier or other fix first.',
    },
    {
      q: 'Is a whole-home purifier worth it for an old house in Arlington Heights?',
      a: 'It can be, if the test shows dust and particles are the problem. Old houses leak air at windows and floors, and ducts added later often carry basement dust upstairs. A purifier or media filter at the furnace cleans that air everywhere the ducts reach. If drafts are the main issue, we’ll say so instead.',
    },
  ],
  overrides: {
    ctaLine: 'Drier, cleaner air for prewar houses in Arlington Heights',
    band1Heading: 'Signs a Home in Arlington Heights Has an Indoor Air Quality Problem',
    commonSituations: [
      'A basement that smells of mildew whenever it rains',
      'Dust drifting from floor registers in a house from the 1930s',
      'Windows fogging on the inside all winter',
      'A tenant reporting a bathroom fan that quit long ago',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in Arlington Heights',
        body: 'The air gets tested before anything else, with a dust count, a humidity reading and a look for water marks in the basement and on old window frames. Then we pull the filter, follow the ductwork and look over the furnace and AC. Most houses here date from before 1940, so we look hard at basement damp and at ducts that were threaded through walls and floors long after the plaster went up. The recommendation follows the readings and nothing else. Each item gets a flat price, and the owner signs off before anything is fitted.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'Equipment is money well spent in a prewar house with someone who wheezes, a basement that smells of mildew, a cat or dog, dust settling on the window sills again within days, or winter air that leaves skin flaking. It’s money thrown away when a filter is choked with lint, since a new one may be the whole fix. A portable unit can sort out one airless upstairs room. Water coming through a foundation crack or a pipe gets stopped before any mold treatment. Tenants and owners can both keep returns uncovered and swap filters once they turn gray.',
      },
      {
        title: 'Humidity and Filtration for Homes in Arlington Heights',
        body: 'The Ohio Valley stays muggy through summer and goes dry once the furnace starts. Basements under houses this old pull in that summer damp, and a dehumidifier wired into the furnace and AC draws it out before mildew settles in. A humidifier on the furnace softens the dry months. Filtration at the air handler reaches each room the ducts serve and cuts down airborne germs and mold spores.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Arlington Heights Choose Us for Indoor Air Quality',
    whyParagraph:
      'We work in prewar houses and small rentals across the village, and we test before recommending anything. Our licensed, insured technicians are background-checked and drug-tested, and we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How do you price indoor air quality work?',
        a: 'Each fix gets a flat rate after the test. The figure comes from the equipment the readings call for and the furnace and ductwork it joins, and duct runs squeezed into a prewar house can add labor. Landlords get the price before anything happens, with no overtime fees.',
      },
      {
        q: 'What signs mean the air in an old house needs work?',
        a: 'In houses this old, the most common sign is a musty basement smell drifting up through the floor. Others include sneezing that eases outdoors, dust back soon after cleaning, wet window glass in winter and air dry enough to crack lips. A test tells you how much the HVAC system can fix.',
      },
      {
        q: 'How often should a tenant or owner change the filter?',
        a: 'Change it when it looks dirty, and look often through heating and cooling season, more so with pets. In a rental, the lease usually says who handles it; if it’s you, ask the landlord which size fits. If no light gets through it, it’s overdue.',
      },
    ],
  },
};
