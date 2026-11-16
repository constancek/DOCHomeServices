import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'Getting a cut service back in the East End takes two things the utility looks for, our repair to the equipment you own and, most of the time, an inspector’s approval. More than half the houses date from before 1940, by Census figures, and old panels, meter sockets and grounding tend to fall behind today’s code, which hands the inspector a longer list. The condos built along Riverside Drive since the 1990s are more often knocked out by storms. You get a diagnosis, then a written flat price.',
  emergencyParagraph:
    'Heat, cooling and the basement sump pump all hang on the service, and this close to the Ohio River the pump matters most. Don’t approach a meter box sagging off old brick. Phone 911 and Duke Energy Ohio about any fallen wire first. We’re out the same day on most calls, Saturday and Sunday too.',
  commonIntro:
    'Along the river strip of the East End, from the old rowhouses to the newer condos, we keep finding the same four reasons behind a cut service:',
  localFaqs: [
    {
      q: 'Why won’t the utility turn my power back on after the basement flooded?',
      a: 'Water ruins a panel or meter base for good, and neither can be re-energised once it has been submerged. The National Weather Service notes that basements flood across the East End when the Ohio River climbs high enough, which last happened in April 2025. We swap out the wet equipment and get the inspection booked.',
    },
    {
      q: 'Does the landlord or the utility fix a burned meter box on a rental?',
      a: 'The landlord. On the utility’s side sit the line and the meter, and nothing more. The meter’s housing, the mast and the breaker panel come with the building, which few owners expect. Ohio’s ORC 5321.04 puts landlords on the hook for safe, working electrical systems they’ve supplied. We restore power, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for riverside houses and condos in the East End',
    band1Heading: 'Common Causes of Electricity Disconnection in the East End',
    commonSituations: [
      'A panel or meter base that took river water and can’t be switched back on',
      'A scorched meter socket with melted plastic on a pre-war rowhouse',
      'A red tag over missing grounding in a two-family converted long ago',
      'A storm limb that ripped the drop away and left the mast leaning on a riverside house',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in the East End',
        body: 'Since you’re already in the dark, our electrician works down the service from the roof cap, checking mast, cable, socket, breakers and ground rod in turn. Whatever fails that check decides the job and its permit. City addresses file electrical permits with Inspection Bureau, Inc. (IBI), and we ask for the inspector the same day we pencil in the repair, because the inspection, not our work, is the real hold-up. Bonding and grounding are corrected to code whether or not they caused the cut. Power comes back breaker by breaker, and anything we’d keep an eye on goes in writing.',
      },
      {
        title: 'Red Tags and Utility Disconnects in the East End',
        body: 'Utilities red-tag a service when they find something they won’t energise, like a panel in bad shape, grounding that’s missing, live conductors left exposed or a meter box that sat in river water. Cleaning up what you can see won’t take it off. A licensed repair of the real cause, then an inspector’s pass, will. Whatever was left on the door, keep it for us, because the reason is usually written there. A meter that’s been pulled or locked is off limits. Ohio law treats meddling with metering equipment as a crime, and on a faulted service it would send current into gear already found unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in the East End',
        body: 'Empty houses come with their own risk. After a long sale or a gap between renters, we go slower before re-energising, since an old panel and its grounding can lag well behind code. Some houses clear with a short inspection, others leave with a new panel, and you’re told which before work begins. The labour, the permit and the inspection cost you the same either way, old setup or correctly sized modern service, so we price both.',
      },
    ],
    whyTitle: 'Why Residents in the East End Choose Us for Disconnection Repair',
    whyParagraph:
      'Along the river, a dead service leaves a cold house and an idle sump pump, so we come quickly. Licensed electricians do the repair the utility wants, pull the permit, walk the inspector through and set the price first.',
    sharedFaqs: [
      {
        q: 'What will disconnection repair cost me in the East End?',
        a: 'That turns on the failure. Swapping a burned meter base is a much smaller day than replacing the entire service. We diagnose, then write down one flat figure before starting, and any charges from the utility are theirs and kept apart from ours. Homeowners who qualify can finance it.',
      },
      {
        q: 'How many days will I be without power in the East End?',
        a: 'Our part usually fits in a single day. The inspector keeps a separate calendar, so that visit is what stretches things out. Asking for it the moment the repair is booked, not after we finish, is how we keep the gap between the repair and the reconnect short.',
      },
      {
        q: 'Is it safe to put the meter back in myself?',
        a: 'Neither safe nor legal. That meter and its lock are utility property, and under Ohio law messing with them is a criminal matter. On top of that, the fault that triggered the shutoff hasn’t gone anywhere, and current would run right back into it. We repair the cause and handle the reconnect.',
      },
    ],
  },
};
