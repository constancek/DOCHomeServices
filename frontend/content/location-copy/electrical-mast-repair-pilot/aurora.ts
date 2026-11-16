import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Aurora has old houses mixed in with small multi-unit buildings. The median home there was built in 1952, close to four in ten predate 1940 and roughly a fifth of all units are in two- to four-unit buildings, by Census figures. We see plenty of masts still wearing original flashing and conductors, and some feed more than one household. Each job runs from the weatherhead down to the meter base, and the price is agreed before anything comes off the wall.',
  emergencyParagraph:
    'Get in touch immediately when a limb has wrenched the mast away, the weatherhead crackles and sparks or half the building loses power. A fallen line should be treated as live, so stay well away and alert your utility. We get to the owner’s side of the connection the same day on most calls in Aurora, weekends included.',
  commonIntro:
    'Owners in Aurora usually call us about one of these:',
  localFaqs: [
    {
      q: 'My building is in the downtown historic district in Aurora. Does mast work need approval?',
      a: 'Exterior work in the local downtown district generally needs a Certificate of Appropriateness from the Aurora Historic Preservation Commission before Dearborn County issues a building permit. We find out what your job needs before we schedule it, and keep the new mast in the same spot as the old one wherever the code allows.',
    },
    {
      q: 'I’m renting in Aurora and the lights flicker. Who should fix it?',
      a: 'Tell your landlord in writing and describe what you see, such as flickering, dead outlets or a mast that looks crooked. The owner is responsible for the mast and books the work. We repair the connection once the landlord schedules us and approves the price.',
    },
  ],
  overrides: {
    ctaLine: 'Service mast repair for old houses and small buildings in Aurora',
    band1Heading: 'Signs You Need Service Mast Repair in Aurora',
    commonSituations: [
      'Orange streaks below the mast fittings on an older brick or frame house',
      'A meter box on a two- or four-unit building tilting away from the wall',
      'Frayed insulation where the conductors leave the weatherhead',
      'Lights flickering in more than one unit at once',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Aurora',
        body: 'Plenty of older masts in Aurora can stay up with a little work, perhaps a replacement strap, a weatherhead gasket or new flashing at the roof. A pipe that has kinked, rusted at the threads or been mangled by a storm comes down instead. Jackets on the conductors that have cracked or gone chalky mean new wire, because rain sneaking past the weatherhead rides down inside that wire into the meter box and panel and corrodes lugs no one sees. Before a new mast is planned, the panel and meter socket get looked over, so the parts fit the house or building. Worn inside wiring may point to home rewiring.',
      },
      {
        title: 'Storm Damage to Service Masts in Aurora',
        body: 'In Aurora, bad weather sends us out to more masts than age does. Once a limb comes to rest on the overhead drop, it heaves on the pipe at the roof, and the pipe bends while the pole stands firm. Wind can do the same work over time. Worry when the roof flashing cracks or the drop’s clamp slips, because rain then gets inside and the utility keeps the power off until the entrance is sound. Storm damage on the owner’s side is a matter for the property insurance, not the utility. Afterward, look up from the street for a leaning mast or a tilted meter box.',
      },
      {
        title: 'The Utility’s Side and Yours in Aurora',
        body: 'Whoever owns the property owns the mast as well, along with its weatherhead, riser, conductors and meter box. Before we start, the utility cuts the service, and it turns it back on only once an inspector has approved what we did. On our end, the work usually takes a single day. Since power can’t return without that approval, we file the permit and line up the inspection the day you schedule.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Aurora Choose Us for Mast Repair',
    whyParagraph:
      'Before any quote, a licensed electrician goes over the mast, weatherhead and meter base, then sets the mast to code and reflashes where it meets the roof. We file the permit at booking and fix the price first.',
    sharedFaqs: [
      {
        q: 'How much does it cost to fix a service mast in Aurora?',
        a: 'Expect a single flat price once the connection has been inspected. Resealing or restrapping is a small job next to a whole new mast; more conductor or flashing work and the permit add to it, and on a multi-unit building the meter arrangement matters too. You approve before we start, and qualifying homeowners can finance.',
      },
      {
        q: 'How long does mast replacement take from start to finish?',
        a: 'The work on the mast is usually a single day. Start to finish depends on the utility, which disconnects before we begin and reconnects after the inspection passes. We put in for that inspection as soon as you book, so the paperwork isn’t what keeps you waiting.',
      },
      {
        q: 'Can storms damage the service mast on an old house?',
        a: 'They can, and they’re usually the cause. A branch caught in the drop levers the mast out of line, and repeated wind loosens it. Old flashing and seals are already near the end, so even a small shift lets water reach the roof framing or the meter.',
      },
    ],
  },
};
