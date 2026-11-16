import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const summerside: LocationServiceCopy = {
  localParagraph:
    'In Summerside, power Duke Energy Ohio has disconnected returns once our licensed electrician has repaired what the owner is responsible for and, most times, an inspector has approved it. Most homes here went up between the 1960s and the 1990s, by Census figures, and about half are townhouses, condos or apartments. That means plenty of shared meter banks, where one damaged socket can leave neighbours in the dark too, and panels now old enough to be first-generation. We diagnose it and write down the price first.',
  emergencyParagraph:
    'A condo or house in Summerside without electricity has no furnace, no AC and no working sump, and that gets more expensive as the hours pass. Keep your distance from a meter box broken off the wall. A wire down needs 911 and the utility first. Our electricians are out the same day on most calls, weekends too.',
  commonIntro:
    'Condos, apartments and 1970s and 1980s houses around Summerside usually go dark for one of these reasons:',
  localFaqs: [
    {
      q: 'Our condo building in Summerside has a shared meter bank. Who approves the repair?',
      a: 'Anything on a shared meter bank or the building’s exterior may need the association’s go-ahead before it starts. Owners usually work through the board or management company, and we can explain what failed in plain terms so they can approve it quickly.',
    },
    {
      q: 'Who handles the permit for disconnection repair in Summerside?',
      a: 'Clermont County Building Inspection, known as Permit Central, because Summerside sits in unincorporated Union Township. Our office files there once you sign off on the job and requests an inspection in that same filing, so approval isn’t left trailing the repair.',
    },
    {
      q: 'I rent an apartment in Summerside. Can I hire you to restore the power?',
      a: 'Tenants don’t book this; the owner or the management company does. Email or write to them about the outage and keep what you send. Landlords in Ohio have a duty under ORC 5321.04 to keep the electrical fixtures they supply safe and working. We take care of the service and leave the lease to you and them.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection work for condos, apartments and houses in Summerside',
    band1Heading: 'Common Causes of Electricity Disconnection in Summerside',
    commonSituations: [
      'One heat-damaged socket on a condo meter bank that got the whole bank tagged',
      'A first-generation 1970s panel the utility flagged for missing bonding',
      'A branch that came through the overhead drop in a storm and bent the riser',
      'A townhouse empty long enough after a sale that the service needed a fresh check',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Summerside',
        body: 'Power’s off, so the first trip is spent finding out why. Outside we check the riser, service head and the cable feeding the meter; inside, the socket, panel, ground rod and bonding. The answer tells us if this is a riser, a socket or a panel, and that fixes the permit. While the failure is repaired, any bonding or grounding short of current code is brought up to it, which the county inspector expects. The inspection is requested as soon as you say yes to the work. After the meter is reset, each breaker is raised separately, the directory is rewritten, and you get notes on anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Summerside',
        body: 'Whether it hangs on a condo meter bank or a single house, a red tag means nobody switches the service on. Inspectors and utility crews leave them for an untrustworthy panel, grounding that was never done or conductors anyone could touch. Cleaning up what looks bad won’t get it taken down. It comes down only after our electrician sorts out the cause and the inspector signs. Keep the tag or note somewhere safe. Leave a locked or missing meter alone, too. Ohio treats interfering with one as a crime, and after a fault it would push power into equipment already judged unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Summerside',
        body: 'A unit sitting empty between leases, or a townhouse unsold for a while, gets a slower once-over before anyone turns it back on. Sometimes that once-over is the whole job; on other visits it ends in a new panel, and you’ll hear which once we’re done looking. On 1970s and 1980s equipment, a like-for-like refit means paying labour, permit and inspection again before long, so we quote a correctly sized modern service next to it.',
      },
    ],
    whyTitle: 'Why Homeowners and Residents in Summerside Choose Us for Disconnection Repair',
    whyParagraph:
      'We treat a home without power in Summerside as an emergency. Licensed electricians make the utility’s required repair, file with the county, meet the inspector and give you the price in writing first.',
    sharedFaqs: [
      {
        q: 'How much does it cost to restore a disconnected service in Summerside?',
        a: 'Price follows the failure. Swapping one scorched socket on a shared meter bank is a lighter job than a fresh service for a whole house, though bank work can widen the scope. We diagnose, then you get one flat figure in writing, with utility charges kept apart. Qualifying homeowners can finance.',
      },
      {
        q: 'How long will the repair and reconnect take in Summerside?',
        a: 'The repair on our side is usually a single day. The county’s inspection schedule sets the rest of the wait, so we ask for a slot when you approve the job instead of once we’re done. Nothing else shortens the outage as much.',
      },
      {
        q: 'Can I put a pulled meter back myself to get the power on?',
        a: 'No. Pulled or locked, the meter is utility equipment, and Ohio law makes tampering with it a criminal offence. After a fault-related cut, you’d also be energising the very equipment that failed. Reconnection is the utility’s step, after the inspector passes the work.',
      },
    ],
  },
};
