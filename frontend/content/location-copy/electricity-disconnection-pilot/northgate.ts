import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northgate: LocationServiceCopy = {
  localParagraph:
    'A pulled meter and a hanger on the door in Northgate mean one thing. Power comes back after a licensed electrician sets right the owner’s equipment and, most times, an inspector passes the job. By Census count, more than half the homes here went up during the 1960s and 1970s, chiefly single houses near Springdale Road along with a few large complexes. Original panels from that era are common, and their grounding often misses current code. Everything gets diagnosed and priced on paper first.',
  emergencyParagraph:
    'Half of Northgate or so heats with electricity, so a dead service there can mean a cold house, no air conditioning and a sump pump sitting idle. Keep your distance from a meter box torn loose. Call 911, then Duke Energy Ohio, about any line on the ground. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'In the older single houses and big apartment complexes of Northgate, these causes come up most:',
  localFaqs: [
    {
      q: 'Why would only half of my house in Northgate have power?',
      a: 'Most often one of the two legs feeding the house has failed, at the overhead connection or in the panel. Have it checked soon. Running on one leg pushes odd voltages into motors and circuit boards, and a heat pump or electric furnace is high on the list of what can be damaged.',
    },
    {
      q: 'How do residents of a large apartment complex in Northgate get power restored?',
      a: 'Through the management office. If your unit or building has been disconnected, report it in writing to the manager or landlord and keep any notice. ORC 5321.04 makes Ohio landlords maintain the electrical systems they provide, and management schedules the repair. We handle the service and leave leases to them.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for houses and apartment complexes in Northgate',
    band1Heading: 'Common Causes of Electricity Disconnection in Northgate',
    commonSituations: [
      'Half the house dark, electric furnace included, after a leg failed at the connection',
      'A burned meter socket on a 1960s house with melted plastic around the jaws',
      'An original panel tagged for a ground that falls short of present code',
      'A storm limb that tore the drop off the house and bent the riser',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Northgate',
        body: 'Since your service is already off, we diagnose all of it before giving a number, weatherhead and riser first, then entrance cable, socket, breakers, ground rod and bonding. What turns up decides whether this is a riser, socket or panel repair and so which permit applies. In unincorporated Colerain Township, Inspection Bureau, Inc. (IBI) does the electrical inspection, and we put in for theirs on the day you book, because that date is normally the wait. Grounding is corrected to present code. When the meter goes back, each breaker is closed separately, the panel is relabelled and you get notes on what to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Northgate',
        body: 'The split surprises most owners. The utility keeps its line and the meter, but the box the meter plugs into is yours, together with the riser, weatherhead, entrance cable and breaker panel, so a tag lands the repair on you. Tags here usually cite a hazardous panel, a ground that isn’t there or bare live wiring, and they mean the service must not be energised. Cleaning it up for looks won’t lift one. A licensed correction plus an inspector’s pass will. Keep the hanger or tag. A pulled or locked meter stays untouched; in Ohio, tampering is criminal.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Northgate',
        body: 'Before re-energising a house that stood vacant through a sale, or a unit waiting for a tenant, we go over it carefully, because a 1960s panel or its ground can lag code badly. A short inspection clears some houses; others need a panel, and you’ll hear which after the look. Rebuilding the original service involves the same labour, permit and inspection as a properly sized replacement, so both appear on the quote.',
      },
    ],
    whyTitle: 'Why Homeowners and Residents in Northgate Choose Us for Disconnection Repair',
    whyParagraph:
      'Losing the service in a home heated by electricity means losing heat and the sump pump together, so we treat it as urgent. Licensed electricians make the required repair, handle the permit and inspector, and set the price first.',
    sharedFaqs: [
      {
        q: 'How much does it cost to fix a disconnected service in Northgate?',
        a: 'The failure decides. One meter socket and a complete service swap are very different amounts of labour. After diagnosing it, we give one flat figure in writing before starting, and whatever the utility charges is billed by the utility. Qualifying homeowners can finance.',
      },
      {
        q: 'How quickly can power be restored in Northgate?',
        a: 'Our repair commonly wraps up in one day. Most of the remaining wait belongs to the inspection, and the inspector controls that calendar. Requesting the visit at booking keeps the gap between our finished work and the reconnect as small as it can be.',
      },
      {
        q: 'Am I allowed to reconnect the power myself in Northgate?',
        a: 'No. Pulled or padlocked, that meter is the utility’s, and Ohio makes meddling with metering gear a criminal offence. And because the shutoff came after a fault, putting power back unrepaired would drive current into equipment the utility already rejected.',
      },
    ],
  },
};
