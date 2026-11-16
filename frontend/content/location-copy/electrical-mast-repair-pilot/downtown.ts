import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Census figures show close to nine in ten households in Downtown Cincinnati rent, and most live in buildings of fifty or more units. The mast work here is for owners and associations of the smaller, older buildings, whose pipe may still run up a front wall or through the roof. About four in ten homes predate 1940, and the conductors and flashing on those buildings have been through decades of rain. We go over the service entrance top to bottom and agree a flat price with the owner.',
  emergencyParagraph:
    'Sparks at the weatherhead, a mast a falling limb has knocked loose from the wall, or half the units going dark all call for help that day. Keep everyone back from a downed line and let Duke Energy Ohio know, since it may still be live. On the building side, most calls get a same-day visit, weekends included.',
  commonIntro:
    'On the smaller and older buildings in Downtown Cincinnati, these are the signs owners and residents spot first:',
  localFaqs: [
    {
      q: 'Who fixes a damaged mast on my apartment building in Downtown Cincinnati?',
      a: 'That falls to the building’s owner or manager, so tell them in writing about any flicker or damage you can see. ORC 5321.04 puts Ohio landlords on the hook for keeping the electrical systems they provide in good and safe working order. We fix masts, not leases, and we deal with the owner directly.',
    },
    {
      q: 'Does a condo association in Downtown Cincinnati have to approve mast work?',
      a: 'In most condo buildings the association handles it, since the mast and meters are on the exterior and serve more than one unit. Individual owners should go through the board or manager. We give the association the scope and a flat price, then plan the work around the utility’s visits.',
    },
  ],
  overrides: {
    ctaLine: 'Service mast repair for older buildings in Downtown Cincinnati',
    band1Heading: 'Signs You Need Service Mast Repair in Downtown Cincinnati',
    commonSituations: [
      'A mast on an older walk-up pulling away from the front wall',
      'Rust trails below the riser straps on the facade',
      'Rain getting in around the pipe where it passes through the roof',
      'Flickering power across several units fed by one service',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Downtown Cincinnati',
        body: 'On older buildings Downtown, the pipe often outlasts the parts around it. Where it’s straight and solidly anchored, a loose strap, a failed seal at the weatherhead or worn flashing gets repaired by itself. A pipe that’s bent, corroded or storm-damaged is replaced, and cable with a cracked or chalky jacket is replaced every time. We plan any replacement after looking at the building’s panel and meter sockets, so the work fits what’s there. When the wiring beyond the meters is part of the trouble, we’ll talk with the owner about rewiring.',
      },
      {
        title: 'Storm Damage to Service Masts in Downtown Cincinnati',
        body: 'Two forces wreck masts in Downtown Cincinnati: gusting wind and limbs dropping onto the overhead wires. Weight on those wires travels toward whichever end gives first, and that is the pipe screwed to your wall, never the pole. Gusts manage the same thing given enough winters. Once the seal where the pipe pierces the roof cracks, or the wire hook pulls out of the wall, water finds the meter, and the utility won’t re-energize until it’s right. Owner-side storm damage belongs with the building’s insurance carrier. After a storm, look up from across the street for a tilted pipe, a weatherhead peeling away or meters knocked askew.',
      },
      {
        title: 'The Utility’s Side and Yours in Downtown Cincinnati',
        body: 'Downtown, the utility’s share is the overhead wire coming in from the pole plus the meter. The building owner holds everything else at the service entrance, from the mast and weatherhead through the riser, conductors and meter base. The utility disconnects, our electrical work takes a single day, Inspection Bureau, Inc. (IBI) checks it for the city, and the utility reconnects. Tenants live through each step, so the permit is filed the moment the owner books.',
      },
    ],
    whyTitle: 'Why Owners and Associations in Downtown Cincinnati Choose Us for Mast Repair',
    whyParagraph:
      'Owners get a licensed electrician who checks every part from the cap to the panel, rebuilds or repairs the mast to code and reseals the roof penetration. Permits are filed at booking, and the flat price comes first.',
    sharedFaqs: [
      {
        q: 'How is mast repair priced for a building in Downtown Cincinnati?',
        a: 'The owner gets one flat rate, once we’ve been over the service entrance. Whether we’re repairing or replacing the mast drives most of the number, with the cable and flashing to renew and the permit making up the rest. Qualifying homeowners can finance, and work waits for the owner’s approval.',
      },
      {
        q: 'How long will tenants be without power during the repair?',
        a: 'Our electrical work fills a single day. The building stays off from the utility’s disconnect until it reconnects, and it won’t reconnect before the inspection passes. Because we schedule the inspection when the job is booked, the owner can give tenants a date well ahead.',
      },
      {
        q: 'Can a storm damage the mast on a city building?',
        a: 'It can. Debris or a limb across the overhead wires puts the strain on the mast instead of the pole, and wind can work a strap or seal loose over time. Rain getting past a shifted roof seal keeps the utility from reconnecting. Insurance handles storm damage on the owner’s side, not the utility.',
      },
    ],
  },
};
