import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Just over half of Bethel rents, so we test as many rentals here as owner-occupied houses. Census figures count more rented homes than owned ones in the village, and over a third of units are in buildings of three or more apartments. The houses from before 1940, roughly a quarter of the stock, are where we find damp cellars and drafts. We test before we quote and quote before we work; a clogged filter gets called a clogged filter, and that’s the end of it.',
  emergencyParagraph:
    'A sounding carbon monoxide detector or a gas smell means everybody goes out without touching switches, then phones 911 or the gas company. A furnace or AC with a burning odor gets shut off at the thermostat. Mold creeping over wet drywall is urgent too, worst for infants, grandparents and asthmatics. We come same day on most, weekends too.',
  commonIntro:
    'Owners and tenants in Bethel tend to describe the same handful of complaints:',
  localFaqs: [
    {
      q: 'I rent in Bethel, and my apartment smells like a cellar. Can I book the test myself?',
      a: 'Put the complaint to your landlord on paper first, noting the rooms where it’s worst. Under Ohio’s ORC 5321.04 (A)(2) an owner has to keep a rental fit and habitable, and dampness and mold count. We fix air, not leases, so in a rental the owner orders our test and signs off on equipment.',
    },
    {
      q: 'Does a pre-1940 house in Bethel need air equipment, or just a better filter?',
      a: 'It depends on what the meter says. A cellar that reads damp points to a dehumidifier tied into the furnace, and dust drifting from loose old duct joints points to stronger filtration. Plenty of times the reading is fine and the filter was simply overdue, and we leave it at a new filter.',
    },
  ],
  overrides: {
    ctaLine: 'Air tests for village houses and rentals in Bethel',
    band1Heading: 'Signs an Apartment or Home in Bethel Has an Indoor Air Quality Problem',
    commonSituations: [
      'A cellar smell that drifts up the stairs of a house older than 1940',
      'Tenants in a three- or four-unit building finding fresh dust on the sills by midweek',
      'Doorknobs that zap you after a few weeks of steady winter heat',
      'Beads of water on old window glass on frosty mornings',
    ],
    proseSections: [
      {
        title: 'What Indoor Air Quality Service Includes in Bethel',
        body: 'In Bethel, our test reads three things: how much dust is floating, how moist the air is, and where water has left marks, whether on cellar block, window sills or around supply grilles. After that we pull the filter, peer into the ductwork and look over the furnace or AC that moves the air. Older village houses usually give themselves away in the cellar and the duct joints. For a rental, the owner gets a written summary. We suggest only what the readings justify, each item carries a quoted price, and nothing is fitted until someone says go ahead.',
      },
      {
        title: 'When Indoor Air Quality Equipment Is Worth It, and When It Isn’t',
        body: 'Spend the money when the readings back it up: a family member wheezing with asthma or fighting allergies, a cellar that smells sour, winter air dry enough to split knuckles, pets, or dust that resettles within days. Hold off when the filter is choked, since swapping it may be the whole cure. A single stuffy bedroom often does fine with a plug-in room unit. Where mold grows from a dripping pipe, the drip is repaired before any equipment. Gas odors and carbon monoxide alarms are emergency calls, not air quality work. Meanwhile, replace a grimy filter, let the bathroom fan run after showers, and don’t park furniture over a return.',
      },
      {
        title: 'Humidity and Filtration for Homes in Bethel',
        body: 'Bethel sits in the Ohio Valley, so July air is muggy and January air goes thin and dry once the furnace settles in. A dehumidifier wired into the HVAC system pulls the cellar and the upstairs back from muggy, and a humidifier on the same system adds moisture while the heat runs. For germs, dander and cooking odors, a whole-house air cleaner on the return line treats every room with a duct.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Bethel Choose Us for Indoor Air Quality',
    whyParagraph:
      'Landlords with small buildings and owners of old village houses both call us in Bethel. We’ve been family owned since 1993, every technician is licensed, insured, background-checked and drug-tested, and quotes are flat and approved in advance.',
    sharedFaqs: [
      {
        q: 'What will an air quality fix cost me in Bethel?',
        a: 'There’s one flat price per fix, and you get it after the test rather than before. Most of the number comes from the equipment itself and from how easily it ties into your furnace or AC, so a cramped cellar install runs higher than an open utility room. You sign off before we start.',
      },
      {
        q: 'How do I know the air in my place is bad?',
        a: 'Sneezing that eases when you leave home, a closed-up cellar smell, shelves needing a dust again by the weekend, fog on the inside of the glass on cold days, and static or split lips through winter. Any two of those together make the test worthwhile.',
      },
      {
        q: 'How often should a furnace filter get changed?',
        a: 'Go by its color, not the calendar. Slide it out, and if it’s gone gray and blocks the light from a lamp, put a new one in. Pets and long stretches of heat or cooling load it faster. Landlords should check every unit’s filter on the same round.',
      },
    ],
  },
};
