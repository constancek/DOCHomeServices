import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bellevue: LocationServiceCopy = {
  localParagraph:
    'Nearly two homes in three in Bellevue date from 1939 or earlier by Census figures, which shows when Duke Energy Kentucky pulls a meter. Before reconnecting, the utility wants the owner’s side of the service put right by a licensed electrician, and in most cases signed off by an inspector. In houses that old the inspector finds plenty to check, with first-generation panels, grounding from another century and sockets baked by decades of current. We diagnose first and put the price on paper before work.',
  emergencyParagraph:
    'In Bellevue, a dead service leaves the furnace cold, the air conditioner silent and the basement pump still, and the bill climbs daily. Stay away from a meter box sagging off the house. Should a line come down, ring 911 and then the utility. On most disconnection calls an electrician arrives the same day, Saturdays and Sundays included.',
  commonIntro:
    'On the old streets off Fairfield Avenue, and elsewhere in Bellevue, a cut service generally traces to one of these four.',
  localFaqs: [
    {
      q: 'Will a new mast or meter base in Bellevue need historic approval?',
      a: 'It might. Houses in the Fairfield Avenue or Taylor’s Daughters districts fall under city review, where most changes to the outside of a building need a Certificate of Appropriateness. A new riser on a front wall could count, so we ask first. Campbell County Planning, Zoning and Building Inspection handles the permit, and we book the inspection with the repair.',
    },
    {
      q: 'Who owns the box the meter plugs into on a house in Bellevue?',
      a: 'You do, though almost nobody expects it. The utility’s equipment is the incoming line and the meter itself; the enclosure around the meter is the homeowner’s, along with the weatherhead, mast, riser and panel. Because of that split the repair is your cost, and storm damage to those parts is handled through your insurer.',
    },
    {
      q: 'If I rent in Bellevue, who do I contact about a disconnection?',
      a: 'Let the landlord know, ideally in writing, and hang on to a copy. The owner holds the service equipment and books the repair, and once they call us we work with them and the utility until the lights are back.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for the older streets of Bellevue',
    band1Heading: 'Common Causes of Electricity Disconnection in Bellevue',
    commonSituations: [
      'Soft, scorched plastic around a meter socket that has carried current since the 1930s',
      'Grounding an original panel never had, flagged with a red tag',
      'A house passed to heirs and kept empty until the utility asked for a service check',
      'Half the rooms out after one leg of the service failed up at the drop',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Bellevue',
        body: 'Before naming a price on a dark house, our electrician traces every part of the service, roof clip and riser, the cable down the brick or siding, the socket, the breakers and the ground clamp. A house of this vintage in Bellevue can hide two or three problems at once, so the findings decide whether we replace a mast, a meter base or a panel, and the permit follows. Grounding and bonding are corrected to current code as part of the job because the inspector checks them regardless. We book that inspection with the work, then energise circuits one at a time once the meter is in.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Bellevue',
        body: 'In Bellevue, red tags land on services with panels deemed unsafe, grounding that was never put in, conductors left bare, or wiring that flunked inspection or skipped the permit. Think of the tag as a ban on energising. Sweeping up the obvious hazard doesn’t lift that ban; correcting its cause under a licensed electrician, then passing inspection, does. Hold on to the tag or door hanger, since the stated reason shortens our diagnosis. A pulled or locked meter stays as it is. Kentucky law makes interfering with utility metering a criminal offence, and the act would put power back into equipment already ruled unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Bellevue',
        body: 'In Bellevue, an estate or a slow sale can leave a house closed up for a long time, and we go carefully before the power returns, since a long-idle service on an old panel can sit well outside current code. Sometimes a quick inspection does it; sometimes the panel has to go. Because labour, permit and inspection barely differ between a refit and a modern service, both prices appear on the quote.',
      },
    ],
    whyTitle: 'Why Homeowners in Bellevue Choose Us for Disconnection Repair',
    whyParagraph:
      'Old basements need a running sump pump and old houses need heat, so disconnections in Bellevue are urgent to us. Licensed electricians make the fix, file the permit, meet the inspector and agree the price first.',
    sharedFaqs: [
      {
        q: 'How is the price set when a house in Bellevue needs reconnecting?',
        a: 'The failed part sets it, and re-wiring one scorched socket costs a small share of a service rebuilt from the roof. After we locate the fault, you receive one flat price in writing ahead of the work, and anything the utility bills is separate. Qualifying homeowners can finance the repair.',
      },
      {
        q: 'How long does the reconnect usually take in Bellevue?',
        a: 'Expect our work to need a single day. The inspection fills the rest of the wait, on whatever schedule the inspector keeps. We ask for it the day you book us, not at the end, and that shortens the outage more than any other step.',
      },
      {
        q: 'Would cutting the meter lock get the power back sooner?',
        a: 'It would only make things worse, and it’s illegal. Kentucky law makes interfering with a utility’s metering a crime, and the lock and meter are theirs. The service was shut off because part of it was unsafe, so energising it before the repair and inspection puts current right into that defect.',
      },
    ],
  },
};
