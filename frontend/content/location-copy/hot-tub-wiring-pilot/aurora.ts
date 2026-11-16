import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Aurora has a lot of older stock. Census figures date the typical house to 1952, and close to two in five were built before 1940, many near the riverfront downtown. In those houses the panel is often out of slots or headroom for a spa, and that comes first. Houses from later decades more often have space, so the job hinges on the tub’s spot in the yard and the length of the run. We check the panel against the spa maker’s spec and quote in writing before trenching.',
  emergencyParagraph:
    'If the spa’s GFCI pops every time it’s reset, the shutoff gives off a hot-insulation smell, or a bather feels current through the water, the soak is over. Clear the tub, don’t handle the controls, and cut the breaker if that can be done safely. For smoke or fire, get clear and call 911. Expect us that day, weekends too.',
  commonIntro:
    'From the old blocks by the river to the newer streets away from downtown, these are the signs that lead to spa wiring.',
  localFaqs: [
    {
      q: 'Does a hot tub need historic review in downtown Aurora?',
      a: 'As far as we know, a backyard spa isn’t something the preservation commission reviews. Where the tub or its shutoff would be visible from the street inside the district, we check with the city first, then carry on with the wiring as normal.',
    },
    {
      q: 'What if my spa equipment sat in flood water in Aurora?',
      a: 'Leave it switched off, even once it looks dry. High Ohio River water reaches riverfront buildings in Aurora, and silt and moisture inside a control pack or heater can cause a short. We test the equipment and the circuit before anyone turns it back on.',
    },
  ],
  overrides: {
    ctaLine: 'Hot tub circuits for houses old and new in Aurora',
    band1Heading: 'Signs You Need Hot Tub Wiring in Aurora',
    commonSituations: [
      'A pre-1940 house near downtown with a panel out of room',
      'A later house with a back deck waiting on a 240-volt tub',
      'Heater and pumps running together and tripping the spa breaker',
      'A tub the last owner hooked up without any ground-fault protection',
    ],
    proseSections: [
      {
        title: 'Panel Capacity for a Hot Tub in Aurora',
        body: 'In Aurora, the panel is what decides how much wiring a hot tub needs. The oldest houses in town often have no free slot at all, while those from the 1950s on vary widely. We open the panel, total the existing load, add the spa and pick the breaker from the maker’s spec sheet. A panel that can’t carry it is quoted alongside the tub circuit, with Electrical Panel Replacement covering that work. In a two-family or small apartment building, we first confirm which panel feeds the yard. You see every option, priced, before work starts.',
      },
      {
        title: 'DIY or a Licensed Electrician for Hot Tub Wiring in Aurora',
        body: 'We’d steer even a skilled owner away from this one. Spa wiring isn’t like hanging a fixture. It means a breaker change, a new 240-volt feed carrying ground-fault protection, a disconnect by the tub, equipment grounding, a bonding jumper tying the tub’s metal together, and finally an inspection. Bathers sit in that water, which is why the rules are strict. A slip shows up as trips, worn-out heater elements, burned pump windings, a dead control board or a shock. Our electricians work from load math, fit a GFCI that trips when it must and torque every connection at the panel.',
      },
      {
        title: 'Hot Tub Wiring Outdoors Year-Round in Aurora',
        body: 'In Aurora, spa wiring deals with rain, hard winters and, close to the river, the odd flood. We use wet-location boxes, sealed fittings and sturdy conduit, put the shutoff where you can see the tub without it hanging over the water, and bond the frame and nearby metal. Near the riverfront, we keep connections as high as the site allows. We handle the permit and inspection for every job.',
      },
    ],
    whyTitle: 'Why People in Aurora Choose Us for Hot Tub Wiring',
    whyParagraph:
      'A hot tub mixes water with a heavy load, and our licensed electricians give it the care safety work needs. The panel is checked first, and the circuit, shutoff and bonding go in to code at a set price.',
    sharedFaqs: [
      {
        q: 'How do you set a price for spa wiring in Aurora?',
        a: 'Most of it depends on the panel. If there’s open space and spare capacity, the cost stays modest. A tub set far back means more trench, and a panel that has to be replaced adds the most. You approve a single flat price before work, and homeowners who qualify can use financing.',
      },
      {
        q: 'How long should I expect hot tub wiring to take in Aurora?',
        a: 'Count on a day for most houses. An older home that needs panel work first runs longer, and so does a tub set well back from the house. We note the expected schedule on the quote so the spa delivery can be lined up.',
      },
      {
        q: 'Will an older panel in Aurora need upgrading for a spa?',
        a: 'It depends on the house. Panels in pre-war homes are often full or short on capacity, while later ones may be fine. We inspect yours, tell you what it can carry and lay out the choices, with prices, before wiring starts.',
      },
    ],
  },
};
