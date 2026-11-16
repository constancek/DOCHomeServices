import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const linwood: LocationServiceCopy = {
  localParagraph:
    'Linwood is small and old, and a disconnected service here comes back only when a licensed electrician has repaired the owner’s side and, in most cases, an inspector has passed it. Census figures date more than eight in ten homes to before 1940, many of them two-family houses, and just over half are rented. Behind those walls we often meet a first-generation panel, grounding that never met modern code and a meter socket heated for decades. You see our findings and a written price before we start.',
  emergencyParagraph:
    'Nearly every home here heats with gas, yet the furnace still needs electricity to fire and blow, so a dead service means no heat, cooling or sump pump. Stand back from a meter box peeling off the wall. Call 911 and Duke Energy Ohio about any downed line. Most calls in Linwood get an electrician the same day, weekends included.',
  commonIntro:
    'In the prewar single and two-family houses of Linwood, the services we bring back were usually cut for one of these:',
  localFaqs: [
    {
      q: 'Who inspects the repair before a house in Linwood is reconnected?',
      a: 'Linwood lies within Cincinnati city limits, so Inspection Bureau, Inc. (IBI), working under contract with the city, reviews the electrical permit and carries out the inspection. Our office handles the permit for whatever we replace, meter base, mast or panel, and puts in for IBI the moment you approve the work.',
    },
    {
      q: 'Do both halves of a two-family in Linwood need separate repairs after a disconnection?',
      a: 'Not always. A shared mast, entrance cable or meter base can take out both units at once, while a fault inside one unit’s panel only darkens that side. We trace it to the source, then quote one job. As the landlord, remember that ORC 5321.04 makes you responsible for supplied wiring; we fix services, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection work for prewar homes and two-families in Linwood',
    band1Heading: 'Common Causes of Electricity Disconnection in Linwood',
    commonSituations: [
      'A fuse box or first-generation breaker panel the utility refused to energise',
      'A meter socket on a 1930s house with blackened jaws and cracked plastic',
      'A two-family that went dark on both sides after the shared mast pulled loose',
      'An older house left empty through an estate that now needs its service proven safe',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Linwood',
        body: 'Prewar services rarely fail in only one spot, so we read the entire thing before quoting. That covers the weatherhead and riser at the roofline, the cable to the socket, the panel and whatever grounding exists, often a single old water-pipe connection. Knowing all of it tells us whether you need a mast, a socket, a full panel or some combination, and which permit fits. Grounding and bonding get brought to present code in the same visit, as the inspector will look. We put the inspection request in when you sign. Once the meter is set again, each breaker is closed separately and you get notes on anything aging badly.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Linwood',
        body: 'The utility tags a service its crew refuses to switch on, and on houses this old the cause is often a panel past repair, a ground that is missing or broken, bare conductors or a socket cooked by heat. Respect the tag. Wiping away scorch marks does not cancel it; correcting the fault and passing inspection does. Any hanger or note at the door probably spells out what they saw, so keep it for us. Locked or missing meters should be left exactly as found. Ohio law makes meddling with a utility meter a crime, and powering up a tagged service just brings the hazard back.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Linwood',
        body: 'An inherited prewar house, or a two-family empty between tenants, gets slower, closer checks before it goes live again. Sometimes a brief inspection clears it, and sometimes the old panel has to go. Because our time and the permit cost about the same whether we restore the original setup or install a properly sized modern service, both prices come to you together.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Linwood Choose Us for Disconnection Repair',
    whyParagraph:
      'A dark house has no heat and no sump pump, which is why we answer fast. Licensed electricians make the repair the utility is holding out for, file the permit, meet the inspector and price it in advance.',
    sharedFaqs: [
      {
        q: 'What is the cost of reconnecting a house in Linwood?',
        a: 'The fault decides. Swapping a single cooked socket is light work next to rebuilding a whole prewar service. Once we have traced the problem, you get one flat price on paper and approve it before anything is touched. Utility fees stay with the utility. Qualifying homeowners can finance the work.',
      },
      {
        q: 'How many days will a house in Linwood be without power?',
        a: 'Most of our repairs finish in a single day. The open question is the inspection, which runs on the inspector’s calendar, not ours, and that is why the request goes in as soon as you hire us. Once it passes, we notify the utility and set up the reconnect.',
      },
      {
        q: 'Could I put the meter back myself to get the lights on?',
        a: 'No. The meter and any lock are utility property, and Ohio law makes tampering with them a crime. You would also be feeding power straight into the fault that got the service cut. Licensed repair and a passed inspection come first, then the utility reinstalls the meter.',
      },
    ],
  },
};
