import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const monroe: LocationServiceCopy = {
  localParagraph:
    'Monroe is newer than most towns we serve. Census figures put the median house at 2001, with over half built since 2000, so wiring tends to be sound. Calls usually start when someone adds a car charger, a hot tub or a finished basement to a builder panel with no spaces left. Older houses near Main Street can be another matter. We test breakers, feeders and the meter socket, tell you if one new circuit is all it takes, and set the price before anything starts.',
  emergencyParagraph:
    'Newer panels fail too. A burning smell, a cover that’s hot or humming, sparks, scorching, or a breaker that pops on reset needs us that day. Leave a wet panel alone. Only turn that breaker off if nothing is wet or hot. With smoke or fire, get out and call 911. Weekends count, and most calls are seen same day.',
  commonIntro:
    'In the post-2000 subdivisions and on the older streets close to Main Street, these are what usually bring a call in Monroe:',
  localFaqs: [
    {
      q: 'Can a house built after 2000 in Monroe need a new panel?',
      a: 'It happens, though usually a new circuit is enough. When the builder panel has open spaces and enough service behind it, a car charger or spa connects directly. When it’s full, or the house would pull more than the service allows, a bigger panel or upgraded service is the fix.',
    },
    {
      q: 'Who pulls the permit for panel work in Monroe?',
      a: 'We do. Monroe sits across Butler and Warren counties, which leaves plenty of owners unsure where permits go. We file, arrange the inspection and meet the inspector on site, so none of that lands on your desk or eats your afternoon.',
    },
    {
      q: 'I rent a house in Monroe. Who calls you about the panel?',
      a: 'Your landlord or property manager does. Describe the trouble in a dated message and keep a copy for yourself. Ohio’s ORC 5321.04 (A)(4) has landlords keep supplied electrical fixtures in good and safe working order. We replace panels, not leases, so the owner books and approves it.',
    },
  ],
  overrides: {
    ctaLine: 'Panel upgrades for newer subdivisions and older streets in Monroe',
    band1Heading: 'Signs a Home in Monroe Needs a New Electrical Panel',
    commonSituations: [
      'A builder panel full to the last slot with a car charger on order',
      'Breakers tripping ever since the spa or basement bar went in',
      'Lights sagging when the electric heat or air conditioner kicks on',
      'A warm, buzzing cover on an older panel near Main Street',
    ],
    proseSections: [
      {
        title: 'Benefits of a New Electrical Panel for Homes in Monroe',
        body: 'In most of Monroe, a new panel is about adding, not fixing. A car charger, heat pump, spa or basement finish each gets a dedicated circuit, so the kitchen stays on while the car charges overnight. Every circuit is labeled as we go. Where an older house still has a small panel or fuses, breakers take over. At sale time, a buyer’s inspector checks whether the panel has space left, and a new one with open slots answers that before closing. That headroom matters more each year as households add electric equipment.',
      },
      {
        title: 'Electrical Panel Repair or Replacement in Monroe',
        body: 'Testing shows the answer, not the build year. In a subdivision house, the fix is often small. One breaker that quit, a lug that worked loose and browned, or a single circuit with a fault gets handled on its own, and the builder panel keeps its place. Replacement makes sense when the box is out of slots for what you’re adding, shows heat damage or scorching, is a model nobody supplies parts for, or still holds fuses. You see both figures before deciding. Flip any tripped handle hard off, then on, and press reset on GFCI outlets in bathrooms, the kitchen, garage and patio, since one can starve the rest.',
      },
      {
        title: 'Sizing and Permits for a New Electrical Panel in Monroe',
        body: 'The right capacity comes from the loads you have and the ones you’re planning, like a charger or a bonus room, rather than from the rating printed on the builder’s door. Now and then the meter base or the service wires need an upgrade too, and that shows as its own line. The electric utility pulls and resets the meter on the day. Permit and inspection are part of our job.',
      },
    ],
    whyTitle: 'Why Homeowners in Monroe Choose Us for Electrical Panel Replacement',
    whyParagraph:
      'Chargers, spas and new panels in houses across Monroe are a big part of our work. Every technician is licensed, insured and drug tested, you approve a flat price first, and weekends carry no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does replacing a panel cost in Monroe?',
        a: 'We price after testing. The panel, the service size your house needs, any meter socket work and the permit set the number. Adding a single circuit to a newer panel costs far less than a full swap, and we say which one you need before you approve.',
      },
      {
        q: 'Which signs mean my panel in Monroe should be replaced?',
        a: 'Frequent trips, lights dimming under big loads, a warm or buzzing door, scorch marks, or no room for the equipment you’re adding. In the newer houses here, that last one is the reason most owners call about a panel.',
      },
      {
        q: 'Why isn’t swapping a panel a do-it-yourself job?',
        a: 'The incoming service wires stay energized even with the main breaker off, and the utility has to cut power at the meter. The work also needs a permit and a final inspection. A licensed electrician does it, so the house is safe and the sign-off is clean.',
      },
    ],
  },
};
