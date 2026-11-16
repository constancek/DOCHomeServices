import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Before 1940 is when half of Hyde Park’s housing went up, by the Census count, and a third of it is in apartment buildings of five or more units. On a prewar house, the service pipe often rises through the roof, so the flashing boot around it and the cable inside it have frequently never been replaced. Decades of freeze and thaw open those seams. We follow the service from the weatherhead to the breaker panel and hand you a fixed price before a single tool comes out.',
  emergencyParagraph:
    'If a falling branch has wrenched the pipe sideways, the weatherhead is throwing off sparks or half your rooms just went dark, ring us. Anything lying across the yard or sidewalk should be treated as energized, so keep back from it and let Duke Energy Ohio know. On the house end, we’re usually there that day, weekend days counted.',
  commonIntro:
    'These are the warning signs we turn up most on prewar houses and apartment buildings in Hyde Park.',
  localFaqs: [
    {
      q: 'Why does the ceiling leak right where my mast goes through the roof in Hyde Park?',
      a: 'Because the flashing boot around the pipe has failed, which is common on houses this old. Rain then runs along the outside of the conduit, into the framing over your ceiling and down toward the meter base. Sealing it is part of our mast repair, so you aren’t left hunting for a roofer afterward.',
    },
    {
      q: 'My apartment in Hyde Park has a rusty meter box outside. Is fixing it my landlord’s job?',
      a: 'It is. Under ORC 5321.04, an Ohio landlord owes tenants supplied electrical systems kept in good and safe working order, and the meter box counts. Snap a photo and email it to the landlord so there’s a record. Our job is the wiring, not the lease, so we arrange the visit through the building owner.',
    },
  ],
  overrides: {
    ctaLine: 'Mast and weatherhead work on prewar houses in Hyde Park',
    band1Heading: 'Signs You Need Service Mast Repair in Hyde Park',
    commonSituations: [
      'A pipe on a prewar house leaning out of plumb after a windy night',
      'A brown ring on the top-floor ceiling under the roof boot',
      'Orange streaks on the brick below the riser straps',
      'Back-room lights that flicker every time the wind gusts',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Hyde Park',
        body: 'If the pipe is straight and the trouble is minor, the job stays small. A slack strap gets swapped, the weatherhead gets fresh sealant or a cracked roof boot gets replaced. Pipe that’s kinked, rusted thin or folded by a limb comes off entirely. So does any conductor run whose jacket has gone chalky or split, since nobody can tape that back to safe. Before quoting a full replacement, we open the meter socket and panel and check the cable, then size the new parts to this house instead of grabbing a stock kit. If what we find behind the panel is tired, we’ll bring up home rewiring.',
      },
      {
        title: 'Storm Damage to Service Masts in Hyde Park',
        body: 'Here’s the mechanics. A limb settles across the overhead wires, the pole shrugs, and your mast at the roofline bends instead. Gusty wind repeats that in miniature for years. When the tilt opens the boot at the roof or works the wire clamp loose, rainwater gets a route inside, and the utility refuses to switch you back on until it’s corrected. Your homeowner’s policy, rather than the utility, is where that storm repair belongs. Once branches have come down around Hyde Park, step into the drive, look up, and make sure the pipe stands plumb, the weatherhead is snug to the wall and the meter box sits square.',
      },
      {
        title: 'The Utility’s Side and Yours in Hyde Park',
        body: 'Ownership flips where the overhead wires clamp to your wall. The utility’s side covers those wires and the meter. Your side covers the conductors, riser, weatherhead, pipe and meter box. On repair day, the utility kills the service, we spend a single day on the electrical work as a rule, IBI (Inspection Bureau, Inc.) inspects, and then power returns. Putting the permit in at booking keeps that chain from stalling.',
      },
    ],
    whyTitle: 'Why Owners of Older Houses in Hyde Park Choose Us for Mast Repair',
    whyParagraph:
      'A licensed electrician traces your service entrance end to end, brings the mast back to code, seals the roof hole with new flashing and files the permit at booking. The price is agreed in writing first.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for a mast repair in Hyde Park?',
        a: 'Expect a single flat price, worked out once we’ve gone over the weatherhead, pipe, cable and meter. Resealing and restrapping is a modest bill, a whole new pipe a bigger one, and the length of conductor, the flashing and the permit shift it as well. You okay the number first, and financing is open to qualifying homeowners.',
      },
      {
        q: 'Will my house in Hyde Park sit without power for days during a mast repair?',
        a: 'It rarely runs that long. Our wiring work fits into a single day in most cases, and the dark stretch lasts from the utility’s disconnect, through the inspection, to its reconnect. Requesting the inspection the moment you book trims more waiting than anything else.',
      },
      {
        q: 'Do storms in Cincinnati really bend service masts that often?',
        a: 'Most of our mast calls come straight after one. A branch draped on the wires drags the pipe out of plumb, and gusts keep worrying at it. Once that cracks the boot at the roof or loosens the wire clamp, water starts getting inside, and the utility won’t reconnect until we’ve set it right.',
      },
    ],
  },
};
