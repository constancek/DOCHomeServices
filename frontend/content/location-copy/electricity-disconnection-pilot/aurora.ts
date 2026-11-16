import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Floodwater, a scorched meter socket or a tag on the door can all leave a house in Aurora without power, and your utility reconnects only after a licensed electrician repairs the owner’s equipment, generally with an inspector’s sign-off. Census figures date almost four in ten homes in the city to before 1940, and about one in five sit in two-to-four-unit buildings, so riverfront houses often keep original panels and grounding nobody has updated. We find the cause first, then quote it on paper.',
  emergencyParagraph:
    'Close to the Ohio, a house in Aurora without power has no sump pump on top of no heat or cooling. Keep the family away from a dangling meter box. A wire down in the yard is a 911 call, then one to your utility. An electrician reaches most of these calls that day, weekends included.',
  commonIntro:
    'In the old riverfront houses and two-to-four-unit buildings of Aurora, a cut service tends to follow one of these.',
  localFaqs: [
    {
      q: 'After a flood in Aurora, can a panel that sat under water be used again?',
      a: 'Not in that state. Equipment that has sat under floodwater can’t be re-energised, since corrosion creeps into the connections out of sight and keeps going. We replace the panel or meter base the water reached, handle the permit and inspection, and then ask your utility to restore service.',
    },
    {
      q: 'Does service work on a house downtown in Aurora need historic approval?',
      a: 'Possibly. Downtown Aurora is a local historic district under city ordinance, so anything beyond paint or routine upkeep needs approval from the Aurora Historic Preservation Commission, called a Certificate of Appropriateness, ahead of the county building permit. Service equipment on a front wall can fall under that, so we check before ordering parts.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for older homes in Aurora after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Aurora',
    commonSituations: [
      'A basement panel near the river that sat in floodwater and can’t be re-energised',
      'Heat-scarred plastic ringing the meter of a pre-1940 riverfront house',
      'A red tag on a two-family over missing grounding or exposed conductors',
      'Lights working in some rooms and dead in others, from one leg of the service lost up at the drop',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Aurora',
        body: 'We treat an outage like this as a search. From the top of the house, the electrician works along the mast and entrance cable to the meter base, then into the panel and out to the ground connections. In the older buildings in Aurora that path usually shows the fault fast and tells us whether a mast, a meter base or a panel is involved, which decides the permit. Grounding and bonding get corrected to current code as we go, and the inspection is filed and booked before the repair is finished. When your utility returns the meter, we energise circuit by circuit and leave notes on anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Aurora',
        body: 'In Aurora a red tag usually traces to a panel someone judged dangerous, grounding that was never there, bare live conductors, or work that never had a permit or didn’t pass. Read the tag as a firm do-not-energise. Tidying the worst bit leaves it in force. It comes off only after a licensed electrician corrects the cause and an inspector signs off. Hang on to whatever the utility left on the door, because the reason is usually written there. If the meter has been pulled or locked, leave it. In Indiana that lock is the utility’s to take off, and the service behind it was already ruled unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Aurora',
        body: 'An inherited house in Aurora can sit empty for a stretch, and rentals wait between tenants; either way, a long-dead service gets a slower look, since an old panel or its grounding can trail well behind current code. A short inspection may be all it needs, or it may become a panel replacement. If you rent, tell the landlord, who books the work. We price a straight refit and a modern service side by side.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Aurora Choose Us for Disconnection Repair',
    whyParagraph:
      'Riverfront basements need their sump pumps and houses need heat, so a disconnection in Aurora gets our quickest response. Licensed electricians make the repair your utility wants, handle the permit, meet the inspector and agree a price up front.',
    sharedFaqs: [
      {
        q: 'What will the repair and reconnect cost in Aurora?',
        a: 'That comes down to what failed, and a new meter base costs far less than a whole new service. Once diagnosed, the job gets one flat rate on paper before work begins, kept separate from anything your utility charges. Qualifying homeowners can use financing.',
      },
      {
        q: 'When can we expect the lights back in Aurora?',
        a: 'Our repair is usually finished within a single day. What follows depends on the inspection, and that runs on the inspector’s schedule, not ours. Asking for it along with the repair rather than afterwards does the most to cut your time without power.',
      },
      {
        q: 'May a homeowner remove the meter lock to restore power in Aurora?',
        a: 'No. In Indiana the lock is the utility’s to remove, and nobody else’s. The service was also cut because something on it was unsafe, so power that returns before the repair and inspection goes straight into that fault.',
      },
    ],
  },
};
